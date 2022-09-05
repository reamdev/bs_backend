import { execute } from '../db'

export const getAllCategories = async () => {
  const sql = 'SELECT * FROM category'
  return await execute(sql, [])
}

export const getCategoryById = async (id: string) => {
  const sql = 'SELECT * FROM category WHERE id=?'

  return await execute(sql, [id])
}