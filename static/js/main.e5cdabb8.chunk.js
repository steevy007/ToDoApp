(this["webpackJsonpapp-to-do"]=this["webpackJsonpapp-to-do"]||[]).push([[0],{36:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAADMklEQVRIia2VTWxUZRSGn3N7Zzp0lBltCK2J0YLUdEGiIWiNFsQfsDUMAzoEgcAkrZqY+rNxqWk0ceEODS6GMS3RSuIktJkuxkokqCyApMaFiUBDBuMCiyF0pj90/r7jojiZtvfeFvHd3e+8533f797vnk9YBtloPGwZXlT0USzWAmCYENGLZX/g1PpUIufVL26FP6KHN6mhD2EH4HOhFRVGxVh9D4/0/7Iigz9jsVWVYsNRIO4VYBEMSr/mpbflzMCcq0G2K96EX9OibF6h8OK0Fyrqi6xLJyeWGGSfjQeskP6o8MR/Ea/BmN/Ub3lgJDELYFWdQvrF/yAOsKloFY5UdQGy0fhjojpWawhwb+fzSMBPfijjqLR6dxc6V2Aq88Pikoqw+aHh42M2gBj9GFkoDhA+FMNaFUBsm1xqZEEt9OpOwgdfwczecjIQo3wI7LKuxN4IIWx3Snjz2NfzRvv3EOxor64HO54kfGDPPCc56Lg7gc5sNB627VJhh4LfiTR9+ix281pCsZ00vttDZTKHlis0vt0DIuS+TTN9+qyjAeCz1Lxgq6HV67RPfnMSu2kNwY521rz/1nw6v4+Zn84xeWLIvRFQaLURaQb1YCk3jiSpC4cIbGwDoPD7ZW58ngT16AMQabaWZ90FVNUCri2TgsZ3eghsbMPkpzBT09S3tdLY2w3iPUlU5ZolwrgXKfzaboJb2tFymb8/Pcr1Tz5DS2WCW58ivC/qaWCJjltlX/0oUHQi3PPcM4T2Rm5/h2PM/XZxwfsP7Y0Q3Pa0m36hWKx8b61PJXIKo06M+14/CMDk4Elmfj5fXa+eIBHu797vqC4i323IDOZtALXqPhBTeZlFo+Jm/wmshgbyw0tHRS41gpZKmKkZJ32jFfkIaqbp1cjhJEK3237vBKokWtLH36Q2sealF+S8e9uKMWbXz77370PVoOXMwJxRe5fAhbsQP1e2TNeDqdStJQYA69LJCZOTrShfAuYOhI0qCc3JtkeGvrpeW3D9U65GDj2uIn0CL+EyDIGiiGQM9LUMD/zqRFj2Uh/vPLDa76/brtAKNN1e/guRS6VC+dSGzGDeq/8fxMsuaJsPFzsAAAAASUVORK5CYII="},40:function(e,t,a){e.exports=a(71)},45:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),l=a(6),i=a.n(l),c=(a(45),a(46),a(19)),s=a(29),r=a(30),m=a(12),u=a(39),d=a(38),h=a(37),A=a(36),v=a.n(A),f=function(e){return console.log(e.element),o.a.createElement("div",{className:"box"},e.element.map((function(t,a){return o.a.createElement("div",{className:"grid1",key:a},o.a.createElement("h3",{className:"item"}," ",o.a.createElement("span",null,o.a.createElement("a",null," ",o.a.createElement("img",{src:v.a,onClick:function(){return e.delete(a)}}))," "),t))})))},g=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this)).handleSubmit=function(e){var t=n.state.value;""!==t&&n.setState({todoList:[].concat(Object(c.a)(n.state.todoList),[t]),value:""}),e.preventDefault()},n.handleChange=function(e){var t=e.target.value;n.setState({value:t})},n.handleDelete=function(e){var t=Object(c.a)(n.state.todoList);t.splice(e,1),console.log(t),n.setState({todoList:t})},n.handleDelete.bind(Object(m.a)(n)),n.state={todoList:[],value:""},n}return Object(r.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"todo"},o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("div",{className:"myGrid"},o.a.createElement("div",{className:"g1"},o.a.createElement(h.d,{onChange:this.handleChange,value:this.state.value,style:{width:"100%"}})),o.a.createElement("div",{className:"g2"},o.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Add")))),o.a.createElement(f,{element:this.state.todoList,delete:this.handleDelete}))}}]),a}(n.Component);var b=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(g,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[40,1,2]]]);
//# sourceMappingURL=main.e5cdabb8.chunk.js.map