
const speedConfig = {
        FAST:50,
        MEDIUM:100,
        SLOW:150
}

const initial = {
    message : 'Welcome to my game',
    options : [
        {message:'Opcion 1'},
        {message:'Opcion 2'},
        {message:'Opcion 3'}
    ]
}

Object.freeze(speedConfig)

export { speedConfig, initial }