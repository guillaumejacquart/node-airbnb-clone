<template>

  <div class="container">
    {{query_search.city}}
  </div>
  
</template>

<script>
  export default {
    name: 'search-results',
    data() {
      return {
        query_search: null
      }
    },
    methods: {
      
    },
    created: function(){
      this.query_search = this.$route.query;
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>