<template>
	<view class="content">
		<view class="content-top">
			<u-avatar
			        text="LIUQI"
			        fontSize="8"
			        randomBgColor
			></u-avatar>
		</view>
		<view class="content-center">
			<u--form :model="form"  ref="uForm"  :rules ="rules">
				<u-form-item label="用户" prop="username">
					<u-input v-model="form.username" />
				</u-form-item>
			</u--form>
		</view>
		<view class="content-bottom">
			<u-button type="primary" @click="submit">提交</u-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				form:{
					username:''
				},
				rules: {
					username: [
						{
							required: true,
							message: '请输入用户',
							trigger: ['blur', 'change']
						}
					]
				}
			}
		},
		methods: {
			submit() {
				this.$refs.uForm.validate().then(res => {
					uni.navigateTo({ //跳转到指定页面
						url:'/pages/index/index?username='+this.form.username
					});
				})
			}
		}
	}
</script>

<style scoped>
	.content{
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	.content-top{
		margin-top: 20%;
		width: 100%;
		height: 300rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.content-bottom{
		margin-top: 70rpx;
		width: 80%;
	}
</style>
