(this.webpackJsonpmemory_game=this.webpackJsonpmemory_game||[]).push([[0],{10:function(e,t,s){e.exports={cell:"Cell_cell__LhVds",closed:"Cell_closed__2FibX",opened:"Cell_opened__3Gzez",done:"Cell_done__1CS9a",fail:"Cell_fail__3URfI",bg0:"Cell_bg0__HeDjx",bg1:"Cell_bg1__2hZg0",bg2:"Cell_bg2__2-nIq",bg3:"Cell_bg3__3aPAu",bg4:"Cell_bg4__1bbh1",bg5:"Cell_bg5__3b9AQ",bg6:"Cell_bg6__3gKku",bg7:"Cell_bg7__2lfJI",bg8:"Cell_bg8__2lBmZ",bg9:"Cell_bg9__dxkgx",bg10:"Cell_bg10__3IGmg",bg11:"Cell_bg11__C5THu",bg12:"Cell_bg12__6IczA",bg13:"Cell_bg13__SF2h0",bg14:"Cell_bg14__Q99sq",bg15:"Cell_bg15__1sxmV",bg16:"Cell_bg16__DSb_2",bg17:"Cell_bg17__2fjIb"}},13:function(e,t,s){e.exports={restart:"App_restart__3LjsW",rotate:"App_rotate__19cmB"}},2:function(e,t,s){e.exports={wrapper:"Board_wrapper__B0n9X",start:"Board_start__2u6mK",success:"Board_success__1xunf",start__text:"Board_start__text__2QZuU",vibrate:"Board_vibrate__1fGWa",hidden:"Board_hidden__1fgpJ"}},20:function(e,t,s){},21:function(e,t,s){"use strict";s.r(t);for(var c=s(0),n=s(1),a=s.n(n),r=s(12),o=s.n(r),u=(s(20),s(8)),l=s(14),_=s(3),b=s(7),i=s(2),d=s.n(i),j=s(4),f=s.n(j),g=s(10),m=s.n(g),O=a.a.memo((function(e){var t=e.status,s=e.id,n=e.onClick,a=e.content;return Object(c.jsx)("div",{className:f()(m.a.cell,m.a[a],m.a[t]),onClick:function(){return n(s)}})})),p=function(e,t){for(var s=arguments.length,c=new Array(s>2?s-2:0),n=2;n<s;n++)c[n-2]=arguments[n];return e.map((function(e){return c.includes(e.id)?Object(b.a)(Object(b.a)({},e),{},{status:t}):e}))},C=function(e){var t,s=e.cellsState,a=e.setCellsState,r=e.incMoves,o=e.gameStatus,u=e.setGameStatus,l=e.moves,i=e.setBestScore,j=Object(n.useRef)([]);Object(n.useEffect)((function(){if(2===j.current.length&&!s.find((function(e){return"fail"===e.status}))){var e=s.filter((function(e){return j.current.includes(e.id)}));e[0].content===e[1].content?(setTimeout((function(){a((function(t){return p(t,"done",e[0].id,e[1].id)}))}),300),j.current=[]):(setTimeout((function(){a((function(e){return e.map((function(e){return"opened"===e.status?Object(b.a)(Object(b.a)({},e),{},{status:"fail"}):e}))}))}),500),setTimeout((function(){a((function(t){return p(t,"closed",e[0].id,e[1].id)})),j.current=[]}),1500)),r()}}),[s,r,a]),Object(n.useEffect)((function(){s.every((function(e){return"done"===e.status}))&&setTimeout((function(){u("success"),i(l),localStorage.setItem("best-score",l)}),500)}),[s,u,l,i]);var g=Object(n.useCallback)((function(e){2!==j.current.length&&(j.current.push(e),a((function(t){return p(t,"opened",e)})))}),[]);return Object(c.jsxs)("div",{className:d.a.wrapper,children:[s.map((function(e){return Object(c.jsx)(O,{status:e.status,id:e.id,content:e.content,onClick:g},e.id)})),Object(c.jsxs)("div",{className:f()(d.a.start,(t={},Object(_.a)(t,d.a.hidden,"started"===o),Object(_.a)(t,d.a.success,"success"===o),t)),children:[Object(c.jsx)("span",{className:f()(d.a.start__text,Object(_.a)({},d.a.hidden,"ready"!==o)),onClick:function(){return u("started")},children:"Press to start"}),Object(c.jsxs)("span",{className:f()(d.a.success,Object(_.a)({},d.a.hidden,"success"!==o)),children:["Success",Object(c.jsx)("br",{}),"Moves: ",l]})]})]})},h=s(5),x=s.n(h),v=function(e){var t=e.moves,s=e.best;return Object(c.jsxs)("div",{className:x.a.wrapper,children:[Object(c.jsxs)("div",{className:x.a.score,children:["Your best",Object(c.jsx)("br",{})," score:",Object(c.jsx)("span",{className:x.a.output,children:s})]}),Object(c.jsxs)("div",{className:x.a.score,children:["Current",Object(c.jsx)("br",{})," moves:",Object(c.jsx)("span",{className:x.a.output,children:t})]})]})},S=s(13),k=s.n(S),B=[],N=0;N<36;N++)B.push({status:"closed",id:N,content:"bg".concat(N<18?N:N%18)});var w=function(e){for(var t=Object(l.a)(e),s=t.length-1;s>0;s--){var c=Math.floor(Math.random()*(s+1)),n=[t[c],t[s]];t[s]=n[0],t[c]=n[1]}return t};var I=function(){var e=Object(n.useState)(0),t=Object(u.a)(e,2),s=t[0],a=t[1],r=Object(n.useState)(+localStorage.getItem("best-score")||0),o=Object(u.a)(r,2),l=o[0],_=o[1],b=Object(n.useState)("ready"),i=Object(u.a)(b,2),d=i[0],j=i[1],f=Object(n.useState)(w(B)),g=Object(u.a)(f,2),m=g[0],O=g[1],p=Object(n.useCallback)((function(){a((function(e){return++e}))}),[]),h=Object(n.useCallback)((function(){j("ready"),a(0),O(w(B))}),[]);return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(C,{cellsState:m,setCellsState:O,moves:s,incMoves:p,gameStatus:d,setGameStatus:j,setBestScore:_}),Object(c.jsx)(v,{moves:s,best:l}),Object(c.jsx)("button",{className:k.a.restart,onClick:h})]})};o.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(I,{})}),document.getElementById("root"))},5:function(e,t,s){e.exports={wrapper:"Score_wrapper__11QJl",score:"Score_score__2cOhi",output:"Score_output__2Dbmw"}}},[[21,1,2]]]);
//# sourceMappingURL=main.66d7cb05.chunk.js.map