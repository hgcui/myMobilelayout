define(["wx"], function(wx) {
    return {
        to_share:function(shareConfig){
            var wxShare = {
                title: shareConfig.title,  // 分享标题
                desc: shareConfig.desc,   // 分享描述
                link: shareConfig.link,   // 分享链接
                imgUrl: shareConfig.img,  // 分享图标
                type: '',   // 分享类型,music、video或link，不填默认为link
                dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                success: function(res) {
                    // 用户确认分享后执行的回调函数
                    
                },
                cancel: function(res) {
                    // 用户取消分享后执行的回调函数
                    
                }
            };
            
            $.ajax({
                type:"get",
                url:"https://api.mocar.cn/wxportal/jsticket?url=" + encodeURIComponent(window.location.href),
                success:function(config){
                    config.debug = false;
                    config.jsApiList =
                        [
                            //'chooseWXPay',
                            //'openProductSpecificView',
                            //'addCard',
                            //'chooseCard',
                            //'openCard',
                            //以上接口为支付、小店、卡券类接口，有权限的公众号才能开启
                            'onMenuShareTimeline',
                            'onMenuShareAppMessage',
                            'onMenuShareQQ',
                            'onMenuShareWeibo',
                            'startRecord',
                            'stopRecord',
                            'onVoiceRecordEnd',
                            'playVoice',
                            'pauseVoice',
                            'stopVoice',
                            'onVoicePlayEnd',
                            'uploadVoice',
                            'downloadVoice',
                            'chooseImage',
                            'previewImage',
                            'uploadImage',
                            'downloadImage',
                            'translateVoice',
                            'getNetworkType',
                            'openLocation',
                            'getLocation',
                            'hideOptionMenu',
                            'showOptionMenu',
                            'hideMenuItems',
                            'showMenuItems',
                            'hideAllNonBaseMenuItem',
                            'showAllNonBaseMenuItem',
                            'closeWindow',
                            'scanQRCode'
                        ];
                    wx.config(config);
                    wx.ready(onWXReady);

                }
            })


            var onWXReady = function() {

                wx.onMenuShareTimeline({
                    title: wxShare.desc,
                    link: wxShare.link,
                    imgUrl: wxShare.imgUrl,
                    success: wxShare.success,
                    cancel: wxShare.cancel
                });

                wx.onMenuShareAppMessage({
                    title: wxShare.title,
                    desc: wxShare.desc,
                    link: wxShare.link,
                    imgUrl: wxShare.imgUrl,
                    type: wxShare.type,
                    dataUrl: wxShare.dataUrl,
                    success: wxShare.success,
                    cancel: wxShare.cancel
                });

                wx.onMenuShareQQ({
                    title: wxShare.title,
                    desc: wxShare.desc,
                    link: wxShare.link,
                    imgUrl: wxShare.imgUrl,
                    success: wxShare.success,
                    cancel: wxShare.cancel
                });

                wx.onMenuShareWeibo({
                    title: wxShare.title,
                    desc: wxShare.desc,
                    link: wxShare.link,
                    imgUrl: wxShare.imgUrl,
                    success: wxShare.success,
                    cancel: wxShare.cancel
                });

                wx.showOptionMenu();
            }
        }
    }
});