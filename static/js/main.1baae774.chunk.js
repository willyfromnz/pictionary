(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(22)},15:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(3),c=n.n(r),i=(n(15),n(4)),s=n(5),l=n(8),u=n(6),m=n(9),d=n(1),h=n(7),p=n.n(h),b=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={username:null},n.test=n.test.bind(Object(d.a)(Object(d.a)(n))),n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){new p.a(document.getElementById("canvas"),{lineColor:"#000",lineSize:5,boardColor:"transparent",historyDepth:10});this.state.username||this.setState({username:prompt("Enter your name","ElliotIsGay")})}},{key:"test",value:function(){fetch("https://ec2-13-239-33-68.ap-southeast-2.compute.amazonaws.com:3000/").then(function(e){console.log(e)})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement("canvas",{id:"canvas",width:"800",height:"800",style:{border:"1px solid blue"}})),o.a.createElement("div",null,o.a.createElement("button",{onClick:this.test},"test button")))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,2,1]]]);
//# sourceMappingURL=main.1baae774.chunk.js.map