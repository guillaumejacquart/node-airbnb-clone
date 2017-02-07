<template>
  <div class="fh5co-hero">
    <div class="fh5co-overlay"></div>
    <div class="fh5co-cover" style="background-image: url(assets/images/cover_bg_5.jpg);">
      <div class="desc">
        <div class="container">
          <div class="row">
            <div class="col-sm-5 col-md-5">
              <div class="tabulation">

                <!-- Tab panes -->
                <div class="tab-content">
                  <div role="tabpanel" class="tab-pane active" id="hotels">
                    <form v-on:submit.prevent="searchResults">
                      <div class="row">
                        <div class="col-xxs-12 col-xs-12 mt">
                          <div class="input-field">
                            <label for="from">Place:</label>
                            <input required type="text" class="form-control" v-model="place.searchPlace" id="from-city" placeholder="Los Angeles, USA" v-gmaps-searchbox="place" />
                          </div>
                        </div>
                        <div class="col-xxs-12 col-xs-6 mt alternate">
                          <div class="input-field">
                            <label for="date-start">Arrival:</label>
                            <input required type="date" class="form-control" v-model="search.from" id="date-start" placeholder="mm/dd/yyyy" />
                          </div>
                        </div>
                        <div class="col-xxs-12 col-xs-6 mt alternate">
                          <div class="input-field">
                            <label for="date-end">Check Out:</label>
                            <input required type="date" class="form-control" v-model="search.to" id="date-end" placeholder="mm/dd/yyyy" />
                          </div>
                        </div>
                        <div class="col-xxs-12 col-xs-12 mt">
                          <section>
                            <label for="class">Number of persons:</label>
                            <select required class="form-control" v-model="search.number">
                              <option v-for="i in guestNumber" v-bind:value="i">{{i}}</option>
                            </select>
                          </section>
                        </div>
                        <div class="col-xs-12">
                          <input type="submit" class="btn btn-primary btn-block" value="Search Hotel">
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-sm-push-1 col-md-6 col-md-push-1">
              <p>HandCrafted by <a href="http://frehtml5.co/" target="_blank" class="fh5co-site-name">FreeHTML5.co</a></p>
              <h2>Exclusive Limited Time Offer</h2>
              <h3>Fly to Hong Kong via Los Angeles, USA</h3>
              <span class="price">$599</span>
              <!-- <p><a class="btn btn-primary btn-lg" href="#">Get Started</a></p> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import VueGmaps from 'vue-gmaps'
  import Vue from 'vue'
  
  Vue.use(VueGmaps, {
    key: 'AIzaSyBBGLst2_5aTRSKZRw0RglUN0dX_Qtao60'
  })

  export default {
    name: 'search',
    data() {
      return {
        search: {},
        place: {},
        guestNumber: []
      }
    },
    methods: {
      searchResults: function () {
        var params = this.search;
        params.place_id = this.place.place.place_id;
        this.$router.push({ path: '/search', query: params })
      }
    },
    created: function(){
      for(var i=1;i<15;i++){
        this.guestNumber.push(i);
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>