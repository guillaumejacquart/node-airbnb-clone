<template>
  <header id="fh5co-header-section" class="sticky-banner">
	  <div class="container">
		<div class="nav-header">
		  <a href="#" class="js-fh5co-nav-toggle fh5co-nav-toggle dark"><i></i></a>
		  <h1 id="fh5co-logo">
			<router-link to="/">Home</router-link>
		  </h1>
		  <!-- START #fh5co-menu-wrap -->
		  <nav id="fh5co-menu-wrap" role="navigation">
			<ul class="sf-menu nav navbar-nav navbar-right" id="fh5co-primary-menu">
			  <li v-if="!user">
				<router-link to="/login">Login</router-link>
			  </li>
			  <li v-if="user">
			    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button">{{user.firstname}} <span class="caret"></span></a>
				<ul class="dropdown-menu">
				  <li><router-link to="/account">My account</router-link></li>
				  <li><a href="#" v-on:click="logout">Logout</a></li>
				</ul>
			  </li>
			  <li>
				<router-link to="/contact">Contact</router-link>
			  </li>
			</ul>
		  </nav>
		</div>
	  </div>
  </header>
</template>

<script>
import auth from '../../services/auth'

export default {
  name: 'header-menu',
  data () {
    return {
      user: null
    }
  },
  methods:{
	logout: function(){
		auth.logout();		
        this.$router.push('/');
	}
  },
  created: function () {
    auth.onUserLoaded((user) => {
		this.user = user;
	})
	this.user = auth.user;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>