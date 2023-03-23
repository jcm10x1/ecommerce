<script lang="ts">
import ShopItemChoices from './ShopItemChoices.vue'
export default {
  name: 'ProductCard',
  components: {
    ShopItemChoices
  },
  props: {
    name: {
      required: true,
      type: String
    },
    productImagePath: {
      required: true,
      type: String
    },
    selectedImagePath: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    price: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      showShopChoices: false
    }
  },
  methods: {
    closeChoices() {
      this.showShopChoices = false
    },
    openChoices() {
      this.showShopChoices = true
    }
  }
}
</script>
<template>
  <div class="product-card" @click="openChoices()">
    <h1>{{ name }}</h1>
    <h2>{{ price }}</h2>
    <img :src="productImagePath" alt="product sample image" />
    <h3>{{ description }}</h3>
    <ShopItemChoices
      :itemName="name"
      v-if="showShopChoices"
      @close="closeChoices()"
      :imagePath="selectedImagePath"
    ></ShopItemChoices>
  </div>
</template>
<style scoped>
.product-card {
  background: #007aff;

  border-radius: 25px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  gap: 8px;
  padding: 12px;
  color: #fff;
}
img {
  max-width: 20%;
  border-radius: 18px;
}
</style>
