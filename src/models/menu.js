import { speedConfig } from '../config/default.js'

class Menu{
    /**
     * @param  { String } initialMessage
     * @param  { Array } options
     * @param  { Number } speed = 150
     */
    constructor(initialMessage, options, speed = speedConfig.MEDIUM){
        this.initialMessage = initialMessage
        this.options = options
        this.speed = speed

    }

    validateInput(input, limit){
        return input !== NaN && input < limit
    }
    async showMenu(){
        await new Promise( resolve =>{
            let charPosition = 1
            const intervalChars = setInterval(()=>{
                if(charPosition===this.initialMessage.length){
                    clearInterval(intervalChars)
                    resolve()
                }
                console.clear()
                console.log(this.initialMessage.slice(0,charPosition))
                charPosition++
            },this.speed)

        })
       
        for (let index  = 0; index < this.options.length; index++ ){
            await new Promise( resolve =>{
                setTimeout(()=>{
                    console.log(`${index}.- ${this.options[index].message}`)
                    resolve()
                }, this.speed)

            })
        }

        let userInput = Number(prompt(""))
        while(!this.validateInput(userInput, this.options.length)){
            userInput  = Number(prompt("Opcion no valida"))
        } 

        return userInput
    }
}

export { Menu }