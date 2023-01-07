<template>
	<view>
		<view v-show='showNotice'>
			<!-- NoticeBar 滚动通知  -->
			  <u-notice-bar :text="onlineUser" duration='2000' mode='closable'></u-notice-bar>
		</view>
		
		<view class="communication—list">
			<view class="communication—list-item" v-for="(item,index) in users" :key="index" @click="toChat(item)">
					<img class="communication—list-item-image" src="../../static/logo.png" alt="">
					<h3 class = "communication—list-name">{{item}}</h3>
					<view class="communication—list-time">2023-01-05</view>
					<view class="communication—list-title">👋👋</view>
			</view>
			<view>
				{{users}}
			</view>
		</view>
	</view>
</template>

<script>
import { data } from 'browserslist'
	export default {
		data() {
			return {
				users: [],
				onlineUser:'',// 好友上线通知内容
				showNotice:false //滚动通知 展示
			} 
		},
		watch:{ // vuex监听器
			'$store.state.websocketData':function(val,oval){ //注意这里声明方法 不要用 ()=> 选择 function()
				console.log('vuex监听器 好友上线提示 ==>',val.msg)
				if(val.type){ // 
					this.showNotice = true
					this.onlineUser = val.msg
					this.getUsers()
				}
			}
		},
		onLoad(param) {
			this.startWebsocket(param)
			let store = this.$store.state //获取vuex $store属性
			console.log('获取vuex $store属性  ==>',store)
		}, 
		methods: {
			 startWebsocket(param){
				 console.info('开始 会话 参数 ==> ',param)
				 this.$store.commit('setUser',param.username)
				 this.$store.dispatch('websocketInit','ws://127.0.0.1:9501/websocket/'+param.username)
				 this.getUsers()
			 },
			 getUsers(){ //会话用户列表
				 uni.request({
				     url: 'http://127.0.0.1:9501/user/list', //接口地址。
				     success: (res) => {
				         let users = res.data
						 let user = this.$store.state.user//获取 当前登录用户
						 //排除 当前登录用户
						this.remove(users,user)
						this.users = res.data //获取会话用户列表
						 
				     }
				 });
			 },
			 remove(users,user){
				 let index = users.indexOf(user);
				 if(index>-1){
					 users.splice(index,1)
				 }
				 return users
			 },
			 toChat(e){
				 let me = this.$store.state.user //获取 当前登录用户
				 uni.navigateTo({ //跳转到聊天页面
				 	url:'/pages/chat/chat?to='+e+'&me='+me
				 });
			 }
		}
	}
</script>

<style scoped>
.communication—list-item{
	display: grid;
	grid-template-columns: repeat(3,1fr);
	grid-template-rows: repeat(2,1fr);
	justify-items: center;
	grid-template-areas: 'image name time'
						 'image title time';					
}
.communication—list-item-image{
	grid-area: image; 
	width: 100rpx;
	height: 100rpx;
	border-radius: 20rpx;
}
.communication—list-item-name{
	grid-area: name;
	justify-self: start;
}
.communication—list-item-title{
	color: #999999;
	justify-self: start;
	grid-area: title;
}
.communication—list-item-time{
	color: #999999;
	grid-area: time;
	
}
</style>
