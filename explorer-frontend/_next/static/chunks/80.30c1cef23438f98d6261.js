(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[80],{hZ63:function(e,t,n){"use strict";n.r(t);var c=n("Z+xY"),i=n.n(c),a=n("nKUr"),s=n("1s4d"),o=n.n(s),r=n("L61M"),d=n.n(r),l=n("fEym"),m=n("unvp"),j=n("7B5S"),h=n("JXJk"),u=n("LAiw"),b=n("Ap44"),p=n("KSab"),g=n("Ys8F"),x=n("q1tI"),f=n("/MKj"),O=n("ANjH"),v=n("Xo62"),y=n("dHca"),w=n("jKoW"),E=n("vOnD"),T=n("VoIo"),A=d()(["EXPLORER","DATA_HEADER"],w.a),C=E.d.div.withConfig({componentId:"sc-1mty1jv-0"})(["display:flex;justify-content:space-between;align-items:center;border:1px solid ",";border-radius:0.5rem;width:100%;padding:1.5rem;min-width:45rem;@media (max-width:","){min-width:54.25rem;padding:0 1rem;}"],(function(e){return e.theme.palette.grey100}),l.a.screenSize("sm")),k=E.d.div.withConfig({componentId:"sc-1mty1jv-1"})(["display:flex;flex-direction:column;"]),S=Object(E.d)(j.a).withConfig({componentId:"sc-1mty1jv-2"})(["font-size:16px;font-weight:600;color:",";"],(function(e){return e.theme.palette.black})),I=Object(E.d)(b.a).withConfig({componentId:"sc-1mty1jv-3"})(["color:",";"],(function(e){return e.theme.palette.black})),L=E.d.div.withConfig({componentId:"sc-1mty1jv-4"})(["height:3rem;width:5.125rem;"]),_=Object(E.d)(h.a).withConfig({componentId:"sc-1mty1jv-5"})(["margin-top:0.5rem;font-size:12px;"]),H=Object(E.d)(m.a).withConfig({componentId:"sc-1mty1jv-6"})(["fill:",";margin-left:0.25rem;&:hover{fill:",";cursor:pointer;}"],(function(e){return e.theme.palette.blue600}),(function(e){return e.theme.palette.blue600})),R=E.d.div.withConfig({componentId:"sc-1mty1jv-7"})(["height:3.8125rem;width:1px;margin:0.25rem 0;display:none;background-color:",";@media (max-width:","){display:block;}"],(function(e){return e.theme.palette.grey000}),l.a.screenSize("sm")),z=Object(g.a)(_),V=function(e){var t=e.category,n=e.e2e,c=e.event,i=e.isEmpty,s=e.isLoading,r=e.last,d=e.link,l=e.value;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)(k,{children:[o()(t,"price")&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(S,{children:l}),Object(a.jsxs)(z,{e2e:n,eventName:c,href:"".concat(v.a.PATHS_BASE,"/").concat(d),children:[Object(T.d)(t),Object(a.jsx)(H,{size:"8px"})]})]}),!o()(t,"price")&&(s||i?Object(a.jsx)(L,{children:Object(a.jsx)(u.a,{})}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(I,{size:"16px",weight:600,children:l}),Object(a.jsxs)(z,{e2e:n,eventName:c,href:d,children:[Object(T.d)(t),Object(a.jsx)(H,{size:"8px"})]})]}))]}),!r&&Object(a.jsx)(R,{})]})};t.default=Object(f.b)((function(e,t){return{rate:p.b.rates.selectRate(t.coin,e.preferences.currency)(e),stats:p.b.stats.selectStats(e)}}),(function(e){return{fetchAllStats:Object(O.b)(p.a.stats.fetchAllStats,e)}}))((function(e){var t=e.fetchAllStats,n=e.rate.last,c=e.stats,s=c.estimatedHashRate,r=c.estimatedTxVolume,d=c.isStatsLoading,l=c.txPerDay,m=c.txVolume;return Object(x.useEffect)((function(){t()}),[]),Object(a.jsxs)(C,{children:[Object(a.jsx)(V,{category:"price",e2e:"goToPriceChart",event:i()("PRICE",A),link:"prices",value:n}),Object(a.jsx)(V,{category:"hash-rate",e2e:"goToHashRateChart",event:i()("HASH_RATE",A),isEmpty:o()(s,0),isLoading:d,link:"charts/hash-rate",value:Object(y.d)(s)}),Object(a.jsx)(V,{category:"tx",e2e:"goToNumTxChart",event:i()("TX",A),isEmpty:o()(l,0),isLoading:d,link:"charts/n-transactions",value:Object(y.j)(l)}),Object(a.jsx)(V,{category:"tx-volume",e2e:"goToTxVolume",event:i()("TX_VOLUME",A),isEmpty:o()(m,0),isLoading:d,link:"charts/output-volume",value:"".concat(Object(y.i)(m)," BTC")}),Object(a.jsx)(V,{category:"estimated-tx-volume",e2e:"goToEstimatedTxVolume",event:i()("ESTIMATED_TX_VOLUME",A),isEmpty:o()(r,0),isLoading:d,last:!0,link:"charts/estimated-transaction-volume",value:"".concat(Object(y.i)(r)," BTC")})]})}))}}]);