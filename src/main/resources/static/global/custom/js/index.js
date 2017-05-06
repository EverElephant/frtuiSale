$(function () {
    //loading
    var arr1 = [];
    var arr = ["banner.jpg", "banner_1.jpg", "banner_2.jpg", "banner_3.jpg", "banner_4.jpg", "pro_01.jpg", "pro_02.jpg", "pro_03.jpg", "pro_04.jpg", "pro_05.jpg", "pro_06.jpg", "pro_07.jpg",];

    function fnLoad() {
        for (var i = 0; i < arr.length; i++) {
            var oImg = new Image();
            /*创建图片实例*/
            oImg.src = "images/index/" + arr[i];
        }
        oImg.onload = function () {
            for (var i = 0; i < arr.length; i++) {
                arr1.push(arr[i]);
            }
            if (arr1.length == arr.length) {
                $(".progress").fadeOut();
            }
        };
    }

    fnLoad();
    // 故事
    invokeApi("website/getArticle", {"page": "1", "count": "99999", "showtype": "3"}, "", function (ret) {
        var datas = eval(ret);
        var data = datas.DATAS;
        var str = '';
        var moStr = '';
        var ary = [];
        if (data !== "") {
            var dataLen = data.length;
            if (dataLen >= 8) {
                dataLen = 8;
            }
            //if($(".item").length>dataLen){
            //    alert($(".item").length-parseInt(dataLen))
            //    var $v=$(".item")[$(".item").length];
            //    $($v).hide();
            //    alert(2)
            //}
            for (var i = 0; i < dataLen; i++) {
                var time = data[i].UPDATE_TIME.toString().replace(/\-/g, "");
                ary.push(time);
                var year = ary[i].slice(0, 4);
                var month = ary[i].slice(4, 6);
                var date = ary[i].slice(6, 8);
                if (dataLen < 7) {
                    //alert(dataLen.length++)
                }
                str = '<a href="' + data[i].URL + '"><section class="box_img"><section class="date"><p>' + data[i].month + ' /</p><h5>' + date + '</h5><span>' + data[i].year + '</span></section><section class="banner"><img src="' + data[i].pic + '"></section> <p>' + data[i].TITLE + '</p></section></a>';
                moStr += '<div class="swiper-slide"><a href="' + data[i].URL + '"><section class="box_img"><section class="date"><p>' + data[i].month + ' /</p><h5>' + date + '</h5><span>' + data[i].year + '</span></section><section class="banner"><img src="' + data[i].pic + '"></section> <p class="title">' + data[i].TITLE + '</p></a></div>';
                $(".owl-item .item_" + i + "").append(str);
            }
        }
        $(".slide_box").append(moStr);
        //移动端
        var swiper = new Swiper('.map_swiper', {
            pagination: '.swiper-pagination',
            slidesPerView: 'auto',
            loop: false,
            centeredSlides: true,
            paginationClickable: true,
            spaceBetween: 30,
            onSlideChangeEnd: function (swiper) {
                $(".fruit_box .swiper-slide-next,.fruit_box .swiper-slide-prev").addClass("sw");
                $(".fruit_box .swiper-slide-next,.fruit_box .swiper-slide-prev,.swiper-slide-active").removeClass("swiper-fist");
                $(".swiper-slide-active").removeClass("sw");
    }
});
var swiper1 = new Swiper('.story_swiper', {
    pagination: '.swiper-pagination',
    slidesPerView: 'auto',
    centeredSlides: true,
    paginationClickable: true,
    spaceBetween: 30
});
})
;
//pc
$('#scroll').owlCarousel({
    items: 3,
//            autoPlay: true,
    navigation: true,
    navigationText: ["", ""],
    scrollPerPage: true
});

//alert($(".owl-wrapper").css("transform"))
$(".owl-next").click(function () {
    $(".owl-wrapper").removeClass("tran0").addClass("tran");
    $(".owl-prev").fadeIn(100);
    $(this).fadeOut(100);
    $(".scroll-outer em.left").fadeIn(100);
    $(".scroll-outer em.right").fadeOut(100);
});
$(".owl-prev").click(function () {
    $(".owl-wrapper").removeClass("tran").addClass("tran0");
    $(this).fadeOut(100);
    $(".owl-next").fadeIn(100);
    $(".scroll-outer em.left").fadeOut(100);
    $(".scroll-outer em.right").fadeIn(100);
});
//  关注
$(".alert_bg,.progress").height($(document).height());
$(".weixin").on("click", function () {
    $(".alert_box,.alert_bg").fadeIn(300);
    //$("body").css("overflow", "hidden");
});
$(window).scroll(function () {
    if ($(window).scrollTop() > 1000) {
        $("#go").css("display", "block");
    } else {
        $("#go").css("display", "none");
    }
    $("#go").click(function () {
        $("body").stop().animate({scrollTop: 0});
    })
});


})
;
