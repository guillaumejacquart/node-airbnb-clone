<template>
  <div class="container">
    <div class="omb_login">
      <h3 class="omb_authTitle">{{user.firstname}} {{user.lastname}}</h3>
      <div class="row omb_row-sm-offset-3">
        <div class="col-xs-12 col-sm-6">
          <form class="omb_loginForm" v-on:submit.prevent="save" autocomplete="off" method="POST">
			<div class="alert alert-success" role="alert" v-if="success">
				{{success}}
			</div>
			
            <div class="input-group">
              <span class="input-group-addon"><i class="icon-user"></i></span>
              <input disabled type="email" v-model="user.username" class="form-control" placeholder="email address">
            </div>
            <span class="help-block"></span>
			
            <div class="input-group">
              <span class="input-group-addon"><i class="icon-user"></i></span>
              <input type="text" v-model="user.firstname" class="form-control" placeholder="First name">
            </div>
            <span class="help-block"></span>
			
            <div class="input-group">
              <span class="input-group-addon"><i class="icon-user"></i></span>
              <input type="text" v-model="user.lastname" class="form-control" placeholder="Last name">
            </div>
            <span class="help-block"></span>
			
            <div class="input-group">
              <span class="input-group-addon"><i class="icon-user"></i></span>
              <input type="date" v-model="user.birthdate" class="form-control" placeholder="Bithdate">
            </div>
			
            <span class="help-block">
              <span v-if="error">{{error}}</span>
            </span>

            <button class="btn btn-lg btn-primary btn-block" type="submit">Update profile</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import auth from '../auth/auth'
import moment from 'moment'
import _ from 'lodash'

var user = auth.user;
if(user && user.birthdate){
	user.birthdate = moment(user.birthdate).format("YYYY-MM-DD");
}

export default {
  name: 'profile',
  components: {
  },
  data () {
    return {
      error: '',
	  success: '',
      user: _.clone(user, true)
    }
  },
  methods: {
    save: function () {
	  this.success = "";
      this.$http.post('/api/me', this.user).then((response) => {
          this.success = "Profile updated succesfully !";
		  auth.loadUser(true);
      }, (response) => {
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @media (min-width: 768px) {
    .omb_row-sm-offset-3 div:first-child[class*="col-"] {
      margin-left: 25%;
    }
  }
  
  .omb_login .omb_authTitle {
    text-align: center;
    line-height: 300%;
  }
  
  .omb_login .omb_loginForm .input-group.i {
    width: 2em;
  }
  
  .omb_login .omb_loginForm .help-block {
    color: red;
  }
</style>