(this["webpackJsonptodo-list-l"]=this["webpackJsonptodo-list-l"]||[]).push([[0],{51:function(t,e,o){t.exports=o(62)},56:function(t,e,o){},61:function(t,e,o){},62:function(t,e,o){"use strict";o.r(e);var a=o(0),n=o.n(a),r=o(7),c=o.n(r),l=(o(56),o(15)),i=o(14),d=o(17),s=o(18),p=o(21),u=o(13),m=o(101),f=o(91),b=o(96),h=o(40),v=o.n(h),j=function(t){function e(){var t,o;Object(i.a)(this,e);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(o=Object(d.a)(this,(t=Object(s.a)(e)).call.apply(t,[this].concat(r)))).getStyle=function(){return{textDecoration:o.props.todo.completed?"line-through":"none"}},o.render=function(){return n.a.createElement("div",{style:o.getStyle()},n.a.createElement(f.a,{variant:"h4",color:"inherit"},n.a.createElement(m.a,{value:"primary",color:"primary",inputProps:{"aria-label":"primary checkbox"},onClick:o.props.completeTodo.bind(Object(u.a)(o),o.props.todo.id)}),o.props.todo.title,n.a.createElement(b.a,{onClick:o.props.deleteTodo.bind(Object(u.a)(o),o.props.todo.id)},n.a.createElement(v.a,{color:"secondary",onClick:o.props.deleteTodo.bind(Object(u.a)(o),o.props.todo.id)}))))},o}return Object(p.a)(e,t),e}(a.Component),y=function(t){function e(){var t,o;Object(i.a)(this,e);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(o=Object(d.a)(this,(t=Object(s.a)(e)).call.apply(t,[this].concat(r)))).render=function(){return o.props.todos.map((function(t){return n.a.createElement(j,{key:t.id,todo:t,completeTodo:o.props.completeTodo,deleteTodo:o.props.deleteTodo})}))},o}return Object(p.a)(e,t),e}(a.Component),O=(o(61),o(100)),T=function(t){function e(){var t,o;Object(i.a)(this,e);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(o=Object(d.a)(this,(t=Object(s.a)(e)).call.apply(t,[this].concat(r)))).state={title:""},o.fieldChange=function(t){""===t.target.value.trim()&&(t.target.value=""),o.setState({title:t.target.value})},o.submit=function(t){t.preventDefault(),o.props.addTodo(o.state.title),o.setState({title:""})},o.render=function(){return n.a.createElement("div",null,n.a.createElement("form",{onSubmit:o.submit},n.a.createElement(O.a,{error:!0,required:!0,label:"AddTodo",value:o.state.title,onChange:o.fieldChange,style:{margin:"30px 0 30px 0"}})))},o}return Object(p.a)(e,t),e}(a.Component),E=o(97),g=o(98),C=o(99),S=o(95),k=o(41),x=o.n(k),w=function(t){function e(){var t,o;Object(i.a)(this,e);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(o=Object(d.a)(this,(t=Object(s.a)(e)).call.apply(t,[this].concat(r)))).state={todos:[{id:1,title:"todo list app",completed:!1},{id:2,title:"Udemy React course",completed:!1},{id:3,title:"Faculties Update",completed:!1}]},o.completeTodo=function(t){o.setState({todos:o.state.todos.map((function(e){return t===e.id&&(e.completed=!e.completed),e}))})},o.deleteTodo=function(t){o.setState({todos:o.state.todos.filter((function(e){return t!==e.id}))})},o.addTodo=function(t){var e={id:7,title:t,completed:!1};o.setState({todos:[].concat(Object(l.a)(o.state.todos),[e])})},o.render=function(){return n.a.createElement(E.a,{maxWidth:"sm"},n.a.createElement(g.a,{position:"static",style:{marginTop:"10px"}},n.a.createElement(C.a,{variant:"dense"},n.a.createElement(S.a,{edge:"start",color:"inherit","aria-label":"menu"},n.a.createElement(x.a,null)),n.a.createElement(f.a,{variant:"h4",color:"inherit"},"Todo"))),n.a.createElement(T,{addTodo:o.addTodo}),n.a.createElement(y,{todos:o.state.todos,completeTodo:o.completeTodo,deleteTodo:o.deleteTodo}))},o}return Object(p.a)(e,t),e}(n.a.Component);c.a.render(n.a.createElement(w,null),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.427ccf90.chunk.js.map