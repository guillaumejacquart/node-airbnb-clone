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
import HeaderMenu from './HeaderMenu.vue'
import FooterMenu from './FooterMenu.vue'

export default {
  name: 'home',
  components: {
    'header-menu': HeaderMenu,
    'search': Search,
    'best-offers': BestOffers,
    'testimonies': Testimonies,
    'footer-menu': FooterMenu
  },
  data () {
    return {
      user: null
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>