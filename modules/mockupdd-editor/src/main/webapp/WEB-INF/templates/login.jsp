<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<link href="/css/bootstrap3.min.css" type="text/css" rel="stylesheet" />
<link href="/css/font-awesome.css" rel="stylesheet">
<link href="/css/bootstrap-social.css" type="text/css" rel="stylesheet" />
<script src="/libs/jquery.js"></script>
<script src="/libs/bootstrap3.min.js"></script>
<title>Login</title>

<style>
.login-button{
	width: 100%;
}
</style>


</head>
<body>

	<div class="col-md-4 col-md-offset-4 col-sm-4 col-sm-offset-4 col-xs-4 col-xs-offset-4 whiteBackground well" id="pan" style="min-width: 340px;">
      <h1>MockupDD</h1>
      <hr>
      	<label>Login with:</label>
      	<div class="row">
        <form action="<c:url value="/signin/facebook"/>" method="POST" class="col-sm-6 col-md-6">
            <input type="hidden" name="scope" value="email,public_profile" />
            <button type="submit"  class="btn btn-facebook login-button" >
              <span class="fa fa-facebook"></span> | Facebook
            </button>
            <div> &nbsp;</div>
        </form>
        <form action="<c:url value="/signin/google"/>" method="POST" class="col-sm-6 col-md-6">
           <input type="hidden" name="scope" value="email" />
           <button type="submit"  class="btn btn-google-plus login-button" >
              <i class="fa fa-google-plus"></i> | Google
          </button>
          <div> &nbsp;</div>
        </form>
    </div>
    </div>

</body>
</html>