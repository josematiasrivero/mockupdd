<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@taglib prefix="t" tagdir="/WEB-INF/tags" %>
<!DOCTYPE html>
<t:baseLayout>
<jsp:attribute name="title">${mockup.name}</jsp:attribute>
<jsp:attribute name="head">

	<script src="/libs/jcrop.min.js"></script>
	<script src="/libs/class.js" type="text/javascript"></script>
	<script src="/scripts/mockupdd-image-tagging/ui/Widget.js" type="text/javascript"></script>
	<script src="/scripts/mockupdd-image-tagging/ui/TagWidget.js" type="text/javascript"></script>
	<script src="/scripts/mockupdd-image-tagging/model/Mockup.js" type="text/javascript"></script>
	<script src="/scripts/mockupdd-image-tagging/store/MockupModelLocalStorageStore.js" type="text/javascript"></script>
	<link rel="stylesheet" href="/css/jcrop.min.css">
	<link rel="stylesheet" href="/css/image-mockup-tagging.css">
	
	<script type="text/javascript">
		var jcrop;
		var lastHighlight;
		var lastCoords;
		var menuOffset = {x: 11, y: 110};
		
		var store = new MockupModelLocalStorageStore();
		var mockupId = 1;
		var model = new Mockup();

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
		
		function deleteTag(tag) {
			console.log(tag);	
		}
		
		function createTagWidget(tag) {
			return new TagWidget($("body"), tag).on("delete", function(tag) {
				console.log(tag);
				saveModel();
			});
		}
		
		function saveModel() {
			store.saveModel(mockupId, model, function() {
				console.log("Model saved");
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
					var tag = {
						type: menuEntry, 
						x: lastCoords.x, 
						y: lastCoords.y, 
						width: lastCoords.w, 
						height: lastCoords.h
					};
					var tagWidget = createTagWidget(tag);
					model.addTag(tag);
					saveModel();
				}
				
				lastHighlight.remove();
				$("#menu").hide();
			});
			
			store.getModel(mockupId, function(mockupModel) {
				if (!mockupModel) {
					return;
				}
				var tags = mockupModel.getTags();
				model = mockupModel;
				for (i in tags) {
					createTagWidget(tags[i]);
				}
			})

		});
	</script>
</jsp:attribute>
<jsp:body>
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
</jsp:body>
</t:baseLayout>
