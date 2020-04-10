<template>
	<view class="map-page">
	<view class="page-body">
			<view class="page-section page-section-gap">
				<map style="width: 100%; height: 300px;" :scale="scale" :circles="circles" :latitude="latitude" :longitude="longitude" :markers="covers">
				</map>
			<button @click="addFun">增加</button>
			<button @click="delFun">减少</button>
			<button @click="baiduFun">获取百度地图API信息</button>
			</view>
		</view>
	</view>
</template>

<script>
	import './map.scss';
	var bmap = require('../../libs/bmap-wx.min.js');
	export default {
		data() {
			return {
					scale:10,
					// id:0, // 使用 marker点击事件 需要填写id
					// title: 'map',
					latitude:31.202379778518566,
					longitude:121.46083868127292,
					circles:[
						{
							latitude:31.24281273875668,
							longitude:121.4953942982862,
							color:"#ff2243",
							fillColor:'##0000AA',
							radius:80,
							strokeWidth:1
						},
						{
							latitude:39.92822395878881,
							longitude:116.36688971315738,
							color:"#ff2243",
							fillColor:'##0000AA',
							radius:80,
							strokeWidth:1
						},
						{
							latitude:31.228771957294,
							longitude:121.53988140055473,
							color:"#ff2243",
							fillColor:'##0000AA',
							radius:80,
							strokeWidth:1
						},
						{
							color:"#ff2243",
							fillColor:'##0000AA',
							radius:80,
							strokeWidth:1,
							latitude:31.20852186362007,
							longitude:121.46694899999991,
						}
					],
					covers: [{
							id:0,
							title: '上海市黄浦区四川中路276号',
							latitude:31.24281273875668,
							longitude:121.4953942982862,
							rotate:0,
							// iconPath:'/static/img/scene3.jpg',
							// width:10,
							// height:10
					}, {
						id:1,
						title: '北京市西城区民康胡同33号',
						latitude:39.92822395878881,
						longitude:116.36688971315738,
						rotate:0,
						// iconPath:'/static/img/scene3.jpg',
						// width:10,
						// height:10
					},{
						id:2,
						title: '上海市浦东新区浦电路438号21楼',
						latitude:31.228771957294,
						longitude:121.53988140055473,
					},
					{
						id:3,
						title: '公司',
						latitude:31.202379778518566,
						longitude:121.46083868127292,
					}
					]
				}
		},
		methods: {
			addFun(){
				if(this.scale < 18){
					this.scale++
				}
			},
			delFun(){
				if(this.scale > 5){
					this.scale--
				}
			},
			baiduFun(){
				console.log("调用百度地图API");
				var BMap = new bmap.BMapWX({
					ak: 'pmfkKvIOBnyBjZZeqHxl0wNXdh7RzRLw'
				});
				console.log("百度地图",BMap);
				var success = function(data){
					console.log("请求成功",data);
				}
				var fail = function(data) {
					console.log(data)
				};	
		   BMap.geocoding({ 
					address: "北京市海淀区上地十街10号", 
					fail: fail, 
					success: success, 
					iconPath: '../../img/marker_red.png', 
					iconTapPath: '../../img/marker_red.png' 
				}); 
			}
		}
	}
</script>

<style>

</style>
