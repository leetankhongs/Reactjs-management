(this.webpackJsonpmanagement=this.webpackJsonpmanagement||[]).push([[0],{12:function(e,t,a){},19:function(e,t,a){e.exports=a(31)},24:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(10),o=a.n(s),l=(a(24),a(1)),c=a(2),i=a(5),u=a(4),m=(a(12),a(6)),p=a(3),d=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).onChangeValue=function(e){var t=e.target,a=t.name,r=t.value;"status"===a&&(r="true"===t.value),n.setState(Object(m.a)({},a,r))},n.onSubmit=function(e){e.preventDefault(),n.props.taskEditing?n.props.onUpdateTask(n.state):n.props.onAddTask(n.state),n.resetForm()},n.onCloseForm=function(){n.props.onCloseForm()},n.resetForm=function(){n.setState({name:"",status:!1}),n.props.onCloseForm()},n.state={id:"",name:"",status:!0},n}return Object(c.a)(a,[{key:"componentWillMount",value:function(){var e=this.props.taskEditing;e&&this.setState({id:e.id,name:e.name,status:e.status})}},{key:"componentWillReceiveProps",value:function(e){var t=e.taskEditing;t?this.setState({id:t.id,name:t.name,status:t.status}):this.setState({id:"",name:"",status:!0})}},{key:"render",value:function(){return!1===this.props.isDisplayForm?"":r.a.createElement("div",{className:"panel panel-warning"},r.a.createElement("div",{className:"panel-heading"},r.a.createElement("h3",{className:"panel-title"},""===this.state.id?"Th\xeam CRUSH":"Ch\u1ec9nh s\u1eeda CRUSH","  \xa0",r.a.createElement("span",{className:"fa fa-times-circle text-right",onClick:this.onCloseForm}))),r.a.createElement("div",{className:"panel-body"},r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"T\xean :"),r.a.createElement("input",{type:"text",className:"form-control",name:"name",onChange:this.onChangeValue,value:this.state.name})),r.a.createElement("label",null,"Tr\u1ea1ng Th\xe1i :"),r.a.createElement("select",{className:"form-control",name:"status",value:this.state.status,onChange:this.onChangeValue},r.a.createElement("option",{value:!0},"K\xedch Ho\u1ea1t"),r.a.createElement("option",{value:!1},"\u1ea8n")),r.a.createElement("br",null),r.a.createElement("div",{className:"text-right"},r.a.createElement("button",{type:"submit",className:"btn btn-warning"},""===this.state.id?"Th\xeam":"Ch\u1ec9nh s\u1eeda"),"\xa0",r.a.createElement("button",{type:"button",className:"btn btn-danger",onClick:this.resetForm},"H\u1ee7y B\u1ecf")))))}}]),a}(n.Component),f=Object(p.b)((function(e){return{isDisplayForm:e.isDisplayForm,taskEditing:e.taskEditing}}),(function(e,t){return{onAddTask:function(t){e(function(e){return{type:"ADD_TASK",task:e}}(t))},onCloseForm:function(){e({type:"CLOSE_FORM"})},onUpdateTask:function(t){e(function(e){return{type:"UPDATE_TASK",task:e}}(t))}}}))(d),h=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).onChangeValue=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(m.a)({},a,r))},n.searchList=function(){n.props.onSearchList(n.state.txtSearch)},n.state={txtSearch:""},n}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"input-group"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Nh\u1eadp t\u1eeb kh\xf3a...",value:this.state.txtSearch,name:"txtSearch",onChange:this.onChangeValue}),r.a.createElement("span",{className:"input-group-btn"},r.a.createElement("button",{className:"btn btn-primary",type:"button",onClick:this.searchList},r.a.createElement("span",{className:"fa fa-search mr-5"}),"\xa0T\xecm")))}}]),a}(n.Component),E=Object(p.b)((function(e){return{}}),(function(e,t){return{onSearchList:function(t){e(function(e){return{type:"SEARCH_LIST",keyWord:e}}(t))}}}))(h),b=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).onClick=function(e){n.setState({Type:e}),n.props.onSortList(e)},n.state={Type:0},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"dropdown"},r.a.createElement("button",{className:"btn btn-primary dropdown-toggle",type:"button",id:"dropdownMenu1","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"true"},"S\u1eafp X\u1ebfp \xa0 ",r.a.createElement("span",{className:"fa fa-caret-square-o-down ml-5"})),r.a.createElement("ul",{className:"dropdown-menu","aria-labelledby":"dropdownMenu1"},r.a.createElement("li",null,r.a.createElement("a",{role:"button",className:0===this.state.Type?"sort_selected":"",onClick:function(){return e.onClick(0)}},r.a.createElement("span",null,"Null"))),r.a.createElement("li",null,r.a.createElement("a",{role:"button",className:1===this.state.Type?"sort_selected":"",onClick:function(){return e.onClick(1)}},r.a.createElement("span",{className:"fa fa-sort-alpha-asc pr-5"},"T\xean A-Z"))),r.a.createElement("li",null,r.a.createElement("a",{role:"button",className:-1===this.state.Type?"sort_selected":"",onClick:function(){return e.onClick(-1)}},r.a.createElement("span",{className:"fa fa-sort-alpha-desc pr-5"},"T\xean Z-A")))))}}]),a}(n.Component),v=Object(p.b)((function(e){return{}}),(function(e,t){return{onSortList:function(t){e(function(e){return{type:"SORT_LIST",value:e}}(t))}}}))(b),g=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).searchList=function(t){e.props.searchList(t)},e.sortBy=function(t){e.props.sortBy(t)},e}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"col-xs-6 col-sm-6 col-md-6 col-lg-6"},r.a.createElement(E,{searchList:this.searchList})),r.a.createElement("div",{className:"col-xs-6 col-sm-6 col-md-6 col-lg-6"},r.a.createElement(v,{sortBy:this.sortBy})))}}]),a}(n.Component),k=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).changeStatus=function(){e.props.onUpdateStatus(e.props.task.id)},e.deleteTask=function(){e.props.onDeleteTask(e.props.task.id)},e.updateItem=function(){e.props.onEditTask(e.props.task),e.props.onOpenForm()},e}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("tr",null,r.a.createElement("td",null,this.props.index+1),r.a.createElement("td",null,this.props.task.name),r.a.createElement("td",{className:"text-center"},r.a.createElement("span",{className:!0===this.props.task.status?"label label-danger":"label label-success",onClick:this.changeStatus},!0===this.props.task.status?"K\xedch ho\u1ea1t":"\u1ea8n")),r.a.createElement("td",{className:"text-center"},r.a.createElement("button",{type:"button",className:"btn btn-warning",onClick:this.updateItem},r.a.createElement("span",{className:"fa fa-pencil mr-5"}),"\xa0S\u1eeda"),"\xa0",r.a.createElement("button",{type:"button",className:"btn btn-danger",onClick:this.deleteTask},r.a.createElement("span",{className:"fa fa-trash mr-5"}),"\xa0X\xf3a")))}}]),a}(n.Component),y=Object(p.b)((function(e){return{}}),(function(e,t){return{onUpdateStatus:function(t){e(function(e){return{type:"UPDATE_STATUS",id:e}}(t))},onDeleteTask:function(t){e(function(e){return{type:"DELETE_TASK",id:e}}(t))},onOpenForm:function(){e({type:"OPEN_FORM"})},onEditTask:function(t){e(function(e){return{type:"EDIT_TASK",task:e}}(t))}}}))(k),O=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).onChangeValue=function(e){var t=e.target,a=t.name,r=t.value,s={name:"name"===a?r:n.state.name,status:"status"===a?r:n.state.status};console.log(s),n.props.onFilterTable(s),n.setState(Object(m.a)({},a,r))},n.state={name:"",status:-1},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.tasks,n=t.filter,s=t.keyWord,o=t.sort;n&&(a=(a=a.filter((function(e){return-1!==e.name.toLowerCase().indexOf(n.name.toLowerCase())}))).filter((function(e){return-1==n.status?e:e.status===(1==n.status)}))),""!==s&&(a=a.filter((function(e){return-1!==e.name.toLowerCase().indexOf(s.toLowerCase())}))),0!==o&&a.sort((function(e,t){return e.name.toLowerCase()>t.name.toLowerCase()?o:e.name.toLowerCase()<t.name.toLowerCase()?-o:0}));var l=a.map((function(t,a){return r.a.createElement(y,{key:a,task:t,index:a,deleteTask:e.deleteTask,updateItem:e.updateItem})}));return r.a.createElement("table",{className:"table table-bordered table-hover mt-15"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{className:"text-center"},"STT"),r.a.createElement("th",{className:"text-center"},"T\xean"),r.a.createElement("th",{className:"text-center"},"Tr\u1ea1ng Th\xe1i"),r.a.createElement("th",{className:"text-center"},"H\xe0nh \u0110\u1ed9ng"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null),r.a.createElement("td",null,r.a.createElement("input",{type:"text",className:"form-control",name:"name",onChange:this.onChangeValue,value:this.state.Name})),r.a.createElement("td",null,r.a.createElement("select",{className:"form-control",name:"status",onChange:this.onChangeValue,value:this.state.Status},r.a.createElement("option",{value:-1},"T\u1ea5t C\u1ea3"),r.a.createElement("option",{value:0},"\u1ea8n"),r.a.createElement("option",{value:1},"K\xedch Ho\u1ea1t"))),r.a.createElement("td",null)),l))}}]),a}(n.Component),T=Object(p.b)((function(e){return{tasks:e.tasks,filter:e.filter,keyWord:e.keyWord,sort:e.sort}}),(function(e,t){return{onFilterTable:function(t){e(function(e){return{type:"FILTER_TABLE",filter:e}}(t))}}}))(O),S=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).addTask=function(){n.props.taskEditing?(n.props.onNullTaskEditing(),n.props.onOpenForm()):n.props.onToggleForm()},n.filterList=function(e,t){n.setState({Filter:{Name:e.toLowerCase(),Status:t}})},n.searchList=function(e){n.setState({Keyword:e})},n.sortBy=function(e){n.setState({Sort:e})},n.state={Sort:0},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props.isDisplayForm;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"text-center"},r.a.createElement("h1",null,"Qu\u1ea3n L\xfd CRUSH"),r.a.createElement("hr",null)),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:!0===e?"col-xs-4 col-sm-4 col-md-4 col-lg-4":""},r.a.createElement(f,null)),r.a.createElement("div",{className:!0===e?"col-xs-8 col-sm-8 col-md-8 col-lg-8":"col-xs-12 col-sm-12 col-md-12 col-lg-12"},r.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:this.addTask},r.a.createElement("span",{className:"fa fa-plus mr-5"}),"\xa0Th\xeam CRUSH"),"\xa0",r.a.createElement("div",{className:"row mt-15"},r.a.createElement(g,{searchList:this.searchList,sortBy:this.sortBy})),r.a.createElement("div",{className:"row mt-15"},r.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-12"},r.a.createElement(T,null))))))}}]),a}(n.Component),N=Object(p.b)((function(e){return{isDisplayForm:e.isDisplayForm,taskEditing:e.taskEditing}}),(function(e,t){return{onToggleForm:function(){e({type:"TOGGLE_FORM"})},onCloseForm:function(){e({type:"CLOSE_FORM"})},onOpenForm:function(){e({type:"OPEN_FORM"})},onNullTaskEditing:function(){e({type:"NULL_TASK_EDITING"})}}}))(S);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var C=a(7),L=a(8),j=a(9),_=a(11),w=a.n(_),F=JSON.parse(localStorage.getItem("tasks")),x=F||[],A=function(){return"_"+Math.random().toString(36).substr(2,9)},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LIST_ALL":return e;case"ADD_TASK":var a={id:A(),name:t.task.name,status:t.task.status};return e.push(a),localStorage.setItem("tasks",JSON.stringify(e)),Object(j.a)(e);case"UPDATE_STATUS":return-1!==(n=w.a.findIndex(e,(function(e){return console.log(e.id),e.id===t.id})))&&(e[n]=Object(L.a)(Object(L.a)({},e[n]),{},{status:!e[n].status})),localStorage.setItem("tasks",JSON.stringify(e)),Object(j.a)(e);case"DELETE_TASK":return-1!==(n=w.a.findIndex(e,(function(e){return console.log(e.id),e.id===t.id})))&&e.splice(n,1),localStorage.setItem("tasks",JSON.stringify(e)),Object(j.a)(e);case"UPDATE_TASK":var n;return-1!==(n=w.a.findIndex(e,(function(e){return console.log(e.id),e.id===t.task.id})))&&(e[n]=Object(L.a)(Object(L.a)({},e[n]),{},{name:t.task.name,status:t.task.status})),localStorage.setItem("tasks",JSON.stringify(e)),Object(j.a)(e);default:return e}},I=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE_FORM":return e=!e;case"OPEN_FORM":return e=!0;case"CLOSE_FORM":return e=!1;default:return e}},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"EDIT_TASK":return e=t.task;case"NULL_TASK_EDITING":return e=null;default:return e}},U={name:"",status:-1},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FILTER_TABLE":return{name:t.filter.name,status:t.filter.status};default:return e}},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEARCH_LIST":return t.keyWord;default:return e}},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SORT_LIST":return t.value;default:return e}},H=Object(C.b)({tasks:D,isDisplayForm:I,taskEditing:R,filter:K,keyWord:B,sort:M}),V=Object(C.c)(H,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());o.a.render(r.a.createElement(p.a,{store:V},r.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.b6dbe93f.chunk.js.map