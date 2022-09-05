import { initConnection } from './db'
import express from 'express'
import morgan from 'morgan'
import { CategoryRouter, ProductRouter } from './routes'
import cors from 'cors'
import config from './config'

initConnection()
const app = express()

// middleware
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.get('/', (_, res) => {
  res.send('Welcome to BS_Backend')
})
app.use('/api/v1/products', ProductRouter)
app.use('/api/v1/categories', CategoryRouter)

app.listen(config.app, () => {
  console.log(`Server is running on port ${config.app.port}`)
})
