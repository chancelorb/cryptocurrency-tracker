module.exports = process.env.DATABASE_url || {
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5432,
  database: process.env.DB_NAME || 'cryptoApp'
}
