(this["webpackJsonpfinanservs-afiliado"]=this["webpackJsonpfinanservs-afiliado"]||[]).push([[0],{133:function(e,t,a){},134:function(e,t,a){},169:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(34),i=a.n(c),s=(a(133),a(134),a(216)),o=a(112),l=a(225),j=a(41),b=a(15),m=a(238),d=a(239),u=a.p+"static/media/logo-horizontal-white.163462bd.png",O=a(26),x=a.n(O),p=a(32),h=a(13),f=a(228),g=a(223),v=a(227),w=a(230),y=a(224),S=a(231),N=a.p+"static/media/main-2.954443fd.jpg",C=a(30),k=a.n(C),R=a(2),I=function(){var e=Object(b.f)(),t=Object(r.useState)([]),a=Object(h.a)(t,2),n=a[0],c=a[1],i=Object(b.e)().search,s=new URLSearchParams(i),o=parseInt(s.get("Ref")||"0"),l=function(){var e=Object(p.a)(x.a.mark((function e(t){var a,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,k.a.get("/api/referido/"+t);case 4:return a=e.sent,e.next=7,a.data;case 7:r=e.sent,console.log(r),c(r);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){window.localStorage.getItem("jwt")?e("/afiliados"):(window.localStorage.getItem("Sponsor")||null)&&e("/inicio")}),[]),Object(r.useEffect)((function(){l(o)}),[o]),Object(R.jsxs)(v.a,{sx:{pt:12},children:[Object(R.jsx)(g.a,{container:!0,spacing:4,justifyContent:"center",children:Object(R.jsx)(g.a,{item:!0,xs:12,sm:6,md:4,children:Object(R.jsxs)(f.a,{sx:{height:"100%",display:"flex",flexDirection:"column"},children:[Object(R.jsx)(w.a,{component:"img",height:"300",image:N,alt:"Finanservs"}),Object(R.jsx)(j.b,{to:"/registro?Ref=".concat(o),children:Object(R.jsx)(y.a,{variant:"contained",children:"Registro"})})]})})}),Object(R.jsx)(S.a,{sx:{pt:2},textAlign:"center",children:n.length>0&&"Referido por: ".concat(n[0].nombre," ").concat(n[0].apellidos)})]})},E=a(226),F=a(218),T=a(233),D=a(221),W=a(234),L=a(232),U=a(108),A=a.n(U),q=function(e){var t=e.type,a=e.message,r=e.setMsg;return setTimeout((function(){r(null)}),2e3),Object(R.jsx)("div",{className:"alert alert-"+t+" mt-3 "+(a?"d-block":"d-none"),role:"alert",children:a})},P=Object(o.a)();function B(){var e=Object(b.f)(),t=Object(r.useState)(""),a=Object(h.a)(t,2),n=a[0],c=a[1],i=function(){var t=Object(p.a)(x.a.mark((function t(a){var r,n,i,s,o;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),r=new FormData(a.currentTarget),n={email:r.get("email"),password:r.get("password")},t.prev=3,t.next=6,k.a.post("/api/login/",n);case 6:return i=t.sent,t.next=9,i.data;case 9:(s=t.sent).token?(o={token:s.token,idUser:s.idUser,email:s.email},window.localStorage.setItem("jwt",JSON.stringify(o)),e("/afiliados")):c(s.message),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(3),c("Error: Query no permitido. Favor ver Log del Servidor.");case 16:case"end":return t.stop()}}),t,null,[[3,13]])})));return function(e){return t.apply(this,arguments)}}();return Object(r.useEffect)((function(){window.localStorage.getItem("jwt")?e("/afiliados"):(window.localStorage.getItem("Sponsor")||null)&&e("/inicio")}),[]),Object(R.jsx)(l.a,{theme:P,children:Object(R.jsxs)(v.a,{component:"main",maxWidth:"xs",children:[Object(R.jsx)(s.a,{}),Object(R.jsxs)(L.a,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(R.jsx)(E.a,{sx:{m:1,bgcolor:"secondary.main"},children:Object(R.jsx)(A.a,{})}),Object(R.jsx)(S.a,{component:"h1",variant:"h5",children:"Inicio"}),Object(R.jsxs)(L.a,{component:"form",onSubmit:i,noValidate:!0,sx:{mt:1},children:[Object(R.jsx)(F.a,{margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email",name:"email",autoComplete:"email",autoFocus:!0}),Object(R.jsx)(F.a,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Contrase\xf1a",type:"password",id:"password",autoComplete:"current-password"}),Object(R.jsx)(T.a,{control:Object(R.jsx)(D.a,{value:"remember",color:"primary"}),label:"Recuerdame"}),Object(R.jsx)(y.a,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Inicio"}),Object(R.jsxs)(g.a,{container:!0,children:[Object(R.jsx)(g.a,{item:!0,xs:!0,children:Object(R.jsx)(W.a,{href:"/afiliados",variant:"body2",children:"Olvido su Contrase\xf1a?"})}),Object(R.jsx)(g.a,{item:!0,children:Object(R.jsx)(W.a,{href:"/registro",variant:"body2",children:Object(R.jsx)(S.a,{children:"Resgistrarse"})})})]})]})]}),n?Object(R.jsx)(q,{type:"warning",message:n,setMsg:c}):""]})})}var J=a(5),M=a(14),Q=Object(o.a)();function V(){var e=Object(r.useState)({email:"",firstName:"",lastName:"",phoneNumber:"",password:""}),t=Object(h.a)(e,2),a=t[0],n=t[1],c=Object(r.useState)({email:!1,firstName:!1,lastName:!1,phoneNumber:!1,password:!1}),i=Object(h.a)(c,2),o=i[0],j=i[1],m=Object(b.f)(),d=Object(b.e)().search,u=new URLSearchParams(d).get("Ref"),O=function(){var e=Object(p.a)(x.a.mark((function e(t){var r,c,i,s;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),r=new FormData(t.currentTarget),(c={email:r.get("email"),nombre:r.get("firstName"),apellidos:r.get("lastName"),celular:r.get("phoneNumber"),password:r.get("password"),id_ref:r.get("")}).nombre){e.next=7;break}return n(Object(M.a)(Object(M.a)({},a),{},{firstName:"Este es un campo obligatorio"})),j(Object(M.a)(Object(M.a)({},o),{},{firstName:!0})),e.abrupt("return");case 7:if(c.apellidos){e.next=11;break}return n(Object(M.a)(Object(M.a)({},a),{},{lastName:"Este es un campo obligatorio"})),j(Object(M.a)(Object(M.a)({},o),{},{lastName:!0})),e.abrupt("return");case 11:if(c.celular){e.next=15;break}return n(Object(M.a)(Object(M.a)({},a),{},{phoneNumber:"Este es un campo obligatorio"})),j(Object(M.a)(Object(M.a)({},o),{},{phoneNumber:!0})),e.abrupt("return");case 15:if(c.email){e.next=19;break}return n(Object(M.a)(Object(M.a)({},a),{},{email:"Este es un campo obligatorio"})),j(Object(M.a)(Object(M.a)({},o),{},{email:!0})),e.abrupt("return");case 19:if(c.password){e.next=23;break}return n(Object(M.a)(Object(M.a)({},a),{},{password:"Este es un campo obligatorio"})),j(Object(M.a)(Object(M.a)({},o),{},{password:!0})),e.abrupt("return");case 23:return e.prev=23,e.next=26,k.a.post("/api/veirify-email/",{email:r.get("email")});case 26:return i=e.sent,e.next=29,i.data;case 29:if(s=e.sent,!(s.idUser>0)){e.next=35;break}return m("/inicio"),alert("Usuario ya existe con el email = ".concat(r.get("email"))),e.abrupt("return");case 35:e.next=40;break;case 37:e.prev=37,e.t0=e.catch(23),console.log("Error: Query no permitido.  Favor ver Log del Servidor.");case 40:return e.prev=40,c.id_ref=u,console.log(c),e.next=45,k.a.post("/api/user/",c);case 45:u&&window.localStorage.setItem("Sponsor",u),m("/inicio"),e.next=52;break;case 49:e.prev=49,e.t1=e.catch(40),console.log("Error: Query no permitido.  Favor ver Log del Servidor.");case 52:case"end":return e.stop()}}),e,null,[[23,37],[40,49]])})));return function(t){return e.apply(this,arguments)}}(),f=function(e,t){e.target.value.length>0&&e.target.value.length<t?(j(Object(M.a)(Object(M.a)({},o),{},Object(J.a)({},e.target.name,!0))),n(Object(M.a)(Object(M.a)({},a),{},Object(J.a)({},e.target.name,"Campo debe tener m\xednimo ".concat(t," caracteres"))))):(j(Object(M.a)(Object(M.a)({},o),{},Object(J.a)({},e.target.name,!1))),n(Object(M.a)(Object(M.a)({},a),{},Object(J.a)({},e.target.name,""))))};return Object(R.jsx)(l.a,{theme:Q,children:Object(R.jsxs)(v.a,{component:"main",maxWidth:"xs",children:[Object(R.jsx)(s.a,{}),Object(R.jsxs)(L.a,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(R.jsx)(S.a,{component:"h1",variant:"h5",children:"Nuevo"}),Object(R.jsxs)(L.a,{component:"form",noValidate:!0,autoComplete:"off",onSubmit:O,sx:{mt:3},children:[Object(R.jsxs)(g.a,{container:!0,spacing:2,children:[Object(R.jsx)(g.a,{item:!0,xs:12,sm:6,children:Object(R.jsx)(F.a,{name:"firstName",required:!0,fullWidth:!0,id:"firstName",label:"Nombre",autoFocus:!0,autoComplete:"family-name",error:o.firstName,onChange:function(e){return f(e,3)},helperText:a.firstName})}),Object(R.jsx)(g.a,{item:!0,xs:12,sm:6,children:Object(R.jsx)(F.a,{name:"lastName",required:!0,fullWidth:!0,id:"lastName",label:"Apellidos",autoComplete:"family-name",error:o.lastName,onChange:function(e){return f(e,3)},helperText:a.lastName})}),Object(R.jsx)(g.a,{item:!0,xs:12,sm:6,children:Object(R.jsx)(F.a,{required:!0,fullWidth:!0,id:"phoneNumber",label:"Celular",name:"phoneNumber",error:o.phoneNumber,onChange:function(e){return function(e){/[0-9]{4}-[0-9]{4}/.test(e.target.value)?(j(Object(M.a)(Object(M.a)({},o),{},Object(J.a)({},e.target.name,!1))),n(Object(M.a)(Object(M.a)({},a),{},Object(J.a)({},e.target.name,"")))):(j(Object(M.a)(Object(M.a)({},o),{},Object(J.a)({},e.target.name,!0))),n(Object(M.a)(Object(M.a)({},a),{},Object(J.a)({},e.target.name,"Debe indicar n\xfamero de c\xe9lular ####-####."))))}(e)},helperText:a.phoneNumber})}),Object(R.jsx)(g.a,{item:!0,xs:12,children:Object(R.jsx)(F.a,{required:!0,fullWidth:!0,id:"email",label:"Email",type:"email",name:"email",onChange:function(e){return function(e){/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(e.target.value)?(j(Object(M.a)(Object(M.a)({},o),{},Object(J.a)({},e.target.name,!1))),n(Object(M.a)(Object(M.a)({},a),{},Object(J.a)({},e.target.name,"")))):(j(Object(M.a)(Object(M.a)({},o),{},Object(J.a)({},e.target.name,!0))),n(Object(M.a)(Object(M.a)({},a),{},Object(J.a)({},e.target.name,"Debe indicar un nombre Email V\xe1lido."))))}(e)},error:o.email,helperText:a.email})}),Object(R.jsx)(g.a,{item:!0,xs:12,children:Object(R.jsx)(F.a,{required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"Password",error:o.password,onChange:function(e){return f(e,6)},helperText:a.password})})]}),Object(R.jsx)(y.a,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Resgistro"}),Object(R.jsx)(g.a,{container:!0,justifyContent:"flex-end",children:Object(R.jsx)(g.a,{item:!0,children:Object(R.jsxs)(W.a,{href:"/inicio",children:["Ya tienes una Cuenta?",Object(R.jsx)(S.a,{children:"Iniciar Sesi\xf3n"})]})})})]})]})]})})}var z=a(236),_=a(235),G=a(237),Y=a(219),Z=a(111),$=a.n(Z),H=a(109),K=a(110),X=a(163),ee="0px 4px 10px rgba(0, 0, 0, 0.25)",te=Object(Y.a)({card:{textShadow:ee},textShadow:{textShadow:ee,color:"#e07510",textAlign:"center"}}),ae={width:"85%",fontSize:"1.3em",height:"30px",color:"blue",border:"none",marginRight:"10px"},re=function(){var e=Object(r.useState)([]),t=Object(h.a)(e,2),a=t[0],n=t[1],c=Object(r.useState)(""),i=Object(h.a)(c,2),s=i[0],o=i[1],l=Object(r.useState)({value:"",copied:!1}),j=Object(h.a)(l,2),b=j[0],m=j[1],d=te(),u=function(){var e=Object(p.a)(x.a.mark((function e(t){var a,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get("/api/afiliados/"+t);case 2:return a=e.sent,e.next=5,a.data;case 5:r=e.sent,n(r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){var e=window.localStorage.getItem("jwt");if(e){var t=JSON.parse(e);o(t.idUser),u(t.idUser),m(Object(M.a)(Object(M.a)({},b),{},{value:"https://network.finanservs.com?Ref=".concat(t.idUser)}))}else m(Object(M.a)(Object(M.a)({},b),{},{value:"https://network.finanservs.com?Ref=".concat("1")}))}),[]);var O=function(){m(Object(M.a)(Object(M.a)({},b),{},{copied:!0})),Object(K.setTimeout)((function(){m(Object(M.a)(Object(M.a)({},b),{},{copied:!1}))}),300)};return Object(R.jsxs)(v.a,{sx:{pt:8},children:[Object(R.jsx)(S.a,{className:d.textShadow,variant:"h5",children:"Link de Referidos:"}),Object(R.jsx)(L.a,{component:"form",noValidate:!0,sx:{mt:1},children:Object(R.jsx)(g.a,{container:!0,direction:"column",alignItems:"center",children:Object(R.jsxs)("div",{style:{textAlign:"center"},children:[Object(R.jsx)("input",{style:ae,value:"https://network.finanservs.com"}),Object(R.jsx)(H.CopyToClipboard,{text:b.value,onCopy:function(){return O()},children:Object(R.jsx)($.a,{style:{color:"green",width:"20px"}})}),b.copied?Object(R.jsx)("span",{style:{color:"red",fontSize:"9px"},children:"Copiado..."}):null]})})}),Object(R.jsx)(_.a,{sx:{pb:2}}),Object(R.jsx)(g.a,{container:!0,direction:"column",alignItems:"center",children:Object(R.jsx)(W.a,{href:"https://finanservs.com?idRef=".concat(s),underline:"hover",target:"_blank",rel:"noreferrer",variant:"button",color:"primary",children:"Solicite su Pr\xe9stamo ya mismo!"})}),Object(R.jsx)(_.a,{sx:{pb:0}}),Object(R.jsx)(S.a,{className:d.textShadow,gutterBottom:!0,sx:{pt:2},variant:"h4",component:"h2",children:a.length?"Mis Referidos":"Sin Referidos"}),a.length>0?Object(R.jsx)(g.a,{container:!0,spacing:2,children:a.map((function(e){return Object(R.jsx)(g.a,{item:!0,xs:12,sm:6,md:4,children:Object(R.jsx)(f.a,{className:d.card,sx:{height:"100%",display:"flex",flexDirection:"column"},children:Object(R.jsxs)(z.a,{sx:{flexGrow:1},children:[Object(R.jsx)(S.a,{gutterBottom:!0,variant:"h5",component:"h2",children:e.nombre+" "+e.apellidos}),Object(R.jsxs)(S.a,{children:[Object(R.jsx)(G.a,{primary:"Email: ".concat(e.email)}),Object(R.jsx)(G.a,{primary:"Celular: ".concat(e.celular)}),Object(R.jsx)(G.a,{primary:"Creado: ".concat(e.dateCreated)})]})]})})},e.id)}))}):Object(R.jsx)(g.a,{container:!0,direction:"column",alignItems:"center",children:Object(R.jsx)(g.a,{item:!0,xs:12,sm:6,md:4,children:Object(R.jsx)(f.a,{sx:{height:"100%",flexDirection:"column"},children:Object(R.jsxs)(z.a,{sx:{flexGrow:1},children:[Object(R.jsx)(S.a,{style:{textAlign:"center"},children:"Comparta su c\xf3digo QR."}),Object(R.jsx)(S.a,{sx:{pt:4},textAlign:"center",children:Object(R.jsx)(X,{value:"https://network.finanservs.com?Ref=".concat(s||"1")})})]})})})})]})},ne=function(){return Object(R.jsx)(j.a,{children:Object(R.jsxs)("div",{className:"main-layout",children:[Object(R.jsx)(m.a,{position:"fixed",children:Object(R.jsx)(d.a,{children:Object(R.jsx)("img",{src:u,alt:"React Logo",width:"200"})})}),Object(R.jsxs)(b.c,{children:[Object(R.jsx)(b.a,{path:"/",element:Object(R.jsx)(I,{})}),Object(R.jsx)(b.a,{path:"/registro",element:Object(R.jsx)(V,{})}),Object(R.jsx)(b.a,{path:"/afiliados",element:Object(R.jsx)(re,{})}),Object(R.jsx)(b.a,{path:"/inicio",element:Object(R.jsx)(B,{})}),Object(R.jsx)(b.a,{path:"/logout",element:Object(R.jsx)(B,{})})]})]})})},ce=function(){return Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)(_.a,{sx:{py:4}}),Object(R.jsxs)(L.a,{sx:{bgcolor:"background.paper",p:2},component:"footer",children:[Object(R.jsx)(S.a,{variant:"subtitle1",align:"center",color:"text.primary",component:"p",children:"Soluciones financieras a su medida!"}),Object(R.jsxs)(S.a,{variant:"body2",color:"text.secondary",align:"center",children:["Copyright \xa9 ",(new Date).getFullYear(),"."]})]})]})},ie=Object(o.a)();var se=function(){return Object(R.jsxs)(l.a,{theme:ie,children:[Object(R.jsx)(s.a,{}),Object(R.jsx)(ne,{}),Object(R.jsx)(ce,{})]})},oe=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,240)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),r(e),n(e),c(e),i(e)}))};i.a.render(Object(R.jsx)(n.a.StrictMode,{children:Object(R.jsx)(se,{})}),document.getElementById("root")),oe()}},[[169,1,2]]]);
//# sourceMappingURL=main.0a58b935.chunk.js.map