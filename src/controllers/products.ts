import { OrderByType } from 'database'
import { execute } from '../db'

// Recibe los parametros del router y los procesa para solicitar los productos
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

  return await execute(sql, params)
}

// Recibe los parametros del router y los procesa para buscar productos que coincidan con el criterio
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
