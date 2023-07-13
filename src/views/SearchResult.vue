<script setup lang="ts">
import { RouterLink } from 'vue-router'
import ShowPoster from '@/components/ShowPoster.vue'
import type { Show } from '@/services/showModel'

withDefaults(
  defineProps<{
    title: string
    loadMoreText?: string
    noMatchText?: string
    shows: Show[]
    isLoading?: boolean
  }>(),
  {
    loadMoreText: 'Load more shows',    
    noMatchText: 'There are no shows to display.',
    isLoading: false,    
  }
)
</script>

<template>
  <div class="search-list">
    <h1 class="text-h1">{{ title }}</h1>
    <template v-if="shows.length > 0">
      <ul>
        <li v-for="show in shows" :key="show.id">
          <RouterLink :to="`/show/${show.id}`">
            <transition name="slide" :duration="500" appear>
              <ShowPoster :src="show.image?.medium" :name="show.name" />
            </transition>
          </RouterLink>
        </li>
      </ul>
    </template>

    <div class="description" v-else-if="!!noMatchText">{{ noMatchText }}</div>

  </div>
</template>

<style lang="scss" scoped>
.search-list {
  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;

    li {
      display: inline-block;
      margin: 0px 10px 10px 0px;
    }
  }
  .load-more {
    margin-right: 20px;
  }
}
.text-h1 {
    color:white;
    font-size: 2.125rem;
    font-weight: 500;
    line-height: 2.5rem;
    letter-spacing: 0.00735em;
    padding: 5px;
}
.description{
    color:white;
    padding: 10px;
    font-weight: 100;
    font-size: 1rem;
}
</style>@/services/showModel