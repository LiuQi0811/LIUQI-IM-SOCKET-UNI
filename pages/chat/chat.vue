<template>
	<view>
		聊天页面  
		<view>
			{{username}}
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				username:''
			}
		},
		onLoad(e) {
			console.log(e)
			this.username = e.to
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
