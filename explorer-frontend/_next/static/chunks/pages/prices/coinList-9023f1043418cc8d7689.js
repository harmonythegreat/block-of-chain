_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[61,68],{"/vXV":function(e,t,n){"use strict";n.r(t),n.d(t,"HomeChart",(function(){return J})),n.d(t,"MiniChart",(function(){return he}));var c=n("SaX8"),r=n.n(c),i=n("cpVT"),a=n("nKUr"),o=n("z7pX"),s=n("VTv1"),l=n("2o2P"),d=n("pL0w"),u=n("5WHJ"),j=n("mOXL"),b=n("Gg5A"),h=n("55Tq"),p=n("klsi"),f=n("Ap6K"),m=n("CDX0"),g=n("q1tI"),x=n.n(g),O=n("TSYQ"),w=n.n(O),v=n("F9no"),y=n("G8G5");function C(){return(C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e}).apply(this,arguments)}function k(e){var t=e.x,n=e.x0,c=e.x1,r=e.y,i=e.y1,a=e.y0,o=e.yScale,s=e.data,l=void 0===s?[]:s,d=e.defined,u=void 0===d?function(){return!0}:d,j=e.className,b=e.curve,h=e.innerRef,p=e.children,f=function(e,t){if(null==e)return{};var n,c,r={},i=Object.keys(e);for(c=0;c<i.length;c++)n=i[c],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["x","x0","x1","y","y1","y0","yScale","data","defined","className","curve","innerRef","children"]),m=Object(y.b)({x:t,x0:n,x1:c,defined:u,curve:b});return null==a?m.y0(o.range()[0]):Object(v.a)(m.y0,a),r&&!i&&Object(v.a)(m.y1,r),i&&!r&&Object(v.a)(m.y1,i),p?x.a.createElement(x.a.Fragment,null,p({path:m})):x.a.createElement("path",C({ref:h,className:w()("visx-area-closed",j),d:m(l)||""},f))}var I=n("Vlbl"),E=n("oaOg"),M=n("tlpA"),L=n("4PvF"),S=n("Ap44"),P=n("Ki0a"),T=n("TCOF"),_=n("bjao"),B=n.n(_),H=n("vOnD");function A(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?A(Object(n),!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var z=H.d.div.withConfig({componentId:"sc-1tvddyx-0"})(["height:100%;width:100%;display:flex;justify-content:center;align-items:center;& > svg{width:100%;}"]),N=Object(H.d)(S.m).withConfig({componentId:"sc-1tvddyx-1"})(["margin-left:0.75rem;"]),R=H.d.div.withConfig({componentId:"sc-1tvddyx-2"})(["position:absolute;bottom:-12px;left:calc(50% - 6px);width:0;height:0;border:6px solid transparent;border-top-color:",";"],(function(e){return e.theme.palette.grey800})),X=Object(T.a)("%b %d, %y"),W=function(e,t){return Math.min.apply(Math,Object(o.a)(e.map(t)))},G=function(e,t){return Math.max.apply(Math,Object(o.a)(e.map(t)))},K=function(e){return e<=300?2:5},F=new B.a,Y=function(e){return new Date(1e3*(e.x||e.timestamp))},U=function(e){return e.y||e.price},V=Object(P.a)(Y).left,q=function(e){var t=e.data,n=e.hideTooltip,c=e.margin,r=e.parentHeight,i=e.parentWidth,h=e.priceSymbol,x=e.prices,O=e.showTooltip,w=e.theme,v=e.tooltipData,y=e.tooltipLeft,C=e.tooltipTop,L=Object(g.useRef)(null),P=i-c.left-c.right,T=i-c.right,_=r-c.bottom,B=T-c.left,H=_-c.top,A=Object(g.useMemo)((function(){return Object(p.a)({domain:(e=t,n=Y,[W(e,n),G(e,n)]),range:[c.left,T]});var e,n}),[t,c.left,T]),q=Object(g.useMemo)((function(){return Object(f.a)({domain:[Math.min.apply(Math,Object(o.a)(t.map(U))),Math.max.apply(Math,Object(o.a)(t.map(U)))],nice:!0,range:[_,c.top]})}),[t,c.top,_]),J=Object(g.useCallback)((function(e){return A(Y(e))}),[A]),Z=Object(g.useCallback)((function(e){return q(U(e))}),[q]),Q=Object(g.useCallback)((function(e){var n=(Object(u.a)(e)||{x:0}).x,c=A.invert(n),r=V(t,c,1),i=t[r-1],a=t[r],o=i;a&&Y(a)&&(o=c-Y(i)>Y(a)-c?a:i),O({tooltipData:o,tooltipLeft:n,tooltipTop:q(U(o))})}),[t,O,q,A]),$=x?w.palette.blue600:w.chartGreen,ee=x?.03:0,te=x?w.palette.blue700:w.palette.green700,ne=x?w.chartPointerOuterCirclePrices:w.chartPointerOuterCircle;return i<10?null:Object(a.jsxs)(z,{children:[Object(a.jsxs)("svg",{height:r,ref:L,width:i,children:[Object(a.jsx)("defs",{children:Object(a.jsxs)("linearGradient",{id:"gradient",x1:"0%",x2:"0%",y1:"0%",y2:"100%",children:[Object(a.jsx)("stop",{offset:"0%",stopColor:$,stopOpacity:.2}),Object(a.jsx)("stop",{offset:"100%",stopColor:$,stopOpacity:ee})]})}),Object(a.jsx)(j.a,{height:H,left:c.left,lineStyle:{pointerEvents:"none"},numTicks:5,scale:q,stroke:w.palette.grey100,strokeWidth:.5,width:B}),Object(a.jsxs)(b.a,{children:[Object(a.jsx)(m.a,{curve:d.a,data:t,stroke:$,strokeWidth:2,x:J,y:Z}),Object(a.jsx)(k,{curve:d.a,data:t,fill:"url(#gradient)",stroke:"url(#gradient)",strokeWidth:1,x:function(e){return A(Y(e))},y:function(e){return q(U(e))},yScale:q})]}),Object(a.jsxs)(b.a,{children:[Object(a.jsx)(s.a,{bottom:c.bottom,left:8,numTicks:5,scale:q,children:function(e){return Object(a.jsx)("g",{children:e.ticks.map((function(t,n){var c=t.to.x,r=t.to.y+e.tickLength/2;return 0!==t.value?Object(a.jsx)(b.a,{children:Object(a.jsxs)("text",{color:w.palette.grey600,fill:w.palette.grey400,fontFamily:"Inter",fontSize:12,fontWeight:700,transform:"translate(".concat(c,", ").concat(r,")"),children:[h,F.abbreviate(t.value.toFixed(3),3)]})},"vy-tick-".concat(t.value,"-").concat(n)):null}))})}}),Object(a.jsx)(l.a,{numTicks:K(B),scale:A,top:_+14,children:function(e){return Object(a.jsx)("g",{children:e.ticks.map((function(t,n){var c=t.to.x,r=t.to.y+12+e.tickLength;return Object(a.jsxs)(b.a,{children:[Object(a.jsx)(I.a,{from:t.from,stroke:w.palette.grey400,to:t.to}),Object(a.jsx)("text",{color:w.palette.grey600,fill:w.palette.grey400,fontFamily:"Inter",fontSize:12,fontWeight:700,textAnchor:"middle",transform:"translate(".concat(c,", ").concat(r,")"),children:t.formattedValue})]},"vx-tick-".concat(t.value,"-").concat(n))}))})}})]}),Object(a.jsxs)(b.a,{children:[Object(a.jsx)(E.a,{fill:"transparent",height:r,onMouseLeave:n,onMouseMove:Q,onTouchEnd:n,onTouchMove:Q,width:P,x:c.left,y:c.right}),v&&Object(a.jsx)("g",{children:Object(a.jsx)("circle",{cx:y,cy:C,fill:te,r:6,stroke:ne,strokeWidth:12,style:{pointerEvents:"none"}})})]})]}),v&&Object(a.jsx)("div",{styles:{position:"relative"},children:Object(a.jsxs)(M.a,{left:y-10,style:D(D({},M.b),{},{backgroundColor:w.palette.grey800,borderRadius:"0.5rem",padding:"0.5rem 1rem",transform:"translateX(-50%) translateY(-50%)",width:"fit-content"}),top:C-40,children:[Object(a.jsx)(S.m,{size:"0.75rem",weight:500,children:"".concat(X(Y(v)))}),Object(a.jsxs)(N,{size:"0.75rem",weight:700,children:[h,F.abbreviate(U(v).toFixed(3),3)]}),Object(a.jsx)(R,{})]})})]})};q.defaultProps={margin:{bottom:80,left:56,right:10,top:10}};var J=r()(L.a,H.f,h.a)(q),Z=n("QBe4"),Q=n.n(Z),$=n("D1G5"),ee=n.n($),te=n("2QjZ"),ne=n.n(te),ce=n("Z+xY"),re=n.n(ce),ie=n("jT3O"),ae=n("CdHj");function oe(){var e=Object(ie.a)(["\n    display: none;\n  "]);return oe=function(){return e},e}var se=H.d.div.withConfig({componentId:"sc-1rrjsqf-0"})(["height:100%;width:100%;max-width:12rem;display:flex;justify-content:center;align-items:center;& > svg{width:100%;}",""],ae.a.tablet(oe())),le=function(e,t){return Math.min.apply(Math,Object(o.a)(e.map(t)))},de=function(e,t){return Math.max.apply(Math,Object(o.a)(e.map(t)))},ue=function(e){return new Date(1e3*e.time)},je=function(e){return e.value},be=function(e){var t,n,c,r=e.data,i=e.margin,s=e.parentHeight,l=e.parentWidth,u=e.theme,j=l-i.right,h=s-i.bottom,x=Object(p.a)({domain:(t=r,n=ue,[le(t,n),de(t,n)]),range:[i.left,j]}),O=Object(f.a)({domain:[Math.min.apply(Math,Object(o.a)(r.map(je))),Math.max.apply(Math,Object(o.a)(r.map(je)))],nice:!0,range:[h,i.top]}),w=Object(g.useCallback)((function(e){return x(ue(e))}),[x]),v=Object(g.useCallback)((function(e){return O(je(e))}),[O]),y=re()("value",r[0]),C=re()("value",ne()(r));return c=ee()(C,y)?u.chartGreen:Q()(C,y)?u.chartRed:u.palette.grey400,l<10?null:Object(a.jsx)(se,{children:Object(a.jsx)("svg",{height:s,width:l,children:Object(a.jsx)(b.a,{children:Object(a.jsx)(m.a,{curve:d.a,data:r,stroke:c,strokeWidth:2,x:w,y:v})})})})};be.defaultProps={margin:{bottom:0,left:0,right:48,top:0}};var he=r()(H.f,h.a)(be)},"6nwk":function(e,t,n){var c=n("Wnyi"),r=n("1s4d"),i=n("PhQ1"),a=c((function(e,t){return r(i(e.length,t),e)}));e.exports=a},"7m+Z":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/prices/coinList",function(){return n("ALee")}])},"8Zcm":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var c=["ALGO","BCH","BTC","ETH","PAX","USDT","XLM"]},ALee:function(e,t,n){"use strict";n.r(t);var c=n("nKUr"),r=n("KSab"),i=n("SaX8"),a=n.n(i),o=n("+v9g"),s=n.n(o),l=n("4Q1U"),d=n.n(l),u=n("D1G5"),j=n.n(u),b=n("6nwk"),h=n.n(b),p=n("DYUx"),f=n.n(p),m=n("1s4d"),g=n.n(m),x=n("L61M"),O=n.n(x),w=n("jT3O"),v=n("LL/g"),y=n("unvp"),C=n("uYY6"),k=n("n4jh"),I=n("/vXV"),E=n("sHGE"),M=n("JXJk"),L=n("LAiw"),S=n("LX4k"),P=n("gaBn"),T=n("Fx5f"),_=n("Ap44"),B=n("2+YX"),H=n("Aiso"),A=n.n(H),D=n("q1tI"),z=n("kriW"),N=n("2OET"),R=n("/MKj"),X=n("ANjH"),W=n("Xo62"),G=n("jKoW"),K=n("CdHj"),F=n("m5Rq"),Y=n("vOnD"),U=n("8Zcm"),V=Object(Y.d)(E.c).withConfig({componentId:"sc-1bkcpkw-0"})(["flex-direction:column;margin:3rem 0 2.5rem;"]),q=Object(Y.d)(M.d).withConfig({componentId:"sc-1bkcpkw-1"})(["&:hover{text-decoration:none;}"]),J=function(){var e=Object(D.useCallback)((function(){Object(G.b)(O()(["PRICES","COIN_LIST","BACK_TO_PRICES"],G.a))}),[]);return Object(c.jsxs)(V,{alignItems:"center",justifyContent:"space-between",children:[Object(c.jsx)(_.l,{size:"1.5rem",style:{marginBottom:"2rem"},weight:600,children:Object(c.jsx)(z.a,{defaultMessage:"This page is not available.",id:"features.prices.coinlist.error.notavailable"})}),Object(c.jsx)(q,{href:"/prices",onClick:e,children:Object(c.jsx)(k.d,{size:"1rem",weight:600,children:Object(c.jsx)(z.a,{defaultMessage:"Back to Prices",id:"features.prices.coindetails.error.backtoprices"})})})]})},Z=n("Z+xY"),Q=n.n(Z),$=n("walr"),ee=O()(["PRICES","HOME"],G.a),te=Y.d.div.withConfig({componentId:"sc-1mb4jcn-0"})(["display:flex;margin-top:1.5rem;"]),ne=Object(Y.d)(k.d).withConfig({componentId:"sc-1mb4jcn-1"})(["padding:0.75rem 0.5rem;height:fit-content;border-radius:0.25rem;& > svg{fill:",";}&:hover{& > svg{cursor:pointer;fill:",";}}&:active,&:focus{& > svg{fill:",";}}&:disabled{color:",";& > svg{cursor:not-allowed;fill:",";}}"],(function(e){return e.theme.palette.blue600}),(function(e){return e.theme.palette.blue600}),(function(e){return e.theme.palette.blue800}),(function(e){return e.theme.palette.grey400}),(function(e){return e.theme.palette.grey400})),ce=Object(Y.d)(ne).withConfig({componentId:"sc-1mb4jcn-2"})(["border-top-right-radius:0;border-bottom-right-radius:0;& > svg{margin-right:0.25rem;}"]),re=Object(Y.d)(ne).withConfig({componentId:"sc-1mb4jcn-3"})(["border-top-left-radius:0;border-bottom-left-radius:0;margin-left:-1px;& > svg{margin-left:0.25rem;}"]),ie=Object(N.c)((function(e){var t=e.intl,n=e.isNextDisabled,r=e.isPrevDisabled,i=e.page,a=Object(D.useCallback)((function(){n||(Object(G.b)(Q()("NEXT",ee)),window.location=Object(F.b)("/prices?page=".concat(i+1),t.locale))}),[n]),o=Object(D.useCallback)((function(){r||(Object(G.b)(Q()("PREV",ee)),window.location=Object(F.b)("/prices?page=".concat(i-1),t.locale))}),[r]);return Object(c.jsxs)(te,{children:[Object(c.jsxs)(ce,{"data-e2e":"prevButton",disabled:r,onClick:o,children:[Object(c.jsx)($.a,{size:"14px"}),Object(c.jsx)(z.a,{defaultMessage:"Prev",id:"features.prices.coinlist.prev"})]}),Object(c.jsxs)(re,{"data-e2e":"nextButton",disabled:n,onClick:a,children:[Object(c.jsx)(z.a,{defaultMessage:"Next",id:"features.prices.coinlist.next"}),Object(c.jsx)(y.a,{size:"14px"})]})]})}));function ae(){var e=Object(w.a)(["\n    margin-bottom: 0;\n    height: 45px;\n  "]);return ae=function(){return e},e}function oe(){var e=Object(w.a)(["\n    display: flex;\n    margin-bottom: 0;\n  "]);return oe=function(){return e},e}function se(){var e=Object(w.a)(["\n    display: none;\n  "]);return se=function(){return e},e}function le(){var e=Object(w.a)(["\n    display: none;\n  "]);return le=function(){return e},e}function de(){var e=Object(w.a)(["\n    flex-direction: row;\n    justify-content: flex-start;\n    margin-bottom: 0;\n    height: fit-content;\n\n    &: first-child{\n      margin-bottom: 0.25rem;\n    }\n  "]);return de=function(){return e},e}function ue(){var e=Object(w.a)(["\n    display: none;\n  "]);return ue=function(){return e},e}function je(){var e=Object(w.a)(["\n    margin-bottom: 1rem;\n  "]);return je=function(){return e},e}function be(){var e=Object(w.a)(["\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: flex-start;\n    margin-bottom: 1rem;\n  "]);return be=function(){return e},e}function he(){var e=Object(w.a)(["\n      margin-bottom: ",";\n  "]);return he=function(){return e},e}var pe=Object(Y.c)(["display:flex;align-items:center;width:100%;"]),fe=Y.d.div.withConfig({componentId:"sc-10ewpnx-0"})(["",";margin-bottom:",";",";"],pe,(function(e){return e.marginBot||"2rem"}),K.a.tablet(he(),(function(e){return e.mobileMarginBot||"1.5rem"}))),me=Y.d.div.withConfig({componentId:"sc-10ewpnx-1"})(["display:flex;flex-direction:column;justify-content:space-between;height:45px;"]),ge=Y.d.div.withConfig({componentId:"sc-10ewpnx-2"})(["",";justify-content:space-between;margin-bottom:2rem;",";"],pe,K.a.tablet(be())),xe=Object(Y.d)(_.a).withConfig({componentId:"sc-10ewpnx-3"})(["color:",";",";"],(function(e){return e.theme.palette.black}),K.a.tablet(je())),Oe=Object(Y.d)(M.c).withConfig({componentId:"sc-10ewpnx-4"})(["&:hover{text-decoration-color:",";}"],(function(e){return e.theme.palette.blue600})),we=Object(Y.d)(M.b).withConfig({componentId:"sc-10ewpnx-5"})(["width:100%;"]),ve=Y.d.div.withConfig({componentId:"sc-10ewpnx-6"})(["",";height:2rem;padding:0 1rem;margin-bottom:0;border-bottom:1px solid ",";",""],pe,(function(e){return e.theme.palette.grey000}),K.a.tablet(ue())),ye=Object(Y.d)(_.a).withConfig({componentId:"sc-10ewpnx-7"})(["color:",";margin-left:0.25rem;"],(function(e){return e.theme.palette.grey400})),Ce=Object(Y.d)(_.a).withConfig({componentId:"sc-10ewpnx-8"})(["color:",";font-weight:500;font-size:0.95rem;"],(function(e){return e.theme.palette.grey400})),ke=Y.d.div.withConfig({componentId:"sc-10ewpnx-9"})(["",";height:3rem;flex:2;margin-bottom:0;"],pe),Ie=Y.d.div.withConfig({componentId:"sc-10ewpnx-10"})(["",";flex-direction:column;justify-content:center;align-items:flex-start;height:3rem;margin-bottom:0;",""],pe,K.a.tablet(de())),Ee=Object(Y.d)(ke).withConfig({componentId:"sc-10ewpnx-11"})(["flex:1;",";"],K.a.tablet(le())),Me=Object(Y.d)(ke).withConfig({componentId:"sc-10ewpnx-12"})(["justify-content:space-between;flex:4;"]),Le=Object(Y.d)(ke).withConfig({componentId:"sc-10ewpnx-13"})(["flex:4;"]),Se=Y.d.div.withConfig({componentId:"sc-10ewpnx-14"})(["display:flex;align-items:center;width:100%;padding:0.5rem 1rem;"," &:hover{cursor:pointer;background:",";}",""],(function(e){var t=e.isLastItem,n=e.theme;return!t&&"border-bottom: 1px solid ".concat(n.palette.grey000,";")}),(function(e){return e.theme.palette.blue000}),K.a.tablet(se())),Pe=Object(Y.d)(Se).withConfig({componentId:"sc-10ewpnx-15"})(["display:none;padding:1rem 0;justify-content:space-between;",""],K.a.tablet(oe())),Te=Y.d.div.withConfig({componentId:"sc-10ewpnx-16"})(["",";flex:4;margin-bottom:0;",""],pe,K.a.tablet(ae())),_e=Object(Y.d)(v.a).withConfig({componentId:"sc-10ewpnx-17"})(["height:2rem;width:2rem;border:1px solid ",";border-radius:50%;margin-right:1.25rem;"],(function(e){return e.theme.palette.grey000})),Be=Y.d.div.withConfig({componentId:"sc-10ewpnx-18"})(["border:1px solid ",";border-radius:50%;margin-right:1.25rem;height:32px;width:32px;overflow:hidden;"],(function(e){return e.theme.palette.grey000})),He=Object(Y.d)(y.a).withConfig({componentId:"sc-10ewpnx-19"})(["fill:",";margin-left:0.5rem;&:hover{fill:",";cursor:pointer;}"],(function(e){return e.theme.palette.blue600}),(function(e){return e.theme.palette.blue600})),Ae=Object(Y.d)(C.a).withConfig({componentId:"sc-10ewpnx-20"})(["fill:",";"],(function(e){return e.theme.palette.grey400})),De=Object(Y.d)(me).withConfig({componentId:"sc-10ewpnx-21"})(["justify-content:center;align-items:center;width:100%;height:17.5rem;& > div{margin-bottom:1.5rem;}"]),ze=Y.d.div.withConfig({componentId:"sc-10ewpnx-22"})(["display:flex;width:100%;"]),Ne=Object(Y.d)(k.d).withConfig({componentId:"sc-10ewpnx-23"})(["min-width:3.8rem;width:fit-content;height:2rem;line-height:1;border-radius:0.25rem;background:white;&:hover{background:white;}&:focus{background:white;}"]),Re=Object(Y.d)(Ne).withConfig({componentId:"sc-10ewpnx-24"})(["color:",";margin-left:",";&:hover{border-color:",";}&:active{background:",";color:",";border-color:",";}&:focus{color:",";}"],(function(e){return e.theme.palette.exchange}),(function(e){return e.padLeft?"0.5rem":0}),(function(e){return e.theme.palette.exchange}),(function(e){return e.theme.palette.teal100}),(function(e){return e.theme.palette.teal800}),(function(e){return e.theme.palette.exchange}),(function(e){return e.theme.palette.teal800})),Xe=Object(Y.d)(_.l).withConfig({componentId:"sc-10ewpnx-25"})(["margin-right:1.5rem;"]),We=Y.d.div.withConfig({componentId:"sc-10ewpnx-26"})(["max-width:180px;width:100%;height:100%;"]),Ge=a()(Object(R.b)((function(e){return{coinList:r.b.prices.selectCoinList(e),currency:r.b.preferences.selectCurrency(e),isCoinListLoading:r.b.prices.selectIsCoinListLoading(e),isInMaintenance:r.b.prices.selectIsInMaintenance(e),isInvalidCoinList:r.b.prices.selectIsInvalidCoinList(e),miniChartsData:r.b.prices.selectMiniChartsData(e),tradeSupportedCoins:r.b.prices.selectTradeSupportedCoins(e)}}),(function(e){return{fetchCoinList:Object(X.b)(r.a.prices.fetchCoinList,e),setSelectedCoin:Object(X.b)(r.a.simpleBuy.setSelectedCoin,e),setShowSimpleBuyForm:Object(X.b)(r.a.simpleBuy.setShowForm,e),trackBuyWidgetClicked:function(t){var n=t.currency;e(r.a.analytics.trackEvent({key:B.a.BUY_WIDGET_CLICKED,properties:{currency:n,origin:"CRYPTO_PRICES"},type:B.b.EVENT}))},trackExchangeHyperlinkClicked:function(t){var n=t.currency;e(r.a.analytics.trackEvent({key:B.a.EXCHANGE_HYPERLINK_CLICKED,properties:{currency:n,platform_path:"PRICES"},type:B.b.EVENT}))}}})),N.c)((function(e){var t=e.coinList,n=e.currency,r=e.fetchCoinList,i=e.intl,a=e.isCoinListLoading,o=e.isInMaintenance,l=e.isInvalidCoinList,u=e.miniChartsData,b=e.page,p=e.pageSize,m=e.setSelectedCoin,x=e.setShowSimpleBuyForm,w=e.trackBuyWidgetClicked,v=e.trackExchangeHyperlinkClicked,y=e.tradeSupportedCoins,C=(b-1)*p;Object(D.useEffect)((function(){r(n,b,p)}),[n]);var k=Object(D.useCallback)((function(e,t,n){if(e.preventDefault(),Object(G.b)(O()(["PRICES","HOME",t],G.a)),g()("BUY_CLICK",t))return m(n),w({currency:n}),void x(!0);v({currency:n});var c="".concat(W.a.PATHS_EXCHANGE,"/trade");window.location=Object(F.b)(c,i.locale)}),[]);return Object(c.jsx)(E.e,{children:Object(c.jsxs)(E.b,{align:"vertical",children:[Object(c.jsx)(fe,{marginBot:"0",mobileMarginBot:"0",children:Object(c.jsx)(P.a,{prices:!0})}),l?Object(c.jsx)(J,{}):o?Object(c.jsx)(S.a,{}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)(ge,{children:[Object(c.jsx)(xe,{size:"1.5rem",weight:600,children:Object(c.jsx)(z.a,{defaultMessage:"Top Cryptocurrency Prices",id:"features.prices.coinlist.title"})}),Object(c.jsxs)(Oe,{href:"".concat(W.a.PATHS_BASE,"/charts"),onClick:function(){return Object(G.b)(O()(["PRICES","HOME","CHARTS"],G.a))},children:[Object(c.jsx)(_.b,{size:"0.9rem",weight:500,children:Object(c.jsx)(z.a,{defaultMessage:"View Trending Charts",id:"features.prices.coinlist.view_trending_charts"})}),Object(c.jsx)(He,{size:"12px"})]})]}),a?Object(c.jsxs)(De,{children:[Object(c.jsx)(L.c,{height:"4rem",width:"4rem"}),Object(c.jsx)(_.d,{children:Object(c.jsx)(z.a,{defaultMessage:"Loading list...",id:"features.prices.coinlist.loadinglist"})})]}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)(ve,{children:[Object(c.jsx)(Ee,{children:Object(c.jsx)(Ce,{children:"#"})}),Object(c.jsx)(Le,{children:Object(c.jsx)(Ce,{children:Object(c.jsx)(z.a,{defaultMessage:"Name",id:"features.prices.coinlist.table_name"})})}),Object(c.jsx)(ke,{children:Object(c.jsx)(Ce,{children:Object(c.jsx)(z.a,{defaultMessage:"Price",id:"features.prices.coinlist.table_price"})})}),Object(c.jsx)(ke,{children:Object(c.jsx)(Ce,{children:Object(c.jsx)(z.a,{defaultMessage:"Market Cap",id:"features.prices.coinlist.table_marketcap"})})}),Object(c.jsx)(Me,{children:Object(c.jsx)(Ce,{children:Object(c.jsx)(z.a,{defaultMessage:"Change (24hr)",id:"features.prices.coinlist.table_change24hr"})})}),Object(c.jsx)(ke,{children:Object(c.jsx)(Ce,{children:Object(c.jsx)(z.a,{defaultMessage:"Actions",id:"features.prices.coinlist.table_actions"})})})]}),t&&t.map((function(e,n){var r=e.changePercent24Hr,i=e.fullName,a=e.imageUrl,o=e.marketCap,l=e.price,b=e.symbol;return Object(c.jsx)(we,{e2e:"".concat(b,"Row"),href:"/prices/".concat(b),onClick:function(){return Object(G.b)(["prices","coinlist","".concat(f()(b),"_row_clicked")])},children:Object(c.jsxs)(ze,{children:[Object(c.jsxs)(Se,{isLastItem:n===t.length-1,children:[Object(c.jsx)(Ee,{children:Object(c.jsx)(_.a,{children:C+n+1})}),Object(c.jsxs)(Te,{children:["BCH"===b?Object(c.jsx)(_e,{}):Object(c.jsx)(Be,{children:Object(c.jsx)(A.a,{alt:"".concat(b," icon"),height:32,src:a,width:32})}),Object(c.jsx)(_.a,{size:"1rem",weight:600,children:i}),Object(c.jsx)(ye,{size:"16px",weight:600,children:b})]}),Object(c.jsx)(ke,{children:Object(c.jsx)(_.a,{size:"16px",weight:500,children:l})}),Object(c.jsx)(ke,{children:Object(c.jsx)(_.a,{size:"16px",weight:500,children:o})}),Object(c.jsxs)(Me,{children:[h()("-",r)?Object(c.jsx)(Xe,{color:"red600",size:"16px",children:"".concat(r,"%")}):j()(r,0)?Object(c.jsx)(Xe,{color:"green600",size:"16px",children:"+".concat(r,"%")}):Object(c.jsx)(Xe,{color:"grey600",size:"16px",children:"+".concat(r,"%")}),!d()(u[b])&&Object(c.jsx)(We,{children:Object(c.jsx)(I.MiniChart,{data:u[b],symbol:b})})]}),Object(c.jsxs)(ke,{children:[s()(b,U.a)&&Object(c.jsx)(Ne,{onClick:function(e){return k(e,"BUY_CLICK",b)},children:Object(c.jsx)(z.a,{defaultMessage:"Buy",id:"features.prices.coinlist.buy"})}),s()(b,y)&&Object(c.jsx)(Re,{onClick:function(e){return k(e,"TRADE_CLICK")},padLeft:s()(b,U.a),children:Object(c.jsx)(z.a,{defaultMessage:"Trade",id:"features.prices.coinlist.trade"})})]})]}),Object(c.jsxs)(Pe,{children:[Object(c.jsxs)(Te,{children:[Object(c.jsx)(Be,{children:Object(c.jsx)(A.a,{alt:"".concat(b," icon"),height:32,src:a,width:32})}),Object(c.jsxs)(me,{children:[Object(c.jsxs)(Ie,{children:[Object(c.jsx)(_.a,{size:"16px",style:{marginRight:"0.25rem"},weight:600,children:i}),Object(c.jsx)(_.d,{size:"16px",weight:600,children:b})]}),Object(c.jsxs)(Ie,{children:[Object(c.jsx)(_.a,{style:{marginRight:"0.25rem"},weight:500,children:l}),Object(c.jsxs)(_.d,{weight:500,children:["(",h()("-",r)?Object(c.jsx)(_.l,{color:"red600",children:"".concat(r,"%")}):j()(r,0)?Object(c.jsx)(_.l,{color:"green600",children:"+".concat(r,"%")}):r,")"]})]})]})]}),Object(c.jsx)(Ae,{size:"16px"})]})]})},i)})),Object(c.jsx)(ie,{isNextDisabled:t.length<p,isPrevDisabled:1===b,page:b})]})]}),W.a.SETTINGS_SIMPLE_BUY_WIDGET&&Object(c.jsx)(T.default,{})]})})})),Ke=n("hor7"),Fe=function(e){var t=e.page;return Object(c.jsx)(Ke.a,{titleId:"features.prices.coinlist.title",children:Object(c.jsx)(Ge,{page:t,pageSize:20})})};Fe.getInitialProps=function(e){var t=e.query.page,n=e.store;return n.dispatch(r.a.prices.fetchTradeSupportedCoins()),n.dispatch(r.a.simpleBuy.setHasSimpleBuy(!0)),{page:Number(t)}};t.default=Fe},D1G5:function(e,t,n){var c=n("Wnyi")((function(e,t){return e>t}));e.exports=c},LX4k:function(e,t,n){"use strict";var c=n("nKUr"),r=n("L61M"),i=n.n(r),a=n("n4jh"),o=n("sHGE"),s=n("JXJk"),l=n("Ap44"),d=n("q1tI"),u=n("kriW"),j=n("Xo62"),b=n("jKoW"),h=n("vOnD"),p=Object(h.d)(o.c).withConfig({componentId:"sc-1glfof4-0"})(["flex-direction:column;margin:3rem 0 2.5rem;"]),f=Object(h.d)(s.d).withConfig({componentId:"sc-1glfof4-1"})(["&:hover{text-decoration:none;}"]);t.a=function(){var e=Object(d.useCallback)((function(){Object(b.b)(i()(["PRICES","COIN_LIST","BACK_TO_HOME_PAGE"],b.a))}),[]);return Object(c.jsxs)(p,{alignItems:"center",justifyContent:"space-between",children:[Object(c.jsx)(l.l,{size:"1.5rem",style:{marginBottom:"2rem"},weight:600,children:Object(c.jsx)(u.a,{defaultMessage:"Application is down for maintenance.",id:"features.prices.maintenance"})}),Object(c.jsx)(f,{href:j.a.PATHS_BASE,onClick:e,children:Object(c.jsx)(a.d,{size:"1rem",weight:600,children:Object(c.jsx)(u.a,{defaultMessage:"Back to Home Page",id:"features.prices.back.to.home.page"})})})]})}},QBe4:function(e,t,n){var c=n("Wnyi")((function(e,t){return e<t}));e.exports=c},rg98:function(e,t,n){"use strict";function c(e,t,n,c,r,i,a){try{var o=e[i](a),s=o.value}catch(l){return void n(l)}o.done?t(s):Promise.resolve(s).then(c,r)}function r(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var a=e.apply(t,n);function o(e){c(a,r,i,o,s,"next",e)}function s(e){c(a,r,i,o,s,"throw",e)}o(void 0)}))}}n.d(t,"a",(function(){return r}))},unvp:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var c=n("wx14"),r=n("q1tI"),i=n.n(r),a=n("cfty"),o=Object(a.a)((function(e){return i.a.createElement("svg",Object(c.a)({viewBox:"0 0 448 512"},e),i.a.createElement("path",{d:"M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"}))}),"FasArrowRight",!1)},walr:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var c=n("wx14"),r=n("q1tI"),i=n.n(r),a=n("cfty"),o=Object(a.a)((function(e){return i.a.createElement("svg",Object(c.a)({viewBox:"0 0 448 512"},e),i.a.createElement("path",{d:"M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"}))}),"FasArrowLeft",!1)}},[["7m+Z",0,1,3,2,4,5,6,7,17,19,23,25]]]);