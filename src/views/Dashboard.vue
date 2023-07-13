<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'

import SearchResult from './SearchResult.vue'
import ShowsCarousel from './ShowsCarousel.vue';
import { useShowsStore } from '@/stores/shows'
import { useSearchedShowsStore } from '@/stores/searchedShows'

const searchedShowsStore = useSearchedShowsStore()
const showsStore = useShowsStore()

onMounted(async () => {
  if (showsStore.showsCount === 0) {
    showsStore.loadAllShows()
  }
})
</script>

<template>
  <div>
    <SearchResult v-if="searchedShowsStore.query.length > 0" title="Search results"
      no-match-text="There are no shows matching your search criteria." load-more-text="Load more shows"
      :shows="searchedShowsStore.searchData" :is-loading="searchedShowsStore.isLoading" />

    <template v-else>
      <ShowsCarousel title="Shows" no-results-text="There are no shows to display yet." :shows="showsStore.shows"
        :poster-width="200" :is-loading="showsStore.isLoading"/>
      <ShowsCarousel v-for="genre in showsStore.allGenres" :key="genre" :title="genre"
        :shows="showsStore.getShowsByGenre(genre)" :poster-width="200" :is-loading="showsStore.isLoading"
        no-results-text="There are no shows to display yet." />
    </template>
  </div>
</template>

<style lang="scss" scoped>
.search-container {
  display: flex;
  align-items: center;
  height: 60px;
}

input {
  border: 0;
  padding: 10px 10px;
  width: 25%;
  font-size: 1.1em;
  outline: 0;
  color: black;
  background-color: white;
  border-radius: 20px;
}

button {
  padding: 0 10px 0 20px;
  border: 0;
  outline: 0;
  background-color: transparent;

  .icon-search {
    color: white;
  }
}
</style>