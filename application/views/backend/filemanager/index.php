﻿<!DOCTYPE html>
<html>

<head>
	<meta http-equiv="content-type" content="text/html; charset=utf-8" />
	<title>File Manager</title>
	<link rel="stylesheet" type="text/css" href="<?php echo base_url("assets/richfilemanager/styles/reset.css");?>" />
	<link rel="stylesheet" type="text/css" href="<?php echo base_url("assets/richfilemanager/scripts/jquery.filetree/src/jQueryFileTree.css");?>" />
	<link rel="stylesheet" type="text/css" href="<?php echo base_url("assets/richfilemanager/scripts/jquery.contextmenu/dist/jquery.contextMenu.min.css");?>" />
	<link rel="stylesheet" type="text/css" href="<?php echo base_url("assets/richfilemanager/scripts/custom-scrollbar-plugin/jquery.mCustomScrollbar.min.css");?>" />

	<style type="text/css">
		.fm-container #loading-wrap {
			position: fixed;
			height: 100%;
			width: 100%;
			overflow: hidden;
			top: 0;
			left: 0;
			display: block;
			background: white url(./images/wait30trans.gif) no-repeat center center;
			z-index: 999;
		}
	</style>
	<!-- CSS dynamically added using 'config.options.theme' defined in config file -->
</head>

<body>
<div class="fm-container">
	<div id="loading-wrap"><!-- loading wrapper / removed when loaded --></div>
	<div>
		<form id="uploader" method="post">
			<h1></h1>
			<button id="level-up" name="level-up" type="button" value="LevelUp">&nbsp;</button>
			<button id="home" name="home" type="button" value="Home">&nbsp;</button>
			<input id="mode" name="mode" type="hidden" value="add"/>
			<input id="currentpath" name="currentpath" type="hidden"/>
			<div id="file-input-container">
				<div id="alt-fileinput">
					<input id="filepath" name="filepath" type="text"/>
					<button id="browse" name="browse" type="button" value="Browse"></button>
				</div>
				<input id="newfile" name="newfile" type="file"/>
			</div>
			<button id="upload" name="upload" type="button" value="Upload" class="em"></button>
			<button id="newfolder" name="newfolder" type="button" value="New Folder" class="em"></button>
			<button id="grid" class="ON" type="button">&nbsp;</button>
			<button id="list" type="button">&nbsp;</button>
		</form>

		<div id="splitter">
			<div id="filetree"></div>
			<div id="fileinfo">
				<h1></h1>
			</div>
		</div>

		<div id="footer">
			<form name="search" id="search" method="get">
				<div>
					<input type="text" value="" name="q" id="q"/>
					<a id="reset" href="#" class="q-reset"></a>
					<span class="q-inactive"></span>
				</div>
			</form>
			<div class="right">
				<div id="folder-info">
					<span id="items-counter"></span> - <span id="items-size"></span>
				</div>
				<div id="summary"></div>
				<a href="" id="link-to-project"></a>
			</div>
			<div style="clear: both"></div>
		</div>

<!-- 		<script type="text/javascript" src="scripts/jquery-1.11.3.min.js"></script>
		<script src="https://code.jquery.com/jquery-3.0.0.js"></script>
		<script src="https://code.jquery.com/jquery-migrate-3.0.0.js"></script> -->
		<script   src="https://code.jquery.com/jquery-1.11.3.min.js"   integrity="sha256-7LkWEzqTdpEfELxcZZlS6wAx5Ff13zZ83lYO2/ujj7g="   crossorigin="anonymous"></script>
		<script type="text/javascript" src="<?php echo base_url("assets/richfilemanager/scripts/jquery-ui.min.js");?>"></script> <!-- build for drag&drop only -->
		<script type="text/javascript" src="<?php echo base_url("assets/richfilemanager/scripts/jquery-browser.js");?>"></script>
		<script type="text/javascript" src="<?php echo base_url("assets/richfilemanager/scripts/jquery.splitter/jquery.splitter-1.5.1.js");?>"></script>
		<script type="text/javascript" src="<?php echo base_url("assets/richfilemanager/scripts/jquery.filetree/src/jQueryFileTree.js");?>"></script>
		<script type="text/javascript" src="<?php echo base_url("assets/richfilemanager/scripts/jquery.contextmenu/dist/jquery.contextMenu.min.js");?>"></script>
		<script type="text/javascript" src="<?php echo base_url("assets/richfilemanager/scripts/jquery.impromptu/dist/jquery-impromptu.min.js");?>"></script>
		<script type="text/javascript" src="<?php echo base_url("assets/richfilemanager/scripts/TinySort/dist/tinysort.js");?>"></script>
		<script type="text/javascript" src="<?php echo base_url("assets/richfilemanager/scripts/TinySort/dist/jquery.tinysort.js");?>"></script>
		<script type="text/javascript" src="<?php echo base_url("assets/richfilemanager/scripts/javascript-templates/js/tmpl.min.js");?>"></script>
		<!-- Load jquery file upload library -->
		<script type="text/javascript" src="<?php echo base_url("assets/richfilemanager/scripts/jQuery-File-Upload/js/vendor/jquery.ui.widget.js");?>"></script>
		<script type="text/javascript" src="<?php echo base_url("assets/richfilemanager/scripts/jQuery-File-Upload/js/canvas-to-blob.min.js");?>"></script>
		<script type="text/javascript" src="<?php echo base_url("assets/richfilemanager/scripts/jQuery-File-Upload/js/load-image.all.min.js");?>"></script>
		<script type="text/javascript" src="<?php echo base_url("assets/richfilemanager/scripts/jQuery-File-Upload/js/jquery.iframe-transport.js");?>"></script>
		<script type="text/javascript" src="<?php echo base_url("assets/richfilemanager/scripts/jQuery-File-Upload/js/jquery.fileupload.js");?>"></script>
		<script type="text/javascript" src="<?php echo base_url("assets/richfilemanager/scripts/jQuery-File-Upload/js/jquery.fileupload-process.js");?>"></script>
		<script type="text/javascript" src="<?php echo base_url("assets/richfilemanager/scripts/jQuery-File-Upload/js/jquery.fileupload-image.js");?>"></script>
		<script type="text/javascript" src="<?php echo base_url("assets/richfilemanager/scripts/jQuery-File-Upload/js/jquery.fileupload-validate.js");?>"></script>
		<!-- Load filemanager script -->
		<script type="text/javascript" src="<?php echo base_url("assets/richfilemanager/scripts/filemanager.min.js");?>"></script>
	</div>
</div>
</body>

</html>