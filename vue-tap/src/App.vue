<style>
	body {
		font-family: Helvetica, sans-serif;
	}
	.tab-list li{
		display: none
	}
	.tab-list .cur{
		display: block;
	}
	.app-tab{
		height: 350px
	}
	.new-tab .tab-title .cur{
		background: #2a89ff;
		color: #fff;
	}
</style>

<template>
	<div id="app">
		<h1>{{ msg }}</h1>
	</div>
	<tab :data="tab" type="tab" defclass="app-tab" @tab-click="tabClick">
		<ul class="tab-list">
			<li v-bind:class="{ 'cur': tab.item[0].cur }">
				<img src="http://ossweb-img.qq.com/upload/adw/image/201605/1463464087037576937.jpg" alt="">
			</li>
			<li v-bind:class="{ 'cur': tab.item[1].cur }">
				<h3>招牌把妹</h3>
				<p>我的招牌把妹姿势是频繁偷瞄我喜欢的妹子，然后祈祷她比我更勇敢更瞎能过来把我</p>
			</li>
		</ul>
	</tab>
	<tab :data="news" type="news" defclass="new-tab" @tab-click="tabClick">
		<ul class="tab-list">
			<li v-for="item in news.item" 
				v-bind:class="{ 'cur': item.cur }">
				{{ item.content }}
			</li>
		</ul>
	</tab>
</template>

<script>
	import tab from './components/tab.vue'
	export default {
		components:{
			tab
		},
		data(){
			return {
				msg: 'vue-tab',
				tab:{
					item:[{
						title:'炸弹人7.5折',
						cur:true
					},{
						title:'招牌把妹',
						cur:false
					}]
				},
				news:{
					item:[{
						title:'JY解说',
						cur:true,
						content:"JY解说：新版最强中单蚂蚱 6秒一次女妖输出爆炸"
					},{
						title:'若风',
						cur:false,
						content:"若风解说：双龙际会逆天改命！究极翻盘小鱼人！"
					}]
				}
			}
		},
		methods:{
			tabClick(type, index){
				this[type].item.map(function(item, i){
					return item.cur = (i === index);
				});
				console.warn(type + ":点击第" + index + "个Tab");
			}
		}
	}
</script>