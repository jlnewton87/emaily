const dbUsername = process.env.MONGO_USER;
const dbPassword = process.env.MONGO_PASS;
const dbUrl = process.env.MONGO_URI

module.exports = {
  getConnectionString: () => `mongodb://${dbUsername}:${dbPassword}${dbUrl}`,
  googleClientID: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  cookieKey: process.env.SESSION_KEY
}