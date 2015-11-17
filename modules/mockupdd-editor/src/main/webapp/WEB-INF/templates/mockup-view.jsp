<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@ taglib prefix="t" tagdir="/WEB-INF/tags"%>
<t:baseLayout>
  <jsp:attribute name="title">${mockup.name}</jsp:attribute>
  <jsp:attribute name="head">
 	<link href="https://gitcdn.github.io/bootstrap-toggle/2.2.0/css/bootstrap-toggle.min.css" rel="stylesheet">
	<script src="https://gitcdn.github.io/bootstrap-toggle/2.2.0/js/bootstrap-toggle.min.js"></script>
    <link href="/css/sidebar.css" type="text/css" rel="stylesheet">
    <jsp:include page="/WEB-INF/templates/parts/widgets.jsp" />
    <script>
    	/** @author: Viral Patel. 
    	 *	Adds on("show"|"hide") events to jQuery.
    	 */
    	(function ($) {
          $.each(['show', 'hide'], function (i, ev) {
            var el = $.fn[ev];
            $.fn[ev] = function () {
              this.trigger(ev);
              return el.apply(this, arguments);
            };
          });
        })(jQuery);
    
    	var mockupEditor = MockupEditor.getCurrentEditor();

    	// On ready function
    	$(function(){
		  // Draws the mockup in page.
		  $("#editorStatus").append(mockupEditor.getEditorModeIndicator());
		  $("#page").append(mockupEditor.getContainer());

		  mockupEditor.loadMockup(${mockup.id}, "${mockup.name}", '${mockup.jsonData}');
		  mockupEditor.switchToEditMode();
    	});
    </script>
  </jsp:attribute>
  <jsp:body>
	<div id="wrapper">
	
	  <!-- Sidebar for widgets creation -->
      <c:set var="widgetWidth" value="${130}"/> <%-- Widget width within the toolbox --%>
      <c:set var="widgetHeight" value="${100}"/> <%-- Widget height within the toolbox --%>
      
      <div class="sidebar-wrapper statebar" style="width:<c:out value="${widgetWidth*2+17}"/>px; ">
        <div class="sidebar-nav" style="width: 100%;">
          <div id="editorStatus" class="sidebar-brand" style="position: absolute; top: 0px; left: 0px;">

          </div>
        </div>
      </div>
      <div class="sidebar-wrapper widgetbar" style="width:<c:out value="${widgetWidth*2+17}"/>px;">
        <div class="sidebar-nav" style="width: 100%;">
          <div style="position: absolute; top: <c:out value="${widgetHeight*0}"/>px; left: 0px; width:<c:out value="${widgetWidth}"/>px; padding:<c:out value="${widgetWidth*0.05}"/>px;">
          	<div style="text-align: center;">
          		<label class="control-label">Title:</label>
          	</div>
            <div id="create-title" class="mk mk-title widget-selector" style="top:<c:out value="${widgetHeight*1+widgetHeight*0.30}"/>px">
            	This is a title
            </div>
            <script>
              $('#create-title').click(function(){
            	  mockupEditor.addWidget(new Title());
              })
            </script>
          </div>
          <div style="position: absolute; top: <c:out value="${widgetHeight*0}"/>px; left: <c:out value="${widgetWidth}"/>px; width:<c:out value="${widgetWidth}"/>px; padding:<c:out value="${widgetWidth*0.05}"/>px">
            <div style="text-align: center;">
            	<label class="control-label">Label:</label>
            </div>
            <div id="create-label" class="mk mk-label widget-selector" style="top:<c:out value="${widgetHeight*1+widgetHeight*0.30}"/>px">
            	This is a label
            </div>
            <script>
              $('#create-label').click(function(){
            	  mockupEditor.addWidget(new Label());
              })
            </script>
          </div>
          <div style="position: absolute; top: <c:out value="${widgetHeight*1}"/>px; left: 0px; width:<c:out value="${widgetWidth}"/>px; padding:<c:out value="${widgetWidth*0.05}"/>px">
            <div style="text-align: center;">
            	<label class="control-label">Input</label>
            </div>
            <div id="create-input" class="mk mk-input widget-selector" style="top:<c:out value="${widgetHeight*2+widgetHeight*0.30}"/>px">
              <span class="form-control"></span>
            </div>
            <script>
              $('#create-input').click(function(){
            	  mockupEditor.addWidget(new Input());
              })
            </script>
          </div>
          <div style="position: absolute; top: <c:out value="${widgetHeight*1}"/>px; left: <c:out value="${widgetWidth}"/>px; width:<c:out value="${widgetWidth}"/>px; padding:<c:out value="${widgetWidth*0.05}"/>px">
            <div style="text-align: center;">
            	<label class="control-label">Button</label>
            </div>
            <div id="create-button" class="mk mk-button widget-selector" style="top:<c:out value="${widgetHeight*2+widgetHeight*0.30}"/>px; width:100%;">
              <button class="btn btn-primary">Button</button>
            </div>
            <script>
              $('#create-button').click(function(){
                mockupEditor.addWidget(new Button());
              })
            </script>
          </div>
