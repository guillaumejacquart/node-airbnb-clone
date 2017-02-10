<template>
    <div>
        <h3 class="omb_authTitle">My properties</h3>
        <div id="me-properties">
            <div class="row" v-for="p in properties" v-if="properties.length">
                <property></property>
            </div>
            <div class="row" v-if="!properties.length">
                You have no property yet !
            </div>
        </div>
		
		<div class="new-button">
			<router-link to="/new-property" class="btn btn-success">Add property now</router-link>
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
        this.$http.get('/api/me/properties').then((response) => {
          this.properties = response.data;
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