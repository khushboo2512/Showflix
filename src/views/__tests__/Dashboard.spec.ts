import { beforeEach,afterEach,describe, expect, it, vi } from 'vitest'
import { mount,shallowMount,VueWrapper } from '@vue/test-utils'
import Dashboard from '../Dashboard.vue'
import SearchResult from '../SearchResult.vue'
import ShowsCarousel from '../ShowsCarousel.vue'
import { useShowsStore } from '@/stores/shows'
import { useSearchedShowsStore } from '@/stores/searchedShows'

vi.mock('@/stores/shows', () => ({
    useShowsStore: vi.fn(() => ({
      showsCount: 0,
      shows: [],
      isLoading: false,
      loadAllShows: vi.fn()
    }))
  }))
  
  vi.mock('@/stores/searchedShows', () => ({
    useSearchedShowsStore: vi.fn(() => ({
      query: '',
      searchData: [],
      isLoading: false
    }))
  }))

describe('Dashboard', () => {
    let wrapper: VueWrapper<any>
  
    beforeEach(() => {
      wrapper = shallowMount(Dashboard)
    })  
      
      it('renders ShowsCarousel components when query does not exist in searchedShowsStore', async () => {
        // Set up the initial state of the component
        wrapper.vm.searchedShowsStore.query = ''
      
        // Wait for Vue to update the component
        await wrapper.vm.$nextTick()
      
        // Assert that the ShowsCarousel components are rendered
        expect(wrapper.findComponent(ShowsCarousel).exists()).toBe(true)
      })
  })