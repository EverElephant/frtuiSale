function changeTrolley(dom){
	var num =jQuery(dom).val()
	var type=jQuery(dom).parent().parent().children(":first").text();

	add_to(type,Number(num));
	calculate_total();
}


function add(dom) {
	var a = jQuery(dom).prev().val();
	var t = jQuery(dom).parent().parent().children(":first").text();
	var p = jQuery(dom).parent().parent().children(":first").next().next().text();
    a++;
    add_to(t,a);
    jQuery(dom).prev().val(a);
    var oldsum = jQuery("#susum").text();
    var newsum = parseFloat(oldsum)+parseFloat(p);
    jQuery("#susum").text(newsum.toFixed(1));
    
}
function sub(dom) {
	var a = jQuery(dom).next().val();
	var t = jQuery(dom).parent().parent().children(":first").text();
	var p = jQuery(dom).parent().parent().children(":first").next().next().text();
	if(a>1){
		a--;
		add_to(t,a);
		jQuery(dom).next().val(a);
		var oldsum = jQuery("#susum").text();
	    var newsum = parseFloat(oldsum)-parseFloat(p);
	    jQuery("#susum").text(newsum.toFixed(1));
	}
	
}
function add_to(type,num){
	// 用于保存购物车商品信息
	var shopping_trolley = [];

	// 先获取当前cookie
	var cookies = document.cookie.split('; ');
	for(var i=0;i<cookies.length;i++){
		var arr = cookies[i].split('=');
		if(arr[0] === 'shopping_trolley'){
			shopping_trolley = JSON.parse(arr[1]);
		}
	}



	for(var i=0;i<shopping_trolley.length;i++){
		if(shopping_trolley[i].type == type){
			shopping_trolley[i].num =num;
			break;
		}
	}

	// 存入cookie
	// 把对象/数组转换诚json字符串：JSON.stringify()
	var Days = 30;
	var exp = new Date(); 
	exp.setTime(exp.getTime() + Days*24*60*60*1000);
	document.cookie = 'shopping_trolley=' + JSON.stringify(shopping_trolley) + ";expires=" + exp.toGMTString();

}
function calculate_total(){
	var total=0.0;
	jQuery("#listDiv tr").each(function(index) {
		if(index!=0){
			var p =jQuery(this).find(".price").text();
			var n =jQuery(this).find(".num").children("input").val();
			total = parseFloat(n)*parseFloat(p)+total;
		}
	})
	jQuery("#susum").text(total.toFixed(1));
}
function remove_from(dom){
	var tr =jQuery(dom).parent().parent();
	var type = jQuery(tr).children(":first").text();
	// 用于保存购物车商品信息
	var shopping_trolley = [];

	// 先获取当前cookie
	var cookies = document.cookie.split('; ');
	for(var i=0;i<cookies.length;i++){
		var arr = cookies[i].split('=');
		if(arr[0] === 'shopping_trolley'){
			shopping_trolley = JSON.parse(arr[1]);
		}
	}



	for(var i=0;i<shopping_trolley.length;i++){
		if(shopping_trolley[i].type == type){
			shopping_trolley.splice(i,1);
			break;
		}
	}

	// 存入cookie
	// 把对象/数组转换诚json字符串：JSON.stringify()
	var Days = 30;
	var exp = new Date(); 
	exp.setTime(exp.getTime() + Days*24*60*60*1000);
	document.cookie = 'shopping_trolley=' + JSON.stringify(shopping_trolley) + ";expires=" + exp.toGMTString();
	
	
	if(shopping_trolley.length!=0){
		jQuery(tr).remove();
		calculate_total();
	}else{
		jQuery(".row .table-bordered").parent().next().remove();
		jQuery(".row .table-bordered").parent().html("<span>购物车为空</span>");	
	}
}

function remove_all(){
	document.cookie = 'shopping_trolley=[]';
	jQuery(".row .table-bordered").parent().next().remove();
	jQuery(".row .table-bordered").parent().html("<span>购物车为空</span>");	
}