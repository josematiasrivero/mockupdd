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
<script src="/libs/jcrop.min.js"></script>

<link rel="stylesheet" href="/css/jcrop.min.css">
<link rel="stylesheet" href="/css/image-mockup-tagging.css">
<link rel="stylesheet" href="/css/bootstrap3.min.css">

<style type="text/css"></style>
</head>
<body>

  <nav class="navbar navbar-default" role="navigation">
    <a class="navbar-brand">MockupDD</a>
  </nav>

  <script type="text/javascript">
			var jcrop;
			var lastHighlight;
			var lastCoords;
			var menuOffset = {x: 11, y: 110};

			function buildHighlightAt(coords, label) {
				var highlight = label ? $('<div class="item-highlight-with-label">') : $('<div class="item-highlight">');
				highlight.offset({
					left : coords.x,
					top : coords.y
				});
				highlight.height(coords.h);
				highlight.width(coords.w);
				if (label) {
					highlight.append("<div>" + label + "</div>")
				}
				highlight.appendTo("body");
				return highlight;
			}

			function showMenuAt(coords) {
				$("#menu").show();
				console.log({
					left : coords.x,
					top : coords.y + coords.h
				});
				$("#menu").offset({
					left : coords.x + menuOffset.x,
					top : coords.y + coords.h + menuOffset.y
				})
			}

			$(document).ready(function() {

				jcrop = $("img").Jcrop({
					allowResize : false,
					onSelect : function(coords) {
						console.log(coords);
						this.release();
						lastHighlight = buildHighlightAt(coords);
						lastCoords = coords;
						showMenuAt(coords);
					}
				});

				$(".menu-item").click(function() {
					var menuEntry = $(this).data("menu-entry");
					if (menuEntry != "close") {
						buildHighlightAt(lastCoords, menuEntry);
					}
					lastHighlight.remove();
					$("#menu").hide();
				})

			});
		</script>

  <div class="container">

    <h4>${mockup.name}</h4>

    <img src="/images/m1.png" style="psoition: absolute"/>

    <ul id="menu" class="list-group widget-menu" style="display: none; position: absolute; z-index: 99999999">
      <li class="menu-item list-group-item" data-menu-entry="close">[close]</li>
      <li class="menu-item list-group-item" data-menu-entry="inputbox">Input box</li>
      <li class="menu-item list-group-item" data-menu-entry="dropdown">Dropdown list</li>
      <li class="menu-item list-group-item" data-menu-entry="radiobutton">Choose one of...</li>
      <li class="menu-item list-group-item" data-menu-entry="checkbox">Check option</li>
      <li class="menu-item list-group-item" data-menu-entry="label">Label, text or information</li>
      <li class="menu-item list-group-item" data-menu-entry="panel">Group of elements</li>
    </ul>

  </div>



</body>
</html>