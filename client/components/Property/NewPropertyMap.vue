<template>
	<div class="container">
		<div class="row">
			<div class="col-sm-6 col-sm-offset-3">
				<h3 class="omb_authTitle">Set address</h3>
				<form v-on:submit.prevent="searchResults">
					<div>
						<div class="input-field">
							<label for="from">Place:</label>
							<input required type="text" class="form-control" v-model="place.searchPlace" placeholder="Los Angeles, USA" v-gmaps-searchbox:location="place"
							/>
						</div>
					</div>
					<div>
						<new-property-map-view :center="place.location.geometry ? place.location.geometry.location : null"></new-property-map-view>
					</div>

					<div v-if="place.location.place_id">
						<input type="submit" class="btn btn-primary btn-block" value="Save">
					</div>
				</form>
			</div>
		</div>
	</div>
	</div>
</template>

<script>
	import Vue from 'vue'
	import NewPropertyMapView from './NewPropertyMapView.vue'

	export default {
		name: 'new-property-map',
		components: {
			'new-property-map-view': NewPropertyMapView
		},
		data() {
			return {
				place: {
					searchPlace: '',
					location: {}
				},
			}
		},
		methods: {
			onSubmit() {
				console.log(this.form);
			}
		},
		created: function () {
		}
	}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>