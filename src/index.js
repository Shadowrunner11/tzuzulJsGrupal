import { menuConfig } from "./config/controler/config.controler.js";
import { initial } from "./config/default.js";
import { Menu } from "./models/menu.js";

const { message, options } = initial

const initialMenu = new Menu(message, options)

initialMenu.showMenu()
const option = prompt('')
menuConfig.showMenu()