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
						<view class="item-left-msg">
							{{me}}fffmax-width: 600rpx;max-width: 600rpx;max-width: 600rpx;max-width: 600rpx;max-width: 600rpx;ffffffffdddffffffffffffffddddddddddd
						</view>
				</view>
				<!-- 右 -->
				<view class="item item-right">
					<u-avatar 
					            src="https://pic.169pp.net/169mm/202210/010/1.jpg"
					            fontSize="18"
					            randomBgColor
					    ></u-avatar>
						<view class="item-right-msg">
							{{username}}dddddd
						</view>
				</view>
			</view>
		</scroll-view>
		
		<view class="bottom">
			<view class="bottom-item">
				<u--input 
				border='surroud'>
				</u--input>
				<button type="primary">发送</button>
				<u-icon name='phone' size="38">
					
				</u-icon>
			</view>
		</view>
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

<style scoped>
	page{
		background-color: rgb(243, 243, 243);
	}
	.list{
		display: flex;
		flex-direction: column;
		padding-left: 20rpx;
		padding-top: 50rpx;
		padding-right: 20rpx;
		padding-bottom: 100rpx;
	}
	.item{
		display: flex;
		padding: 20rpx 0;
	}
	.item-left{
		 flex-direction: row;
	}
	.item-left-msg{
		background-color: #fff;
		border-radius : 20rpx;
		margin-left: 16rpx;
		font-size: 25rpx;
		line-height: 50rpx;
		padding: 16rpx 14rpx;
		max-width: 600rpx;
	}
	.item-right{
		 flex-direction: row-reverse;
	}
	.item-right-msg{
		background-color: #fff;
		border-radius : 20rpx;
		margin-left: 16rpx;
		font-size: 25rpx;
		line-height: 50rpx;
		padding: 16rpx 14rpx;
		max-width: 600rpx;	
		}
		
	.bottom{
		position: fixed;
		bottom: 0;
		background-color: #fff;
		width: 100%;
		border-top: 1px solid rgba(39, 40, 50, 0.1);
	}
	.bottom-item{
		display: flex;
	}
</style>
