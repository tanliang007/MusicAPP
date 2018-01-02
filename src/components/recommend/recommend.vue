<template>
	<div class="recommend">
		<div class="recommend-content">
			<div  v-if="recommends.length" class="slider-wrapper">
				<slider ref="scroll">
					<div  v-for="item in recommends">
						<a :href="item.linkUrl">
							<img :src="item.picUrl" alt="">
						</a>
					</div>
				</slider>
			</div>
		</div>
	</div>
</template>
<script>
import Slider from 'base/slider/slider'
export default {
	data(){
		return{
			recommends:''
		}
	},
	created () {//提供轮播的数据
	this.$http.get('/ak/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg', {
			params: {
				g_tk:1388211379,
				uin:352055819,                  
				format:'json',
				inCharset:'utf-8',
				outCharset:'utf-8',
				notice:0,
				platform:'h5',
				needNewCode:1,
				_:1514442420068
			}
		})
		.then( (response)=>{
			if(response.data.code===0){
					console.log(response);
					this.recommends=response.data.data.slider
			}	
		})
		.catch( (error)=> {
			console.log(error);
		});
	},
	methods: {
	  
	},
	components: {
		Slider
	}
}
</script>
<style lang="stylus" scoped  rel="stylesheet/stylus">

</style>

