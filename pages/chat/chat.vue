<template>
	<view>
		<scroll-view scroll-y="true">
			<view class="list">
				<!-- 左 -->
				<view class="item item-left">
					<u-avatar 
					            src="https://pic.169pp.net/169mm/202212/089/1.jpg"
					            fontSize="18"
					            randomBgColor
					    ></u-avatar>
						<view>
							{{me}}
						</view>
				</view>
				<!-- 右 -->
				<view class="item item-right">
					<u-avatar 
					            src="https://pic.169pp.net/169mm/202210/010/1.jpg"
					            fontSize="18"
					            randomBgColor
					    ></u-avatar>
						<view>
							{{username}}
						</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				username:'',
				me:''
			}
		},
		onLoad(e) {
			console.log(e)
			this.username = e.to
			this.me = e.me
			console.log('vuex 内容获取 ==>',this)
			//获取当前登录用户
			console.log('当前登录用户 ==>')
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
