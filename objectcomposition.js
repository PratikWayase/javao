 
// desgin job & person class then compose into worker class
 
class person {
    constructor(name) {
        this.name = name
    }
}

class job {
    constructor(title) {
        this.title = title
    }
}

class Worker {
    constructor(name, title) {
        this.person = new person(name)
        this.job = new job (title)
    }

    getInfo() {
        return `${this.person.name} is as ${this.job.title}`
    }
}

const worker = new Worker("LICE", "DEVELOPER")
console.log(worker.getInfo())