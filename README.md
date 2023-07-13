# browse-tvshows-vue

The TV show streaming application provides an intuitive and interactive UI for users to browse and stream their favorite TV shows. By using Vue.js and TypeScript, the application benefits from a scalable and maintainable codebase. The client-side architecture ensures a smooth user experience, while the server-side APIs handle the data retrieval and serve it to the client.

## Architecture
The chosen architecture for this application follows a client-server model, where the client-side is built using Vue.js and the server-side provides the necessary APIs to fetch and serve TV show data.Below are the main libraries used:-

Vue.js: Vue.js is a progressive JavaScript framework that provides an efficient and flexible way to build user interfaces. It offers features like component-based development, reactivity, and a virtual DOM, which make it a suitable choice for building complex and interactive UIs.

TypeScript: TypeScript is a statically typed superset of JavaScript that adds optional static typing to the language. By using TypeScript, we gain the benefits of type checking, improved tooling, and better code organization, making it easier to maintain and scale the application.

Axios: Axios is a popular HTTP client library that simplifies making asynchronous HTTP requests from the browser. It is used to communicate with the server-side APIs and fetch TV show data.

## Project Setup
To run the TV show streaming application locally, follow these steps:
1. Clone the repository:
2. Install the dependencies:
```sh
npm install
```
3. Start the development server:
```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

