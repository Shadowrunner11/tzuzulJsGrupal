import { initial } from "./config/actions.js";
import { Menu } from "./models/menu.js";
async function start(){

    const { message, options } = initial
    
    const initialMenu = new Menu(message, options)
    
    const nextStep = await initialMenu.showMenu()
    
    await options[nextStep].action()
}

start()