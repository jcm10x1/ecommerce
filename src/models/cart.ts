class Cart {
  items: string[]
  constructor(items: string[]) {
    this.items = items
  }
}

export const cartInstance = new Cart([])
