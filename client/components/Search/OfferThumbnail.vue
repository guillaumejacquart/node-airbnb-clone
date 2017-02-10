<template>
  <div class="offer col-sm-12 col-md-6" v-bind:class="{ active: offer.selected }" v-on:mouseover="mouseover" v-on:mouseleave="mouseleave">
    <div class="offer-picture" v-bind:style="{ backgroundImage: 'url(' + offer.image + ')' }"></div>
    <div class="offer-details">
      <div class="offer-price">{{offer.price}}</div>
      <div class="offer-title">{{offer.title}}</div>
      <div class="offer-infos"></div>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'offer-thumbnail',
    props: ['offer', 'mouseover', 'mouseleave'],
    components: {
    },
    methods: {
    },
    created: function () {
    },
	watch: {
		offer: function(newOffer){
			console.log(newOffer);
		}
	}
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .offer {

  }

  .offer.active{
    box-shadow: 0 0 3px rgba(0,0,0,0.4)
  }
  
  .offer-picture {
    height: 150px;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
</style>