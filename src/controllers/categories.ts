import { OrderByType } from 'database'
import { execute } from '../db'

// Recibe los parametros del router y los procesa para solicitar las categorias
export const getAllCategories = async (order: OrderByType = 'asc') => {
  const sql = `SELECT * FROM category ORDER BY name ${order.toUpperCase()}`

  return await execute(sql, [])
}

// Recibe los parametros del router y los procesa para solicitar la categoria del id respectivo
export const getCategoryById = async (id: string, order: OrderByType = 'asc') => {
  const sql = `SELECT * FROM category WHERE id=? ORDER BY name ${order.toUpperCase()}`

  return await execute(sql, [id])
}