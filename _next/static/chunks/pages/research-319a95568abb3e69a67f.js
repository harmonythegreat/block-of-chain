_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[110],{"+Css":function(e,t,n){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return r}))},"/TSa":function(e,t,n){"use strict";var r=n("mOvS"),i=n.n(r),a=n("9ONQ"),o=i()().publicRuntimeConfig;t.a=function(){var e=(new a.a).get(o.languageCookieName),t=window.location.host.split(".")[0],n=window.location.pathname,r=n.match(/^\/([a-z]{2}(?:-[a-z]{2})?)(\/|$)/);"pit"!==t&&"pit-beta"!==t&&e&&null===r&&(window.location.pathname="/".concat(e).concat(n))}},"7++0":function(e,t,n){"use strict";n.d(t,"c",(function(){return d})),n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return p}));var r,i,a=n("mrSG"),o=n("q1tI"),s=n("dDsW");!function(e){e.formatDate="FormattedDate",e.formatTime="FormattedTime",e.formatNumber="FormattedNumber",e.formatList="FormattedList",e.formatDisplayName="FormattedDisplayName"}(r||(r={})),function(e){e.formatDate="FormattedDateParts",e.formatTime="FormattedTimeParts",e.formatNumber="FormattedNumberParts",e.formatList="FormattedListParts"}(i||(i={}));function c(e){var t=function(t){var n=Object(s.a)(),r=t.value,i=t.children,o=Object(a.__rest)(t,["value","children"]),c="string"===typeof r?new Date(r||0):r;return i("formatDate"===e?n.formatDateToParts(c,o):n.formatTimeToParts(c,o))};return t.displayName=i[e],t}function l(e){var t=function(t){var n=Object(s.a)(),r=t.value,i=t.children,c=Object(a.__rest)(t,["value","children"]),l=n[e](r,c);if("function"===typeof i)return i(l);var d=n.textComponent||o.Fragment;return o.createElement(d,null,l)};return t.displayName=r[e],t}function d(e){return e}var u=l("formatDate"),p=(l("formatTime"),l("formatNumber"));l("formatList"),l("formatDisplayName"),c("formatDate"),c("formatTime")},"7LId":function(e,t,n){"use strict";function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}n.d(t,"a",(function(){return i}))},"7fZ1":function(e,t,n){"use strict";n.d(t,"b",(function(){return T})),n.d(t,"e",(function(){return D})),n.d(t,"g",(function(){return A})),n.d(t,"c",(function(){return q})),n.d(t,"f",(function(){return F})),n.d(t,"a",(function(){return R})),n.d(t,"d",(function(){return L}));var r=n("cpVT"),i=n("nKUr"),a=n("jT3O"),o=(n("q1tI"),n("kriW")),s=n("mOvS"),c=n.n(s),l=n("vOnD"),d=n("CIUX"),u=n("AHWd"),p=n("nZ70"),f=n("Cyps"),h=n("CdHj"),b=n("m5Rq");function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function y(){var e=Object(a.a)(["\n    margin: 0 0 20px 0;\n  "]);return y=function(){return e},e}function j(){var e=Object(a.a)(["\n    flex-direction: column;\n    align-items: flex-start;\n  "]);return j=function(){return e},e}function v(){var e=Object(a.a)(["\n    padding: 40px 0;\n  "]);return v=function(){return e},e}var w=c()().publicRuntimeConfig,O=l.d.section.withConfig({displayName:"Banner",componentId:"n86mvl-0"})(["background-color:",";background-image:url(/static/img/banner/banner-bg.svg);background-repeat:no-repeat;background-size:90rem;background-position:-0.0625rem center;color:",";padding:80px 0;",""],u.grey,u.white,h.a.tablet(v())),x=Object(l.d)(O).withConfig({displayName:"Banner__PurpleBanner",componentId:"n86mvl-1"})(["background-color:",";background-image:url(/static/img/banner/banner-bg-purple.svg);"],u.purple800),k=Object(l.d)(O).withConfig({displayName:"Banner__BlueBanner",componentId:"n86mvl-2"})(["background-color:",";background-image:url(/static/img/banner/banner-bg-blue.svg);"],u.blue),_=Object(l.d)(p.f).withConfig({displayName:"Banner__BannerWrap",componentId:"n86mvl-3"})(["display:flex;align-items:center;justify-content:center;",""],h.a.tablet(j())),P=Object(l.d)(f.l).withConfig({displayName:"Banner__Title",componentId:"n86mvl-4"})(["margin:0 32px 0 0;",""],h.a.tablet(y())),M=l.d.div.withConfig({displayName:"Banner__PodcastBannerBg",componentId:"n86mvl-5"})(["background-color:black;background-image:url(/static/img/podcast/banner-gradient.png);background-repeat:no-repeat;background-size:cover;color:",";margin-top:5rem;"],u.white),C=l.d.div.withConfig({displayName:"Banner__PodcastWrap",componentId:"n86mvl-6"})(["padding-top:3.5rem;padding-bottom:3.5rem;display:flex;justify-content:space-between;width:100%;align-items:center;flex-wrap:wrap;gap:16px;"]),S=l.d.div.withConfig({displayName:"Banner__PodcastTitle",componentId:"n86mvl-7"})(["font-weight:bold;font-size:32px;line-height:48px;"]),I=l.d.div.withConfig({displayName:"Banner__PodcastSubtitle",componentId:"n86mvl-8"})(["font-weight:500;font-size:20px;line-height:30px;margin-top:0.75rem;"]),N=l.d.div.withConfig({displayName:"Banner__PodcastTextContainer",componentId:"n86mvl-9"})(["display:flex;flex-direction:column;"]),B=Object(b.a)(w.walletSignupURL),T=function(e){return Object(i.jsx)(O,g(g({},e),{},{children:Object(i.jsxs)(_,{children:[Object(i.jsx)(P,{children:Object(i.jsx)(o.a,{id:"banner.title",defaultMessage:[{type:0,value:"From zero to crypto in minutes"}]})}),Object(i.jsx)(d.c,{href:B,variant:"secondaryBlue",children:Object(i.jsx)(o.a,{id:"banner.button",defaultMessage:[{type:0,value:"Get started"}]})})]})}))},D=function(e){return Object(i.jsx)(O,g(g({},e),{},{children:Object(i.jsxs)(_,{children:[Object(i.jsx)(P,{children:Object(i.jsx)(o.a,{id:"banner.press-title",defaultMessage:[{type:0,value:"New to crypto? So is everyone."}]})}),Object(i.jsx)(d.c,{href:B,variant:"secondaryBlue",children:Object(i.jsx)(o.a,{id:"banner.press-button",defaultMessage:[{type:0,value:"Get started"}]})})]})}))},A=function(e){return Object(i.jsx)(x,g(g({},e),{},{children:Object(i.jsxs)(_,{children:[Object(i.jsx)(P,{children:Object(i.jsx)(o.a,{id:"banner.wallet-title",defaultMessage:[{type:0,value:"New to crypto? So is everyone."}]})}),Object(i.jsx)(d.c,{href:B,variant:"secondaryPurple",children:Object(i.jsx)(o.a,{id:"banner.wallet-button",defaultMessage:[{type:0,value:"Get started"}]})})]})}))},q=function(e){return Object(i.jsx)(k,g(g({},e),{},{children:Object(i.jsxs)(_,{children:[Object(i.jsx)(P,{children:Object(i.jsx)(o.a,{id:"banner.exchange-title",defaultMessage:[{type:0,value:"Trade the market that never sleeps"}]})}),Object(i.jsx)(d.c,{href:"".concat(w.basePathExchange,"/trade/signup"),variant:"secondaryBlue",children:Object(i.jsx)(o.a,{id:"banner.wallet-button",defaultMessage:[{type:0,value:"Get started"}]})})]})}))},F=function(e){return Object(i.jsx)(k,g(g({},e),{},{children:Object(i.jsxs)(_,{children:[Object(i.jsx)(P,{children:Object(i.jsx)(o.a,{id:"banner.pro-title",defaultMessage:[{type:0,value:"Contact Us to Go Pro."}]})}),Object(i.jsx)(d.c,{href:"https://share.hsforms.com/1njdSOPy0SV-doyjphEICuQ2qt44",target:"_blank",rel:"nofollow noopener noreferrer",variant:"secondaryBlue",children:Object(i.jsx)(o.a,{id:"banner.pro-button",defaultMessage:[{type:0,value:"Enquire Now"}]})})]})}))},R=function(e){return Object(i.jsx)(k,g(g({},e),{},{children:Object(i.jsxs)(_,{children:[Object(i.jsx)(P,{children:Object(i.jsx)(o.a,{id:"banner.affiliate-pro-title",defaultMessage:[{type:0,value:"Sharing is caring"}]})}),Object(i.jsx)(d.c,{href:"https://partners.blockchain.com/signup",target:"_blank",rel:"nofollow noopener noreferrer",variant:"secondaryBlue",children:Object(i.jsx)(o.a,{id:"exchange.affiliate.referral-program-button",defaultMessage:[{type:0,value:"Become an Affiliate"}]})})]})}))},L=function(){return Object(i.jsx)(M,{children:Object(i.jsx)(_,{children:Object(i.jsxs)(C,{children:[Object(i.jsxs)(N,{children:[Object(i.jsx)(S,{children:Object(i.jsx)(o.a,{id:"podcast.banner.title",defaultMessage:[{type:0,value:"Enjoying the show?"}]})}),Object(i.jsx)(I,{children:Object(i.jsx)(o.a,{id:"podcast.banner.subtitle",defaultMessage:[{type:0,value:"Leave us a review and let us know what you think."}]})})]}),Object(i.jsx)(d.c,{href:"https://www.podchaser.com/podcasts/the-blockchaincom-podcast-1527109",target:"_blank",rel:"nofollow noopener noreferrer",variant:"primaryBlue",children:Object(i.jsx)(o.a,{id:"podcast.banner.review",defaultMessage:[{type:0,value:"Review Now \u2192"}]})})]})})})}},"H+61":function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return r}))},"R/26":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/research",function(){return n("SSEZ")}])},SSEZ:function(e,t,n){"use strict";n.r(t);var r=n("nKUr"),i=n("jT3O"),a=(n("q1tI"),n("kriW")),o=n("vOnD"),s=n("7fZ1"),c=n("ve3O"),l=n("AHWd"),d=n("nZ70"),u=n("5Yp1"),p=n("kJ6Z"),f=n("dhJC"),h=n("dDsW"),b=n("Cyps"),m=n("CdHj"),g=n("7++0"),y=[{title:Object(r.jsx)(a.a,{defaultMessage:[{type:0,value:"Introduction to Crypto"}],id:"research.introduction-title"}),cards:[{key:"investmentThesis",investmentThesis:Object(g.c)({title:{defaultMessage:[{type:0,value:"Blockchain\u2019s Cryptoasset Investment Thesis"}],id:"research.item.investment-thesis-title"},description:{defaultMessage:[{type:0,value:"Since Blockchain was founded in 2011, we\u2019ve seen bitcoin and other digital asset ownership grow from thousands of pioneers to over 30 million people today. Our investment thesis provides a comprehensive view of the factors driving that growth, and the remaining challenges ahead for cryptoassets to be widely adopted."}],id:"research.item.investment-thesis-description"},label1:{defaultMessage:[{type:0,value:"View Thesis"}],id:"research.item.investment-thesis-button-label-1"}}),link1:"https://docs.google.com/presentation/d/1B42NwMZJbv-HIKVznZ1FwXvJAGe_yEWeiRnaM_ZI2X4/edit"},{key:"futureDecentralised",futureDecentralised:Object(g.c)({title:{defaultMessage:[{type:0,value:"The Future is Decentralised"}],id:"research.item.future-decentralised-title"},description:{defaultMessage:[{type:0,value:"In this document, we discuss our economic and legal rationales with a set of guiding principles for airdrop planning and execution. Finally, we set forth the foundation for the Blockchain Airdrops, together with the criteria that will guide Blockchain in selecting which tokens we will airdrop to our users."}],id:"research.item.future-decentralised-description"},label1:{defaultMessage:[{type:0,value:"Read the Whitepaper"}],id:"research.item.future-decentralised-button-label-1"}}),link1:"TheFutureisDecentralised.pdf"}]},{title:Object(r.jsx)(a.a,{defaultMessage:[{type:0,value:"Institutional"}],id:"copy.institutional"}),cards:[{key:"q12022Institutional",q12022Institutional:Object(g.c)({title:{defaultMessage:[{type:0,value:"Q1 2022 Institutional Framework"}],id:"research.item.q1-2022-institutional-title"},description:{defaultMessage:[{type:0,value:"In this framework, we discuss our view of current market conditions and the forces that may shape crypto markets in the coming months."}],id:"research.item.q1-2022-institutional-description"},label1:{defaultMessage:[{type:0,value:"View Report"}],id:"copy.view-report"}}),link1:"Q1_2022_institutional_framework.pdf"},{key:"q42021Institutional",q42021Institutional:Object(g.c)({title:{defaultMessage:[{type:0,value:"Q4 2021 Institutional Framework"}],id:"research.item.q4-2021-institutional-title"},description:{defaultMessage:[{type:0,value:"In this framework, we discuss our view of market conditions during Q4 2021, including the interplay between institutional interest in crypto and increasing regulatory headwinds."}],id:"research.item.q4-2021-institutional-description"},label1:{defaultMessage:[{type:0,value:"View Report"}],id:"copy.view-report"}}),link1:"Q4_2021_institutional_framework.pdf"}]},{title:Object(r.jsx)(a.a,{defaultMessage:[{type:0,value:"Research Primers"}],id:"research.research-primers-title"}),cards:[{key:"primerUsd",link1:"https://docs.google.com/document/d/1Lc68jS-U6fzKBSa8d0CNy1gGsNyZqCwC3rBAr86UQi0/edit",primerUsd:Object(g.c)({description:{defaultMessage:[{type:0,value:"Tether has overcome numerous challenges to reign as the top stablecoin, but maintaining dominance will prove difficult and users must remember that caveat emptor still applies when holding Tether."}],id:"research.item.primer-ustd-description"},label1:{defaultMessage:[{type:0,value:"View Primer"}],id:"research.item.primer-ustd-button-label-1"},title:{defaultMessage:[{type:0,value:"Primer Series: A Look at Tether (USDT)"}],id:"research.item.primer-ustd-title"}})},{key:"goldCrypto",link1:"https://docs.google.com/document/d/1sxqYyJEw-4pMHW6Qa4loGJ7JosquPGoI-O1aAKb2fB4/edit#heading=h.v78g5pjka82z",goldCrypto:Object(g.c)({description:{defaultMessage:[{type:0,value:"The investment case for gold, an analysis of gold-backed tokens compared to other ways of owning gold, and gold vs bitcoin."}],id:"research.item.primer-gold-crypto-description"},label1:{defaultMessage:[{type:0,value:"View Primer"}],id:"research.item.primer-gold-crypto-button-label-1"},title:{defaultMessage:[{type:0,value:"Primer Series: A Look at Gold Backed Crypto Tokens (DGLD, PAXG, XAUT, DGX)"}],id:"research.item.primer-gold-crypto-title"}})},{key:"primerPax",link1:"PAX_Primer.pdf",primerPax:Object(g.c)({title:{defaultMessage:[{type:0,value:"Primer Series: A Look At USD PAX (PAX)"}],id:"research.item.primer-pax-title"},description:{defaultMessage:[{type:0,value:"In September 2018, Paxos launched the Paxos Standard (PAX), a stablecoin fully backed by physical U.S. dollars stored in FDIC-insured banks and regulated by the New York State Department of Financial Services. By eliminating price volatility, PAX gives users an entirely new way to send value, manage inflation, mitigate trading risk, and gain exposure to the US dollar. This primer dives deeper into the strengths, data and competitive landscape for PAX."}],id:"research.item.primer-pax-description"},label1:{defaultMessage:[{type:0,value:"Download Primer"}],id:"research.item.primer-pax-button-label-1"}})},{key:"primerStella",link1:"XLM_Primer.pdf",primerStella:Object(g.c)({title:{defaultMessage:[{type:0,value:"Primer Series: A Look at Stellar (XLM)"}],id:"research.item.primer-stella-title"},description:{defaultMessage:[{type:0,value:"Founded in 2014, Stellar is designed to be a world-wide payment network that facilitates the exchange of any currency, asset or token. Its native asset, Lumens (XLM), has steadily ranked as one of the leading cryptoassets in terms of market value and ecosystem support. A key focus in this primer is laying out the differences of the Stellar and Ripple projects, as well as shedding light on XLM\u2019s consistently impressive transaction growth and flexibility."}],id:"research.item.primer-stella-description"},label1:{defaultMessage:[{type:0,value:"Download Primer"}],id:"research.item.primer-stella-button-label-1"}})},{key:"primerBch",link1:"BCH_Primer.pdf",primerBch:Object(g.c)({title:{defaultMessage:[{type:0,value:"Primer Series: A Look at Bitcoin Cash (BCH)"}],id:"research.item.primer-bch-title"},description:{defaultMessage:[{type:0,value:"In November of last year, Bitcoin Cash underwent a contentious network split. As a result, we have received more questions about Bitcoin Cash in recent weeks than any other cryptoasset supported by the Blockchain Wallet. A key focus in this primer is a comparison between Bitcoin Cash ABC (BCH) and Bitcoin Satoshi Vision (BSV), including new data shared with us by Coinmetrics on the post-fork movement coins on each respective blockchain."}],id:"research.item.primer-bch-description"},label1:{defaultMessage:[{type:0,value:"View Primer"}],id:"research.item.primer-bch-button-label-1"}})}]},{title:Object(r.jsx)(a.a,{defaultMessage:[{type:0,value:"Crypto Categories"}],id:"research.crypto-categories-title"}),cards:[{key:"stablecoins2019",link1:"StablecoinsPresentation2019.pdf",stablecoins2019:Object(g.c)({title:{defaultMessage:[{type:0,value:"Introducing: 2019 State of Stablecoins"}],id:"research.item.2019-stablecoins-title"},description:{defaultMessage:[{type:0,value:"The 2019 report builds on its predecessor to provide an updated and expanded look at the current state of the stablecoin market - a space where we expect to see significant innovation in the coming years. It includes:"}],id:"research.item.2019-stablecoins-description"},label1:{defaultMessage:[{type:0,value:"View presentation"}],id:"research.item.2019-stablecoins-button-label-2"},list1:{defaultMessage:[{type:0,value:"New research primers on three leading stablecoins: Paxos Standard, Stasis and Reserve"}],id:"research.item.2019-stablecoins-item-1"},list2:{defaultMessage:[{type:0,value:"A new in-depth comparison of Paxos Standard, USD Coin and Gemini Dollar"}],id:"research.item.2019-stablecoins-item-2"},list3:{defaultMessage:[{type:0,value:"Expanded data profiles on 34 stablecoins, including many new stablecoins (the report is twice the size of its predecessor!)"}],id:"research.item.2019-stablecoins-item-3"},list4:{defaultMessage:[{type:0,value:"Refreshed data and analysis across the full report to reflect the substantial changes observed over the last six months; and"}],id:"research.item.2019-stablecoins-item-4"},list5:{defaultMessage:[{type:0,value:"An overview of how to gain investment exposure to the growing use of stablecoins"}],id:"research.item.2019-stablecoins-item-5"}})},{key:"stableCoins2018",link1:"StablecoinsPPTFinal.pdf",stableCoins2018:Object(g.c)({title:{defaultMessage:[{type:0,value:"2018 | The State of Stablecoins"}],id:"research.item.2018-stablecoins-title"},description:{defaultMessage:[{type:0,value:"Stablecoins, as the name suggests, are cryptocurrencies designed to minimize price volatility and are in stark contrast with more volatile cryptoassets like bitcoin, which lack any inbuilt price stability mechanism. Significant volatility is often cited as one of the main reasons why many institutions and individuals have remained on the cryptocurrency sidelines to date and stablecoins have been developed to address this issue."}],id:"research.item.2018-stablecoins-description"},label1:{defaultMessage:[{type:0,value:"View Presentation"}],id:"research.item.2018-stablecoins-button-label-2"}})},{key:"airdrops",link1:"FrameworkAirdrops.pdf",airdrops:Object(g.c)({title:{defaultMessage:[{type:0,value:"A Framework for Airdrops"}],id:"research.item.airdrops-title"},description:{defaultMessage:[{type:0,value:"In this document, we discuss our economic and legal rationales with a set of guiding principles for airdrop planning and execution. Finally, we set forth the foundation for the Blockchain Airdrops, together with the criteria that will guide Blockchain in selecting which tokens we will airdrop to our users."}],id:"research.item.airdrops-description"},label1:{defaultMessage:[{type:0,value:"Download Paper"}],id:"research.item.airdrops-button-label-1"}})},{key:"nft",link1:"Non-FungibleTokenOverview.pdf",nft:Object(g.c)({title:{defaultMessage:[{type:0,value:"Non-Fungible Token (NFT) Overview Report"}],id:"research.item.nft-title"},description:{defaultMessage:[{type:0,value:"An NFT is a unique digital identifier that cannot be copied, substituted, or subdivided, that is recorded in a blockchain, and that is used to certify authenticity and ownership of a specific digital asset. Find out more about NFTs and the emerging digital asset economy in a presentation by Penrose Partners."}],id:"research.item.nft-description"},label1:{defaultMessage:[{type:0,value:"View Presentation"}],id:"research.item.2018-stablecoins-button-label-2"}})}]}],j=n("CIUX");function v(){var e=Object(i.a)(["\n    max-width: 100%;\n    margin-right: 0;\n  "]);return v=function(){return e},e}var w=Object(o.d)(b.m).attrs({as:"h2"}).withConfig({displayName:"PaperCard__Title",componentId:"hqa3tv-0"})(["margin-bottom:1.5rem;"]),O=Object(o.d)(b.e).withConfig({displayName:"PaperCard__Description",componentId:"hqa3tv-1"})(["margin-bottom:2rem;max-width:25rem;"]),x=Object(o.d)(j.c).withConfig({displayName:"PaperCard__Button",componentId:"hqa3tv-2"})(["justify-content:flex-start;font-size:0.875rem;svg{display:none;}"]),k=o.d.div.withConfig({displayName:"PaperCard__Actions",componentId:"hqa3tv-3"})(["display:flex;>:first-child{margin-right:1.5rem;}"]),_=o.d.article.withConfig({displayName:"PaperCard__Container",componentId:"hqa3tv-4"})(["max-width:45%;margin-right:1rem;margin-bottom:2.5rem;&:last-child{margin-right:0;}",""],m.a.mobileL(v())),P=function(e){var t=e.label,n=e.link,i=n.includes(".pdf");return Object(r.jsx)(x,{variant:"link",smallLink:!0,href:i?"".concat("/static/pdf/").concat(n):n,download:i&&n,children:t},n)},M=function(e){var t=e.action1,n=e.children,i=e.description,a=e.openReportModal,o=e.title;return Object(r.jsxs)(_,{children:[Object(r.jsx)(w,{children:o}),Object(r.jsx)(O,{children:i}),n,Object(r.jsx)(k,{children:t?Object(r.jsx)(P,{link:t.link,label:t.label,reportName:t.reportName,openReportModal:a}):null})]})};function C(){var e=Object(i.a)(["\n    ::before {\n      left: -1rem;\n    }\n  "]);return C=function(){return e},e}var S=o.d.div.withConfig({displayName:"ResearchPapers__Column",componentId:"sc-1jl486q-0"})(["display:flex;flex-direction:column;&:not(:last-child){& > div{margin-bottom:1.5rem;}}&:last-child{& > div{border-bottom:none;}}"]),I=o.d.div.withConfig({displayName:"ResearchPapers__CardsContainer",componentId:"sc-1jl486q-1"})(["display:flex;flex-direction:row;justify-content:space-between;flex-wrap:wrap;border-bottom:1px solid ",";padding:2rem 0;"],l.grey100),N=o.d.ul.withConfig({displayName:"ResearchPapers__List",componentId:"sc-1jl486q-2"})(["margin-bottom:2rem;>:last-child{margin-bottom:0;}"]),B=o.d.li.withConfig({displayName:"ResearchPapers__ListItem",componentId:"sc-1jl486q-3"})(["position:relative;display:flex;margin-left:1.25rem;margin-bottom:0.75rem;::before{content:'';position:absolute;top:0.4em;left:-4.5%;width:0.5rem;height:0.5rem;background-color:",";border-radius:50%;}",""],l.blue600,m.a.tablet(C())),T=function(){var e=Object(h.a)().formatMessage;return Object(r.jsx)(S,{children:y.map((function(t){var n=t.cards,i=t.title;return Object(r.jsxs)(S,{children:[Object(r.jsx)(b.l,{children:i}),Object(r.jsx)(I,{children:n.map((function(t){var n=t.key,i=t.link1,a=Object(f.a)(t,["key","link1"]);return Object(r.jsx)(M,{title:e(a[n].title),description:e(a[n].description),action1:{label:e(a[n].label1),link:i},children:Object(r.jsxs)(N,{children:[a[n].list1?Object(r.jsx)(B,{children:e(a[n].list1)}):null,a[n].list2?Object(r.jsx)(B,{children:e(a[n].list2)}):null,a[n].list3?Object(r.jsx)(B,{children:e(a[n].list3)}):null,a[n].list4?Object(r.jsx)(B,{children:e(a[n].list4)}):null,a[n].list5?Object(r.jsx)(B,{children:e(a[n].list5)}):null]})},n)}))})]},i)}))})};function D(){var e=Object(i.a)(["\n    padding: 2.5rem 0;\n  "]);return D=function(){return e},e}var A=Object(o.d)(b.k).withConfig({displayName:"research__HeroTitle",componentId:"b2c0d3-0"})(["color:",";"],l.white),q=Object(o.d)(b.z).withConfig({displayName:"research__HeroSubtitle",componentId:"b2c0d3-1"})(["color:",";max-width:35.8125rem;"],l.white),F=Object(o.d)(d.e).withConfig({displayName:"research__ResearchSection",componentId:"b2c0d3-2"})(["padding:7.5rem 0;",""],m.a.tablet(D()));t.default=Object(p.a)((function(e){var t=e.intl.formatMessage({defaultMessage:[{type:0,value:"Research | Blockchain"}],id:"research.title"});return Object(r.jsxs)(u.a,{title:t,children:[Object(r.jsxs)(c.a,{children:[Object(r.jsx)(A,{children:Object(r.jsx)(a.a,{id:"research.hero-title",defaultMessage:[{type:0,value:"Pioneering the Industry"}]})}),Object(r.jsx)(q,{children:Object(r.jsx)(a.a,{id:"research.subtitle",defaultMessage:[{type:0,value:"We\u2019re dedicated to leading research and thought leadership that helps us and others better understand how blockchain can impact the broader world"}]})})]}),Object(r.jsx)(F,{children:Object(r.jsx)(d.f,{children:Object(r.jsx)(T,{})})}),Object(r.jsx)(s.b,{})]})}))},UlJF:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}n.d(t,"a",(function(){return i}))},VIvw:function(e,t,n){"use strict";function r(e){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.d(t,"a",(function(){return a}));var i=n("+Css");function a(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?Object(i.a)(e):t}},iHvq:function(e,t,n){"use strict";function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,"a",(function(){return r}))},kJ6Z:function(e,t,n){"use strict";var r=n("nKUr"),i=n("HALo"),a=n("H+61"),o=n("UlJF"),s=n("7LId"),c=n("VIvw"),l=n("iHvq"),d=n("vJKn"),u=n.n(d),p=n("cpVT"),f=n("rg98"),h=n("q1tI"),b=n("2OET"),m=n("/TSa");function g(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(l.a)(e);if(t){var i=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){Object(p.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var v=function(){var e=Object(f.a)(u.a.mark((function e(t,n){var r,i,a,o,s,c,l,d;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.query,i=t.req,a=i||window.__NEXT_DATA__.props||r,o=a.locale,s=a.messages,c=o,l=s,d=Date.now(),e.abrupt("return",j(j({},n),{},{locale:c,messages:l,now:d}));case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();t.a=function(e){var t=Object(b.c)(e);return function(n){Object(s.a)(l,n);var c=g(l);function l(){return Object(a.a)(this,l),c.apply(this,arguments)}return Object(o.a)(l,[{key:"componentDidMount",value:function(){Object(m.a)()}},{key:"render",value:function(){var e=Object(i.a)({},this.props);return Object(r.jsx)(t,j({},e))}}],[{key:"getInitialProps",value:function(){var t=Object(f.a)(u.a.mark((function t(n){var r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r={},"function"!==typeof e.getInitialProps){t.next=5;break}return t.next=4,e.getInitialProps(n);case 4:r=t.sent;case 5:return t.abrupt("return",v(n,r));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}]),l}(h.Component)}},ve3O:function(e,t,n){"use strict";var r=n("nKUr"),i=n("jT3O"),a=(n("q1tI"),n("vOnD")),o=n("AHWd"),s=n("nZ70"),c=n("CdHj");function l(){var e=Object(i.a)(["\n    padding: 2.5rem 0;\n  "]);return l=function(){return e},e}var d=Object(a.d)(s.b).withConfig({displayName:"BlueGradientHero__HeroContainer",componentId:"sc-14gghgc-0"})(["background-image:url(/static/img/blue-gradient_hero-bg.png);background-image:image-set( url('/static/img/blue-gradient_hero-bg.png') 1x,url('/static/img/blue-gradient_hero-bg@2x.png') 2x );background-repeat:no-repeat;background-size:100%;background-position:top right;background-color:",";@media (max-width:102.75rem){background-size:cover;}"],o.grey900),u=a.d.div.withConfig({displayName:"BlueGradientHero__Content",componentId:"sc-14gghgc-1"})(["max-width:41.1875rem;padding:7.5rem 0;",""],c.a.tablet(l()));t.a=function(e){return Object(r.jsx)(d,{children:Object(r.jsx)(s.f,{children:Object(r.jsx)(u,{children:e.children})})})}}},[["R/26",0,2,1,3,4,5,6,7,8,9,10]]]);