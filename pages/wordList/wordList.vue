<template>
	<view class="content">
		<!-- <image class="logo" src="/static/logo.png"></image> -->
		<view class="text-area">
			<!-- <text class="title">{{title}}</text> -->
			<view v-for="item in pageList" :key='item.id'>
				<view class="list-img">
					<view>
						<image style="width: 120upx;height: 120upx;" :src="item.img"/>
					</view>
					<text>{{item.title}}</text>
				</view>
				
			</view>
		</view>
		<!-- <uniCard></uniCard> -->
	</view>
</template>

<script>
	// import {uniCard} from '@/components/components/uni-card/uni-card.vue'
	export default {
		// components: {uniCard},
		data() {
			return {
				title: '这是列表页界面',
				pageList:[
					      {id:1,title:'测试',img:'/static/img/scene1.jpg'},
					      {id:2,title:'测试',img:'/static/img/scene2.jpg'},
					      {id:3,title:'测试',img:'/static/img/scene3.jpg'},
					      {id:4,title:'测试',img:'/static/img/scene4.jpg'},
					      {id:5,title:'测试',img:'/static/img/scene5.jpg'},
					      {id:6,title:'测试',img:'/static/img/scene4.jpg'},
					      {id:7,title:'测试',img:'/static/img/scene4.jpg'},
					      {id:8,title:'测试',img:'/static/img/scene4.jpg'},
					      {id:9,title:'测试',img:'/static/img/scene5.jpg'},
					      {id:10,title:'测试',img:'/static/img/scene5.jpg'},
					      {id:11,title:'测试',img:'/static/img/scene5.jpg'},
					      {id:12,title:'测试',img:'/static/img/scene5.jpg'},
					      {id:13,title:'测试',img:'/static/img/scene5.jpg'},
					      {id:14,title:'测试',img:'/static/img/scene5.jpg'},
					      {id:15,title:'测试',img:'/static/img/scene5.jpg'},
					      {id:16,title:'测试',img:'/static/img/scene5.jpg'},
					      {id:17,title:'测试',img:'/static/img/scene5.jpg'},
					      {id:18,title:'测试',img:'/static/img/scene5.jpg'},
					      {id:19,title:'测试',img:'/static/img/scene5.jpg'},
					      {id:20,title:'测试',img:'/static/img/scene5.jpg'},
					      {id:21,title:'测试',img:'/static/img/scene5.jpg'},
					      {id:22,title:'测试',img:'/static/img/scene5.jpg'},
					      {id:23,title:'测试',img:'/static/img/scene5.jpg'},
					      {id:24,title:'测试',img:'/static/img/scene5.jpg'},
					      {id:25,title:'测试',img:'/static/img/scene5.jpg'},
					      {id:26,title:'测试',img:'/static/img/scene5.jpg'},
					      {id:27,title:'测试',img:'/static/img/scene5.jpg'},
					      {id:28,title:'测试',img:'/static/img/scene5.jpg'},
					      {id:29,title:'测试',img:'/static/img/scene5.jpg'},
					      {id:30,title:'测试',img:'/static/img/scene5.jpg'},
					      {id:31,title:'测试',img:'/static/img/scene5.jpg'},
					      {id:32,title:'测试',img:'/static/img/scene5.jpg'},
					      {id:33,title:'测试',img:'/static/img/scene5.jpg'},
					      {id:34,title:'测试',img:'/static/img/scene5.jpg'},
					      {id:35,title:'测试',img:'/static/img/scene5.jpg'},
					      {id:36,title:'测试',img:'/static/img/scene5.jpg'},
					      {id:37,title:'测试',img:'/static/img/scene5.jpg'},
					      {id:38,title:'测试',img:'/static/img/scene5.jpg'},
					      {id:39,title:'测试',img:'/static/img/scene5.jpg'},
					      {id:40,title:'测试',img:'/static/img/scene5.jpg'},
					      {id:41,title:'测试',img:'/static/img/scene5.jpg'},
					      {id:42,title:'测试',img:'/static/img/scene5.jpg'},
					      {id:43,title:'测试',img:'/static/img/scene5.jpg'},
					      {id:44,title:'测试',img:'/static/img/scene5.jpg'},
					      {id:45,title:'测试',img:'/static/img/scene5.jpg'},
					      {id:46,title:'测试',img:'/static/img/scene5.jpg'},
					      {id:47,title:'测试',img:'/static/img/scene5.jpg'},
					      {id:48,title:'测试',img:'/static/img/scene5.jpg'},
					      {id:49,title:'测试',img:'/static/img/scene5.jpg'},
					      {id:50,title:'测试',img:'/static/img/scene5.jpg'},
					      {id:51,title:'测试',img:'/static/img/scene5.jpg'},
					      {id:52,title:'测试',img:'/static/img/scene5.jpg'},
					      {id:53,title:'测试',img:'/static/img/scene5.jpg'},
					      {id:54,title:'测试',img:'/static/img/scene5.jpg'},
					      {id:55,title:'测试',img:'/static/img/scene5.jpg'},
					      {id:56,title:'测试',img:'/static/img/scene5.jpg'},
					      {id:57,title:'测试',img:'/static/img/scene5.jpg'},
					      {id:58,title:'测试',img:'/static/img/scene5.jpg'},
					      {id:59,title:'测试',img:'/static/img/scene5.jpg'},
					      {id:60,title:'测试',img:'/static/img/scene5.jpg'},
					      {id:61,title:'测试',img:'/static/img/scene5.jpg'},
					      {id:62,title:'测试',img:'/static/img/scene5.jpg'},
					      {id:63,title:'测试',img:'/static/img/scene5.jpg'},
					      {id:64,title:'测试',img:'/static/img/scene5.jpg'},
					      {id:65,title:'测试',img:'/static/img/scene5.jpg'},
					      {id:66,title:'测试',img:'/static/img/scene5.jpg'},
					      {id:67,title:'测试',img:'/static/img/scene5.jpg'},
					      {id:68,title:'测试',img:'/static/img/scene5.jpg'},
					      {id:69,title:'测试',img:'/static/img/scene5.jpg'},
					      {id:70,title:'测试',img:'/static/img/scene5.jpg'},
					      {id:71,title:'测试',img:'/static/img/scene5.jpg'},
					      {id:72,title:'测试',img:'/static/img/scene5.jpg'},
					      {id:73,title:'测试',img:'/static/img/scene5.jpg'},
					      {id:74,title:'测试',img:'/static/img/scene5.jpg'},
					      {id:75,title:'测试',img:'/static/img/scene5.jpg'},
					      {id:76,title:'测试',img:'/static/img/scene5.jpg'},
					      {id:77,title:'测试',img:'/static/img/scene5.jpg'},
					      {id:78,title:'测试',img:'/static/img/scene5.jpg'},
					      {id:79,title:'测试',img:'/static/img/scene5.jpg'},
					      {id:80,title:'测试',img:'/static/img/scene5.jpg'},
					      {id:81,title:'测试',img:'/static/img/scene5.jpg'},
					      {id:82,title:'测试',img:'/static/img/scene5.jpg'},
					      {id:83,title:'测试',img:'/static/img/scene5.jpg'},
					      {id:84,title:'测试',img:'/static/img/scene5.jpg'},
					      {id:85,title:'测试',img:'/static/img/scene5.jpg'},
					      {id:86,title:'测试',img:'/static/img/scene5.jpg'},
					      {id:87,title:'测试',img:'/static/img/scene5.jpg'},
					      {id:88,title:'测试',img:'/static/img/scene5.jpg'},
					      {id:89,title:'测试',img:'/static/img/scene5.jpg'},
					      {id:90,title:'测试',img:'/static/img/scene5.jpg'},
					      {id:91,title:'测试',img:'/static/img/scene5.jpg'},
					      {id:92,title:'测试',img:'/static/img/scene5.jpg'},
					      {id:93,title:'测试',img:'/static/img/scene5.jpg'},
					      {id:94,title:'测试',img:'/static/img/scene5.jpg'},
					      {id:95,title:'测试',img:'/static/img/scene5.jpg'},
					      {id:96,title:'测试',img:'/static/img/scene5.jpg'},
					      {id:97,title:'测试',img:'/static/img/scene5.jpg'},
					      {id:98,title:'测试',img:'/static/img/scene5.jpg'},
					      {id:99,title:'测试',img:'/static/img/scene5.jpg'},
					      {id:100,title:'测试',img:'/static/img/scene5.jpg'},
				]
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}
	.list-img{
		width: calc(100% - 70upx);
		height: 160upx;
		background-color: rgba(205, 201, 176, 0.9);
		margin: 0upx 20upx 10upx 20upx;
		padding: 15upx 15upx;
		border-radius: 10upx;
	}
	.text-area {
		display: flex;
		width: 100%;
		flex-direction: column;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
