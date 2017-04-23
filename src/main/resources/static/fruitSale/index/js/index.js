/**
 * 
 */
jQuery(function() {
	homepage();
});

function homepage() {
	jQuery(".navbar-nav > li").removeClass("active");
	jQuery("#home_index").addClass("active");
	
	jQuery.ajax({
		type : "POST",
		url : "homepage",
		success : function(data) {
			jQuery("#content_div").html(data);
		}
	});

}

function intro(obj) {
	jQuery(".navbar-nav > li").removeClass("active");
	jQuery("#intro_index").addClass("active");
	var prod = obj;
	var url = "introduce/"+prod;
	jQuery.ajax({
		type : "POST",
		url : url,		
		success : function(data) {
			jQuery("#content_div").html(data);
		}
	});

}
function toBuy(){
	jQuery(".navbar-nav > li").removeClass("active");
	jQuery("#buy_index").addClass("active");
	jQuery.ajax({
		type : "POST",
		url : "to_buy",		
		success : function(data) {
			jQuery("#content_div").html(data);
		}
	});
}
function aboutUs(){
	jQuery(".navbar-nav > li").removeClass("active");
	jQuery("#about_index").addClass("active");
	jQuery.ajax({
		type : "POST",
		url : "about_us",		
		success : function(data) {
			jQuery("#content_div").html(data);
		}
	});
}
function contactUs(){
	jQuery(".navbar-nav > li").removeClass("active");
	jQuery("#contact_index").addClass("active");
	jQuery.ajax({
		type : "POST",
		url : "contact_us",
		success : function(data) {
			jQuery("#content_div").html(data);
		}
	});
}