(()=>{"use strict";!function(){let n=document.getElementById("content");const t=function(){const n=function(){function n(n){return n.split(" ")}function t(n,t){t.forEach((t=>{n.classList.add(t)}))}return{getID:function(){return"_"+Math.random().toString(36).substr(2,9)},classAdder:t,splitString:n,stringToClass:function(e,a){t(e,n(a))}}}(),t=document.createElement("nav"),e=document.createElement("div"),a=document.createElement("a");return n.stringToClass(t,"navbar navbar-expand-md navbar-dark bg-dark"),n.stringToClass(e,"container-fluid"),n.stringToClass(a,"navbar-brand"),a.innerText="Todolist",e.append(a),t.append(e),t}();!function(){const n=document.createElement("div"),t=document.createElement("main"),e=document.createElement("nav");n.append(t,e),n.classList.add("container")}(),document.addEventListener("DOMContentLoaded",(()=>{n.append(t)}))}(),console.log("amit")})();