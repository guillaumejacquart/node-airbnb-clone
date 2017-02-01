<template>
  <div>
    <search></search>

    <best-offers></best-offers>

    <testimonies></testimonies>

    <footer-menu></footer-menu>
  </div>
</template>

<script>
import Search from './Search.vue'
import BestOffers from './BestOffers.vue'
import Testimonies from './Testimonies.vue'
import FooterMenu from './FooterMenu.vue'

export default {
  name: 'home',
  components: {
    'search': Search,
    'best-offers': BestOffers,
    'testimonies': Testimonies,
    'footer-menu': FooterMenu
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>