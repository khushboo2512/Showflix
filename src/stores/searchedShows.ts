import { ref } from 'vue'
import { defineStore } from 'pinia'

import type { Show } from '@/services/showModel'
import getSearchShows from '@/services/getSearchShows'

export const useSearchedShowsStore = defineStore('searchedShows', () => {
  const searchData = ref<Show[]>([])

  const isLoading = ref(false)
  const error = ref<string>('')
  const query = ref<string>('')

  const findShows = async (searchTerm: string) => {
    isLoading.value = true
    error.value = ''
    query.value = searchTerm
    try {
      const result = await getSearchShows(searchTerm)
      searchData.value = result

    } catch (e) {
      const err = e as Error
      error.value = err.message
    } finally {
      isLoading.value = false
    }
  }

  return { searchData, isLoading, error, query, findShows }
})
