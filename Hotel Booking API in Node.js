model/booking.js

const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  room: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Room',
    required: true
  },
  checkInDate: {
    type: Date,
    required: true
  },
  checkOutDate: {
    type: Date,
    required: true
  },
  totalPrice: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'cancelled', 'completed'],
    default: 'pending'
  },
  paymentStatus: {
    type: String,
    enum: ['pending', 'paid', 'refunded', 'failed'],
    default: 'pending'
  }
}, { timestamps: true });

// Prevent double booking
BookingSchema.index({ room: 1, checkInDate: 1, checkOutDate: 1 }, { unique: true });

module.exports = mongoose.model('Booking', BookingSchema);



// controller.booking.js//

const Booking = require('../models/Booking');
const Room = require('../models/Room');

// @desc    Get all bookings
// @route   GET /api/v1/bookings
exports.getBookings = async (req, res, next) => {
  try {
    const bookings = await Booking.find().populate('user room');
    res.status(200).json({ success: true, count: bookings.length, data: bookings });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

// @desc    Get single booking
// @route   GET /api/v1/bookings/:id
exports.getBooking = async (req, res, next) => {
  try {
    const booking = await Booking.findById(req.params.id).populate('user room');
    
    if (!booking) {
      return res.status(404).json({ success: false, error: 'Booking not found' });
    }
    
    res.status(200).json({ success: true, data: booking });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

// @desc    Get bookings for a user
// @route   GET /api/v1/users/:userId/bookings
exports.getUserBookings = async (req, res, next) => {
  try {
    const bookings = await Booking.find({ user: req.params.userId }).populate('room');
    res.status(200).json({ success: true, count: bookings.length, data: bookings });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

// @desc    Create new booking
// @route   POST /api/v1/bookings
exports.createBooking = async (req, res, next) => {
  try {
    const { roomId, checkInDate, checkOutDate, userId } = req.body;
    
    // Check room availability
    const room = await Room.findById(roomId);
    if (!room || !room.isAvailable) {
      return res.status(400).json({ success: false, error: 'Room not available' });
    }
    
    // Check for existing bookings for the same room and dates
    const existingBooking = await Booking.findOne({
      room: roomId,
      checkInDate: { $lt: new Date(checkOutDate) },
      checkOutDate: { $gt: new Date(checkInDate) },
      status: { $ne: 'cancelled' }
    });
    
    if (existingBooking) {
      return res.status(400).json({ success: false, error: 'Room already booked for these dates' });
    }
    
    // Calculate total price
    const days = (new Date(checkOutDate) - new Date(checkInDate)) / (1000 * 60 * 60 * 24);
    const totalPrice = room.price * days;
    
    const booking = await Booking.create({
      user: userId,
      room: roomId,
      checkInDate,
      checkOutDate,
      totalPrice
    });
    
    res.status(201).json({ success: true, data: booking });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

// @desc    Update booking
// @route   PUT /api/v1/bookings/:id
exports.updateBooking = async (req, res, next) => {
  try {
    let booking = await Booking.findById(req.params.id);
    
    if (!booking) {
      return res.status(404).json({ success: false, error: 'Booking not found' });
    }
    
    // Prevent changing dates if booking is confirmed
    if (booking.status === 'confirmed' && (req.body.checkInDate || req.body.checkOutDate)) {
      return res.status(400).json({ success: false, error: 'Cannot change dates of a confirmed booking' });
    }
    
    booking = await Booking.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    
    res.status(200).json({ success: true, data: booking });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

// @desc    Cancel booking
// @route   PUT /api/v1/bookings/:id/cancel
exports.cancelBooking = async (req, res, next) => {
  try {
    const booking = await Booking.findById(req.params.id);
    
    if (!booking) {
      return res.status(404).json({ success: false, error: 'Booking not found' });
    }
    
    // Check if booking can be cancelled
    if (booking.status === 'cancelled') {
      return res.status(400).json({ success: false, error: 'Booking already cancelled' });
    }
    
    // Check if it's too late to cancel
    const now = new Date();
    const checkIn = new Date(booking.checkInDate);
    const hoursUntilCheckIn = (checkIn - now) / (1000 * 60 * 60);
    
    if (hoursUntilCheckIn < 24) {
      return res.status(400).json({ success: false, error: 'Cannot cancel within 24 hours of check-in' });
    }
    
    booking.status = 'cancelled';
    booking.paymentStatus = 'refunded';
    await booking.save();
    
    res.status(200).json({ success: true, data: booking });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

// @desc    Check room availability
// @route   GET /api/v1/rooms/availability
exports.checkAvailability = async (req, res, next) => {
  try {
    const { checkInDate, checkOutDate, roomType } = req.query;
    
    // Find rooms of the requested type
    const rooms = await Room.find({ type: roomType });
    
    // Find bookings that overlap with the requested dates
    const bookings = await Booking.find({
      room: { $in: rooms.map(r => r._id) },
      checkInDate: { $lt: new Date(checkOutDate) },
      checkOutDate: { $gt: new Date(checkInDate) },
      status: { $ne: 'cancelled' }
    });
    
    // Get IDs of booked rooms
    const bookedRoomIds = bookings.map(b => b.room.toString());
    
    // Filter available rooms
    const availableRooms = rooms.filter(room => 
      !bookedRoomIds.includes(room._id.toString())
    );
    
    res.status(200).json({ success: true, count: availableRooms.length, data: availableRooms });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};
