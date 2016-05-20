/**
 * Created by ZiRen on 14-4-14.
 */
require.config({
	baseUrl: '/microsite',
	urlArgs: "v=0.1.20151112.1",
	paths: {
		'path':'report/js',
		'template' : 'libs/art-template/template',
		'zepto' : 'libs/zepto/zepto.min',
		'touch' : 'libs/zepto/touch.min',
		'iscroll' : 'libs/iscroll/iscroll-lite',
		"wxshare":'report/js/wxshare',
		"wx":"http://res.wx.qq.com/open/js/jweixin-1.0.0",
		"data":"report/js/data",
		'common/config' : [
			'common/config-local',
			'common/config'
		]
	},
	shim: {
		"touch":["zepto"],
		"wxshare":["wx"],
    	"path/report":["template"]
	}
});
requirejs(["path/report","zepto","touch","template","wxshare","wx","common/config","iscroll","data"]);


