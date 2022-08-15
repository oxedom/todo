(()=>{"use strict";function e(){function e(e){return e.split(" ")}function t(e,t){t.forEach((t=>{e.classList.add(t)}))}return{getID:function(){return"_"+Math.random().toString(36).substr(2,9)},classAdder:t,splitString:e,stringToClass:function(n,s){t(n,e(s))},getFormData:e=>{const t=new FormData(e.target);return Object.fromEntries(t)},toogleElement:function(e){let t=document.getElementById(e);t.classList.contains("d-none")?t.classList.remove("d-none"):t.classList.add("d-none")}}}const t={events:{},subscribe:function(e,t){console.log(`PUBSUB: someone just subscribed to know about ${e}`),this.events[e]=this.events[e]||[],this.events[e].push(t)},unsubscribe:function(e,t){console.log(`PUBSUB: someone just UNsubscribed from ${e}`),this.events[e]&&(this.events[e]=this.events[e].filter((e=>e!==t)))},publish:function(e,t){console.log(`PUBSUB: Making an broadcast about ${e} with ${t}`),this.events[e]&&this.events[e].forEach((e=>{e(t)}))}};function n(){const n=function(){const e=[];return{addTask:t=>{e.push(t),console.log(e)},removeTask:t=>{e=e.filter((e=>!t))}}}(),s=e(),o=document.createElement("div"),r=document.createElement("div"),a=document.createElement("div"),i=document.createElement("div");return s.stringToClass(o,"col-8 container-sm bg-light card-body"),s.stringToClass(r,"container-md card m-2 p-1 mr-1"),s.stringToClass(a,"container row"),s.stringToClass(i,"col-1 bg-light"),a.style="gap: 10px",r.append(a),o.append(r),t.subscribe("newTask",(e=>{var n;n=function(e){const n=document.createElement("div"),o=document.createElement("p"),r=document.createElement("button"),a=document.createElement("button"),i=document.createElement("hr");return s.stringToClass(o,"m-2 col-xl"),s.stringToClass(r,"btn btn-outline-primary col-sm pl-2"),s.stringToClass(a,"btn btn-outline-danger col-sm"),n.append(o,a,r),r.innerText="DONE",a.innerText="Remove",o.innerText=e.taskName,o.style="flex-grow: 10",n.append(o,a,r,i),r.addEventListener("click",t.publish("handleDone")),a.addEventListener("click",t.publish("handleRemove")),n}(e),a.append(n)})),t.subscribe("newTask",(e=>{!function(e){let s=function(e){let n=e.taskName;return(new Date).getDate(),{removeSelf:()=>{t.publish("removeTask")},getName:e=>n}}(e);n.addTask(s)}(e)})),t.subscribe("removeTask",(e=>n.removeTask)),o}document.addEventListener("DOMContentLoaded",(s=>{let o=document.getElementById("content");const r=function(){const t=e(),n=document.createElement("nav"),s=document.createElement("div"),o=document.createElement("a");return t.stringToClass(n,"navbar navbar-expand-md navbar-dark bg-dark"),t.stringToClass(s,"container-fluid"),t.stringToClass(o,"navbar-brand"),o.innerText="Todolist",s.append(o),n.append(s),n}(),a=function(){const n=e(),s=document.createElement("div"),o=document.createElement("a"),r=document.createElement("img"),a=document.createElement("span"),i=document.createElement("hr"),c=document.createElement("ul"),l=document.createElement("form"),d=document.createElement("div"),m=document.createElement("form"),u=document.createElement("div"),p=document.createElement("button"),b=document.createElement("input"),g=(document.createElement("area"),document.createElement("input")),v=document.createElement("button"),T=document.createElement("div"),E=document.createElement("button"),f=document.createElement("button"),h="form-control",k="btn btn-outline-primary";return n.stringToClass(s,"d-flex flex-column flex-shrink-0 p-3 bg-light col-3 border"),n.stringToClass(r,"m-2"),n.stringToClass(o,"d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"),n.stringToClass(a,"fs-4"),n.stringToClass(c,"nav nav-pills flex-column mb-auto bg-secondary bg-gradient"),n.stringToClass(T,"b-example-divider d-flex justify-content-center"),n.stringToClass(E,"btn btn-primay"),n.stringToClass(f,"btn btn-primay m-2"),n.stringToClass(l,"form-group m-2 p-1 input-group d-none"),n.stringToClass(m,"form-group m-2 p-1 input-group d-none"),n.stringToClass(u,"d-flex justify-content-center"),n.stringToClass(g,h),n.stringToClass(v,k),n.stringToClass(p,k),n.stringToClass(b,h),s.style="width: 280px;",a.innerText="Projects",r.style="width: 30px",E.innerText="+ New Project",f.innerText="+ Task",d.style="width: 150px;",u.style="width: 200px",v.innerText="+",p.innerText="+",g.setAttribute("placeholder","New Project"),b.setAttribute("placeholder","New Task"),r.setAttribute("src","../sandbox/public/todo.svg"),l.setAttribute("action","submit"),l.setAttribute("id","formProject"),m.setAttribute("action","submit"),m.setAttribute("id","formTask"),m.setAttribute("name","taskForm"),b.setAttribute("name","taskName"),g.setAttribute("name","name"),l.addEventListener("submit",(e=>{e.preventDefault();let s=n.getFormData(e);t.publish("liSubmit",s.name),l.reset()})),m.addEventListener("submit",(e=>{e.preventDefault();let s=n.getFormData(e);t.publish("newTask",s),console.log(s),m.reset()})),E.addEventListener("click",(e=>{t.publish("toogleForm","formProject")})),f.addEventListener("click",(e=>{t.publish("toogleTask","formTask")})),t.subscribe("toogleForm",n.toogleElement),t.subscribe("toogleTask",n.toogleElement),t.subscribe("liSubmit",(function(e){const s=document.createElement("li"),o=document.createElement("a");return n.stringToClass(s,"nav-item m-2"),n.stringToClass(o,"nav-link active"),o.innerText=e,s.append(o),t.publish("createLi",s),s.addEventListener("click",(e=>{t.publish("projectClicked",e.target)})),s})),t.subscribe("projectClicked",(function(e){e.classList.contains("active"),e.parentNode.parentNode.children.forEach((t=>{t.classList.remove("active"),e.classList.add("active")}))})),t.subscribe("createLi",(function(e){document.querySelector("ul").append(e)})),o.append(r,a),d.append(g),l.append(v),l.append(d),m.append(p,b),u.append(m),s.append(o),s.append(E),s.append(f),s.append(l),s.append(u),s.append(i),s.append(c),s.append(T),{divSidebar:s}}().divSidebar,i=n();o.append(r);const c=document.createElement("div");c.classList.add("row"),c.append(a),c.append(i),o.append(c)}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFJeEIsT0FBTzBCLEdBQ1hGLEVBQUl4QixPQUFPYixHQUNYa0MsRUFBUXJCLE9BQU93QixFQUFHLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL2pzL2xpYnMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9qcy9wdWJzdWIuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9qcy90YXNrcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2pzL2RvbS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2pzL25hdmJhci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2pzL3NpZGViYXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXIgfSBmcm9tIFwiZGF0ZS1mbnMvbG9jYWxlXCI7XG5cblxuXG5cbmV4cG9ydCBmdW5jdGlvbiBsaWJzKCkge1xuXG4gICAgY29uc3QgZ2V0Rm9ybURhdGEgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZXZlbnQudGFyZ2V0KVxuICAgICAgICBjb25zdCBmb3JtUHJvcHMgPSBPYmplY3QuZnJvbUVudHJpZXMoZm9ybURhdGEpXG4gICAgICAgIHJldHVybiBmb3JtUHJvcHNcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzcGxpdFN0cmluZyhzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHN0cmluZy5zcGxpdChcIiBcIilcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbGFzc0FkZGVyKGVsZW1lbnQsIGFycmF5KSB7XG4gICAgICAgIGFycmF5LmZvckVhY2goc3RyaW5nID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChzdHJpbmcpXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN0cmluZ1RvQ2xhc3MoZWxlbWVudCwgc3RyaW5nKSB7XG4gICAgICAgIGxldCBhcnIgPSBzcGxpdFN0cmluZyhzdHJpbmcpXG4gICAgICAgIGNsYXNzQWRkZXIoZWxlbWVudCwgYXJyKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldElEKCkge1xuICAgICAgICByZXR1cm4gJ18nICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDIsIDkpO1xuICAgIH1cblxuXG5cbiAgICBmdW5jdGlvbiB0b29nbGVFbGVtZW50KGlkKSB7XG4gICAgICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpXG4gICAgICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnZC1ub25lJykpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJylcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZC1ub25lJylcbiAgICAgICAgfVxuXG4gICAgfVxuXG5cblxuXG4gICAgcmV0dXJuIHsgZ2V0SUQsIGNsYXNzQWRkZXIsIHNwbGl0U3RyaW5nLCBzdHJpbmdUb0NsYXNzLCBnZXRGb3JtRGF0YSwgdG9vZ2xlRWxlbWVudCB9XG5cbn1cblxuXG5cblxuXG5cblxuIiwiZXhwb3J0IGNvbnN0IHB1YnN1YiA9IHtcbiAgICBldmVudHM6IHt9LFxuICAgIHN1YnNjcmliZTogZnVuY3Rpb24gKGV2TmFtZSwgZm4pIHtcbiAgICAgICAgY29uc29sZS5sb2coYFBVQlNVQjogc29tZW9uZSBqdXN0IHN1YnNjcmliZWQgdG8ga25vdyBhYm91dCAke2V2TmFtZX1gKTtcbiAgICAgICAgLy9hZGQgYW4gZXZlbnQgd2l0aCBhIG5hbWUgYXMgbmV3IG9yIHRvIGV4aXN0aW5nIGxpc3RcbiAgICAgICAgdGhpcy5ldmVudHNbZXZOYW1lXSA9IHRoaXMuZXZlbnRzW2V2TmFtZV0gfHwgW107XG4gICAgICAgIHRoaXMuZXZlbnRzW2V2TmFtZV0ucHVzaChmbik7XG4gICAgfSxcbiAgICB1bnN1YnNjcmliZTogZnVuY3Rpb24gKGV2TmFtZSwgZm4pIHtcbiAgICAgICAgY29uc29sZS5sb2coYFBVQlNVQjogc29tZW9uZSBqdXN0IFVOc3Vic2NyaWJlZCBmcm9tICR7ZXZOYW1lfWApO1xuICAgICAgICAvL3JlbW92ZSBhbiBldmVudCBmdW5jdGlvbiBieSBuYW1lXG4gICAgICAgIGlmICh0aGlzLmV2ZW50c1tldk5hbWVdKSB7XG4gICAgICAgICAgICB0aGlzLmV2ZW50c1tldk5hbWVdID0gdGhpcy5ldmVudHNbZXZOYW1lXS5maWx0ZXIoZiA9PiBmICE9PSBmbik7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHB1Ymxpc2g6IGZ1bmN0aW9uIChldk5hbWUsIGRhdGEpIHtcbiAgICAgICAgY29uc29sZS5sb2coYFBVQlNVQjogTWFraW5nIGFuIGJyb2FkY2FzdCBhYm91dCAke2V2TmFtZX0gd2l0aCAke2RhdGF9YCk7XG4gICAgICAgIC8vZW1pdHxwdWJsaXNofGFubm91bmNlIHRoZSBldmVudCB0byBhbnlvbmUgd2hvIGlzIHN1YnNjcmliZWRcbiAgICAgICAgaWYgKHRoaXMuZXZlbnRzW2V2TmFtZV0pIHtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRzW2V2TmFtZV0uZm9yRWFjaChmID0+IHtcbiAgICAgICAgICAgICAgICBmKGRhdGEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59OyIsImltcG9ydCB7IGxpYnMgfSBmcm9tIFwiLi9saWJzXCI7XG5pbXBvcnQgeyBwdWJzdWIgfSBmcm9tICcuL3B1YnN1Yi5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRhc2tzKCkge1xuXG5cbiAgICBjb25zdCBUYXNrID0gZnVuY3Rpb24gKHRhc2tPYmopIHtcblxuICAgICAgICBsZXQgX3Rhc2tOYW1lID0gdGFza09iai50YXNrTmFtZVxuICAgICAgICBsZXQgZGF0ZUNyZWF0ZWQgPSBuZXcgRGF0ZSgpLmdldERhdGUoKVxuXG4gICAgICAgIGNvbnN0IHJlbW92ZVNlbGYgPSAoKSA9PiB7XG4gICAgICAgICAgICBwdWJzdWIucHVibGlzaCgncmVtb3ZlVGFzaycpXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBnZXROYW1lID0gKHByb3ApID0+IHtcbiAgICAgICAgICAgIHJldHVybiBfdGFza05hbWVcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7IHJlbW92ZVNlbGYsIGdldE5hbWUgfVxuICAgIH1cblxuICAgIGNvbnN0IHRhc2tMb2dpYyA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IF90YXNrcyA9IFtdXG5cbiAgICAgICAgY29uc3QgYWRkVGFzayA9ICh0YXNrKSA9PiB7XG4gICAgICAgICAgICBfdGFza3MucHVzaCh0YXNrKVxuICAgICAgICAgICAgY29uc29sZS5sb2coX3Rhc2tzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJlbW92ZVRhc2sgPSAodGFyZ2V0VGFzaykgPT4ge1xuICAgICAgICAgICAgX3Rhc2tzID0gX3Rhc2tzLmZpbHRlcih0ID0+IHQgPSAhdGFyZ2V0VGFzaylcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7IGFkZFRhc2ssIHJlbW92ZVRhc2sgfVxuICAgIH0pKClcblxuXG4gICAgY29uc3QgbGlic0hlbHBlciA9IGxpYnMoKVxuXG4gICAgY29uc3QgZGl2Qm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgZGl2Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBkaXZSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gICAgY29uc3QgZGl2R2FwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuICAgIGNvbnN0IGRpdkJvZHlDbGFzcyA9ICdjb2wtOCBjb250YWluZXItc20gYmctbGlnaHQgY2FyZC1ib2R5J1xuICAgIGNvbnN0IGRpdkNvbnRhaW5lckNsYXNzID0gJ2NvbnRhaW5lci1tZCBjYXJkIG0tMiBwLTEgbXItMSdcbiAgICBjb25zdCBkaXZSb3dDbGFzcyA9ICdjb250YWluZXIgcm93J1xuXG4gICAgY29uc3QgZGl2R2FwQ2xhc3MgPSAnY29sLTEgYmctbGlnaHQnXG5cblxuICAgIGxpYnNIZWxwZXIuc3RyaW5nVG9DbGFzcyhkaXZCb2R5LCBkaXZCb2R5Q2xhc3MpXG4gICAgbGlic0hlbHBlci5zdHJpbmdUb0NsYXNzKGRpdkNvbnRhaW5lciwgZGl2Q29udGFpbmVyQ2xhc3MpXG4gICAgbGlic0hlbHBlci5zdHJpbmdUb0NsYXNzKGRpdlJvdywgZGl2Um93Q2xhc3MpXG5cbiAgICBsaWJzSGVscGVyLnN0cmluZ1RvQ2xhc3MoZGl2R2FwLCBkaXZHYXBDbGFzcylcblxuICAgIGRpdlJvdy5zdHlsZSA9ICdnYXA6IDEwcHgnXG5cblxuXG4gICAgZGl2Q29udGFpbmVyLmFwcGVuZChkaXZSb3cpXG4gICAgZGl2Qm9keS5hcHBlbmQoZGl2Q29udGFpbmVyKVxuXG5cbiAgICBmdW5jdGlvbiBjcmVhdGVUYXNrTWVtb3J5KHRhc2tPYmopIHtcbiAgICAgICAgbGV0IG5ld1Rhc2sgPSBUYXNrKHRhc2tPYmopXG4gICAgICAgIHRhc2tMb2dpYy5hZGRUYXNrKG5ld1Rhc2spXG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiBjcmVhdGVUYXNrRG9tKHRhc2tPYmopIHtcblxuICAgICAgICBjb25zdCB0YXNrQ29tcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgICAgY29uc3QgYnRuRG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgIGNvbnN0IGJ0blJlbW92ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgIGNvbnN0IGhyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHInKVxuXG4gICAgICAgIGNvbnN0IHBDbGFzcyA9ICdtLTIgY29sLXhsJ1xuICAgICAgICBjb25zdCBidG5Eb25lQ2xhc3MgPSAnYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnkgY29sLXNtIHBsLTInXG4gICAgICAgIGNvbnN0IGJ0blJlbW92ZUNsYXNzID0gJ2J0biBidG4tb3V0bGluZS1kYW5nZXIgY29sLXNtJ1xuICAgICAgICBsaWJzSGVscGVyLnN0cmluZ1RvQ2xhc3MocCwgcENsYXNzKVxuICAgICAgICBsaWJzSGVscGVyLnN0cmluZ1RvQ2xhc3MoYnRuRG9uZSwgYnRuRG9uZUNsYXNzKVxuICAgICAgICBsaWJzSGVscGVyLnN0cmluZ1RvQ2xhc3MoYnRuUmVtb3ZlLCBidG5SZW1vdmVDbGFzcylcbiAgICAgICAgdGFza0NvbXAuYXBwZW5kKHAsIGJ0blJlbW92ZSwgYnRuRG9uZSlcbiAgICAgICAgYnRuRG9uZS5pbm5lclRleHQgPSAnRE9ORSdcbiAgICAgICAgYnRuUmVtb3ZlLmlubmVyVGV4dCA9ICdSZW1vdmUnXG5cbiAgICAgICAgcC5pbm5lclRleHQgPSB0YXNrT2JqLnRhc2tOYW1lXG4gICAgICAgIHAuc3R5bGUgPSAnZmxleC1ncm93OiAxMCdcbiAgICAgICAgdGFza0NvbXAuYXBwZW5kKHAsIGJ0blJlbW92ZSwgYnRuRG9uZSwgaHIpXG5cbiAgICAgICAgYnRuRG9uZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHB1YnN1Yi5wdWJsaXNoKCdoYW5kbGVEb25lJykpXG4gICAgICAgIGJ0blJlbW92ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHB1YnN1Yi5wdWJsaXNoKCdoYW5kbGVSZW1vdmUnKSlcblxuICAgICAgICByZXR1cm4gdGFza0NvbXBcblxuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gYXBwZW5kVGFzayh0YXNrKSB7XG4gICAgICAgIGRpdlJvdy5hcHBlbmQodGFzaylcbiAgICB9XG5cbiAgICBwdWJzdWIuc3Vic2NyaWJlKCduZXdUYXNrJywgKGRhdGEpID0+IHtcbiAgICAgICAgY29uc3QgbmV3VGFzayA9IGNyZWF0ZVRhc2tEb20oZGF0YSlcbiAgICAgICAgYXBwZW5kVGFzayhuZXdUYXNrKVxuICAgIH0pXG5cbiAgICBwdWJzdWIuc3Vic2NyaWJlKCduZXdUYXNrJywgKGRhdGEpID0+IHsgY3JlYXRlVGFza01lbW9yeShkYXRhKSB9KVxuICAgIHB1YnN1Yi5zdWJzY3JpYmUoJ3JlbW92ZVRhc2snLCAodGFzaykgPT4gdGFza0xvZ2ljLnJlbW92ZVRhc2spXG5cblxuXG5cbiAgICByZXR1cm4gZGl2Qm9keVxufSIsImltcG9ydCB7IGFkZCB9IGZyb20gXCJkYXRlLWZuc1wiO1xuaW1wb3J0IG5hdmJhciBmcm9tIFwiLi9uYXZiYXJcIlxuaW1wb3J0IHNpZGViYXIgZnJvbSBcIi4vc2lkZWJhclwiXG5pbXBvcnQgdGFza3MgZnJvbSBcIi4vdGFza3NcIjtcblxuZXhwb3J0IGRlZmF1bHRcbiAgICAoZnVuY3Rpb24gKCkge1xuICAgICAgICAvL0hvb2sgZm9yIGZvciBjb250ZW50XG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIChlKSA9PiB7XG5cbiAgICAgICAgICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKVxuICAgICAgICAgICAgY29uc3QgX25hdiA9IG5hdmJhcigpXG4gICAgICAgICAgICBjb25zdCBfc2lkZWJhciA9IHNpZGViYXIoKS5kaXZTaWRlYmFyXG4gICAgICAgICAgICBjb25zdCBfdGFza3MgPSB0YXNrcygpXG5cbiAgICAgICAgICAgIGNvbnRlbnQuYXBwZW5kKF9uYXYpXG4gICAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdyb3cnKVxuICAgICAgICAgICAgZGl2LmFwcGVuZChfc2lkZWJhcilcbiAgICAgICAgICAgIGRpdi5hcHBlbmQoX3Rhc2tzKVxuICAgICAgICAgICAgY29udGVudC5hcHBlbmQoZGl2KVxuICAgICAgICB9KVxuXG5cbiAgICB9KSgpXG5cbiIsIlxuXG5pbXBvcnQgeyBsaWJzIH0gZnJvbSBcIi4vbGlic1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbmF2KCkge1xuXG4gICAgLy9JTklUIExJQlNcbiAgICBjb25zdCBsaWJzSGVscGVyID0gbGlicygpXG5cbiAgICAvL0NSRUFURSBFTEVNRU5UU1xuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpXG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcblxuICAgIC8vQ0xBU1MgU1RSSU5HIEZST00gSFRNTCBCT0lMRVIgUExBVEVcbiAgICBjb25zdCBuYXZDbGFzcyA9ICduYXZiYXIgbmF2YmFyLWV4cGFuZC1tZCBuYXZiYXItZGFyayBiZy1kYXJrJ1xuICAgIGNvbnN0IGRpdkNsYXNzID0gJ2NvbnRhaW5lci1mbHVpZCdcbiAgICBjb25zdCBhQ2xhc3MgPSAnbmF2YmFyLWJyYW5kJ1xuXG5cbiAgICBsaWJzSGVscGVyLnN0cmluZ1RvQ2xhc3MobmF2LCBuYXZDbGFzcylcbiAgICBsaWJzSGVscGVyLnN0cmluZ1RvQ2xhc3MoZGl2LCBkaXZDbGFzcylcbiAgICBsaWJzSGVscGVyLnN0cmluZ1RvQ2xhc3MoYSwgYUNsYXNzKVxuXG4gICAgLy9BZGQgVGV4dCBDb250ZW50XG4gICAgYS5pbm5lclRleHQgPSAnVG9kb2xpc3QnXG5cbiAgICBkaXYuYXBwZW5kKGEpXG4gICAgbmF2LmFwcGVuZChkaXYpXG5cbiAgICByZXR1cm4gbmF2XG5cbn0iLCJcblxuaW1wb3J0IHsgaXQgfSBmcm9tIFwiZGF0ZS1mbnMvbG9jYWxlXCI7XG5pbXBvcnQgeyBsaWJzIH0gZnJvbSBcIi4vbGlic1wiO1xuaW1wb3J0IHsgcHVic3ViIH0gZnJvbSAnLi9wdWJzdWIuanMnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2lkZWJhcigpIHtcblxuICAgIC8vSU5JVCBMSUJTXG4gICAgY29uc3QgbGlic0hlbHBlciA9IGxpYnMoKVxuXG4gICAgLy9DUkVBVEUgRUxFTUVOVFNcbiAgICBjb25zdCBkaXZTaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGNvbnN0IGhyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHInKTtcbiAgICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJylcblxuICAgIGNvbnN0IGZvcm1Qcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXG4gICAgY29uc3QgZm9ybURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgICBjb25zdCBmb3JtVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxuICAgIGNvbnN0IGZvcm1UYXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCB0YXNrU3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBjb25zdCB0YXNrSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgY29uc3QgdGFza1RleHRBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXJlYScpXG5cblxuXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAvL0RpdmRlclxuICAgIGNvbnN0IGRpdkRpdmRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgYnRuUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IGJ0blRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuXG4gICAgLy9DTEFTUyBTVFJJTkcgRlJPTSBIVE1MIEJPSUxFUiBQTEFURVxuICAgIGNvbnN0IGRpdlNpZGViYXJDbGFzcyA9ICdkLWZsZXggZmxleC1jb2x1bW4gZmxleC1zaHJpbmstMCBwLTMgYmctbGlnaHQgY29sLTMgYm9yZGVyJ1xuICAgIGNvbnN0IGFDbGFzcyA9IFwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBtYi0zIG1iLW1kLTAgbWUtbWQtYXV0byBsaW5rLWRhcmsgdGV4dC1kZWNvcmF0aW9uLW5vbmVcIlxuICAgIGNvbnN0IGltZ0NsYXNzID0gJ20tMidcbiAgICBjb25zdCBzcGFuQ2xhc3MgPSAnZnMtNCdcbiAgICAvLyBjb25zdCBockNsYXNzID0gJydcbiAgICBjb25zdCB1bENsYXNzID0gJ25hdiBuYXYtcGlsbHMgZmxleC1jb2x1bW4gbWItYXV0byBiZy1zZWNvbmRhcnkgYmctZ3JhZGllbnQnXG4gICAgY29uc3QgZGl2RGl2ZGVDbGFzcyA9ICdiLWV4YW1wbGUtZGl2aWRlciBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlcidcbiAgICBjb25zdCBidG5Qcm9qZWN0Q2xhc3MgPSAnYnRuIGJ0bi1wcmltYXknXG4gICAgY29uc3QgYnRuVGFza0NsYXNzID0gJ2J0biBidG4tcHJpbWF5IG0tMidcbiAgICBjb25zdCBmb3JtUHJvamVjdENsYXNzID0gJ2Zvcm0tZ3JvdXAgbS0yIHAtMSBpbnB1dC1ncm91cCBkLW5vbmUnXG4gICAgY29uc3QgaW5wdXRDbGFzcyA9ICdmb3JtLWNvbnRyb2wnXG4gICAgY29uc3Qgc3VibWl0QnRuQ2xhc3MgPSAnYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnknXG4gICAgY29uc3QgZm9ybVRhc2tDbGFzcyA9ICdmb3JtLWdyb3VwIG0tMiBwLTEgaW5wdXQtZ3JvdXAgZC1ub25lJ1xuICAgIGNvbnN0IGZvcm1UYXNrRGl2Q2xhc3MgPSAnZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXInXG4gICAgLy9DTEFTU0lORyBFTEVNRU5UU1xuXG4gICAgbGlic0hlbHBlci5zdHJpbmdUb0NsYXNzKGRpdlNpZGViYXIsIGRpdlNpZGViYXJDbGFzcylcbiAgICBsaWJzSGVscGVyLnN0cmluZ1RvQ2xhc3MoaW1nLCBpbWdDbGFzcylcbiAgICBsaWJzSGVscGVyLnN0cmluZ1RvQ2xhc3MoYSwgYUNsYXNzKVxuICAgIGxpYnNIZWxwZXIuc3RyaW5nVG9DbGFzcyhzcGFuLCBzcGFuQ2xhc3MpXG4gICAgLy8gbGlic0hlbHBlci5zdHJpbmdUb0NsYXNzKGhyLCBockNsYXNzKVxuICAgIGxpYnNIZWxwZXIuc3RyaW5nVG9DbGFzcyh1bCwgdWxDbGFzcylcbiAgICBsaWJzSGVscGVyLnN0cmluZ1RvQ2xhc3MoZGl2RGl2ZGUsIGRpdkRpdmRlQ2xhc3MpXG4gICAgbGlic0hlbHBlci5zdHJpbmdUb0NsYXNzKGJ0blByb2plY3QsIGJ0blByb2plY3RDbGFzcylcbiAgICBsaWJzSGVscGVyLnN0cmluZ1RvQ2xhc3MoYnRuVGFzaywgYnRuVGFza0NsYXNzKVxuICAgIGxpYnNIZWxwZXIuc3RyaW5nVG9DbGFzcyhmb3JtUHJvamVjdCwgZm9ybVByb2plY3RDbGFzcylcbiAgICBsaWJzSGVscGVyLnN0cmluZ1RvQ2xhc3MoZm9ybVRhc2ssIGZvcm1UYXNrQ2xhc3MpXG4gICAgbGlic0hlbHBlci5zdHJpbmdUb0NsYXNzKGZvcm1UYXNrRGl2LCBmb3JtVGFza0RpdkNsYXNzKVxuXG4gICAgbGlic0hlbHBlci5zdHJpbmdUb0NsYXNzKGlucHV0LCBpbnB1dENsYXNzKVxuICAgIGxpYnNIZWxwZXIuc3RyaW5nVG9DbGFzcyhzdWJtaXRCdG4sIHN1Ym1pdEJ0bkNsYXNzKVxuICAgIGxpYnNIZWxwZXIuc3RyaW5nVG9DbGFzcyh0YXNrU3VibWl0QnRuLCBzdWJtaXRCdG5DbGFzcylcbiAgICBsaWJzSGVscGVyLnN0cmluZ1RvQ2xhc3ModGFza0lucHV0LCBpbnB1dENsYXNzKVxuXG5cbiAgICAvL1NFVFRJTkdTIFBST1BTXG4gICAgZGl2U2lkZWJhci5zdHlsZSA9ICd3aWR0aDogMjgwcHg7J1xuICAgIHNwYW4uaW5uZXJUZXh0ID0gJ1Byb2plY3RzJ1xuICAgIGltZy5zdHlsZSA9ICd3aWR0aDogMzBweCdcbiAgICBidG5Qcm9qZWN0LmlubmVyVGV4dCA9ICcrIE5ldyBQcm9qZWN0J1xuICAgIGJ0blRhc2suaW5uZXJUZXh0ID0gJysgVGFzaydcbiAgICBmb3JtRGl2LnN0eWxlID0gJ3dpZHRoOiAxNTBweDsnXG4gICAgZm9ybVRhc2tEaXYuc3R5bGUgPSAnd2lkdGg6IDIwMHB4J1xuICAgIHN1Ym1pdEJ0bi5pbm5lclRleHQgPSAnKydcbiAgICB0YXNrU3VibWl0QnRuLmlubmVyVGV4dCA9ICcrJ1xuXG5cbiAgICAvL1NFVFRJTkcgQVRUU1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnTmV3IFByb2plY3QnKVxuICAgIHRhc2tJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ05ldyBUYXNrJylcblxuICAgIGltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuLi9zYW5kYm94L3B1YmxpYy90b2RvLnN2ZycpXG4gICAgZm9ybVByb2plY3Quc2V0QXR0cmlidXRlKCdhY3Rpb24nLCAnc3VibWl0JylcbiAgICBmb3JtUHJvamVjdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Zvcm1Qcm9qZWN0JylcbiAgICBmb3JtVGFzay5zZXRBdHRyaWJ1dGUoJ2FjdGlvbicsICdzdWJtaXQnKVxuICAgIGZvcm1UYXNrLnNldEF0dHJpYnV0ZSgnaWQnLCAnZm9ybVRhc2snKVxuICAgIGZvcm1UYXNrLnNldEF0dHJpYnV0ZSgnbmFtZScsICd0YXNrRm9ybScpXG4gICAgdGFza0lucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICd0YXNrTmFtZScpXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ25hbWUnKVxuXG5cblxuXG4gICAgLy9FVkVOVCBMSVNUTkVSU1xuXG4gICAgZm9ybVByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGxldCBkYXRhID0gbGlic0hlbHBlci5nZXRGb3JtRGF0YShlKVxuICAgICAgICBwdWJzdWIucHVibGlzaCgnbGlTdWJtaXQnLCBkYXRhLm5hbWUpXG5cbiAgICAgICAgZm9ybVByb2plY3QucmVzZXQoKVxuICAgIH0pXG5cblxuICAgIGZvcm1UYXNrLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBsZXQgZGF0YSA9IGxpYnNIZWxwZXIuZ2V0Rm9ybURhdGEoZSlcbiAgICAgICAgcHVic3ViLnB1Ymxpc2goJ25ld1Rhc2snLCBkYXRhKVxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgZm9ybVRhc2sucmVzZXQoKVxuICAgIH0pXG5cblxuXG4gICAgYnRuUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIHB1YnN1Yi5wdWJsaXNoKCd0b29nbGVGb3JtJywgJ2Zvcm1Qcm9qZWN0JylcbiAgICB9KVxuXG4gICAgYnRuVGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIHB1YnN1Yi5wdWJsaXNoKCd0b29nbGVUYXNrJywgJ2Zvcm1UYXNrJylcbiAgICB9KVxuXG5cblxuICAgIHB1YnN1Yi5zdWJzY3JpYmUoJ3Rvb2dsZUZvcm0nLCBsaWJzSGVscGVyLnRvb2dsZUVsZW1lbnQpXG4gICAgcHVic3ViLnN1YnNjcmliZSgndG9vZ2xlVGFzaycsIGxpYnNIZWxwZXIudG9vZ2xlRWxlbWVudClcblxuICAgIHB1YnN1Yi5zdWJzY3JpYmUoJ2xpU3VibWl0JywgY3JlYXRlTGkpXG5cbiAgICBmdW5jdGlvbiBjcmVhdGVMaSh0ZXh0KSB7XG5cbiAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuXG5cblxuICAgICAgICBjb25zdCBsaUNsYXNzID0gJ25hdi1pdGVtIG0tMidcbiAgICAgICAgY29uc3QgYUNMYXNzID0gJ25hdi1saW5rIGFjdGl2ZSdcblxuXG4gICAgICAgIC8vIGNsYXNzZXMgXG4gICAgICAgIGxpYnNIZWxwZXIuc3RyaW5nVG9DbGFzcyhsaSwgbGlDbGFzcylcbiAgICAgICAgbGlic0hlbHBlci5zdHJpbmdUb0NsYXNzKGEsIGFDTGFzcylcblxuXG5cbiAgICAgICAgLy9hIGxpbmsgUHJvcHNcbiAgICAgICAgYS5pbm5lclRleHQgPSB0ZXh0XG5cblxuXG4gICAgICAgIGxpLmFwcGVuZChhKVxuXG4gICAgICAgIHB1YnN1Yi5wdWJsaXNoKCdjcmVhdGVMaScsIGxpKVxuICAgICAgICBsaS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7IHB1YnN1Yi5wdWJsaXNoKCdwcm9qZWN0Q2xpY2tlZCcsIGUudGFyZ2V0KSB9KVxuICAgICAgICByZXR1cm4gbGlcbiAgICB9XG5cblxuICAgIHB1YnN1Yi5zdWJzY3JpYmUoJ3Byb2plY3RDbGlja2VkJywgY2hhbmdlQnRuQ29sb3IpXG5cbiAgICBmdW5jdGlvbiBjaGFuZ2VCdG5Db2xvcih0YXJnZXQpIHtcbiAgICAgICAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgICBsZXQgb3RoZXJzID0gdGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5jaGlsZHJlblxuICAgICAgICAgICAgb3RoZXJzLmZvckVhY2gobGkgPT4ge1xuICAgICAgICAgICAgICAgIGxpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gICAgICAgICAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IG90aGVycyA9IHRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuY2hpbGRyZW5cbiAgICAgICAgICAgIG90aGVycy5mb3JFYWNoKGxpID0+IHtcbiAgICAgICAgICAgICAgICBsaS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxuICAgICAgICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgICAgICAgICAgfSlcblxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBwdWJzdWIuc3Vic2NyaWJlKCdjcmVhdGVMaScsIGJpbmRMaSlcbiAgICBmdW5jdGlvbiBiaW5kTGkobGkpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndWwnKS5hcHBlbmQobGkpXG4gICAgfVxuXG5cbiAgICBhLmFwcGVuZChpbWcsIHNwYW4pXG5cbiAgICBmb3JtRGl2LmFwcGVuZChpbnB1dClcbiAgICBmb3JtUHJvamVjdC5hcHBlbmQoc3VibWl0QnRuKVxuICAgIGZvcm1Qcm9qZWN0LmFwcGVuZChmb3JtRGl2KVxuXG5cbiAgICBmb3JtVGFzay5hcHBlbmQodGFza1N1Ym1pdEJ0biwgdGFza0lucHV0KVxuICAgIGZvcm1UYXNrRGl2LmFwcGVuZChmb3JtVGFzaylcblxuICAgIGRpdlNpZGViYXIuYXBwZW5kKGEpXG4gICAgZGl2U2lkZWJhci5hcHBlbmQoYnRuUHJvamVjdClcbiAgICBkaXZTaWRlYmFyLmFwcGVuZChidG5UYXNrKVxuICAgIGRpdlNpZGViYXIuYXBwZW5kKGZvcm1Qcm9qZWN0KVxuICAgIGRpdlNpZGViYXIuYXBwZW5kKGZvcm1UYXNrRGl2KVxuICAgIGRpdlNpZGViYXIuYXBwZW5kKGhyKVxuICAgIGRpdlNpZGViYXIuYXBwZW5kKHVsKVxuICAgIGRpdlNpZGViYXIuYXBwZW5kKGRpdkRpdmRlKVxuXG5cblxuICAgIHJldHVybiB7IGRpdlNpZGViYXIgfVxuXG59XG5cbi8vIE1ha2UgYSBTbWFsbCBmb3JtIHVuZGUgdGhlIHByb2plY3QgR2FtZXBhZEJ1dHRvbiwgd2hlbiBuZXcgUHJvamVjdCBpcyBwcmVzc2VkIFxuLy8gaXQgc2hvd3MgdGhlIGxpdHRsZSBmb3JtIGJ5IHNob3dpbmcgaXQncyB2aXNhYmxpdHkgYW5kIHdoZW4geW91IHByZXNzIHN1bWJpdCBpdCBjYWxscyBwdXBzdWJcbi8vdGhlIGNhbGxzIGFkZCBMSSBmdW5jdGlvbiJdLCJuYW1lcyI6WyJsaWJzIiwic3BsaXRTdHJpbmciLCJzdHJpbmciLCJzcGxpdCIsImNsYXNzQWRkZXIiLCJlbGVtZW50IiwiYXJyYXkiLCJmb3JFYWNoIiwiY2xhc3NMaXN0IiwiYWRkIiwiZ2V0SUQiLCJNYXRoIiwicmFuZG9tIiwidG9TdHJpbmciLCJzdWJzdHIiLCJzdHJpbmdUb0NsYXNzIiwiZ2V0Rm9ybURhdGEiLCJldmVudCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJ0YXJnZXQiLCJPYmplY3QiLCJmcm9tRW50cmllcyIsImZvcm1Qcm9wcyIsInRvb2dsZUVsZW1lbnQiLCJpZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjb250YWlucyIsInJlbW92ZSIsInB1YnN1YiIsImV2ZW50cyIsInN1YnNjcmliZSIsImV2TmFtZSIsImZuIiwiY29uc29sZSIsImxvZyIsInRoaXMiLCJwdXNoIiwidW5zdWJzY3JpYmUiLCJmaWx0ZXIiLCJmIiwicHVibGlzaCIsImRhdGEiLCJ0YXNrcyIsInRhc2tMb2dpYyIsIl90YXNrcyIsImFkZFRhc2siLCJ0YXNrIiwicmVtb3ZlVGFzayIsInRhcmdldFRhc2siLCJ0IiwibGlic0hlbHBlciIsImRpdkJvZHkiLCJjcmVhdGVFbGVtZW50IiwiZGl2Q29udGFpbmVyIiwiZGl2Um93IiwiZGl2R2FwIiwic3R5bGUiLCJhcHBlbmQiLCJ0YXNrT2JqIiwidGFza0NvbXAiLCJwIiwiYnRuRG9uZSIsImJ0blJlbW92ZSIsImhyIiwiaW5uZXJUZXh0IiwidGFza05hbWUiLCJhZGRFdmVudExpc3RlbmVyIiwiY3JlYXRlVGFza0RvbSIsIm5ld1Rhc2siLCJfdGFza05hbWUiLCJEYXRlIiwiZ2V0RGF0ZSIsInJlbW92ZVNlbGYiLCJnZXROYW1lIiwicHJvcCIsIlRhc2siLCJjcmVhdGVUYXNrTWVtb3J5IiwiZSIsImNvbnRlbnQiLCJfbmF2IiwibmF2IiwiZGl2IiwiYSIsIl9zaWRlYmFyIiwiZGl2U2lkZWJhciIsImltZyIsInNwYW4iLCJ1bCIsImZvcm1Qcm9qZWN0IiwiZm9ybURpdiIsImZvcm1UYXNrIiwiZm9ybVRhc2tEaXYiLCJ0YXNrU3VibWl0QnRuIiwidGFza0lucHV0IiwiaW5wdXQiLCJzdWJtaXRCdG4iLCJkaXZEaXZkZSIsImJ0blByb2plY3QiLCJidG5UYXNrIiwiaW5wdXRDbGFzcyIsInN1Ym1pdEJ0bkNsYXNzIiwic2V0QXR0cmlidXRlIiwicHJldmVudERlZmF1bHQiLCJuYW1lIiwicmVzZXQiLCJ0ZXh0IiwibGkiLCJwYXJlbnROb2RlIiwiY2hpbGRyZW4iLCJxdWVyeVNlbGVjdG9yIiwic2lkZWJhciJdLCJzb3VyY2VSb290IjoiIn0=