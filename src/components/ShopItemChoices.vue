<script lang="ts">
import { cartInstance } from '@/models/cart'

export default {
  name: 'ShopItemChoicePopup',
  props: {
    imagePath: {
      required: true,
      type: String
    },
    itemName: {
      type: String,
      required: true
    }
  },
  emits: {
    close() {
      return true
    }
  },
  methods: {
    addToCart() {
      cartInstance.items.push(this.itemName)
    },
    checkout() {},
    edit() {}
  }
}
</script>
<template>
  <div class="modal-backdrop">
    <div class="modal">
      <button @click="$emit(`close`)">Close</button>
      <RouterLink @click="addToCart()" :to="{ name: `cart` }">Add to Cart</RouterLink>
      <button @click="edit()">Edit</button>
      <button @click="checkout()">Buy Now</button>
    </div>
  </div>
</template>
<style scoped>
img {
  border-radius: 25px;
}
</style>
