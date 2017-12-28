<template>
	<div class="slider" ref="slider">
		<div class="slider-group" ref="sliderGroup">
			<slot >
			</slot>	
		</div>
	<div class="dots">
				
	</div>
	</div>
</template>
<script>
import BScroll from 'better-scroll'
import {addClass} from 'common/js/dom'
export default {
	props:{
		loop:{//循环轮播
			type:Boolean,
			default:true
		},
		autoplay:{
			type:Boolean,
			default:true
		},
		interval:{
			type:Number,
			default:4000
		}
	},
	mounted () {	
		setTimeout(()=>{
			this._setSliderWidth()
			this._initSlider( )
		},20)
	},
	methods: {
		_setSliderWidth(){
			this.children=this.$refs.sliderGroup.children;
			let width=0;
			let sliderWidth = this.$refs.slider.clientWidth
			console.log(sliderWidth)
			console.log(this.$refs )	
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
		_initSlider(){
			this.slider=new BScroll(this.$refs.slider,{
				scrollX: true,
				scrollY: false,
				momentum: false,
				snap: true,
				snapLoop: this.loop,
				snapThreshold: 0.3,
				snapSpeed: 400
			})
		}
	}
}
</script>
<style lang="less" scoped>
.slider{
	 min-height: 1px;
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
</style>


