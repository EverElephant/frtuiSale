function changeTrolley(dom){
	var num =jQuery(dom).val()
//	var type=jQuery(dom).parent().attr("value");
//	jQuery.post("to_buy/change_trolley",{"type":type,"num":num},function(){
//		jQuery("#listDiv").html(data);
//	});
	alert(num);
}


function add(dom) {
	var a = jQuery(dom).prev().val();
    a++;
    jQuery(dom).prev().val(a);
}
function sub(dom) {
	var a = jQuery(dom).next().val();
	if(a>1){
		a--;
	    jQuery(dom).next().val(a);
	}
    
}