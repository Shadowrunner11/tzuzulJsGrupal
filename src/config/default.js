
const speedConfig = {
        FAST:50,
        MEDIUM:100,
        SLOW:150
}

const initial = {
    message : 'Bienvenidos a esta Tierra',
    options : [
        {message:'Nueva partida'},
        {message:'Cargar partida'},
        {message:'Configuracion'},
        {message:'Salir del juego'},
    ]
}

Object.freeze(speedConfig)

export { speedConfig, initial }