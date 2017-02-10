<template>

  <div>
    <div v-if="offers.length">
      <offer v-bind:offer="o" v-for="o in offers"></offer>
    </div>
    <div v-if="!offers.length">
      No offers matching filters
    </div>
  </div>

</template>

<script>
  import { mapState } from 'vuex'
  import Offer from './Offer.vue'

  export default {
    name: 'search-list',
    components: {
      'offer': Offer
    },
    data() {
      return {
      }
    },
    computed: mapState({
      offers: state => state.offers
    }),
    methods: {
    },
    created: function () {
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .offer-picture{
    height: 150px;
    width: 100%;
    background-size:cover;
    background-repeat: no-repeat;
    background-position: center;
  }
</style>