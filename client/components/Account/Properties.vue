<template>
    <div>
        <h3 class="omb_authTitle">My properties</h3>
        <div id="me-properties">
            <div class="row" v-for="p in properties">
                <property></property>
            </div>
        </div>
    </div>
</template>

<script>
  import Property from '../Property/Property.vue'

  export default {
    name: 'properties',
    components: {
        property: Property
    },
    data() {
      return {
        properties: [],
        error: null
      }
    },
    methods: {
      getProperties: function () {
        this.successPassword = this.errorPassword = "";
        this.$http.post('/me/properties', this.user).then((response) => {
          this.properties = response.properties;
        }, (response) => {
          this.error = response.body.message;
        });
      }
    },
    created: function(){
        this.getProperties();
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>