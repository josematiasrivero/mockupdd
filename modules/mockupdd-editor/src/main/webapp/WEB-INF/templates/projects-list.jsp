<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>

<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<meta charset="UTF-8">
<title>MockupDD - Projects</title>

<script src="/libs/jquery.js"></script>
<script src="/libs/bootstrap3.min.js"></script>

<link rel="stylesheet" href="/css/bootstrap3.min.css">

<style type="text/css"></style>

<script type="text/javascript">
	$(function(){
		$("#newProjectModal").modal({
			show: false,
			trigger: "manual"
			
		});
	})
</script>

</head>
<body>

	<nav class="navbar navbar-default" role="navigation">
		<a class="navbar-brand">MockupDD</a>
	</nav>


	<div class="modal fade" id="newProjectModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		<div class="modal-dialog">
			<form id="newProjectForm" class="modal-content" method="post" class="form" role="form">
			<div class="modal-body">

			<div class="form-group error">
				<label for="newProjectName" class="control-label">Name </label>
				<input id="newProjectName" name="name" placeholder="Enter new project name" class="form-control"/>
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
		<form id="zipUploadForm" class="pull-right" enctype="multipart/form-data">
			<button id="uploadZip" data-toggle="modal" data-target="#newProjectModal" class="btn btn-info btn-sm">Create</button>

			<input id="zipFile" type="file" name="file" style="display: none">

			<button id="uploadZip" class="btn btn-info btn-sm">
				Upload Zip <span class="glyphicon glyphicon-compressed"></span>
			</button>

		</form>
		<h4>Projects</h4>

		<hr />

		<ul id="list" class="list-group">
			<li class="list-group-item clearfix"><span class="pink">
					<a class="" href="/projects/MyInvoices/MyInvoices.html">My
						Invoices</a>
			</span>
				<form method="POST" action="delete" class="pull-right">
					<button type="submit" disabled="disabled"
						class="btn btn-danger btn-xs ">
						<span class="glyphicon glyphicon-remove"></span>
					</button>
				</form></li>
			<c:forEach var="project" items="${projects.items}">
				<li class="list-group-item"><span class="pink"> <a
						href="/projects/<c:out value="${project.id}" />"> <c:out
								value="${project.name}" />
					</a>
				</span>
					<form method="post" action="delete" class="pull-right">
						<input type="hidden" name="id" value="${project.id }" />
						<button type="submit" class="btn btn-danger btn-xs">
							<span class="glyphicon glyphicon-remove"></span>
						</button>
					</form></li>

			</c:forEach>
		</ul>

	</div>



	</div>


</body>
</html>