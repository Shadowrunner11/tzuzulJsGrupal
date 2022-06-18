class Bar {
    constructor(designs, seconds) {
        this.designs = designs
        this.seconds = seconds
    }
    loader() {
        new Promise(res => {
            let cont = 1
            const interval = setInterval(() => {
                console.clear()
                console.log(`%c${this.designs.repeat(cont++)}`, "color:yellow")
            }, 100)
            setTimeout(() => {
                clearInterval(interval)
                console.clear()
                res(true)
            }, this.seconds)
        })
    }
}