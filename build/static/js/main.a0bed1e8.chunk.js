(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{14:function(e,i,t){},28:function(e,i,t){},41:function(e,i,t){"use strict";t.r(i);var r=t(5),a=t(0),n=t(1),c=t.n(n),s=t(20),o=t.n(s),h=(t(28),function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,42)).then((function(i){var t=i.getCLS,r=i.getFID,a=i.getFCP,n=i.getLCP,c=i.getTTFB;t(e),r(e),a(e),n(e),c(e)}))}),l=t(4),g=t(22),m=(t(29),t(14),t(3));var u=function(){return Object(a.jsx)("div",{class:"home",children:Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Production Buddy"}),Object(a.jsx)(m.a,{class:"btn btn-primary",href:"/goalmenu",role:"button",children:"Start"})]})})},d=function(e){var i=Object(n.useState)(new Date),t=Object(r.a)(i,2),c=t[0],s=t[1],o=e,h="https://media.giphy.com/media/3ohzdOrcdpiD26TPt6/giphy.gif",l="https://media.giphy.com/media/10h1BGkwYiIydi/giphy.gif",g="",m="";!0===o.hero.currentUser.boy&&(l="https://media.giphy.com/media/10h1BGkwYiIydi/giphy.gif",m="mario"),!0===o.hero.currentUser.girl&&(l="https://i.pinimg.com/originals/55/3a/4a/553a4a6c08af1bdd956b6a32fe0b3a49.gif",m="mario"),!0===o.hero.currentUser.luigi&&(l="https://steamuserimages-a.akamaihd.net/ugc/171541089271096213/CFFE888350DD504CD34EE54A001179564F45B30A/",m="mario"),!0===o.hero.currentUser.football&&(l="https://media.giphy.com/media/vYuOdwunVxpJpGVTTg/giphy.gif",m="mario"),Object(n.useEffect)((function(){setTimeout((function(){return s(new Date)}),1e3)}),[c]);var u=new Date,d=60*u.getHours()*60+60*u.getMinutes()+u.getSeconds(),b="",j=0,p=0,f=0;return d<25800&&(b="Setup",j="",g=h),d>25800&d<=35400&&(b="Caging",p=d-25800,j=Math.round(p/4.572),g=l),d>35400&d<=36e3&&(b="Set Up",j="",g=h),d>36e3&d<=43200&&(b="Filling",f=d-36e3,j=Math.round(f/15.3),g=l),d>43200&d<=45600&&(b="40 Minute Lunch",j="",g="https://media.giphy.com/media/KeEnqOWYF7tgE4uPyL/giphy.gif"),d>45600&d<=50400&&(b="Filling",f=d-45600,j=465+Math.round(f/15.3),g=l),d>50400&d<=51600&&(b="20 Minute Break",j="",g="https://media.giphy.com/media/RiWZUGcZPEKdQgrQ96/giphy.gif"),d>51600&d<=55800&&(b="Filling",f=d-51600,j=775+Math.round(f/15.3),g=l),d>55800&&(b="Complete!!!",j="",g="https://media.giphy.com/media/26u4cqiYI30juCOGY/giphy.gif"),Object(a.jsxs)("div",{children:[Object(a.jsx)("img",{className:m,src:g,alt:"loading..."}),Object(a.jsx)("h1",{children:b}),Object(a.jsx)("h1",{children:j})]})},b=t(8),j=t.n(b),p=function(e){var i="home";return!0===e.currentUser.boy&&(i="home"),!0===e.currentUser.girl&&(i="princess"),!0===e.currentUser.luigi&&(i="luigi"),!0===e.currentUser.football&&(i="football"),Object(a.jsxs)("div",{className:i,children:[Object(a.jsx)("h1",{children:"Cage/Fill"}),Object(a.jsx)(m.a,{className:"btn btn-primary",href:"/filling1050-cage2fill2",role:"button",children:"Switch to Cage 2 Fill 2"}),Object(a.jsx)(d,{hero:e}),Object(a.jsx)("div",{children:Object(a.jsx)(j.a,{format:"h:mm:ssa",ticking:!0,timezone:"US/Eastern"})}),Object(a.jsx)(m.a,{className:"btn btn-danger",href:"/",role:"button",children:"Home"})]})};var f=function(){return Object(a.jsx)("div",{class:"home",children:Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Goal"}),Object(a.jsx)(m.a,{class:"btn btn-primary",href:"/filling1050-normal",role:"button",children:"1050"}),Object(a.jsx)(m.a,{class:"btn btn-primary",href:"/filling1125-normal",role:"button",children:"1125"}),Object(a.jsx)(m.a,{class:"btn btn-primary",href:"/filling1200-normal",role:"button",children:"1200"}),Object(a.jsx)(m.a,{class:"btn btn-primary",href:"/fillingcustom",role:"button",children:"Custom"}),Object(a.jsx)(m.a,{class:"btn btn-primary",href:"/fillingonly",role:"button",children:"Filling Only"})]})})},O=function(e){var i=e,t="https://media.giphy.com/media/10h1BGkwYiIydi/giphy.gif",c="",s="";!0===i.hero.currentUser.boy&&(t="https://media.giphy.com/media/10h1BGkwYiIydi/giphy.gif",s="mario"),!0===i.hero.currentUser.girl&&(t="https://i.pinimg.com/originals/55/3a/4a/553a4a6c08af1bdd956b6a32fe0b3a49.gif",s="mario"),!0===i.hero.currentUser.luigi&&(t="https://steamuserimages-a.akamaihd.net/ugc/171541089271096213/CFFE888350DD504CD34EE54A001179564F45B30A/",s="mario"),!0===i.hero.currentUser.football&&(t="https://media.giphy.com/media/vYuOdwunVxpJpGVTTg/giphy.gif",s="mario");var o=Object(n.useState)(new Date),h=Object(r.a)(o,2),l=h[0],g=h[1];Object(n.useEffect)((function(){setTimeout((function(){return g(new Date)}),1e3)}),[l]);var m=new Date,u=60*m.getHours()*60+60*m.getMinutes()+m.getSeconds(),d="",b=0,j=0;return u<25800&&(d="Setup",b="",c="https://media.giphy.com/media/3ohzdOrcdpiD26TPt6/giphy.gif"),u>25800&u<=43200&&(d="Cage 2 Fill 2",j=u-25800,b=Math.round(j/25.14),c=t),u>43200&u<=45600&&(d="40 Minute Lunch",b="",c="https://media.giphy.com/media/KeEnqOWYF7tgE4uPyL/giphy.gif"),u>45600&u<=50400&&(d="Filling",j=u-45600,b=692+Math.round(j/25.14),c=t),u>50400&u<=51600&&(d="20 Minute Break",b="",c="https://media.giphy.com/media/RiWZUGcZPEKdQgrQ96/giphy.gif"),u>51600&u<=55800&&(d="Filling",j=u-51600,b=883+Math.round(j/25.14),c=t),u>55800&&(d="Complete!!!",b="",c="https://media.giphy.com/media/26u4cqiYI30juCOGY/giphy.gif"),Object(a.jsxs)("div",{children:[Object(a.jsx)("img",{className:s,src:c,alt:"loading..."}),Object(a.jsx)("h1",{children:d}),Object(a.jsx)("h1",{children:b})]})},y=function(e){var i="home";return!0===e.currentUser.boy&&(i="home"),!0===e.currentUser.girl&&(i="princess"),!0===e.currentUser.luigi&&(i="luigi"),!0===e.currentUser.football&&(i="football"),Object(a.jsxs)("div",{className:i,children:[Object(a.jsx)("h1",{children:"Cage 2 Fill 2"}),Object(a.jsx)(m.a,{className:"btn btn-primary",href:"/filling1050-normal",role:"button",children:"Switch to Cage/Fill"}),Object(a.jsx)(O,{hero:e}),Object(a.jsx)("div",{children:Object(a.jsx)(j.a,{format:"h:mm:ssa",ticking:!0,timezone:"US/Eastern"})}),Object(a.jsx)(m.a,{className:"btn btn-danger danger",href:"/",role:"button",children:"Home"})]})},x=function(e){var i=e,t="https://media.giphy.com/media/3ohzdOrcdpiD26TPt6/giphy.gif",c="https://media.giphy.com/media/10h1BGkwYiIydi/giphy.gif",s="",o="";!0===i.hero.currentUser.boy&&(c="https://media.giphy.com/media/10h1BGkwYiIydi/giphy.gif",o="mario"),!0===i.hero.currentUser.girl&&(c="https://i.pinimg.com/originals/55/3a/4a/553a4a6c08af1bdd956b6a32fe0b3a49.gif",o="mario"),!0===i.hero.currentUser.luigi&&(c="https://steamuserimages-a.akamaihd.net/ugc/171541089271096213/CFFE888350DD504CD34EE54A001179564F45B30A/",o="mario"),!0===i.hero.currentUser.football&&(c="https://media.giphy.com/media/vYuOdwunVxpJpGVTTg/giphy.gif",o="mario");var h=Object(n.useState)(new Date),l=Object(r.a)(h,2),g=l[0],m=l[1];Object(n.useEffect)((function(){setTimeout((function(){return m(new Date)}),1e3)}),[g]);var u=new Date,d=60*u.getHours()*60+60*u.getMinutes()+u.getSeconds(),b="",j=0,p=0,f=0;return d<25800&&(b="Setup",j="",s=t),d>25800&d<=35400&&(b="Caging",p=d-25800,j=Math.round(p/4.266),s=c),d>35400&d<=36e3&&(b="Set Up",j="",s=t),d>36e3&d<=43200&&(b="Filling",f=d-36e3,j=Math.round(f/14.4),s=c),d>43200&d<=45600&&(b="40 Minute Lunch",j="",s="https://media.giphy.com/media/KeEnqOWYF7tgE4uPyL/giphy.gif"),d>45600&d<=50400&&(b="Filling",f=d-45600,j=500+Math.round(f/14.4),s=c),d>50400&d<=51600&&(b="20 Minute Break",j="",s="https://media.giphy.com/media/RiWZUGcZPEKdQgrQ96/giphy.gif"),d>51600&d<=55800&&(b="Filling",f=d-51600,j=833+Math.round(f/14.4),s=c),d>55800&&(b="Complete!!!",j="",s="https://media.giphy.com/media/26u4cqiYI30juCOGY/giphy.gif"),Object(a.jsxs)("div",{children:[Object(a.jsx)("img",{className:o,src:s,alt:"loading..."}),Object(a.jsx)("h1",{children:b}),Object(a.jsx)("h1",{children:j})]})},U=function(e){var i="home";return!0===e.currentUser.boy&&(i="home"),!0===e.currentUser.girl&&(i="princess"),!0===e.currentUser.luigi&&(i="luigi"),!0===e.currentUser.football&&(i="football"),Object(a.jsxs)("div",{className:i,children:[Object(a.jsx)("h1",{children:"Cage/Fill"}),Object(a.jsx)(x,{hero:e}),Object(a.jsx)("div",{children:Object(a.jsx)(j.a,{format:"h:mm:ssa",ticking:!0,timezone:"US/Eastern"})}),Object(a.jsx)(m.a,{className:"btn btn-danger",href:"/",role:"button",children:"Home"})]})},v=function(e){var i=Object(n.useState)(new Date),t=Object(r.a)(i,2),c=t[0],s=t[1],o=e,h="https://media.giphy.com/media/3ohzdOrcdpiD26TPt6/giphy.gif",l="https://media.giphy.com/media/10h1BGkwYiIydi/giphy.gif",g="",m="";!0===o.hero.currentUser.boy&&(l="https://media.giphy.com/media/10h1BGkwYiIydi/giphy.gif",m="mario"),!0===o.hero.currentUser.girl&&(l="https://i.pinimg.com/originals/55/3a/4a/553a4a6c08af1bdd956b6a32fe0b3a49.gif",m="mario"),!0===o.hero.currentUser.luigi&&(l="https://steamuserimages-a.akamaihd.net/ugc/171541089271096213/CFFE888350DD504CD34EE54A001179564F45B30A/",m="mario"),!0===o.hero.currentUser.football&&(l="https://media.giphy.com/media/vYuOdwunVxpJpGVTTg/giphy.gif",m="mario"),Object(n.useEffect)((function(){setTimeout((function(){return s(new Date)}),1e3)}),[c]);var u=new Date,d=60*u.getHours()*60+60*u.getMinutes()+u.getSeconds(),b="",j=0,p=0,f=0;return d<25800&&(b="Setup",j="",g=h),d>25800&d<=35400&&(b="Caging",p=d-25800,j=Math.round(p/4),g=l),d>35400&d<=36e3&&(b="Set Up",j="",g=h),d>36e3&d<=43200&&(b="Filling",f=d-36e3,j=Math.round(f/13.5),g=l),d>43200&d<=45600&&(b="40 Minute Lunch",j="",g="https://media.giphy.com/media/KeEnqOWYF7tgE4uPyL/giphy.gif"),d>45600&d<=50400&&(b="Filling",f=d-45600,j=533+Math.round(f/13.5),g=l),d>50400&d<=51600&&(b="20 Minute Break",j="",g="https://media.giphy.com/media/RiWZUGcZPEKdQgrQ96/giphy.gif"),d>51600&d<=55800&&(b="Filling",f=d-51600,j=889+Math.round(f/13.5),g=l),d>55800&&(b="Complete!!!",j="",g="https://media.giphy.com/media/26u4cqiYI30juCOGY/giphy.gif"),Object(a.jsxs)("div",{children:[Object(a.jsx)("img",{className:m,src:g,alt:"loading..."}),Object(a.jsx)("h1",{children:b}),Object(a.jsx)("h1",{children:j})]})},F=function(e){var i="home";return!0===e.currentUser.boy&&(i="home"),!0===e.currentUser.girl&&(i="princess"),!0===e.currentUser.luigi&&(i="luigi"),!0===e.currentUser.football&&(i="football"),Object(a.jsxs)("div",{className:i,children:[Object(a.jsx)("h1",{children:"Cage/Fill"}),Object(a.jsx)(v,{hero:e}),Object(a.jsx)("div",{children:Object(a.jsx)(j.a,{format:"h:mm:ssa",ticking:!0,timezone:"US/Eastern"})}),Object(a.jsx)(m.a,{className:"btn btn-danger",href:"/",role:"button",children:"Home"})]})},E=function(e){var i=Object(n.useState)(new Date),t=Object(r.a)(i,2),c=t[0],s=t[1],o=Object(n.useState)(1050),h=Object(r.a)(o,2),l=h[0],g=h[1],m=e,u="https://media.giphy.com/media/3ohzdOrcdpiD26TPt6/giphy.gif",d="https://media.giphy.com/media/10h1BGkwYiIydi/giphy.gif",b="",j="";!0===m.hero.currentUser.boy&&(d="https://media.giphy.com/media/10h1BGkwYiIydi/giphy.gif",j="mario"),!0===m.hero.currentUser.girl&&(d="https://i.pinimg.com/originals/55/3a/4a/553a4a6c08af1bdd956b6a32fe0b3a49.gif",j="mario"),!0===m.hero.currentUser.luigi&&(d="https://steamuserimages-a.akamaihd.net/ugc/171541089271096213/CFFE888350DD504CD34EE54A001179564F45B30A/",j="mario"),!0===m.hero.currentUser.football&&(d="https://media.giphy.com/media/vYuOdwunVxpJpGVTTg/giphy.gif",j="mario"),Object(n.useEffect)((function(){setTimeout((function(){return s(new Date)}),1e3)}),[c]);var p=new Date,f=60*p.getHours()*60+60*p.getMinutes()+p.getSeconds(),O="",y=0,x=0,U=0,v=9600/l/2,F=16200/l;return console.log(l),f<25800&&(O="Setup",y="",b=u),f>25800&f<=35400&&(O="Caging",x=f-25800,y=Math.round(x/v),b=d),f>35400&f<=36e3&&(O="Set Up",y="",b=u),f>36e3&f<=43200&&(O="Filling",U=f-36e3,y=Math.round(U/F),b=d),f>43200&f<=45600&&(O="40 Minute Lunch",y="",b="https://media.giphy.com/media/KeEnqOWYF7tgE4uPyL/giphy.gif"),f>45600&f<=50400&&(O="Filling",U=f-45600,y=Math.round(7200/F)+Math.round(U/F),b=d),f>50400&f<=51600&&(O="20 Minute Break",y="",b="https://media.giphy.com/media/RiWZUGcZPEKdQgrQ96/giphy.gif"),f>51600&f<=55800&&(O="Filling",U=f-51600,y=Math.round(12e3/F)+Math.round(U/F),b=d),f>55800&&(O="Complete!!!",y="",b="https://media.giphy.com/media/26u4cqiYI30juCOGY/giphy.gif"),Object(a.jsxs)("div",{children:[Object(a.jsx)("input",{type:"number",value:l,onChange:function(e){g(e.target.value)}}),Object(a.jsx)("img",{className:j,src:b,alt:"loading..."}),Object(a.jsx)("h1",{children:O}),Object(a.jsx)("h1",{children:y})]})},D=function(e){var i="home";return!0===e.currentUser.boy&&(i="home"),!0===e.currentUser.girl&&(i="princess"),!0===e.currentUser.luigi&&(i="luigi"),!0===e.currentUser.football&&(i="football"),Object(a.jsxs)("div",{className:i,children:[Object(a.jsx)("h1",{children:"Cage/Fill"}),Object(a.jsx)(E,{hero:e}),Object(a.jsx)("div",{children:Object(a.jsx)(j.a,{format:"h:mm:ssa",ticking:!0,timezone:"US/Eastern"})}),Object(a.jsx)(m.a,{className:"btn btn-danger",href:"/",role:"button",children:"Home"})]})},M=function(e){var i=Object(n.useState)(new Date),t=Object(r.a)(i,2),c=t[0],s=t[1],o=e,h="https://media.giphy.com/media/10h1BGkwYiIydi/giphy.gif",l="",g="";!0===o.hero.currentUser.boy&&(h="https://media.giphy.com/media/10h1BGkwYiIydi/giphy.gif",g="mario"),!0===o.hero.currentUser.girl&&(h="https://i.pinimg.com/originals/55/3a/4a/553a4a6c08af1bdd956b6a32fe0b3a49.gif",g="mario"),!0===o.hero.currentUser.luigi&&(h="https://steamuserimages-a.akamaihd.net/ugc/171541089271096213/CFFE888350DD504CD34EE54A001179564F45B30A/",g="mario"),!0===o.hero.currentUser.football&&(h="https://media.giphy.com/media/vYuOdwunVxpJpGVTTg/giphy.gif",g="mario"),Object(n.useEffect)((function(){setTimeout((function(){return s(new Date)}),1e3)}),[c]);var m=new Date,u=60*m.getHours()*60+60*m.getMinutes()+m.getSeconds(),d="",b=0,j=0;return u<25800&&(d="Setup",b="",l="https://media.giphy.com/media/3ohzdOrcdpiD26TPt6/giphy.gif"),u>25800&u<=43200&&(d="Filling",j=u-25800,b=Math.round(j/15.3),l=h),u>43200&u<=45600&&(d="40 Minute Lunch",b="",l="https://media.giphy.com/media/KeEnqOWYF7tgE4uPyL/giphy.gif"),u>45600&u<=50400&&(d="Filling",j=u-45600,b=1137+Math.round(j/15.3),l=h),u>50400&u<=51600&&(d="20 Minute Break",b="",l="https://media.giphy.com/media/RiWZUGcZPEKdQgrQ96/giphy.gif"),u>51600&u<=55800&&(d="Filling",j=u-51600,b=1450+Math.round(j/15.3),l=h),u>55800&&(d="Complete!!!",b="",l="https://media.giphy.com/media/26u4cqiYI30juCOGY/giphy.gif"),Object(a.jsxs)("div",{children:[Object(a.jsx)("img",{className:g,src:l,alt:"loading..."}),Object(a.jsx)("h1",{children:d}),Object(a.jsx)("h1",{children:b})]})},C=function(e){var i="home";return!0===e.currentUser.boy&&(i="home"),!0===e.currentUser.girl&&(i="princess"),!0===e.currentUser.luigi&&(i="luigi"),!0===e.currentUser.football&&(i="football"),Object(a.jsxs)("div",{className:i,children:[Object(a.jsx)("h1",{children:"Filling"}),Object(a.jsx)(M,{hero:e}),Object(a.jsx)("div",{children:Object(a.jsx)(j.a,{format:"h:mm:ssa",ticking:!0,timezone:"US/Eastern"})}),Object(a.jsx)(m.a,{className:"btn btn-danger",href:"/",role:"button",children:"Home"})]})};function w(){var e=Object(n.useState)({boy:!0,girl:!1,luigi:!1,football:!1}),i=Object(r.a)(e,2),t=i[0],c=i[1];return console.log(t),Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("button",{onClick:function(){!0===t.boy&&c({boy:!1,girl:!0,luigi:!1,football:!1}),!0===t.girl&&c({boy:!1,girl:!1,luigi:!0,football:!1}),!0===t.luigi&&c({boy:!1,girl:!1,luigi:!1,football:!0}),!0===t.football&&c({boy:!0,girl:!1,luigi:!1,football:!1})}}),Object(a.jsx)(l.a,{exact:!0,path:"/",component:u}),Object(a.jsx)(l.a,{exact:!0,path:"/goalmenu",component:f}),Object(a.jsx)(l.a,{exact:!0,path:"/filling1050-normal",children:Object(a.jsx)(p,{currentUser:t})}),Object(a.jsx)(l.a,{exact:!0,path:"/filling1050-cage2fill2",children:Object(a.jsx)(y,{currentUser:t})}),Object(a.jsx)(l.a,{exact:!0,path:"/filling1125-normal",children:Object(a.jsx)(U,{currentUser:t})}),Object(a.jsx)(l.a,{exact:!0,path:"/filling1200-normal",children:Object(a.jsx)(F,{currentUser:t})}),Object(a.jsx)(l.a,{exact:!0,path:"/fillingcustom",children:Object(a.jsx)(D,{currentUser:t})}),Object(a.jsx)(l.a,{exact:!0,path:"/fillingonly",children:Object(a.jsx)(C,{currentUser:t})})]})}o.a.render(Object(a.jsx)(g.a,{children:Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(w,{})})}),document.getElementById("root")),h()}},[[41,1,2]]]);
//# sourceMappingURL=main.a0bed1e8.chunk.js.map