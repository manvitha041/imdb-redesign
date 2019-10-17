<template>
  <div id="app">
    <Header></Header>
    <router-view />
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "App",
  components: { Header,Footer }
};
</script>

<style lang="scss">
@import "./src/styles/variables";
@import "./src/styles/media-queries";
* {
  box-sizing: border-box;
}
html,
body {
  height: 100%;
}
body {
  font-family: "Quicksand", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: $background-color;
  color: $text-color;
}
#app {
  text-align: center;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: $text-color;
    &.router-link-exact-active {
      color: $brand-color;
    }
  }
}
</style>
