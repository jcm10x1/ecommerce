<script lang="ts">
import { Collection } from '@/models/collection'

export default {
  name: 'CollectionListItem',
  props: {
    collection: {
      type: Collection,
      required: true
    }
  }
}
</script>
<template>
  <RouterLink
    :to="{ name: 'collection', params: { collection_name: collection.name } }"
    class="CollectionListItem"
  >
    <img v-bind:src="collection.thumbnailPath" :alt="collection.name + `thumbnail image`" />
    <h1>{{ collection.name }}</h1>
    <h3>{{ collection.desc }}</h3>
  </RouterLink>
</template>

<style scoped>
.CollectionListItem {
  display: grid;
  padding: 8px;
  gap: 8px;
  grid-template-rows: 40px 80px;
  grid-template-columns: 120px 1fr;
  margin: 0;
}
img {
  margin: auto;
  grid-row: 1/3;
  max-width: 120px;
}
h1,
h3 {
  grid-column-start: 2;
  grid-column-end: 3;
}
</style>
