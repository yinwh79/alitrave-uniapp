// 定位
// 引入SDK核心类
var  QQMapWX = require('./qqmap-wx-jssdk.js');
var  qqmapsdk;

var  addressData = function(){
	return new Promise((resolve,reject)=>{
		// 注意点：1.定位需要在pages.json中表明一下promise；2.微信开发者工具中也要手动加入这段promise
		// 实例化API核心类
		qqmapsdk = new QQMapWX({
			key: 'M5IBZ-FPCHS-NM6OI-6CY27-IN2J7-H7FJG'
		}); 
		// 腾讯定位api: 逆地址解析：供由坐标到坐标所在位置的文字描述的转换，输入坐标返回地理位置信息和附近poi列表
		qqmapsdk.reverseGeocoder({
			success:(res)=>{
				resolve(res);
			},
			fail:(err)=>{
				reject(err);
			}
		})
	})
}

export { addressData }