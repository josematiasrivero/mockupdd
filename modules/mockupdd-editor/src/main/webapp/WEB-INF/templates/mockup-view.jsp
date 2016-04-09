<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page contentType="text/html;charset=UTF-8" %>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring" %>
<%@ taglib prefix="t" tagdir="/WEB-INF/tags" %>
<t:baseLayout>
  <jsp:attribute name="title">${mockup.name}</jsp:attribute>
  <jsp:attribute name="head">
    <jsp:include page="/WEB-INF/templates/parts/imports.jsp" />
  </jsp:attribute>
  <jsp:body>
    <div>
      <div>
        <jsp:include page="/WEB-INF/templates/parts/sidebar.jsp" />
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
      <input type="hidden" value="${mockup.name}" id="mockupName" />
      <input type="hidden" value="${mockup.id}" id="mockupId" />

  </jsp:body>
</t:baseLayout>
