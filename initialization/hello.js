
var app =new Vue({
    // 这个的el 绑定id对象
    el:"#app1",
    data:{
        message:"Hello Vue"
    }
})

var app2 = new Vue({
    el:"#app-2",
    data:{
        message:"页面加载在" + new Date().toLocaleString()
    }
})

var app3 = new Vue({
    el:"#app-3",
    data:{
        seen:true,
    }
})

var app4 = new Vue({
    el:"#app-4",
    data:{
        todos:[
            {text:"打工"},
            {text:"加班"},
            {text:"996"}
        ]
    }
})

var app5 = new Vue({
    el:"#app-5",
    data:{
        message:"hellow vue"
    },
    methods:{
        reverseMessage:function(){
            this.message=this.message.split(" ").reverse().join(" ")
        }
    }
})