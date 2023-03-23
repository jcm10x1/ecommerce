<script lang="ts">
export default {
  name: 'FullScreenImage',
  props: {
    imagePath: {
      required: true,
      type: String
    }
  },
  emits: {
    close() {
      return true
    },
    shop() {
      return true
    }
  }
}
</script>
<template>
  <div class="modal-backdrop">
    <div class="modal">
      <button @click="$emit(`close`)">Close</button>
      <img :src="imagePath" alt="Selected Image" />
      <RouterLink :to="{ name: 'shop', params: { image_path: imagePath } }"> Shop </RouterLink>
    </div>
  </div>
</template>
<style scoped>
img {
  border-radius: 25px;
}
</style>
