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
	jQuery.post("to_buy/add_to",{"type":type},function(){
		alert("添加成功");
	});
}
function checkTrolley(){
	jQuery.post("to_buy/trolley",function(data){
		jQuery("#listDiv").html(data);
	});
}
