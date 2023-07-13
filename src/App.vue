<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import { ref } from 'vue'
import AppFooter from '@/components/AppFooter.vue';
import AppSearch from '@/components/AppSearch.vue';
import { useSearchedShowsStore } from '@/stores/searchedShows'
const search = ref<string>('')
const showSearchStore = useSearchedShowsStore()

</script>

<template>
  <header>
    <div class="title">
      <RouterLink to="/">
        <h1><span>VueTV</span></h1>
      </RouterLink>
      <AppSearch v-model="search"
        @update:model-value="(searchTerm) => showSearchStore.findShows(searchTerm as unknown as string)" />
    </div>
  </header>
  <main class="container">
    <RouterView />
  </main>
  <footer>
    <AppFooter />
  </footer>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  font-family: 'Fira Sans', sans-serif;
  box-sizing: border-box;

}

body {
  background-color: #01060b;
  margin: 0;
  padding: 0;
  font-size: 100%;
}

a {
  text-decoration: none;
}

header {
  background-color: #880c0c;
  margin: 0;
  padding: 1em;
  height: 10%
}

.title {
  display: flex;
  align-items: center;
}

.search {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

h1 {
  color: white;
  font-size: 2rem;
  padding: 1rem;
}

.container {
  width: 100%;
  min-height: 25vh;
  margin: 0 auto;
  position: relative;
  padding: 20px;
}

@media (max-height: 680px) {
  .container {
    min-height: 72vh;
  }
}

@media (min-height: 681px) and (max-height: 800px) {
  .container {
    min-height: 75.5vh;
  }
}

@media (min-height: 801px) and (max-height: 1024px) {
  .container {
    min-height: 79vh;
  }
}

@media (min-height: 1025px) {
  .container {
    min-height: 85vh;
  }
}
</style>