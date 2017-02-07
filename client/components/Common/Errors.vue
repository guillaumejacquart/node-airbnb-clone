<template>			
    <div v-if="errors" class="alert alert-danger">
      <span v-for="item in errors">{{item.param}} : {{item.msg}}</span>
    </div>
</template>

<script>

export default {
  name: 'errors',
  props: ['errors'],
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>