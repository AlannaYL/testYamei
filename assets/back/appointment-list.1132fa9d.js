import"../main.c53b85db.js";/* empty css                  */import"https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm";const x=document.querySelector("#appointmentTable");let d=1;function L(){axios.get("https://yameiproject.onrender.com/Appointment").then(function(c){const m=c.data;function g(){m.forEach(function(a){let b="";a.attendStatus==!0?b="\u5DF2\u770B\u8A3A":b="\u672A\u770B\u8A3A";const t=x.insertRow(),f=t.insertCell(0),s=t.insertCell(1),e=t.insertCell(2),i=t.insertCell(3),u=t.insertCell(4),p=t.insertCell(5);f.classList.add("border","border-slate-300","px-3","text-center"),f.textContent=d,d++,s.classList.add("border","border-slate-300","px-3","text-center"),s.textContent=a.name,e.classList.add("border","border-slate-300","px-3","text-center"),e.textContent=a.sex,i.classList.add("border","border-slate-300","px-3","text-center"),i.textContent=a.birth,u.classList.add("border","border-slate-300","px-3","text-center","underline","text-primary-300");const l=document.createElement("a");l.href="#",l.setAttribute("data-href",a.id),l.textContent="\u75C5\u6B77",u.appendChild(l),p.classList.add("border","border-slate-300","px-3","text-center");const r=document.createElement("input");r.type="button",r.value=b,r.setAttribute("data-id",a.id),r.setAttribute("data-status",a.attendStatus),r.classList.add("px-3","ml-1","rounded-lg","text-white","bg-primary-300","hover:bg-primary-400","cursor-pointer","attendStatus"),p.appendChild(r)})}g(),document.querySelector("#searchDate").addEventListener("change",function(a){a.preventDefault();let b=a.target.value;x.innerHTML="",d=1,m.forEach(function(t,f){if(b==""){let s="";t.attendStatus==!0?s="\u5DF2\u770B\u8A3A":s="\u672A\u770B\u8A3A";const e=x.insertRow(),i=e.insertCell(0),u=e.insertCell(1),p=e.insertCell(2),l=e.insertCell(3),r=e.insertCell(4),h=e.insertCell(5);i.classList.add("border","border-slate-300","px-3","text-center"),i.textContent=d,d++,u.classList.add("border","border-slate-300","px-3","text-center"),u.textContent=t.name,p.classList.add("border","border-slate-300","px-3","text-center"),p.textContent=t.sex,l.classList.add("border","border-slate-300","px-3","text-center"),l.textContent=t.birth,r.classList.add("border","border-slate-300","px-3","text-center","underline","text-primary-300");const o=document.createElement("a");o.href="#",o.setAttribute("data-href",t.id),o.textContent="\u75C5\u6B77",r.appendChild(o),h.classList.add("border","border-slate-300","px-3","text-center");const n=document.createElement("input");n.type="button",n.value=s,n.setAttribute("data-id",t.id),n.setAttribute("data-status",t.attendStatus),n.classList.add("px-3","ml-1","rounded-lg","text-white","bg-primary-300","hover:bg-primary-400","cursor-pointer","attendStatus"),h.appendChild(n)}else if(b==t.date){let s="";t.attendStatus==!0?s="\u5DF2\u770B\u8A3A":s="\u672A\u770B\u8A3A";const e=x.insertRow(),i=e.insertCell(0),u=e.insertCell(1),p=e.insertCell(2),l=e.insertCell(3),r=e.insertCell(4),h=e.insertCell(5);i.classList.add("border","border-slate-300","px-3","text-center"),i.textContent=d,d++,u.classList.add("border","border-slate-300","px-3","text-center"),u.textContent=t.name,p.classList.add("border","border-slate-300","px-3","text-center"),p.textContent=t.sex,l.classList.add("border","border-slate-300","px-3","text-center"),l.textContent=t.birth,r.classList.add("border","border-slate-300","px-3","text-center","underline","text-primary-300");const o=document.createElement("a");o.href="#",o.setAttribute("data-href",t.id),o.textContent="\u75C5\u6B77",r.appendChild(o),h.classList.add("border","border-slate-300","px-3","text-center");const n=document.createElement("input");n.type="button",n.value=s,n.setAttribute("data-id",t.id),n.setAttribute("data-status",t.attendStatus),n.classList.add("px-3","ml-1","rounded-lg","text-white","bg-primary-300","hover:bg-primary-400","cursor-pointer","attendStatus"),h.appendChild(n)}})})})}L();x.addEventListener("click",function(c){c.preventDefault();let m=c.target.getAttribute("data-id");c.target.getAttribute("data-status")=="true"?(axios.patch(`https://yameiproject.onrender.com/Appointment/${m}`,{attendStatus:!1}),x.innerHTML="",d=1,L()):(axios.patch(`https://yameiproject.onrender.com/Appointment/${m}`,{attendStatus:!0}),x.innerHTML="",d=1,L()),c.target.getAttribute("data-href")!=null&&(window.location.href="yaMeiProject/back/appointment-record.html")});const S=document.querySelector(".num"),w=document.querySelector(".nextBtn");let C=0;w.addEventListener("click",function(c){C++,S.textContent=`${C}`,localStorage.setItem("callNumber",C.toString())});const A=document.querySelector(".zeroBtn");A.addEventListener("click",function(c){C=0,S.textContent=`${C}`,localStorage.setItem("callNumber",C.toString())});