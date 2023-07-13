import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

import getAllShows from '@/services/getAllShows'
import type { Show } from '@/services/showModel'

export const useShowsStore = defineStore('shows', () => {
  const isLoading = ref(false)
  const errMsg = ref<string>('')

  const shows = ref<Show[]>([])
  const param = ref(0)

  const hasMoreShows = ref(true)

  const loadAllShows = async () => {
    isLoading.value = true
    errMsg.value = ''

    try {
      const data = await getAllShows(param.value)
      // Sort the result based on show rating
      data.sort((a, b) => b.rating.average - a.rating.average)
      shows.value = shows.value.concat(data)
      param.value++

      if (data.length === 0) {
        hasMoreShows.value = false
      }
    } catch (e) {
      const err = e as Error
      errMsg.value = err.message
    } finally {
      isLoading.value = false
    }
  }

  const showsCount = computed(() => shows.value.length)

  const showNameById = computed(() => {
    return (id: number) => {
      const show = shows.value.find((show) => {
        return show.id == id
      })
      return show?.name
    }
  })

  //  A computed property that returns a function, it takes a genre parameter and filters the shows array based on that genre
  const getShowsByGenre = computed(() => {
    const genreFilter = (genre: string) => {
      return shows.value.filter((show) => show.genres.includes(genre));
    };
    return genreFilter;
  });

  const allGenres = computed(() => {
    const allGenres = new Set<string>();
    shows.value.forEach((show) => {
      show.genres.forEach((genre) => {
        allGenres.add(genre);
      });
    });
    return allGenres;
  });

  return {
    shows,
    isLoading,
    errMsg,
    hasMoreShows,
    loadAllShows,
    showsCount,
    showNameById,
    getShowsByGenre,
    allGenres
  }
})
