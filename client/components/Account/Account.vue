<template>
	<div class="container">
		<div>

			<!-- Nav tabs -->
			<ul class="nav nav-tabs" role="tablist">
				<li role="presentation" class="active"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">Profile</a></li>
				<li role="presentation"><a href="#parameters" aria-controls="parameters" role="tab" data-toggle="tab">Parameters</a></li>
				<li role="presentation"><a href="#messages" aria-controls="messages" role="tab" data-toggle="tab">Messages</a></li>
				<li role="presentation"><a href="#settings" aria-controls="settings" role="tab" data-toggle="tab">Settings</a></li>
			</ul>

			<!-- Tab panes -->
			<div class="tab-content">
				<div role="tabpanel" class="tab-pane active" id="profile">
					<profile></profile>
				</div>
				<div role="tabpanel" class="tab-pane" id="parameters">
				</div>
				<div role="tabpanel" class="tab-pane" id="messages">
				</div>
				<div role="tabpanel" class="tab-pane" id="settings">
				</div>
			</div>

		</div>

	</div>
</template>

<script>
	import Profile from './Profile.vue'

	export default {
		name: 'account',
		components: {
			'profile': Profile
		},
		data() {
			return {
			}
		},
		methods: {
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .nav-tabs > li, .nav-pills > li {
    float:none;
    display:inline-block;
    *display:inline; /* ie7 fix */
     zoom:1; /* hasLayout ie7 trigger */
}

.nav-tabs, .nav-pills {
    text-align:center;
}
</style>