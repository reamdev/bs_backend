import { getAllProducts, searchProduct } from '../controllers'
import { Router } from 'express'

const router = Router()

router.get('/', async (req, res) => {
  const categoryId = req.query.category ? String(req.query.category) : ''
  const limit = req.query.limit ? Number(req.query.limit) : 50
  const offset = (((Number(req.query.page) > 1) && req.query.page) ? Number(req.query.page) - 1 : 0) * 10

  const response = await getAllProducts(categoryId, limit, offset)

  res.send(response)
})

router.get('/search', async (req, res) => {
  const search = req.query.value ? String(req.query.value) : ''
  const limit = req.query.limit ? Number(req.query.limit) : 50
  const offset = (((Number(req.query.page) > 1) && req.query.page) ? Number(req.query.page) - 1 : 0) * 10

  const response = await searchProduct(search, limit, offset)

  res.send(response)
})

export default router
