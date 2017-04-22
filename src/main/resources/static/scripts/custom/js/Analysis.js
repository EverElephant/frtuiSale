//神策js文件引入
//document.write("<script type='text/javascript' src='SensorsHead.js' ></script>");
//document.write("<script type='text/javascript' src='sensorsdata.min.js' ></script>");
$(document).ready(function () {
    var cookieId = getCookie(loginCookieName);
    var source = GetQueryString("lcjiance");
    if (source == undefined || source == null)
        source = "";
    var pageView = GetQueryString("lcpageview");
    if (pageView == undefined || source == null)
        pageView = "";

    setTimeout(function () {
        if (cookieId != null && cookieId != undefined) {
            invokeApi("mallcustomer/getcustomerIdBytoken", {}, "", function (ret) {
                var data = eval(ret);
                if (data.error_code != null) {
                } else {
                    var uid = data.uid;
                    if (uid != "") {
                        sa.identify(uid, true);
                        sa.quick('autoTrack');
                    }
                }
            });
        }

        if(pageView!="") {
            var pro="({"+pageView.split('_')[0]+":'"+pageView+"'})";
            if(pro!=null&&pro!=undefined)
                sa.track('lcpageview', eval(pro));
        }


        if (source == 1) {//乐纯头条
            sa.track('lcjiance', {dataFrom: '乐纯头条'});
        } else if (source == '1_2') {   //乐纯食堂
            sa.track('lcjiance', {dataFrom: '乐纯头条02'});
        } else if (source == '1_3') {   //乐纯食堂
            sa.track('lcjiance', {dataFrom: '乐纯头条03'});
        } else if (source == '1_4') {   //乐纯食堂
            sa.track('lcjiance', {dataFrom: '乐纯头条04'});
        } else if (source == '1_5') {   //乐纯食堂
            sa.track('lcjiance', {dataFrom: '乐纯头条05'});
        } else if (source == 2) {   //乐纯食堂
            sa.track('lcjiance', {dataFrom: '乐纯食堂'});
        } else if (source == 3) {   //乐纯口碑
            sa.track('lcjiance', {dataFrom: '乐纯口碑'});
        } else if (source == 4) {   //乐纯plus
            sa.track('lcjiance', {dataFrom: '乐纯plus'});
        } else if (source == 5) {   //纯吃货
            sa.track('lcjiance', {dataFrom: '纯吃货'});
        } else if (source == 6) {
            sa.track('lcjiance', {dataFrom: '乐纯主文2'});
        } else if (source == 7) {
            sa.track('lcjiance', {dataFrom: '优惠券到期提醒'});
        } else if (source == 8) {
            sa.track('lcjiance', {dataFrom: '乐纯12问'});
        } else if (source == 9) {
            sa.track('lcjiance', {dataFrom: '乐纯包月特惠'});
        } else if (source == 21) {
            sa.track('lcjiance', {dataFrom: '首页优惠券点击'});
        } else if (source == 22) {
            sa.track('lcjiance', {dataFrom: '首页余额点击'});
        } else if (source == 23) {
            sa.track('lcjiance', {dataFrom: '首页乐享活动点击'});
        } else if (source == 24) {
            sa.track('lcjiance', {dataFrom: '首页长期订购点击'});
        } else if (source == "vip_active_a") {
            sa.track('lcjiance', {dataFrom: '会员激活A'});
        } else if (source == "vip_active_b") {
            sa.track('lcjiance', {dataFrom: '会员激活B'});
        } else if (source == "vip_active_c") {
            sa.track('lcjiance', {dataFrom: '会员激活C'});
        } else if (source == "vip_active_a1") {
            sa.track('lcjiance', {dataFrom: '会员跳转A'});
        } else if (source == "vip_active_b1") {
            sa.track('lcjiance', {dataFrom: '会员跳转B'});
        } else if (source == "vip_active_c1") {
            sa.track('lcjiance', {dataFrom: '会员跳转C'});
        } else if (source == "d") {
            sa.track('lcjiance', {dataFrom: '会员两单'});
        } else if (source == "e") {
            sa.track('lcjiance', {dataFrom: '会员长期'});
        } else if (source == "vip_active_f1") {
            sa.track('lcjiance', {dataFrom: '跳转至会员中心'});
        } else if (source == "vip_active_f2") {
            sa.track('lcjiance', {dataFrom: '跳转至商城首页'});
        } else if (source == "please1") {
            sa.track('lcjiance', {dataFrom: '请酸奶微信菜单点击'});
        } else if (source == "please2") {
            sa.track('lcjiance', {dataFrom: '请酸奶乐享活动点击'});
        } else if (source == "please3") {
            sa.track('lcjiance', {dataFrom: '请酸奶推文点击'});
        } else if (source == "please4") {
            sa.track('lcjiance', {dataFrom: '请酸奶首页banar点击'});
        } else if (source == "scancodepay") {
            sa.track('lcjiance', {dataFrom: '图片传播支付按钮点击'});
        } else {
            if (source != "")
                sa.track('lcjiance', {dataFrom: source});
        }


    },1000);

    //点击埋点
    $(".Analysis").on('touchend',function(e){
        // e.preventDefault();
        // e.stopPropagation();
        var pageView = GetQueryString("lcpageview");
        var Analysis=$(this).attr("data-analysis")
        if (pageView == undefined) {
            pageView = "";
        }
        if(pageView == "" && (window.location.pathname == "/" || window.location.pathname == "/active/family/index.html")){
            pageView = "lcpageview";
        }
        if(pageView == "" && window.location.pathname == "/account/personal_info.html"){
            pageView = "lcpageview";
        }
        if (pageView != "") {
            var pro="({"+pageView+":'"+pageView+"_"+Analysis+"'})";
            sa.track('lcpageview', eval(pro));
        }
    });
    //限时特惠
    $(".limit .btn").on('click',function(){
        var pageView=GetQueryString("lcpageview");
        if(pageView!="") {
            var pro = "({" + pageView + ":'" + pageView + "_click'})";
            sa.track('lcpageview', eval(pro));
        }
    });
    //支付地址选择
    $('.topay-address-wrap').on('touchend',function(){
        var pageView=GetQueryString("lcpageview");
        if(pageView!="") {
            var pro = "({" + pageView + ":'" + pageView + "_topayAddress_click'})";
            sa.track('lcpageview', eval(pro));
        }else{
            sa.track('lcpageview',({topayPage:'topayPage_topayAddress_click'}))
        }
    });
    //支付日期选择
    $('.topay-date-wrap').on('touchend',function(){
        var pageView=GetQueryString("lcpageview");
        if(pageView!="") {
            var pro = "({" + pageView + ":'" + pageView + "_topayDate_click'})";
            sa.track('lcpageview', eval(pro));
        }else{
            sa.track('lcpageview',({topayPage:'topayPage_topayDate_click'}))
        }
    });
    //微信支付按钮
    $(".pay-wechat .wechat-btn,.topay-submit").on('touchend',function(){
        var type=GetQueryString("type");
        var pageView=GetQueryString("lcpageview");
        if(pageView!=""){
            var pro="({"+pageView.split('_')[0]+":'"+pageView+"_click'})";
            if(pro!=null&&pro!=undefined)
                sa.track('lcpageview', eval(pro));
        }
        if(source==23){
            if(type==2) {

                sa.track('longPeriod', {from: '乐享活动包月支付'});
            }
            if (type == 3) {
                sa.track('longPeriod', {from: '乐享活动包季支付'});
            }
            if (type == 4) {
                sa.track('longPeriod', {from: '乐享活动包年支付'});
            }

        } else if (source == 24) {
            if (type == 2) {
                sa.track('longPeriod', {from: '首页长期订购包月支付'});
            }
            if (type == 3) {
                sa.track('longPeriod', {from: '首页长期订购包季支付'});
            }
            if (type == 4) {
                sa.track('longPeriod', {from: '首页长期订购包年支付'});
            }
        } else {
            sa.track('wxPay', {from: '微信支付'});
        }
    });


    $(".topay #topay").on('click', function () {
        sa.track('accounts', {from: '结算'});

    });

    //首页周三会员活动
    $('.vip-activity-box').on('click', function () {
        sa.track('vipWedAct', {from: '首页周三会员活动'});
    });

    //长期订购包月
    $("#btn_month").on('click', function () {
        if (source == 23) {
            sa.track('longPeriod', {from: '乐享活动包月点击'});
        }
        if (source == 24) {
            sa.track('longPeriod', {from: '首页长期订购包月点击'});
        }
    });
    //长期订购包季
    $("#btn_period").on('click', function () {
        if (source == 23) {
            sa.track('longPeriod', {from: '乐享活动包季点击'});
        }
        if (source == 24) {
            sa.track('longPeriod', {from: '首页长期订购包季点击'});
        }
    });
    //长期订购包年
    $("#btn_year").on('click', function () {
        if (source == 23) {
            sa.track('longPeriod', {from: '乐享活动包年点击'});
        }
        if (source == 24) {
            sa.track('longPeriod', {from: '首页长期订购包年点击'});
        }
    });
    //长期订购确认口味
    $('#longPeriodConfirm').on('touchend', function (e) {
        e.preventDefault();
        e.stopPropagation();
        var s = "";
        var s1 = "";
        var type = GetQueryString("type");
        if (type == 2) {
            s = "包月";
        }
        if (type == 3) {
            s = "包季";
        }
        if (type == 4) {
            s = "包年";
        }
        if (source == 23) {
            s1 = "乐享活动";
        }
        if (source == 24) {
            s1 = "首页长期订购";
        }
        sa.track('longPeriod', {from: s1 + s + '确认口味'});
    });

});
//首页加号减号及售罄情况统计
//addOrMinus    : 加号（1）/减号(0)
//productName   : 商品名称
//oos           ：售罄（0）/正常（1）
function trackAddMinus(addOrMinus,productName,oos) {
    if(addOrMinus)
        sa.track('AddCartBtn',{ProductName:productName,oos:oos});
    else
        sa.track('MinusCartBtn',{ProductName:productName,oos:oos});
}
$(".xx").click(function(){
$(".remind").fadeOut(600);
});

