<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ page contentType="text/html;charset=UTF-8"%> 
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>

<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<meta charset="UTF-8">
<title>MockupDD - Projects</title>

<script src="/libs/jquery.min.js"></script>
<script src="/libs/bootstrap3.min.js"></script>

<link rel="stylesheet" href="/css/bootstrap3.min.css">

<style type="text/css"></style>
</head>
<body>

  <nav class="navbar navbar-default" role="navigation">
    <a class="navbar-brand">MockupDD</a>
  </nav>


  <div class="container">


    <form id="zipUploadForm" enctype="multipart/form-data">
      
      <input id="zipFile" type="file" name="file" style="display: none">

      <button id="uploadZip" class="btn btn-info btn-sm">
        Upload Zip <span class="glyphicon glyphicon-compressed"></span>
      </button>

    </form>
    
    <h4>Projects</h4>
    <hr />

    <ul id="list" class="list-group">
      <li class="list-group-item"><pan class="pink"><a href="/projects/MyInvoices.html">My Invoices</a></pan></li>
  	  <c:forEach var="project" items="${projects}" >
	  <li class="list-group-item">
        <span class="pink">r
          <a href="/projects/<c:out value="${project.permalink}"/>" class="btn btn-link">
            <c:out value="${project.name}" />
          </a>        
        </span>    
      </li>
      </c:forEach>
    </ul>

  </div>

  

  </div>


</body>
</html>