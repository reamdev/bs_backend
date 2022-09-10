import { getAllCategories, getCategoryById } from '../controllers'
import { Router } from 'express'

const router = Router()

router.get('/', async (req, res) => {
  const { id } = req.query
  const orderBy = (req.query.order && (req.query.order === 'asc' || req.query.order === 'desc')) ? req.query.order : 'asc'

  if (id !== null && id !== undefined) {
    const response = await getCategoryById(id as string, orderBy)
    console.log(response)
    return res.send(response)
  }

  const response = await getAllCategories(orderBy)

  return res.send(response)
})

export default router
