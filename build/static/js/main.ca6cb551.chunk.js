(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{14:function(e,i,t){},28:function(e,i,t){},41:function(e,i,t){"use strict";t.r(i);var r=t(5),a=t(0),n=t(1),c=t.n(n),s=t(20),o=t.n(s),h=(t(28),function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,42)).then((function(i){var t=i.getCLS,r=i.getFID,a=i.getFCP,n=i.getLCP,c=i.getTTFB;t(e),r(e),a(e),n(e),c(e)}))}),l=t(4),g=t(22),u=(t(29),t(14),t(3));var m=function(){return Object(a.jsx)("div",{class:"home",children:Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Production Buddy"}),Object(a.jsx)(u.a,{class:"btn btn-primary",href:"/goalmenu",role:"button",children:"Start"})]})})},d=function(e){var i=Object(n.useState)(new Date),t=Object(r.a)(i,2),c=t[0],s=t[1],o=e,h="https://media.giphy.com/media/3ohzdOrcdpiD26TPt6/giphy.gif",l="https://media.giphy.com/media/KeEnqOWYF7tgE4uPyL/giphy.gif",g="https://media.giphy.com/media/RiWZUGcZPEKdQgrQ96/giphy.gif",u="https://media.giphy.com/media/26u4cqiYI30juCOGY/giphy.gif",m="https://media.giphy.com/media/10h1BGkwYiIydi/giphy.gif",d="",b="";!0===o.hero.currentUser.boy&&(m="https://media.giphy.com/media/10h1BGkwYiIydi/giphy.gif",b="mario"),!0===o.hero.currentUser.girl&&(m="https://i.pinimg.com/originals/55/3a/4a/553a4a6c08af1bdd956b6a32fe0b3a49.gif",b="mario"),!0===o.hero.currentUser.luigi&&(m="https://steamuserimages-a.akamaihd.net/ugc/171541089271096213/CFFE888350DD504CD34EE54A001179564F45B30A/",b="mario"),!0===o.hero.currentUser.football&&(m="https://media.giphy.com/media/vYuOdwunVxpJpGVTTg/giphy.gif",b="mario"),Object(n.useEffect)((function(){setTimeout((function(){return s(new Date)}),1e3)}),[c]);var j=new Date,p=60*j.getHours()*60+60*j.getMinutes()+j.getSeconds(),f="",O=0,y=0,x=0;return p<25800&&(f="Setup",O="",d=h),p>25800&p<=35400&&(f="Caging",y=p-25800,O=Math.round(y/4.572),d=m),p>35400&p<=36e3&&(f="Set Up",O="",d=h),p>36e3&p<=43200&&(f="Filling",x=p-36e3,O=Math.round(x/15.3),d=m),p>43200&p<=45600&&(f="40 Minute Lunch",O="",d=l),p>45600&p<=50400&&(f="Filling",x=p-45600,O=465+Math.round(x/15.3),d=m),p>50400&p<=51600&&(f="20 Minute Break",O="",d=g),p>51600&p<=55800&&(f="Filling",x=p-51600,O=775+Math.round(x/15.3),d=m),p>55800&p<59400&&(f="Complete!!!",O="",d=u),p>=59400&p<6e4&&(f="Setup",O="",d=h),p>=6e4&p<68400&&(f="Caging",y=p-6e4,O=Math.round(y/4.572),d=m),p>=68400&p<69e3&&(f="10 Minute Break",O="",d=g),p>69e3&p<=73800&&(f="Filling",x=p-69e3,O=Math.round(x/16.6),d=m),p>73800&p<=75600&&(f="30 Minute Lunch",O="",d=l),p>75600&p<=86400&&(f="Filling",x=p-75600,O=289+Math.round(x/16.6),d=m),p>0&p<=1800&&(f="Filling",x=p,O=940+Math.round(x/16.4),d=m),p>1800&p<25800&&(f="Complete!!!",O="",d=u),Object(a.jsxs)("div",{children:[Object(a.jsx)("img",{className:b,src:d,alt:"loading..."}),Object(a.jsx)("h1",{children:f}),Object(a.jsx)("h1",{children:O})]})},b=t(6),j=t.n(b),p=function(e){var i="home";return!0===e.currentUser.boy&&(i="home"),!0===e.currentUser.girl&&(i="princess"),!0===e.currentUser.luigi&&(i="luigi"),!0===e.currentUser.football&&(i="football"),Object(a.jsxs)("div",{className:i,children:[Object(a.jsx)("h1",{children:"Cage/Fill"}),Object(a.jsx)(u.a,{className:"btn btn-primary",href:"/filling1050-cage2fill2",role:"button",children:"Switch to Cage 2 Fill 2"}),Object(a.jsx)(d,{hero:e}),Object(a.jsx)("div",{children:Object(a.jsx)(j.a,{format:"h:mm:ssa",ticking:!0,timezone:"US/Eastern"})}),Object(a.jsx)(u.a,{className:"btn btn-danger",href:"/",role:"button",children:"Home"})]})};var f=function(){return Object(a.jsx)("div",{class:"home",children:Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Goal"}),Object(a.jsx)(u.a,{class:"btn btn-primary",href:"/filling1050-normal",role:"button",children:"1050"}),Object(a.jsx)(u.a,{class:"btn btn-primary",href:"/filling1125-normal",role:"button",children:"1125"}),Object(a.jsx)(u.a,{class:"btn btn-primary",href:"/filling1200-normal",role:"button",children:"1200"}),Object(a.jsx)(u.a,{class:"btn btn-primary",href:"/fillingcustom",role:"button",children:"Custom"}),Object(a.jsx)(u.a,{class:"btn btn-primary",href:"/fillingonly",role:"button",children:"Filling Only"}),Object(a.jsx)(u.a,{class:"btn btn-primary",href:"/cagingthirdshift",role:"button",children:"Third Shift Cage"})]})})},O=function(e){var i=e,t="https://media.giphy.com/media/10h1BGkwYiIydi/giphy.gif",c="",s="";!0===i.hero.currentUser.boy&&(t="https://media.giphy.com/media/10h1BGkwYiIydi/giphy.gif",s="mario"),!0===i.hero.currentUser.girl&&(t="https://i.pinimg.com/originals/55/3a/4a/553a4a6c08af1bdd956b6a32fe0b3a49.gif",s="mario"),!0===i.hero.currentUser.luigi&&(t="https://steamuserimages-a.akamaihd.net/ugc/171541089271096213/CFFE888350DD504CD34EE54A001179564F45B30A/",s="mario"),!0===i.hero.currentUser.football&&(t="https://media.giphy.com/media/vYuOdwunVxpJpGVTTg/giphy.gif",s="mario");var o=Object(n.useState)(new Date),h=Object(r.a)(o,2),l=h[0],g=h[1];Object(n.useEffect)((function(){setTimeout((function(){return g(new Date)}),1e3)}),[l]);var u=new Date,m=60*u.getHours()*60+60*u.getMinutes()+u.getSeconds(),d="",b=0,j=0;return m<25800&&(d="Setup",b="",c="https://media.giphy.com/media/3ohzdOrcdpiD26TPt6/giphy.gif"),m>25800&m<=43200&&(d="Cage 2 Fill 2",j=m-25800,b=Math.round(j/25.14),c=t),m>43200&m<=45600&&(d="40 Minute Lunch",b="",c="https://media.giphy.com/media/KeEnqOWYF7tgE4uPyL/giphy.gif"),m>45600&m<=50400&&(d="Filling",j=m-45600,b=692+Math.round(j/25.14),c=t),m>50400&m<=51600&&(d="20 Minute Break",b="",c="https://media.giphy.com/media/RiWZUGcZPEKdQgrQ96/giphy.gif"),m>51600&m<=55800&&(d="Filling",j=m-51600,b=883+Math.round(j/25.14),c=t),m>55800&&(d="Complete!!!",b="",c="https://media.giphy.com/media/26u4cqiYI30juCOGY/giphy.gif"),Object(a.jsxs)("div",{children:[Object(a.jsx)("img",{className:s,src:c,alt:"loading..."}),Object(a.jsx)("h1",{children:d}),Object(a.jsx)("h1",{children:b})]})},y=function(e){var i="home";return!0===e.currentUser.boy&&(i="home"),!0===e.currentUser.girl&&(i="princess"),!0===e.currentUser.luigi&&(i="luigi"),!0===e.currentUser.football&&(i="football"),Object(a.jsxs)("div",{className:i,children:[Object(a.jsx)("h1",{children:"Cage 2 Fill 2"}),Object(a.jsx)(u.a,{className:"btn btn-primary",href:"/filling1050-normal",role:"button",children:"Switch to Cage/Fill"}),Object(a.jsx)(O,{hero:e}),Object(a.jsx)("div",{children:Object(a.jsx)(j.a,{format:"h:mm:ssa",ticking:!0,timezone:"US/Eastern"})}),Object(a.jsx)(u.a,{className:"btn btn-danger danger",href:"/",role:"button",children:"Home"})]})},x=function(e){var i=e,t="https://media.giphy.com/media/3ohzdOrcdpiD26TPt6/giphy.gif",c="https://media.giphy.com/media/10h1BGkwYiIydi/giphy.gif",s="",o="";!0===i.hero.currentUser.boy&&(c="https://media.giphy.com/media/10h1BGkwYiIydi/giphy.gif",o="mario"),!0===i.hero.currentUser.girl&&(c="https://i.pinimg.com/originals/55/3a/4a/553a4a6c08af1bdd956b6a32fe0b3a49.gif",o="mario"),!0===i.hero.currentUser.luigi&&(c="https://steamuserimages-a.akamaihd.net/ugc/171541089271096213/CFFE888350DD504CD34EE54A001179564F45B30A/",o="mario"),!0===i.hero.currentUser.football&&(c="https://media.giphy.com/media/vYuOdwunVxpJpGVTTg/giphy.gif",o="mario");var h=Object(n.useState)(new Date),l=Object(r.a)(h,2),g=l[0],u=l[1];Object(n.useEffect)((function(){setTimeout((function(){return u(new Date)}),1e3)}),[g]);var m=new Date,d=60*m.getHours()*60+60*m.getMinutes()+m.getSeconds(),b="",j=0,p=0,f=0;return d<25800&&(b="Setup",j="",s=t),d>25800&d<=35400&&(b="Caging",p=d-25800,j=Math.round(p/4.266),s=c),d>35400&d<=36e3&&(b="Set Up",j="",s=t),d>36e3&d<=43200&&(b="Filling",f=d-36e3,j=Math.round(f/14.4),s=c),d>43200&d<=45600&&(b="40 Minute Lunch",j="",s="https://media.giphy.com/media/KeEnqOWYF7tgE4uPyL/giphy.gif"),d>45600&d<=50400&&(b="Filling",f=d-45600,j=500+Math.round(f/14.4),s=c),d>50400&d<=51600&&(b="20 Minute Break",j="",s="https://media.giphy.com/media/RiWZUGcZPEKdQgrQ96/giphy.gif"),d>51600&d<=55800&&(b="Filling",f=d-51600,j=833+Math.round(f/14.4),s=c),d>55800&&(b="Complete!!!",j="",s="https://media.giphy.com/media/26u4cqiYI30juCOGY/giphy.gif"),Object(a.jsxs)("div",{children:[Object(a.jsx)("img",{className:o,src:s,alt:"loading..."}),Object(a.jsx)("h1",{children:b}),Object(a.jsx)("h1",{children:j})]})},U=function(e){var i="home";return!0===e.currentUser.boy&&(i="home"),!0===e.currentUser.girl&&(i="princess"),!0===e.currentUser.luigi&&(i="luigi"),!0===e.currentUser.football&&(i="football"),Object(a.jsxs)("div",{className:i,children:[Object(a.jsx)("h1",{children:"Cage/Fill"}),Object(a.jsx)(x,{hero:e}),Object(a.jsx)("div",{children:Object(a.jsx)(j.a,{format:"h:mm:ssa",ticking:!0,timezone:"US/Eastern"})}),Object(a.jsx)(u.a,{className:"btn btn-danger",href:"/",role:"button",children:"Home"})]})},F=function(e){var i=Object(n.useState)(new Date),t=Object(r.a)(i,2),c=t[0],s=t[1],o=e,h="https://media.giphy.com/media/3ohzdOrcdpiD26TPt6/giphy.gif",l="https://media.giphy.com/media/10h1BGkwYiIydi/giphy.gif",g="",u="";!0===o.hero.currentUser.boy&&(l="https://media.giphy.com/media/10h1BGkwYiIydi/giphy.gif",u="mario"),!0===o.hero.currentUser.girl&&(l="https://i.pinimg.com/originals/55/3a/4a/553a4a6c08af1bdd956b6a32fe0b3a49.gif",u="mario"),!0===o.hero.currentUser.luigi&&(l="https://steamuserimages-a.akamaihd.net/ugc/171541089271096213/CFFE888350DD504CD34EE54A001179564F45B30A/",u="mario"),!0===o.hero.currentUser.football&&(l="https://media.giphy.com/media/vYuOdwunVxpJpGVTTg/giphy.gif",u="mario"),Object(n.useEffect)((function(){setTimeout((function(){return s(new Date)}),1e3)}),[c]);var m=new Date,d=60*m.getHours()*60+60*m.getMinutes()+m.getSeconds(),b="",j=0,p=0,f=0;return d<25800&&(b="Setup",j="",g=h),d>25800&d<=35400&&(b="Caging",p=d-25800,j=Math.round(p/4),g=l),d>35400&d<=36e3&&(b="Set Up",j="",g=h),d>36e3&d<=43200&&(b="Filling",f=d-36e3,j=Math.round(f/13.5),g=l),d>43200&d<=45600&&(b="40 Minute Lunch",j="",g="https://media.giphy.com/media/KeEnqOWYF7tgE4uPyL/giphy.gif"),d>45600&d<=50400&&(b="Filling",f=d-45600,j=533+Math.round(f/13.5),g=l),d>50400&d<=51600&&(b="20 Minute Break",j="",g="https://media.giphy.com/media/RiWZUGcZPEKdQgrQ96/giphy.gif"),d>51600&d<=55800&&(b="Filling",f=d-51600,j=889+Math.round(f/13.5),g=l),d>55800&&(b="Complete!!!",j="",g="https://media.giphy.com/media/26u4cqiYI30juCOGY/giphy.gif"),Object(a.jsxs)("div",{children:[Object(a.jsx)("img",{className:u,src:g,alt:"loading..."}),Object(a.jsx)("h1",{children:b}),Object(a.jsx)("h1",{children:j})]})},v=function(e){var i="home";return!0===e.currentUser.boy&&(i="home"),!0===e.currentUser.girl&&(i="princess"),!0===e.currentUser.luigi&&(i="luigi"),!0===e.currentUser.football&&(i="football"),Object(a.jsxs)("div",{className:i,children:[Object(a.jsx)("h1",{children:"Cage/Fill"}),Object(a.jsx)(F,{hero:e}),Object(a.jsx)("div",{children:Object(a.jsx)(j.a,{format:"h:mm:ssa",ticking:!0,timezone:"US/Eastern"})}),Object(a.jsx)(u.a,{className:"btn btn-danger",href:"/",role:"button",children:"Home"})]})},M=function(e){var i=Object(n.useState)(new Date),t=Object(r.a)(i,2),c=t[0],s=t[1],o=Object(n.useState)(1050),h=Object(r.a)(o,2),l=h[0],g=h[1],u=e,m="https://media.giphy.com/media/3ohzdOrcdpiD26TPt6/giphy.gif",d="https://media.giphy.com/media/10h1BGkwYiIydi/giphy.gif",b="",j="";!0===u.hero.currentUser.boy&&(d="https://media.giphy.com/media/10h1BGkwYiIydi/giphy.gif",j="mario"),!0===u.hero.currentUser.girl&&(d="https://i.pinimg.com/originals/55/3a/4a/553a4a6c08af1bdd956b6a32fe0b3a49.gif",j="mario"),!0===u.hero.currentUser.luigi&&(d="https://steamuserimages-a.akamaihd.net/ugc/171541089271096213/CFFE888350DD504CD34EE54A001179564F45B30A/",j="mario"),!0===u.hero.currentUser.football&&(d="https://media.giphy.com/media/vYuOdwunVxpJpGVTTg/giphy.gif",j="mario"),Object(n.useEffect)((function(){setTimeout((function(){return s(new Date)}),1e3)}),[c]);var p=new Date,f=60*p.getHours()*60+60*p.getMinutes()+p.getSeconds(),O="",y=0,x=0,U=0,F=9600/l/2,v=16200/l;return console.log(l),f<25800&&(O="Setup",y="",b=m),f>25800&f<=35400&&(O="Caging",x=f-25800,y=Math.round(x/F),b=d),f>35400&f<=36e3&&(O="Set Up",y="",b=m),f>36e3&f<=43200&&(O="Filling",U=f-36e3,y=Math.round(U/v),b=d),f>43200&f<=45600&&(O="40 Minute Lunch",y="",b="https://media.giphy.com/media/KeEnqOWYF7tgE4uPyL/giphy.gif"),f>45600&f<=50400&&(O="Filling",U=f-45600,y=Math.round(7200/v)+Math.round(U/v),b=d),f>50400&f<=51600&&(O="20 Minute Break",y="",b="https://media.giphy.com/media/RiWZUGcZPEKdQgrQ96/giphy.gif"),f>51600&f<=55800&&(O="Filling",U=f-51600,y=Math.round(12e3/v)+Math.round(U/v),b=d),f>55800&&(O="Complete!!!",y="",b="https://media.giphy.com/media/26u4cqiYI30juCOGY/giphy.gif"),Object(a.jsxs)("div",{children:[Object(a.jsx)("input",{type:"number",value:l,onChange:function(e){g(e.target.value)}}),Object(a.jsx)("img",{className:j,src:b,alt:"loading..."}),Object(a.jsx)("h1",{children:O}),Object(a.jsx)("h1",{children:y})]})},E=function(e){var i="home";return!0===e.currentUser.boy&&(i="home"),!0===e.currentUser.girl&&(i="princess"),!0===e.currentUser.luigi&&(i="luigi"),!0===e.currentUser.football&&(i="football"),Object(a.jsxs)("div",{className:i,children:[Object(a.jsx)("h1",{children:"Cage/Fill"}),Object(a.jsx)(M,{hero:e}),Object(a.jsx)("div",{children:Object(a.jsx)(j.a,{format:"h:mm:ssa",ticking:!0,timezone:"US/Eastern"})}),Object(a.jsx)(u.a,{className:"btn btn-danger",href:"/",role:"button",children:"Home"})]})},C=function(e){var i=Object(n.useState)(new Date),t=Object(r.a)(i,2),c=t[0],s=t[1],o=e,h="https://media.giphy.com/media/3ohzdOrcdpiD26TPt6/giphy.gif",l="https://media.giphy.com/media/KeEnqOWYF7tgE4uPyL/giphy.gif",g="https://media.giphy.com/media/RiWZUGcZPEKdQgrQ96/giphy.gif",u="https://media.giphy.com/media/26u4cqiYI30juCOGY/giphy.gif",m="https://media.giphy.com/media/10h1BGkwYiIydi/giphy.gif",d="",b="";!0===o.hero.currentUser.boy&&(m="https://media.giphy.com/media/10h1BGkwYiIydi/giphy.gif",b="mario"),!0===o.hero.currentUser.girl&&(m="https://i.pinimg.com/originals/55/3a/4a/553a4a6c08af1bdd956b6a32fe0b3a49.gif",b="mario"),!0===o.hero.currentUser.luigi&&(m="https://steamuserimages-a.akamaihd.net/ugc/171541089271096213/CFFE888350DD504CD34EE54A001179564F45B30A/",b="mario"),!0===o.hero.currentUser.football&&(m="https://media.giphy.com/media/vYuOdwunVxpJpGVTTg/giphy.gif",b="mario"),Object(n.useEffect)((function(){setTimeout((function(){return s(new Date)}),1e3)}),[c]);var j=new Date,p=60*j.getHours()*60+60*j.getMinutes()+j.getSeconds(),f="",O=0,y=0;return p<25800&&(f="Setup",O="",d=h),p>25800&p<=43200&&(f="Filling",y=p-25800,O=Math.round(y/15.3),d=m),p>43200&p<=45600&&(f="40 Minute Lunch",O="",d=l),p>45600&p<=50400&&(f="Filling",y=p-45600,O=1137+Math.round(y/15.3),d=m),p>50400&p<=51600&&(f="20 Minute Break",O="",d=g),p>51600&p<=55800&&(f="Filling",y=p-51600,O=1450+Math.round(y/15.3),d=m),p>55800&p<59400&&(f="Complete!!!",O="",d=u),p>59400&p<=6e4&&(f="Setup",O="",d=h),p>6e4&p<=68400&&(f="Filling",y=p-6e4,O=Math.round(y/16.13),d=m),p>68400&p<=69e3&&(f="10 Minute Break",O="",d=g),p>69e3&p<=73800&&(f="Filling",y=p-69e3,O=521+Math.round(y/16.13),d=m),p>73800&p<=75600&&(f="30 Minute Lunch",O="",d=l),p>75600&p<=86400&&(f="Filling",y=p-75600,O=819+Math.round(y/16.13),d=m),p>0&p<=1800&&(f="Filling",y=p,O=1489+Math.round(y/16.2),d=m),p>1800&p<=25800&&(f="Complete!!!",O="",d=u),Object(a.jsxs)("div",{children:[Object(a.jsx)("img",{className:b,src:d,alt:"loading..."}),Object(a.jsx)("h1",{children:f}),Object(a.jsx)("h1",{children:O})]})},D=function(e){var i="home";return!0===e.currentUser.boy&&(i="home"),!0===e.currentUser.girl&&(i="princess"),!0===e.currentUser.luigi&&(i="luigi"),!0===e.currentUser.football&&(i="football"),Object(a.jsxs)("div",{className:i,children:[Object(a.jsx)("h1",{children:"Filling"}),Object(a.jsx)(C,{hero:e}),Object(a.jsx)("div",{children:Object(a.jsx)(j.a,{format:"h:mm:ssa",ticking:!0,timezone:"US/Eastern"})}),Object(a.jsx)(u.a,{className:"btn btn-danger",href:"/",role:"button",children:"Home"})]})},w=function(e){var i=Object(n.useState)(new Date),t=Object(r.a)(i,2),c=t[0],s=t[1],o=e,h="https://media.giphy.com/media/10h1BGkwYiIydi/giphy.gif",l="",g="";!0===o.hero.currentUser.boy&&(h="https://media.giphy.com/media/10h1BGkwYiIydi/giphy.gif",g="mario"),!0===o.hero.currentUser.girl&&(h="https://i.pinimg.com/originals/55/3a/4a/553a4a6c08af1bdd956b6a32fe0b3a49.gif",g="mario"),!0===o.hero.currentUser.luigi&&(h="https://steamuserimages-a.akamaihd.net/ugc/171541089271096213/CFFE888350DD504CD34EE54A001179564F45B30A/",g="mario"),!0===o.hero.currentUser.football&&(h="https://media.giphy.com/media/vYuOdwunVxpJpGVTTg/giphy.gif",g="mario"),Object(n.useEffect)((function(){setTimeout((function(){return s(new Date)}),1e3)}),[c]);var u=new Date,m=(u.getHours(),u.getMinutes(),u.getSeconds(),""),d=0,b=0;return m="Caging",b=5100,d=5211+Math.round(b/4.29),l=h,Object(a.jsxs)("div",{children:[Object(a.jsx)("img",{className:g,src:l,alt:"loading..."}),Object(a.jsx)("h1",{children:m}),Object(a.jsx)("h1",{children:d})]})},S=function(e){var i="home";return!0===e.currentUser.boy&&(i="home"),!0===e.currentUser.girl&&(i="princess"),!0===e.currentUser.luigi&&(i="luigi"),!0===e.currentUser.football&&(i="football"),Object(a.jsxs)("div",{className:i,children:[Object(a.jsx)("h1",{children:"Caging"}),Object(a.jsx)(w,{hero:e}),Object(a.jsx)("div",{children:Object(a.jsx)(j.a,{format:"h:mm:ssa",ticking:!0,timezone:"US/Eastern"})}),Object(a.jsx)(u.a,{className:"btn btn-danger",href:"/",role:"button",children:"Home"})]})};function k(){var e=Object(n.useState)({boy:!0,girl:!1,luigi:!1,football:!1}),i=Object(r.a)(e,2),t=i[0],c=i[1];return console.log(t),Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("button",{onClick:function(){!0===t.boy&&c({boy:!1,girl:!0,luigi:!1,football:!1}),!0===t.girl&&c({boy:!1,girl:!1,luigi:!0,football:!1}),!0===t.luigi&&c({boy:!1,girl:!1,luigi:!1,football:!0}),!0===t.football&&c({boy:!0,girl:!1,luigi:!1,football:!1})}}),Object(a.jsx)(l.a,{exact:!0,path:"/",component:m}),Object(a.jsx)(l.a,{exact:!0,path:"/goalmenu",component:f}),Object(a.jsx)(l.a,{exact:!0,path:"/filling1050-normal",children:Object(a.jsx)(p,{currentUser:t})}),Object(a.jsx)(l.a,{exact:!0,path:"/filling1050-cage2fill2",children:Object(a.jsx)(y,{currentUser:t})}),Object(a.jsx)(l.a,{exact:!0,path:"/filling1125-normal",children:Object(a.jsx)(U,{currentUser:t})}),Object(a.jsx)(l.a,{exact:!0,path:"/filling1200-normal",children:Object(a.jsx)(v,{currentUser:t})}),Object(a.jsx)(l.a,{exact:!0,path:"/fillingcustom",children:Object(a.jsx)(E,{currentUser:t})}),Object(a.jsx)(l.a,{exact:!0,path:"/fillingonly",children:Object(a.jsx)(D,{currentUser:t})}),Object(a.jsx)(l.a,{exact:!0,path:"/cagingthirdshift",children:Object(a.jsx)(S,{currentUser:t})})]})}o.a.render(Object(a.jsx)(g.a,{children:Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(k,{})})}),document.getElementById("root")),h()}},[[41,1,2]]]);
//# sourceMappingURL=main.ca6cb551.chunk.js.map