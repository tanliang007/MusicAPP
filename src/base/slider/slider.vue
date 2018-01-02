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
	name:'slide',
	data () {
		return {
		dots:[],
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
			default:1000
		}
	},
	mounted () {
		
		setTimeout(()=>{
			this._setSliderWidth()
			this._initDots()
			this._initSlider( )
			this._play()
			// console.log(this.slider.getCurrentPage().pageX)	
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
				snap: {loop: true,threshold: 0.3,speed: 1000},
				click:true,
				   bounce: false
			})
			
		this.slider.on('scrollEnd', this._onScrollEnd)
		
        this.slider.on('flick', () => {
			console.log('flick')
			 this.slider.stop()
        })
        this.slider.on('touchend', () => {
          if (this.autoPlay) {
            this._play()
          }
        })
        this.slider.on('beforeScrollStart', () => {
        
            clearTimeout(this.timer)
          
        })
		},
	 _onScrollEnd() {//滚动结束一屏的回调函数
		let pageIndex = this.slider.getCurrentPage().pageX
		console.log('滚动事件结束')
        this.currentPageIndex = pageIndex
        this._play()
      },
	_play() {//切换到下一页	
		clearTimeout(this.timer)
		this.timer = setTimeout(() => {
			console.log(1)
			this.slider.next()
			console.log(this.slider.getCurrentPage().pageX)
		}, this.interval)
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


