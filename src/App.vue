<template>
  <h1>Pinia - 购物车示例</h1>
  <hr />
  <h2>商品列表</h2>
  <ProductList />
  <hr />
  <ShoppingCart />
</template>

<script setup lang="ts">
import ProductList from './components/ProductList.vue'
import ShoppingCart from './components/ShoppingCart.vue'
</script>

<style>
</style>


<!-- <script setup lang="ts">

import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
 -->