//Copyright 2012 Four Seasons Grounds Management, Inc.

//declarations
var _topnav = $('#tn > li');
var subNavSpeed = 100; //how fast to show/hide the subnav on the home page


//init
$(document).ready(function(){
	
	//hide the subnav initially
	$('.sub').hide();
	
	//adjust the nav spacing
	var tnChildren = _topnav.children('a');
	var navbox = _topnav.parent();

		//determine total width of nav items
		var tnChildrenWidth = 0;
		tnChildren.each(function(){
			tnChildrenWidth += $(this).width();
		});
		
		//determine navbox width, calculate item padding
		var navboxWidth = navbox.width();
		var tnMargin = (navboxWidth - tnChildrenWidth) / (tnChildren.length * 2);
		
		//apply directly to the forehead.
		tnChildren.css({paddingLeft: tnMargin + 'px', paddingRight: tnMargin + 'px'}); 


	//register rollover actions for top nav
	
	tnChildren.hoverIntent(
		function () { //on rollover
			toggleNav($(this).parent().children('.sub'));	
		}, function () { //on rollout
			
	});
	
	//register subnav triggers
	//tnChildren.click(function(){toggleNav($(this))});
		
});

function atHome(){
	if($('body').hasClass('home')){
		return true;
		} else { return false; }
}

function toggleNav(trigger){
	console.log($('.snHov').length);
	if(atHome() == true && trigger.length > 0){ //if at home and on an item with a subnav
		if($('.hov').length == 0){ // show the bar if not shown already
			trigger.slideDown(subNavSpeed).addClass('hov');
		} else { //switch to the correct subnav if bar is already visible
			$('.hov').hide().removeClass('ov');
			trigger.show().addClass('hov');
		}
	} else if(atHome() == true && trigger.length == 0){ //hide the subnav if not on a parent
			$('.hov').removeClass('hov').slideUp(subNavSpeed);
		}
		//$(trigger).parent().children('.sub').addClass('snHov');
		//console.log($(trigger).parent().children('.sub'));
	}
	