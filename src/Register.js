import React from 'react'

function Register() {
  return (
    <>
    <div class="container1">
    <h2 class="title1">User Registration</h2>
    <form action="register.php" method="post">
      <div class="form-group1">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required/>
      </div>
      
      <div class="form-group1">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required/>
      </div>
      
      <div class="form-group1">
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required/>
      </div>
      
      <input type="submit" value="Register" class="submit-button1"/>
    </form>
  </div>
    </>
  )
}

export default Register