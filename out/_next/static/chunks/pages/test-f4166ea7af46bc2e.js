(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[236],{3050:(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/test",function(){return n(1663)}])},1663:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>l});var a=n(4848),r=n(6540);function l(){let[e,t]=(0,r.useState)(null),[n,l]=(0,r.useState)(null),[s,i]=(0,r.useState)(null),c=async()=>{if(!e){i("Por favor, selecciona un archivo antes de enviar.");return}let t=new FormData;t.append("image",e);try{let e=await fetch("/api/process-image",{method:"POST",body:t});if(!e.ok){let t=await e.text();throw Error("Error en el backend: ".concat(e.status," - ").concat(t))}let n=await e.json();l(n)}catch(e){i("Hubo un problema: ".concat(e.message))}};return(0,a.jsxs)("div",{children:[(0,a.jsx)("h1",{children:"P\xe1gina de Prueba"}),(0,a.jsx)("input",{type:"file",onChange:e=>{t(e.target.files[0]),l(null),i(null)}}),(0,a.jsx)("button",{onClick:c,children:"Enviar Imagen"}),s&&(0,a.jsx)("p",{style:{color:"red"},children:s}),n&&(0,a.jsx)("pre",{children:JSON.stringify(n,null,2)})]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[636,593,792],()=>t(3050)),_N_E=e.O()}]);