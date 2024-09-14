export const ENVIROMENT = process.env.NODE_ENV

if (!ENVIROMENT) {
  throw new Error('NODE_ENV not found')
}

export function isProduction () {
  return ENVIROMENT === 'production'
}

export function isDevelopment () {
  return ENVIROMENT === 'development'
}
