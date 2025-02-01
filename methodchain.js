
// create calcualtor that support chain for arthmatic opeartion

class calcualtor {
    constructor(value = 0) {
        this.value = value;
    }

    add(num) {
        this.value += num;
        return this
    }

    subtract(num) {
        this.value -= num
        return this;
    }

    getValue() {
        return this.value
    }
}


const calc = new calcualtor()
const result = calc.add(5).subtract(2).getValue()
console.log(result)