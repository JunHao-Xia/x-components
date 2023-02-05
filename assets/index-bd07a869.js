import{d as i,r as c,e as v,o as m,c as p,a as u,u as _}from"./index-de618595.js";const f=i({__name:"index",setup(x){let l=c([{title:"购物",start:"2023-02-01 11:00",end:"2023-02-01 12:00"},{title:"敲代码",start:"2023-02-02 11:00",end:"2023-02-02 13:00",editable:!0}]);const a=e=>{l.value.push({title:"学习",start:e.dateStr+" 12:00",end:e.dateStr+" 18:00"})},r=e=>{console.log(e)},d=e=>{let n=document.createElement("div"),t=e.timeText.split("-"),o=t[0].replace(/(上午|时)/g,"").trim(),s=t[1].replace(/(上午|时)/g,"").trim();return n.innerHTML=`
                <div>开始时间:${o}</div>
                <div>结束时间:${s}</div>
                <div>标题:${e.event._def.title}</div>
                `,{domNodes:[n]}};return(e,n)=>{const t=v("x-calendar");return m(),p("div",null,[u(t,{events:_(l),onDateClick:a,onEventClick:r,displayEventEnd:"",eventContent:d},null,8,["events"])])}}});export{f as default};
