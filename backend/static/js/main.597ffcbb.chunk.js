(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){e.exports=n.p+"static/media/logo.ee7cd8ed.svg"},15:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),o=n(3),c=n.n(o),s=(n(13),n(4)),r=n(5),i=n(7),u=n(6),d=(n(14),n(1)),m=n.n(d),p=(n(15),n(16),n(17),function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={inputValue:"",list:[]},a}return Object(r.a)(n,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{class:"container"},l.a.createElement("div",{class:"row clearfix"},l.a.createElement("div",{class:"col-md-12 column"},l.a.createElement("div",{class:"jumbotron"},l.a.createElement("h1",null,"Todo List ",l.a.createElement("small",null,"- \u5de9\u6548\u4e49 \u5b8b\u5f90\u5a01 \u90ed\u5f00\u9614")),l.a.createElement("p",null,"\u654f\u6377web\u5f00\u53d1\u5927\u4f5c\u4e1a\uff1a",l.a.createElement("a",{href:"https://github.com/ylongly7/XJTUSE_AgileWeb_FinalAssignment_ToDoList"},"Github"))),l.a.createElement("div",{class:"row clearfix"},l.a.createElement("div",{class:"col-md-1 column"}),l.a.createElement("div",{class:"col-md-4 column"},l.a.createElement("div",{class:"input-group"},l.a.createElement("span",{class:"input-group-addon"},l.a.createElement("strong",null,"\u65b0 \u5efa:")),l.a.createElement("input",{type:"text",class:"form-control",id:"todo-input",value:this.state.inputValue,onChange:this.handleInputChange.bind(this),placeholder:" Todo List..."}))),l.a.createElement("div",{class:"col-md-4 column"},l.a.createElement("button",{type:"button",class:"btn btn-success",id:"submitBtn",onClick:this.handleBtnClick.bind(this)},"\u63d0 \u4ea4")),l.a.createElement("div",{class:"col-md-3 column"})),l.a.createElement("br",null),l.a.createElement("hr",null),l.a.createElement("table",{class:"table table-hover"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null),l.a.createElement("th",null,"ID"),l.a.createElement("th",null,"content"),l.a.createElement("th",null,"time"),l.a.createElement("th",null,"Delete"),l.a.createElement("th",null,"Update"))),l.a.createElement("tbody",null,this.state.list.map((function(t,n){return l.a.createElement("tr",null,l.a.createElement("td",null),l.a.createElement("td",null,t.id),l.a.createElement("td",null,l.a.createElement("input",{type:"text",id:"content"+n,class:"form-control",placeholder:t.content,onChange:e.updateTrigger.bind(e,n)})),l.a.createElement("td",null,t.time),l.a.createElement("td",null,l.a.createElement("button",{type:"button",class:"btn btn-danger",id:"delBtn"+n,onClick:e.handleItemDelete.bind(e,t.id)},l.a.createElement("strong",null,"\u5220 \u9664"))),l.a.createElement("td",null,l.a.createElement("button",{type:"button",class:"btn btn-primary",id:"updateBtn"+n,style:{display:"none"},onClick:e.handleItemUpdate.bind(e,t.id,n)},l.a.createElement("strong",null,"\u63d0 \u4ea4"))))})))))))}},{key:"componentDidMount",value:function(){var e=this;m.a.ajax({type:"GET",url:"/api/tasks",success:function(t){console.log(t),e.setState({list:t})},error:function(e){console.log(e,e.status,e.responseText)}})}},{key:"handleInputChange",value:function(e){this.setState({inputValue:e.target.value})}},{key:"handleBtnClick",value:function(){var e=this;m.a.ajax({type:"POST",url:"api/tasks",data:JSON.stringify({content:this.state.inputValue}),success:function(t){console.log(t),e.setState({list:t,inputValue:""})},error:function(e){console.log(e,e.status,e.responseText)}})}},{key:"updateTrigger",value:function(e,t){m()("#content"+e).val()!==m()("#content"+e).attr("placeholder")?m()("#updateBtn"+e).show():m()("#updateBtn"+e).hide()}},{key:"handleItemUpdate",value:function(e,t){var n=this;console.log("put"),m.a.ajax({type:"PUT",url:"api/tasks/",data:JSON.stringify({content:m()("#content"+t).val(),id:e}),success:function(e){console.log(e),n.setState({list:e}),m()("#content"+t).val(""),m()("#updateBtn"+t).hide()},error:function(e){console.log(e,e.status,e.responseText)}})}},{key:"handleItemDelete",value:function(e){var t=this;m.a.ajax({type:"DELETE",url:"api/tasks/"+e,success:function(e){console.log(e),t.setState({list:e})},error:function(e){console.log(e,e.status,e.responseText)}})}}]),n}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,n){e.exports=n(18)}},[[8,1,2]]]);
//# sourceMappingURL=main.597ffcbb.chunk.js.map