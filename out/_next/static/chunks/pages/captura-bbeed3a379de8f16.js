(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[554],{4042:(e,t,a)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/captura",function(){return a(2293)}])},2293:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>u});var o=a(4848),n=a(6540),r=a(6715),i=a(4335),c=a(8005),s=a.n(c);function u(){let[e,t]=(0,n.useState)(!1),a=(0,n.useRef)(null),c=(0,r.useRouter)();(0,n.useEffect)(()=>{async function t(){try{let e=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}});a.current&&(a.current.srcObject=e)}catch(e){console.error("Error al acceder a la c\xe1mara:",e)}}return e&&t(),()=>{a.current&&a.current.srcObject&&a.current.srcObject.getTracks().forEach(e=>e.stop())}},[e]);let u=async()=>{if(!a.current)return;let e=document.createElement("canvas");e.width=a.current.videoWidth,e.height=a.current.videoHeight,e.getContext("2d").drawImage(a.current,0,0,e.width,e.height),e.toBlob(async e=>{if(e)try{let t=new FormData;t.append("image",e,"photo.jpg"),console.log("Formdata:",t);let a=(await i.A.post("http://34.46.252.163/api/process-image/",t)).data.text;console.log("Respuesta de Google Vision AI:",a);let o=(await i.A.post("http://35.193.164.187/api/analyze-text/",{text:a})).data.openai_depto;console.log("Respuesta de OpenAI:",o);let n=await i.A.get("http://34.29.123.189/api/residente/",{params:{codigo_departamento:o}}),r=n.data.nombre_completo;console.log("Respuesta de Management:",n.data);let s=new FormData;s.append("codigo_departamento",o),s.append("image",e,"photo.jpg");let u=await i.A.post("http://146.148.75.57/api/notifications/send/",s,{headers:{"Content-Type":"multipart/form-data"}});console.log("Respuesta de Notificaciones:",u.data);let l="Se ha notificado a ".concat(r,", residente del departamento ").concat(o,".");alert(l),c.push("/envio-confirmacion")}catch(e){console.error("Error en el flujo:",e),alert("Hubo un error al procesar la solicitud. Por favor, intenta nuevamente.")}})};return(0,o.jsxs)("div",{className:s().container,children:[(0,o.jsx)("h1",{children:"Captura una Etiqueta"}),e?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("video",{ref:a,autoPlay:!0,playsInline:!0,className:s().video}),(0,o.jsx)("button",{onClick:u,className:s().captureButton,children:"Capturar"})]}):(0,o.jsx)("button",{onClick:()=>t(!0),className:s().button,children:"Iniciar C\xe1mara"})]})}},8005:e=>{e.exports={container:"Home_container__9OuOz",header:"Home_header__ZUWxe",appTitle:"Home_appTitle__yiXSx",title:"Home_title__YEn0u",description:"Home_description__zHUB6",menu:"Home_menu__PaWB6",menuButton:"Home_menuButton__x1lsI",icon:"Home_icon__cxK0Z",loader:"Home_loader__yM5SM",fadeInOut:"Home_fadeInOut___giz_",button:"Home_button__Mzpzz",captureButton:"Home_captureButton__WvKu9",video:"Home_video__0jLVe",sendButton:"Home_sendButton__XuI40"}}},e=>{var t=t=>e(e.s=t);e.O(0,[909,636,593,792],()=>t(4042)),_N_E=e.O()}]);