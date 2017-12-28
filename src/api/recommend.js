import jsonp from 'common/js/jsonp'
import {commonParams,options,ERR_OK} from './config'
export function getRecommend(){
	const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
	//拼接传递的对象 commonParams表示公用的配置
	const data = Object.assign({},commonParams,{
		platform:'h5',
		uin:0,
		needNweCode:1
	})

	return jsonp(url,data,options)
	// ?g_tk=1388211379&uin=352055819&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1514441287200
}