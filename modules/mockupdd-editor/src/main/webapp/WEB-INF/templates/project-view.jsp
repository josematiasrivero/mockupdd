<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ page contentType="text/html;charset=UTF-8"%> 
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@taglib prefix="t" tagdir="/WEB-INF/tags" %>
<t:baseLayout>
<jsp:attribute name="title">${project.name}</jsp:attribute>
<jsp:body>
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
</jsp:body>
</t:baseLayout>


