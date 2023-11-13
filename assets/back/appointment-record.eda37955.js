import"../header.554b7ac6.js";const L=document.querySelector(".name"),f=document.querySelector(".idNum"),v=document.querySelector(".birth"),g=document.querySelector(".time"),w=document.querySelector(".cause"),m=document.querySelector("#appointmentTable");let b=1;axios.get("http://localhost:4000/Appointment").then(function(h){let C=h.data;function i(){C.forEach(function(d){const e=m.insertRow(),x=e.insertCell(0),t=e.insertCell(1),a=e.insertCell(2),l=e.insertCell(3),r=e.insertCell(4),n=e.insertCell(5),c=e.insertCell(6);x.classList.add("border","border-slate-300","px-3"),x.textContent=b,b++,t.classList.add("border","border-slate-300","px-3"),t.textContent=d.name,a.classList.add("border","border-slate-300","px-3"),a.textContent=d.sex,l.classList.add("border","border-slate-300","px-3"),l.textContent=d.birth,r.classList.add("border","border-slate-300","px-3"),r.textContent=d.time,n.classList.add("border","border-slate-300","px-3"),n.textContent=d.symptom,c.classList.add("border","border-slate-300","px-3");const s=document.createElement("input");s.type="button",s.value="\u4FEE\u6539",s.classList.add("px-3","rounded-lg","text-white","bg-primary-300","hover:bg-primary-400","cursor-pointer"),c.appendChild(s);const o=document.createElement("input");o.type="button",o.value="\u522A\u9664",o.classList.add("px-3","ml-1","rounded-lg","text-white","bg-primary-300","hover:bg-primary-400","cursor-pointer"),c.appendChild(o)})}i(),document.querySelector("#searchDate").addEventListener("mouseup",function(d){m.innerHTML="",b=1,C.forEach(function(e,x){if(d.target.value==""){const t=m.insertRow(),a=t.insertCell(0),l=t.insertCell(1),r=t.insertCell(2),n=t.insertCell(3),c=t.insertCell(4),s=t.insertCell(5),o=t.insertCell(6);a.classList.add("border","border-slate-300","px-3"),a.textContent=b,b++,l.classList.add("border","border-slate-300","px-3"),l.textContent=e.name,r.classList.add("border","border-slate-300","px-3"),r.textContent=e.sex,n.classList.add("border","border-slate-300","px-3"),n.textContent=e.birth,c.classList.add("border","border-slate-300","px-3"),c.textContent=e.time,s.classList.add("border","border-slate-300","px-3"),s.textContent=e.symptom,o.classList.add("border","border-slate-300","px-3");const p=document.createElement("input");p.type="button",p.value="\u4FEE\u6539",p.classList.add("px-3","rounded-lg","text-white","bg-primary-300","hover:bg-primary-400","cursor-pointer"),o.appendChild(p);const u=document.createElement("input");u.type="button",u.value="\u522A\u9664",u.classList.add("px-3","ml-1","rounded-lg","text-white","bg-primary-300","hover:bg-primary-400","cursor-pointer"),o.appendChild(u)}else if(d.target.value==e.date){const t=m.insertRow(),a=t.insertCell(0),l=t.insertCell(1),r=t.insertCell(2),n=t.insertCell(3),c=t.insertCell(4),s=t.insertCell(5),o=t.insertCell(6);a.classList.add("border","border-slate-300","px-3"),a.textContent=b,b++,l.classList.add("border","border-slate-300","px-3"),l.textContent=e.name,r.classList.add("border","border-slate-300","px-3"),r.textContent=e.sex,n.classList.add("border","border-slate-300","px-3"),n.textContent=e.birth,c.classList.add("border","border-slate-300","px-3"),c.textContent=e.time,s.classList.add("border","border-slate-300","px-3"),s.textContent=e.symptom,o.classList.add("border","border-slate-300","px-3");const p=document.createElement("input");p.type="button",p.value="\u4FEE\u6539",p.classList.add("px-3","rounded-lg","text-white","bg-primary-300","hover:bg-primary-400","cursor-pointer"),o.appendChild(p);const u=document.createElement("input");u.type="button",u.value="\u522A\u9664",u.classList.add("px-3","ml-1","rounded-lg","text-white","bg-primary-300","hover:bg-primary-400","cursor-pointer"),o.appendChild(u)}})})});const E=document.querySelector(".new");E.addEventListener("click",function(h){const C=document.querySelector("input[type=radio][name=sex]:checked"),i=m.insertRow(),y=i.insertCell(0),d=i.insertCell(1),e=i.insertCell(2),x=i.insertCell(3),t=i.insertCell(4),a=i.insertCell(5),l=i.insertCell(6);y.classList.add("border","border-slate-300","px-3"),y.textContent=b,b++,d.classList.add("border","border-slate-300","px-3"),d.textContent=L.value,e.classList.add("border","border-slate-300","px-3"),e.textContent=C.value,x.classList.add("border","border-slate-300","px-3"),x.textContent=v.value,t.classList.add("border","border-slate-300","px-3"),t.textContent=g.value,a.classList.add("border","border-slate-300","px-3"),a.textContent=w.value,l.classList.add("border","border-slate-300","px-3");const r=document.createElement("input");r.type="button",r.value="\u4FEE\u6539",r.classList.add("px-3","rounded-lg","text-white","bg-primary-300","hover:bg-primary-400","cursor-pointer"),l.appendChild(r);const n=document.createElement("input");n.type="button",n.value="\u522A\u9664",n.classList.add("px-3","ml-1","rounded-lg","text-white","bg-primary-300","hover:bg-primary-400","cursor-pointer"),l.appendChild(n);const c=document.querySelector("#date"),s=document.querySelector("input[type=radio][name=sex]:checked");axios.post("http://localhost:4000/Appointment",{depart:"",date:c.value,time:g.value,symptom:w.value,name:L.value,sex:s.value,idNum:f.value,birth:v.value,mail:"",phone:"",remark:""})});
