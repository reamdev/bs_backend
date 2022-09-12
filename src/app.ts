import { initConnection } from './db'
import express from 'express'
import morgan from 'morgan'
import { CategoryRouter, ProductRouter } from './routes'
import cors from 'cors'
import config from './config'
import swaggerUI from 'swagger-ui-express'
import swaggerJsDoc from 'swagger-jsdoc'
import path from 'path'

initConnection()
const app = express()
const swaggerSpec = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'BSALE Backend Doc',
      description: 'Una API para la prueba tecnica para la empresa BSALE',
      version: '1.0.0'
    },
    servers: [
      {
        url: 'https://reambsbackend.herokuapp.com'
      }
    ]
  },
  apis: [`${path.join(__dirname, './routes/*.js')}`],
}

// middleware
app.use(express.static('public'))
app.use('/static', express.static('public'))
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(swaggerSpec)))
app.use('/api/v1/products', ProductRouter)
app.use('/api/v1/categories', CategoryRouter)

app.get('/', (_, res) => {
  res.redirect('/doc')
})

app.listen(config.app, () => {
  console.log(`Server is running on port ${config.app.port}`)
})
