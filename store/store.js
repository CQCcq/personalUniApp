import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
    state:{
        //用一个对象就包含了全部的应用层级状态。至此它便作为一个“唯一数据源 (SSOT)”而存在
        //也就是相当于data对象，一个对象笼络所有资源
        count:0,
        first:1,
		address:[
  {
  	"address": "北京市西城区民康胡同33号",
  	"latitude": 39.92822395878881,
  	"name": "北京-金益大厦",
  	"id": 4,
  	"radius": 80,
  	"userid": "4222,4463,2844,11887",
  	"longitude": 116.36688971315738
  }, {
  	"address": "上海市浦东新区浦电路438号21楼",
  	"latitude": 31.228771957294,
  	"name": "中金所双鸽",
  	"id": 53,
  	"radius": 79,
  	"userid": "4222,4463,2601,2644,11787,4002",
  	"longitude": 121.53988140055473
  }, {
  	"address": "上海市浦东新区锦康路",
  	"latitude": 31.21881557126314,
  	"name": "华金证券",
  	"id": 106,
  	"radius": 169,
  	"userid": "4463,4222",
  	"longitude": 121.5418206817352
  }, {
  	"address": "上海市浦东新区迎春路555号",
  	"latitude": 31.22901366850263,
  	"name": "上海证监局",
  	"id": 107,
  	"radius": 103,
  	"userid": "4222,4463",
  	"longitude": 121.55456335394692
  }, {
  	"address": "上海市嘉定区永盛路",
  	"latitude": 31.35488009698058,
  	"name": "公安局嘉定分局",
  	"id": 154,
  	"radius": 202,
  	"userid": "4222,4463",
  	"longitude": 121.26166022502537
  }, {
  	"address": "上海市长宁区茅台路871号",
  	"latitude": 31.21593690627623,
  	"name": "公安局长宁分局",
  	"id": 155,
  	"radius": 117,
  	"userid": "4222,4463",
  	"longitude": 121.39018901247618
  }, {
  	"address": "上海市浦东新区民生路1500号",
  	"latitude": 31.22818856451755,
  	"name": "公安局出入境管理局",
  	"id": 156,
  	"radius": 129,
  	"userid": "4222,4463",
  	"longitude": 121.55658990715476
  }, {
  	"address": "上海市黄浦区四川中路276号",
  	"latitude": 31.24281273875668,
  	"name": "文广局",
  	"id": 157,
  	"radius": 79,
  	"userid": "4463,4222",
  	"longitude": 121.4953942982862
  }, {
  	"address": "上海市徐汇区肇嘉浜路750号",
  	"latitude": 31.20519986320849,
  	"name": "华鑫证券",
  	"id": 23971,
  	"radius": 102,
  	"userid": "4222,4463",
  	"longitude": 121.45297899999993
  }, {
  	"address": "上海市徐汇区肇嘉浜路333-3",
  	"latitude": 31.20852186362007,
  	"name": "亚太企业大楼",
  	"id": 1,
  	"radius": 103,
  	"userid": "591,11989",
  	"longitude": 121.46694899999991
  }, {
  	"address": "上海市浦东新区浦电路360",
  	"latitude": 31.22794404468908,
  	"name": "中泰证券",
  	"id": 2,
  	"radius": 200,
  	"userid": "591",
  	"longitude": 121.53690831741913
  }, {
  	"address": "上海市徐汇区宛平南路26号",
  	"latitude": 31.20277212351744,
  	"name": "华鑫证券-宛平路",
  	"id": 3,
  	"radius": 73,
  	"userid": "591",
  	"longitude": 121.45115309780208
  }, {
  	"address": "北京市西城区前老莱街5号",
  	"latitude": 39.90853601154971,
  	"name": "北京-信达证券",
  	"id": 5,
  	"radius": 70,
  	"userid": "591",
  	"longitude": 116.36929401963103
  }, {
  	"address": "上海市徐汇区肇嘉浜路807-1-临",
  	"latitude": 31.20417276709057,
  	"name": "华鑫证券--五洲国际大厦",
  	"id": 108,
  	"radius": 80,
  	"userid": "591",
  	"longitude": 121.45438738348854
  }, {
  	"address": "上海市浦东新区世纪大道1600号19楼",
  	"latitude": 31.22976981049105,
  	"name": "中金所-陆家嘴广场",
  	"id": 109,
  	"radius": 200,
  	"userid": "591",
  	"longitude": 121.54104641608843
  }, {
  	"address": "上海市黄浦区中山东一路13号526B室",
  	"latitude": 31.24230338849983,
  	"name": "航道局--外滩",
  	"id": 205,
  	"radius": 46,
  	"userid": "591",
  	"longitude": 121.49660052371118
  }, {
  	"address": "上海市浦东新区浦东大道2501",
  	"latitude": 31.26413816649902,
  	"name": "航道局--浦东大道2501号",
  	"id": 206,
  	"radius": 126,
  	"userid": "591,1704",
  	"longitude": 121.56521176552504
  }, {
  	"address": "上海市杨浦区共青路82弄7号",
  	"latitude": 31.28126707969553,
  	"name": "航道局--共青路",
  	"id": 207,
  	"radius": 142,
  	"userid": "591",
  	"longitude": 121.56996923314077
  }, {
  	"address": "上海市浦东新区浦东大道850号",
  	"latitude": 31.24660837057425,
  	"name": "航道局--浦东大道850号",
  	"id": 208,
  	"radius": 81,
  	"userid": "591",
  	"longitude": 121.53550201098932
  }
]
		
    },
    mutations:{
        // increment(state){
        //     state.count++
        // },
        // firstFun(state){
        //     state.first++
        // }
    }
})