import"../main.c53b85db.js";/* empty css                  */import L from"https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm";const x=document.querySelector("#appointmentTable");let d=1;function g(){L.get("https://yameiproject.onrender.com/Appointment").then(function(c){const m=c.data;function S(){m.forEach(function(s){let b="";s.attendStatus==!0?b="\u5DF2\u770B\u8A3A":b="\u672A\u770B\u8A3A";const t=x.insertRow(),f=t.insertCell(0),a=t.insertCell(1),e=t.insertCell(2),i=t.insertCell(3),u=t.insertCell(4),p=t.insertCell(5);f.classList.add("border","border-slate-300","px-3","text-center"),f.textContent=d,d++,a.classList.add("border","border-slate-300","px-3","text-center"),a.textContent=s.name,e.classList.add("border","border-slate-300","px-3","text-center"),e.textContent=s.sex,i.classList.add("border","border-slate-300","px-3","text-center"),i.textContent=s.birth,u.classList.add("border","border-slate-300","px-3","text-center","underline","text-primary-300");const o=document.createElement("a");o.href="#",o.setAttribute("data-href",s.id),o.textContent="\u75C5\u6B77",u.appendChild(o),p.classList.add("border","border-slate-300","px-3","text-center");const r=document.createElement("input");r.type="button",r.value=b,r.setAttribute("data-id",s.id),r.setAttribute("data-status",s.attendStatus),r.classList.add("px-3","ml-1","rounded-lg","text-white","bg-primary-300","hover:bg-primary-400","cursor-pointer","attendStatus"),p.appendChild(r)})}S(),document.querySelector("#searchDate").addEventListener("change",function(s){s.preventDefault();const b=s.target.value;x.innerHTML="",d=1,m.forEach(function(t,f){if(b==""){let a="";t.attendStatus==!0?a="\u5DF2\u770B\u8A3A":a="\u672A\u770B\u8A3A";const e=x.insertRow(),i=e.insertCell(0),u=e.insertCell(1),p=e.insertCell(2),o=e.insertCell(3),r=e.insertCell(4),h=e.insertCell(5);i.classList.add("border","border-slate-300","px-3","text-center"),i.textContent=d,d++,u.classList.add("border","border-slate-300","px-3","text-center"),u.textContent=t.name,p.classList.add("border","border-slate-300","px-3","text-center"),p.textContent=t.sex,o.classList.add("border","border-slate-300","px-3","text-center"),o.textContent=t.birth,r.classList.add("border","border-slate-300","px-3","text-center","underline","text-primary-300");const l=document.createElement("a");l.href="#",l.setAttribute("data-href",t.id),l.textContent="\u75C5\u6B77",r.appendChild(l),h.classList.add("border","border-slate-300","px-3","text-center");const n=document.createElement("input");n.type="button",n.value=a,n.setAttribute("data-id",t.id),n.setAttribute("data-status",t.attendStatus),n.classList.add("px-3","ml-1","rounded-lg","text-white","bg-primary-300","hover:bg-primary-400","cursor-pointer","attendStatus"),h.appendChild(n)}else if(b==t.date){let a="";t.attendStatus==!0?a="\u5DF2\u770B\u8A3A":a="\u672A\u770B\u8A3A";const e=x.insertRow(),i=e.insertCell(0),u=e.insertCell(1),p=e.insertCell(2),o=e.insertCell(3),r=e.insertCell(4),h=e.insertCell(5);i.classList.add("border","border-slate-300","px-3","text-center"),i.textContent=d,d++,u.classList.add("border","border-slate-300","px-3","text-center"),u.textContent=t.name,p.classList.add("border","border-slate-300","px-3","text-center"),p.textContent=t.sex,o.classList.add("border","border-slate-300","px-3","text-center"),o.textContent=t.birth,r.classList.add("border","border-slate-300","px-3","text-center","underline","text-primary-300");const l=document.createElement("a");l.href="#",l.setAttribute("data-href",t.id),l.textContent="\u75C5\u6B77",r.appendChild(l),h.classList.add("border","border-slate-300","px-3","text-center");const n=document.createElement("input");n.type="button",n.value=a,n.setAttribute("data-id",t.id),n.setAttribute("data-status",t.attendStatus),n.classList.add("px-3","ml-1","rounded-lg","text-white","bg-primary-300","hover:bg-primary-400","cursor-pointer","attendStatus"),h.appendChild(n)}})})})}g();x.addEventListener("click",function(c){c.preventDefault();const m=c.target.getAttribute("data-id");c.target.getAttribute("data-status")=="true"?(L.patch(`https://yameiproject.onrender.com/Appointment/${m}`,{attendStatus:!1}),x.innerHTML="",d=1,g()):(L.patch(`https://yameiproject.onrender.com/Appointment/${m}`,{attendStatus:!0}),x.innerHTML="",d=1,g()),c.target.getAttribute("data-href")==null||(window.location.href="yaMeiProject/back/appointment-record.html")});const y=document.querySelector(".num"),A=document.querySelector(".nextBtn");let C=0;A.addEventListener("click",function(c){C++,y.textContent=`${C}`,localStorage.setItem("callNumber",C.toString())});const v=document.querySelector(".zeroBtn");v.addEventListener("click",function(c){C=0,y.textContent=`${C}`,localStorage.setItem("callNumber",C.toString())});
