<template>
	<div class="container col-md-6 mt-5">
		<h2>Login</h2>
		<br>
		<form>
			<div class="form-group">
				<label for="email_address">Email Address:</label>
				<input type="text" class="form-control" placeholder="Enter email">
				<small class="form-text text-danger">show errors here</small>
			</div>
			<div class="form-group">
				<label for="password">Password</label>
				<input type="password" class="form-control" placeholder="Enter password">
				<small class="form-text text-danger">show errors here</small>
			</div>
			<button type="submit" class="btn btn-primary">Login</button>
		</form>
		<br>
		<p>Don't have an account? <nuxt-link to="/register">Register</nuxt-link></p>
	</div>
</template>