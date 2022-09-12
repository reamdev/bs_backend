// Modelo para las Categorias
export class Category {
  private id: number
  private name: string

  constructor(id: number, name: string) {
    this.id = id
    this.name = name
  }

  getId(): number {
    return this.id
  }

  getName(): string {
    return this.name
  }

  setId(id: number): void {
    this.id = id
  }

  setName(name: string): void {
    this.name = name
  }
}
