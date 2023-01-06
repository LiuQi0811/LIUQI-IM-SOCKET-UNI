import {createStore} from 'vuex'
const store = createStore({
	state:{
		socketTask: null,
		websocketData: {}, //存放从后端接收到的 websocket 数据
		user: ''
	},
	mutations:{
		setWebsocketData(state,data){
			let mssage = JSON.parse(data.data)
			state.websocketData = message
		},
		setUser(state,user){
			state.user = user
		}
	},
	actions:{
		websocketInit({state,dispatch},url){
			state.socketTast = uni.connectSocket({
				url, // url表示 websocket 连接ip
				success:()=> {
					console.log('websocket 连接成功！')
				},
				fail: e => {
					console.log('连接失败'+ e)
				}
			})
		state.socketTast.onOpen(()=> dispatch('websocketOnOpen'))
		state.socketTast.onMessage(res => dispatch('websocketOnMessage'))
		state.socketTast.onClose(e => dispatch('websocketOnClose'))
		state.socketTast.onError(e => dispatch('websocketOnError'))
		},
		websocketOnOpen({commit}){
			console.log('websocket 正在连接中.......')
		},
		websocketOnMessage({commit},res)
		{
			if(res.data !=='连接成功'){
				if(res){
				let data = json.parse(res.data);
				if(data){
					if(data.type === 2){
						//跳转视频电话
						
					}else{
						commit('setWebsocketData',res)
					}
				}
				}
			}
		},
		websocketOnClose({commit,dispatch}){
			console.log('websocket 连接关闭')
		},
		websocketOnError({commit,dispatch}){
			console.log('websocket 连接错误')
		},
		websocketClose({state})
		{
			if(!state.socketTast){
				return
			}
			state.socketTast.close({
				success(res){
					console.log('关闭成功！'	,res)
				},
				fail(error){
					console.log('关闭失败！',error)
				}
			})
		},
		websocketSend({state},data){//发送数据
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