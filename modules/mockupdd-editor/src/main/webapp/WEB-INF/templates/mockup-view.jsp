<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@ taglib prefix="t" tagdir="/WEB-INF/tags"%>
<t:baseLayout>
  <jsp:attribute name="title">${mockup.name}</jsp:attribute>
  <jsp:attribute name="head">
    <link href="/css/sidebar.css" type="text/css" rel="stylesheet">
    <jsp:include page="/WEB-INF/templates/parts/widgets.jsp" />
    <script>
    	/** By: Viral Patel. 
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
    	$(function(){
    	  PersistenceManager.startupMockup(${mockup.id}, "${mockup.name}", '${mockup.jsonData}');
    	});
    </script>
  </jsp:attribute>
  <jsp:body>
	<div id="wrapper">
      <div id="sidebar-wrapper">
        <ul class="sidebar-nav">
          <li class="sidebar-brand">
            <label class="control-label">Elements</label>
            <div id="persistence-state" style="position: relative;"></div>
          </li>          
          <li>
            <label class="control-label">Title</label>
            <div id="create-title" class="mk mk-title">This is a title</div>
            <script>
              $('#create-title').click(function(){
                (new Title()).draw();
              })
            </script>
          </li>
          <li>
            <label class="control-label">Label</label>
            <div id="create-label" class="mk mk-label" style="position: relative;">Label:</div>
            <script>
              $('#create-label').click(function(){
                (new Label()).draw();
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
                (new Input()).draw();
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
                (new Button()).draw();
              })
            </script>
          </li>
        </ul>
      </div>
      <div id="page" style="height:100%; margin-left:250px; position:fixed;">
      </div>
      <div class="container">
        <h4>${mockup.name}</h4>
        <div id="myModal" class="modal fade" style="overflow-y: auto;">
		  <div class="modal-dialog">
		    <div class="modal-content">
		      <div class="modal-header">
		        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
		        <h4 class="modal-title"></h4>
		      </div>
		      <div class="modal-body">
		      </div>
	          <div class="modal-footer">
	            <button type="button" id="close" class="btn btn-default" data-dismiss="modal">Close</button>
                <button type="button" id="delete-widget" class="btn btn-danger" data-dismiss="modal">Delete</button>
	            <button type="button" id="save-changes" class="btn btn-primary">Save changes</button>
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
