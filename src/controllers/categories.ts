import { OrderByType } from 'database'
import { execute } from '../db'

export const getAllCategories = async (order: OrderByType = 'asc') => {
  const sql = `SELECT * FROM category ORDER BY name ${order.toUpperCase()}`

  return await execute(sql, [])
}

export const getCategoryById = async (id: string, order: OrderByType = 'asc') => {
  const sql = `SELECT * FROM category WHERE id=? ORDER BY name ${order.toUpperCase()}`

  return await execute(sql, [id])
}