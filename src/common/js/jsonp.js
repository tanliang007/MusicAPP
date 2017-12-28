import originJSONp from 'jsonp'
//自己分装函数处理url
export default function jsonp(url,data,option){
	//如果有了查询参数拼接&否则就加上?
	url+=(url.indexOf('?')< 0?'?':'&')+param(data)
	return new Promise((resolve,reject)=>{
		originJSONp(url,option,(err,data)=>{
			if(!err){
				resolve(data)
			}else{
				reject(err)
			}
		}) 
	})
}
//处理rul
function param(data){
	let url=''
	for (var k in data){
		let value=data[k] !==undefined?data[k]:''
		// encodeURIComponent 处理vale中出现&=的特殊字符
		url+=`&${k}=${encodeURIComponent(value)}`
	}
	return url ?url.substring(1):''
}