<!--Boton2-->
          <div style="position: absolute; top: <c:out value="${widgetHeight*2}"/>px; left: <c:out value="${widgetWidth}"/>px; width:<c:out value="${widgetWidth}"/>px; padding:<c:out value="${widgetWidth*0.05}"/>px">
            <div style="text-align: center;">
              <label class="control-label">Button2</label>
            </div>
            <div id="create-button2" class="mk mk-button2 widget-selector" style="top:<c:out value="${widgetHeight*2+widgetHeight*0.30}"/>px; width:100%;">
              <button class="btn btn-primary">Button2</button>
            </div>
            <script>
              $('#create-button2').click(function(){
                mockupEditor.addWidget(new Button2())
              })
            </script>
          </div>
<!--Checkbox-->
          <div style="position: absolute; top: <c:out value="${widgetHeight*3}"/>px; left: <c:out value="${widgetWidth}"/>px; width:<c:out value="${widgetWidth}"/>px; padding:<c:out value="${widgetWidth*0.05}"/>px">
            <div style="text-align: center;">
              <label class="control-label">Checkbox</label>
            </div>
            <div id="create-checkbox" class="mk mk-checkbox widget-selector" style="top:<c:out value="${widgetHeight*2+widgetHeight*0.30}"/>px; width:100%;">
              <button class="<input type='checkbox'>">Checkbox</button>
            </div>
            <script>
              $('#create-checkbox').click(function(){
                mockupEditor.addWidget(new Checkbox())
              })
            </script>
          </div>
          

          <div style="position: absolute; top: <c:out value="${widgetHeight*2}"/>px; left: 0px; width:<c:out value="${widgetWidth}"/>px; padding:<c:out value="${widgetWidth*0.05}"/>px">
            <div style="text-align: center;">
            	<label class="control-label">Panel</label>
            </div>
            <div id="create-panel" class="mk widget-selector" style="top:<c:out value="${widgetHeight*3+widgetHeight*0.30}"/>px">
              <div class="panel panel-info">
                <div class="panel panel-heading">  
                  Panel
                </div>
              </div>
            </div>
            <script>
              $('#create-panel').click(function(){
            	  mockupEditor.addWidget(new Panel());
              })
            </script>
          </div>
        </div>
      </div>
      <div id="page" style="height: 100%; margin-left: <c:out value="${widgetWidth*2+17}"/>px; position: fixed;">
      </div>
      <!-- Modal for edition and deletion of widgets -->
      <div id="widget-edit-modal" class="modal fade" style="overflow-y: auto;">
	  <div class="modal-dialog">
	    <div class="modal-content">

	      <div class="modal-body form-horizontal">
	      </div>
          <div class="modal-footer">
            
          </div>
	    </div>
	  </div>
	  </div>
      <script type="text/javascript">
      	$("#myModal").on("hide", function(){
      	  $("#delete-widget").off();
      	  $("#save-changes").off();
      	});
      </script>
	</div>
  </jsp:body>
</t:baseLayout>
