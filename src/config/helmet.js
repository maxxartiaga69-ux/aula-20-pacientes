import helmet from `helmet`

export const helmetMiddleware = helmet({
    hidePoweredBy: true,
    frameguard: { action: 'deny' },
    noSniff: true,
})