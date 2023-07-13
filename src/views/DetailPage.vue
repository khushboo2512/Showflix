<script setup lang="ts">
import { useRoute } from 'vue-router'
import { onMounted, ref } from 'vue'

import ShowPoster from '@/components/ShowPoster.vue'
import { useShowsStore } from '@/stores/shows'
import type { Show } from '@/services/showModel'
import getShowDetail from '@/services/getShowDetail'

const routeInfo = useRoute()
const showId = routeInfo.params.id as unknown as number

const showsStore = useShowsStore()
const showName = ref<string | null>(null)
showName.value = showsStore.showNameById(showId) || null
const showData = ref<Show | null>(null)
const isLoading = ref(false)
const errMsg = ref('')


const loadShowDetails = async () => {
  isLoading.value = true
  errMsg.value = ''

  try {
    showData.value = await getShowDetail(showId)
  } catch (e) {
    const err = e as Error
    errMsg.value = err.message
  } finally {
    isLoading.value = false
  }
}

onMounted(async () => {
  loadShowDetails()
})
</script>

<template>
  <div class="details-page">
    <RouterLink to="/">
      <button class="details-page__back">Back</button>
    </RouterLink>

    <div v-if="isLoading" class="details-page__loader">
      <p>Loading...</p>
    </div>

    <div v-else-if="!!errMsg || !showData" class="details-page__refresh">
      <button label="Refresh" @click.stop="loadShowDetails()"></button>
    </div>

    <template v-else>
      <div class="details-page__sideInfo">
        <div class="details-page__sideInfo__posterImage">
          <ShowPoster :src="showData.image?.medium" :name="showData.name" />
          <h2 class="text-h2">Rating</h2>
          <div class="side-desc">{{ showData.rating.average }}</div>
        </div>

        <div class="details-page__sideInfo__details">
          <h1 class="text-h1 no-top-margin">{{ showData.name }}</h1>

          <h2 class="text-h5">Summary</h2>
          <div class="description" v-html="showData.summary"></div>
          <h2 class="text-h5">Genre</h2>
          <div>
            <span v-for="genre in showData.genres" :key="genre" class="genre">{{ genre }}</span>
          </div>
          <h2 class="text-h2">Premiere</h2>
          <div class="description">{{ showData.premiered }}</div>

          <h2 class="text-h2">Language</h2>
          <div class="description">{{ showData.language }}</div>

          <h2 class="text-h2">Status</h2>
          <div class="description">{{ showData.status }}</div>
        </div>
      </div>
    </template>
  </div>
</template>

<style lang="scss" scoped>
.details-page {
  .no-top-margin {
    margin-top: 0;
  }

  .genre {
    padding: 0px 10px 10px 10px;
    color: white;
  }

  &__refresh,
  &__loader {
    height: 100%;
    min-height: 300px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;

    &_title {
      margin-right: 20px;
    }
  }

  &__back {
    margin-bottom: 20px;
    padding: 10px;
    border-radius: 1dvi;
  }

  &__sideInfo {
    display: flex;
    padding: 5px;

    &__posterImage {
      flex: 0 0 210px;
    }

    &__details {
      flex: 1;
      padding-left: 20px;
    }
  }
}
.text-h2 {
  color: white;
  padding: 5px;
  font-weight: 400;
  margin-top: 10px;
  margin-left: 5px;
  display: inline-block;
}
.text-h1 {
  color: white;
  font-size: 2.125rem;
  letter-spacing: 0.00735em;
  padding: 5px;
}
.text-h5 {
  color: white;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 2rem;
  letter-spacing: normal;
  padding: 10px;
}
.side-desc {
  color: white;
  padding: 5px;
  font-weight: 100;
  font-size: 1rem;
  display: inline-block;
}
.description {
  color: white;
  padding: 10px;
  font-weight: 100;
  font-size: 1rem;
}
</style>