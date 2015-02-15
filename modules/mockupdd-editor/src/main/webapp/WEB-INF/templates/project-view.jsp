<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@taglib prefix="t" tagdir="/WEB-INF/tags"%>

<t:baseLayout>
  <jsp:attribute name="title">${project.name}</jsp:attribute>
  <jsp:attribute name="head">
	<script type="text/javascript">
		$(function() {
			$("#newMockupModal").modal({
				show : false,
				trigger : "manual"

			});
		})
	</script>
</jsp:attribute>
  <jsp:body>

	<div class="modal fade" id="newMockupModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		<div class="modal-dialog">
			<form id="newMockupForm" class="modal-content" method="post" class="form" role="form" action="./mockups/" enctype="multipart/form-data">
			<div class="modal-body">

			<div class="form-group error">
				<label for="newMockupName" class="control-label">Name </label>
				<input id="newMockupName" name="name" placeholder="Enter new mockup name" class="form-control" />
			</div>
			<div class="form-group">
				<input type="file" name="image"></input>
			</div>

			</div>
			<div class="modal-footer">
				<button data-dismiss="modal" class="btn btn-default">Cancel</button>
				<button type="submit" class="btn btn-primary">Add</button>
			</div>
			</form>
			
		</div>
	</div>
	<div class="container">
    
    	<div class="pull-right" enctype="multipart/form-data">
			<button data-toggle="modal" data-target="#newMockupModal" class="btn btn-info btn-sm">New Mockup</button>
		</div>
    
	    <h4>${project.name}</h4>
	    <hr />
	
	    <ul id="list" class="list-group">
	  	  <c:forEach var="mockup" items="${mockups.items}">
		  <li class="list-group-item">
	        <span class="pink">
	          <a href="/projects/${project.id}/mockups/${mockup.id}/" class="btn btn-link">
	            <c:out value="${mockup.name}" />
	          </a>        
	        </span>    
	      </li>
	      </c:forEach>
	    </ul>
		<nav class="text-center">
		  <ul class="pagination">
		   
		  </ul>
		</nav>
	</div>
</jsp:body>
</t:baseLayout>


