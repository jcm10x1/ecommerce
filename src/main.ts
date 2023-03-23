import { createApp } from 'vue'
import App from './App.vue'
import CollectionsListItem from './components/CollectionListItem.vue'
import CollectionsList from './components/CollectionsList.vue'
import router from './router'

import './assets/main.css'
import ProductCard from './components/ProductCard.vue'

const app = createApp(App)

app.use(router)

app.component('CollectionsList', CollectionsList)
app.component('CollectionListItem', CollectionsListItem)
app.component('ProductCard', ProductCard)

app.mount('#app')
