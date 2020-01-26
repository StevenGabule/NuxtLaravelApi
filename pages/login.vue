<template>
	<div class="container col-md-6 mt-5">
		<h2>Login</h2>
		<br>
		<form @submit.prevent="handleSubmit">
			<div class="form-group">
				<label for="email_address">Email Address:</label>
				<input type="email" v-model.trim="form.email" class="form-control" placeholder="Enter email" autofocus>
				<small class="form-text text-danger">show errors here</small>
			</div>
			<div class="form-group">
				<label for="password">Password</label>
				<input type="password" v-model.trim="form.password" class="form-control" placeholder="Enter password">
				<small class="form-text text-danger">show errors here</small>
			</div>
			<button type="submit" class="btn btn-primary">Login</button>
		</form>
		<br>
		<p>Don't have an account? <nuxt-link to="/register">Register</nuxt-link></p>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					email: '',
					password: ''
				}
			}
		},

		methods: {
			async handleSubmit() {
				await this.$auth.loginWith('local', {
					data: this.form
				});
				this.$router.push({
					path: "/"
				});
			}
		}
	}
</script>