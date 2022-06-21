export class Game{
    username;
    validatename(name){
        return !/\d|_|-|\*|%|!]/.test(name)
    }
    askName(){
        let username  = prompt('Cual es tu nombre')   
        
        while(!this.validatename(username)){
            username = prompt('Opcion no valida')
        }
        return username
    }
    start(){
        this.username = this.askName()
        this.tutorial()
    }
    tutorial(){
        console.log("Este es el tutorial de juego")
    }
}