<template>
  <div>
    <div class="omb_login">
      <h3 class="omb_authTitle">{{user.firstname}} {{user.lastname}}</h3>
      <div class="row omb_row-sm-offset-3">
        <div class="col-xs-12 col-sm-6">
          <form class="omb_loginForm" v-on:submit.prevent="save" autocomplete="off" method="POST">
            <div class="alert alert-success" role="alert" v-if="success">
              {{success}}
            </div>
            <div class="alert alert-danger" role="alert" v-if="error">
              {{error}}
            </div>

            <div class="input-group">
              <span class="input-group-addon"><i class="icon-envelop"></i></span>
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
              <span class="input-group-addon"><i class="icon-calendar"></i></span>
              <input type="date" v-model="user.birthdate" class="form-control" placeholder="Birthdate">
            </div>
            <span class="help-block"></span>

            <button class="btn btn-lg btn-primary btn-block" type="submit">Update profile</button>
          </form>
        </div>
      </div>

      <div class="row omb_row-sm-offset-3 change-password">
        <div class="col-xs-12 col-sm-6">
          <h3 class="omb_authTitle">Change password</h3>
          <form class="omb_loginForm" v-on:submit.prevent="changePassword" autocomplete="off" method="POST">
            <div class="alert alert-success" role="alert" v-if="successPassword">
              {{successPassword}}
            </div>
            <div class="alert alert-danger" role="alert" v-if="errorPassword">
              {{errorPassword}}
            </div>

            <div class="input-group">
              <span class="input-group-addon"><i class="icon-key"></i></span>
              <input type="text" v-model="user.oldPassword" class="form-control" placeholder="Old password">
            </div>
            <span class="help-block"></span>

            <div class="input-group">
              <span class="input-group-addon"><i class="icon-key"></i></span>
              <input type="text" v-model="user.newPassword" class="form-control" placeholder="New password">
            </div>
            <span class="help-block"></span>

            <button class="btn btn-lg btn-primary btn-block" type="submit">Change password</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import auth from '../../services/auth'
  import moment from 'moment'
  import _ from 'lodash'

  var user = auth.user;
  if (user && user.birthdate) {
    user.birthdate = moment(user.birthdate).format("YYYY-MM-DD");
  }

  export default {
    name: 'profile',
    components: {
    },
    data() {
      return {
        error: '',
        success: '',
        successPassword: '',
        errorPassword: '',
        user: _.clone(user, true)
      }
    },
    methods: {
      save: function () {
        this.success = this.error = "";
        this.$http.post('/api/me', this.user).then((response) => {
          this.success = "Profile updated succesfully !";
          auth.loadUser(true);
        }, (response) => {
        });
      },
      changePassword: function () {
        this.successPassword = this.errorPassword = "";
        this.$http.post('/api/me/password', this.user).then((response) => {
          this.successPassword = "password updated succesfully !";
        }, (response) => {
          this.errorPassword = response.body.message;
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

  .change-password{
    margin-top:30px
  }
</style>