<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page contentType="text/html;charset=UTF-8" %>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring" %>
<%@ taglib prefix="t" tagdir="/WEB-INF/tags" %>
<t:baseLayout>
  <jsp:attribute name="title">${mockup.name}</jsp:attribute>
  <jsp:attribute name="head">
 	<link href="https://gitcdn.github.io/bootstrap-toggle/2.2.0/css/bootstrap-toggle.min.css" rel="stylesheet"/>
  <link href="/css/sidebar.css" type="text/css" rel="stylesheet"/>
  <link href="/css/floating-panel.css" type="text/css" rel="stylesheet"/>
  <link href="https://code.jquery.com/ui/1.11.4/themes/excite-bike/jquery-ui.css" type="text/css" rel="stylesheet"/>
	<script src="https://gitcdn.github.io/bootstrap-toggle/2.2.0/js/bootstrap-toggle.min.js"></script>
  <script src="https://code.jquery.com/ui/1.11.4/jquery-ui.min.js"></script>
  </jsp:attribute>
  <jsp:body>
    <div>
      <div>
        <jsp:include page="/WEB-INF/templates/parts/sidebar.jsp"/>
      </div>
      <div id="page">
      </div>
    </div>

    <div id="mk-floating-panel" class="panel panel-primary draggable">
      <div class="panel-heading">
        Menu
      </div>
      <div class="panel-body">
        <form class="form-inline">
          <div class="form-group">
            <label for="one">Label 1:</label>
            <input class="form-control" type="text" id="one">
          </div>
        </form>
      </div>
      <script>
      $(function(){
        $( ".draggable" ).draggable();
      });



      </script>
  </jsp:body>
</t:baseLayout>
