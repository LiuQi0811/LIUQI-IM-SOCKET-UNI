import {createStore} from 'vuex'
const store = createStore({
	state:{
		socketTask: null,
		websocketData: {}, //存放从后端接收到的 websocket 数据
		user: '',
		onlineMessage:{}
	},
	mutations:{
		setWebsocketData(state,data){
			console.log('setWebsocketData 返回结果',data)
			state.websocketData = data
		},
		setUser(state,user){
			state.user = user
		},
		setOnlineMessage(state,online){
			console.log('setOnlineMessage 返回结果',online)
			state.onlineMessage = online
		}
	},
	actions:{
		websocketInit({state,dispatch},url){
			state.socketTask = uni.connectSocket({
				url, // url表示 websocket 连接ip
				success:()=> {
					console.log('websocket 连接成功！')
				},
				fail: e => {
					console.log('连接失败'+ e)
				}
			})
		state.socketTask.onOpen(()=> dispatch('websocketOnOpen'))
		state.socketTask.onMessage(() => dispatch('websocketOnMessage'))
		state.socketTask.onClose(e => dispatch('websocketOnClose'))
		state.socketTask.onError(e => dispatch('websocketOnError'))
		
		},
		websocketOnOpen({commit}){
			console.log('websocket 正在打开中.......')
		},
		websocketOnMessage({commit})
		{
			
			// 可行的 会有好友上线提示
			uni.onSocketMessage((res)=>{
				console.log(res.data)
				console.log('消息提示：',res)
			if(res.data !=='连接成功'){
				if(res){
				let data = JSON.parse(res.data)
				console.log('Data ==>',data)
				commit('setWebsocketData',data)
				commit('setOnlineMessage',data.msg)
				}
			}
		
			})
			console.log('state ==>',this.state)
			
		
		},
		websocketOnClose({commit,dispatch}){
			console.log('websocket 连接关闭')
		},
		websocketOnError({commit,dispatch}){
			console.log('websocket 连接错误')
		},
		websocketClose({state})
		{
			if(!state.socketTask){
				return
			}
			state.socketTask.close({
				success(res){
					console.log('关闭成功！'	,res)
				},
				fail(error){
					console.log('关闭失败！',error)
				}
			})
		},
		websocketSend({state},data){//发送数据
		console.log('websocketSend ...........',data)
			uni.sendSocketMessage({
				data,
				success:res =>{
					console.log('发送成功！',res)
				},
				fail: e => {
					console.log('发送失败！',e)
				}
			})
		}
	}
})


export default store