<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page contentType="text/html;charset=UTF-8" %>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring" %>
<%@ taglib prefix="t" tagdir="/WEB-INF/tags" %>
<t:baseLayout>
  <jsp:attribute name="title">${mockup.name}</jsp:attribute>
  <jsp:attribute name="head">
 	<link href="https://gitcdn.github.io/bootstrap-toggle/2.2.0/css/bootstrap-toggle.min.css" rel="stylesheet">
	<script src="https://gitcdn.github.io/bootstrap-toggle/2.2.0/js/bootstrap-toggle.min.js"></script>
    <link href="/css/sidebar.css" type="text/css" rel="stylesheet">
  </jsp:attribute>
  <jsp:body>
    <div class="row">
      <div class="col-md-3">
        <jsp:include page="/WEB-INF/templates/parts/sidebar.jsp" />
      </div>
      <div id="page" class="col-md-8"></div>
    </div>
  </jsp:body>
</t:baseLayout>
