(this["webpackJsonpfinanservs-afiliado"]=this["webpackJsonpfinanservs-afiliado"]||[]).push([[0],{146:function(e,t,a){},147:function(e,t,a){},182:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(35),i=a.n(c),s=(a(146),a(147),a(231)),o=a(124),l=a(243),j=a(11),b=a(43),d=a(15),u=a(38),m=a(236),O=a(242),x=a(123),p=a(233),h=a(245),f=a(254),g=a(255),v=a(256),w=a(122),y=a.n(w),S=a(121),N=a.n(S),C=a.p+"static/media/logo-horizontal-white.163462bd.png",k=a(26),A=a.n(k),R=a(33),E=a(247),I=a(241),T=a(246),F=a(249),D=a(69),W=a.p+"static/media/main-2.954443fd.jpg",L=a(31),q=a.n(L),P=a(2),U=function(){var e=Object(d.f)(),t=Object(n.useState)([]),a=Object(j.a)(t,2),r=a[0],c=a[1],i=Object(d.e)().search,s=new URLSearchParams(i),o=parseInt(s.get("Ref")||"0"),l=function(){var e=Object(R.a)(A.a.mark((function e(t){var a,n;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,q.a.get("/api/referido/"+t);case 4:return a=e.sent,e.next=7,a.data;case 7:n=e.sent,console.log(n),c(n);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){window.localStorage.getItem("jwt")?e("/afiliados"):(window.localStorage.getItem("Sponsor")||null)&&e("/inicio")}),[]),Object(n.useEffect)((function(){l(o)}),[o]),Object(P.jsxs)(T.a,{sx:{pt:12},children:[Object(P.jsx)(I.a,{container:!0,spacing:4,justifyContent:"center",children:Object(P.jsx)(I.a,{item:!0,xs:12,sm:6,md:4,children:Object(P.jsxs)(E.a,{sx:{height:"100%",display:"flex",flexDirection:"column"},children:[Object(P.jsx)(F.a,{component:"img",height:"300",image:W,alt:"Finanservs"}),Object(P.jsx)(b.b,{to:"/registro?Ref=".concat(o),children:Object(P.jsx)(O.a,{variant:"contained",fullWidth:!0,children:"Me quiero Registrar"})})]})})}),Object(P.jsx)(D.a,{sx:{pt:2},textAlign:"center",children:r.length>0&&"Referido por: ".concat(r[0].nombre," ").concat(r[0].apellidos)})]})},M=a(244),B=a(238),J=a(251),Q=a(240),V=a(252),z=a(250),_=a(116),G=a.n(_),Y=function(e){var t=e.type,a=e.message,n=e.setMsg;return setTimeout((function(){n(null)}),2e3),Object(P.jsx)("div",{className:"alert alert-"+t+" mt-3 "+(a?"d-block":"d-none"),role:"alert",children:a})},Z=Object(o.a)();function $(){var e=Object(d.f)(),t=Object(n.useState)(""),a=Object(j.a)(t,2),r=a[0],c=a[1],i=function(){var t=Object(R.a)(A.a.mark((function t(a){var n,r,i,s,o;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),n=new FormData(a.currentTarget),r={email:n.get("email"),password:n.get("password")},t.prev=3,t.next=6,q.a.post("/api/login/",r);case 6:return i=t.sent,t.next=9,i.data;case 9:(s=t.sent).token?(o={token:s.token,idUser:s.idUser,email:s.email},window.localStorage.setItem("jwt",JSON.stringify(o)),e("/afiliados")):c(s.message),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(3),c("Error: Query no permitido. Favor ver Log del Servidor.");case 16:case"end":return t.stop()}}),t,null,[[3,13]])})));return function(e){return t.apply(this,arguments)}}();return Object(n.useEffect)((function(){window.localStorage.getItem("jwt")?e("/afiliados"):(window.localStorage.getItem("Sponsor")||null)&&e("/inicio")}),[]),Object(P.jsx)(l.a,{theme:Z,children:Object(P.jsxs)(T.a,{component:"main",maxWidth:"xs",children:[Object(P.jsx)(s.a,{}),Object(P.jsxs)(z.a,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(P.jsx)(M.a,{sx:{m:1,bgcolor:"secondary.main"},children:Object(P.jsx)(G.a,{})}),Object(P.jsx)(D.a,{component:"h1",variant:"h5",children:"Inicio"}),Object(P.jsxs)(z.a,{component:"form",onSubmit:i,noValidate:!0,sx:{mt:1},children:[Object(P.jsx)(B.a,{margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email",name:"email",autoComplete:"email",autoFocus:!0}),Object(P.jsx)(B.a,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Contrase\xf1a",type:"password",id:"password",autoComplete:"current-password"}),Object(P.jsx)(J.a,{control:Object(P.jsx)(Q.a,{value:"remember",color:"primary"}),label:"Recuerdame"}),Object(P.jsx)(O.a,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Inicio"}),Object(P.jsxs)(I.a,{container:!0,children:[Object(P.jsx)(I.a,{item:!0,xs:!0,children:Object(P.jsx)(V.a,{href:"/afiliados",variant:"body2",children:"Olvido su Contrase\xf1a?"})}),Object(P.jsx)(I.a,{item:!0,children:Object(P.jsx)(V.a,{href:"/registro",variant:"body2",children:Object(P.jsx)(D.a,{children:"Registrarse"})})})]})]})]}),r?Object(P.jsx)(Y,{type:"warning",message:r,setMsg:c}):""]})})}var H=a(4),K=a(14),X=Object(o.a)();function ee(){var e=Object(n.useState)({email:"",firstName:"",lastName:"",phoneNumber:"",password:""}),t=Object(j.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)({email:!1,firstName:!1,lastName:!1,phoneNumber:!1,password:!1}),i=Object(j.a)(c,2),o=i[0],b=i[1],u=Object(d.f)(),m=Object(d.e)().search,x=new URLSearchParams(m).get("Ref"),p=function(){var e=Object(R.a)(A.a.mark((function e(t){var n,c,i,s;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n=new FormData(t.currentTarget),(c={email:n.get("email"),nombre:n.get("firstName"),apellidos:n.get("lastName"),celular:n.get("phoneNumber"),password:n.get("password"),id_ref:n.get("")}).nombre){e.next=7;break}return r(Object(K.a)(Object(K.a)({},a),{},{firstName:"Este es un campo obligatorio"})),b(Object(K.a)(Object(K.a)({},o),{},{firstName:!0})),e.abrupt("return");case 7:if(c.apellidos){e.next=11;break}return r(Object(K.a)(Object(K.a)({},a),{},{lastName:"Este es un campo obligatorio"})),b(Object(K.a)(Object(K.a)({},o),{},{lastName:!0})),e.abrupt("return");case 11:if(c.celular){e.next=15;break}return r(Object(K.a)(Object(K.a)({},a),{},{phoneNumber:"Este es un campo obligatorio"})),b(Object(K.a)(Object(K.a)({},o),{},{phoneNumber:!0})),e.abrupt("return");case 15:if(c.email){e.next=19;break}return r(Object(K.a)(Object(K.a)({},a),{},{email:"Este es un campo obligatorio"})),b(Object(K.a)(Object(K.a)({},o),{},{email:!0})),e.abrupt("return");case 19:if(c.password){e.next=23;break}return r(Object(K.a)(Object(K.a)({},a),{},{password:"Este es un campo obligatorio"})),b(Object(K.a)(Object(K.a)({},o),{},{password:!0})),e.abrupt("return");case 23:return e.prev=23,e.next=26,q.a.post("/api/veirify-email/",{email:n.get("email")});case 26:return i=e.sent,e.next=29,i.data;case 29:if(s=e.sent,!(s.idUser>0)){e.next=35;break}return u("/inicio"),alert("Usuario ya existe con el email = ".concat(n.get("email"))),e.abrupt("return");case 35:e.next=40;break;case 37:e.prev=37,e.t0=e.catch(23),console.log("Error: Query no permitido.  Favor ver Log del Servidor.");case 40:return e.prev=40,c.id_ref=x,console.log(c),e.next=45,q.a.post("/api/user/",c);case 45:x&&window.localStorage.setItem("Sponsor",x),u("/inicio"),e.next=52;break;case 49:e.prev=49,e.t1=e.catch(40),console.log("Error: Query no permitido.  Favor ver Log del Servidor.");case 52:case"end":return e.stop()}}),e,null,[[23,37],[40,49]])})));return function(t){return e.apply(this,arguments)}}(),h=function(e,t){e.target.value.length>0&&e.target.value.length<t?(b(Object(K.a)(Object(K.a)({},o),{},Object(H.a)({},e.target.name,!0))),r(Object(K.a)(Object(K.a)({},a),{},Object(H.a)({},e.target.name,"Campo debe tener m\xednimo ".concat(t," caracteres"))))):(b(Object(K.a)(Object(K.a)({},o),{},Object(H.a)({},e.target.name,!1))),r(Object(K.a)(Object(K.a)({},a),{},Object(H.a)({},e.target.name,""))))};return Object(P.jsx)(l.a,{theme:X,children:Object(P.jsxs)(T.a,{component:"main",maxWidth:"xs",children:[Object(P.jsx)(s.a,{}),Object(P.jsxs)(z.a,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(P.jsx)(D.a,{component:"h1",variant:"h5",children:"Nuevo"}),Object(P.jsxs)(z.a,{component:"form",noValidate:!0,autoComplete:"off",onSubmit:p,sx:{mt:3},children:[Object(P.jsxs)(I.a,{container:!0,spacing:2,children:[Object(P.jsx)(I.a,{item:!0,xs:12,sm:6,children:Object(P.jsx)(B.a,{name:"firstName",required:!0,fullWidth:!0,id:"firstName",label:"Nombre",autoFocus:!0,autoComplete:"family-name",error:o.firstName,onChange:function(e){return h(e,3)},helperText:a.firstName})}),Object(P.jsx)(I.a,{item:!0,xs:12,sm:6,children:Object(P.jsx)(B.a,{name:"lastName",required:!0,fullWidth:!0,id:"lastName",label:"Apellidos",autoComplete:"family-name",error:o.lastName,onChange:function(e){return h(e,3)},helperText:a.lastName})}),Object(P.jsx)(I.a,{item:!0,xs:12,sm:6,children:Object(P.jsx)(B.a,{required:!0,fullWidth:!0,id:"phoneNumber",label:"Celular",name:"phoneNumber",error:o.phoneNumber,onChange:function(e){return function(e){/[0-9]{4}-[0-9]{4}/.test(e.target.value)?(b(Object(K.a)(Object(K.a)({},o),{},Object(H.a)({},e.target.name,!1))),r(Object(K.a)(Object(K.a)({},a),{},Object(H.a)({},e.target.name,"")))):(b(Object(K.a)(Object(K.a)({},o),{},Object(H.a)({},e.target.name,!0))),r(Object(K.a)(Object(K.a)({},a),{},Object(H.a)({},e.target.name,"Debe indicar n\xfamero de c\xe9lular ####-####."))))}(e)},helperText:a.phoneNumber})}),Object(P.jsx)(I.a,{item:!0,xs:12,children:Object(P.jsx)(B.a,{required:!0,fullWidth:!0,id:"email",label:"Email",type:"email",name:"email",onChange:function(e){return function(e){/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(e.target.value)?(b(Object(K.a)(Object(K.a)({},o),{},Object(H.a)({},e.target.name,!1))),r(Object(K.a)(Object(K.a)({},a),{},Object(H.a)({},e.target.name,"")))):(b(Object(K.a)(Object(K.a)({},o),{},Object(H.a)({},e.target.name,!0))),r(Object(K.a)(Object(K.a)({},a),{},Object(H.a)({},e.target.name,"Debe indicar un nombre Email V\xe1lido."))))}(e)},error:o.email,helperText:a.email})}),Object(P.jsx)(I.a,{item:!0,xs:12,children:Object(P.jsx)(B.a,{required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"Password",error:o.password,onChange:function(e){return h(e,6)},helperText:a.password})})]}),Object(P.jsx)(O.a,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Resgistro"}),Object(P.jsx)(I.a,{container:!0,justifyContent:"flex-end",children:Object(P.jsx)(I.a,{item:!0,children:Object(P.jsxs)(V.a,{href:"/inicio",children:["Ya tienes una Cuenta?",Object(P.jsx)(D.a,{children:"Iniciar Sesi\xf3n"})]})})})]})]})]})})}var te=a(253),ae=a(234),ne=a(235),re=a(237),ce=a(119),ie=a.n(ce),se=a(117),oe=a(118),le=a(176),je="0px 4px 10px rgba(0, 0, 0, 0.25)",be=Object(re.a)({card:{textShadow:je},textShadow:{textShadow:je,color:"#e07510",textAlign:"center"}}),de={width:"85%",fontSize:"1.3em",height:"30px",color:"blue",border:"none",marginRight:"10px"},ue=function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),i=Object(j.a)(c,2),s=i[0],o=i[1],l=Object(n.useState)({value:"",copied:!1}),b=Object(j.a)(l,2),d=b[0],u=b[1],m=be(),x=function(){var e=Object(R.a)(A.a.mark((function e(t){var a,n;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q.a.get("/api/afiliados/"+t);case 2:return a=e.sent,e.next=5,a.data;case 5:n=e.sent,r(n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){var e=window.localStorage.getItem("jwt");if(e){var t=JSON.parse(e);o(t.idUser),x(t.idUser),u(Object(K.a)(Object(K.a)({},d),{},{value:"https://network.finanservs.com?Ref=".concat(t.idUser)}))}else u(Object(K.a)(Object(K.a)({},d),{},{value:"https://network.finanservs.com?Ref=".concat("1")}))}),[]);var p=function(){u(Object(K.a)(Object(K.a)({},d),{},{copied:!0})),Object(oe.setTimeout)((function(){u(Object(K.a)(Object(K.a)({},d),{},{copied:!1}))}),300)};return Object(P.jsxs)(T.a,{sx:{pt:8},children:[Object(P.jsx)(D.a,{className:m.textShadow,variant:"h5",children:"Link de Referidos:"}),Object(P.jsx)(z.a,{component:"form",noValidate:!0,sx:{mt:1},children:Object(P.jsx)(I.a,{container:!0,direction:"column",alignItems:"center",children:Object(P.jsxs)("div",{style:{textAlign:"center"},children:[Object(P.jsx)("input",{style:de,value:"https://network.finanservs.com"}),Object(P.jsx)(se.CopyToClipboard,{text:d.value,onCopy:function(){return p()},children:Object(P.jsx)(ie.a,{style:{color:"green",width:"20px"}})}),d.copied?Object(P.jsx)("span",{style:{color:"red",fontSize:"9px"},children:"Copiado..."}):null]})})}),Object(P.jsx)(ae.a,{sx:{pb:2}}),Object(P.jsx)(I.a,{container:!0,direction:"column",alignItems:"center",children:Object(P.jsx)(O.a,{fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:Object(P.jsx)(V.a,{href:"https://finanservs.com?idRef=".concat(s),variant:"h5",underline:"hover",target:"_blank",rel:"noreferrer",color:"white",children:"Pide tu pr\xe9stamo aqu\xed!"})})}),Object(P.jsx)(ae.a,{sx:{pb:0}}),Object(P.jsx)(D.a,{className:m.textShadow,gutterBottom:!0,sx:{pt:2},variant:"h4",component:"h2",children:a.length?"Mis Referidos":"Sin Referidos"}),a.length>0?Object(P.jsx)(I.a,{container:!0,spacing:2,children:a.map((function(e){return Object(P.jsx)(I.a,{item:!0,xs:12,sm:6,md:4,children:Object(P.jsx)(E.a,{className:m.card,sx:{height:"100%",display:"flex",flexDirection:"column"},children:Object(P.jsxs)(te.a,{sx:{flexGrow:1},children:[Object(P.jsx)(D.a,{gutterBottom:!0,variant:"h5",component:"h2",children:e.nombre+" "+e.apellidos}),Object(P.jsxs)(D.a,{children:[Object(P.jsx)(ne.a,{primary:"Email: ".concat(e.email)}),Object(P.jsx)(ne.a,{primary:"Celular: ".concat(e.celular)}),Object(P.jsx)(ne.a,{primary:"Creado: ".concat(e.dateCreated)})]})]})})},e.id)}))}):Object(P.jsx)(I.a,{container:!0,direction:"column",alignItems:"center",children:Object(P.jsx)(I.a,{item:!0,xs:12,sm:6,md:4,children:Object(P.jsx)(E.a,{sx:{height:"100%",flexDirection:"column"},children:Object(P.jsxs)(te.a,{sx:{flexGrow:1},children:[Object(P.jsx)(D.a,{style:{textAlign:"center"},children:"Comparta su c\xf3digo QR."}),Object(P.jsx)(D.a,{sx:{pt:4},textAlign:"center",children:Object(P.jsx)(le,{value:"https://network.finanservs.com?Ref=".concat(s||"1")})})]})})})})]})},me=function(){var e=Object(n.useState)(!1),t=Object(j.a)(e,2),a=(t[0],t[1]),r=Object(n.useState)(!0),c=Object(j.a)(r,2),i=(c[0],c[1],Object(n.useState)(null)),s=Object(j.a)(i,2),o=s[0],l=s[1],w=Object(u.a)(),S=Object(m.a)(w.breakpoints.up("md"));return Object(P.jsx)(b.a,{children:Object(P.jsxs)("div",{className:"main-layout",children:[Object(P.jsx)(g.a,{position:"fixed",children:Object(P.jsx)(v.a,{children:Object(P.jsxs)("div",{className:"menu-nav",children:[Object(P.jsx)("div",{className:"logo",children:Object(P.jsx)("img",{src:C,alt:"React Logo",width:"200"})}),Object(P.jsxs)("div",{className:"menu",children:[!S&&function(){var e=Boolean(o),t=function(){l(null)};return console.log("AAAAAAAAAAAAAAAAAAAAAAAAA"),Object(P.jsxs)("div",{children:[Object(P.jsx)(O.a,{id:"fade-button","aria-controls":"fade-menu","aria-haspopup":"true","aria-expanded":e?"true":void 0,onClick:function(e){l(e.currentTarget)},children:"Dashboard"}),Object(P.jsxs)(x.a,{id:"fade-menu",MenuListProps:{"aria-labelledby":"fade-button"},anchorEl:o,open:e,onClose:t,TransitionComponent:p.a,children:[Object(P.jsx)(h.a,{onClick:t,children:"Profile"}),Object(P.jsx)(h.a,{onClick:t,children:"My account"}),Object(P.jsx)(h.a,{onClick:t,children:"Logout"})]})]})}(),S&&function(){var e=Boolean(o);return Object(P.jsx)(P.Fragment,{children:Object(P.jsx)(f.a,{color:"inherit",onClick:function(){return a(!e)},children:e?Object(P.jsx)(N.a,{}):Object(P.jsx)(y.a,{})})})}]})]})})}),Object(P.jsxs)(d.c,{children:[Object(P.jsx)(d.a,{path:"/",element:Object(P.jsx)(U,{})}),Object(P.jsx)(d.a,{path:"/registro",element:Object(P.jsx)(ee,{})}),Object(P.jsx)(d.a,{path:"/afiliados",element:Object(P.jsx)(ue,{})}),Object(P.jsx)(d.a,{path:"/inicio",element:Object(P.jsx)($,{})}),Object(P.jsx)(d.a,{path:"/logout",element:Object(P.jsx)($,{})})]})]})})},Oe=function(){return Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(ae.a,{sx:{py:4}}),Object(P.jsxs)(z.a,{sx:{bgcolor:"background.paper",p:2},component:"footer",children:[Object(P.jsx)(D.a,{variant:"subtitle1",align:"center",color:"text.primary",component:"p",children:"Soluciones financieras a su medida!"}),Object(P.jsxs)(D.a,{variant:"body2",color:"text.secondary",align:"center",children:["Copyright \xa9 ",(new Date).getFullYear(),"."]})]})]})},xe=Object(o.a)();var pe=function(){return Object(P.jsxs)(l.a,{theme:xe,children:[Object(P.jsx)(s.a,{}),Object(P.jsx)(me,{}),Object(P.jsx)(Oe,{})]})},he=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,257)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),c(e),i(e)}))};i.a.render(Object(P.jsx)(r.a.StrictMode,{children:Object(P.jsx)(pe,{})}),document.getElementById("root")),he()}},[[182,1,2]]]);
//# sourceMappingURL=main.653e45ab.chunk.js.map