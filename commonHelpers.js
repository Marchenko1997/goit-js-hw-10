import"./assets/modulepreload-polyfill-ec808ebb.js";import{f as h,i as u}from"./assets/vendor-216cde32.js";let r;const y={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){r=t[0];const e=new Date,n=document.querySelector("[data-start]");r>e?n.removeAttribute("disabled"):(u.error({title:"Error",message:"Please choose a date in the future"}),n.setAttribute("disabled",!0))}};h("#datetime-picker",y);const S=new Date;(!r||r<=S)&&document.querySelector("[data-start]").setAttribute("disabled",!0);let d,i;function D(){const t=new Date,e=i-t;if(e>0){const{days:n,hours:s,minutes:c,seconds:a}=b(e);document.querySelector("[data-days]").textContent=o(n),document.querySelector("[data-hours]").textContent=o(s),document.querySelector("[data-minutes]").textContent=o(c),document.querySelector("[data-seconds]").textContent=o(a)}else clearInterval(d),u.success({title:"Success",message:"Countdown finished!"})}document.querySelector("[data-start]").addEventListener("click",()=>{i=r,d=setInterval(D,1e3),document.querySelector("[data-start]").setAttribute("disabled",!0)});function o(t){return t.toString().padStart(2,"0")}function b(t){const a=Math.floor(t/864e5),l=Math.floor(t%864e5/36e5),m=Math.floor(t%864e5%36e5/6e4),f=Math.floor(t%864e5%36e5%6e4/1e3);return{days:a,hours:l,minutes:m,seconds:f}}
//# sourceMappingURL=commonHelpers.js.map
