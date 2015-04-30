<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@taglib prefix="t" tagdir="/WEB-INF/tags" %>
<t:baseLayout>
	<jsp:attribute name="title">Login</jsp:attribute>
	<jsp:attribute name="head">
		<style>
			.login-button{
				width: 100%;
			}
		</style>
	</jsp:attribute>
	<jsp:body>
		<script>
			$(function(){
				$("form").on("submit", function(){
					$(".login-button").prop("disabled", true);
					$("label").hide();
					$("#social-login").hide(0, function(){
						$("#loading-spinner").show();
					});
				});
			});
		</script>
		<div class="col-md-4 col-md-offset-4 col-sm-4 col-sm-offset-4 col-xs-4 col-xs-offset-4 whiteBackground well" id="pan" style="min-width: 340px;">
	      <h1>MockupDD</h1>
	      <hr>
	      	<label>Login with:</label>
	      	<div class="row" id="social-login">
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
	    	<div class="row text-center" id="loading-spinner" hidden="hidden">
	    		<span class='fa fa-spinner fa-spin fa-lg'></span>
	    	</div>
	    </div>
	</jsp:body>
</t:baseLayout>