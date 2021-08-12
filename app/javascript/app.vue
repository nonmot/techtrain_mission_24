<template>
  <div id="app" class="flex flex-col min-h-screen">
    <Header></Header>
    <section class="flex-grow">
      <router-view></router-view>
    </section>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Header,
    Footer,
  }
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
