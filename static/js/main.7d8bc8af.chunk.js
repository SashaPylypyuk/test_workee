(this.webpackJsonptest_workee=this.webpackJsonptest_workee||[]).push([[0],{13:function(e,t,a){e.exports=a.p+"static/media/thumbnail.66292bd5.jpg"},15:function(e,t,a){e.exports=a(35)},20:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(9),l=a.n(r),s=(a(20),a(2)),o=a(3),i=a(10),u=a(11),m=a.n(u),p=a(12),d=a.n(p),_=a(13),b=a.n(_),E=function(e){var t=e.user,a=e.index,r=Object(n.useState)(!1),l=Object(o.a)(r,2),s=l[0],i=l[1],u=Object(n.useCallback)((function(){i(!s)}));return c.a.createElement("div",{className:"user",onClick:u},c.a.createElement("p",{className:"user__position"},a+1),c.a.createElement("div",{className:"user__row"},c.a.createElement("img",{className:d()("user__thumbnail",{user__active:s}),alt:"thumbnail",src:b.a}),c.a.createElement("div",null,c.a.createElement("p",{className:"user__name"},t.name),c.a.createElement("div",{className:"user__row--small"},c.a.createElement("p",{className:"user__time"},function(e){var t=parseInt(e/1e3/100,10),a=Math.floor(e/1e3%60),n=Math.floor(e/6e4%60);return n=n<10?"0".concat(n):n,a=a<10?"0".concat(a):a,"".concat(n,":").concat(a,".").concat(t)}(t.time)),c.a.createElement("p",{className:"user__speed"},t.speed," ","\u043a\u043c/\u0447")),c.a.createElement("p",{className:"user__time--penalty",style:{color:s?t.color.hex():"#bbc0c7"}},"\u0448\u0442\u0440\u0430\u0444\u043d\u043e\u0435 \u0432\u0440\u0435\u043c\u044f"," ","00:00.00"))))},f=function(e){var t=e.data,a=e.initialUsers,r=Object(n.useState)(!0),l=Object(o.a)(r,2),u=l[0],p=l[1],d=Object(n.useState)(a),_=Object(o.a)(d,2),b=_[0],f=_[1];return c.a.createElement(i.a,{dataLength:t.length,next:function(){t.length<1?p(!1):f([].concat(Object(s.a)(b),Object(s.a)(t.splice(0,50))))},hasMore:u,loader:c.a.createElement("h4",null,"Loading...")},b.map((function(e,t){return c.a.createElement(E,{key:m.a.generate(),user:e,index:t})})))},h=a(14),v=a.n(h),j=Array(1e3).fill(1).map((function(e,t){return{color:v()("#7743ce"),name:"".concat(t%2?"Special very very long name":"Sasha Pylypyuk"),speed:80,time:12345678}}));a(34);var y=function(){var e=Object(s.a)(j),t=e.splice(0,50);return c.a.createElement(f,{data:e,initialUsers:t})};l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(y,null)),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.7d8bc8af.chunk.js.map