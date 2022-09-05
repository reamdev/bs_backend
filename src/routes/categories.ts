import { getAllCategories, getCategoryById } from '../controllers'
import { Router } from 'express'

const router = Router()

router.get('/', async (req, res) => {
  const { id } = req.query

  if (id !== null && id !== undefined) {
    const response = await getCategoryById(id as string)
    console.log(response)
    return res.send(response)
  }

  const response = await getAllCategories()

  return res.send(response)
})

export default router
