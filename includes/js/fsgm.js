// Copyright 2012 Four Seasons Grounds Management, Inc.

var $j = jQuery.noConflict();

//declarations
var $topNav = $j('#tn > li');
var subNavSpeed = 100; //how fast to show/hide the subnav on the home page (in milliseconds)

var $subNavRaw = $j('#tn > li > ul');
var $caretWidth = $j('#caret').width();

var pgSpeed = 1000; //transition speed for photo galleries (in milliseconds)
var pgDelay = 5000; //default delay between slides (in milliseconds)

var navmap = new Array();


//init
$j(document).ready(function(){
	prepareNav(); //configure the navigation to be easier to control
	detectGalleries(); //if there are any photo galleries, enable the functionality
	
	//register subnav triggers
	//$tnChildren.click(function(){toggleNav($j(this))});
		
});

function atHome(){
	if($j('body').hasClass('home')){
		return true;
		} else { return false; }
}

function prepareNav(){
	// let's try this again!

	// let's space out the top nav items evenly, shall we? :)
		var $navBox = $topNav.parent(); // the parent container for the topnav
		var $tnChildren = $topNav.children('a'); // the a tags that will get the padding
		var navBoxWidth = $navBox.outerWidth();
		//determine total width of nav items
		var tnChildrenWidth = 0;
		$tnChildren.each(function(){
			tnChildrenWidth += $j(this).width();
		});
		var tnItemPadding = (navBoxWidth - tnChildrenWidth) / (($tnChildren.length - 1) * 2); // calculate the padding necessary for each item

		// apply directly to the topnav.
		//$tnChildren.css({paddingLeft: tnItemPadding + 'px', paddingRight: tnItemPadding + 'px'});

	// register rollover actions for top nav
	var $tnChildren = $topNav.children('a');

		//when hovering over an item with $tnChildren
		$tnChildren.hoverIntent(function(){toggleNav($j(this))}, function(){}); // *NOTE: hoverIntent is a jQuery plugin and must be present.

		$tnChildren.each(function(){ //for all of the topnav items
			if($j(this).parent().children('ul').length != 0){ // make sure there is a child nav 
				var $subNavItem = $j(this).parent().children('ul');
				var tnItemWidth = $j(this).parent().width();
				var subNavItemWidth = $subNavItem.width();
				var theOffset = (subNavItemWidth - tnItemWidth) / 2 * -1;
				
				//apply the offset
				$subNavItem.css('margin-left', theOffset + 'px');
			}
		});

}



function toggleNav(tgt){ //this is the function that shows & hides the nav
	var $subNavItem = tgt.parent().children('ul');
	var $activeSubNavs = $j('#tn > li > ul.active');
	
	if($subNavItem.length !== 0){ // is there actually a subnav here?
		if($subNavItem.hasClass('active')){return;} // if already active
		$activeSubNavs.fadeOut(subNavSpeed).removeClass('active'); // if anything is displaying, fade it out
		$j('#tn > li > a.active').removeClass('active');
		$j(tgt).addClass('active'); // make the caret visible
		$subNavItem.addClass('active').fadeIn(subNavSpeed); // fade in the subnav
	
	}
	

}

function incrementGallery(direction){
	// var $imgs = $j('div.photoGallery ul li img')
	// var $activeImg = $j('div.photoGallery ul li img.active');
	// if(direction == 'fwd'){ //if going forward
	// 	if($activeImg.parent().next().children().first('img').length != 0){ //if there is a next item
	// 		$activeImg.fadeOut(pgSpeed).removeClass('active').parent().next().children().first().fadeIn(pgSpeed).addClass('active');
	// 	} else { //if there isn't a next item, begin cycle again
	// 		$activeImg.fadeOut(pgSpeed).removeClass('active').parent().parent().children().first().children().first().fadeIn(pgSpeed).addClass('active');
	// 	}
	// } else if(direction == 'back'){ //if going backwards
	// 	if($activeImg.parent().prev().children().first('img').length != 0){ //if there is a previous item
	// 		$activeImg.fadeOut(pgSpeed).removeClass('active').parent().prev().children().first().fadeIn(pgSpeed).addClass('active');
	// 	} else { //if there isn't a previous item, jump to the end
	// 		$activeImg.fadeOut(pgSpeed).removeClass('active').parent().parent().children().last().children().first().fadeIn(pgSpeed).addClass('active');
	// 	}	}
}

function detectGalleries(){
	// var pg = 'div.photoGallery';
	// $j(pg + ' ul li img:first').show().addClass('active');
	// $j('div.photoGallery').each(function(){
	// 	$j(this).prepend("<nav><li><button class='gallery-backButton'>&#8592; Previous</button></li><li><button class='gallery-fwdButton'> Next &#8594;</button></li></nav>");
	// });

	// $j(pg +  ' nav').hide();

	// var galDelay = setInterval("incrementGallery('fwd')", pgDelay); //start the gallery auto-play

	// $j('div.photoGallery nav button.gallery-fwdButton').click(function(){
	// 	incrementGallery('fwd');
	// 	clearInterval(galDelay); //reset the gallery delay
	// });

	// $j('div.photoGallery nav button.gallery-backButton').click(function(){
	// 	incrementGallery('back');
	// })

	// //bind arrow keys
	// $j(document).keydown(function(e){
	// 	clearInterval(galDelay);
	// 	galDelay = setInterval("incrementGallery('fwd')", pgDelay);
	//     if (e.keyCode == 37) { 
	//        incrementGallery('back');
	//        return false;
	//     } else if(e.keyCode == 39){
	//     	incrementGallery('fwd');
	//     	return false;
	//     }
	// });


	// //set up rollover
	// $j(pg).hover(function(){
	// 	clearInterval(galDelay);
	// 	$j(this).children('nav').fadeIn(pgSpeed / 10);
	// },function(){
	// 	$j(this).children('nav').fadeOut(pgSpeed / 10);
	// 	galDelay = setInterval("incrementGallery('fwd')", pgDelay);
	// });
}