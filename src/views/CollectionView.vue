<script lang="ts">
import FullScreenImage from '@/components/FullScreenImage.vue'
import { getCollections } from '@/models/collection'

export default {
  name: 'CollectionView',
  props: {
    collection_name: {
      type: String,
      required: true
    }
  },
  components: {
    FullScreenImage
  },
  data() {
    return {
      collection: getCollections([this.collection_name])[0],
      fullScreenImagePath: ''
    }
  },
  methods: {
    onImageClick(imagePath: string) {
      this.fullScreenImagePath = imagePath
      console.log(imagePath)
    },
    closeFullScreen() {
      console.log('close')
      this.fullScreenImagePath = ''
    }
  }
}
</script>

<template>
  <main class="wrapper">
    <h1>{{ collection.name }}</h1>
    <h2>{{ collection.desc }}</h2>
    <div class="gallery">
      <div
        v-for="image in collection.imagePaths"
        :key="image"
        class="gallery-item"
        @click="onImageClick(image)"
      >
        <img :src="image" :alt="collection.name + ` ` + `image`" />
        <FullScreenImage
          @close="closeFullScreen()"
          v-if="fullScreenImagePath !== ``"
          :image-path="fullScreenImagePath"
        ></FullScreenImage>
      </div>
    </div>
  </main>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  text-align: center;
}
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 12px;
}

.gallery-item {
  position: relative;
  width: 100%;
  align-self: center;
}

.gallery-item img {
  display: block;
  width: 100%;
  border-radius: 25px;
}
</style>
