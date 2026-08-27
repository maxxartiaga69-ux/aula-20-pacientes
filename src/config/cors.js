const origensPermitidas = [
    'http://localhost:5173',
    'http://localhost:3030'
]

export const corsOptions = {
    origin: (origin, callback)=> {
        if(!origin || origensPermitidas.includes(origin)){
            callback(null, true)
        }else{
            callback(new Error("Acesso bloqueado pela pol[itica de CORS."))
        }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}