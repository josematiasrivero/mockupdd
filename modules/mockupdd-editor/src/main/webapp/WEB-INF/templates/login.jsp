<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<!-- saved from url=(0050)http://administracion.colegioscm.com.ar/Login.aspx -->
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<link href="/css/bootstrap-responsive.min.css" type="text/css" rel="stylesheet" />
<link href="/css/bootstrap.min.css" type="text/css" rel="stylesheet" />
<script src="libs/jquery.js" type="text/javascript"></script>
<title>Login</title>
<style type="text/css"></style>

<script>
	$(document).ready(function() {
		$("#submitButton").click(function(e) {
			e.preventDefault();
			if ($("#username").val() == "matias" && $("#password").val() == "mockupdd") {
				window.location = "/projects/";
				return;
			} 
			alert("Wrong username/password combination");
			$("#username").val("");
			$("#password").val("");
		});
	})
</script>

</head>
<body>
  <form name="" method="post" action="" class="hero-unit login">
    

    <div class="logo span3"></div>
    <div>
      <h1>MockupDD</h1>

      <div class="field">
        <label id="usernameLabel" class="control-label" for="username">Username:</label> <input type="text" name="username" id="username"> <span id="rfvUsername"
          style="visibility: hidden; color: Red;">*</span>
      </div>
      <div class="field">
        <label id="passwordLabel" class="control-label" for="password">Password:</label> <input type="password" name="password" id="password"> <span id="rfvPassword"
          style="visibility: hidden; color: Red;">*</span>
      </div>
      <div class="toolbar">
        <input id="submitButton" type="submit" name="login" value="Login" onclick="WebForm_DoPostback(&quot;login&quot;,&quot;&quot;,null,false,true,false,false,&quot;&quot;)" id="login" class="btn">
      </div>
    </div>

  </form>


</body>
</html>