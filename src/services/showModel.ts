export interface Schedule {
  time: string
  days: string[]
}

export interface Rating {
  average: number
}

export interface Country {
  name: string
  code: string
  timezone: string
}

export interface Network {
  id: number
  name: string
  country: Country
  officialSite: String
}

export interface Externals {
  tvrage: number
  thetvdb: number
  imdb: string
}

export interface Image {
  medium: string
  original: string
}

export interface Self {
  href: string
}

export interface Links {
  self?: Self
  previousepisode?: Self
  show?: Self
  character?: Self
}

export interface Season {
  id: number
  url: string
  number: number
  name: string
  episodeOrder: number
  premiereDate: string
  endDate: string
  network: Network
  webChannel: string | null
  image: Image
  summary: string
  _links: Links
}

export interface Episode {
  id: number
  url: string
  name: string
  season: number
  number: number
  airdate: string
  airtime: string
  airstamp: string
  runtime: number
  image: Image
  summary: string
  _links: Links
}

export interface Person {
  id: number
  url: string
  country: Country
  birtday: string
  deathday: string | null
  image: Image
  _links: Links
}

export interface Character {
  id: number
  url: string
  name: string
  image: Image
  _links: Links
}

export interface Cast {
  person: Person
  character: Character
  self: boolean
  voice: boolean
}

export interface CastCredits {
  _links: Links
}

export interface Crew {
  interface: string
  person: Person
}

export interface CrewCredits {
  interface: string
  _links: Links
}

export interface Aka {
  name: string
  country: Country
}

export interface Embedded {
  show?: Show
  seasons?: Season[]
  episodes?: Episode[]
  cast?: Cast[]
  castcredits?: CastCredits[]
  crew?: Crew[]
  crewcredits?: CrewCredits[]
  akas?: Aka[]
}

export interface Show {
  id: number
  url: string
  name: string
  interface?: string
  language: string
  genres: string[]
  status: string
  runtime: number
  averageRuntime: number
  premiered: string
  ended: string
  officialSite: string
  schedule: Schedule
  rating: Rating
  weight?: number
  network?: Network
  webChannel?: string | null
  dvdCountry?: Country | null
  externals?: Externals
  image: Image
  summary: string
  updated?: number
  _links?: Links
  _embedded?: Embedded
}

export interface ShowSearch {
  score: number
  show: Show
}
