<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@ taglib prefix="t" tagdir="/WEB-INF/tags"%>
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

    <div class="modal fade" tabindex="-1" role="dialog" id="conflictsModal">
     	<div class="modal-dialog">
     		<div class="modal-content">
     			<div class="modal-header">
     				<button type="button" class="close" data-dismiss="modal" aria-label="Close">
     					<span aria-hidden="true">&times;</span>
     				</button>
                    <h3 class="modal-title">Modal Header</h3>
     			</div>
     			<div class="modal-body">
     				<h4>Conflicts detected</h4>
                    <div class="list-group">
                      <a href="#" class="list-group-item active">Type mismatch: Invoice.number:String vs. Invoice.number:Integer</a>
                      <a href="#" class="list-group-item">Ambiguous navigation</a>
                    </div>
                    <h4>Proposed refactorings to conflict</h4>
                    <div class="list-group">
                      <a href="#" class="list-group-item active">Always use Integer type</a>
                      <a href="#" class="list-group-item">Always use String type</a>
                      <a href="#" class="list-group-item">Omit</a>
                    </div>
     			</div>
     			<div class="modal-footer">
     				<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
     				<button type="button" class="btn btn-primary">Perform refactorings</button>
     			</div>
     		</div>
     		<!-- /.modal-content -->
     	</div>
     	<!-- /.modal-dialog -->
     </div>
     <!-- /.modal -->

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
              $(function() {
                $(".draggable").draggable();
              });
            </script>
      <input type="hidden" value="${mockup.name}" id="mockupName" />
      <input type="hidden" value="${mockup.id}" id="mockupId" />












 </jsp:body>
</t:baseLayout>
