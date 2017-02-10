<template>

  <div>
    <div v-if="offers.length">
      <offer-thumbnail v-bind:offer="o" v-for="o in offers" :key="o.id" :mouseover="() => mouseOver(o)" :mouseleave="() => mouseLeave(o)"></offer>
    </div>
    <div v-if="!offers.length">
      No offers matching filters
    </div>
  </div>

</template>

<script>
  import { mapState } from 'vuex'
  import Offer from './OfferThumbnail.vue'

  export default {
    name: 'search-list',
	props: ['offers'],
    components: {
      'offer-thumbnail': Offer
    },
    methods: {	
      mouseOver: function(o){
        this.$store.commit('setOfferSelected', o.id);
      },
      mouseLeave: function(o){
        this.$store.commit('setOfferUnselected', o.id);
      }
    },
    created: function () {
    },
	watch:{
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