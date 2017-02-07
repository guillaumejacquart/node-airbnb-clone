<template>

  <div id="map-container">
    <div id="map-offers">
      <slot></slot>
    </div>
  </div>

</template>

<script>
  import GoogleMapsLoader from 'google-maps';

  export default {
    name: 'map-results',
    props: ['center', 'zoom'],
    data() {
      return {
        loadedMap: null
      }
    },
    methods: {
    },
    mounted: function () {
      GoogleMapsLoader.load((google) => {
        var el = document.getElementById('map-offers');
        var map = new google.maps.Map(el, {
          center: this.center,
          zoom: this.zoom
        });
        this.$emit('loaded', map);
      });
    },
    watch: {
    },
  };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #map-container,
  #map-offers {
    height: 100%;
  }
</style>