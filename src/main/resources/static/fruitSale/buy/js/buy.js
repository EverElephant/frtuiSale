/**
 * 手机端商品滑动
 */
var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    slidesPerView: 'auto',
    loop: true,
    centeredSlides: true,
    paginationClickable: true,
    spaceBetween: 30
});
function add_to(type){
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

	// 先创建一个对象保存当前商品信息
	var goodsObj = {};
	goodsObj.type = type;
	goodsObj.num = 1;
	

	// 如果cookie为空，则直接添加
	if(shopping_trolley.length==0){
		// 添加到shopping_trolley
		shopping_trolley.push(goodsObj);
	}else{
		// 先判断cookie中有无相同的guid商品
		for(var i=0;i<shopping_trolley.length;i++){
			// 如果商品已经存在cookie中，则数量+1
			if(shopping_trolley[i].type == type){
				shopping_trolley[i].num++;
				break;
			}
		}

		// 如果原cookie中没有当前商品
		if(i==shopping_trolley.length){
			// 添加到shopping_trolley
			shopping_trolley.push(goodsObj);
		}
	}	
	// 存入cookie
	// 把对象/数组转换诚json字符串：JSON.stringify()
	var Days = 30;
	var exp = new Date(); 
	exp.setTime(exp.getTime() + Days*24*60*60*1000);
	document.cookie = 'shopping_trolley=' + JSON.stringify(shopping_trolley) + ";expires=" + exp.toGMTString();

}
function checkTrolley(){
	jQuery.post("to_buy/trolley",function(data){
		jQuery("#listDiv").html(data);
	});
//	jQuery.ajax({
//			url : "to_buy/trolley",
//	        dataType: 'json',
//	        type : 'POST',
//	        crossDomain: true,
//	        contentType: "application/json",
//	        complete:function(data){
//	    		jQuery("#listDiv").html(data);
//	        }
//	});
}
