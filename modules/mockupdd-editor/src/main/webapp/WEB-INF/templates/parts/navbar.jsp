<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="sec" uri="http://www.springframework.org/security/tags" %>

<script>
    function saveAndGoBack() {
        if(typeof MockupAutosaveService !== 'undefined') MockupAutosaveService();
        history.back();
    }
</script>
<nav class="navbar navbar-default mk-navbar">
	<sec:authorize access="isAuthenticated()">
		<a class="navbar-brand" style="cursor:pointer" onclick="saveAndGoBack()">MockupDD <span class="glyphicon glyphicon-arrow-left"></span></a>
        <ul class="nav navbar-nav navbar-right" style="margin-right: 60px;">
            <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">${loggedUser.displayName}<b class="caret"></b></a>
                <ul class="dropdown-menu">
                    <li><a href="<c:url value='/j_spring_security_logout' />">Log out</a></li>
                </ul>
            </li>
        </ul>
		<img class="circular navbar-right" src="<sec:authentication property="credentials.imageUrl" />" />
	</sec:authorize>
</nav>

<script src="//code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
<link rel="stylesheet" href="//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css">
<link rel="stylesheet" href="/css/style.css">
<link rel="stylesheet" href="/css/navbar.css">
