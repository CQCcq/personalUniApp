<template>
	<view>
	 <mescroll-body ref="mescrollRef" @init="mescrollInit" @down="downCallback" @up="upCallback" :down="downOption" :up="upOption" >
		 <view> @init="mescrollInit" @down="downCallback" @up="upCallback"为固定值,不可删改(与mescroll-mixins保持一致) </view>
		 <view> 字节跳动小程序 ref="mescrollRef" 必须配置 </view>
		 <view> 此处支持写入原生组件 </view>
		 <view v-for="data in dataList"> 数据列表... </view>
	 </mescroll-body>
	 <view>fixed元素需写在mescroll-body的外面,否则下拉刷新时会降级为absolute </view>
	</view>
	</template>

<script>
	import MescrollMixin from "@/components/mescroll-uni/mescroll-mixins.js";
	import MescrollBody from "@/components/mescroll-uni/mescroll-body.vue"; // 注意.vue后缀不能省
	export default {
		mixins: [MescrollMixin], // 使用mixin
		components: {
						MescrollBody
					},
		data() {
			return {
				title:'',
								mescroll: null, //mescroll实例对象 (此行可删,mixins已默认)
								// 下拉刷新的常用配置
								downOption: { 
									use: true, // 是否启用下拉刷新; 默认true
									auto: true, // 是否在初始化完毕之后自动执行下拉刷新的回调; 默认true
									native: false // 启用系统自带的下拉组件,默认false;仅mescroll-body生效,mescroll-uni无效
											// (native: true, 则需在pages.json中配置"enablePullDownRefresh":true)
								},
								// 上拉加载的常用配置
								upOption: {
									use: true, // 是否启用上拉加载; 默认true
									auto: true, // 是否在初始化完毕之后自动执行上拉加载的回调; 默认true
									page: {
										num: 0, // 当前页码,默认0,回调之前会加1,即callback(page)会从1开始
										size: 10 // 每页数据的数量,默认10
									},
									noMoreSize: 5, // 配置列表的总数量要大于等于5条才显示'-- END --'的提示
									empty: {
										tip: '暂无相关数据'
									}
								},
								// 列表数据
								dataList: []
							}
		},
		onLoad() {
			this.refresh();
		},
		methods: {
			init(){
				uni.request({
	
					url:'http://v.juhe.cn/toutiao/index',
					method:'get',
				    data: {
						type:'',
						key:'f42efb66353e08fce403f208a915a4eb',
				    },
				    header: {
				        // 'custom-header': 'hello' //自定义请求头信息
				    },
				    success: (res) => {
				        console.log(res.data);
				    }
				});
			},
			    refresh () {
			      this.$nextTick(() => {
			        this.$refs.pullScroll.refresh();
			      });
			    },
			    pullDown (pullScroll) {
			      setTimeout(() => {
			        this.loadData(pullScroll);
			      }, 200);
			    },
			    loadData (pullScroll) {
			      setTimeout(() => {
			        if (pullScroll.page == 1) {
			          this.list = [];
			        }
			        const curList = [];
			        for (let i = this.list.length; i < this.list.length + 20; i++) {
			          curList.push(i);
			        }
			        this.list = this.list.concat(curList);
			        if (this.list.length > 60) {
			          pullScroll.finish();
			        } else {
			          pullScroll.success();
			        }
			      }, 500);
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
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
