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
</head>
<body>

  <nav class="navbar navbar-default" role="navigation">
    <a class="navbar-brand">MockupDD</a>
  </nav>


  <div class="container">





    <form class="inline-form pull-right" id="zipUploadForm" enctype="multipart/form-data">

      <input id="zipFile" type="file" name="file" style="display: none">

      <button id="uploadZip" class="btn btn-info btn-sm">
        Upload Zip <span class="glyphicon glyphicon-compressed"></span>
      </button>

    </form>
        <h4>Projects</h4>
	<hr/>
	<form id="newProjectForm"  method="post" class="form-horizontal" role="form">
	<fieldset>
		<div class="form-group error">
			<label for="newProjectName" class="col-md-1 control-label">Name </label>
			<div class="col-md-10" >
				<input id="newProjectName" name="name" placeholder="Enter new project name" class=" form-control"/>
			</div>
			<div class="col-md-1">
				<button type="submit" class="btn btn-primary">Add</button>
			</div>
		</div>
	</fieldset>
	</form>
	
	
    
    <hr/>

    <ul id="list" class="list-group">
      <li class="list-group-item clearfix">
      	<span class="pink">
      		<a class="" href="/projects/MyInvoices/MyInvoices.html">My Invoices</a>
      	</span>
        <form method="POST" action="delete" class="pull-right"> 
        	<button type="submit" disabled="disabled" class="btn btn-danger btn-xs "><span class="glyphicon glyphicon-remove"></span></button>
        </form>
      </li>
  	  <c:forEach var="project" items="${projects.items}" >
	  <li class="list-group-item">
        <span class="pink">
          <a href="/projects/<c:out value="${project.id}" />"> 
            <c:out value="${project.name}" />
          </a>        
        </span>    
        <form method="post" action="delete" class="pull-right">
        	<input type="hidden" name="id" value="${project.id }" /> 
        	<button type="submit" class="btn btn-danger btn-xs"><span class="glyphicon glyphicon-remove"></span></button>
        </form>
        
      </li>

      </c:forEach>
    </ul>

  </div>



  </div>


</body>
</html>