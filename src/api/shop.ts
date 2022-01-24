/**
 * Mocking client-server processing
 */
/* const _products = [
  { id: 1, title: 'iPad 4 Mini', price: 500.01, inventory: 2 },
  { id: 2, title: 'H&M T-Shirt White', price: 10.99, inventory: 10 },
  { id: 3, title: 'Charli XCX - Sucker CD', price: 19.99, inventory: 5 },
]

export default {
  getProducts(cb) {
    setTimeout(() => cb(_products), 100)
  },

  buyProducts(products, cb, errorCb) {
    setTimeout(() => {
      // simulate random checkout failure.
      Math.random() > 0.5 || navigator.webdriver ? cb() : errorCb()
    }, 100)
  },
}
 */

export interface IProduct {
  id: number
  title: string
  price: number
  inventory: number
}

const _products: IProduct[] = [
  { id: 1, title: 'iPad 4 Mini', price: 500.01, inventory: 2 },
  { id: 2, title: 'H&M T-Shirt White', price: 10.99, inventory: 10 },
  { id: 3, title: 'Charli XCX - Sucker CD', price: 19.99, inventory: 5 },
]

// 添加商品
export const getProducts = async () => {
    await wait(100)
    return _products
}

//结算商品
export const buyProducts = async () => {
    await wait(100)
    return Math.random() > 0.5
}

//基于promise的简易定时器
async function wait(num: number) {
  return new Promise(resolve => setTimeout(resolve, num))
}
