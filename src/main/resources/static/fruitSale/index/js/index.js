/**
 * 
 */
jQuery(function() {
	homepage();
});

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