<script lang="ts">
import { cartInstance } from '@/models/cart'
export default {
  name: 'CartView',
  data() {
    return {
      cartInstance
    }
  }
}
</script>

<template>
  <main>
    <h1>Cart</h1>
    <h3>Items:</h3>
    <ul>
      <li v-for="item in cartInstance.items" :key="item">
        {{ item }}
      </li>
      <li v-if="cartInstance.items.length === 0">There are no items yet. Start shopping!</li>
    </ul>
  </main>
</template>

<style scoped></style>
