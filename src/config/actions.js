import { Game } from "../controllers/game.js"
import { menuConfig } from "./controler/config.controler.js"


const initial = {
    message : 'Bienvenidos a esta Tierra',
    options : [
        {message:'Nueva partida', action :async()=>{new Game().start() }},
        {message:'Cargar partida'},
        {message:'Configuracion', action: async ()=>{await menuConfig.showMenu()}},
        {message:'Salir del juego',action: ()=>{Deno.exit()}},
    ]
}

export { initial }