<script setup lang="ts">
import { getCollections } from '@/models/collection'
</script>

<template>
  <main>
    <h1>Welcome!</h1>
    <h3>
      Welcome! this is the website to view and order Jacob's pictures. This will replace the current
      website in the coming months once it is complete and proven stable.
    </h3>
    <button onclick="window.location.href=`https://calendars.1x1.photography`">
      Order Calendars Here!
    </button>
    <CollectionsList title="Featured Collections" :collections="getCollections([`featured`])" />
    <h2>Need help? Have a comment? Anything else?</h2>
    <a href="mailto:jacob@1x1.photography">Email Us</a>
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
* {
  display: flex;
  flex-direction: column;
}
</style>
