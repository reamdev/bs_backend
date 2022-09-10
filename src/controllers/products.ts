import { OrderByType } from 'database'
import { execute } from '../db'

export const getAllProducts = async (categoryId = '', order: OrderByType = 'asc', limit = 12, offset = 0) => {
  let sql = 'SELECT * FROM product'
  let params: Array<string | number> = []

  if (categoryId !== '') {
    sql += ' WHERE category = ?'
    params = [...params, categoryId]
  }

  sql += ` ORDER BY name ${order}`
  sql += ' LIMIT ? OFFSET ?'
  params = [...params, limit, offset]

  // const sql = categoryId !== '' ? 'SELECT * FROM product WHERE category = ? LIMIT ? OFFSET ?' : 'SELECT * FROM product LIMIT ? OFFSET ?'
  // const params = categoryId !== '' ? [categoryId, limit, offset] : [limit, offset]
  return await execute(sql, params)
}

export const searchProduct = async (search = '', order: OrderByType = 'asc', limit = 12, offset = 0) => {
  const sql = `
    SELECT
      product.id,
      product.name,
      product.url_image,
      product.price,
      product.discount,
      category.name as category
    FROM product
      INNER JOIN category ON product.category = category.id
    WHERE LOWER(product.name) LIKE LOWER(?)
      OR LOWER(category.name) LIKE LOWER(?)
    ORDER BY name ${order}
    LIMIT ?
    OFFSET ?
  `
  return await execute(sql, [`%${search}%`, `%${search}%`, limit, offset])
}
