<template>
  <div class="footer">
    <ul>
      <li>
        Copyright
      </li>
      <li> VueTV App</li>
      <li>
        Data from
        <a href="http://www.tvmaze.com/api">TvMaze</a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  margin: 0 auto;
  padding: 1em 0;
  text-align: center;
  font-size: 0.9em;
  background-color: #880c0c;
  color: white;
  width: 100%
}

ul {
  display: flex;
  justify-content: space-between;
  list-style: none;
  margin: 0;
  padding: 0
}

li {
  display: block;
  padding: 1em;
}

a {
  color: #e4baba;
  text-decoration: dotted underline;

  &:hover {
    color: #fff;
    background-color: rgb(178, 38, 16);
    text-decoration: none;
  }
}
</style>