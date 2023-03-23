<script setup lang="ts">
import { getCollections } from '@/models/collection'
</script>

<template>
  <main>
    <h1>Want to order something?</h1>
    <h2>Here's how:</h2>
    <ol>
      <li>
        Find the photo you want printed on something. Each collection will take you to all of the
        related photos.
      </li>
      <li>Click on the "Order" button</li>
      <li>Choose the product you want the photo printed on</li>
      <li>Make any customizations with the editor</li>
      <li>Add to cart and checkout from there OR</li>
      <li>Checkout directly from the product page.</li>
    </ol>
    <CollectionsList title="All Photo Collections" :collections="getCollections()" />
  </main>
</template>

<style scoped>
.CollectionsList {
  background: rgba(179, 179, 179, 0.408);
  color: #007aff;
  border-radius: 25px;
}

.CollectionsList :deep(.CollectionListItem) {
  background: #007aff;
  color: whitesmoke;
  border-radius: 18px;
}
</style>
