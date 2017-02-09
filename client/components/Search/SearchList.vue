<template>

  <div>
    <div v-if="offers.length">
      <div v-for="o in offers" class="offer col-sm-12 col-md-6" v-on:mouseover="() => mouseOver(o)" v-on:mouseleave="() => mouseLeave(o)">
        <div class="offer-picture" v-bind:style="{ backgroundImage: 'url(' + o.image + ')' }"></div>
        <div class="offer-details">
            <div class="offer-price">{{o.price}}</div>
            <div class="offer-title">{{o.title}}</div>
            <div class="offer-infos">
            </div>
        </div>
      </div>
    </div>
    <div v-if="!offers.length">
      No offers matching filters
    </div>
  </div>

</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: 'search-results',
    components: {
    },
    data() {
      return {
      }
    },
    computed: mapState({
      offers: state => state.offers
    }),
    methods: {
      mouseOver: function(o){
        this.$store.commit('setOfferSelected', o);
      },
      mouseLeave: function(o){
        this.$store.commit('setOfferUnselected', o.id);
      }
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