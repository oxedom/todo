(()=>{"use strict";function e(){function e(e){return e.split(" ")}function t(e,t){t.forEach((t=>{e.classList.add(t)}))}return{getID:function(){return"_"+Math.random().toString(36).substr(2,9)},classAdder:t,splitString:e,stringToClass:function(n,s){t(n,e(s))},getFormData:e=>{const t=new FormData(e.target);return Object.fromEntries(t)},toogleElement:function(e){let t=document.getElementById(e);t.classList.contains("d-none")?t.classList.remove("d-none"):t.classList.add("d-none")}}}const t={events:{},subscribe:function(e,t){console.log(`PUBSUB: someone just subscribed to know about ${e}`),this.events[e]=this.events[e]||[],this.events[e].push(t)},unsubscribe:function(e,t){console.log(`PUBSUB: someone just UNsubscribed from ${e}`),this.events[e]&&(this.events[e]=this.events[e].filter((e=>e!==t)))},publish:function(e,t){console.log(`PUBSUB: Making an broadcast about ${e} with ${t}`),this.events[e]&&this.events[e].forEach((e=>{e(t)}))}};function n(){const n=function(){const e=[];return{addTask:t=>{e.push(t),console.log(e)},removeTask:t=>{e=e.filter((e=>!t))}}}(),s=e(),o=document.createElement("div"),r=document.createElement("div"),a=document.createElement("div"),c=document.createElement("div");return s.stringToClass(o,"col-8 container-sm bg-light card-body"),s.stringToClass(r,"container-md card m-2 p-1 mr-1"),s.stringToClass(a,"container row"),s.stringToClass(c,"col-1 bg-light"),a.style="gap: 10px",r.append(a),o.append(r),t.subscribe("newTask",(e=>{var n;n=function(e){const n=document.createElement("div"),o=document.createElement("p"),r=document.createElement("button"),a=document.createElement("button"),c=document.createElement("hr");return s.stringToClass(o,"m-2 col-xl"),s.stringToClass(r,"btn btn-outline-primary col-sm pl-2"),s.stringToClass(a,"btn btn-outline-danger col-sm"),n.append(o,a,r),r.innerText="DONE",a.innerText="Remove",o.innerText=e.taskName,o.style="flex-grow: 10",n.append(o,a,r,c),r.addEventListener("click",t.publish("handleDone")),a.addEventListener("click",t.publish("handleRemove")),n}(e),a.append(n)})),t.subscribe("newTask",(e=>{!function(e){let s=function(e){let n=e.taskName;return(new Date).getDate(),{removeSelf:()=>{t.publish("removeTask")},getName:e=>n}}(e);n.addTask(s)}(e)})),t.subscribe("removeTask",(e=>n.removeTask)),o}document.addEventListener("DOMContentLoaded",(s=>{let o=document.getElementById("content");const r=function(){const t=e(),n=document.createElement("nav"),s=document.createElement("div"),o=document.createElement("a");return t.stringToClass(n,"navbar navbar-expand-md navbar-dark bg-dark"),t.stringToClass(s,"container-fluid"),t.stringToClass(o,"navbar-brand"),o.innerText="Todolist",s.append(o),n.append(s),n}(),a=function(){const n=e(),s=document.createElement("div"),o=document.createElement("a"),r=document.createElement("img"),a=document.createElement("span"),c=document.createElement("hr"),i=document.createElement("ul"),l=document.createElement("form"),d=document.createElement("div"),u=document.createElement("form"),m=document.createElement("div"),p=document.createElement("button"),b=document.createElement("input"),g=(document.createElement("area"),document.createElement("input")),v=document.createElement("button"),f=document.createElement("div"),E=document.createElement("button"),T=document.createElement("button"),h="form-control",k="btn btn-outline-primary";n.stringToClass(s,"d-flex flex-column flex-shrink-0 p-3 bg-light col-3 border"),n.stringToClass(r,"m-2"),n.stringToClass(o,"d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"),n.stringToClass(a,"fs-4"),n.stringToClass(i,"nav nav-pills flex-column mb-auto"),n.stringToClass(f,"b-example-divider d-flex justify-content-center"),n.stringToClass(E,"btn btn-primay"),n.stringToClass(T,"btn btn-primay m-2"),n.stringToClass(l,"form-group m-2 p-1 input-group d-none"),n.stringToClass(u,"form-group m-2 p-1 input-group d-none"),n.stringToClass(m,"d-flex justify-content-center"),n.stringToClass(g,h),n.stringToClass(v,k),n.stringToClass(p,k),n.stringToClass(b,h),s.style="width: 280px;",a.innerText="Projects",r.style="width: 30px",E.innerText="+ New Project",T.innerText="+ Task",d.style="width: 150px;",m.style="width: 200px",v.innerText="+",p.innerText="+",g.setAttribute("placeholder","New Project"),b.setAttribute("placeholder","New Task"),i.setAttribute("id","projectUl"),r.setAttribute("src","../sandbox/public/todo.svg"),l.setAttribute("action","submit"),l.setAttribute("id","formProject"),u.setAttribute("action","submit"),u.setAttribute("id","formTask"),u.setAttribute("name","taskForm"),b.setAttribute("name","taskName"),g.setAttribute("name","name");const C=function(){const e=[];return{addProject:t=>{e.push(t),console.log(e)}}}();return l.addEventListener("submit",(e=>{e.preventDefault();let s=n.getFormData(e);t.publish("liSubmit",s.name),t.publish("newProject",s),l.reset()})),t.subscribe("newProject",(function(e){let t={name:e.name,dateCreated:(new Date).getDate()};C.addProject(t)})),u.addEventListener("submit",(e=>{e.preventDefault();let s=n.getFormData(e);t.publish("newTask",s),console.log(s),u.reset()})),E.addEventListener("click",(e=>{t.publish("toogleForm","formProject")})),T.addEventListener("click",(e=>{t.publish("toogleTask","formTask")})),t.subscribe("toogleForm",n.toogleElement),t.subscribe("toogleTask",n.toogleElement),t.subscribe("liSubmit",(function(e){const s=document.createElement("li"),o=document.createElement("a");return n.stringToClass(s,"nav-item m-2"),n.stringToClass(o,"nav-link active"),o.innerText=e,s.append(o),t.publish("createLi",s),s.addEventListener("click",(e=>{t.publish("projectClicked",e.target)})),s})),t.subscribe("projectClicked",(function(e){let t=document.getElementById("projectUl").childNodes;for(let e=0;e<t.length;e++)t[e].classList.remove("bg-success"),t[e].childNodes.forEach((e=>{e.classList.remove("bg-success")}));e.classList.add("bg-success")})),t.subscribe("projectClicked",(function(e){let t=document.getElementById("projectUl").childNodes;for(let n=0;n<t.length;n++)t[n].removeAttribute("selected"),t[n].childNodes.forEach((e=>{e.removeAttribute("selected")})),e.setAttribute("selected","true")})),t.subscribe("createLi",(function(e){document.querySelector("ul").append(e)})),o.append(r,a),d.append(g),l.append(v),l.append(d),u.append(p,b),m.append(u),s.append(o),s.append(E),s.append(T),s.append(l),s.append(m),s.append(c),s.append(i),s.append(f),{divSidebar:s}}().divSidebar,c=n();o.append(r);const i=document.createElement("div");i.classList.add("row"),i.append(a),i.append(c),o.append(i)}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFPRyxnQkFBZ0IsWUFDOUJMLEVBQU9FLEdBQU9ELFdBQVc1RyxTQUFRK0csSUFBV0EsRUFBTUMsZ0JBQWdCLFdBQVUsSUFDNUVuRyxFQUFPbUYsYUFBYSxXQUFZLE9BRXhDLElBZ0JBekUsRUFBT0UsVUFBVSxZQUNqQixTQUFnQmlGLEdBQ1p2RixTQUFTOEYsY0FBYyxNQUFNN0QsT0FBT3NELEVBQ3hDLElBR0E3QixFQUFFekIsT0FBTzRCLEVBQUtDLEdBRWRHLEVBQVFoQyxPQUFPcUMsR0FDZk4sRUFBWS9CLE9BQU9zQyxHQUNuQlAsRUFBWS9CLE9BQU9nQyxHQUduQkMsRUFBU2pDLE9BQU9tQyxFQUFlQyxHQUMvQkYsRUFBWWxDLE9BQU9pQyxHQUVuQk4sRUFBVzNCLE9BQU95QixHQUNsQkUsRUFBVzNCLE9BQU93QyxHQUNsQmIsRUFBVzNCLE9BQU95QyxHQUNsQmQsRUFBVzNCLE9BQU8rQixHQUNsQkosRUFBVzNCLE9BQU9rQyxHQUNsQlAsRUFBVzNCLE9BQU9NLEdBQ2xCcUIsRUFBVzNCLE9BQU84QixHQUNsQkgsRUFBVzNCLE9BQU91QyxHQUlYLENBQUVaLGFBRWIsQ0Y3TzZCbUMsR0FBVW5DLFdBQ3JCeEMsRUFBU0YsSUFFZm9DLEVBQVFyQixPQUFPc0IsR0FDZixNQUFNRSxFQUFNekQsU0FBUzRCLGNBQWMsT0FDbkM2QixFQUFJM0UsVUFBVUMsSUFBSSxPQUNsQjBFLEVBQUl4QixPQUFPMEIsR0FDWEYsRUFBSXhCLE9BQU9iLEdBQ1hrQyxFQUFRckIsT0FBT3dCLEVBQUcsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vLi9zcmMvanMvbGlicy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2pzL3B1YnN1Yi5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2pzL3Rhc2tzLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvanMvZG9tLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvanMvbmF2YmFyLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvanMvc2lkZWJhci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhciB9IGZyb20gXCJkYXRlLWZucy9sb2NhbGVcIjtcblxuXG5cblxuZXhwb3J0IGZ1bmN0aW9uIGxpYnMoKSB7XG5cbiAgICBjb25zdCBnZXRGb3JtRGF0YSA9IChldmVudCkgPT4ge1xuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShldmVudC50YXJnZXQpXG4gICAgICAgIGNvbnN0IGZvcm1Qcm9wcyA9IE9iamVjdC5mcm9tRW50cmllcyhmb3JtRGF0YSlcbiAgICAgICAgcmV0dXJuIGZvcm1Qcm9wc1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNwbGl0U3RyaW5nKHN0cmluZykge1xuICAgICAgICByZXR1cm4gc3RyaW5nLnNwbGl0KFwiIFwiKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsYXNzQWRkZXIoZWxlbWVudCwgYXJyYXkpIHtcbiAgICAgICAgYXJyYXkuZm9yRWFjaChzdHJpbmcgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKHN0cmluZylcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3RyaW5nVG9DbGFzcyhlbGVtZW50LCBzdHJpbmcpIHtcbiAgICAgICAgbGV0IGFyciA9IHNwbGl0U3RyaW5nKHN0cmluZylcbiAgICAgICAgY2xhc3NBZGRlcihlbGVtZW50LCBhcnIpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0SUQoKSB7XG4gICAgICAgIHJldHVybiAnXycgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMiwgOSk7XG4gICAgfVxuXG5cblxuICAgIGZ1bmN0aW9uIHRvb2dsZUVsZW1lbnQoaWQpIHtcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZClcbiAgICAgICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkLW5vbmUnKSkge1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkLW5vbmUnKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKVxuICAgICAgICB9XG5cbiAgICB9XG5cblxuXG5cbiAgICByZXR1cm4geyBnZXRJRCwgY2xhc3NBZGRlciwgc3BsaXRTdHJpbmcsIHN0cmluZ1RvQ2xhc3MsIGdldEZvcm1EYXRhLCB0b29nbGVFbGVtZW50IH1cblxufVxuXG5cblxuXG5cblxuXG4iLCJleHBvcnQgY29uc3QgcHVic3ViID0ge1xuICAgIGV2ZW50czoge30sXG4gICAgc3Vic2NyaWJlOiBmdW5jdGlvbiAoZXZOYW1lLCBmbikge1xuICAgICAgICBjb25zb2xlLmxvZyhgUFVCU1VCOiBzb21lb25lIGp1c3Qgc3Vic2NyaWJlZCB0byBrbm93IGFib3V0ICR7ZXZOYW1lfWApO1xuICAgICAgICAvL2FkZCBhbiBldmVudCB3aXRoIGEgbmFtZSBhcyBuZXcgb3IgdG8gZXhpc3RpbmcgbGlzdFxuICAgICAgICB0aGlzLmV2ZW50c1tldk5hbWVdID0gdGhpcy5ldmVudHNbZXZOYW1lXSB8fCBbXTtcbiAgICAgICAgdGhpcy5ldmVudHNbZXZOYW1lXS5wdXNoKGZuKTtcbiAgICB9LFxuICAgIHVuc3Vic2NyaWJlOiBmdW5jdGlvbiAoZXZOYW1lLCBmbikge1xuICAgICAgICBjb25zb2xlLmxvZyhgUFVCU1VCOiBzb21lb25lIGp1c3QgVU5zdWJzY3JpYmVkIGZyb20gJHtldk5hbWV9YCk7XG4gICAgICAgIC8vcmVtb3ZlIGFuIGV2ZW50IGZ1bmN0aW9uIGJ5IG5hbWVcbiAgICAgICAgaWYgKHRoaXMuZXZlbnRzW2V2TmFtZV0pIHtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRzW2V2TmFtZV0gPSB0aGlzLmV2ZW50c1tldk5hbWVdLmZpbHRlcihmID0+IGYgIT09IGZuKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgcHVibGlzaDogZnVuY3Rpb24gKGV2TmFtZSwgZGF0YSkge1xuICAgICAgICBjb25zb2xlLmxvZyhgUFVCU1VCOiBNYWtpbmcgYW4gYnJvYWRjYXN0IGFib3V0ICR7ZXZOYW1lfSB3aXRoICR7ZGF0YX1gKTtcbiAgICAgICAgLy9lbWl0fHB1Ymxpc2h8YW5ub3VuY2UgdGhlIGV2ZW50IHRvIGFueW9uZSB3aG8gaXMgc3Vic2NyaWJlZFxuICAgICAgICBpZiAodGhpcy5ldmVudHNbZXZOYW1lXSkge1xuICAgICAgICAgICAgdGhpcy5ldmVudHNbZXZOYW1lXS5mb3JFYWNoKGYgPT4ge1xuICAgICAgICAgICAgICAgIGYoZGF0YSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn07IiwiaW1wb3J0IHsgbGlicyB9IGZyb20gXCIuL2xpYnNcIjtcbmltcG9ydCB7IHB1YnN1YiB9IGZyb20gJy4vcHVic3ViLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGFza3MoKSB7XG5cblxuICAgIGNvbnN0IFRhc2sgPSBmdW5jdGlvbiAodGFza09iaikge1xuXG4gICAgICAgIGxldCBfdGFza05hbWUgPSB0YXNrT2JqLnRhc2tOYW1lXG4gICAgICAgIGxldCBkYXRlQ3JlYXRlZCA9IG5ldyBEYXRlKCkuZ2V0RGF0ZSgpXG5cbiAgICAgICAgY29uc3QgcmVtb3ZlU2VsZiA9ICgpID0+IHtcbiAgICAgICAgICAgIHB1YnN1Yi5wdWJsaXNoKCdyZW1vdmVUYXNrJylcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGdldE5hbWUgPSAocHJvcCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIF90YXNrTmFtZVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHsgcmVtb3ZlU2VsZiwgZ2V0TmFtZSB9XG4gICAgfVxuXG4gICAgY29uc3QgdGFza0xvZ2ljID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgX3Rhc2tzID0gW11cblxuICAgICAgICBjb25zdCBhZGRUYXNrID0gKHRhc2spID0+IHtcbiAgICAgICAgICAgIF90YXNrcy5wdXNoKHRhc2spXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhfdGFza3MpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmVtb3ZlVGFzayA9ICh0YXJnZXRUYXNrKSA9PiB7XG4gICAgICAgICAgICBfdGFza3MgPSBfdGFza3MuZmlsdGVyKHQgPT4gdCA9ICF0YXJnZXRUYXNrKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHsgYWRkVGFzaywgcmVtb3ZlVGFzayB9XG4gICAgfSkoKVxuXG5cbiAgICBjb25zdCBsaWJzSGVscGVyID0gbGlicygpXG5cbiAgICBjb25zdCBkaXZCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBkaXZDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IGRpdlJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgICBjb25zdCBkaXZHYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gICAgY29uc3QgZGl2Qm9keUNsYXNzID0gJ2NvbC04IGNvbnRhaW5lci1zbSBiZy1saWdodCBjYXJkLWJvZHknXG4gICAgY29uc3QgZGl2Q29udGFpbmVyQ2xhc3MgPSAnY29udGFpbmVyLW1kIGNhcmQgbS0yIHAtMSBtci0xJ1xuICAgIGNvbnN0IGRpdlJvd0NsYXNzID0gJ2NvbnRhaW5lciByb3cnXG5cbiAgICBjb25zdCBkaXZHYXBDbGFzcyA9ICdjb2wtMSBiZy1saWdodCdcblxuXG4gICAgbGlic0hlbHBlci5zdHJpbmdUb0NsYXNzKGRpdkJvZHksIGRpdkJvZHlDbGFzcylcbiAgICBsaWJzSGVscGVyLnN0cmluZ1RvQ2xhc3MoZGl2Q29udGFpbmVyLCBkaXZDb250YWluZXJDbGFzcylcbiAgICBsaWJzSGVscGVyLnN0cmluZ1RvQ2xhc3MoZGl2Um93LCBkaXZSb3dDbGFzcylcblxuICAgIGxpYnNIZWxwZXIuc3RyaW5nVG9DbGFzcyhkaXZHYXAsIGRpdkdhcENsYXNzKVxuXG4gICAgZGl2Um93LnN0eWxlID0gJ2dhcDogMTBweCdcblxuXG5cbiAgICBkaXZDb250YWluZXIuYXBwZW5kKGRpdlJvdylcbiAgICBkaXZCb2R5LmFwcGVuZChkaXZDb250YWluZXIpXG5cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVRhc2tNZW1vcnkodGFza09iaikge1xuICAgICAgICBsZXQgbmV3VGFzayA9IFRhc2sodGFza09iailcbiAgICAgICAgdGFza0xvZ2ljLmFkZFRhc2sobmV3VGFzaylcbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVRhc2tEb20odGFza09iaikge1xuICAgICAgICBjb25zdCB0YXNrQ29tcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgICAgY29uc3QgYnRuRG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgIGNvbnN0IGJ0blJlbW92ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgIGNvbnN0IGhyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHInKVxuXG4gICAgICAgIGNvbnN0IHBDbGFzcyA9ICdtLTIgY29sLXhsJ1xuICAgICAgICBjb25zdCBidG5Eb25lQ2xhc3MgPSAnYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnkgY29sLXNtIHBsLTInXG4gICAgICAgIGNvbnN0IGJ0blJlbW92ZUNsYXNzID0gJ2J0biBidG4tb3V0bGluZS1kYW5nZXIgY29sLXNtJ1xuICAgICAgICBsaWJzSGVscGVyLnN0cmluZ1RvQ2xhc3MocCwgcENsYXNzKVxuICAgICAgICBsaWJzSGVscGVyLnN0cmluZ1RvQ2xhc3MoYnRuRG9uZSwgYnRuRG9uZUNsYXNzKVxuICAgICAgICBsaWJzSGVscGVyLnN0cmluZ1RvQ2xhc3MoYnRuUmVtb3ZlLCBidG5SZW1vdmVDbGFzcylcbiAgICAgICAgdGFza0NvbXAuYXBwZW5kKHAsIGJ0blJlbW92ZSwgYnRuRG9uZSlcbiAgICAgICAgYnRuRG9uZS5pbm5lclRleHQgPSAnRE9ORSdcbiAgICAgICAgYnRuUmVtb3ZlLmlubmVyVGV4dCA9ICdSZW1vdmUnXG5cbiAgICAgICAgcC5pbm5lclRleHQgPSB0YXNrT2JqLnRhc2tOYW1lXG4gICAgICAgIHAuc3R5bGUgPSAnZmxleC1ncm93OiAxMCdcbiAgICAgICAgdGFza0NvbXAuYXBwZW5kKHAsIGJ0blJlbW92ZSwgYnRuRG9uZSwgaHIpXG5cbiAgICAgICAgYnRuRG9uZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHB1YnN1Yi5wdWJsaXNoKCdoYW5kbGVEb25lJykpXG4gICAgICAgIGJ0blJlbW92ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHB1YnN1Yi5wdWJsaXNoKCdoYW5kbGVSZW1vdmUnKSlcblxuICAgICAgICByZXR1cm4gdGFza0NvbXBcblxuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gYXBwZW5kVGFzayh0YXNrKSB7XG4gICAgICAgIGRpdlJvdy5hcHBlbmQodGFzaylcbiAgICB9XG5cbiAgICBwdWJzdWIuc3Vic2NyaWJlKCduZXdUYXNrJywgKGRhdGEpID0+IHtcblxuICAgICAgICBjb25zdCBuZXdUYXNrID0gY3JlYXRlVGFza0RvbShkYXRhKVxuICAgICAgICBhcHBlbmRUYXNrKG5ld1Rhc2spXG4gICAgfSlcblxuICAgIHB1YnN1Yi5zdWJzY3JpYmUoJ25ld1Rhc2snLCAoZGF0YSkgPT4geyBjcmVhdGVUYXNrTWVtb3J5KGRhdGEpIH0pXG4gICAgcHVic3ViLnN1YnNjcmliZSgncmVtb3ZlVGFzaycsICh0YXNrKSA9PiB0YXNrTG9naWMucmVtb3ZlVGFzaylcblxuXG5cblxuICAgIHJldHVybiBkaXZCb2R5XG59IiwiaW1wb3J0IHsgYWRkIH0gZnJvbSBcImRhdGUtZm5zXCI7XG5pbXBvcnQgbmF2YmFyIGZyb20gXCIuL25hdmJhclwiXG5pbXBvcnQgc2lkZWJhciBmcm9tIFwiLi9zaWRlYmFyXCJcbmltcG9ydCB0YXNrcyBmcm9tIFwiLi90YXNrc1wiO1xuXG5leHBvcnQgZGVmYXVsdFxuICAgIChmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vSG9vayBmb3IgZm9yIGNvbnRlbnRcblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKGUpID0+IHtcblxuICAgICAgICAgICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpXG4gICAgICAgICAgICBjb25zdCBfbmF2ID0gbmF2YmFyKClcbiAgICAgICAgICAgIGNvbnN0IF9zaWRlYmFyID0gc2lkZWJhcigpLmRpdlNpZGViYXJcbiAgICAgICAgICAgIGNvbnN0IF90YXNrcyA9IHRhc2tzKClcblxuICAgICAgICAgICAgY29udGVudC5hcHBlbmQoX25hdilcbiAgICAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ3JvdycpXG4gICAgICAgICAgICBkaXYuYXBwZW5kKF9zaWRlYmFyKVxuICAgICAgICAgICAgZGl2LmFwcGVuZChfdGFza3MpXG4gICAgICAgICAgICBjb250ZW50LmFwcGVuZChkaXYpXG4gICAgICAgIH0pXG5cblxuICAgIH0pKClcblxuIiwiXG5cbmltcG9ydCB7IGxpYnMgfSBmcm9tIFwiLi9saWJzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBuYXYoKSB7XG5cbiAgICAvL0lOSVQgTElCU1xuICAgIGNvbnN0IGxpYnNIZWxwZXIgPSBsaWJzKClcblxuICAgIC8vQ1JFQVRFIEVMRU1FTlRTXG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2JylcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuXG4gICAgLy9DTEFTUyBTVFJJTkcgRlJPTSBIVE1MIEJPSUxFUiBQTEFURVxuICAgIGNvbnN0IG5hdkNsYXNzID0gJ25hdmJhciBuYXZiYXItZXhwYW5kLW1kIG5hdmJhci1kYXJrIGJnLWRhcmsnXG4gICAgY29uc3QgZGl2Q2xhc3MgPSAnY29udGFpbmVyLWZsdWlkJ1xuICAgIGNvbnN0IGFDbGFzcyA9ICduYXZiYXItYnJhbmQnXG5cblxuICAgIGxpYnNIZWxwZXIuc3RyaW5nVG9DbGFzcyhuYXYsIG5hdkNsYXNzKVxuICAgIGxpYnNIZWxwZXIuc3RyaW5nVG9DbGFzcyhkaXYsIGRpdkNsYXNzKVxuICAgIGxpYnNIZWxwZXIuc3RyaW5nVG9DbGFzcyhhLCBhQ2xhc3MpXG5cbiAgICAvL0FkZCBUZXh0IENvbnRlbnRcbiAgICBhLmlubmVyVGV4dCA9ICdUb2RvbGlzdCdcblxuICAgIGRpdi5hcHBlbmQoYSlcbiAgICBuYXYuYXBwZW5kKGRpdilcblxuICAgIHJldHVybiBuYXZcblxufSIsIlxuXG5pbXBvcnQgeyBpdCwgdGEgfSBmcm9tIFwiZGF0ZS1mbnMvbG9jYWxlXCI7XG5pbXBvcnQgeyBsaWJzIH0gZnJvbSBcIi4vbGlic1wiO1xuaW1wb3J0IHsgcHVic3ViIH0gZnJvbSAnLi9wdWJzdWIuanMnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2lkZWJhcigpIHtcblxuICAgIC8vSU5JVCBMSUJTXG4gICAgY29uc3QgbGlic0hlbHBlciA9IGxpYnMoKVxuXG4gICAgLy9DUkVBVEUgRUxFTUVOVFNcbiAgICBjb25zdCBkaXZTaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGNvbnN0IGhyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHInKTtcbiAgICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJylcblxuICAgIGNvbnN0IGZvcm1Qcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXG4gICAgY29uc3QgZm9ybURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgICBjb25zdCBmb3JtVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxuICAgIGNvbnN0IGZvcm1UYXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCB0YXNrU3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBjb25zdCB0YXNrSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgY29uc3QgdGFza1RleHRBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXJlYScpXG5cblxuXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAvL0RpdmRlclxuICAgIGNvbnN0IGRpdkRpdmRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgYnRuUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IGJ0blRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuXG4gICAgLy9DTEFTUyBTVFJJTkcgRlJPTSBIVE1MIEJPSUxFUiBQTEFURVxuICAgIGNvbnN0IGRpdlNpZGViYXJDbGFzcyA9ICdkLWZsZXggZmxleC1jb2x1bW4gZmxleC1zaHJpbmstMCBwLTMgYmctbGlnaHQgY29sLTMgYm9yZGVyJ1xuICAgIGNvbnN0IGFDbGFzcyA9IFwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBtYi0zIG1iLW1kLTAgbWUtbWQtYXV0byBsaW5rLWRhcmsgdGV4dC1kZWNvcmF0aW9uLW5vbmVcIlxuICAgIGNvbnN0IGltZ0NsYXNzID0gJ20tMidcbiAgICBjb25zdCBzcGFuQ2xhc3MgPSAnZnMtNCdcbiAgICAvLyBjb25zdCBockNsYXNzID0gJydcbiAgICBjb25zdCB1bENsYXNzID0gJ25hdiBuYXYtcGlsbHMgZmxleC1jb2x1bW4gbWItYXV0bydcbiAgICBjb25zdCBkaXZEaXZkZUNsYXNzID0gJ2ItZXhhbXBsZS1kaXZpZGVyIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyJ1xuICAgIGNvbnN0IGJ0blByb2plY3RDbGFzcyA9ICdidG4gYnRuLXByaW1heSdcbiAgICBjb25zdCBidG5UYXNrQ2xhc3MgPSAnYnRuIGJ0bi1wcmltYXkgbS0yJ1xuICAgIGNvbnN0IGZvcm1Qcm9qZWN0Q2xhc3MgPSAnZm9ybS1ncm91cCBtLTIgcC0xIGlucHV0LWdyb3VwIGQtbm9uZSdcbiAgICBjb25zdCBpbnB1dENsYXNzID0gJ2Zvcm0tY29udHJvbCdcbiAgICBjb25zdCBzdWJtaXRCdG5DbGFzcyA9ICdidG4gYnRuLW91dGxpbmUtcHJpbWFyeSdcbiAgICBjb25zdCBmb3JtVGFza0NsYXNzID0gJ2Zvcm0tZ3JvdXAgbS0yIHAtMSBpbnB1dC1ncm91cCBkLW5vbmUnXG4gICAgY29uc3QgZm9ybVRhc2tEaXZDbGFzcyA9ICdkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlcidcbiAgICAvL0NMQVNTSU5HIEVMRU1FTlRTXG5cbiAgICBsaWJzSGVscGVyLnN0cmluZ1RvQ2xhc3MoZGl2U2lkZWJhciwgZGl2U2lkZWJhckNsYXNzKVxuICAgIGxpYnNIZWxwZXIuc3RyaW5nVG9DbGFzcyhpbWcsIGltZ0NsYXNzKVxuICAgIGxpYnNIZWxwZXIuc3RyaW5nVG9DbGFzcyhhLCBhQ2xhc3MpXG4gICAgbGlic0hlbHBlci5zdHJpbmdUb0NsYXNzKHNwYW4sIHNwYW5DbGFzcylcbiAgICAvLyBsaWJzSGVscGVyLnN0cmluZ1RvQ2xhc3MoaHIsIGhyQ2xhc3MpXG4gICAgbGlic0hlbHBlci5zdHJpbmdUb0NsYXNzKHVsLCB1bENsYXNzKVxuICAgIGxpYnNIZWxwZXIuc3RyaW5nVG9DbGFzcyhkaXZEaXZkZSwgZGl2RGl2ZGVDbGFzcylcbiAgICBsaWJzSGVscGVyLnN0cmluZ1RvQ2xhc3MoYnRuUHJvamVjdCwgYnRuUHJvamVjdENsYXNzKVxuICAgIGxpYnNIZWxwZXIuc3RyaW5nVG9DbGFzcyhidG5UYXNrLCBidG5UYXNrQ2xhc3MpXG4gICAgbGlic0hlbHBlci5zdHJpbmdUb0NsYXNzKGZvcm1Qcm9qZWN0LCBmb3JtUHJvamVjdENsYXNzKVxuICAgIGxpYnNIZWxwZXIuc3RyaW5nVG9DbGFzcyhmb3JtVGFzaywgZm9ybVRhc2tDbGFzcylcbiAgICBsaWJzSGVscGVyLnN0cmluZ1RvQ2xhc3MoZm9ybVRhc2tEaXYsIGZvcm1UYXNrRGl2Q2xhc3MpXG5cbiAgICBsaWJzSGVscGVyLnN0cmluZ1RvQ2xhc3MoaW5wdXQsIGlucHV0Q2xhc3MpXG4gICAgbGlic0hlbHBlci5zdHJpbmdUb0NsYXNzKHN1Ym1pdEJ0biwgc3VibWl0QnRuQ2xhc3MpXG4gICAgbGlic0hlbHBlci5zdHJpbmdUb0NsYXNzKHRhc2tTdWJtaXRCdG4sIHN1Ym1pdEJ0bkNsYXNzKVxuICAgIGxpYnNIZWxwZXIuc3RyaW5nVG9DbGFzcyh0YXNrSW5wdXQsIGlucHV0Q2xhc3MpXG5cblxuICAgIC8vU0VUVElOR1MgUFJPUFNcbiAgICBkaXZTaWRlYmFyLnN0eWxlID0gJ3dpZHRoOiAyODBweDsnXG4gICAgc3Bhbi5pbm5lclRleHQgPSAnUHJvamVjdHMnXG4gICAgaW1nLnN0eWxlID0gJ3dpZHRoOiAzMHB4J1xuICAgIGJ0blByb2plY3QuaW5uZXJUZXh0ID0gJysgTmV3IFByb2plY3QnXG4gICAgYnRuVGFzay5pbm5lclRleHQgPSAnKyBUYXNrJ1xuICAgIGZvcm1EaXYuc3R5bGUgPSAnd2lkdGg6IDE1MHB4OydcbiAgICBmb3JtVGFza0Rpdi5zdHlsZSA9ICd3aWR0aDogMjAwcHgnXG4gICAgc3VibWl0QnRuLmlubmVyVGV4dCA9ICcrJ1xuICAgIHRhc2tTdWJtaXRCdG4uaW5uZXJUZXh0ID0gJysnXG5cblxuICAgIC8vU0VUVElORyBBVFRTXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdOZXcgUHJvamVjdCcpXG4gICAgdGFza0lucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnTmV3IFRhc2snKVxuICAgIHVsLnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamVjdFVsJylcbiAgICBpbWcuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi4vc2FuZGJveC9wdWJsaWMvdG9kby5zdmcnKVxuICAgIGZvcm1Qcm9qZWN0LnNldEF0dHJpYnV0ZSgnYWN0aW9uJywgJ3N1Ym1pdCcpXG4gICAgZm9ybVByb2plY3Quc2V0QXR0cmlidXRlKCdpZCcsICdmb3JtUHJvamVjdCcpXG4gICAgZm9ybVRhc2suc2V0QXR0cmlidXRlKCdhY3Rpb24nLCAnc3VibWl0JylcbiAgICBmb3JtVGFzay5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Zvcm1UYXNrJylcbiAgICBmb3JtVGFzay5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAndGFza0Zvcm0nKVxuICAgIHRhc2tJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAndGFza05hbWUnKVxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICduYW1lJylcblxuXG4gICAgY29uc3Qgc2lkZWJhck1lbW9yeSA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RzID0gW11cblxuICAgICAgICBjb25zdCBhZGRQcm9qZWN0ID0gKHApID0+IHtcbiAgICAgICAgICAgIHByb2plY3RzLnB1c2gocClcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7IGFkZFByb2plY3QgfVxuXG4gICAgfVxuXG4gICAgKSgpXG5cbiAgICBjb25zdCBQcm9qZWN0ID0gZnVuY3Rpb24gKHByb2plY3ROYW1lKSB7XG4gICAgICAgIGxldCBuYW1lID0gcHJvamVjdE5hbWUubmFtZVxuICAgICAgICBsZXQgZGF0ZUNyZWF0ZWQgPSBuZXcgRGF0ZSgpLmdldERhdGUoKVxuXG4gICAgICAgIHJldHVybiB7IG5hbWUsIGRhdGVDcmVhdGVkIH1cbiAgICB9XG5cblxuICAgIC8vRVZFTlQgTElTVE5FUlNcblxuICAgIGZvcm1Qcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBsZXQgZGF0YSA9IGxpYnNIZWxwZXIuZ2V0Rm9ybURhdGEoZSlcbiAgICAgICAgcHVic3ViLnB1Ymxpc2goJ2xpU3VibWl0JywgZGF0YS5uYW1lKVxuICAgICAgICBwdWJzdWIucHVibGlzaCgnbmV3UHJvamVjdCcsIGRhdGEpXG4gICAgICAgIGZvcm1Qcm9qZWN0LnJlc2V0KClcbiAgICB9KVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlTmV3UHJvamVjdChkYXRhKSB7XG4gICAgICAgIGxldCBuZXdQID0gUHJvamVjdChkYXRhKVxuICAgICAgICBzaWRlYmFyTWVtb3J5LmFkZFByb2plY3QobmV3UClcbiAgICB9XG5cbiAgICBwdWJzdWIuc3Vic2NyaWJlKCduZXdQcm9qZWN0JywgaGFuZGxlTmV3UHJvamVjdClcblxuICAgIGZvcm1UYXNrLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBsZXQgZGF0YSA9IGxpYnNIZWxwZXIuZ2V0Rm9ybURhdGEoZSlcbiAgICAgICAgcHVic3ViLnB1Ymxpc2goJ25ld1Rhc2snLCBkYXRhKVxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgZm9ybVRhc2sucmVzZXQoKVxuICAgIH0pXG5cblxuXG4gICAgYnRuUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIHB1YnN1Yi5wdWJsaXNoKCd0b29nbGVGb3JtJywgJ2Zvcm1Qcm9qZWN0JylcbiAgICB9KVxuXG4gICAgYnRuVGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIHB1YnN1Yi5wdWJsaXNoKCd0b29nbGVUYXNrJywgJ2Zvcm1UYXNrJylcbiAgICB9KVxuXG5cblxuICAgIHB1YnN1Yi5zdWJzY3JpYmUoJ3Rvb2dsZUZvcm0nLCBsaWJzSGVscGVyLnRvb2dsZUVsZW1lbnQpXG4gICAgcHVic3ViLnN1YnNjcmliZSgndG9vZ2xlVGFzaycsIGxpYnNIZWxwZXIudG9vZ2xlRWxlbWVudClcblxuICAgIHB1YnN1Yi5zdWJzY3JpYmUoJ2xpU3VibWl0JywgY3JlYXRlTGkpXG5cbiAgICBmdW5jdGlvbiBjcmVhdGVMaSh0ZXh0KSB7XG5cbiAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuXG5cblxuICAgICAgICBjb25zdCBsaUNsYXNzID0gJ25hdi1pdGVtIG0tMidcbiAgICAgICAgY29uc3QgYUNMYXNzID0gJ25hdi1saW5rIGFjdGl2ZSdcblxuXG4gICAgICAgIC8vIGNsYXNzZXMgXG4gICAgICAgIGxpYnNIZWxwZXIuc3RyaW5nVG9DbGFzcyhsaSwgbGlDbGFzcylcbiAgICAgICAgbGlic0hlbHBlci5zdHJpbmdUb0NsYXNzKGEsIGFDTGFzcylcblxuXG5cbiAgICAgICAgLy9hIGxpbmsgUHJvcHNcbiAgICAgICAgYS5pbm5lclRleHQgPSB0ZXh0XG5cblxuXG4gICAgICAgIGxpLmFwcGVuZChhKVxuXG4gICAgICAgIHB1YnN1Yi5wdWJsaXNoKCdjcmVhdGVMaScsIGxpKVxuICAgICAgICBsaS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7IHB1YnN1Yi5wdWJsaXNoKCdwcm9qZWN0Q2xpY2tlZCcsIGUudGFyZ2V0KSB9KVxuICAgICAgICByZXR1cm4gbGlcbiAgICB9XG5cblxuICAgIHB1YnN1Yi5zdWJzY3JpYmUoJ3Byb2plY3RDbGlja2VkJywgY2hhbmdlQnRuQ29sb3IpXG5cbiAgICBwdWJzdWIuc3Vic2NyaWJlKCdwcm9qZWN0Q2xpY2tlZCcsIHNldFNlbGVjdGVkTGkpXG5cblxuICAgIGZ1bmN0aW9uIHNldFNlbGVjdGVkTGkodGFyZ2V0KSB7XG4gICAgICAgIGxldCBsaUxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdFVsJykuY2hpbGROb2Rlc1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbGlMaXN0Lmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgbGlMaXN0W2luZGV4XS5yZW1vdmVBdHRyaWJ1dGUoJ3NlbGVjdGVkJylcbiAgICAgICAgICAgIGxpTGlzdFtpbmRleF0uY2hpbGROb2Rlcy5mb3JFYWNoKGNoaWxkID0+IHsgY2hpbGQucmVtb3ZlQXR0cmlidXRlKCdzZWxlY3RlZCcpIH0pXG4gICAgICAgICAgICB0YXJnZXQuc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsICd0cnVlJylcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbiAgICBmdW5jdGlvbiBjaGFuZ2VCdG5Db2xvcih0YXJnZXQpIHtcbiAgICAgICAgbGV0IGxpTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0VWwnKS5jaGlsZE5vZGVzXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBsaUxpc3QubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBsaUxpc3RbaW5kZXhdLmNsYXNzTGlzdC5yZW1vdmUoJ2JnLXN1Y2Nlc3MnKVxuICAgICAgICAgICAgbGlMaXN0W2luZGV4XS5jaGlsZE5vZGVzLmZvckVhY2goY2hpbGQgPT4geyBjaGlsZC5jbGFzc0xpc3QucmVtb3ZlKCdiZy1zdWNjZXNzJykgfSlcblxuICAgICAgICB9XG4gICAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKCdiZy1zdWNjZXNzJylcbiAgICB9XG5cblxuXG4gICAgcHVic3ViLnN1YnNjcmliZSgnY3JlYXRlTGknLCBiaW5kTGkpXG4gICAgZnVuY3Rpb24gYmluZExpKGxpKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3VsJykuYXBwZW5kKGxpKVxuICAgIH1cblxuXG4gICAgYS5hcHBlbmQoaW1nLCBzcGFuKVxuXG4gICAgZm9ybURpdi5hcHBlbmQoaW5wdXQpXG4gICAgZm9ybVByb2plY3QuYXBwZW5kKHN1Ym1pdEJ0bilcbiAgICBmb3JtUHJvamVjdC5hcHBlbmQoZm9ybURpdilcblxuXG4gICAgZm9ybVRhc2suYXBwZW5kKHRhc2tTdWJtaXRCdG4sIHRhc2tJbnB1dClcbiAgICBmb3JtVGFza0Rpdi5hcHBlbmQoZm9ybVRhc2spXG5cbiAgICBkaXZTaWRlYmFyLmFwcGVuZChhKVxuICAgIGRpdlNpZGViYXIuYXBwZW5kKGJ0blByb2plY3QpXG4gICAgZGl2U2lkZWJhci5hcHBlbmQoYnRuVGFzaylcbiAgICBkaXZTaWRlYmFyLmFwcGVuZChmb3JtUHJvamVjdClcbiAgICBkaXZTaWRlYmFyLmFwcGVuZChmb3JtVGFza0RpdilcbiAgICBkaXZTaWRlYmFyLmFwcGVuZChocilcbiAgICBkaXZTaWRlYmFyLmFwcGVuZCh1bClcbiAgICBkaXZTaWRlYmFyLmFwcGVuZChkaXZEaXZkZSlcblxuXG5cbiAgICByZXR1cm4geyBkaXZTaWRlYmFyIH1cblxufVxuXG4vLyBNYWtlIGEgU21hbGwgZm9ybSB1bmRlIHRoZSBwcm9qZWN0IEdhbWVwYWRCdXR0b24sIHdoZW4gbmV3IFByb2plY3QgaXMgcHJlc3NlZCBcbi8vIGl0IHNob3dzIHRoZSBsaXR0bGUgZm9ybSBieSBzaG93aW5nIGl0J3MgdmlzYWJsaXR5IGFuZCB3aGVuIHlvdSBwcmVzcyBzdW1iaXQgaXQgY2FsbHMgcHVwc3ViXG4vL3RoZSBjYWxscyBhZGQgTEkgZnVuY3Rpb24iXSwibmFtZXMiOlsibGlicyIsInNwbGl0U3RyaW5nIiwic3RyaW5nIiwic3BsaXQiLCJjbGFzc0FkZGVyIiwiZWxlbWVudCIsImFycmF5IiwiZm9yRWFjaCIsImNsYXNzTGlzdCIsImFkZCIsImdldElEIiwiTWF0aCIsInJhbmRvbSIsInRvU3RyaW5nIiwic3Vic3RyIiwic3RyaW5nVG9DbGFzcyIsImdldEZvcm1EYXRhIiwiZXZlbnQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwidGFyZ2V0IiwiT2JqZWN0IiwiZnJvbUVudHJpZXMiLCJmb3JtUHJvcHMiLCJ0b29nbGVFbGVtZW50IiwiaWQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY29udGFpbnMiLCJyZW1vdmUiLCJwdWJzdWIiLCJldmVudHMiLCJzdWJzY3JpYmUiLCJldk5hbWUiLCJmbiIsImNvbnNvbGUiLCJsb2ciLCJ0aGlzIiwicHVzaCIsInVuc3Vic2NyaWJlIiwiZmlsdGVyIiwiZiIsInB1Ymxpc2giLCJkYXRhIiwidGFza3MiLCJ0YXNrTG9naWMiLCJfdGFza3MiLCJhZGRUYXNrIiwidGFzayIsInJlbW92ZVRhc2siLCJ0YXJnZXRUYXNrIiwidCIsImxpYnNIZWxwZXIiLCJkaXZCb2R5IiwiY3JlYXRlRWxlbWVudCIsImRpdkNvbnRhaW5lciIsImRpdlJvdyIsImRpdkdhcCIsInN0eWxlIiwiYXBwZW5kIiwidGFza09iaiIsInRhc2tDb21wIiwicCIsImJ0bkRvbmUiLCJidG5SZW1vdmUiLCJociIsImlubmVyVGV4dCIsInRhc2tOYW1lIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNyZWF0ZVRhc2tEb20iLCJuZXdUYXNrIiwiX3Rhc2tOYW1lIiwiRGF0ZSIsImdldERhdGUiLCJyZW1vdmVTZWxmIiwiZ2V0TmFtZSIsInByb3AiLCJUYXNrIiwiY3JlYXRlVGFza01lbW9yeSIsImUiLCJjb250ZW50IiwiX25hdiIsIm5hdiIsImRpdiIsImEiLCJfc2lkZWJhciIsImRpdlNpZGViYXIiLCJpbWciLCJzcGFuIiwidWwiLCJmb3JtUHJvamVjdCIsImZvcm1EaXYiLCJmb3JtVGFzayIsImZvcm1UYXNrRGl2IiwidGFza1N1Ym1pdEJ0biIsInRhc2tJbnB1dCIsImlucHV0Iiwic3VibWl0QnRuIiwiZGl2RGl2ZGUiLCJidG5Qcm9qZWN0IiwiYnRuVGFzayIsImlucHV0Q2xhc3MiLCJzdWJtaXRCdG5DbGFzcyIsInNldEF0dHJpYnV0ZSIsInNpZGViYXJNZW1vcnkiLCJwcm9qZWN0cyIsImFkZFByb2plY3QiLCJwcmV2ZW50RGVmYXVsdCIsIm5hbWUiLCJyZXNldCIsIm5ld1AiLCJkYXRlQ3JlYXRlZCIsInRleHQiLCJsaSIsImxpTGlzdCIsImNoaWxkTm9kZXMiLCJpbmRleCIsImxlbmd0aCIsImNoaWxkIiwicmVtb3ZlQXR0cmlidXRlIiwicXVlcnlTZWxlY3RvciIsInNpZGViYXIiXSwic291cmNlUm9vdCI6IiJ9