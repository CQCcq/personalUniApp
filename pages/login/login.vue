<template>
	<view class="content">
		<!-- <image class="logo" src="/static/logo.png"></image> -->
		<view class="text-area">
			<text class="title">{{title}}</text>
			<text v-text="nameList.name"></text>
		<!-- 	<text>{{count}}</text>
			<button  @click="getCount"></button> -->
			<br/>
			
			    <view v-for='item in list' :key='item.id'>
			            {{item.name}}
			       </view>
			       <view style="width: 100%;height: 20px;background-color: aqua;">
			    
			    </view>
			    <view v-for='item in listOne' :key='item.id'>
			        {{item.name}}
			    </view>
				
				
			<view style="display: flex;flex-direction: column;width: 100%;">
					<view v-for="item in nameData" :key="item.id" style="width: calc(100% - rpx); height: rpx; background-color: #007AFF;">
						<text>姓名：{{item.name}}</text>
						<button @click="getStroage">你好</button>
					</view>
			</view>
		</view>
	</view>
</template>

<script>
	import store from "../../store/store.js";
	export default {
		data() {
			return {
				title: '获取数据',
				nameData:[{'id':0,'name':'张三'}],
				list:[],
				listOne:[],
			}
		},
		onLoad() {

		},
		created(){
			this.getStroage();
		},
		methods: {
			getCount(){
				 store.commit('increment');
			},
 async	getStroage(){
	 
	       // let testList = [];let testObj = {};
	       //           for(let i=0;i<5000;i++){
	       //               testObj = {};
	       //               testObj.name = '郑' + i;
	       //               testObj.id = i;
	       //               this.list.push(testObj);
	       //           }
	       //           for(let j = 0;j<this.list.length;j++){
	       //               this.listOne.push(this.list[j]);
	       //           }
		// let that = this;
		// this.nameData = [];
		console.log('有意思',this);
		let nameDataList = [];
	await	uni.getStorage({
			key: 'nameList',
			success: (res)=> {
				console.log('res=>',res.data.length)
				for(let i=0 ; i<res.data.length;i++){
					nameDataList.push(res.data[i]);
					
				};
				// for(let i=5000 ; i<res.data.length;i++){
				// 	nameDataList.push(res.data[i]);
				// }
				this.nameData = nameDataList;
				// this.$setData({
				// 	nameData:nameDataList
				// })
			}
		});
		console.log("服了",this,this.nameData);
	}
		},
		// computed:{
		// count(val){
		// 		console.log('为什么',val);
		// 		return store.state.count
		// 	}
		// }
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

	.text-area {
		display: flex;
		flex-direction: column;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
