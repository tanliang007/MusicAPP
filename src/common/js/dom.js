export function addClass(el,className){
	if(hasClass(el,className)){
		return
	}
	var a=[]
	let newClass=className.split(' ')

	a.push(newClass)

	el.className=a.join('')

}
export function hasClass(el,className){
	let reg=new RegExp('(^|\\s)'+className+'(\\s|$)')
	return reg.test(el.className)
}
