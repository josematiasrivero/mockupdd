<%@ taglib prefix="sec"
	uri="http://www.springframework.org/security/tags"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<link
	href="https://gitcdn.github.io/bootstrap-toggle/2.2.0/css/bootstrap-toggle.min.css"
	rel="stylesheet">
<script
	src="https://gitcdn.github.io/bootstrap-toggle/2.2.0/js/bootstrap-toggle.min.js"></script>
<link href="/css/sidebar.css" type="text/css" rel="stylesheet">
<script src="/scripts/widget-creation.js"></script>
<script src="/scripts/mockup-processing.js"></script>
<div id="main-container">
	<div id="mk-sidebar">
		<div class="col-md-12">
			<div id="editorStatus" class="row mk-state">
				<div class="col-md-7 text-right" style="display: none">
					<label>Mode:
						<div class="toggle btn btn-primary off vcenter"
							data-toggle="toggle">
							<input id="modeToggle" type="checkbox">
							<div class="toggle-group">
								<label class="btn btn-success toggle-on">Run</label> <label
									class="btn btn-primary active toggle-off">Edit</label> <span
									class="toggle-handle btn btn-default"></span>
							</div>
						</div>
					</label>
				</div>
				<div class="col-md-6 text-left">
					<label>State:&nbsp;<span id="mockupState">Saved</span></label>
				</div>
				<div class="col-md-6 text-left">
					<button class="btn btn-primary btn-sm" onclick="$('#conflictsModal').modal()">Detect conflicts</button>
				</div>
			</div>
		</div>

		<!-- Widgets printed in pairs -->
		<div class="col-md-12 mk-widget-list">
			<div class="row mk-sidebar-item">
				<div id="title" class="col-md-6">
					<div class="text-center">
						<label class="control-label">Title:</label>
					</div>
					<div id="create-title" class="text-center mk-widget-selector">
						This is a title</div>
				</div>

				<div id="label" class="col-md-6">
					<div class="text-center">
						<label class="control-label">Label:</label>
					</div>
					<div id="create-label" class="text-center mk-widget-selector">
						This is a label</div>
				</div>
			</div>

			<div class="row mk-sidebar-item">
				<div id="input" class="col-md-6">
					<div class="text-center">
						<label class="control-label">Input</label>
					</div>
					<div id="create-input" class="text-center mk-widget-selector">
						<span class="form-control"></span>
					</div>
				</div>

				<div id="button" class="col-md-6">
					<div class="text-center">
						<label class="control-label">Button</label>
					</div>
					<div id="create-button" class="text-center mk-widget-selector">
						<button class="btn btn-primary">Button</button>
					</div>
				</div>
			</div>

			<div class="row mk-sidebar-item">
				<div id="panel" class="col-md-6">
					<div class="text-center">
						<label class="control-label">Panel</label>
					</div>
					<div id="create-panel" class="text-center mk-widget-selector">
						<div class="panel panel-info">
							<div class="panel panel-heading">Panel</div>
						</div>
					</div>
				</div>

				<div id="textarea" class="col-md-6">
					<div class="text-center">
						<label class="control-label">TextArea</label>
					</div>
					<div id="create-textarea" class="text-center mk-widget-selector">
						<span class="form-control"></span>
					</div>
				</div>
			</div>

			<div class="row mk-sidebar-item">
				<div id="image" class="col-md-6">
					<div class="text-center">
						<label class="control-label">Image</label>
					</div>
					<div id="create-image" style>
						<img src="<sec:authentication property="credentials.imageUrl" />" style="width: 85px; height: 80px;"/>
					</div>
				</div>

				<div id="link" class="col-md-6">
					<div class="text-center">
						<label class="control-label">Link:</label>
					</div>
					<div id="create-link" class="text-center mk-widget-selector">
						This is a link</div>
				</div>
			</div>

			<div class="row mk-sidebar-item">
				<div id="checkbox" class="col-md-6">
					<div class="text-center">
						<label class="control-label">Checkbox</label>
					</div>
					<div id="create-checkbox" class="text-center mk-widget-selector">
						<span class="form-control"></span>
					</div>
				</div>
			</div>

		</div>
	</div>
	<div id="main-content"></div>
</div>
