export const CLIENT_ID = process.env.CLIENT_ID
export const CLIENT_SECRET = process.env.CLIENT_SECRET

if (!CLIENT_ID) {
  throw new Error('CLIENT_ID not found')
}
if (!CLIENT_SECRET) {
  throw new Error('CLIENT_SECRET not found')
}
