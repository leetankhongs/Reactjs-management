(this.webpackJsonpmanagement=this.webpackJsonpmanagement||[]).push([[0],{16:function(e,t,a){e.exports=a(28)},21:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(8),l=a.n(r),c=(a(21),a(1)),o=a(2),i=a(4),m=a(3),u=(a(9),a(5)),p=a(7),h=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).onChangeValue=function(e){var t=e.target,a=t.name,s=t.value;"Status"===a&&(s="true"===t.value),n.setState(Object(u.a)({},a,s))},n.onSubmit=function(e){e.preventDefault(),n.props.onAddTask(n.state),n.resetForm()},n.onCloseForm=function(){n.props.onExistForm()},n.resetForm=function(){n.setState({name:"",status:!1}),n.onCloseForm()},n.state={id:"",name:"",status:!0},n}return Object(o.a)(a,[{key:"componentWillMount",value:function(){var e=this.props.task;e&&this.setState({id:e.id,name:e.name,status:e.status})}},{key:"componentWillReceiveProps",value:function(e){var t=e.task;t?this.setState({id:t.id,name:t.name,status:t.status}):this.setState({id:"",name:"",status:!0})}},{key:"render",value:function(){return console.log("VO form"),s.a.createElement("div",{className:"panel panel-warning"},s.a.createElement("div",{className:"panel-heading"},s.a.createElement("h3",{className:"panel-title"},""===this.state.id?"Th\xeam C\xf4ng Vi\u1ec7c":"Ch\u1ec9nh s\u1eeda c\xf4ng vi\u1ec7c","  \xa0",s.a.createElement("span",{className:"fa fa-times-circle text-right",onClick:this.onCloseForm}))),s.a.createElement("div",{className:"panel-body"},s.a.createElement("form",{onSubmit:this.onSubmit},s.a.createElement("div",{className:"form-group"},s.a.createElement("label",null,"T\xean :"),s.a.createElement("input",{type:"text",className:"form-control",name:"name",onChange:this.onChangeValue,value:this.state.Name})),s.a.createElement("label",null,"Tr\u1ea1ng Th\xe1i :"),s.a.createElement("select",{className:"form-control",name:"status",value:this.state.Status,onChange:this.onChangeValue},s.a.createElement("option",{value:!0},"K\xedch Ho\u1ea1t"),s.a.createElement("option",{value:!1},"\u1ea8n")),s.a.createElement("br",null),s.a.createElement("div",{className:"text-right"},s.a.createElement("button",{type:"submit",className:"btn btn-warning"},""===this.state.id?"Th\xeam":"Ch\u1ec9nh s\u1eeda"),"\xa0",s.a.createElement("button",{type:"button",className:"btn btn-danger",onClick:this.resetForm},"H\u1ee7y B\u1ecf")))))}}]),a}(n.Component),d=Object(p.b)((function(e){return{}}),(function(e,t){return{onAddTask:function(t){e(function(e){return{type:"ADD_TASK",task:e}}(t))}}}))(h),f=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).onChangeValue=function(e){var t=e.target,a=t.name,s=t.value;n.setState(Object(u.a)({},a,s))},n.searchList=function(){n.props.searchList(n.state.txtSearch)},n.state={txtSearch:""},n}return Object(o.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"input-group"},s.a.createElement("input",{type:"text",className:"form-control",placeholder:"Nh\u1eadp t\u1eeb kh\xf3a...",value:this.state.txtSearch,name:"txtSearch",onChange:this.onChangeValue}),s.a.createElement("span",{className:"input-group-btn"},s.a.createElement("button",{className:"btn btn-primary",type:"button",onClick:this.searchList},s.a.createElement("span",{className:"fa fa-search mr-5"}),"\xa0T\xecm")))}}]),a}(n.Component),E=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).onClick=function(e){n.setState({Type:e}),n.props.sortBy(e)},n.state={Type:0},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"dropdown"},s.a.createElement("button",{className:"btn btn-primary dropdown-toggle",type:"button",id:"dropdownMenu1","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"true"},"S\u1eafp X\u1ebfp \xa0 ",s.a.createElement("span",{className:"fa fa-caret-square-o-down ml-5"})),s.a.createElement("ul",{className:"dropdown-menu","aria-labelledby":"dropdownMenu1"},s.a.createElement("li",null,s.a.createElement("a",{role:"button",className:0===this.state.Type?"sort_selected":"",onClick:function(){return e.onClick(0)}},s.a.createElement("span",null,"Null"))),s.a.createElement("li",null,s.a.createElement("a",{role:"button",className:1===this.state.Type?"sort_selected":"",onClick:function(){return e.onClick(1)}},s.a.createElement("span",{className:"fa fa-sort-alpha-asc pr-5"},"T\xean A-Z"))),s.a.createElement("li",null,s.a.createElement("a",{role:"button",className:-1===this.state.Type?"sort_selected":"",onClick:function(){return e.onClick(-1)}},s.a.createElement("span",{className:"fa fa-sort-alpha-desc pr-5"},"T\xean Z-A")))))}}]),a}(n.Component),b=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).searchList=function(t){e.props.searchList(t)},e.sortBy=function(t){e.props.sortBy(t)},e}return Object(o.a)(a,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("div",{className:"col-xs-6 col-sm-6 col-md-6 col-lg-6"},s.a.createElement(f,{searchList:this.searchList})),s.a.createElement("div",{className:"col-xs-6 col-sm-6 col-md-6 col-lg-6"},s.a.createElement(E,{sortBy:this.sortBy})))}}]),a}(n.Component),g=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).changeStatus=function(){e.props.changeStatus(e.props.task.ID)},e.deleteTask=function(){e.props.deleteTask(e.props.task.ID)},e.updateItem=function(){e.props.updateItem(e.props.task.ID)},e}return Object(o.a)(a,[{key:"render",value:function(){return s.a.createElement("tr",null,s.a.createElement("td",null,this.props.index+1),s.a.createElement("td",null,this.props.task.name),s.a.createElement("td",{className:"text-center"},s.a.createElement("span",{className:!0===this.props.task.status?"label label-danger":"label label-success",onClick:this.changeStatus},!0===this.props.task.status?"K\xedch ho\u1ea1t":"\u1ea8n")),s.a.createElement("td",{className:"text-center"},s.a.createElement("button",{type:"button",className:"btn btn-warning",onClick:this.updateItem},s.a.createElement("span",{className:"fa fa-pencil mr-5"}),"\xa0S\u1eeda"),"\xa0",s.a.createElement("button",{type:"button",className:"btn btn-danger",onClick:this.deleteTask},s.a.createElement("span",{className:"fa fa-trash mr-5"}),"\xa0X\xf3a")))}}]),a}(n.Component),v=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).changeStatus=function(e){n.props.changeStatus(e)},n.deleteTask=function(e){n.props.deleteTask(e)},n.updateItem=function(e){n.props.updateItem(e)},n.onChangeValue=function(e){var t=e.target,a=t.name,s=t.value;n.props.filterList("name"===a?s:n.state.Name,"status"===a?s:n.state.Status),n.setState(Object(u.a)({},a,s))},n.state={name:"",status:-1},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this;console.log(this.props);var t=this.props.tasks.map((function(t,a){return s.a.createElement(g,{key:a,task:t,index:a,changeStatus:e.changeStatus,deleteTask:e.deleteTask,updateItem:e.updateItem})}));return s.a.createElement("table",{className:"table table-bordered table-hover mt-15"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",{className:"text-center"},"STT"),s.a.createElement("th",{className:"text-center"},"T\xean"),s.a.createElement("th",{className:"text-center"},"Tr\u1ea1ng Th\xe1i"),s.a.createElement("th",{className:"text-center"},"H\xe0nh \u0110\u1ed9ng"))),s.a.createElement("tbody",null,s.a.createElement("tr",null,s.a.createElement("td",null),s.a.createElement("td",null,s.a.createElement("input",{type:"text",className:"form-control",name:"Name",onChange:this.onChangeValue,value:this.state.Name})),s.a.createElement("td",null,s.a.createElement("select",{className:"form-control",name:"Status",onChange:this.onChangeValue,value:this.state.Status},s.a.createElement("option",{value:-1},"T\u1ea5t C\u1ea3"),s.a.createElement("option",{value:0},"\u1ea8n"),s.a.createElement("option",{value:1},"K\xedch Ho\u1ea1t"))),s.a.createElement("td",null)),t))}}]),a}(n.Component),k=Object(p.b)((function(e){return{tasks:e.tasks}}),null)(v),S=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).addTask=function(){n.state.taskEditing?n.setState({isDisplayForm:!0,taskEditing:null}):n.setState({isDisplayForm:!n.state.isDisplayForm})},n.onExistForm=function(){n.setState({isDisplayForm:!1,taskEditing:null})},n.onShowForm=function(){n.setState({isDisplayForm:!0})},n.changeStatus=function(e){var t=n.state.tasks,a=n.findTask(e);-1!==a&&(t[a].Status=!t[a].Status,n.setState({tasks:t}),localStorage.setItem("tasks",JSON.stringify(t)))},n.deleteTask=function(e){var t=n.state.tasks,a=n.findTask(e);-1!==a&&(t.splice(a,1),n.setState({tasks:t}),localStorage.setItem("tasks",JSON.stringify(t)))},n.findTask=function(e){for(var t=n.state.tasks,a=-1,s=0;s<t.length;s++)if(t[s].ID===e){a=s;break}return a},n.updateItem=function(e){var t=n.state.tasks,a=n.findTask(e);-1!==a&&(n.setState({taskEditing:t[a]}),n.onShowForm(),localStorage.setItem("tasks",JSON.stringify(t)))},n.filterList=function(e,t){n.setState({Filter:{Name:e.toLowerCase(),Status:t}})},n.searchList=function(e){n.setState({Keyword:e})},n.sortBy=function(e){n.setState({Sort:e})},n.state={isDisplayForm:!1,taskEditing:null,Filter:{Name:"",Status:-1},Keyword:"",Sort:0},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state,t=e.isDisplayForm,a=(e.Filter,e.Keyword,e.Sort,!0===t?s.a.createElement(d,{onExistForm:this.onExistForm,onSubmitData:this.onSubmitData,task:this.state.taskEditing}):"");return s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"text-center"},s.a.createElement("h1",null,"Qu\u1ea3n L\xfd C\xf4ng Vi\u1ec7c"),s.a.createElement("hr",null)),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:!0===t?"col-xs-4 col-sm-4 col-md-4 col-lg-4":""},a),s.a.createElement("div",{className:!0===t?"col-xs-8 col-sm-8 col-md-8 col-lg-8":"col-xs-12 col-sm-12 col-md-12 col-lg-12"},s.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:this.addTask},s.a.createElement("span",{className:"fa fa-plus mr-5"}),"\xa0Th\xeam C\xf4ng Vi\u1ec7c"),"\xa0",s.a.createElement("div",{className:"row mt-15"},s.a.createElement(b,{searchList:this.searchList,sortBy:this.sortBy})),s.a.createElement("div",{className:"row mt-15"},s.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-12"},s.a.createElement(k,{changeStatus:this.changeStatus,deleteTask:this.deleteTask,updateItem:this.updateItem,filterList:this.filterList}))))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var N=a(6),y=a(15),C=JSON.parse(localStorage.getItem("tasks")),O=C||[],T=function(){return"_"+Math.random().toString(36).substr(2,9)},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LIST_ALL":return e;case"ADD_TASK":var a={id:T(),name:t.task.name,status:t.task.status};return e.push(a),localStorage.setItem("tasks",JSON.stringify(e)),Object(y.a)(e);default:return e}},w=Object(N.b)({tasks:j}),x=Object(N.c)(w);l.a.render(s.a.createElement(p.a,{store:x},s.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){}},[[16,1,2]]]);
//# sourceMappingURL=main.3e47659d.chunk.js.map