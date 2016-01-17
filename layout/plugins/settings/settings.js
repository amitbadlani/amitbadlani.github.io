var parameters =  new Array();

var settings_block = '<div class="block-settings-wrapper">\
		<div id="block_settings" class="block_settings">\
			<section>\
				<h3>HEADER STYLE</h3>\
				<ul>\
					<li class="header-index"><a href="index.html">Video Background</a></li>\
					<li class="header-index-2"><a href="index-2.html">Image Pattern</a></li>\
					<li class="header-index-3"><a href="index-3.html">Static Image</a></li>\
					<li class="header-index-4"><a href="index-4.html">Static Image With Video</a></li>\
					<li class="header-index-5"><a href="index-5.html">Slideshow With Static Content</a></li>\
					<li class="header-index-6"><a href="index-6.html">Slideshow With Dynamic Content</a></li>\
				</ul>\
				<hr>\
				<h3>COLORS</h3>\
				<span class="green" title="Green" />\
				<span class="blue" title="Blue" />\
				<span class="red" title="Red" />\
				<span class="turquoise" title="Turquoise" />\
				<span class="purple" title="Purple" />\
				<span class="orange" title="Orange" />\
				<span class="yellow" title="Yellow" />\
				<span class="grey" title="Grey" />\
			</section>\
			<a href="#" id="settings_close">Close</a>\
		</div>\
	</div>';

//Init color buttons
function initColor() {
	$('.block-settings-wrapper section span').click(function() {	
		var cls = $(this).attr('class');
		$('#logo img').attr('src', 'images/logo-'+cls+'.png');
		$("link.colors").attr('href', 'layout/colors/'+cls+'.css');
	});
}

//Init open/close button	
function initClose() {
	parameters.push('opened');
	
	$('#settings_close').click(function(e) {
		$('body').toggleClass('opened-settings');
		
		if(!$.cookies.get('opened')) {
			$.cookies.set('opened', 'opened-settings');
		} else {
			$.cookies.del('opened');
		}
		
		e.preventDefault();	
	});
}

//Init cookies
function initCookies() {
	for(key in parameters) {
		var name = parameters[key];
		var parameter = $.cookies.get(name);
		if(parameter) {
			$('body').addClass(parameter);
		}
	}
}

$(document).ready(function() {
	$('body').prepend(settings_block);
	initColor();	
	initClose();
	initCookies();
	
	//Activate header style
	var url = window.location.href;
	var ind = url.lastIndexOf("/");
	url = url.substr(ind+1);
	
	ind = url.indexOf(".");
	url = url.substr(0, ind);
	
	if (url=="") {url = "index";}
	
	$page = $("li.header-"+url);
	
	$page.addClass("active");
	$page.append('<i class="fa fa-check"></i>');
});