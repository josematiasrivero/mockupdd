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
    
    <h4>${project.name}</h4>
    <hr />

    <ul id="list" class="list-group">
  	  <c:forEach var="mockup" items="${project.mockups}" >
	  <li class="list-group-item">
        <span class="pink">
          <a href="/projects/${project.id}/mockup/${mockup.id}" class="btn btn-link">
            <c:out value="${mockup.name}" />
          </a>        
        </span>    
      </li>
      </c:forEach>
    </ul>

  </div>

  

  </div>


</body>
</html>