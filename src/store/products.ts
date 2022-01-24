import { defineStore } from 'pinia'
import { getProducts, IProduct } from '../api/shop'

export const useProductsStore = defineStore('products', {
  state: () => {
    return {
      all: [] as IProduct[],
    }
  },
  getters: {},
  actions: {
    //加载所有商品
    async loadAllProducts() {
      const res = await getProducts()
      this.all = res
    },
    //更新库存
    decreamentProduct(product: IProduct) {
      const ret = this.all.find(item => item.id === product.id)
      if (ret) {
        //此处不建议使product--，因为product不一定是响应式的
        ret.inventory--
      }
    },
  },
})
