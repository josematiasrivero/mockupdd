<%@ tag description="Base page layout" pageEncoding="UTF-8" %>
<%@ attribute name="title" fragment="true" %>
<%@ attribute name="head" fragment="true" %>
<!DOCTYPE html>
<html>
  <head>
  	<title>MockupDD - <jsp:invoke fragment="title" /></title>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <link href="/css/navbar.css" type="text/css" rel="stylesheet" />
	<script src="/libs/jquery.js"></script>
	<link href="/css/bootstrap3.min.css" type="text/css" rel="stylesheet" />
	<link href="/css/font-awesome.css" rel="stylesheet">
	<link href="/css/bootstrap-social.css" type="text/css" rel="stylesheet" />
	<script src="/libs/bootstrap3.min.js"></script>
	<script src="/scripts/pagination.js"></script>
	<jsp:invoke fragment="head" />
  </head>
  <body>
  	<jsp:include page="/WEB-INF/templates/parts/navbar.jsp" />
    <jsp:doBody/>
  </body>
</html>