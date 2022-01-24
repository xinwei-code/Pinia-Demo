<template>
  <p>{{ mainStore.count }}</p>
  <p>{{mainStore.foo}}</p>
  <hr>
  <p>{{count}}</p>
  <p>{{mainStore.count10}}</p>


  <button @click="handleClick">修改数据</button>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useStore } from '../store'
const mainStore = useStore()
console.log(mainStore)

//这样拿到的数据会丢失响应式，是一次性的
// const { count } = mainStore

// 解决办法
//把解构出来的数据做 ref 响应式代理  js里取值需要  count.value
const {count} = storeToRefs(mainStore)

const handleClick = () => {
  //方式一：修改数据最简单的方式
  // mainStore.count++

  //方式二：如果需要修改多个数据，建议使用 $patch 批量更新
/*   mainStore.$patch({
    count:mainStore.count+1,
    foo:'hello'
  }) */

  //方式三：更好的批量更新方式——$patch 一个函数
/*   mainStore.$patch((state) => {
    state.count ++
    state.foo = '你好'
  }) */

  //方式四：逻辑比较多的时候可以封装到 action  做处理
  // mainStore.changeState(3)
}
</script>
