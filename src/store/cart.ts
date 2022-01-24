import { defineStore } from 'pinia'
import { buyProducts, IProduct } from '../api/shop'
import { useProductsStore } from './products'

// {id,title,price,quantity}
type CartProduct = {
  quantity: number
} & Omit<IProduct, 'inventory'> //合并Iproduct接口并过滤掉inventory属性

export const useCartStore = defineStore('cart', {
  state: () => {
    return {
    cartProducts: [] as CartProduct[],
      checkoutStatus: null as null | string, //结算的状态（用于视图展示）
    }
  },
  getters: {
    totalPrice(state) {
      return state.cartProducts.reduce((pre, cur) => {
        return (pre += cur.price * cur.quantity)
      }, 0)
    },
  },
  actions: {
    //封装业务逻辑，不建议把复杂业务逻辑放到组件
    addProductToCart(product: IProduct) {
      // this.cartList.push(product)

      //检查是否有库存
      if (product.inventory < 1) {
        return
      }

      //判断购物车中是否有该商品
      const cartItem = this.cartProducts.find(item => item.id === product.id)

      //如果有，则商品数量加一
      if (cartItem) {
        cartItem.quantity++
      } else {
        //否则，将商品添加到购物车
        this.cartProducts.push({
          id: product.id,
          title: product.title,
          price: product.price,
          quantity: 1, //第一次加到购物车的商品数量就是  1
        })
      }
      //更新商品库存   (不建议直接更改product--，因为无法保证product（只是一个形参）是响应式的，应该在拥有该数据的容器中修改)
      const productStore = useProductsStore()
      productStore.decreamentProduct(product)
    },

    //结算
    async checkout() {
      const ret = await buyProducts()
      this.checkoutStatus = ret ? '成功' : '失败'

      if (ret) {
        //清空购物车
        this.cartProducts = []
      }
    },
  },
})
