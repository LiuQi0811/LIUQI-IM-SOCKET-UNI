<template>
	<view>
		<scroll-view scroll-y="true">
			<view class="list">
				<!-- :class="[item.source == user? 'item-right':'item-left','item']" 判断是否是当前登录用户 如果是显示在右边 -->
				<view :class="[item.source == user? 'item-right':'item-left','item']" v-for="(item,index) in list" :key="index">
					<u-avatar 
								:text="item.source == user? user:to"
					            src="https://pic.169pp.net/169mm/202212/089/1.jpg"
					            fontSize="8"
					            randomBgColor
					    ></u-avatar>
						<view class="item-left-msg">
							{{item.msg}}
						</view>
				</view>
			</view>
		</scroll-view>
		
		<view class="bottom">
			<view class="bottom-item">
				<u--input 
				border='surroud' v-model="msg">
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
				to:'',
				me:'',
				msg:'',
				list:[
					{'to':'李桂雪','source':'LQ','type':'1','msg':'你好我是刘奇'},
					{'to':'LQ','source':'李桂雪','type':'1','msg':'你好刘奇我是李桂雪'},
					{'to':'李桂雪','source':'LQ','type':'1','msg':'新年快乐'},
					{'to':'LQ','source':'李桂雪','type':'1','msg':'METOO'},
					{'to':'LQ','source':'李桂雪','type':'1','msg':'出来玩'}
				]
			}
		},
		onLoad(e) {
			console.log(e)
			this.to = e.to
			this.me = e.me
			console.log('vuex 内容获取 ==>',this)
			//获取当前登录用户
			console.log('当前登录用户 ==>')
			console.log('user()',this.user)
		},
		computed:{
			user(){ //当前登录用户
				return this.$store.state.user
			}
		}
		,
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
