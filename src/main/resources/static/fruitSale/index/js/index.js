/**
 * 
 */
jQuery(function() {
	homepage();
});
function loading() {
	jQuery("#content_div").html(
			'<div style="text-align:center;vertical-align:middle;"><img src="com/elp/fruitSale/index/images/loading.png"/></div>');
}

function homepage() {
	jQuery.ajax({
		type : "POST",
		url : "homepage",
		beforeSend : loading,
		success : function(data) {
			jQuery("#content_div").html(data);
		}
	});

}

function intro(obj) {
	var prod = obj;
	var url = "introduce/"+prod;
	jQuery.ajax({
		type : "POST",
		url : url,
		beforeSend : loading,
		success : function(data) {
			jQuery("#content_div").html(data);
		}
	});

}
function toBuy(){
	jQuery.ajax({
		type : "POST",
		url : "to_buy",
		beforeSend : loading,
		success : function(data) {
			jQuery("#content_div").html(data);
		}
	});
}
function aboutUs(){
	jQuery.ajax({
		type : "POST",
		url : "about_us",
		beforeSend : loading,
		success : function(data) {
			jQuery("#content_div").html(data);
		}
	});
}
function contactUs(){
	jQuery.ajax({
		type : "POST",
		url : "contact_us",
		beforeSend : loading,
		success : function(data) {
			jQuery("#content_div").html(data);
		}
	});
}