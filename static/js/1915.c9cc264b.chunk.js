"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[1915],{1915:(e,i,s)=>{s.r(i),s.d(i,{default:()=>x});var a=s(2791),t=s(2937),r=s(3076),n=s(386),l=s(6131),o=s(4846),d=s(8723),c=s(5294),m=s(6858),u=s(184);const h={protocol:"ws",username:"VyKing",password:"aio_wpjy56mtIGJ3eImGS185kQx4QsPj",keepalive:20,clientId:"mqttjs_"+Math.random().toString(16).substr(2,8)},p=m.Z.connect("ws://io.adafruit.com:443",h);p.subscribe("VyKing/feeds/temperature"),p.subscribe("VyKing/feeds/soilMoisture"),p.subscribe("VyKing/feeds/humidity");const x=()=>{var e,i,s;var m;const[h,x]=(0,a.useState)((0,u.jsx)(a.Fragment,{children:(0,u.jsx)("em",{children:"..."})})),[g,b]=(0,a.useState)((0,u.jsx)(a.Fragment,{children:(0,u.jsx)("em",{children:"..."})})),[j,v]=(0,a.useState)((0,u.jsx)(a.Fragment,{children:(0,u.jsx)("em",{children:"..."})})),[f,y]=(0,a.useState)([]),[k,S]=(0,a.useState)([]),[Z,_]=(0,a.useState)([]);p.on("message",(function(e,i){m=i.toString(),"VyKing/feeds/temperature"===e&&x(m),"VyKing/feeds/soilMoisture"===e&&v(m),"VyKing/feeds/humidity"===e&&b(m),console.log(e)}));const C=(e,i,s)=>{c.Z.get(e,{headers:{"X-AIO-Key":"aio_wpjy56mtIGJ3eImGS185kQx4QsPj"}}).then((e=>{var a,t,r;"temp"===s&&x(null===(a=e.data[0])||void 0===a?void 0:a.value);"soil"===s&&v(null===(t=e.data[0])||void 0===t?void 0:t.value);"humi"===s&&b(null===(r=e.data[0])||void 0===r?void 0:r.value);i(e.data.reverse())})).catch((e=>{console.error(e)}))};(0,a.useEffect)((()=>{C("https://io.adafruit.com/api/v2/VyKing/feeds/temperature/data",y,"temp"),C("https://io.adafruit.com/api/v2/VyKing/feeds/soilmoisture/data",S,"soil"),C("https://io.adafruit.com/api/v2/VyKing/feeds/humidity/data",_,"humi")}),[h,g,j]);const N=new Date,[w,A]=(0,a.useState)(""),[K,T]=(0,a.useState)("");return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("h3",{children:"Pump control"}),(0,u.jsxs)(t.lx,{className:"row row-cols-lg-auto g-3 align-items-center",style:{paddingBottom:"20px",paddingTop:"20px"},children:[(0,u.jsxs)(t.b7,{xs:12,children:[(0,u.jsx)(t.L8,{className:"visually-hidden",htmlFor:"inlineFormInputGroupUsername",children:"Count down"}),(0,u.jsxs)(t.YR,{children:[(0,u.jsx)(t.wV,{children:"@"}),(0,u.jsx)(t.jO,{id:"inlineFormInputGroupUsername",placeholder:"Count down",value:w,onChange:e=>{A(e.target.value)}})]})]}),(0,u.jsxs)(t.b7,{xs:12,children:[(0,u.jsx)(t.L8,{className:"visually-hidden",htmlFor:"inlineFormInputGroupUsername",children:"Active"}),(0,u.jsxs)(t.YR,{children:[(0,u.jsx)(t.wV,{children:"@"}),(0,u.jsx)(t.jO,{id:"inlineFormInputGroupUsername",placeholder:"Active",value:K,onChange:e=>{T(e.target.value)}})]})]}),(0,u.jsx)(t.b7,{xs:12,children:(0,u.jsx)(t.u5,{type:"submit",onClick:e=>{e.preventDefault(),A(""),T("");const i="".concat(w," ").concat(K);var s,a;s="VyKing/feeds/co",a=i,p.publish(s,a,(e=>{e?console.error("Publish error:",e):console.log("Sent data to ".concat(s,":"),a)}))},children:"Submit"})})]}),(0,u.jsx)(t.xH,{className:"mb-4",children:(0,u.jsxs)(t.sl,{children:[(0,u.jsxs)(t.rb,{children:[(0,u.jsxs)(t.b7,{sm:5,children:[(0,u.jsxs)("h4",{id:"traffic",className:"card-title mb-0",children:[null===(e=f[0])||void 0===e?void 0:e.feed_key," ",h]}),(0,u.jsx)("div",{className:"small text-medium-emphasis",children:N.toString().substring(0,10)})]}),(0,u.jsx)(t.b7,{sm:7,className:"d-none d-md-block",children:(0,u.jsx)(t.u5,{color:"primary",className:"float-end",children:(0,u.jsx)(o.Z,{icon:d.j})})})]}),(0,u.jsx)(r.oK,{style:{height:"300px",marginTop:"40px"},data:{labels:null===f||void 0===f?void 0:f.map((e=>e.created_at.substring(0,10))),datasets:[{label:"Temperature",backgroundColor:(0,n.Z)((0,l.Z)("--cui-info"),10),borderColor:(0,l.Z)("--cui-info"),pointHoverBackgroundColor:(0,l.Z)("--cui-info"),borderWidth:2,data:null===f||void 0===f?void 0:f.map((e=>e.value)),fill:!0}]},options:{maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{grid:{drawOnChartArea:!1},ticks:{beginAtZero:!0,maxTicksLimit:20,stepSize:Math.ceil(50),max:250}},y:{ticks:{beginAtZero:!0,maxTicksLimit:10,stepSize:Math.ceil(5),max:120}}},elements:{line:{tension:.4},point:{radius:0,hitRadius:10,hoverRadius:4,hoverBorderWidth:3}}}})]})},0),(0,u.jsx)(t.xH,{className:"mb-4",children:(0,u.jsxs)(t.sl,{children:[(0,u.jsxs)(t.rb,{children:[(0,u.jsxs)(t.b7,{sm:5,children:[(0,u.jsxs)("h4",{id:"traffic",className:"card-title mb-0",children:[null===(i=Z[0])||void 0===i?void 0:i.feed_key," ",g]}),(0,u.jsx)("div",{className:"small text-medium-emphasis",children:N.toString().substring(0,10)})]}),(0,u.jsx)(t.b7,{sm:7,className:"d-none d-md-block",children:(0,u.jsx)(t.u5,{color:"primary",className:"float-end",children:(0,u.jsx)(o.Z,{icon:d.j})})})]}),(0,u.jsx)(r.oK,{style:{height:"300px",marginTop:"40px"},data:{labels:Z.map((e=>e.created_at.substring(0,10))),datasets:[{label:"Temperature",backgroundColor:(0,n.Z)((0,l.Z)("--cui-info"),10),borderColor:(0,l.Z)("--cui-info"),pointHoverBackgroundColor:(0,l.Z)("--cui-info"),borderWidth:2,data:Z.map((e=>e.value)),fill:!0}]},options:{maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{grid:{drawOnChartArea:!1},ticks:{beginAtZero:!0,maxTicksLimit:20,stepSize:Math.ceil(50),max:250}},y:{ticks:{beginAtZero:!0,maxTicksLimit:10,stepSize:Math.ceil(5),max:120}}},elements:{line:{tension:.4},point:{radius:0,hitRadius:10,hoverRadius:4,hoverBorderWidth:3}}}})]})},1),(0,u.jsx)(t.xH,{className:"mb-4",children:(0,u.jsxs)(t.sl,{children:[(0,u.jsxs)(t.rb,{children:[(0,u.jsxs)(t.b7,{sm:5,children:[(0,u.jsxs)("h4",{id:"traffic",className:"card-title mb-0",children:[null===(s=k[0])||void 0===s?void 0:s.feed_key," ",j]}),(0,u.jsx)("div",{className:"small text-medium-emphasis",children:N.toString().substring(0,10)})]}),(0,u.jsx)(t.b7,{sm:7,className:"d-none d-md-block",children:(0,u.jsx)(t.u5,{color:"primary",className:"float-end",children:(0,u.jsx)(o.Z,{icon:d.j})})})]}),(0,u.jsx)(r.oK,{style:{height:"300px",marginTop:"40px"},data:{labels:k.map((e=>e.created_at.substring(0,10))),datasets:[{label:"Temperature",backgroundColor:(0,n.Z)((0,l.Z)("--cui-info"),10),borderColor:(0,l.Z)("--cui-info"),pointHoverBackgroundColor:(0,l.Z)("--cui-info"),borderWidth:2,data:k.map((e=>e.value)),fill:!0}]},options:{maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{grid:{drawOnChartArea:!1},ticks:{beginAtZero:!0,maxTicksLimit:20,stepSize:Math.ceil(50),max:250}},y:{ticks:{beginAtZero:!0,maxTicksLimit:10,stepSize:Math.ceil(5),max:120}}},elements:{line:{tension:.4},point:{radius:0,hitRadius:10,hoverRadius:4,hoverBorderWidth:3}}}})]})},2)]})}}}]);
//# sourceMappingURL=1915.c9cc264b.chunk.js.map