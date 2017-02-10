<template>

  <div id="map-container">
    <div id="property-map-offers">
      <slot></slot>
    </div>
  </div>

</template>

<script>
  import GoogleMapsLoader from 'google-maps';

  export default {
    name: 'new-property-map-view',
    props: ['center', 'zoom'],
    data() {
      return {
        map: null
      }
    },
    methods: {

    },
    watch: {
      center: function (newCenter) {
        if (!newCenter || !this.map) {
          return;
        }
        this.map.setCenter(newCenter);

        var marker = new google.maps.Marker({
          position: newCenter,
          map: this.map
        });
      }
    },
    mounted: function () {
      var center = { lat: 0, lng: 0 };
      var el = document.getElementById('property-map-offers');
      this.map = new google.maps.Map(el, {
        center: center,
        zoom: this.zoom || 16
      });
    }
  };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #map-container,
  #property-map-offers {
    width: 100%;
    height: 300px;
  }
</style>