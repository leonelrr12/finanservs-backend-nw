(this["webpackJsonpfinanservs-afiliado"]=this["webpackJsonpfinanservs-afiliado"]||[]).push([[0],{150:function(e,t,n){},188:function(e,t,n){"use strict";n.r(t);var a,r,c,i,s,o,l,j,b=n(0),d=n.n(b),m=n(33),u=n.n(m),x=(n(150),n(29)),O=n(19),h=n(31),p=n(113),g=n(18),f=n(129),v={colors:{white:"#ffffff",dark:"#27212e",black:"#373737",accent:"#E53251",gray:"#F2F2F2",blue:"#1976D2",silver:"#716385"},dims:{widths:{small:"30em",forms:"17.5em"},padding:{largePadding:"0.8em 1.2em",mediumPadding:"2em",tallPadding:"3em 1.5em"},margin:{small:"0.5em",intersection:"1em",normal:"2em",inline:"0.5ch"},borderRadius:{small:"0.4em",normal:"0.8em"},fonts:{small:"0.8em",medium:"1.5em",title:"3em"},circle:{small:"1em",medium:"3em",big:"6em"}},shadows:{depth1:"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",depth2:"0 4px 6px -1 rgba(0, 0, 0, 0.1), 0 2px 4px -1 rgba(0, 0, 0, 0.06)",depth3:"0 20px 25px -5 rgba(0, 0, 0, 0.1), 0 20px 25px -5 rgba(0, 0, 0, 0.04)"}},w=Object(O.b)(a||(a=Object(g.a)(["\n  * { box-sizing: border-box }\n"]))),y=O.c.div(r||(r=Object(g.a)(["\n    display: grid;\n    min-height: 100vh;\n    grid-template-rows: auto minmax(0, 1fr) auto;\n    background-color: ",";\n"])),(function(e){return e.theme.colors.gray})),N=(O.c.div(c||(c=Object(g.a)(["\n    width: ",";\n    max-width: 100vw;\n    margin: 0 auto;\n"])),(function(e){return e.theme.dims.widths.small})),O.c.div(i||(i=Object(g.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 100%;\n    width: 100%;\n"]))),O.c.button(s||(s=Object(g.a)(["\n    outline: 0;\n    border: 0;\n    background-color: transparent;\n    font-size: 1em;\n    display: block;\n"]))),Object(O.c)(f.a)(o||(o=Object(g.a)(["\n    & svg {\n        width: ",";\n        height: ",";\n        display: inline-block;\n        vertical-align: bottom;\n    }\n    background-color: ",";\n    cursor: pointer;\n    border-radius: 50%;\n    width: ",";\n    height: ",";\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-bottom: ",";\n\n    & path {\n        fill: "," !important\n    }\n"])),(function(e){return e.theme.dims.circle.small}),(function(e){return e.theme.dims.circle.small}),(function(e){var t=e.theme;return e.active?t.colors.accent:t.colors.dark}),(function(e){return e.theme.dims.circle.medium}),(function(e){return e.theme.dims.circle.medium}),(function(e){return e.theme.dims.margin.intersection}),(function(e){return e.theme.colors.white})),O.c.h1(l||(l=Object(g.a)(["\n    font-size: ",";\n    font-weight: bold;\n    display: inline-block;\n    margin-block-start: 0;\n    margin-block-end: 0;\n    margin-left: ",";\n    vertical-align: middle;\n"])),(function(e){return e.theme.dims.fonts.medium}),(function(e){return e.theme.dims.margin.intersection})),O.c.footer(j||(j=Object(g.a)(["\n    display: grid;\n    grid-template-columns: minmax(auto, 1fr) auto minmax(auto, 1fr);\n    border: 1px solid;\n    border-color: ",";\n    height: 3em;\n    text-align: center;\n    justify-content: space-around;\n    align-items: center;\n"])),(function(e){return e.theme.colors.gray})),n(25)),k=n(62),S=n(86),C=n(119),R=n.n(C),F=n(22),E=n.n(F),T=n(34),D=n(38),I=n.n(D),W="",P=Object(k.b)("user/signIn",function(){var e=Object(T.a)(E.a.mark((function e(t){var n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.post("".concat(W,"/api/login"),{user:t});case 2:return n=e.sent,console.log(n),e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),q=Object(k.c)({name:"user",initialState:{user:{},status:""},reducers:{logOut:function(e){e.status="",e.user={}}},extraReducers:function(e){e.addCase(P.pending,(function(e){e.status="loading"})),e.addCase(P.fulfilled,(function(e,t){e.user=t.payload,e.status="success"})),e.addCase(P.rejected,(function(e){e.status="failed"}))}}),A=q.actions.logOut,L=q.reducer,U=Object(N.b)({user:L}),z={key:"root",storage:R.a,whitelist:["user"],blacklist:[]},M=Object(S.a)(z,U),B=Object(k.a)({reducer:M}),V=Object(S.b)(B),Q=n(15),_=n(12),G=n(247),J=n(242),Y=n(246),Z=n(253),$=n(243),H=n(248),K=n.p+"static/media/main-2.954443fd.jpg",X=n(1),ee=function(){var e=Object(b.useState)([]),t=Object(_.a)(e,2),n=t[0],a=t[1],r=Object(Q.g)().search,c=new URLSearchParams(r),i=parseInt(c.get("Ref")||"0"),s=function(){var e=Object(T.a)(E.a.mark((function e(t){var n,r;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,I.a.get("/api/referido/"+t);case 4:return n=e.sent,e.next=7,n.data;case 7:r=e.sent,a(r),i&&window.localStorage.setItem("Sponsor",i.toString());case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.useEffect)((function(){s(i)}),[i]),Object(X.jsxs)(Y.a,{sx:{pt:12},children:[Object(X.jsx)(J.a,{container:!0,spacing:4,justifyContent:"center",children:Object(X.jsx)(J.a,{item:!0,xs:12,sm:6,md:4,children:Object(X.jsxs)(G.a,{sx:{height:"100%",display:"flex",flexDirection:"column"},children:[Object(X.jsx)(Z.a,{component:"img",height:"300",image:K,alt:"Finanservs"}),Object(X.jsx)(x.b,{to:"/registro?Ref=".concat(i),children:Object(X.jsx)($.a,{variant:"contained",fullWidth:!0,children:"Me quiero Registrar"})})]})})}),Object(X.jsx)(H.a,{sx:{pt:2},textAlign:"center",children:n.length>0&&"Referido por: ".concat(n[0].nombre," ").concat(n[0].apellidos)})]})},te=n(244),ne=n(235),ae=n(237),re=n(250),ce=n(239),ie=n(249),se=n(124),oe=n.n(se),le=n(128),je=n(245),be=function(e){var t=e.type,n=e.message,a=e.setMsg;return setTimeout((function(){a("")}),2e3),Object(X.jsx)("div",{className:"alert alert-"+t+" mt-3 "+(n?"d-block":"d-none"),role:"alert",children:n})},de=Object(le.a)();function me(){var e=Object(h.b)(),t=Object(b.useState)(""),n=Object(_.a)(t,2),a=n[0],r=n[1],c=function(){var t=Object(T.a)(E.a.mark((function t(n){var a;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.preventDefault(),a=new FormData(n.currentTarget),e(P({email:(a.get("email")||"").toString(),password:(a.get("password")||"").toString()}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(X.jsx)(je.a,{theme:de,children:Object(X.jsxs)(Y.a,{component:"main",maxWidth:"xs",children:[Object(X.jsx)(ne.a,{}),Object(X.jsxs)(ie.a,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(X.jsx)(te.a,{sx:{m:1,bgcolor:"secondary.main"},children:Object(X.jsx)(oe.a,{})}),Object(X.jsx)(H.a,{component:"h1",variant:"h5",children:"Inicio"}),Object(X.jsxs)(ie.a,{component:"form",onSubmit:c,noValidate:!0,sx:{mt:1},children:[Object(X.jsx)(ae.a,{margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email",name:"email",autoComplete:"email",autoFocus:!0}),Object(X.jsx)(ae.a,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Contrase\xf1a",type:"password",id:"password",autoComplete:"current-password"}),Object(X.jsx)(re.a,{control:Object(X.jsx)(ce.a,{value:"remember",color:"primary"}),label:"Recuerdame"}),Object(X.jsx)($.a,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Inicio"}),Object(X.jsxs)(J.a,{container:!0,children:[Object(X.jsx)(J.a,{item:!0,xs:!0,children:Object(X.jsx)(x.b,{to:"/password",children:"Olvido su Contrase\xf1a?"})}),Object(X.jsx)(J.a,{item:!0,children:Object(X.jsx)(x.b,{to:"/registro",children:Object(X.jsx)(H.a,{children:"Registrarse"})})})]})]})]}),a?Object(X.jsx)(be,{type:"warning",message:a,setMsg:r}):""]})})}var ue=n(4),xe=n(14),Oe=Object(le.a)();function he(){var e=Object(b.useState)({email:"",firstName:"",lastName:"",phoneNumber:"",password:""}),t=Object(_.a)(e,2),n=t[0],a=t[1],r=Object(b.useState)({email:!1,firstName:!1,lastName:!1,phoneNumber:!1,password:!1}),c=Object(_.a)(r,2),i=c[0],s=c[1],o=Object(Q.h)(),l=Object(Q.g)().search,j=new URLSearchParams(l).get("Ref");j||(j=window.localStorage.getItem("Sponsor"));var d=function(){var e=Object(T.a)(E.a.mark((function e(t){var r,c,l,b;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),r=new FormData(t.currentTarget),(c={email:r.get("email"),nombre:r.get("firstName"),apellidos:r.get("lastName"),celular:r.get("phoneNumber"),password:r.get("password"),id_ref:r.get("")}).nombre){e.next=7;break}return a(Object(xe.a)(Object(xe.a)({},n),{},{firstName:"Este es un campo obligatorio"})),s(Object(xe.a)(Object(xe.a)({},i),{},{firstName:!0})),e.abrupt("return");case 7:if(c.apellidos){e.next=11;break}return a(Object(xe.a)(Object(xe.a)({},n),{},{lastName:"Este es un campo obligatorio"})),s(Object(xe.a)(Object(xe.a)({},i),{},{lastName:!0})),e.abrupt("return");case 11:if(c.celular){e.next=15;break}return a(Object(xe.a)(Object(xe.a)({},n),{},{phoneNumber:"Este es un campo obligatorio"})),s(Object(xe.a)(Object(xe.a)({},i),{},{phoneNumber:!0})),e.abrupt("return");case 15:if(c.email){e.next=19;break}return a(Object(xe.a)(Object(xe.a)({},n),{},{email:"Este es un campo obligatorio"})),s(Object(xe.a)(Object(xe.a)({},i),{},{email:!0})),e.abrupt("return");case 19:if(c.password){e.next=23;break}return a(Object(xe.a)(Object(xe.a)({},n),{},{password:"Este es un campo obligatorio"})),s(Object(xe.a)(Object(xe.a)({},i),{},{password:!0})),e.abrupt("return");case 23:return e.prev=23,e.next=26,I.a.post("/api/veirify-email/",{email:r.get("email")});case 26:return l=e.sent,e.next=29,l.data;case 29:if(b=e.sent,!(b.idUser>0)){e.next=35;break}return o("/inicio"),alert("Usuario ya existe con el email = ".concat(r.get("email"))),e.abrupt("return");case 35:e.next=40;break;case 37:e.prev=37,e.t0=e.catch(23),console.log("Error: Query no permitido.  Favor ver Log del Servidor.");case 40:return e.prev=40,c.id_ref=j,console.log(c),e.next=45,I.a.post("/api/user/",c);case 45:o("/inicio"),e.next=51;break;case 48:e.prev=48,e.t1=e.catch(40),console.log("Error: Query no permitido.  Favor ver Log del Servidor.");case 51:case"end":return e.stop()}}),e,null,[[23,37],[40,48]])})));return function(t){return e.apply(this,arguments)}}(),m=function(e,t){e.target.value.length>0&&e.target.value.length<t?(s(Object(xe.a)(Object(xe.a)({},i),{},Object(ue.a)({},e.target.name,!0))),a(Object(xe.a)(Object(xe.a)({},n),{},Object(ue.a)({},e.target.name,"Campo debe tener m\xednimo ".concat(t," caracteres"))))):(s(Object(xe.a)(Object(xe.a)({},i),{},Object(ue.a)({},e.target.name,!1))),a(Object(xe.a)(Object(xe.a)({},n),{},Object(ue.a)({},e.target.name,""))))};return Object(X.jsx)(je.a,{theme:Oe,children:Object(X.jsxs)(Y.a,{component:"main",maxWidth:"xs",children:[Object(X.jsx)(ne.a,{}),Object(X.jsxs)(ie.a,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(X.jsx)(H.a,{component:"h1",variant:"h5",children:"Nuevo"}),Object(X.jsxs)(ie.a,{component:"form",noValidate:!0,autoComplete:"off",onSubmit:d,sx:{mt:3},children:[Object(X.jsxs)(J.a,{container:!0,spacing:2,children:[Object(X.jsx)(J.a,{item:!0,xs:12,sm:6,children:Object(X.jsx)(ae.a,{name:"firstName",required:!0,fullWidth:!0,id:"firstName",label:"Nombre",autoFocus:!0,autoComplete:"family-name",error:i.firstName,onChange:function(e){return m(e,3)},helperText:n.firstName})}),Object(X.jsx)(J.a,{item:!0,xs:12,sm:6,children:Object(X.jsx)(ae.a,{name:"lastName",required:!0,fullWidth:!0,id:"lastName",label:"Apellidos",autoComplete:"family-name",error:i.lastName,onChange:function(e){return m(e,3)},helperText:n.lastName})}),Object(X.jsx)(J.a,{item:!0,xs:12,sm:6,children:Object(X.jsx)(ae.a,{required:!0,fullWidth:!0,id:"phoneNumber",label:"Celular",name:"phoneNumber",error:i.phoneNumber,onChange:function(e){return function(e){/[0-9]{4}-[0-9]{4}/.test(e.target.value)?(s(Object(xe.a)(Object(xe.a)({},i),{},Object(ue.a)({},e.target.name,!1))),a(Object(xe.a)(Object(xe.a)({},n),{},Object(ue.a)({},e.target.name,"")))):(s(Object(xe.a)(Object(xe.a)({},i),{},Object(ue.a)({},e.target.name,!0))),a(Object(xe.a)(Object(xe.a)({},n),{},Object(ue.a)({},e.target.name,"Debe indicar n\xfamero de c\xe9lular ####-####."))))}(e)},helperText:n.phoneNumber})}),Object(X.jsx)(J.a,{item:!0,xs:12,children:Object(X.jsx)(ae.a,{required:!0,fullWidth:!0,id:"email",label:"Email",type:"email",name:"email",onChange:function(e){return function(e){/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(e.target.value)?(s(Object(xe.a)(Object(xe.a)({},i),{},Object(ue.a)({},e.target.name,!1))),a(Object(xe.a)(Object(xe.a)({},n),{},Object(ue.a)({},e.target.name,"")))):(s(Object(xe.a)(Object(xe.a)({},i),{},Object(ue.a)({},e.target.name,!0))),a(Object(xe.a)(Object(xe.a)({},n),{},Object(ue.a)({},e.target.name,"Debe indicar un nombre Email V\xe1lido."))))}(e)},error:i.email,helperText:n.email})}),Object(X.jsx)(J.a,{item:!0,xs:12,children:Object(X.jsx)(ae.a,{required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"Password",error:i.password,onChange:function(e){return m(e,6)},helperText:n.password})})]}),Object(X.jsx)($.a,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Resgistro"}),Object(X.jsx)(J.a,{container:!0,justifyContent:"flex-end",children:Object(X.jsx)(J.a,{item:!0,children:Object(X.jsxs)(x.b,{to:"/inicio",children:["Ya tienes una Cuenta?",Object(X.jsx)(H.a,{children:"Iniciar Sesi\xf3n"})]})})})]})]})]})})}var pe,ge,fe,ve,we,ye=n(251),Ne=n(254),ke=n(255),Se=n(256),Ce=n(238),Re=n(127),Fe=n.n(Re),Ee=n(125),Te=n(126),De=n(182),Ie="0px 4px 10px rgba(0, 0, 0, 0.25)",We=Object(Ce.a)({card:{textShadow:Ie},textShadow:{textShadow:Ie,color:"#e07510",textAlign:"center"}}),Pe={width:"85%",fontSize:"1.3em",height:"30px",color:"blue",border:"none",marginRight:"10px"},qe=function(){var e=Object(h.c)((function(e){return e.user.user})).idUser,t=Object(b.useState)([]),n=Object(_.a)(t,2),a=n[0],r=n[1],c=Object(b.useState)({value:"",copied:!1}),i=Object(_.a)(c,2),s=i[0],o=i[1],l=We(),j=function(){var e=Object(T.a)(E.a.mark((function e(t){var n,a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.get("/api/afiliados/"+t);case 2:return n=e.sent,e.next=5,n.data;case 5:a=e.sent,r(a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(b.useEffect)((function(){o(Object(xe.a)(Object(xe.a)({},s),{},{value:"https://network.finanservs.com?Ref=".concat(e)}))}),[]),Object(b.useEffect)((function(){j(e)}),[e]);var d=function(){o(Object(xe.a)(Object(xe.a)({},s),{},{copied:!0})),Object(Te.setTimeout)((function(){o(Object(xe.a)(Object(xe.a)({},s),{},{copied:!1}))}),300)};return Object(X.jsxs)(Y.a,{sx:{pt:8},children:[Object(X.jsx)(H.a,{className:l.textShadow,variant:"h5",children:"Link de Referidos:"}),Object(X.jsx)(ie.a,{component:"form",noValidate:!0,sx:{mt:1},children:Object(X.jsx)(J.a,{container:!0,direction:"column",alignItems:"center",children:Object(X.jsxs)("div",{style:{textAlign:"center"},children:[Object(X.jsx)("input",{style:Pe,value:"https://network.finanservs.com"}),Object(X.jsx)(Ee.CopyToClipboard,{text:s.value,onCopy:function(){return d()},children:Object(X.jsx)(Fe.a,{style:{color:"green",width:"20px"}})}),s.copied?Object(X.jsx)("span",{style:{color:"red",fontSize:"9px"},children:"Copiado..."}):null]})})}),Object(X.jsx)(J.a,{container:!0,direction:"column",alignItems:"center",children:Object(X.jsx)($.a,{fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:Object(X.jsx)(Ne.a,{href:"https://finanservs.com?idRef=".concat(e),variant:"h5",underline:"hover",target:"_blank",rel:"noreferrer",color:"white",children:"Pide tu pr\xe9stamo aqu\xed!"})})}),Object(X.jsx)(ke.a,{sx:{pb:0}}),Object(X.jsx)(H.a,{className:l.textShadow,gutterBottom:!0,sx:{pt:2},variant:"h4",component:"h2",children:a.length?"Mis Referidos":"Sin Referidos"}),a.length>0?Object(X.jsx)(J.a,{container:!0,spacing:2,children:a.map((function(e){return Object(X.jsx)(J.a,{item:!0,xs:6,sm:6,md:4,children:Object(X.jsx)(G.a,{className:l.card,sx:{height:"100%",display:"flex",flexDirection:"column"},children:Object(X.jsxs)(ye.a,{sx:{flexGrow:1},children:[Object(X.jsx)(H.a,{gutterBottom:!0,variant:"h5",component:"h2",children:e.nombre+" "+e.apellidos}),Object(X.jsxs)(H.a,{children:[Object(X.jsx)(Se.a,{primary:"Email: ".concat(e.email)}),Object(X.jsx)(Se.a,{primary:"Celular: ".concat(e.celular)}),Object(X.jsx)(Se.a,{primary:"Creado: ".concat(e.dateCreated)})]})]})})},e.id)}))}):"",Object(X.jsx)("br",{}),Object(X.jsx)(J.a,{container:!0,direction:"column",alignItems:"center",children:Object(X.jsx)(J.a,{item:!0,xs:12,sm:12,md:12,spacing:2,children:Object(X.jsx)(G.a,{sx:{height:"100%",flexDirection:"column"},children:Object(X.jsxs)(ye.a,{sx:{flexGrow:1},children:[Object(X.jsx)(H.a,{style:{textAlign:"center"},children:"Comparta su c\xf3digo QR."}),Object(X.jsx)(H.a,{sx:{pt:4},textAlign:"center",children:Object(X.jsx)(De,{value:"https://network.finanservs.com?Ref=".concat(e||"1")})})]})})})})]})},Ae=function(){return Object(X.jsx)("div",{children:Object(X.jsx)("h1",{children:"Password"})})},Le=function(){var e=Object(h.c)((function(e){return e.user.user})).idUser;return Object(X.jsxs)(Q.e,{children:[Object(X.jsxs)(Q.c,{path:"/",element:e?Object(X.jsx)(Q.a,{to:"/afiliados"}):Object(X.jsx)(Q.b,{}),children:[Object(X.jsx)(Q.c,{path:"",element:Object(X.jsx)(ee,{})}),Object(X.jsx)(Q.c,{path:"/registro",element:Object(X.jsx)(he,{})}),Object(X.jsx)(Q.c,{path:"inicio",element:Object(X.jsx)(me,{})}),Object(X.jsx)(Q.c,{path:"/password",element:Object(X.jsx)(Ae,{})})]}),Object(X.jsxs)(Q.c,{path:"",element:e?Object(X.jsx)(Q.b,{}):Object(X.jsx)(Q.a,{to:"/inicio"}),children:[Object(X.jsx)(Q.c,{path:"/",element:Object(X.jsx)(ee,{})}),Object(X.jsx)(Q.c,{path:"/registro",element:Object(X.jsx)(he,{})}),Object(X.jsx)(Q.c,{path:"/afiliados",element:Object(X.jsx)(qe,{})}),Object(X.jsx)(Q.c,{path:"/inicio",element:Object(X.jsx)(me,{})})]})]})},Ue=function(){return Object(X.jsx)(X.Fragment,{children:Object(X.jsxs)(ie.a,{sx:{bgcolor:"background.paper",p:2,my:4},component:"footer",children:[Object(X.jsx)(H.a,{variant:"subtitle1",align:"center",color:"text.primary",component:"p",children:"Soluciones financieras a su medida!"}),Object(X.jsxs)(H.a,{variant:"body2",color:"text.secondary",align:"center",children:["Copyright \xa9 ",(new Date).getFullYear(),". LR"]})]})})},ze=n.p+"static/media/logo-horizontal-white.163462bd.png",Me=(n.p,function(){return Object(X.jsx)("img",{src:ze,alt:"Finanservs cr\xe9dito pr\xe9stamo",width:"200px"})}),Be=O.c.nav(pe||(pe=Object(g.a)(["\n    background-color: ",";\n    height: 100%;\n"])),(function(e){return e.theme.colors.blue})),Ve=function(){var e=Object(h.c)((function(e){return e.user.user})).idUser,t=Object(Q.h)(),n=Object(h.b)();return Object(X.jsx)(Be,{className:"navbar navbar-expand-lg navbar-dark",children:Object(X.jsxs)("div",{className:"container-fluid mx-3",children:[Object(X.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarScroll","aria-controls":"navbarScroll","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(X.jsx)("span",{className:"navbar-toggler-icon"})}),Object(X.jsx)("div",{className:"collapse navbar-collapse",id:"navbarScroll",children:Object(X.jsx)("div",{className:"d-flex",children:e?Object(X.jsx)("button",{onClick:function(){n(A()),t("/",{replace:!0})},className:"btn btn-info",type:"button",children:"Salir"}):""})})]})})},Qe=O.c.div(ge||(ge=Object(g.a)(["\n    background-color: ",";\n    padding-top: 10px;\n    padding-left: 20px;\n"])),(function(e){return e.theme.colors.blue})),_e=O.c.header(fe||(fe=Object(g.a)(["\n    display: grid;\n    min-width: 100vh;\n    height: 64px;\n    grid-template-columns: auto 130px;\n\n    grid-template-areas: 'logo menu';\n\n    & .logo { grid-area: logo; }\n\n    & .menu { grid-area: menu; }\n"]))),Ge=Object(O.c)((function(){return Object(X.jsxs)(_e,{children:[Object(X.jsx)(Qe,{className:"logo",children:Object(X.jsx)(Me,{})}),Object(X.jsx)("div",{className:"menu",children:Object(X.jsx)(Ve,{})})]})}))(ve||(ve=Object(g.a)(["\n    text-align: center;\n    padding: 1em 0;\n    img {\n        vertical-align: middle;\n    }\n"]))),Je=O.c.nav(we||(we=Object(g.a)(["\n  max-height: 50px;\n"]))),Ye=function(e){return Object(X.jsxs)(y,{children:[Object(X.jsx)(Je,{children:Object(X.jsxs)(Q.e,{children:[Object(X.jsx)(Q.c,{path:"/inicio",element:Object(X.jsx)("nav",{})}),Object(X.jsx)(Q.c,{path:"/",element:Object(X.jsx)("nav",{})}),Object(X.jsx)(Q.c,{path:"*",element:Object(X.jsx)(Ge,{})})]})}),Object(X.jsx)("main",{children:e.children}),Object(X.jsx)(Ue,{})]})};var Ze=function(){return Object(X.jsx)(x.a,{children:Object(X.jsx)(h.a,{store:B,children:Object(X.jsx)(p.a,{loading:null,persistor:V,children:Object(X.jsxs)(O.a,{theme:v,children:[Object(X.jsx)(w,{}),Object(X.jsx)(Ye,{children:Object(X.jsx)(Le,{})})]})})})})},$e=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,257)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};u.a.render(Object(X.jsx)(d.a.StrictMode,{children:Object(X.jsx)(Ze,{})}),document.getElementById("root")),$e()}},[[188,1,2]]]);
//# sourceMappingURL=main.5705f8fa.chunk.js.map