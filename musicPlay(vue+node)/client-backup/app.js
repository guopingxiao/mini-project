(function(Vue){  
	//1.使用匿名自执行函数，一方面是为了避免全局变量，另一方面是为了减少原型查找的长度；
	// 定义组件
	
	//自定义函数，获得模板内容 
	var getTemplate = function(name){
		return document.getElementById(name).innerHTML;
	}

	var songs = [{"id":3,"name":"我恨我痴心","artist":"刘德华","duration":342,"music":"http://127.0.0.1:2080/uploads/刘德华 - 我恨我痴心.mp3","poster":"http://127.0.0.1:2080/uploads/刘德华.jpg","lyric":"http://127.0.0.1:2080/uploads/刘德华 - 我恨我痴心.lrc"},{"id":4,"name":"不说再见","artist":"好妹妹乐队","duration":342,"music":"http://127.0.0.1:2080/uploads/好妹妹乐队 - 不说再见.mp3","poster":"http://127.0.0.1:2080/uploads/好妹妹乐队.jpg","lyric":"http://127.0.0.1:2080/uploads/好妹妹乐队 - 不说再见.lrc"},{"id":5,"name":"青城山下白素贞","artist":"好妹妹乐队","duration":342,"music":"http://127.0.0.1:2080/uploads/好妹妹乐队 - 青城山下白素贞.mp3","poster":"http://127.0.0.1:2080/uploads/好妹妹乐队.jpg","lyric":"http://127.0.0.1:2080/uploads/好妹妹乐队 - 青城山下白素贞.lrc"},{"id":6,"name":"送情郎(2010.12.11 德云二队张一元晚场)","artist":"岳云鹏","duration":342,"music":"http://127.0.0.1:2080/uploads/岳云鹏 - 送情郎(2010.12.11 德云二队张一元晚场).mp3","poster":"http://127.0.0.1:2080/uploads/岳云鹏.jpg","lyric":"http://127.0.0.1:2080/uploads/岳云鹏 - 送情郎(2010.12.11 德云二队张一元晚场).lrc"},{"id":7,"name":"往事只能回味","artist":"岳云鹏,宋小宝","duration":342,"music":"http://127.0.0.1:2080/uploads/岳云鹏,宋小宝 - 往事只能回味.mp3","poster":"http://127.0.0.1:2080/uploads/岳云鹏,宋小宝.jpg","lyric":"http://127.0.0.1:2080/uploads/岳云鹏,宋小宝 - 往事只能回味.lrc"},{"id":8,"name":"天梯(Live) - live","artist":"张智霖","duration":342,"music":"http://127.0.0.1:2080/uploads/张智霖 - 天梯(Live) - live.mp3","poster":"http://127.0.0.1:2080/uploads/张智霖.jpg","lyric":"http://127.0.0.1:2080/uploads/张智霖 - 天梯(Live) - live.lrc"},{"id":9,"name":"友情岁月","artist":"李克勤","duration":342,"music":"http://127.0.0.1:2080/uploads/李克勤 - 友情岁月.mp3","poster":"http://127.0.0.1:2080/uploads/李克勤.jpg","lyric":"http://127.0.0.1:2080/uploads/李克勤 - 友情岁月.lrc"},{"id":10,"name":"合久必婚","artist":"李克勤","duration":342,"music":"http://127.0.0.1:2080/uploads/李克勤 - 合久必婚.mp3","poster":"http://127.0.0.1:2080/uploads/李克勤.jpg","lyric":"http://127.0.0.1:2080/uploads/李克勤 - 合久必婚.lrc"},{"id":11,"name":"天梯","artist":"李克勤","duration":342,"music":"http://127.0.0.1:2080/uploads/李克勤 - 天梯.mp3","poster":"http://127.0.0.1:2080/uploads/李克勤.jpg","lyric":"http://127.0.0.1:2080/uploads/李克勤 - 天梯.lrc"},{"id":12,"name":"爱不释手","artist":"李克勤","duration":342,"music":"http://127.0.0.1:2080/uploads/李克勤 - 爱不释手.mp3","poster":"http://127.0.0.1:2080/uploads/李克勤.jpg","lyric":"http://127.0.0.1:2080/uploads/李克勤 - 爱不释手.lrc"},{"id":13,"name":"飞花","artist":"李克勤","duration":342,"music":"http://127.0.0.1:2080/uploads/李克勤 - 飞花.mp3","poster":"http://127.0.0.1:2080/uploads/李克勤.jpg","lyric":"http://127.0.0.1:2080/uploads/李克勤 - 飞花.lrc"},{"id":14,"name":"充满希望","artist":"玛莉亚","duration":342,"music":"http://127.0.0.1:2080/uploads/玛莉亚 - 充满希望.mp3","poster":"http://127.0.0.1:2080/uploads/玛莉亚.jpg","lyric":"http://127.0.0.1:2080/uploads/玛莉亚 - 充满希望.lrc"},{"id":15,"name":"友谊之光","artist":"玛莉亚","duration":342,"music":"http://127.0.0.1:2080/uploads/玛莉亚 - 友谊之光.mp3","poster":"http://127.0.0.1:2080/uploads/玛莉亚.jpg","lyric":"http://127.0.0.1:2080/uploads/玛莉亚 - 友谊之光.lrc"},{"id":16,"name":"老中医","artist":"花粥","duration":342,"music":"http://127.0.0.1:2080/uploads/花粥 - 老中医.mp3","poster":"http://127.0.0.1:2080/uploads/花粥.jpg","lyric":"http://127.0.0.1:2080/uploads/花粥 - 老中医.lrc"},{"id":17,"name":"静静的看着你装逼","artist":"花粥&四四","duration":342,"music":"http://127.0.0.1:2080/uploads/花粥&四四 - 静静的看着你装逼.mp3","poster":"http://127.0.0.1:2080/uploads/花粥&四四.jpg","lyric":"http://127.0.0.1:2080/uploads/花粥&四四 - 静静的看着你装逼.lrc"},{"id":18,"name":"也曾相识","artist":"谭咏麟","duration":342,"music":"http://127.0.0.1:2080/uploads/谭咏麟 - 也曾相识.mp3","poster":"http://127.0.0.1:2080/uploads/谭咏麟.jpg","lyric":"http://127.0.0.1:2080/uploads/谭咏麟 - 也曾相识.lrc"},{"id":19,"name":"夏日寒风","artist":"谭咏麟","duration":342,"music":"http://127.0.0.1:2080/uploads/谭咏麟 - 夏日寒风.mp3","poster":"http://127.0.0.1:2080/uploads/谭咏麟.jpg","lyric":"http://127.0.0.1:2080/uploads/谭咏麟 - 夏日寒风.lrc"},{"id":20,"name":"雾之恋","artist":"谭咏麟","duration":342,"music":"http://127.0.0.1:2080/uploads/谭咏麟 - 雾之恋.mp3","poster":"http://127.0.0.1:2080/uploads/谭咏麟.jpg","lyric":"http://127.0.0.1:2080/uploads/谭咏麟 - 雾之恋.lrc"},{"id":21,"name":"17岁","artist":"刘德华","duration":"241.084082","music":"http://127.0.0.1:2080/uploads/upload_882c2718af7bf4c791c1e75f6ad4cf94.mp3","poster":"http://127.0.0.1:2080/uploads/upload_88c8040ffc0792b3f248f64cedb99b7f.png","lyric":"http://127.0.0.1:2080/uploads/upload_e14bb9e76fd64261d10a8f75ddea1c9e.lrc"},{"id":22,"name":"213213","artist":"213213","duration":"241.084082","music":"http://127.0.0.1:2080/uploads/upload_c7c9db78d1a38738f5ad1342327eb6a4.mp3","poster":"http://127.0.0.1:2080/uploads/upload_07ccb673fde98bc2bb8c5059fa7ce411","lyric":"http://127.0.0.1:2080/uploads/upload_9dd87230e113c9bacafcea81935d9c91"}];

    const pad = (num, n) => (Array(n).join(0) + num).slice(-n)
    const convertDuration = duration => {
        const h = Math.floor(duration / 3600)
        const m = Math.floor(duration % 3600 / 60)
        const s = Math.floor(duration % 60)
        return h ? `${pad(h, 2)}:${pad(m, 2)}:${pad(s, 2)}` : `${pad(m, 2)}:${pad(s, 2)}`
    }

	var Home = Vue.extend({
	    template: getTemplate('home_template')
	})

	var List = Vue.extend({ //为List组件加载数据
	    template: getTemplate('list_template'),

	    data:function(){
	    	//list:songs,发送ajax请求
	    	this.$http.jsonp('http://127.0.0.1:2080/api/music')
	    		.then(res =>{
	    			this.list = res.data; //list直接绑定下面的list
	    		})
	    	
	    	return {
	    		list:[]
	    		
	    	}
	    },
	    methods:{
	    	pad:pad,
	    	convertDuration:convertDuration
	    }
	})

	var Item = Vue.extend({
	    template: getTemplate('item_template'),
	    data:function(){
	    	return{
	    		item:{}
	    	}
	    },
	    router:function(transition){//使用路由，这有这样才能获得id
	    	var id = parseInt(transiton.to.param.id);
	    	//不合法的id
	    	if(!id){
	    		router.go('/home');
	    		return;
	    	}
	    	//获得歌曲的详细信息
	    	this.$http.jsonp('http://127.0.0.1:2080/api/music' + id)
	    		.then(res =>{
	    			this.item = res.data; //list直接绑定下面的list
	    			//这里拿到了要播放的音乐
	    			var audio = new Audio();
	    			audio.src = this.item.music;
	    			audio.play();
	    		})
	    	return{
	    		item:{}//songs.find(s => s.id == id )
	    	}

	    }
	})

	// 路由器需要一个根组件。
	// 出于演示的目的，这里使用一个空的组件，直接使用 HTML 作为应用的模板
	var App = Vue.extend({})

	// 创建一个路由器实例
	// 创建实例时可以传入配置参数进行定制，为保持简单，这里使用默认配置
	var router = new VueRouter()

	// 定义路由规则
	// 每条路由规则应该映射到一个组件。这里的“组件”可以是一个使用 Vue.extend
	// 创建的组件构造函数，也可以是一个组件选项对象。
	// 稍后我们会讲解嵌套路由
	router.map({ //配置路由对象
	    '/home': {
	    	name:'home',
	        component: Home
	    },
	    '/songs': {
	    	name:'list',
	        component: List
	    },
	    //路由 /songs/2
	    '/songs/:id':{
	    	name:'item',
	    	component:Item
	    }
	})

	//为路由器定义全局的重定向规则
	router.redirect({'*': '/home'})

	// 现在我们可以启动应用了！
	// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
	router.start(App, '#app')
})(Vue)