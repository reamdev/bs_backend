import { config } from 'dotenv'

// Cargar archivo .env
config()

// Exportando datos del archivo .env
export default {
  app: {
    port: process.env.PORT || 80
  },
  db: {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'dev',
    password: process.env.DB_PASSWORD || 'dev',
    database: process.env.DB_NAME || 'dev'
  }
}