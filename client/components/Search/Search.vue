<template>

  <div id="search-container">
    <div class="col col-sm-7 results-wrapper">
      <div class="row" id="search-filters">
        <div class="col col-sm-2">Filters</div>
        <div class="col col-sm-10">
          <div class="form-inline">
            <div class="input-group input-group-sm">
              <el-date-picker size="small" v-model="query_search.from" type="date" change="searchOffers"></el-date-picker>
            </div>
            <div class="input-group input-group-sm">
              <el-date-picker size="small" v-model="query_search.to" type="date" change="searchOffers"></el-date-picker>
            </div>
            <div class="input-group input-group-sm">
              <span class="input-group-addon"><i class="icon-users"></i></span>
              <input v-on:blur="searchOffers" v-model="query_search.number" type="number" class="form-control input-sm" placeholder="Number of guests">
            </div>
          </div>
        </div>
      </div>
      <div class="row" id="search-results">
        <search-list></search-list>
      </div>
    </div>
    <div class="col col-sm-5 hidden-sm" id="search-maps">
      <div class="map-wrapper">
        <search-map></search-map>
      </div>
    </div>
  </div>

</template>

<script>
  import { mapState } from 'vuex'
  import SearchMap from './SearchMap.vue'
  import SearchList from './SearchList.vue'
  import store from '../../services/store'

  export default {
    name: 'search-results',
    components: {
      'search-map': SearchMap,
      'search-list': SearchList
    },
    data() {
      return {
        query_search: null
      }
    },
    computed: mapState({
      offers: state => state.offers
    }),
    methods: {
      searchOffers: function () {
        this.$http.get('/api/offers', this.query_search).then((response) => {
          store.commit('setOffers', response.body)
        }, (response) => {
          this.error = response.body.message
        });
      }
    },
    created: function () {
      this.query_search = this.$route.query;
      this.searchOffers();
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #search-container {
    position: fixed;
    top: 95px;
    bottom: 0;
    width: 100%;
  }
  
  #search-filters {
    padding: 10px;
    border-bottom: 1px solid #ccc;
    margin-bottom: 10px;
  }
  
  #search-filters .form-control,
  #search-filters .input-group-addon {
    padding: 5px 7px;
  }
  
  #search-maps {
    height: 100%;
  }
  
  .map-wrapper {
    height: 100%;
    margin: 0 -15px;
  }
  
  .results-wrapper {
    height: 100%;
    overflow-y: auto;
    border-right: 1px solid #ccc;
  }
</style>