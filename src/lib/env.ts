export const ENVIROMENT = process.env.NODE_ENV
export const API_URI = process.env.API_URI

if (!ENVIROMENT) {
  throw new Error('NODE_ENV not found')
}
if (!API_URI) {
  throw new Error('API_URI not found')
}

export function isProduction () {
  return ENVIROMENT === 'production'
}

export function isDevelopment () {
  return ENVIROMENT === 'development'
}
