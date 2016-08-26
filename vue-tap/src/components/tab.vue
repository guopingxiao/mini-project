<style>
li,ul{list-style: none;}
.tab-title ul{
	overflow: hidden;
}
.tab-title ul li{
	float: left;
    text-align: center;
    padding: 10px;
}
.tab-title .cur{
	background: #ccc;
}
</style>
<template>
	<div class="{{ defclass }} tab">
		<div class="tab-title">
			<ul>
				<li v-for="item in data.item" 
					@click="action($index)" 
					:class="{ 'cur': item.cur }">
					{{ item.title }}
				</li>
			</ul>
		</div>
		<slot></slot>
	</div>
</template>
<script>
export default {
	name: 'tab',
	props: ['data', 'type', 'defclass'],
	methods: {
		action(index){
			this.$dispatch("tab-click", this.type, index);
		}
	}
}
</script>