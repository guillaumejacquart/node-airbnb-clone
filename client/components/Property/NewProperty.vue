<template>
	<div class="container">
		<div class="row">
			<div class="col-sm-6 col-sm-offset-3">
				<h3 class="omb_authTitle">Create new listing</h3>
				<el-form ref="form" :model="form" :rules="rules" label-width="150px">

					<el-form-item label="Property type" prop="property_type">
						<el-select v-model="form.property_type" placeholder="please select your property type">
							<el-option label="Apartment" value="FLAT"></el-option>
							<el-option label="House" value="HOUSE"></el-option>
						</el-select>
					</el-form-item>

					<el-form-item label="Guest offer" prop="offer_type">
						<el-select v-model="form.offer_type" placeholder="please select the offer type">
							<el-option label="Full house" value="FULL"></el-option>
							<el-option label="Shared room" value="SHARED_ROOM"></el-option>
							<el-option label="Private room" value="PRIVATE_ROOM"></el-option>
						</el-select>
					</el-form-item>

					<el-form-item label="Number of guests" prop="number_guests">
						<el-input-number v-model="form.number_guests" :min="1" :max="15"></el-input-number>
					</el-form-item>

					<el-form-item label="Number of beds" prop="number_beds">
						<el-input-number v-model="form.number_beds" :min="1" :max="10" v-on:change="setBedsCount"></el-input-number>
					</el-form-item>

					<el-form-item :label="'Bed ' + (index + 1)" v-for="(bed, index) in form.beds" label-width="200px" prop="type">
						<el-select v-model="bed.type" placeholder="please select your property type">
							<el-option label="Single" value="SINGLE'"></el-option>
							<el-option label="Double" value="DOUBLE"></el-option>
							<el-option label="Convertible" value="CONVERTIBLE"></el-option>
							<el-option label="Couch" value="COUCH"></el-option>
						</el-select>
					</el-form-item>

					<el-form-item label="Number of bathrooms" prop="number_bathrooms">
						<el-input-number v-model="form.number_bathrooms" :min="1" :max="10"></el-input-number>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="onSubmit">Next</el-button>
					</el-form-item>
				</el-form>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'new-property',
		components: {
		},
		data() {
			return {
				form: {
					property_type: '',
					offer_type: '',
					number_guests: 1,
					number_beds: 1,
					beds: [{
						type: ''
					}],
					number_bathrooms: 1
				},
				rules: {
					property_type: [
						{ required: true, message: 'This field is required', trigger: 'change' }
					],
					offer_type: [
						{ required: true, message: 'This field is required', trigger: 'change' }
					],
					number_guests: [
						{ type: 'number', required: true, message: 'This field is required', trigger: 'change' }
					],
					number_beds: [
						{ type: 'number', required: true, message: 'This field is required', trigger: 'change' }
					],
					beds: [
						{ required: true, message: 'This field is required', trigger: 'change' }
					],
					number_bathrooms: [
						{ type: 'number', required: true, message: 'This field is required', trigger: 'change' }
					]
				}
			}
		},
		methods: {
			onSubmit() {
				this.$refs['form'].validate((valid) => {
					if (valid) {
						console.log(this.form);
						this.$router.push('/new-property-map');
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
			setBedsCount(newNumberBeds) {
				var list = [];
				for (var i = 0; i < newNumberBeds; i++) {
					list.push({
						type: ''
					});
				}
				this.form.beds = list;
			}
		},
		created: function () {
		}
	}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>