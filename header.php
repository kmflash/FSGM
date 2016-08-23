<!DOCTYPE html>

<html <?php language_attributes(); ?>>

<head>
	
	<meta http-equiv="Content-Type" content="<?php bloginfo('html_type'); ?>; charset=<?php bloginfo('charset'); ?>" />
	
	<?php if (is_search()) { ?>
	   <meta name="robots" content="noindex, nofollow" /> 
	<?php } ?>
	<!--Load jQuery -->
    <?php wp_enqueue_script("jquery"); ?>

	<title>
		   <?php
		      if (function_exists('is_tag') && is_tag()) {
		         single_tag_title("Tag Archive for &quot;"); echo '&quot; - '; }
		      elseif (is_archive()) {
		         wp_title(''); echo ' Archive - '; }
		      elseif (is_search()) {
		         echo 'Search for &quot;'.wp_specialchars($s).'&quot; - '; }
		      elseif (!(is_404()) && (is_single()) || (is_page())) {
		         wp_title(''); echo ' - '; }
		      elseif (is_404()) {
		         echo 'Not Found - '; }
		      if (is_home()) {
		         bloginfo('name'); echo ' - '; bloginfo('description'); }
		      else {
		          bloginfo('name'); }
		      if ($paged>1) {
		         echo ' - page '. $paged; }
		   ?>
	</title>
	
	<!-- Normalize all CSS rules to work cross-browser -->
		 <link rel="stylesheet" href="<?php bloginfo('template_directory') ?>/includes/css/normalize.css"> 
				
		<link rel="stylesheet" href="<?php bloginfo('template_directory') ?>/includes/css/base.css" />
		
		<!--Load Gentium Book Basic [specimen: http://www.google.com/webfonts/specimen/Gentium+Book+Basic ]-->
		<link href='http://fonts.googleapis.com/css?family=Gentium+Book+Basic:400,400italic' rel='stylesheet' type='text/css'>
		
		<!-- HTML5 shim, for IE6-8 support of HTML5 elements -->
		<!--[if lt IE 9]>
		  <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
		<![endif]-->

	<?php wp_head(); ?>
	
</head>

<body <?php body_class(); ?>>
<div id="fb-root"></div>
	<script src="https://apis.google.com/js/platform.js" async defer></script>
	<script>(function(d, s, id) {
		// Facebook
	  var js, fjs = d.getElementsByTagName(s)[0];
	  if (d.getElementById(id)) return;
	  js = d.createElement(s); js.id = id;
	  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.6&appId=161710840532512";
	  fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));</script>
	<div id="wrapper">
		<header>
			<h1 id='logo'><a href="<?php echo get_option('home'); ?>/"><img src="<?php bloginfo('template_directory') ?>/img/fsgm_logo-big.gif" alt="<?php bloginfo('name'); ?>" /></a></h1>
			<nav id='topnav'  class='clearfix'>
				<div id='subnavBg'>
				</div> <!--END #subnavBg-->
				<?php wp_nav_menu(array( 'container' => false, 
										 'menu_id' => 'tn') ); ?>
			</nav> <!-- END #topnav -->
		</header>
		<section id='contentWell'>
