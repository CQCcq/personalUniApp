<template>
	<view class="content">
		<!-- <image class="logo" src="/static/logo.png"></image> -->
		<view class="text-area">
			 <swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
			                        <swiper-item>
			                            <view class="swiper-item uni-bg-red">
											<image class="img_size" src="../../static/img/scene1.jpg"/>
										</view>
			                        </swiper-item>
			                        <swiper-item>
			                            <view class="swiper-item uni-bg-green">
											<image class="img_size" src="../../static/img/scene2.jpg"/>
										</view>
			                        </swiper-item>
			                        <swiper-item>
			                            <view class="swiper-item uni-bg-blue">
											<image class="img_size" src="../../static/img/scene3.jpg"/>
										</view>
			                        </swiper-item>
									<swiper-item>
									    <view class="swiper-item uni-bg-blue">
											<image class="img_size" src="../../static/img/scene4.jpg"/>
										</view>
									</swiper-item>
									<swiper-item>
									    <view class="swiper-item uni-bg-blue">
											<image class="img_size" src="../../static/img/scene5.jpg"/>
										</view>
									</swiper-item>
			  </swiper>
		</view>
		<view class="list_style"> 
			<view class="list_style_A">
				<view class="list_style_1" @click="linkRouter"></view>
				<text>列表</text>
			</view>
			<view class="list_style_A">
				<view class="list_style_1" @click="linkPage"></view>
				<text>分页</text>
			</view>
			<view class="list_style_A">
				<view class="list_style_1" @click="linkForm"></view>
				<text>表单</text>
			</view>
			<view class="list_style_A">
				<view class="list_style_1" @click="linkPicker"></view>
				<text>选择控件</text>
			</view>
			<view class="list_style_A">
				<view class="list_style_1"></view>
				<text>描述</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '你好我是第一个界面',
				background: ['color1', 'color2', 'color3'],
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500
			}
		},
		onLoad() {

		},
		onShow(){
			this.saveStroage();
		},
		
		methods: {
			linkRouter(){
				uni.navigateTo({
				    url: '../wordList/wordList'
				});
			},
			linkPage(){
				uni.navigateTo({
				    url: '../pagination/pagination'
				});
			},
			linkForm(){
				uni.navigateTo({
				    url: '../uniForm/uniForm'
				});
			},
			linkPicker(){
				uni.navigateTo({
				    url: '../picker/picker'
				});
			},
			saveStroage(){
				let nameList1 = [];let nameObj = {};
				for(let i=0;i<10000;i++){
					nameObj = {};
					nameObj.id = i;
					nameObj.name = '王' + i;
					nameList1.push(nameObj);
				};
				let nameList = [];
				nameList = JSON.parse(JSON.stringify(nameList1))
				uni.setStorage({
				    key: 'nameList',
				    data: nameList,
				    success: function () {
				        console.log('success');
				    }
				});
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 10upx 20upx;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		/* display: flex;
		justify-content: center; */
		width: 100%;
		height: 300rpx;
	}
	.img_size{
		width: 100%;
		height: 300rpx;
	}
	.list_style{
		margin-top: 10upx;
		width: calc(100% - 20upx);
		height: 180upx;
		display: flex;
		flex-direction: row;
		border-radius: 10upx;
		background-color: #4CD964;
		padding: 10upx 10upx;
	},
	.list_style_A{
		display: flex;
		flex-direction: column;
		flex: 1;
		justify-content: center;
		align-items: center;
	}
	.list_style_1{
		width: 120upx;
		height: 120upx;
		border-radius: 10upx;
		background-color: #2C405A;
	}
	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
