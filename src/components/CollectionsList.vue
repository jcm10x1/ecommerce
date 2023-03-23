<script lang="ts">
import type { Collection } from '@/models/collection'
export default {
  name: 'CollectionsList',
  props: {
    collections: {
      type: Array<Collection>,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<template>
  <div class="CollectionsList">
    <h1>{{ title }}</h1>
    <ul>
      <li v-for="collection in collections" :key="collection.name">
        <CollectionListItem :collection="collection" />
      </li>
    </ul>
  </div>
</template>

<style scoped>
ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.CollectionsList {
  margin: 0;
  width: 100%;
  padding: 16px;
}
</style>
