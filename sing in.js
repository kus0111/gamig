<!DOCTYPE html>
<html>
<head>
  <title>Sign In</title>
  <script>
    function signIn() {
      var username = document.getElementById("username").value;
      var password = document.getElementById("password").value;
      
      // Perform validation and authentication logic here
      // For simplicity, let's assume the username is "admin" and the password is "password"
      
      if (username === "admin" && password === "password") {
        alert("Sign in successful!");
        // Redirect to another page or perform any other actions
      } else {
        alert("Invalid username or password");
      }
    }
  </script>
</head>
<body>
  <h2>Sign In</h2>
  <form>
    <label for="username">Username:</label>
    <input type="text" id="username" name="username" required><br><br>
    
    <label for="password">Password:</label>
    <input type="password" id="password" name="password" required><br><br>
    
    <input type="button" value="Sign In" onclick="signIn()">
  </form>
</body>
</html>
