(this["webpackJsonpfinanservs-afiliado"]=this["webpackJsonpfinanservs-afiliado"]||[]).push([[0],{161:function(e,a,n){},213:function(e,a,n){"use strict";n.r(a);var t,r,s,o,i,c,l,d,u=n(0),m=n.n(u),p=n(33),b=n.n(p),j=(n(161),n(29)),f=n(19),g=n(31),x=n(119),h=n(18),O=n(136),v={colors:{white:"#ffffff",dark:"#27212e",black:"#373737",accent:"#E53251",gray:"#F2F2F2",blue:"#1976D2",silver:"#716385"},dims:{widths:{small:"30em",forms:"17.5em"},padding:{largePadding:"0.8em 1.2em",mediumPadding:"2em",tallPadding:"3em 1.5em"},margin:{small:"0.5em",intersection:"1em",normal:"2em",inline:"0.5ch"},borderRadius:{small:"0.4em",normal:"0.8em"},fonts:{small:"0.8em",medium:"1.5em",title:"3em"},circle:{small:"1em",medium:"3em",big:"6em"}},shadows:{depth1:"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",depth2:"0 4px 6px -1 rgba(0, 0, 0, 0.1), 0 2px 4px -1 rgba(0, 0, 0, 0.06)",depth3:"0 20px 25px -5 rgba(0, 0, 0, 0.1), 0 20px 25px -5 rgba(0, 0, 0, 0.04)"}},y=Object(f.b)(t||(t=Object(h.a)(["\n  * { box-sizing: border-box }\n"]))),T=f.c.div(r||(r=Object(h.a)(["\n    display: grid;\n    min-height: 100vh;\n    grid-template-rows: auto minmax(0, 1fr) auto;\n    background-color: ",";\n"])),(function(e){return e.theme.colors.gray})),w=(f.c.div(s||(s=Object(h.a)(["\n    width: ",";\n    max-width: 100vw;\n    margin: 0 auto;\n"])),(function(e){return e.theme.dims.widths.small})),f.c.div(o||(o=Object(h.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 100%;\n    width: 100%;\n"]))),f.c.button(i||(i=Object(h.a)(["\n    outline: 0;\n    border: 0;\n    background-color: transparent;\n    font-size: 1em;\n    display: block;\n"]))),Object(f.c)(O.a)(c||(c=Object(h.a)(["\n    & svg {\n        width: ",";\n        height: ",";\n        display: inline-block;\n        vertical-align: bottom;\n    }\n    background-color: ",";\n    cursor: pointer;\n    border-radius: 50%;\n    width: ",";\n    height: ",";\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-bottom: ",";\n\n    & path {\n        fill: "," !important\n    }\n"])),(function(e){return e.theme.dims.circle.small}),(function(e){return e.theme.dims.circle.small}),(function(e){var a=e.theme;return e.active?a.colors.accent:a.colors.dark}),(function(e){return e.theme.dims.circle.medium}),(function(e){return e.theme.dims.circle.medium}),(function(e){return e.theme.dims.margin.intersection}),(function(e){return e.theme.colors.white})),f.c.h1(l||(l=Object(h.a)(["\n    font-size: ",";\n    font-weight: bold;\n    display: inline-block;\n    margin-block-start: 0;\n    margin-block-end: 0;\n    margin-left: ",";\n    vertical-align: middle;\n"])),(function(e){return e.theme.dims.fonts.medium}),(function(e){return e.theme.dims.margin.intersection})),f.c.footer(d||(d=Object(h.a)(["\n    display: grid;\n    grid-template-columns: minmax(auto, 1fr) auto minmax(auto, 1fr);\n    border: 1px solid;\n    border-color: ",";\n    height: 3em;\n    text-align: center;\n    justify-content: space-around;\n    align-items: center;\n"])),(function(e){return e.theme.colors.gray})),n(25)),N=n(64),C=n(89),q=n(125),E=n.n(q),k=n(22),S=n.n(k),F=n(34),L=n(38),I=n.n(L),z="",A=Object(N.b)("user/signIn",function(){var e=Object(F.a)(S.a.mark((function e(a){var n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.post("".concat(z,"/api/login"),{user:a});case 2:return n=e.sent,console.log(n),e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()),D=Object(N.c)({name:"user",initialState:{user:{},status:""},reducers:{logOut:function(e){e.status="",e.user={}}},extraReducers:function(e){e.addCase(A.pending,(function(e){e.status="loading"})),e.addCase(A.fulfilled,(function(e,a){e.user=a.payload,e.status="success"})),e.addCase(A.rejected,(function(e){e.status="failed"}))}}),P=D.actions.logOut,R=D.reducer,W=Object(w.b)({user:R}),B={key:"root",storage:E.a,whitelist:["user"],blacklist:[]},U=Object(C.a)(B,W),M=Object(N.a)({reducer:U}),Q=Object(C.b)(M),V=n(15),Y=n(12),_=n(270),G=n(265),J=n(269),Z=n(276),H=n(266),K=n(271),$=n.p+"static/media/main-2.954443fd.jpg",X=n(1),ee=function(){var e=Object(u.useState)([]),a=Object(Y.a)(e,2),n=a[0],t=a[1],r=Object(V.g)().search,s=new URLSearchParams(r),o=parseInt(s.get("Ref")||"0"),i=function(){var e=Object(F.a)(S.a.mark((function e(a){var n,r;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,I.a.get("/api/referido/"+a);case 4:return n=e.sent,e.next=7,n.data;case 7:r=e.sent,t(r),o&&window.localStorage.setItem("Sponsor",o.toString());case 10:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return Object(u.useEffect)((function(){i(o)}),[o]),Object(X.jsxs)(J.a,{sx:{pt:12},children:[Object(X.jsx)(G.a,{container:!0,spacing:4,justifyContent:"center",children:Object(X.jsx)(G.a,{item:!0,xs:12,sm:6,md:4,children:Object(X.jsxs)(_.a,{sx:{height:"100%",display:"flex",flexDirection:"column"},children:[Object(X.jsx)(Z.a,{component:"img",height:"300",image:$,alt:"Finanservs"}),Object(X.jsx)(j.b,{to:"/registro?Ref=".concat(o),children:Object(X.jsx)(H.a,{variant:"contained",fullWidth:!0,children:"Me quiero Registrar"})})]})})}),Object(X.jsx)(K.a,{sx:{pt:2},textAlign:"center",children:n.length>0&&"Referido por: ".concat(n[0].nombre," ").concat(n[0].apellidos)})]})},ae=n(267),ne=n(256),te=n(259),re=n(273),se=n(262),oe=n(272),ie=n(130),ce=n.n(ie),le=n(135),de=n(268),ue=function(e){var a=e.type,n=e.message,t=e.setMsg;return setTimeout((function(){t("")}),2e3),Object(X.jsx)("div",{className:"alert alert-"+a+" mt-3 "+(n?"d-block":"d-none"),role:"alert",children:n})},me=Object(le.a)();function pe(){var e=Object(g.b)(),a=Object(u.useState)(""),n=Object(Y.a)(a,2),t=n[0],r=n[1],s=function(){var a=Object(F.a)(S.a.mark((function a(n){var t;return S.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:n.preventDefault(),t=new FormData(n.currentTarget),e(A({email:(t.get("email")||"").toString(),password:(t.get("password")||"").toString()}));case 3:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();return Object(X.jsx)(de.a,{theme:me,children:Object(X.jsxs)(J.a,{component:"main",maxWidth:"xs",children:[Object(X.jsx)(ne.a,{}),Object(X.jsxs)(oe.a,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(X.jsx)(ae.a,{sx:{m:1,bgcolor:"secondary.main"},children:Object(X.jsx)(ce.a,{})}),Object(X.jsx)(K.a,{component:"h1",variant:"h5",children:"Inicio"}),Object(X.jsxs)(oe.a,{component:"form",onSubmit:s,noValidate:!0,sx:{mt:1},children:[Object(X.jsx)(te.a,{margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email",name:"email",autoComplete:"email",autoFocus:!0}),Object(X.jsx)(te.a,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Contrase\xf1a",type:"password",id:"password",autoComplete:"current-password"}),Object(X.jsx)(re.a,{control:Object(X.jsx)(se.a,{value:"remember",color:"primary"}),label:"Recuerdame"}),Object(X.jsx)(H.a,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Inicio"}),Object(X.jsxs)(G.a,{container:!0,children:[Object(X.jsx)(G.a,{item:!0,xs:!0,children:Object(X.jsx)(j.b,{to:"/password",children:"Olvido su Contrase\xf1a?"})}),Object(X.jsx)(G.a,{item:!0,children:Object(X.jsx)(j.b,{to:"/registro",children:Object(X.jsx)(K.a,{children:"Registrarse"})})})]})]})]}),t?Object(X.jsx)(ue,{type:"warning",message:t,setMsg:r}):""]})})}var be=n(4),je=n(14),fe=n(131),ge=n(260),xe=n(261),he={TITLE:"T\xe9rminos y condiciones",SECTIONS:[{TITLE:"Aviso de privacidad",CONTENT:["El siguiente Aviso de privacidad protege tu informaci\xf3n personal de acuerdo la Ley de Panam\xe1. Esta Aviso de privacidad explica c\xf3mo recolectamos y usamos algunos de tus datos personales y patrimoniales, as\xed como las medidas de control y prevenci\xf3n tomados para asegurar que tu informaci\xf3n est\xe9 segura y permanezca confidencial. De aqu\xed en adelante se usar\xe1 el nombre Finanservs.com para referirse a ambas partes."]},{TITLE:"Responsable",CONTENT:["En cumplimiento con la Ley de Panam\xe1, Finanservs.com., (en adelante \u201cFinanservs.com\u201d) te informa que Finanservs.com es responsable de la recolecci\xf3n, utilizaci\xf3n, almacenamiento, comunicaci\xf3n y protecci\xf3n de tus datos personales.","El Usuario podr\xe1 contactar a Finanservs.com en cualquier momento a trav\xe9s del correo electr\xf3nico info@finanservs.com, para el ejercicio de sus derechos. Finanservs.com\xa0protege y salvaguarda tus datos personales para evitar el da\xf1o, p\xe9rdida, destrucci\xf3n, robo, extrav\xedo, alteraci\xf3n o tratamiento no autorizado de los mismos."]},{TITLE:"Informaci\xf3n personal",CONTENT:["La informaci\xf3n personal solicitada al usuario est\xe1 compuesta por los siguientes rubros: nombre(s), apellido(s), fecha de nacimiento, sexo, correo electr\xf3nico, tel\xe9fono fijo, tel\xe9fono celular, domicilio, provincia, distrito, corregimiento, calle, n\xfamero de casa interior, pa\xeds, ingreso mensual, informaci\xf3n patrimonial, datos m\xe9dicos, nombre de la empresa donde labora, ingresos, referencias personales, entre otros.","Tus datos personales ser\xe1n tratados con base en los principios de licitud, consentimiento, informaci\xf3n, calidad, finalidad, lealtad, proporcionalidad y responsabilidad de la Legislaci\xf3n.","Finanservs.com mantendr\xe1 la confidencialidad de tus datos personales estableciendo y manteniendo de forma efectiva las medidas de seguridad administrativas, t\xe9cnicas y f\xedsicas, para evitar su da\xf1o, p\xe9rdida, alteraci\xf3n, destrucci\xf3n, uso, acceso o divulgaci\xf3n indebida.","La informaci\xf3n deber\xe1 ser veraz y completa. El usuario responder\xe1 en todo momento por los datos proporcionados y en ning\xfan caso\xa0Finanservs.com\xa0ser\xe1 responsable de la veracidad de los mismos."]},{TITLE:"Uso de los datos personales",CONTENT:["Tus datos personales ser\xe1n usados para:",'\n          <ul class="terms-list">\n            <li>Prestar el servicio de asesor\xeda, comparaci\xf3n, simulaci\xf3n y c\xe1lculo de cotizaciones de productos financieros, seguros y de inmuebles.</li>\n            <li>El enlace con instituciones bancarias o entidades financieras generales, aseguradoras, brokers hipotecarios y/o inmobiliarios, desarrolladores inmobiliarios y entidades de investigaci\xf3n crediticia.</li>\n          </ul>\n        ',"De igual manera estos datos ser\xe1n utilizados para:",'\n          <ul class="terms-list">\n            <li>Procurar un servicio eficiente.</li>\n            <li>Informarte sobre cambios o nuevos servicios que est\xe9n relacionados con el producto o servicio solicitado.</li>\n            <li>Dar cumplimiento a obligaciones contra\xeddas con los usuarios.</li>\n            <li>Evaluar la calidad de nuestro servicio.</li>\n          </ul>\n        ']},{TITLE:"Limitaci\xf3n de usos y divulgaci\xf3n de los datos personales",CONTENT:["En nuestro programa de notificaci\xf3n de promociones, correo electr\xf3nico de noticias, blog, ofertas y servicios a trav\xe9s de correo electr\xf3nico, solo Finanservs.com tiene acceso a la informaci\xf3n recabada. Este tipo de publicidad y comunicaci\xf3n se realiza mediante avisos y mensajes promocionales de correo electr\xf3nico, los cuales s\xf3lo ser\xe1n enviados a ti y a los contactos registrados para tal prop\xf3sito. La suscripci\xf3n a este servicio podr\xe1 modificarse en cualquier momento escribiendo info@finanservs.com. En los correos electr\xf3nicos enviados pueden incluirse, ocasionalmente, ofertas de terceras partes que sean nuestros socios comerciales."]},{TITLE:"\xbfQu\xe9 son las cookies y c\xf3mo se utilizan?",CONTENT:["Las cookies son peque\xf1as piezas de informaci\xf3n que son enviadas por el sitio web a tu navegador y se almacenan en el disco duro de tu equipo. Se utilizan para determinar tus preferencias cuando te conectas a los servicios de nuestros sitios, as\xed como para rastrear determinados comportamientos o actividades llevadas a cabo por ti dentro del portal.","Existen secciones de la p\xe1gina web en las que requerimos que el usuario tenga habilitadas las cookies, ya que algunas de las funcionalidades del sitio web las necesitan para trabajar.","Las cookies nos permiten:",'\n          <ul class="terms-list">\n            <li>Reconocerte al momento de entrar a nuestros sitios y ofrecer de una experiencia personalizada.</li>\n            <li>Conocer la configuraci\xf3n personal del sitio especificada por ti, ejemplo, esto nos ayuda a recordar tus datos personales ingresados para que no tengas que volver a escribirlos en cada ocasi\xf3n.</li>\n            <li>Calcular el tama\xf1o de nuestra audiencia y medir algunos par\xe1metros de tr\xe1fico.</li>\n            <li>Evaluar la calidad de nuestro servicio.</li>\n          </ul>\n        ',"Cada navegador que obtiene acceso a nuestros sitios adquiere una cookie que se usa para determinar la frecuencia de uso y las secciones de los sitios visitadas, reflejando as\xed h\xe1bitos y preferencias, informaci\xf3n que nos es \xfatil para mejorar el contenido, los titulares y las promociones para los usuarios.","Las cookies tambi\xe9n nos ayudan a rastrear algunas actividades. Por ejemplo, en algunas de las encuestas que lanzamos en l\xednea podemos utilizar cookies para detectar si el usuario ya ha llenado la encuesta y evitar desplegarla nuevamente.","Las cookies te permitir\xe1n tomar ventaja de las caracter\xedsticas que te ofrecemos, por lo que te recomendamos mantenerlas activas.","Las cookies no ser\xe1n utilizadas para identificar a los usuarios, con excepci\xf3n de los casos en que se investiguen posibles actividades fraudulentas.","ACsoraT, S. A. titular del portal Finanservs.com almacena autom\xe1ticamente los datos del usuario, por ejemplo, cuando se registra en el portal o cuando contacta a la sociedad ya sea personalmente o respondiendo a preguntas por correo, fax, a trav\xe9s del portal o por tel\xe9fono."]},{TITLE:"Para revocar consentimiento otorgado",CONTENT:["Como titular de datos personales, el usuario podr\xe1 ejercitar la revocaci\xf3n y el consentimiento que haya otorgado a Finanservs.com para el tratamiento de sus datos personales, enviando directamente su solicitud a info@finanservs.com","Dicha solicitud deber\xe1 contener por lo menos: (a) nombre y domicilio u otro medio para comunicar la respuesta a tu solicitud; (b) los documentos que acrediten identidad o, en su caso, representaci\xf3n legal; (c) la descripci\xf3n clara y precisa de los datos personales respecto de los que se solicita ejercer alguno de los derechos de revocaci\xf3n, (d) la manifestaci\xf3n expresa para revocar el consentimiento del tratamiento de tus datos personales y por tanto, darlos de baja para que no se usen; (d) cualquier otro elemento que facilite la localizaci\xf3n de los datos personales.","La petici\xf3n deber\xe1 ir acompa\xf1ada de los fundamentos por los que se solicita dicha revocaci\xf3n y una identificaci\xf3n oficial del titular de los datos o de su apoderado.","En un plazo m\xe1ximo de 20 (veinte) d\xedas h\xe1biles atenderemos la solicitud e informaremos sobre la procedencia de la misma a trav\xe9s del correo electr\xf3nico del que provenga la petici\xf3n. Finanservs.com solicita al usuario que actualice sus datos cada vez que \xe9stos sean modificados, ya que esto permitir\xe1 brindarle un servicio eficiente y personalizado."]},{TITLE:"Transferencia de Informaci\xf3n con Terceros",CONTENT:["Los datos solicitados son indispensables para que Finanservs.com le proporcione el servicio en cuesti\xf3n, por lo que de no contar con los mismos, la sociedad se encuentra materialmente imposibilitada de cumplir el fin principal de la relaci\xf3n con sus usuarios.","Finanservs.com \xfanicamente realiza transferencia de datos para cumplir con las obligaciones contra\xeddas con los clientes o usuarios, permitiendo el acceso a la informaci\xf3n a:",'\n          <ul class="terms-list">\n            <li>Compa\xf1\xedas asociadas que tengan una relaci\xf3n comercial con Finanservs.com, as\xed como sucursales de ACsoraT, S. A.</li>\n            <li>Conocer la configuraci\xf3n personal del sitio especificada por ti, ejemplo, esto nos ayuda a recordar tus datos personales ingresados para que no tengas que volver a escribirlos en cada ocasi\xf3n.</li>\n            <li>Terceros cuyos productos o servicios aparezcan en nuestro sitio web y otorguen un servicio/producto solicitado por el usuario. Estos terceros tienen un control parcial de estos datos. Es importante que leas sus avisos de privacidad o los contactes directamente para informaci\xf3n adicional.</li>\n            <li>Agencias de interferencia de fraudes para detectar fraudes y lavado de dinero, en caso de que informaci\xf3n falsa o poco precisa haya sido otorgada.</li>\n          </ul>\n        ']},{TITLE:"Protecci\xf3n",CONTENT:["ACsoraT, S. A., titular del portal Finanservs.com ha adoptado medidas de seguridad administrativas, t\xe9cnicas y f\xedsicas que permiten proteger los datos personales que sus usuarios proporcionan contra da\xf1o, p\xe9rdida, alteraci\xf3n, destrucci\xf3n o su uso, acceso y/o tratamiento no autorizado. Asimismo, nuestro personal est\xe1 debidamente capacitado para tratar los datos personales en el mayor marco de confidencialidad, privacidad, secrec\xeda y absoluto cumplimiento de la Ley de Panam\xe1.","Queda expresamente se\xf1alado que el servicio de asesor\xeda, comparaci\xf3n, simulaci\xf3n, c\xe1lculo y cotizaci\xf3n de productos financieros y seguros que presta Finanservs.com, lo hace de forma estimada con base en la informaci\xf3n publicada por las instituciones financieras y de seguros, por lo que se pueden presentar cambios sin previo aviso. ACsoraT, S. A. no es responsable de cerciorarse o comprobar la veracidad de la informaci\xf3n proporcionada por las diversas instituciones financieras y de seguros, as\xed como por instituciones gubernamentales; tampoco es responsable de asegurarse del cumplimiento de estas \xfaltimas de los ofrecimientos presentados en sus cotizaciones. Los resultados que su comparador arroja son para fines meramente ilustrativos."]},{TITLE:"Cambios en el aviso de privacidad",CONTENT:["Nos reservamos el derecho de efectuar en cualquier momento modificaciones o actualizaciones al presente aviso de privacidad, para la atenci\xf3n de novedades legislativas o jurisprudenciales, pol\xedticas internas, nuevos requerimientos para la prestaci\xf3n u ofrecimiento de nuestros servicios o productos y pr\xe1cticas del mercado.","Las referidas modificaciones o actualizaciones ser\xe1n publicadas y puestas a disposici\xf3n del p\xfablico a trav\xe9s del portal Finanservs.com, secci\xf3n Aviso de privacidad."]},{TITLE:"Autoridad",CONTENT:['Si el usuario considera que han sido vulnerados sus derechos respecto de la protecci\xf3n de datos personales, tiene el derecho de acudir a la autoridad correspondiente para defender su ejercicio. La autoridad de protecci\xf3n al consumidor y defensa de la competencia, su sitio web es:\xa0<a class="terms-links" href="#">acodeco.gob.pa</a>']},{TITLE:"Aceptaci\xf3n de los t\xe9rminos",CONTENT:["Este Aviso de Privacidad est\xe1 sujeto a los t\xe9rminos y condiciones del sitio web de Finanservs.com antes descrito, lo cual constituye un acuerdo legal entre el usuario y ACsoraT, S. A.","Si el usuario utiliza los servicios en el sitio web de Finanservs.com significa que ha le\xeddo, entendido, acordado y manifestado la voluntad de apegarse a los t\xe9rminos y condiciones expuestos en el Aviso de Privacidad y en el aviso legal."]},{TITLE:"Mejorar nuestros servicios",CONTENT:["Para asegurarnos de que los servicios que ofrecemos cumplen con las necesidades de nuestro p\xfablico, Finanservs.com podr\xeda llegar a solicitar retroalimentaci\xf3n. Cualquier retroalimentaci\xf3n que nos proporciones ser\xe1 utilizada \xfanicamente para mejorar nuestros servicios y no ser\xe1 revelada en el sitio web de la empresa."]},{TITLE:"Seguridad",CONTENT:["La seguridad de tu informaci\xf3n es muy importante para nosotros. Nuestro sitio web est\xe1 respaldado por nuestro certificado de seguridad SSL, ofreciendo un alto grado de protecci\xf3n. Cabe mencionar que no toda transmisi\xf3n de datos a trav\xe9s de internet es 100% segura. Informaci\xf3n altamente sensible, como los detalles de tu tarjeta de cr\xe9dito, es encriptada para minimizar los peligros de intercepci\xf3n durante el tr\xe1nsito. Mientras que nosotros hacemos todo lo posible para proteger los datos personales que se nos proporcionan, \xe9stos se nos otorgan con plena consciencia de los riesgos anteriores. Los T\xe9rminos y Condiciones explican, adicionalmente, tu obligaci\xf3n de mantener seguro cualquier nombre de usuario y contrase\xf1a que utilices para registrarte a cualquiera de nuestros servicios."]},{TITLE:"Responsabilidad",CONTENT:["Puede llegar a solicitarse un proceso de registro como parte del uso de esta plataforma. El proceso puede incluir la creaci\xf3n de un nombre de usuario y una contrase\xf1a. Es de suma importancia que no compartas tu nombre de usuario y contrase\xf1a con nadie. Si decides compartir tu nombre de usuario y contrase\xf1a con cualquier persona, solo t\xfa eres responsable de todas las actividades llevadas a cabo en este sitio Web bajo tu nombre de usuario y contrase\xf1a."]}],CONTACT:[{TITLE:"Cont\xe1ctanos si tienes preguntas",CONTENT:'Si tienes alguna pregunta o comentario acerca de este Aviso de Privacidad, cont\xe1ctanos a trav\xe9s de: <a class="terms-links" href="mailto:info@finanservs.com">info@finanservs.com</a>'},{TITLE:"Darse de baja de la lista de contactos",CONTENT:'Puede darse de baja de nuestros correos electr\xf3nicos promocionales a trav\xe9s del enlace <spam class="terms-links">Darse de baja</spam> que figura en cada correo electr\xf3nico o bien escribi\xe9ndonos a <a class="terms-links" href="mailto:info@finanservs.com">info@finanservs.com</a>'}]},Oe=Object(le.a)(),ve=Object(ge.a)((function(e){return{bottomSpacing:{marginBottom:40},terminos:{marginBottom:40,marginTop:5,fontSize:20},modal:{position:"absolute",top:"5%",left:"5%",width:"90%",background:"white",border:"2px solid #000",boxShadow:"24",padding:"16px 32px 24px",transform:"tranlate(-50%, -50%)",height:"80%",display:"block"},content:{padding:12},spacing:{marginBottom:56},divide:{width:"100%",height:"380px",textOverflow:"ellipsis",overflow:"hidden",overflowY:"scroll",borderBottom:"2px solid #cfc9c9",padding:"15px"}}}));function ye(){var e=ve(),a=Object(u.useState)(!1),n=Object(Y.a)(a,2),t=n[0],r=n[1],s=Object(u.useState)({email:"",firstName:"",lastName:"",phoneNumber:"",password:""}),o=Object(Y.a)(s,2),i=o[0],c=o[1],l=Object(u.useState)({email:!1,firstName:!1,lastName:!1,phoneNumber:!1,password:!1}),d=Object(Y.a)(l,2),m=d[0],p=d[1],b=Object(V.h)(),f=Object(V.g)().search,g=new URLSearchParams(f).get("Ref");g||(g=window.localStorage.getItem("Sponsor"));var x=function(){var e=Object(F.a)(S.a.mark((function e(a){var n,t,r,s;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),n=new FormData(a.currentTarget),(t={email:n.get("email"),nombre:n.get("firstName"),apellidos:n.get("lastName"),celular:n.get("phoneNumber"),password:n.get("password"),id_ref:n.get("")}).nombre){e.next=7;break}return c(Object(je.a)(Object(je.a)({},i),{},{firstName:"Este es un campo obligatorio"})),p(Object(je.a)(Object(je.a)({},m),{},{firstName:!0})),e.abrupt("return");case 7:if(t.apellidos){e.next=11;break}return c(Object(je.a)(Object(je.a)({},i),{},{lastName:"Este es un campo obligatorio"})),p(Object(je.a)(Object(je.a)({},m),{},{lastName:!0})),e.abrupt("return");case 11:if(t.celular){e.next=15;break}return c(Object(je.a)(Object(je.a)({},i),{},{phoneNumber:"Este es un campo obligatorio"})),p(Object(je.a)(Object(je.a)({},m),{},{phoneNumber:!0})),e.abrupt("return");case 15:if(t.email){e.next=19;break}return c(Object(je.a)(Object(je.a)({},i),{},{email:"Este es un campo obligatorio"})),p(Object(je.a)(Object(je.a)({},m),{},{email:!0})),e.abrupt("return");case 19:if(t.password){e.next=23;break}return c(Object(je.a)(Object(je.a)({},i),{},{password:"Este es un campo obligatorio"})),p(Object(je.a)(Object(je.a)({},m),{},{password:!0})),e.abrupt("return");case 23:return e.prev=23,e.next=26,I.a.post("/api/veirify-email/",{email:n.get("email")});case 26:return r=e.sent,e.next=29,r.data;case 29:if(s=e.sent,!(s.idUser>0)){e.next=35;break}return b("/inicio"),alert("Usuario ya existe con el email = ".concat(n.get("email"))),e.abrupt("return");case 35:e.next=40;break;case 37:e.prev=37,e.t0=e.catch(23),console.log("Error: Query no permitido.  Favor ver Log del Servidor.");case 40:return e.prev=40,t.id_ref=g,console.log(t),e.next=45,I.a.post("/api/user/",t);case 45:b("/inicio"),e.next=51;break;case 48:e.prev=48,e.t1=e.catch(40),console.log("Error: Query no permitido.  Favor ver Log del Servidor.");case 51:case"end":return e.stop()}}),e,null,[[23,37],[40,48]])})));return function(a){return e.apply(this,arguments)}}(),h=function(e,a){e.target.value.length>0&&e.target.value.length<a?(p(Object(je.a)(Object(je.a)({},m),{},Object(be.a)({},e.target.name,!0))),c(Object(je.a)(Object(je.a)({},i),{},Object(be.a)({},e.target.name,"Campo debe tener m\xednimo ".concat(a," caracteres"))))):(p(Object(je.a)(Object(je.a)({},m),{},Object(be.a)({},e.target.name,!1))),c(Object(je.a)(Object(je.a)({},i),{},Object(be.a)({},e.target.name,""))))},O=function(e,a){var n=ve(),t=Object(u.useState)(!1),r=Object(Y.a)(t,2),s=r[0],o=r[1],i=function(){o(!s)},c=Object(X.jsx)(X.Fragment,{children:Object(X.jsxs)("div",{className:n.modal,children:[Object(X.jsx)("div",{className:n.divide,children:he.SECTIONS.map((function(e,a){var t=e.TITLE,r=e.CONTENT;return Object(X.jsxs)("div",{className:n.spacing,children:[Object(X.jsx)(K.a,{variant:"h6",gutterBottom:!0,children:t}),r.map((function(e,a){return Object(X.jsx)(K.a,{component:"span",paragraph:!0,children:Object(fe.a)(e)},a)}))]},a)}))}),Object(X.jsx)(G.a,{container:!0,spacing:2,children:Object(X.jsxs)(G.a,{item:!0,xs:12,sm:6,style:{marginTop:"20px"},children:[Object(X.jsx)(re.a,{control:Object(X.jsx)(se.a,{checked:e,onChange:function(e){a(e.target.checked)},name:"terminos"}),label:"He le\xeddo y acepto los t\xe9rminos y condiciones."}),Object(X.jsx)(H.a,{onClick:function(){return i()},variant:"contained",style:{marginLeft:"15px",backgroundColor:"#0C7BDD",color:"#FFFFFF"},children:"Continuar"})]})})]})});return Object(X.jsxs)("div",{children:[Object(X.jsx)(H.a,{onClick:function(){return i()},variant:"contained",style:{backgroundColor:"#0C7BDD",color:"#FFFFFF"},children:"Terminos y Condiciones"}),Object(X.jsx)(xe.a,{disableEscapeKeyDown:!0,open:s,onClose:function(e,a){"backdropClick"!==a&&i()},children:c})]})}(t,(function(e){r(e)}));return Object(X.jsx)(de.a,{theme:Oe,children:Object(X.jsxs)(J.a,{component:"main",maxWidth:"xs",children:[Object(X.jsx)(ne.a,{}),Object(X.jsxs)(oe.a,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(X.jsx)(K.a,{component:"h1",variant:"h5",children:"Nuevo"}),Object(X.jsxs)(oe.a,{component:"form",noValidate:!0,autoComplete:"off",onSubmit:x,sx:{mt:3},children:[Object(X.jsxs)(G.a,{container:!0,spacing:2,children:[Object(X.jsx)(G.a,{item:!0,xs:12,sm:6,children:Object(X.jsx)(te.a,{name:"firstName",required:!0,fullWidth:!0,id:"firstName",label:"Nombre",autoFocus:!0,autoComplete:"family-name",error:m.firstName,onChange:function(e){return h(e,3)},helperText:i.firstName})}),Object(X.jsx)(G.a,{item:!0,xs:12,sm:6,children:Object(X.jsx)(te.a,{name:"lastName",required:!0,fullWidth:!0,id:"lastName",label:"Apellidos",autoComplete:"family-name",error:m.lastName,onChange:function(e){return h(e,3)},helperText:i.lastName})}),Object(X.jsx)(G.a,{item:!0,xs:12,sm:6,children:Object(X.jsx)(te.a,{required:!0,fullWidth:!0,id:"phoneNumber",label:"Celular",name:"phoneNumber",error:m.phoneNumber,onChange:function(e){return function(e){/[0-9]{4}-[0-9]{4}/.test(e.target.value)?(p(Object(je.a)(Object(je.a)({},m),{},Object(be.a)({},e.target.name,!1))),c(Object(je.a)(Object(je.a)({},i),{},Object(be.a)({},e.target.name,"")))):(p(Object(je.a)(Object(je.a)({},m),{},Object(be.a)({},e.target.name,!0))),c(Object(je.a)(Object(je.a)({},i),{},Object(be.a)({},e.target.name,"Debe indicar n\xfamero de c\xe9lular ####-####."))))}(e)},helperText:i.phoneNumber})}),Object(X.jsx)(G.a,{item:!0,xs:12,children:Object(X.jsx)(te.a,{required:!0,fullWidth:!0,id:"email",label:"Email",type:"email",name:"email",onChange:function(e){return function(e){/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(e.target.value)?(p(Object(je.a)(Object(je.a)({},m),{},Object(be.a)({},e.target.name,!1))),c(Object(je.a)(Object(je.a)({},i),{},Object(be.a)({},e.target.name,"")))):(p(Object(je.a)(Object(je.a)({},m),{},Object(be.a)({},e.target.name,!0))),c(Object(je.a)(Object(je.a)({},i),{},Object(be.a)({},e.target.name,"Debe indicar un nombre Email V\xe1lido."))))}(e)},error:m.email,helperText:i.email})}),Object(X.jsx)(G.a,{item:!0,xs:12,children:Object(X.jsx)(te.a,{required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"Password",error:m.password,onChange:function(e){return h(e,6)},helperText:i.password})})]}),Object(X.jsx)(H.a,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},disabled:!t,children:"Resgistro"}),Object(X.jsxs)(G.a,{container:!0,justifyContent:"flex-end",children:[Object(X.jsx)(G.a,{item:!0,children:Object(X.jsxs)(j.b,{to:"/inicio",children:["Ya tienes una Cuenta?",Object(X.jsx)(K.a,{children:"Iniciar Sesi\xf3n"})]})}),Object(X.jsx)(G.a,{item:!0,xs:12,classes:{item:e.terminos},children:O})]})]})]})]})})}var Te,we,Ne,Ce,qe,Ee=n(274),ke=n(277),Se=n(278),Fe=n(279),Le=n(134),Ie=n.n(Le),ze=n(132),Ae=n(133),De=n(207),Pe="0px 4px 10px rgba(0, 0, 0, 0.25)",Re=Object(ge.a)({card:{textShadow:Pe},textShadow:{textShadow:Pe,color:"#e07510",textAlign:"center"}}),We={width:"85%",fontSize:"1.3em",height:"30px",color:"blue",border:"none",marginRight:"10px"},Be=function(){var e=Object(g.c)((function(e){return e.user.user})).idUser,a=Object(u.useState)([]),n=Object(Y.a)(a,2),t=n[0],r=n[1],s=Object(u.useState)({value:"",copied:!1}),o=Object(Y.a)(s,2),i=o[0],c=o[1],l=Re(),d=function(){var e=Object(F.a)(S.a.mark((function e(a){var n,t;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.get("/api/afiliados/"+a);case 2:return n=e.sent,e.next=5,n.data;case 5:t=e.sent,r(t);case 7:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();Object(u.useEffect)((function(){c(Object(je.a)(Object(je.a)({},i),{},{value:"https://network.finanservs.com?Ref=".concat(e)}))}),[]),Object(u.useEffect)((function(){d(e)}),[e]);var m=function(){c(Object(je.a)(Object(je.a)({},i),{},{copied:!0})),Object(Ae.setTimeout)((function(){c(Object(je.a)(Object(je.a)({},i),{},{copied:!1}))}),300)};return Object(X.jsxs)(J.a,{sx:{pt:8},children:[Object(X.jsx)(K.a,{className:l.textShadow,variant:"h5",children:"Link de Referidos:"}),Object(X.jsx)(oe.a,{component:"form",noValidate:!0,sx:{mt:1},children:Object(X.jsx)(G.a,{container:!0,direction:"column",alignItems:"center",children:Object(X.jsxs)("div",{style:{textAlign:"center"},children:[Object(X.jsx)("input",{style:We,value:"https://network.finanservs.com"}),Object(X.jsx)(ze.CopyToClipboard,{text:i.value,onCopy:function(){return m()},children:Object(X.jsx)(Ie.a,{style:{color:"green",width:"20px"}})}),i.copied?Object(X.jsx)("span",{style:{color:"red",fontSize:"9px"},children:"Copiado..."}):null]})})}),Object(X.jsx)(G.a,{container:!0,direction:"column",alignItems:"center",children:Object(X.jsx)(H.a,{fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:Object(X.jsx)(ke.a,{href:"https://finanservs.com?idRef=".concat(e),variant:"h5",underline:"hover",target:"_blank",rel:"noreferrer",color:"white",children:"Pide tu pr\xe9stamo aqu\xed!"})})}),Object(X.jsx)(Se.a,{sx:{pb:0}}),Object(X.jsx)(K.a,{className:l.textShadow,gutterBottom:!0,sx:{pt:2},variant:"h4",component:"h2",children:t.length?"Mis Referidos":"Sin Referidos"}),t.length>0?Object(X.jsx)(G.a,{container:!0,spacing:2,children:t.map((function(e){return Object(X.jsx)(G.a,{item:!0,xs:6,sm:6,md:4,children:Object(X.jsx)(_.a,{className:l.card,sx:{height:"100%",display:"flex",flexDirection:"column"},children:Object(X.jsxs)(Ee.a,{sx:{flexGrow:1},children:[Object(X.jsx)(K.a,{gutterBottom:!0,variant:"h5",component:"h2",children:e.nombre+" "+e.apellidos}),Object(X.jsxs)(K.a,{children:[Object(X.jsx)(Fe.a,{primary:"Email: ".concat(e.email)}),Object(X.jsx)(Fe.a,{primary:"Celular: ".concat(e.celular)}),Object(X.jsx)(Fe.a,{primary:"Creado: ".concat(e.dateCreated)})]})]})})},e.id)}))}):"",Object(X.jsx)("br",{}),Object(X.jsx)(G.a,{container:!0,direction:"column",alignItems:"center",children:Object(X.jsx)(G.a,{item:!0,xs:12,sm:12,md:12,spacing:2,children:Object(X.jsx)(_.a,{sx:{height:"100%",flexDirection:"column"},children:Object(X.jsxs)(Ee.a,{sx:{flexGrow:1},children:[Object(X.jsx)(K.a,{style:{textAlign:"center"},children:"Comparta su c\xf3digo QR."}),Object(X.jsx)(K.a,{sx:{pt:4},textAlign:"center",children:Object(X.jsx)(De,{value:"https://network.finanservs.com?Ref=".concat(e||"1")})})]})})})})]})},Ue=function(){return Object(X.jsx)("div",{children:Object(X.jsx)("h1",{children:"Password"})})},Me=function(){var e=Object(g.c)((function(e){return e.user.user})).idUser;return Object(X.jsxs)(V.e,{children:[Object(X.jsxs)(V.c,{path:"/",element:e?Object(X.jsx)(V.a,{to:"/afiliados"}):Object(X.jsx)(V.b,{}),children:[Object(X.jsx)(V.c,{path:"",element:Object(X.jsx)(ee,{})}),Object(X.jsx)(V.c,{path:"/registro",element:Object(X.jsx)(ye,{})}),Object(X.jsx)(V.c,{path:"inicio",element:Object(X.jsx)(pe,{})}),Object(X.jsx)(V.c,{path:"/password",element:Object(X.jsx)(Ue,{})})]}),Object(X.jsxs)(V.c,{path:"",element:e?Object(X.jsx)(V.b,{}):Object(X.jsx)(V.a,{to:"/inicio"}),children:[Object(X.jsx)(V.c,{path:"/",element:Object(X.jsx)(ee,{})}),Object(X.jsx)(V.c,{path:"/registro",element:Object(X.jsx)(ye,{})}),Object(X.jsx)(V.c,{path:"/afiliados",element:Object(X.jsx)(Be,{})}),Object(X.jsx)(V.c,{path:"/inicio",element:Object(X.jsx)(pe,{})})]})]})},Qe=function(){return Object(X.jsx)(X.Fragment,{children:Object(X.jsxs)(oe.a,{sx:{bgcolor:"background.paper",p:2,my:4},component:"footer",children:[Object(X.jsx)(K.a,{variant:"subtitle1",align:"center",color:"text.primary",component:"p",children:"Soluciones financieras a su medida!"}),Object(X.jsxs)(K.a,{variant:"body2",color:"text.secondary",align:"center",children:["Copyright \xa9 ",(new Date).getFullYear(),". LR"]})]})})},Ve=n.p+"static/media/logo-horizontal-white.163462bd.png",Ye=(n.p,function(){return Object(X.jsx)("img",{src:Ve,alt:"Finanservs cr\xe9dito pr\xe9stamo",width:"200px"})}),_e=f.c.nav(Te||(Te=Object(h.a)(["\n    background-color: ",";\n    height: 100%;\n"])),(function(e){return e.theme.colors.blue})),Ge=function(){var e=Object(g.c)((function(e){return e.user.user})).idUser,a=Object(V.h)(),n=Object(g.b)();return Object(X.jsx)(_e,{className:"navbar navbar-expand-lg navbar-dark",children:Object(X.jsxs)("div",{className:"container-fluid mx-3",children:[Object(X.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarScroll","aria-controls":"navbarScroll","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(X.jsx)("span",{className:"navbar-toggler-icon"})}),Object(X.jsx)("div",{className:"collapse navbar-collapse",id:"navbarScroll",children:Object(X.jsx)("div",{className:"d-flex",children:e?Object(X.jsx)("button",{onClick:function(){n(P()),a("/",{replace:!0})},className:"btn btn-info",type:"button",children:"Salir"}):""})})]})})},Je=f.c.div(we||(we=Object(h.a)(["\n    background-color: ",";\n    padding-top: 10px;\n    padding-left: 20px;\n"])),(function(e){return e.theme.colors.blue})),Ze=f.c.header(Ne||(Ne=Object(h.a)(["\n    display: grid;\n    min-width: 100vh;\n    height: 64px;\n    grid-template-columns: auto 130px;\n\n    grid-template-areas: 'logo menu';\n\n    & .logo { grid-area: logo; }\n\n    & .menu { grid-area: menu; }\n"]))),He=Object(f.c)((function(){return Object(X.jsxs)(Ze,{children:[Object(X.jsx)(Je,{className:"logo",children:Object(X.jsx)(Ye,{})}),Object(X.jsx)("div",{className:"menu",children:Object(X.jsx)(Ge,{})})]})}))(Ce||(Ce=Object(h.a)(["\n    text-align: center;\n    padding: 1em 0;\n    img {\n        vertical-align: middle;\n    }\n"]))),Ke=f.c.nav(qe||(qe=Object(h.a)(["\n  max-height: 50px;\n"]))),$e=function(e){return Object(X.jsxs)(T,{children:[Object(X.jsx)(Ke,{children:Object(X.jsxs)(V.e,{children:[Object(X.jsx)(V.c,{path:"/inicio",element:Object(X.jsx)("nav",{})}),Object(X.jsx)(V.c,{path:"/",element:Object(X.jsx)("nav",{})}),Object(X.jsx)(V.c,{path:"*",element:Object(X.jsx)(He,{})})]})}),Object(X.jsx)("main",{children:e.children}),Object(X.jsx)(Qe,{})]})};var Xe=function(){return Object(X.jsx)(j.a,{children:Object(X.jsx)(g.a,{store:M,children:Object(X.jsx)(x.a,{loading:null,persistor:Q,children:Object(X.jsxs)(f.a,{theme:v,children:[Object(X.jsx)(y,{}),Object(X.jsx)($e,{children:Object(X.jsx)(Me,{})})]})})})})},ea=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,281)).then((function(a){var n=a.getCLS,t=a.getFID,r=a.getFCP,s=a.getLCP,o=a.getTTFB;n(e),t(e),r(e),s(e),o(e)}))};b.a.render(Object(X.jsx)(m.a.StrictMode,{children:Object(X.jsx)(Xe,{})}),document.getElementById("root")),ea()}},[[213,1,2]]]);
//# sourceMappingURL=main.faf3820d.chunk.js.map