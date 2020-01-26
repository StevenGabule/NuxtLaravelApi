<template>
	<div class="container col-md-6 mt-5">
		<h2>Register</h2>
		<br>
		<form>
			<div class="form-group">
				<label for="name">Name:</label>
				<input type="text" class="form-control" placeholder="Enter name" id="name">
				<small class="form-text text-danger">show errors here</small>
			</div>

			<div class="form-group">
				<label for="email_address">Email Address:</label>
				<input type="text" id="email_address" class="form-control" placeholder="Enter email">
				<small class="form-text text-danger">show errors here</small>
			</div>
			<div class="form-group">
				<label for="password">Password</label>
				<input type="password" class="form-control" placeholder="Enter password" id="password">
				<small class="form-text text-danger">show errors here</small>
			</div>
			<button type="submit" class="btn btn-primary">Submit</button>
		</form>
		<br>
		<p>Have an account already? <nuxt-link to="/login">Login</nuxt-link></p>
	</div>
</template>