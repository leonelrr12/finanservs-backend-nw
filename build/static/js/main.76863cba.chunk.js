(this["webpackJsonpfinanservs-afiliado"]=this["webpackJsonpfinanservs-afiliado"]||[]).push([[0],{136:function(e,t,a){},137:function(e,t,a){},163:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(33),c=a.n(r),s=(a(136),a(137),a(201)),o=a(112),l=a(211),j=a(31),d=a(14),x=a(222),b=a(223),m=a.p+"static/media/logo-horizontal-white.163462bd.png",u=a(215),p=a(209),h=a(214),O=a(217),f=a(210),g=a.p+"static/media/main-2.30b4fff1.jpeg",v=a(1),y=function(){return Object(v.jsx)(h.a,{sx:{pt:12},children:Object(v.jsx)(p.a,{container:!0,spacing:4,justifyContent:"center",children:Object(v.jsx)(p.a,{item:!0,xs:12,sm:6,md:4,children:Object(v.jsxs)(u.a,{sx:{height:"100%",display:"flex",flexDirection:"column"},children:[Object(v.jsx)(O.a,{component:"img",height:"300",image:g,alt:"Finanservs"}),Object(v.jsx)(j.b,{to:"/registro",children:Object(v.jsx)(f.a,{variant:"contained",children:"Resgistro"})}),Object(v.jsx)(f.a,{variant:"contained",children:"Resgistro"})]})})})})},w=a(29),C=a.n(w),S=a(42),R=a(13),k=a(212),F=a(205),N=a(219),W=a(207),D=a(220),I=a(218),M=a(63),E=a.n(M),T=a(68),z=a(43),q=a.n(z),L=function(e){var t=e.type,a=e.message,n=e.setMsg;return setTimeout((function(){n(null)}),2e3),Object(v.jsx)("div",{className:"alert alert-"+t+" mt-3 "+(a?"d-block":"d-none"),role:"alert",children:a})},B=Object(o.a)();function P(){var e=Object(d.f)(),t=Object(n.useState)(null),a=Object(R.a)(t,2),i=a[0],r=a[1],c=function(){var t=Object(S.a)(C.a.mark((function t(a){var n,i,c,s,o;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),n=new FormData(a.currentTarget),i={email:n.get("email"),password:n.get("password")},t.prev=3,t.next=6,q.a.post("/api/login/",i);case 6:return c=t.sent,t.next=9,c.data;case 9:(s=t.sent).token?(o=s.idUser,window.localStorage.setItem("jwt",JSON.stringify(c)),e("/afiliados/?idRef=".concat(o))):r(s.message),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(3),console.log("Error: Query no permitido.  Favor ver Log del Servidor.");case 16:case"end":return t.stop()}}),t,null,[[3,13]])})));return function(e){return t.apply(this,arguments)}}();return Object(v.jsx)(l.a,{theme:B,children:Object(v.jsxs)(h.a,{component:"main",maxWidth:"xs",children:[Object(v.jsx)(s.a,{}),Object(v.jsxs)(I.a,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(v.jsx)(k.a,{sx:{m:1,bgcolor:"secondary.main"},children:Object(v.jsx)(E.a,{})}),Object(v.jsx)(T.a,{component:"h1",variant:"h5",children:"Inicio"}),Object(v.jsxs)(I.a,{component:"form",onSubmit:c,noValidate:!0,sx:{mt:1},children:[Object(v.jsx)(F.a,{margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email",name:"email",autoComplete:"email",autoFocus:!0}),Object(v.jsx)(F.a,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Contrase\xf1a",type:"password",id:"password",autoComplete:"current-password"}),Object(v.jsx)(N.a,{control:Object(v.jsx)(W.a,{value:"remember",color:"primary"}),label:"Recuerdame"}),Object(v.jsx)(f.a,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Inicio"}),Object(v.jsxs)(p.a,{container:!0,children:[Object(v.jsx)(p.a,{item:!0,xs:!0,children:Object(v.jsx)(D.a,{href:"/afiliados",variant:"body2",children:"Olvido su Contrase\xf1a?"})}),Object(v.jsx)(p.a,{item:!0,children:Object(v.jsx)(D.a,{href:"/registro",variant:"body2",children:Object(v.jsx)(T.a,{children:"Resgistrarse"})})})]})]})]}),i?Object(v.jsx)(L,{type:"warning",message:i,setMsg:r}):""]})})}var A=Object(o.a)();function J(){var e=Object(d.f)(),t=function(){var t=Object(S.a)(C.a.mark((function t(a){var n,i;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),n=new FormData(a.currentTarget),i={email:n.get("email"),nombre:n.get("firstName"),apellidos:n.get("lastName"),celular:n.get("phoneNumber"),password:n.get("password")},t.prev=3,t.next=6,q.a.post("/api/user/",i);case 6:e("/afiliados/?id=112"),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(3),console.log("Error: Query no permitido.  Favor ver Log del Servidor.");case 12:case"end":return t.stop()}}),t,null,[[3,9]])})));return function(e){return t.apply(this,arguments)}}();return Object(v.jsx)(l.a,{theme:A,children:Object(v.jsxs)(h.a,{component:"main",maxWidth:"xs",children:[Object(v.jsx)(s.a,{}),Object(v.jsxs)(I.a,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(v.jsx)(k.a,{sx:{m:1,bgcolor:"secondary.main"},children:Object(v.jsx)(E.a,{})}),Object(v.jsx)(T.a,{component:"h1",variant:"h5",children:"Registro"}),Object(v.jsxs)(I.a,{component:"form",noValidate:!0,onSubmit:t,sx:{mt:3},children:[Object(v.jsxs)(p.a,{container:!0,spacing:2,children:[Object(v.jsx)(p.a,{item:!0,xs:12,sm:6,children:Object(v.jsx)(F.a,{autoComplete:"given-name",name:"firstName",required:!0,fullWidth:!0,id:"firstName",label:"Nombre",autoFocus:!0})}),Object(v.jsx)(p.a,{item:!0,xs:12,sm:6,children:Object(v.jsx)(F.a,{autoComplete:"given-name",name:"lastName",required:!0,fullWidth:!0,id:"lastName",label:"Apellidos",autoFocus:!0})}),Object(v.jsx)(p.a,{item:!0,xs:12,sm:6,children:Object(v.jsx)(F.a,{required:!0,fullWidth:!0,id:"phoneNumber",label:"Celular",name:"phoneNumber",autoComplete:"family-name"})}),Object(v.jsx)(p.a,{item:!0,xs:12,children:Object(v.jsx)(F.a,{required:!0,fullWidth:!0,id:"email",label:"Email",name:"email",autoComplete:"email"})}),Object(v.jsx)(p.a,{item:!0,xs:12,children:Object(v.jsx)(F.a,{required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"new-password"})})]}),Object(v.jsx)(f.a,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Sign Up"}),Object(v.jsx)(p.a,{container:!0,justifyContent:"flex-end",children:Object(v.jsx)(p.a,{item:!0,children:Object(v.jsxs)(D.a,{href:"/inicio",children:["Ya tienes una Cuenta?",Object(v.jsx)(T.a,{children:"Iniciar Sesi\xf3n"})]})})})]})]})]})})}var U=a(221),G=a(203),Q=function(){var e=Object(n.useState)([]),t=Object(R.a)(e,2),a=t[0],i=t[1],r=Object(d.e)().search,c=new URLSearchParams(r).get("idRef"),s=function(){var e=Object(S.a)(C.a.mark((function e(){var t,a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q.a.get("/api/afiliados/"+c);case 2:return t=e.sent,e.next=5,t.data;case 5:a=e.sent,i(a),console.log(a);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){s()}),[]),Object(v.jsxs)(h.a,{sx:{py:8},maxWidth:"md",children:[Object(v.jsx)(T.a,{gutterBottom:!0,variant:"h4",component:"h2",textAlign:"center",children:"Mis Referidos"}),a?Object(v.jsx)(p.a,{container:!0,spacing:2,children:a.map((function(e){return Object(v.jsx)(p.a,{item:!0,xs:12,sm:6,md:4,children:Object(v.jsx)(u.a,{sx:{height:"100%",display:"flex",flexDirection:"column"},children:Object(v.jsxs)(U.a,{sx:{flexGrow:1},children:[Object(v.jsx)(T.a,{gutterBottom:!0,variant:"h5",component:"h2",children:e.nombre+" "+e.apellidos}),Object(v.jsxs)(T.a,{children:[Object(v.jsx)(G.a,{primary:"Email: ".concat(e.email)}),Object(v.jsx)(G.a,{primary:"Celular: ".concat(e.celular)}),Object(v.jsx)(G.a,{primary:"Creado: ".concat(e.dateCreated)})]})]})})},e.id)}))}):Object(v.jsx)(p.a,{item:!0,xs:12,sm:6,md:4,children:Object(v.jsx)(u.a,{sx:{height:"100%",display:"flex",flexDirection:"column"},children:Object(v.jsxs)(U.a,{sx:{flexGrow:1},children:[Object(v.jsx)(T.a,{gutterBottom:!0,variant:"h5",component:"h2",children:"Sin Referidos"}),Object(v.jsx)(T.a,{children:"No deje de compartir con sus amigos esta oportunidad."})]})})})]})},V=a(105),Y=a(4),H=a(164),K=a(111),X=a(213),Z=a(204),$=a(109),_=a.n($),ee=a(108),te=a.n(ee),ae=a(110),ne=a.n(ae),ie=a(106),re=a.n(ie),ce=Object(Y.a)((function(e){return Object(v.jsx)(K.a,Object(V.a)({elevation:0,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"}},e))}))((function(e){var t=e.theme;return{"& .MuiPaper-root":{borderRadius:6,marginTop:t.spacing(1),minWidth:180,color:"light"===t.palette.mode?"rgb(55, 65, 81)":t.palette.grey[300],boxShadow:"rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px","& .MuiMenu-list":{padding:"4px 0"},"& .MuiMenuItem-root":{"& .MuiSvgIcon-root":{fontSize:18,color:t.palette.text.secondary,marginRight:t.spacing(1.5)},"&:active":{backgroundColor:Object(H.a)(t.palette.primary.main,t.palette.action.selectedOpacity)}}}}}));function se(){var e=n.useState(null),t=Object(R.a)(e,2),a=t[0],i=t[1],r=Boolean(a),c=function(){i(null)};return Object(v.jsxs)("div",{children:[Object(v.jsx)(f.a,{id:"demo-customized-button","aria-controls":"demo-customized-menu","aria-haspopup":"true","aria-expanded":r?"true":void 0,variant:"contained",disableElevation:!0,onClick:function(e){i(e.currentTarget)},endIcon:Object(v.jsx)(re.a,{}),children:"Options"}),Object(v.jsxs)(ce,{id:"demo-customized-menu",MenuListProps:{"aria-labelledby":"demo-customized-button"},anchorEl:a,open:r,onClose:c,children:[Object(v.jsx)(X.a,{onClick:c,disableRipple:!0,children:Object(v.jsx)(j.b,{to:"/inicio",children:Object(v.jsx)(f.a,{variant:"contained",children:"Inicio"})})}),Object(v.jsxs)(X.a,{onClick:c,disableRipple:!0,children:[Object(v.jsx)(te.a,{}),"Duplicate"]}),Object(v.jsx)(Z.a,{sx:{my:.5}}),Object(v.jsxs)(X.a,{onClick:c,disableRipple:!0,children:[Object(v.jsx)(_.a,{}),"Archive"]}),Object(v.jsxs)(X.a,{onClick:c,disableRipple:!0,children:[Object(v.jsx)(ne.a,{}),"More"]})]})]})}var oe=function(){return Object(v.jsx)(j.a,{children:Object(v.jsxs)("div",{className:"main-layout",children:[Object(v.jsx)(x.a,{position:"fixed",children:Object(v.jsxs)(b.a,{children:[Object(v.jsx)("img",{src:m,alt:"React Logo",width:"200"}),Object(v.jsx)(se,{})]})}),Object(v.jsxs)(d.c,{children:[Object(v.jsx)(d.a,{path:"/",element:Object(v.jsx)(y,{})}),Object(v.jsx)(d.a,{path:"/registro",element:Object(v.jsx)(J,{})}),Object(v.jsx)(d.a,{path:"/afiliados",element:Object(v.jsx)(Q,{})}),Object(v.jsx)(d.a,{path:"/inicio",element:Object(v.jsx)(P,{})}),Object(v.jsx)(d.a,{path:"/logout",element:Object(v.jsx)(P,{})})]})]})})},le=function(){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(Z.a,{sx:{py:4}}),Object(v.jsxs)(I.a,{sx:{bgcolor:"background.paper",p:2},component:"footer",children:[Object(v.jsx)(T.a,{variant:"subtitle1",align:"center",color:"text.primary",component:"p",children:"Soluciones financieras a su medida!"}),Object(v.jsxs)(T.a,{variant:"body2",color:"text.secondary",align:"center",children:["Copyright \xa9 ",(new Date).getFullYear(),"."]})]})]})},je=Object(o.a)();var de=function(){return Object(v.jsxs)(l.a,{theme:je,children:[Object(v.jsx)(s.a,{}),Object(v.jsx)(oe,{}),Object(v.jsx)("main",{}),Object(v.jsx)(le,{})]})},xe=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,224)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),i(e),r(e),c(e)}))};c.a.render(Object(v.jsx)(i.a.StrictMode,{children:Object(v.jsx)(de,{})}),document.getElementById("root")),xe()}},[[163,1,2]]]);
//# sourceMappingURL=main.76863cba.chunk.js.map