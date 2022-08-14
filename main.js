(()=>{"use strict";function e(){function e(e){return e.split(" ")}function t(e,t){t.forEach((t=>{e.classList.add(t)}))}return{getID:function(){return"_"+Math.random().toString(36).substr(2,9)},classAdder:t,splitString:e,stringToClass:function(n,s){t(n,e(s))},getFormData:e=>{const t=new FormData(e.target);return Object.fromEntries(t)}}}const t={events:{},subscribe:function(e,t){console.log(`PUBSUB: someone just subscribed to know about ${e}`),this.events[e]=this.events[e]||[],this.events[e].push(t)},unsubscribe:function(e,t){console.log(`PUBSUB: someone just UNsubscribed from ${e}`),this.events[e]&&(this.events[e]=this.events[e].filter((e=>e!==t)))},publish:function(e,t){console.log(`PUBSUB: Making an broadcast about ${e} with ${t}`),this.events[e]&&this.events[e].forEach((e=>{e(t)}))}};function n(){const n=function(){const e=[];return{addTask:t=>{e.push(t),console.log(e)},removeTask:t=>{e=e.filter((e=>!t))}}}(),s=e(),o=document.createElement("div"),r=document.createElement("div"),a=document.createElement("div"),i=document.createElement("div");return s.stringToClass(o,"col-8 container-sm bg-light card-body"),s.stringToClass(r,"container-md card m-2 p-1 mr-1"),s.stringToClass(a,"container row"),s.stringToClass(i,"col-1 bg-light"),a.style="gap: 10px",r.append(a),o.append(r),t.subscribe("newTask",(e=>{var t;t=function(e){const t=document.createElement("div"),n=document.createElement("p"),o=document.createElement("button"),r=document.createElement("button");return s.stringToClass(n,"m-2 col-xl"),s.stringToClass(o,"btn btn-outline-primary col-sm pl-2"),s.stringToClass(r,"btn btn-outline-danger col-sm"),t.append(n,r,o),o.innerText="DONE",r.innerText="Remove",n.innerText=e.taskName,n.style="flex-grow: 10",t.append(n,r,o),t}(e),a.append(t)})),t.subscribe("newTask",(e=>{!function(e){let s=function(e){let n=e.taskName;return(new Date).getDate(),{removeSelf:()=>{t.publish("removeTask")},getName:e=>n}}(e);n.addTask(s)}(e)})),t.subscribe("removeTask",(e=>n.removeTask)),o}document.addEventListener("DOMContentLoaded",(s=>{let o=document.getElementById("content");const r=function(){const t=e(),n=document.createElement("nav"),s=document.createElement("div"),o=document.createElement("a");return t.stringToClass(n,"navbar navbar-expand-md navbar-dark bg-dark"),t.stringToClass(s,"container-fluid"),t.stringToClass(o,"navbar-brand"),o.innerText="Todolist",s.append(o),n.append(s),n}(),a=function(){const n=e(),s=document.createElement("div"),o=document.createElement("a"),r=document.createElement("img"),a=document.createElement("span"),i=document.createElement("hr"),c=document.createElement("ul"),l=document.createElement("form"),d=document.createElement("div"),m=document.createElement("form"),u=document.createElement("div"),p=document.createElement("button"),b=document.createElement("input"),g=(document.createElement("area"),document.createElement("input")),T=document.createElement("button"),v=document.createElement("div"),f=document.createElement("button"),E=document.createElement("button"),h="form-control",C="btn btn-outline-primary";function k(e){let t=document.getElementById(e);t.classList.contains("d-none")?t.classList.remove("d-none"):t.classList.add("d-none")}function x(e){const s=document.createElement("li"),o=document.createElement("a"),r=document.createElement("svg");return n.stringToClass(s,"nav-item m-2"),n.stringToClass(o,"nav-link active"),n.stringToClass(r,"bi me-2"),o.innerText=e,r.setAttribute("width",16),r.setAttribute("height",16),o.append(r),s.append(o),t.publish("createLi",s),s}return n.stringToClass(s,"d-flex flex-column flex-shrink-0 p-3 bg-light col-3 border"),n.stringToClass(r,"m-2"),n.stringToClass(o,"d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"),n.stringToClass(a,"fs-4"),n.stringToClass(c,"nav nav-pills flex-column mb-auto"),n.stringToClass(v,"b-example-divider d-flex justify-content-center"),n.stringToClass(f,"btn btn-primay"),n.stringToClass(E,"btn btn-primay m-2"),n.stringToClass(l,"form-group m-2 p-1 input-group d-none"),n.stringToClass(m,"form-group m-2 p-1 input-group d-none"),n.stringToClass(u,"d-flex justify-content-center"),n.stringToClass(g,h),n.stringToClass(T,C),n.stringToClass(p,C),n.stringToClass(b,h),s.style="width: 280px;",a.innerText="Projects",r.style="width: 30px",f.innerText="+ New Project",E.innerText="+ Task",d.style="width: 150px;",u.style="width: 200px",T.innerText="+",p.innerText="+",g.setAttribute("placeholder","New Project"),b.setAttribute("placeholder","New Task"),r.setAttribute("src","../sandbox/public/todo.svg"),l.setAttribute("action","submit"),l.setAttribute("id","form"),m.setAttribute("action","submit"),m.setAttribute("id","formTask"),m.setAttribute("name","taskForm"),b.setAttribute("name","taskName"),g.setAttribute("name","name"),l.addEventListener("submit",(e=>{e.preventDefault();let s=n.getFormData(e);t.publish("liSubmit",s),l.reset()})),m.addEventListener("submit",(e=>{e.preventDefault();let s=n.getFormData(e);t.publish("newTask",s),console.log(s),m.reset()})),f.addEventListener("click",(e=>{t.publish("toogleForm","form")})),E.addEventListener("click",(e=>{t.publish("toogleForm","formTask")})),t.subscribe("toogleForm",k),t.subscribe("toogleTask",k),t.subscribe("liSubmit",x),t.subscribe("createLi",(function(e){document.querySelector("ul").append(e)})),o.append(r,a),d.append(g),l.append(T),l.append(d),m.append(p,b),u.append(m),s.append(o),s.append(f),s.append(E),s.append(l),s.append(u),s.append(i),s.append(c),s.append(v),{divSidebar:s,createLi:x,ul:c}}().divSidebar,i=n();o.append(r);const c=document.createElement("div");c.classList.add("row"),c.append(a),c.append(i),o.append(c)})),console.log("amit")})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUd2QzRELEVBQVF4QixpQkFBaUIsU0FBVUMsSUFDL0JqRCxFQUFPWSxRQUFRLGFBQWMsV0FBVSxJQWMzQ1osRUFBT0UsVUFBVSxhQUFjeUUsR0FDL0IzRSxFQUFPRSxVQUFVLGFBQWN5RSxHQUUvQjNFLEVBQU9FLFVBQVUsV0FBWTZFLEdBcUM3Qi9FLEVBQU9FLFVBQVUsWUFDakIsU0FBZ0IrRSxHQUNaekQsU0FBUzhELGNBQWMsTUFBTXhELE9BQU9tRCxFQUN4QyxJQUdBMUIsRUFBRXpCLE9BQU80QixFQUFLQyxHQUVkSSxFQUFRakMsT0FBT3NDLEdBQ2ZOLEVBQUtoQyxPQUFPdUMsR0FDWlAsRUFBS2hDLE9BQU9pQyxHQUdaQyxFQUFTbEMsT0FBT29DLEVBQWVDLEdBQy9CRixFQUFZbkMsT0FBT2tDLEdBRW5CUCxFQUFXM0IsT0FBT3lCLEdBQ2xCRSxFQUFXM0IsT0FBT3lDLEdBQ2xCZCxFQUFXM0IsT0FBTzBDLEdBQ2xCZixFQUFXM0IsT0FBT2dDLEdBQ2xCTCxFQUFXM0IsT0FBT21DLEdBQ2xCUixFQUFXM0IsT0FBTzhCLEdBQ2xCSCxFQUFXM0IsT0FBTytCLEdBQ2xCSixFQUFXM0IsT0FBT3dDLEdBSVgsQ0FBRWIsYUFBWXNCLFdBQVVsQixLQUVuQyxDRjNMNkIwQixHQUFVOUIsV0FDckJ6QyxFQUFTRixJQUVmb0MsRUFBUXBCLE9BQU9zQixHQUNmLE1BQU1FLEVBQU05QixTQUFTQyxjQUFjLE9BQ25DNkIsRUFBSXRFLFVBQVVDLElBQUksT0FDbEJxRSxFQUFJeEIsT0FBTzBCLEdBQ1hGLEVBQUl4QixPQUFPZCxHQUNYa0MsRUFBUXBCLE9BQU93QixFQUFHLElHbEI5QmpELFFBQVFDLElBQUksTyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vLi9zcmMvanMvbGlicy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2pzL3B1YnN1Yi5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2pzL3Rhc2tzLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvanMvZG9tLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvanMvbmF2YmFyLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvanMvc2lkZWJhci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2pzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFyIH0gZnJvbSBcImRhdGUtZm5zL2xvY2FsZVwiO1xuXG5cblxuXG5leHBvcnQgZnVuY3Rpb24gbGlicygpIHtcblxuICAgIGNvbnN0IGdldEZvcm1EYXRhID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGV2ZW50LnRhcmdldClcbiAgICAgICAgY29uc3QgZm9ybVByb3BzID0gT2JqZWN0LmZyb21FbnRyaWVzKGZvcm1EYXRhKVxuICAgICAgICByZXR1cm4gZm9ybVByb3BzXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3BsaXRTdHJpbmcoc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBzdHJpbmcuc3BsaXQoXCIgXCIpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xhc3NBZGRlcihlbGVtZW50LCBhcnJheSkge1xuICAgICAgICBhcnJheS5mb3JFYWNoKHN0cmluZyA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoc3RyaW5nKVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdHJpbmdUb0NsYXNzKGVsZW1lbnQsIHN0cmluZykge1xuICAgICAgICBsZXQgYXJyID0gc3BsaXRTdHJpbmcoc3RyaW5nKVxuICAgICAgICBjbGFzc0FkZGVyKGVsZW1lbnQsIGFycilcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRJRCgpIHtcbiAgICAgICAgcmV0dXJuICdfJyArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cigyLCA5KTtcbiAgICB9XG5cblxuXG4gICAgcmV0dXJuIHsgZ2V0SUQsIGNsYXNzQWRkZXIsIHNwbGl0U3RyaW5nLCBzdHJpbmdUb0NsYXNzLCBnZXRGb3JtRGF0YSB9XG5cbn1cblxuXG5cblxuXG5cblxuIiwiZXhwb3J0IGNvbnN0IHB1YnN1YiA9IHtcbiAgICBldmVudHM6IHt9LFxuICAgIHN1YnNjcmliZTogZnVuY3Rpb24gKGV2TmFtZSwgZm4pIHtcbiAgICAgICAgY29uc29sZS5sb2coYFBVQlNVQjogc29tZW9uZSBqdXN0IHN1YnNjcmliZWQgdG8ga25vdyBhYm91dCAke2V2TmFtZX1gKTtcbiAgICAgICAgLy9hZGQgYW4gZXZlbnQgd2l0aCBhIG5hbWUgYXMgbmV3IG9yIHRvIGV4aXN0aW5nIGxpc3RcbiAgICAgICAgdGhpcy5ldmVudHNbZXZOYW1lXSA9IHRoaXMuZXZlbnRzW2V2TmFtZV0gfHwgW107XG4gICAgICAgIHRoaXMuZXZlbnRzW2V2TmFtZV0ucHVzaChmbik7XG4gICAgfSxcbiAgICB1bnN1YnNjcmliZTogZnVuY3Rpb24gKGV2TmFtZSwgZm4pIHtcbiAgICAgICAgY29uc29sZS5sb2coYFBVQlNVQjogc29tZW9uZSBqdXN0IFVOc3Vic2NyaWJlZCBmcm9tICR7ZXZOYW1lfWApO1xuICAgICAgICAvL3JlbW92ZSBhbiBldmVudCBmdW5jdGlvbiBieSBuYW1lXG4gICAgICAgIGlmICh0aGlzLmV2ZW50c1tldk5hbWVdKSB7XG4gICAgICAgICAgICB0aGlzLmV2ZW50c1tldk5hbWVdID0gdGhpcy5ldmVudHNbZXZOYW1lXS5maWx0ZXIoZiA9PiBmICE9PSBmbik7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHB1Ymxpc2g6IGZ1bmN0aW9uIChldk5hbWUsIGRhdGEpIHtcbiAgICAgICAgY29uc29sZS5sb2coYFBVQlNVQjogTWFraW5nIGFuIGJyb2FkY2FzdCBhYm91dCAke2V2TmFtZX0gd2l0aCAke2RhdGF9YCk7XG4gICAgICAgIC8vZW1pdHxwdWJsaXNofGFubm91bmNlIHRoZSBldmVudCB0byBhbnlvbmUgd2hvIGlzIHN1YnNjcmliZWRcbiAgICAgICAgaWYgKHRoaXMuZXZlbnRzW2V2TmFtZV0pIHtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRzW2V2TmFtZV0uZm9yRWFjaChmID0+IHtcbiAgICAgICAgICAgICAgICBmKGRhdGEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59OyIsImltcG9ydCB7IGxpYnMgfSBmcm9tIFwiLi9saWJzXCI7XG5pbXBvcnQgeyBwdWJzdWIgfSBmcm9tICcuL3B1YnN1Yi5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRhc2tzKCkge1xuXG5cbiAgICBjb25zdCBUYXNrID0gZnVuY3Rpb24gKHRhc2tPYmopIHtcblxuICAgICAgICBsZXQgX3Rhc2tOYW1lID0gdGFza09iai50YXNrTmFtZVxuICAgICAgICBsZXQgZGF0ZUNyZWF0ZWQgPSBuZXcgRGF0ZSgpLmdldERhdGUoKVxuXG4gICAgICAgIGNvbnN0IHJlbW92ZVNlbGYgPSAoKSA9PiB7XG4gICAgICAgICAgICBwdWJzdWIucHVibGlzaCgncmVtb3ZlVGFzaycpXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBnZXROYW1lID0gKHByb3ApID0+IHtcbiAgICAgICAgICAgIHJldHVybiBfdGFza05hbWVcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7IHJlbW92ZVNlbGYsIGdldE5hbWUgfVxuICAgIH1cblxuICAgIGNvbnN0IHRhc2tMb2dpYyA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IF90YXNrcyA9IFtdXG5cbiAgICAgICAgY29uc3QgYWRkVGFzayA9ICh0YXNrKSA9PiB7XG4gICAgICAgICAgICBfdGFza3MucHVzaCh0YXNrKVxuICAgICAgICAgICAgY29uc29sZS5sb2coX3Rhc2tzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJlbW92ZVRhc2sgPSAodGFyZ2V0VGFzaykgPT4ge1xuICAgICAgICAgICAgX3Rhc2tzID0gX3Rhc2tzLmZpbHRlcih0ID0+IHQgPSAhdGFyZ2V0VGFzaylcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7IGFkZFRhc2ssIHJlbW92ZVRhc2sgfVxuICAgIH0pKClcblxuXG4gICAgY29uc3QgbGlic0hlbHBlciA9IGxpYnMoKVxuXG4gICAgY29uc3QgZGl2Qm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgZGl2Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBkaXZSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gICAgY29uc3QgZGl2R2FwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuICAgIGNvbnN0IGRpdkJvZHlDbGFzcyA9ICdjb2wtOCBjb250YWluZXItc20gYmctbGlnaHQgY2FyZC1ib2R5J1xuICAgIGNvbnN0IGRpdkNvbnRhaW5lckNsYXNzID0gJ2NvbnRhaW5lci1tZCBjYXJkIG0tMiBwLTEgbXItMSdcbiAgICBjb25zdCBkaXZSb3dDbGFzcyA9ICdjb250YWluZXIgcm93J1xuXG4gICAgY29uc3QgZGl2R2FwQ2xhc3MgPSAnY29sLTEgYmctbGlnaHQnXG5cblxuICAgIGxpYnNIZWxwZXIuc3RyaW5nVG9DbGFzcyhkaXZCb2R5LCBkaXZCb2R5Q2xhc3MpXG4gICAgbGlic0hlbHBlci5zdHJpbmdUb0NsYXNzKGRpdkNvbnRhaW5lciwgZGl2Q29udGFpbmVyQ2xhc3MpXG4gICAgbGlic0hlbHBlci5zdHJpbmdUb0NsYXNzKGRpdlJvdywgZGl2Um93Q2xhc3MpXG5cbiAgICBsaWJzSGVscGVyLnN0cmluZ1RvQ2xhc3MoZGl2R2FwLCBkaXZHYXBDbGFzcylcblxuICAgIGRpdlJvdy5zdHlsZSA9ICdnYXA6IDEwcHgnXG5cblxuXG4gICAgZGl2Q29udGFpbmVyLmFwcGVuZChkaXZSb3cpXG4gICAgZGl2Qm9keS5hcHBlbmQoZGl2Q29udGFpbmVyKVxuXG5cbiAgICBmdW5jdGlvbiBjcmVhdGVUYXNrTWVtb3J5KHRhc2tPYmopIHtcbiAgICAgICAgbGV0IG5ld1Rhc2sgPSBUYXNrKHRhc2tPYmopXG4gICAgICAgIHRhc2tMb2dpYy5hZGRUYXNrKG5ld1Rhc2spXG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiBjcmVhdGVUYXNrRG9tKHRhc2tPYmopIHtcblxuICAgICAgICBjb25zdCB0YXNrQ29tcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgICAgY29uc3QgYnRuRG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgIGNvbnN0IGJ0blJlbW92ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgIGNvbnN0IHBDbGFzcyA9ICdtLTIgY29sLXhsJ1xuICAgICAgICBjb25zdCBidG5Eb25lQ2xhc3MgPSAnYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnkgY29sLXNtIHBsLTInXG4gICAgICAgIGNvbnN0IGJ0blJlbW92ZUNsYXNzID0gJ2J0biBidG4tb3V0bGluZS1kYW5nZXIgY29sLXNtJ1xuICAgICAgICBsaWJzSGVscGVyLnN0cmluZ1RvQ2xhc3MocCwgcENsYXNzKVxuICAgICAgICBsaWJzSGVscGVyLnN0cmluZ1RvQ2xhc3MoYnRuRG9uZSwgYnRuRG9uZUNsYXNzKVxuICAgICAgICBsaWJzSGVscGVyLnN0cmluZ1RvQ2xhc3MoYnRuUmVtb3ZlLCBidG5SZW1vdmVDbGFzcylcbiAgICAgICAgdGFza0NvbXAuYXBwZW5kKHAsIGJ0blJlbW92ZSwgYnRuRG9uZSlcbiAgICAgICAgYnRuRG9uZS5pbm5lclRleHQgPSAnRE9ORSdcbiAgICAgICAgYnRuUmVtb3ZlLmlubmVyVGV4dCA9ICdSZW1vdmUnXG5cbiAgICAgICAgcC5pbm5lclRleHQgPSB0YXNrT2JqLnRhc2tOYW1lXG4gICAgICAgIHAuc3R5bGUgPSAnZmxleC1ncm93OiAxMCdcbiAgICAgICAgdGFza0NvbXAuYXBwZW5kKHAsIGJ0blJlbW92ZSwgYnRuRG9uZSlcbiAgICAgICAgcmV0dXJuIHRhc2tDb21wXG5cbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIGFwcGVuZFRhc2sodGFzaykge1xuICAgICAgICBkaXZSb3cuYXBwZW5kKHRhc2spXG4gICAgfVxuXG4gICAgcHVic3ViLnN1YnNjcmliZSgnbmV3VGFzaycsIChkYXRhKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1Rhc2sgPSBjcmVhdGVUYXNrRG9tKGRhdGEpXG4gICAgICAgIGFwcGVuZFRhc2sobmV3VGFzaylcbiAgICB9KVxuXG4gICAgcHVic3ViLnN1YnNjcmliZSgnbmV3VGFzaycsIChkYXRhKSA9PiB7IGNyZWF0ZVRhc2tNZW1vcnkoZGF0YSkgfSlcbiAgICBwdWJzdWIuc3Vic2NyaWJlKCdyZW1vdmVUYXNrJywgKHRhc2spID0+IHRhc2tMb2dpYy5yZW1vdmVUYXNrKVxuXG5cblxuXG4gICAgcmV0dXJuIGRpdkJvZHlcbn0iLCJpbXBvcnQgeyBhZGQgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcbmltcG9ydCBuYXZiYXIgZnJvbSBcIi4vbmF2YmFyXCJcbmltcG9ydCBzaWRlYmFyIGZyb20gXCIuL3NpZGViYXJcIlxuaW1wb3J0IHRhc2tzIGZyb20gXCIuL3Rhc2tzXCI7XG5cbmV4cG9ydCBkZWZhdWx0XG4gICAgKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy9Ib29rIGZvciBmb3IgY29udGVudFxuXG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIChlKSA9PiB7XG5cbiAgICAgICAgICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKVxuICAgICAgICAgICAgY29uc3QgX25hdiA9IG5hdmJhcigpXG4gICAgICAgICAgICBjb25zdCBfc2lkZWJhciA9IHNpZGViYXIoKS5kaXZTaWRlYmFyXG4gICAgICAgICAgICBjb25zdCBfdGFza3MgPSB0YXNrcygpXG5cbiAgICAgICAgICAgIGNvbnRlbnQuYXBwZW5kKF9uYXYpXG4gICAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdyb3cnKVxuICAgICAgICAgICAgZGl2LmFwcGVuZChfc2lkZWJhcilcbiAgICAgICAgICAgIGRpdi5hcHBlbmQoX3Rhc2tzKVxuICAgICAgICAgICAgY29udGVudC5hcHBlbmQoZGl2KVxuICAgICAgICAgICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndWwnKS5hcHBlbmQoc2lkZWJhcigpLmFkZFByb2plY3RMaSgpKVxuXG5cblxuICAgICAgICB9KVxuXG5cbiAgICB9KSgpXG5cbiIsIlxuXG5pbXBvcnQgeyBsaWJzIH0gZnJvbSBcIi4vbGlic1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbmF2KCkge1xuXG4gICAgLy9JTklUIExJQlNcbiAgICBjb25zdCBsaWJzSGVscGVyID0gbGlicygpXG5cbiAgICAvL0NSRUFURSBFTEVNRU5UU1xuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpXG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcblxuICAgIC8vQ0xBU1MgU1RSSU5HIEZST00gSFRNTCBCT0lMRVIgUExBVEVcbiAgICBjb25zdCBuYXZDbGFzcyA9ICduYXZiYXIgbmF2YmFyLWV4cGFuZC1tZCBuYXZiYXItZGFyayBiZy1kYXJrJ1xuICAgIGNvbnN0IGRpdkNsYXNzID0gJ2NvbnRhaW5lci1mbHVpZCdcbiAgICBjb25zdCBhQ2xhc3MgPSAnbmF2YmFyLWJyYW5kJ1xuXG5cbiAgICBsaWJzSGVscGVyLnN0cmluZ1RvQ2xhc3MobmF2LCBuYXZDbGFzcylcbiAgICBsaWJzSGVscGVyLnN0cmluZ1RvQ2xhc3MoZGl2LCBkaXZDbGFzcylcbiAgICBsaWJzSGVscGVyLnN0cmluZ1RvQ2xhc3MoYSwgYUNsYXNzKVxuXG4gICAgLy9BZGQgVGV4dCBDb250ZW50XG4gICAgYS5pbm5lclRleHQgPSAnVG9kb2xpc3QnXG5cbiAgICBkaXYuYXBwZW5kKGEpXG4gICAgbmF2LmFwcGVuZChkaXYpXG5cbiAgICByZXR1cm4gbmF2XG5cbn0iLCJcblxuaW1wb3J0IHsgaXQgfSBmcm9tIFwiZGF0ZS1mbnMvbG9jYWxlXCI7XG5pbXBvcnQgeyBsaWJzIH0gZnJvbSBcIi4vbGlic1wiO1xuaW1wb3J0IHsgcHVic3ViIH0gZnJvbSAnLi9wdWJzdWIuanMnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2lkZWJhcigpIHtcblxuICAgIC8vSU5JVCBMSUJTXG4gICAgY29uc3QgbGlic0hlbHBlciA9IGxpYnMoKVxuXG4gICAgLy9DUkVBVEUgRUxFTUVOVFNcbiAgICBjb25zdCBkaXZTaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGNvbnN0IGhyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHInKTtcbiAgICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJylcblxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcbiAgICBjb25zdCBmb3JtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuICAgIGNvbnN0IGZvcm1UYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXG4gICAgY29uc3QgZm9ybVRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IHRhc2tTdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGNvbnN0IHRhc2tJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBjb25zdCB0YXNrVGV4dEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhcmVhJylcblxuXG5cbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIC8vRGl2ZGVyXG4gICAgY29uc3QgZGl2RGl2ZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBidG5Qcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgYnRuVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG5cbiAgICAvL0NMQVNTIFNUUklORyBGUk9NIEhUTUwgQk9JTEVSIFBMQVRFXG4gICAgY29uc3QgZGl2U2lkZWJhckNsYXNzID0gJ2QtZmxleCBmbGV4LWNvbHVtbiBmbGV4LXNocmluay0wIHAtMyBiZy1saWdodCBjb2wtMyBib3JkZXInXG4gICAgY29uc3QgYUNsYXNzID0gXCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIG1iLTMgbWItbWQtMCBtZS1tZC1hdXRvIGxpbmstZGFyayB0ZXh0LWRlY29yYXRpb24tbm9uZVwiXG4gICAgY29uc3QgaW1nQ2xhc3MgPSAnbS0yJ1xuICAgIGNvbnN0IHNwYW5DbGFzcyA9ICdmcy00J1xuICAgIC8vIGNvbnN0IGhyQ2xhc3MgPSAnJ1xuICAgIGNvbnN0IHVsQ2xhc3MgPSAnbmF2IG5hdi1waWxscyBmbGV4LWNvbHVtbiBtYi1hdXRvJ1xuICAgIGNvbnN0IGRpdkRpdmRlQ2xhc3MgPSAnYi1leGFtcGxlLWRpdmlkZXIgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXInXG4gICAgY29uc3QgYnRuUHJvamVjdENsYXNzID0gJ2J0biBidG4tcHJpbWF5J1xuICAgIGNvbnN0IGJ0blRhc2tDbGFzcyA9ICdidG4gYnRuLXByaW1heSBtLTInXG4gICAgY29uc3QgZm9ybUNsYXNzID0gJ2Zvcm0tZ3JvdXAgbS0yIHAtMSBpbnB1dC1ncm91cCBkLW5vbmUnXG4gICAgY29uc3QgaW5wdXRDbGFzcyA9ICdmb3JtLWNvbnRyb2wnXG4gICAgY29uc3Qgc3VibWl0QnRuQ2xhc3MgPSAnYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnknXG4gICAgY29uc3QgZm9ybVRhc2tDbGFzcyA9ICdmb3JtLWdyb3VwIG0tMiBwLTEgaW5wdXQtZ3JvdXAgZC1ub25lJ1xuICAgIGNvbnN0IGZvcm1UYXNrRGl2Q2xhc3MgPSAnZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXInXG5cbiAgICBsaWJzSGVscGVyLnN0cmluZ1RvQ2xhc3MoZGl2U2lkZWJhciwgZGl2U2lkZWJhckNsYXNzKVxuICAgIGxpYnNIZWxwZXIuc3RyaW5nVG9DbGFzcyhpbWcsIGltZ0NsYXNzKVxuICAgIGxpYnNIZWxwZXIuc3RyaW5nVG9DbGFzcyhhLCBhQ2xhc3MpXG4gICAgbGlic0hlbHBlci5zdHJpbmdUb0NsYXNzKHNwYW4sIHNwYW5DbGFzcylcbiAgICAvLyBsaWJzSGVscGVyLnN0cmluZ1RvQ2xhc3MoaHIsIGhyQ2xhc3MpXG4gICAgbGlic0hlbHBlci5zdHJpbmdUb0NsYXNzKHVsLCB1bENsYXNzKVxuICAgIGxpYnNIZWxwZXIuc3RyaW5nVG9DbGFzcyhkaXZEaXZkZSwgZGl2RGl2ZGVDbGFzcylcbiAgICBsaWJzSGVscGVyLnN0cmluZ1RvQ2xhc3MoYnRuUHJvamVjdCwgYnRuUHJvamVjdENsYXNzKVxuICAgIGxpYnNIZWxwZXIuc3RyaW5nVG9DbGFzcyhidG5UYXNrLCBidG5UYXNrQ2xhc3MpXG4gICAgbGlic0hlbHBlci5zdHJpbmdUb0NsYXNzKGZvcm0sIGZvcm1DbGFzcylcbiAgICBsaWJzSGVscGVyLnN0cmluZ1RvQ2xhc3MoZm9ybVRhc2ssIGZvcm1UYXNrQ2xhc3MpXG4gICAgbGlic0hlbHBlci5zdHJpbmdUb0NsYXNzKGZvcm1UYXNrRGl2LCBmb3JtVGFza0RpdkNsYXNzKVxuXG4gICAgbGlic0hlbHBlci5zdHJpbmdUb0NsYXNzKGlucHV0LCBpbnB1dENsYXNzKVxuICAgIGxpYnNIZWxwZXIuc3RyaW5nVG9DbGFzcyhzdWJtaXRCdG4sIHN1Ym1pdEJ0bkNsYXNzKVxuICAgIGxpYnNIZWxwZXIuc3RyaW5nVG9DbGFzcyh0YXNrU3VibWl0QnRuLCBzdWJtaXRCdG5DbGFzcylcbiAgICBsaWJzSGVscGVyLnN0cmluZ1RvQ2xhc3ModGFza0lucHV0LCBpbnB1dENsYXNzKVxuXG5cblxuICAgIGRpdlNpZGViYXIuc3R5bGUgPSAnd2lkdGg6IDI4MHB4OydcbiAgICBzcGFuLmlubmVyVGV4dCA9ICdQcm9qZWN0cydcbiAgICBpbWcuc3R5bGUgPSAnd2lkdGg6IDMwcHgnXG4gICAgYnRuUHJvamVjdC5pbm5lclRleHQgPSAnKyBOZXcgUHJvamVjdCdcbiAgICBidG5UYXNrLmlubmVyVGV4dCA9ICcrIFRhc2snXG4gICAgZm9ybURpdi5zdHlsZSA9ICd3aWR0aDogMTUwcHg7J1xuICAgIGZvcm1UYXNrRGl2LnN0eWxlID0gJ3dpZHRoOiAyMDBweCdcbiAgICBzdWJtaXRCdG4uaW5uZXJUZXh0ID0gJysnXG4gICAgdGFza1N1Ym1pdEJ0bi5pbm5lclRleHQgPSAnKydcblxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnTmV3IFByb2plY3QnKVxuICAgIHRhc2tJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ05ldyBUYXNrJylcblxuICAgIGltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuLi9zYW5kYm94L3B1YmxpYy90b2RvLnN2ZycpXG4gICAgZm9ybS5zZXRBdHRyaWJ1dGUoJ2FjdGlvbicsICdzdWJtaXQnKVxuICAgIGZvcm0uc2V0QXR0cmlidXRlKCdpZCcsICdmb3JtJylcbiAgICBmb3JtVGFzay5zZXRBdHRyaWJ1dGUoJ2FjdGlvbicsICdzdWJtaXQnKVxuICAgIGZvcm1UYXNrLnNldEF0dHJpYnV0ZSgnaWQnLCAnZm9ybVRhc2snKVxuICAgIGZvcm1UYXNrLnNldEF0dHJpYnV0ZSgnbmFtZScsICd0YXNrRm9ybScpXG4gICAgdGFza0lucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICd0YXNrTmFtZScpXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ25hbWUnKVxuXG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgbGV0IGRhdGEgPSBsaWJzSGVscGVyLmdldEZvcm1EYXRhKGUpXG4gICAgICAgIHB1YnN1Yi5wdWJsaXNoKCdsaVN1Ym1pdCcsIGRhdGEpXG4gICAgICAgIGZvcm0ucmVzZXQoKVxuICAgIH0pXG5cblxuICAgIGZvcm1UYXNrLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBsZXQgZGF0YSA9IGxpYnNIZWxwZXIuZ2V0Rm9ybURhdGEoZSlcbiAgICAgICAgcHVic3ViLnB1Ymxpc2goJ25ld1Rhc2snLCBkYXRhKVxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgZm9ybVRhc2sucmVzZXQoKVxuICAgIH0pXG5cblxuXG4gICAgYnRuUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIHB1YnN1Yi5wdWJsaXNoKCd0b29nbGVGb3JtJywgJ2Zvcm0nKVxuICAgIH0pXG5cbiAgICBidG5UYXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgcHVic3ViLnB1Ymxpc2goJ3Rvb2dsZUZvcm0nLCAnZm9ybVRhc2snKVxuICAgIH0pXG5cbiAgICBmdW5jdGlvbiB0b29nbGVFbGVtZW50KGlkKSB7XG4gICAgICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpXG4gICAgICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnZC1ub25lJykpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJylcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZC1ub25lJylcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcHVic3ViLnN1YnNjcmliZSgndG9vZ2xlRm9ybScsIHRvb2dsZUVsZW1lbnQpXG4gICAgcHVic3ViLnN1YnNjcmliZSgndG9vZ2xlVGFzaycsIHRvb2dsZUVsZW1lbnQpXG5cbiAgICBwdWJzdWIuc3Vic2NyaWJlKCdsaVN1Ym1pdCcsIGNyZWF0ZUxpKVxuXG5cbiAgICBmdW5jdGlvbiBjcmVhdGVMaSh0ZXh0KSB7XG5cbiAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICBjb25zdCBzdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdmcnKTtcblxuICAgICAgICBjb25zdCBsaUNsYXNzID0gJ25hdi1pdGVtIG0tMidcbiAgICAgICAgY29uc3QgYUNMYXNzID0gJ25hdi1saW5rIGFjdGl2ZSdcbiAgICAgICAgY29uc3Qgc3ZnQ2xhc3MgPSAnYmkgbWUtMidcblxuXG4gICAgICAgIC8vIGNsYXNzZXMgXG4gICAgICAgIGxpYnNIZWxwZXIuc3RyaW5nVG9DbGFzcyhsaSwgbGlDbGFzcylcbiAgICAgICAgbGlic0hlbHBlci5zdHJpbmdUb0NsYXNzKGEsIGFDTGFzcylcbiAgICAgICAgbGlic0hlbHBlci5zdHJpbmdUb0NsYXNzKHN2Zywgc3ZnQ2xhc3MpXG5cblxuICAgICAgICAvL2EgbGluayBQcm9wc1xuICAgICAgICBhLmlubmVyVGV4dCA9IHRleHRcblxuICAgICAgICAvL1NWRyBQcm9wc1xuXG4gICAgICAgIHN2Zy5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgMTYpXG4gICAgICAgIHN2Zy5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIDE2KVxuICAgICAgICAvLyBzdmcuc2V0QXR0cmlidXRlKCd4bGluaycsICcjc3BlZWRvbWV0ZXIyJylcblxuICAgICAgICBhLmFwcGVuZChzdmcpXG5cbiAgICAgICAgbGkuYXBwZW5kKGEpXG4gICAgICAgIHB1YnN1Yi5wdWJsaXNoKCdjcmVhdGVMaScsIGxpKVxuICAgICAgICByZXR1cm4gbGlcbiAgICB9XG5cblxuICAgIHB1YnN1Yi5zdWJzY3JpYmUoJ2NyZWF0ZUxpJywgYmluZExpKVxuICAgIGZ1bmN0aW9uIGJpbmRMaShsaSkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd1bCcpLmFwcGVuZChsaSlcbiAgICB9XG5cblxuICAgIGEuYXBwZW5kKGltZywgc3BhbilcblxuICAgIGZvcm1EaXYuYXBwZW5kKGlucHV0KVxuICAgIGZvcm0uYXBwZW5kKHN1Ym1pdEJ0bilcbiAgICBmb3JtLmFwcGVuZChmb3JtRGl2KVxuXG5cbiAgICBmb3JtVGFzay5hcHBlbmQodGFza1N1Ym1pdEJ0biwgdGFza0lucHV0KVxuICAgIGZvcm1UYXNrRGl2LmFwcGVuZChmb3JtVGFzaylcblxuICAgIGRpdlNpZGViYXIuYXBwZW5kKGEpXG4gICAgZGl2U2lkZWJhci5hcHBlbmQoYnRuUHJvamVjdClcbiAgICBkaXZTaWRlYmFyLmFwcGVuZChidG5UYXNrKVxuICAgIGRpdlNpZGViYXIuYXBwZW5kKGZvcm0pXG4gICAgZGl2U2lkZWJhci5hcHBlbmQoZm9ybVRhc2tEaXYpXG4gICAgZGl2U2lkZWJhci5hcHBlbmQoaHIpXG4gICAgZGl2U2lkZWJhci5hcHBlbmQodWwpXG4gICAgZGl2U2lkZWJhci5hcHBlbmQoZGl2RGl2ZGUpXG5cblxuXG4gICAgcmV0dXJuIHsgZGl2U2lkZWJhciwgY3JlYXRlTGksIHVsIH1cblxufVxuXG4vLyBNYWtlIGEgU21hbGwgZm9ybSB1bmRlIHRoZSBwcm9qZWN0IEdhbWVwYWRCdXR0b24sIHdoZW4gbmV3IFByb2plY3QgaXMgcHJlc3NlZCBcbi8vIGl0IHNob3dzIHRoZSBsaXR0bGUgZm9ybSBieSBzaG93aW5nIGl0J3MgdmlzYWJsaXR5IGFuZCB3aGVuIHlvdSBwcmVzcyBzdW1iaXQgaXQgY2FsbHMgcHVwc3ViXG4vL3RoZSBjYWxscyBhZGQgTEkgZnVuY3Rpb24iLCJcblxuaW1wb3J0ICcuL2RvbSdcblxuY29uc29sZS5sb2coJ2FtaXQnKTtcblxuIl0sIm5hbWVzIjpbImxpYnMiLCJzcGxpdFN0cmluZyIsInN0cmluZyIsInNwbGl0IiwiY2xhc3NBZGRlciIsImVsZW1lbnQiLCJhcnJheSIsImZvckVhY2giLCJjbGFzc0xpc3QiLCJhZGQiLCJnZXRJRCIsIk1hdGgiLCJyYW5kb20iLCJ0b1N0cmluZyIsInN1YnN0ciIsInN0cmluZ1RvQ2xhc3MiLCJnZXRGb3JtRGF0YSIsImV2ZW50IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsInRhcmdldCIsIk9iamVjdCIsImZyb21FbnRyaWVzIiwiZm9ybVByb3BzIiwicHVic3ViIiwiZXZlbnRzIiwic3Vic2NyaWJlIiwiZXZOYW1lIiwiZm4iLCJjb25zb2xlIiwibG9nIiwidGhpcyIsInB1c2giLCJ1bnN1YnNjcmliZSIsImZpbHRlciIsImYiLCJwdWJsaXNoIiwiZGF0YSIsInRhc2tzIiwidGFza0xvZ2ljIiwiX3Rhc2tzIiwiYWRkVGFzayIsInRhc2siLCJyZW1vdmVUYXNrIiwidGFyZ2V0VGFzayIsInQiLCJsaWJzSGVscGVyIiwiZGl2Qm9keSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImRpdkNvbnRhaW5lciIsImRpdlJvdyIsImRpdkdhcCIsInN0eWxlIiwiYXBwZW5kIiwidGFza09iaiIsInRhc2tDb21wIiwicCIsImJ0bkRvbmUiLCJidG5SZW1vdmUiLCJpbm5lclRleHQiLCJ0YXNrTmFtZSIsImNyZWF0ZVRhc2tEb20iLCJuZXdUYXNrIiwiX3Rhc2tOYW1lIiwiRGF0ZSIsImdldERhdGUiLCJyZW1vdmVTZWxmIiwiZ2V0TmFtZSIsInByb3AiLCJUYXNrIiwiY3JlYXRlVGFza01lbW9yeSIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiY29udGVudCIsImdldEVsZW1lbnRCeUlkIiwiX25hdiIsIm5hdiIsImRpdiIsImEiLCJfc2lkZWJhciIsImRpdlNpZGViYXIiLCJpbWciLCJzcGFuIiwiaHIiLCJ1bCIsImZvcm0iLCJmb3JtRGl2IiwiZm9ybVRhc2siLCJmb3JtVGFza0RpdiIsInRhc2tTdWJtaXRCdG4iLCJ0YXNrSW5wdXQiLCJpbnB1dCIsInN1Ym1pdEJ0biIsImRpdkRpdmRlIiwiYnRuUHJvamVjdCIsImJ0blRhc2siLCJpbnB1dENsYXNzIiwic3VibWl0QnRuQ2xhc3MiLCJ0b29nbGVFbGVtZW50IiwiaWQiLCJjb250YWlucyIsInJlbW92ZSIsImNyZWF0ZUxpIiwidGV4dCIsImxpIiwic3ZnIiwic2V0QXR0cmlidXRlIiwicHJldmVudERlZmF1bHQiLCJyZXNldCIsInF1ZXJ5U2VsZWN0b3IiLCJzaWRlYmFyIl0sInNvdXJjZVJvb3QiOiIifQ==