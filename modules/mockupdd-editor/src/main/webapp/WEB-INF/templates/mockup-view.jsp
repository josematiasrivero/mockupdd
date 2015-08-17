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
    <style>

    </style>
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
    	// On ready function
    	$(function(){
		  // Draws the mockup in page.


		  
		  $("#modeToggle").bootstrapToggle({
			  on: "Run",
			  onstyle: "success",
			  off: "Edit",
			  offstyle: "primary"
		  })
		  $("#modeToggle").change(function(){
			  if($(this).prop("checked")){
				  MockupEditor.switchToRunMode();
			  } else {
				  MockupEditor.switchToEditMode();
			  }
		  })
		  MockupEditor.loadMockup(${mockup.id}, "${mockup.name}", '${mockup.jsonData}');
		  MockupEditor.switchToEditMode();
    	});
    </script>
  </jsp:attribute>
  <jsp:body>
    <!-- Sidebar for widgets creation -->
	<div id="wrapper">
      <div id="sidebar-wrapper">
        <ul class="sidebar-nav">
          <li class="sidebar-brand">
          	<label>Mode:
            	<input id="modeToggle" type="checkbox">
            </label>
          </li> 
          <li class="sidebar-brand">
            <label class="control-label">Elements
            <div id="persistence-state" style="position: relative;"></div>
            </label>
          </li>          
          <li>
            <label class="control-label">Title</label>
            <div id="create-title" class="mk mk-title">This is a title</div>
            <script>
              $('#create-title').click(function(){
            	  MockupEditor.addWidget(new Title());
              })
            </script>
          </li>
          <li>
            <label class="control-label">Label</label>
            <div id="create-label" class="mk mk-label" style="position: relative;">Label:</div>
            <script>
              $('#create-label').click(function(){
            	  MockupEditor.addWidget(new Label());
              })
            </script>
          </li>
          <li>
            <label class="control-label">Input</label>
            <div id="create-input" class="mk mk-input">
              <span class="form-control"></span>
            </div>
            <script>
              $('#create-input').click(function(){
            	  MockupEditor.addWidget(new Input());
              })
            </script>
          </li>
          <li>
            <label class="control-label">Button</label>
            <div id="create-button" class="mk mk-button">
              <button class="btn btn-primary">Button</button>
            </div>
            <script>
              $('#create-button').click(function(){
                MockupEditor.addWidget(new Button());
              })
            </script>
          </li>
          <li>
            <label class="control-label">Panel</label>
            <div id="create-panel" class="mk">
              <div class="panel panel-info">
                <div class="panel panel-heading">  
                  Panel
                </div>
              </div>
            </div>
            <script>
              $('#create-panel').click(function(){
            	  MockupEditor.addWidget(new Panel());
              })
            </script>
          </li>
        </ul>
      </div>
      <div id="page" style="height: 100%; margin-left: 250px; position: fixed;">
      </div>
      <!-- Modal for edition and deletion of widgets -->
      <div class="container">
        <h4>${mockup.name}</h4>
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
