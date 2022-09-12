export { default as ProductRouter } from './products'
export { default as CategoryRouter } from './categories'

// Swagger Doc
/**
 * @swagger
 * components:
 *  schemas:
 *    Categoria:
 *      type: object
 *      properties:
 *        id:
 *          type: number
 *          descripcion: El ID de la categoria
 *        name:
 *          type: string
 *          descripcion: El nombre de la categoria
 *      example:
 *        id: 4
 *        name: bebida
 *
 *    Producto:
 *      type: object
 *      properties:
 *        id:
 *          type: number
 *          descripcion: El ID del producto
 *        name:
 *          type: string
 *          descripcion: El nombre del producto
 *        url:
 *          type: string
 *          descripcion: La URL de la imagen asociada al producto
 *        price:
 *          type: number
 *          descripcion: El precio del producto
 *        discount:
 *          type: number
 *          descripcion: El porcentaje de descuento
 *        category:
 *          type: number
 *          descripcion: El ID de la categoria asociada al producto
 *      example:
 *        id: 104
 *        name: ABSOLUT
 *        url: www.example.com/bebida.png
 *        price: 8990
 *        discount: 30
 *        category: 7
 *
 * /api/v1/products:
 *  get:
 *    summary: Nos devuelve los datos de los productos de la base de datos.
 *    tags: [Producto]
 *    parameters:
 *      - in: query
 *        name: categoryId
 *        description: El ID de la categoria, de la cual, queremos que sean los productos.
 *        schema:
 *          type: number
 *      - in: query
 *        name: limit
 *        description: El maximo de datos que queremos que traiga la peticion
 *        schema:
 *          type: number
 *      - in: query
 *        name: page
 *        description: Este campo es para la paginacion pertiendonos indicar en que pagina nos encontramos para obtener los datos.
 *        schema:
 *          type: number
 *      - in: query
 *        name: order
 *        description: Indica el tipo de orden que se debe seguir, este puede ser ascendente (asc) o desendente (desc)
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        descripcion: Un array de JSON de productos
 *        content:
 *          application/json:
 *            type: object
 *            properties:
 *              id:
 *                type: number
 *                descripcion: El ID del producto
 *              name:
 *                type: string
 *                descripcion: El nombre del producto
 *              url:
 *                type: string
 *                descripcion: La URL de la imagen asociada al producto
 *              price:
 *                type: number
 *                descripcion: El precio del producto
 *              discount:
 *                type: number
 *                descripcion: El porcentaje de descuento
 *              category:
 *                type: number
 *                descripcion: El ID de la categoria asociada al producto
 *
 * /api/v1/products/search:
 *  get:
 *    summary: Permite buscar productos por su nombre
 *    tags: [Producto]
 *    parameters:
 *      - in: query
 *        name: value
 *        description: Este campo contiene el valor del nombre a buscar para encontrar los productos que coincida con este.
 *        schema:
 *          type: string
 *      - in: query
 *        name: limit
 *        description: El maximo de datos que queremos que traiga la peticion
 *        schema:
 *          type: number
 *      - in: query
 *        name: page
 *        description: Este campo es para la paginacion pertiendonos indicar en que pagina nos encontramos para obtener los datos.
 *        schema:
 *          type: number
 *      - in: query
 *        name: order
 *        description: Indica el tipo de orden que se debe seguir, este puede ser ascendente (asc) o desendente (desc)
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        descripcion: Un array de JSON de productos
 *        content:
 *          application/json:
 *            type: object
 *            properties:
 *              id:
 *                type: number
 *                descripcion: El ID del producto
 *              name:
 *                type: string
 *                descripcion: El nombre del producto
 *              url:
 *                type: string
 *                descripcion: La URL de la imagen asociada al producto
 *              price:
 *                type: number
 *                descripcion: El precio del producto
 *              discount:
 *                type: number
 *                descripcion: El porcentaje de descuento
 *              category:
 *                type: number
 *                descripcion: El ID de la categoria asociada al producto
  * /api/v1/categories:
 *  get:
 *    summary: Devuelve datos sobre la o las categorias
 *    tags: [Categoria]
 *    parameters:
 *      - in: query
 *        name: id
 *        description: Es el valor del ID de la categoria, en caso no se envie se entregan las las categorias.
 *        schema:
 *          type: number
 *      - in: query
 *        name: order
 *        description: Indica el tipo de orden que se debe seguir, este puede ser ascendente (asc) o desendente (desc)
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        descripcion: Un array de JSON de productos
 *        content:
 *          application/json:
 *            type: object
 *            properties:
 *              id:
 *                type: number
 *                descripcion: El ID de la categoria
 *              name:
 *                type: string
 *                descripcion: El nombre de la categoria
 *            example:
 *              id: 4
 *              name: bebida
 */