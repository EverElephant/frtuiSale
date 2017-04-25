function changeTrolley(dom){
	var num =jQuery(dom).val()
	var type=jQuery(dom).parent().attr("value");
	jQuery.post("to_buy/change_trolley",{"type":type,"num":num},function(){
		jQuery("#listDiv").html(data);
	});
}