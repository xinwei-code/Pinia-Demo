<template>
  <ul>
    <li v-for="(item, index) in productsStore.all" :key="index">
      {{item.title}} - {{item.price}}
      <br />
      <button :disabled="!item.inventory" @click="cartStore.addProductToCart(item)">添加到购物车</button>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { useCartStore } from '../store/cart';
import {useProductsStore} from '../store/products'
const productsStore = useProductsStore()
const cartStore = useCartStore()


//加载所有数据
productsStore.loadAllProducts()

</script>
