<template>
	<view>
		<view>
			<text>时间选择器</text>
			<view style="width: 100%;height: 50upx;border-bottom: 1upx solid #333333;">
				<picker mode="time" :value="time" start="09:01" end="21:01" @change="bindTimeChange">
				                      <view class="uni-input">{{time}}</view>
				</picker>
			</view>
			
			<text>日期选择器</text>
			<view style="width: 100%;height: 50upx;border-bottom: 1upx solid #333333;">
				<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
					<view class="uni-input">{{date}}</view>
				</picker>
			</view>
			
			  <text>地区选择器不支持支付宝和h5</text>
			  <view style="width: 100%;height: 50upx;border-bottom: 1upx solid #333333;">
			  	<picker @change="bindPickerChange" :value="index" :range="array">
					<view class="uni-input">{{array[index]}}</view>
				</picker>
			  </view>
			  
			  <!-- <text>三级联动插件支持支付宝h5</text> -->
			  <!-- <view style="width: 100%;height: 50upx;border-bottom: 1upx solid #333333;"> -->
			  <!-- 	<picker @change="bindPickerChange" :value="index" :range="array">
			  					<view class="uni-input">{{array[index]}}</view>
			  				</picker> -->
			  <!-- </view> -->
			  
			  
		</view>
		     <text>三级联动插件支持支付宝h5</text>
		        <button class="btns" type="primary" @tap="openAddres">默认打开地址</button>
		
		        <button class="btns" type="default" @tap="openAddres2">自定义：根据省市区名称打开地址</button>
		
		        <button class="btns" type="warn" @tap="openAddres3">自定义：根据省市区“code”打开地址</button>
		        <textarea v-model="pickerText" cols="30" rows="10"></textarea>
		        <!--
		         mask-bg-color="rgba(0, 229, 238, 0.4)" // 自定义遮罩层背景颜色
		         -->
		        <!-- <simple-address ref="simpleAddress" :pickerValueDefault="cityPickerValueDefault" @onConfirm="onConfirm" themeColor="#007AFF"></simple-address> -->
	</view>
	</view>
</template>

<script>
	import simpleAddress from '@/components/simple-address/simple-address.nvue'
	export default {
		components:{
			simpleAddress
		},
		data() {
			  const currentDate = this.getDate({
			            format: true
			        })
			return {
				title: 'picker',
				array: ['中国', '美国', '巴西', '日本'],
				index: 0,
				date: currentDate,
				time: '12:01',
				cityPickerValueDefault: [0, 0, 1],
				pickerText: ''
			}
		},
		    computed: {
		        startDate() {
		            return this.getDate('start');
		        },
		        endDate() {
		            return this.getDate('end');
		        }
		    },
		methods: {
			bindPickerChange: function(e) {
			            console.log('picker发送选择改变，携带值为', e.target.value)
			            this.index = e.target.value
			        },
			bindDateChange: function(e) {
				this.date = e.target.value
			},
			
			bindTimeChange: function(e) {
			            this.time = e.target.value
			},
			  getDate(type) {
			            const date = new Date();
			            let year = date.getFullYear();
			            let month = date.getMonth() + 1;
			            let day = date.getDate();
			
			            if (type === 'start') {
			                year = year - 60;
			            } else if (type === 'end') {
			                year = year + 2;
			            }
			            month = month > 9 ? month : '0' + month;;
			            day = day > 9 ? day : '0' + day;
			            return `${year}-${month}-${day}`;
			        },
					onConfirm(e) {
					            this.pickerText = JSON.stringify(e);
					        },
						
						openAddres() {
									this.cityPickerValueDefault = [0,0,1]
									this.$refs.simpleAddress.open();
								},
								openAddres2() {
									// 根据 label 获取
									var index = this.$refs.simpleAddress.queryIndex(['湖北省', '随州市', '曾都区'], 'label');
									console.log(index);
									this.cityPickerValueDefault = index.index;
									this.$refs.simpleAddress.open();
								},
								openAddres3() {
									// 根据value 获取
									var index = this.$refs.simpleAddress.queryIndex([13, 1302, 130203], 'value');
									console.log(index);
									this.cityPickerValueDefault = index.index;
									this.$refs.simpleAddress.open();
								}
							
		}
	}
</script>

<style>

</style>
