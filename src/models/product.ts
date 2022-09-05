export class Product {
  private id: number
  private name: string
  private url_image: string
  private price: number
  private discount: number
  private category: number

  constructor(id: number, name: string, url_image: string, price: number, discount: number, category: number) {
    this.id = id
    this.name = name
    this.url_image = url_image
    this.price = price
    this.discount = discount
    this.category = category
  }

  getId(): number {
    return this.id
  }

  getName(): string {
    return this.name
  }

  getURLImage(): string {
    return this.url_image
  }

  getPrice(): number {
    return this.price
  }

  getDiscount(): number {
    return this.discount
  }

  getCategory(): number {
    return this.category
  }

  setId(id: number): void {
    this.id = id
  }

  setName(name: string): void {
    this.name = name
  }

  setURLImage(urlImage: string): void {
    this.url_image = urlImage
  }

  setPrice(price: number): void {
    this.price = price
  }

  setDiscount(discount: number): void {
    this.discount = discount
  }

  setCategory(categoryId: number): void {
    this.category = categoryId
  }
}
