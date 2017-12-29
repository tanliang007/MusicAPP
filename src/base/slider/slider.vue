<template>
	<div class="slider" ref="slider">
		<div class="slider-group" ref="sliderGroup">
			<slot >
			</slot>	
		</div>
		<div class="dots">
			<span v-for="(item,index) in dots" :class="{active:currentPageIndex===index}">
			</span>	
		</div>
	</div>
</template>
<script>
import BScroll from 'better-scroll'
import {addClass} from 'common/js/dom'
export default {
	data () {
		return {
		dots:[ ],
		currentPageIndex:0 	
		}
	},
	props:{
		loop:{//循环轮播 对象的形式是指定验证的规则
			type:Boolean,
			default:true
		},
		autoplay:{
			type:Boolean,
			default:true
		},
		interval:{
			type:Number,
			default:2000
		}
	},
	mounted () {	
		setTimeout(()=>{
			this._setSliderWidth()
			this._initDots()
			this._initSlider( )
			if(this.autoplay){
				this._play()
			}

		},20)
	},
	methods: {
		_setSliderWidth(){
			this.children=this.$refs.sliderGroup.children;
			let width=0;
			let sliderWidth = this.$refs.slider.clientWidth
			for(let i=0;i<this.children.length;i++){
				let child = this.children[i]
				addClass(child,'slider-item')
				child.style.width=sliderWidth+'px'
				width+=sliderWidth
			}
			//给插槽中的元素设置类名
			if(this.loop){
				width+=2*sliderWidth
			}
			this.$refs.sliderGroup.style.width=width+'px'
		},
		_initDots(){
			this.dots=new Array(this.children.length)
		},
		_initSlider(){
			this.slider=new BScroll(this.$refs.slider,{
				scrollX: true,
				scrollY: false,
				momentum: false,
				snap: {
            loop: this.loop,
            threshold: 0.3,
            speed: 300
				},
				bounce: false,
				click:true
			})
			this.slider.on('scrollEnd',()=>{	
				 var pageIndex = this.slider.getCurrentPage().pageX
				//  console.log(pageIndex)
				 if(this.loop){//如果是循环的
					
				 }
				 this.currentPageIndex = pageIndex
				  if(this.autoplay) {//自动轮播
          	this._play();
          }
			 })
			this.slider.on('beforeScrollStart', () => {
					if(this.autoPlay){
						console.log(111)
						clearTimeout(this.timer);
					}
      }) 
		},
		_play(){
			let pageIndex = this.currentPageIndex;
			if(this.loop){
				
			}
			this.timer = setTimeout(()=>{
				//切换下一页
				this.slider.next()
			},this.interval)
		}
	}
	
}
</script>
<style lang="less" scoped>
.slider{
	 min-height: 1px;
	position: relative;
	.slider-group{
		position: relative;
    overflow: hidden;
		white-space: nowrap;
		.slider-item{
			float: left;
			box-sizing: border-box;
			overflow: hidden;
			text-align: center;
			a{
				display: block;
				width: 100%;
				overflow: hidden;
				text-decoration: none;
			img{
				display: block;
				width: 100%;
				}
			}
		}
	}
}
.dots{
	position: absolute;
	right: 0;
	left: 0;
	bottom: 5px;
	text-align: center;
	font-size: 0;
	span{
		display: inline-block;
		width: 10px;
		height: 10px;
		margin: 0 4px;
		background: rgba(255, 255, 255, 0.5);
		border-radius: 50%;
		&.active {
    width: 20px;
		border-radius: 5px;
		background: hsla(197, 80%, 63%, 0.8);
  }
	}
	
}
</style>


