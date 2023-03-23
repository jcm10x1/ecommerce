<script lang="ts">
import mugImage from '@/assets/mock_images/product/mug.png'
import pillowImage from '@/assets/mock_images/product/pillow.png'
import printImage from '@/assets/mock_images/product/print.png'
export default {
  name: 'ShopView',
  props: {
    image_path: {
      required: true,
      type: String
    }
  },
  data() {
    return {
      mugImage: mugImage,
      printImage: printImage,
      pillowImage: pillowImage
    }
  }
}
</script>
<template>
  <main>
    <img :src="image_path" alt="Selected image" />
    <h1>Shop</h1>
    <ProductCard
      name="11x14 Print"
      :productImagePath="printImage"
      :selectedImagePath="image_path"
      description="A print on luster paper that can be framed or matted."
      price="$9"
    ></ProductCard>
    <ProductCard
      name="11oz Mug"
      :productImagePath="mugImage"
      :selectedImagePath="image_path"
      description="Dishwasher and microwave safe."
      price="$12"
    ></ProductCard>
    <ProductCard
      name="12x12 Linen Decor Pillow"
      :productImagePath="pillowImage"
      :selectedImagePath="image_path"
      description="Machine washable"
      price="$15"
    ></ProductCard>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}
img {
  max-width: 30%;
  max-height: 25%;
  border-radius: 25px;
}
</style>
