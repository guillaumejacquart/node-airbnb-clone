<template>
  <map-results :center="center" :markers="markers" :zoom="zoom">
    <map-overlay v-for="o in overlays" :overlay="o" :map="map">
      <div slot="marker">
        {{o.title}}
      </div>
        <div slot="tooltip">
          <img v-bind:src="o.image" height="50" />
          <div class="map-inner-dialog">{{o.description}}</div>
        </div>
      </div>
    </map-overlay>
  </map-results>
</template>

<script>
  import MapResults from './MapResults.vue'
  import MapOverlay from './MapOverlay.vue'

  export default {
    name: 'search-map',
    components: {
      'map-results': MapResults,
      'map-overlay': MapOverlay
    },
	props: ['offers'],
    data() {
      return {
        center: { lat: 62.323907, lng: -150.109291 },
        markers: [],
        zoom: 9
      }
    },
    computed: {
      overlays: function () {
        return this.offers.map((o) => {
          return {
            id: o.id,
            position: o.position,
            title: o.price,
            description: o.description,
            image: o.image,
            selected: o.selected
          };
        });
      },
	  map () {
        return this.$store.state.map
      }
    },
    created: function () {
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>