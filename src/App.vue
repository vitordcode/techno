<template>
  <div id="app">
    <TheHeader />
    <router-view class="container"></router-view>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";

export default {
  components: {
    TheHeader,
  },
};
</script>





<style>
body {
  margin: 0px;
  font-family: "Avenir", Helvetica, sans-serif;
  color: #234;
}

ul {
  list-style: none;
  padding: 0px;
  margin: 0px;
}

img {
  max-width: 100%;
}

a {
  font-weight: bold;
  text-decoration: none;
  color: #234;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.v-enter {
  opacity: 0;
  transform: translate3d(-20px, 0, 0);
}

.v-enter-active {
  transition: all .3s;
}

.conteudo {
  display: grid;
  grid-template-columns: 1fr minmax(200px, 400px);
  gap: 30px;
}

@media screen and (max-width: 500px) {
  .conteudo {
    display: block;
  }
}
</style>