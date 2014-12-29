<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="sec" uri="http://www.springframework.org/security/tags" %>
<style>

.circular {
	border-radius: 150px;
	-webkit-border-radius: 150px;
	-moz-border-radius: 150px;
	box-shadow: 0 0 8px rgba(0, 0, 0, .8);
	-webkit-box-shadow: 0 0 8px rgba(0, 0, 0, .8);
	-moz-box-shadow: 0 0 8px rgba(0, 0, 0, .8);
	}
</style>
<nav class="navbar navbar-default">
	<sec:authorize access="isAuthenticated()">
		<a class="navbar-brand">MockupDD</a>

        <ul class="nav navbar-nav navbar-right" style="margin-right: 60px;">
            <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown"><sec:authentication property="credentials.displayName" /> <b class="caret"></b></a>
                <ul class="dropdown-menu">
                    <li><a href="<c:url value='/j_spring_security_logout' />">Log out</a></li>
                </ul>
            </li>
        </ul>
		<img class="circular  navbar-right" src="<sec:authentication property="credentials.imageUrl" />" />
	</sec:authorize>
</nav>