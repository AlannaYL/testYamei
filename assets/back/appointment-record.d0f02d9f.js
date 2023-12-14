import"../main.c53b85db.js";/* empty css                  */import f from"https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm";const L=document.querySelector(".name"),E=document.querySelector(".idNum"),v=document.querySelector(".birth"),g=document.querySelector(".time"),w=document.querySelector(".cause"),m=document.querySelector("#appointmentTable");let u=1;f.get("https://yameiproject.onrender.com/Appointment").then(function(h){const C=h.data;function i(){C.forEach(function(c){const e=m.insertRow(),b=e.insertCell(0),t=e.insertCell(1),d=e.insertCell(2),s=e.insertCell(3),r=e.insertCell(4),n=e.insertCell(5),a=e.insertCell(6);b.classList.add("border","border-slate-300","px-3","text-center"),b.textContent=u,u++,t.classList.add("border","border-slate-300","px-3","text-center"),t.textContent=c.name,d.classList.add("border","border-slate-300","px-3","text-center"),d.textContent=c.sex,s.classList.add("border","border-slate-300","px-3","text-center"),s.textContent=c.birth,r.classList.add("border","border-slate-300","px-3","text-center"),r.textContent=c.time,n.classList.add("border","border-slate-300","px-3","text-center"),n.textContent=c.symptom,a.classList.add("border","border-slate-300","px-3","text-center");const l=document.createElement("input");l.type="button",l.value="\u4FEE\u6539",l.classList.add("px-3","rounded-lg","text-white","bg-primary-300","hover:bg-primary-400","cursor-pointer"),a.appendChild(l);const o=document.createElement("input");o.type="button",o.value="\u522A\u9664",o.classList.add("px-3","ml-1","rounded-lg","text-white","bg-primary-300","hover:bg-primary-400","cursor-pointer"),a.appendChild(o)})}i(),document.querySelector("#searchDate").addEventListener("change",function(c){m.innerHTML="",u=1,C.forEach(function(e,b){if(c.target.value==""){const t=m.insertRow(),d=t.insertCell(0),s=t.insertCell(1),r=t.insertCell(2),n=t.insertCell(3),a=t.insertCell(4),l=t.insertCell(5),o=t.insertCell(6);d.classList.add("border","border-slate-300","px-3","text-center"),d.textContent=u,u++,s.classList.add("border","border-slate-300","px-3","text-center"),s.textContent=e.name,r.classList.add("border","border-slate-300","px-3","text-center"),r.textContent=e.sex,n.classList.add("border","border-slate-300","px-3","text-center"),n.textContent=e.birth,a.classList.add("border","border-slate-300","px-3","text-center"),a.textContent=e.time,l.classList.add("border","border-slate-300","px-3","text-center"),l.textContent=e.symptom,o.classList.add("border","border-slate-300","px-3","text-center");const p=document.createElement("input");p.type="button",p.value="\u4FEE\u6539",p.classList.add("px-3","rounded-lg","text-white","bg-primary-300","hover:bg-primary-400","cursor-pointer"),o.appendChild(p);const x=document.createElement("input");x.type="button",x.value="\u522A\u9664",x.classList.add("px-3","ml-1","rounded-lg","text-white","bg-primary-300","hover:bg-primary-400","cursor-pointer"),o.appendChild(x)}else if(c.target.value==e.date){const t=m.insertRow(),d=t.insertCell(0),s=t.insertCell(1),r=t.insertCell(2),n=t.insertCell(3),a=t.insertCell(4),l=t.insertCell(5),o=t.insertCell(6);d.classList.add("border","border-slate-300","px-3","text-center"),d.textContent=u,u++,s.classList.add("border","border-slate-300","px-3","text-center"),s.textContent=e.name,r.classList.add("border","border-slate-300","px-3","text-center"),r.textContent=e.sex,n.classList.add("border","border-slate-300","px-3","text-center"),n.textContent=e.birth,a.classList.add("border","border-slate-300","px-3","text-center"),a.textContent=e.time,l.classList.add("border","border-slate-300","px-3","text-center"),l.textContent=e.symptom,o.classList.add("border","border-slate-300","px-3","text-center");const p=document.createElement("input");p.type="button",p.value="\u4FEE\u6539",p.classList.add("px-3","rounded-lg","text-white","bg-primary-300","hover:bg-primary-400","cursor-pointer"),o.appendChild(p);const x=document.createElement("input");x.type="button",x.value="\u522A\u9664",x.classList.add("px-3","ml-1","rounded-lg","text-white","bg-primary-300","hover:bg-primary-400","cursor-pointer"),o.appendChild(x)}})})});const S=document.querySelector(".new");S.addEventListener("click",function(h){const C=document.querySelector("input[type=radio][name=sex]:checked"),i=m.insertRow(),y=i.insertCell(0),c=i.insertCell(1),e=i.insertCell(2),b=i.insertCell(3),t=i.insertCell(4),d=i.insertCell(5),s=i.insertCell(6);y.classList.add("border","border-slate-300","px-3","text-center"),y.textContent=u,u++,c.classList.add("border","border-slate-300","px-3","text-center"),c.textContent=L.value,e.classList.add("border","border-slate-300","px-3","text-center"),e.textContent=C.value,b.classList.add("border","border-slate-300","px-3","text-center"),b.textContent=v.value,t.classList.add("border","border-slate-300","px-3","text-center"),t.textContent=g.value,d.classList.add("border","border-slate-300","px-3","text-center"),d.textContent=w.value,s.classList.add("border","border-slate-300","px-3","text-center");const r=document.createElement("input");r.type="button",r.value="\u4FEE\u6539",r.classList.add("px-3","rounded-lg","text-white","bg-primary-300","hover:bg-primary-400","cursor-pointer"),s.appendChild(r);const n=document.createElement("input");n.type="button",n.value="\u522A\u9664",n.classList.add("px-3","ml-1","rounded-lg","text-white","bg-primary-300","hover:bg-primary-400","cursor-pointer"),s.appendChild(n);const a=document.querySelector("#date"),l=document.querySelector("input[type=radio][name=sex]:checked");f.post("https://yameiproject.onrender.com/Appointment",{depart:"",date:a.value,time:g.value,symptom:w.value,name:L.value,sex:l.value,idNum:E.value,birth:v.value,mail:"",phone:"",remark:"",attendStatus:!1})});
