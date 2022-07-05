_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[38],{dYHI:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/apis/query",function(){return a("yWvA")}])},yWvA:function(e,t,a){"use strict";a.r(t);var s=a("nKUr"),r=a("sHGE"),i=a("JXJk"),c=a("gaBn"),d=a("Ap44"),o=a("q1tI"),n=a.n(o),u=a("kriW"),l=a("2OET"),b=a("vOnD"),f=a("Xo62"),h={list:[{desc:Object(s.jsx)(u.a,{defaultMessage:"Current difficulty target as a decimal number",id:"features.api.query.realtime.getdifficulty.desc"}),keyword:"getdifficulty",link:"".concat(f.a.API_PUBLIC_PRICE,"/q/getdifficulty")},{desc:Object(s.jsx)(u.a,{defaultMessage:"Current block height in the longest chain",id:"features.api.query.realtime.getblockcount.desc"}),keyword:"getblockcount",link:"".concat(f.a.API_PUBLIC_PRICE,"/q/getblockcount")},{desc:Object(s.jsx)(u.a,{defaultMessage:"Hash of the latest block",id:"features.api.query.realtime.latesthash.desc"}),keyword:"latesthash",link:"".concat(f.a.API_PUBLIC_PRICE,"/q/latesthash")},{desc:Object(s.jsx)(u.a,{defaultMessage:"Current block reward in BTC",id:"features.api.query.realtime.bcperblock.desc"}),keyword:"bcperblock",link:"".concat(f.a.API_PUBLIC_PRICE,"/q/bcperblock")},{desc:Object(s.jsx)(u.a,{defaultMessage:"Total Bitcoins in circulation (delayed by up to 1 hour)",id:"features.api.query.realtime.totalbc.desc"}),keyword:"totalbc",link:"".concat(f.a.API_PUBLIC_PRICE,"/q/totalbc")},{desc:Object(s.jsx)(u.a,{defaultMessage:"Probability of finding a valid block each hash attempt",id:"features.api.query.realtime.probability.desc"}),keyword:"probability",link:"".concat(f.a.API_PUBLIC_PRICE,"/q/probability")},{desc:Object(s.jsx)(u.a,{defaultMessage:"Average number of hash attempts needed to solve a block",id:"features.api.query.realtime.hashestowin.desc"}),keyword:"hashestowin",link:"".concat(f.a.API_PUBLIC_PRICE,"/q/hashestowin")},{desc:Object(s.jsx)(u.a,{defaultMessage:"Block height of the next difficulty re-target",id:"features.api.query.realtime.nextretarget.desc"}),keyword:"nextretarget",link:"".concat(f.a.API_PUBLIC_PRICE,"/q/nextretarget")},{desc:Object(s.jsx)(u.a,{defaultMessage:"Average transaction size for the past 1000 blocks. Change the number of blocks by passing an integer as the second argument e.g. avgtxsize/2000",id:"features.api.query.realtime.avgtxsize.desc"}),keyword:"avgtxsize",link:"".concat(f.a.API_PUBLIC_PRICE,"/q/avgtxsize")},{desc:Object(s.jsx)(u.a,{defaultMessage:"Average transaction value (1000 Default)",id:"features.api.query.realtime.avgtxvalue.desc"}),keyword:"avgtxvalue",link:"".concat(f.a.API_PUBLIC_PRICE,"/q/avgtxvalue")},{desc:Object(s.jsx)(u.a,{defaultMessage:"Average time between blocks in seconds",id:"features.api.query.realtime.interval.desc"}),keyword:"interval",link:"".concat(f.a.API_PUBLIC_PRICE,"/q/interval")},{desc:Object(s.jsx)(u.a,{defaultMessage:"Estimated time until the next block (in seconds)",id:"features.api.query.realtime.eta.desc"}),keyword:"eta",link:"".concat(f.a.API_PUBLIC_PRICE,"/q/eta")},{desc:Object(s.jsx)(u.a,{defaultMessage:"Average number of transactions per block (100 Default)",id:"features.api.query.realtime.avgtxnumber.desc"}),keyword:"avgtxnumber",link:"".concat(f.a.API_PUBLIC_PRICE,"/q/avgtxnumber")}],title:Object(s.jsx)(u.a,{defaultMessage:"Real-time",id:"features.api.query.realtime.subheader"})},j={code:"e.g. /q/addressbalance/1EzwoHtiXB4iFwedPr49iywjZn2nnekhoj?confirmations=6",desc1:Object(s.jsx)(u.a,{defaultMessage:"To filter by x number of confirmations include the confirmations parameter",id:"features.api.query.addresslookups.desc1"}),desc2:Object(s.jsx)(u.a,{defaultMessage:"to only include transactions with 6 or more confirmations. This is extremely important if you are processing valuable transactions.",id:"features.api.query.addresslookups.desc2"}),list:[{desc:Object(s.jsx)(u.a,{defaultMessage:"Get the total number of bitcoins received by an address (in satoshi). Multiple addresses separated by |",id:"features.api.query.addresslookups.getreceivedbyaddress.desc"}),keyword:"getreceivedbyaddress/$address",link:"".concat(f.a.API_PUBLIC_PRICE,"/q/getreceivedbyaddress"),note:Object(s.jsx)(u.a,{defaultMessage:"Add the parameters start_time and end_time to restrict received by to a specific time period. Provided times should be a unix timestamp in milliseconds. Multiple addresses separated by |        ",id:"features.api.query.addresslookups.getreceivedbyaddress.note"}),warning:Object(s.jsx)(u.a,{defaultMessage:"Do not use to process payments without the confirmations parameter",id:"features.api.query.addresslookups.warning"})},{desc:Object(s.jsx)(u.a,{defaultMessage:"Get the total number of bitcoins send by an address (in satoshi). Multiple addresses separated by |",id:"features.api.query.addresslookups.getsentbyaddress.desc"}),keyword:"getsentbyaddress/$address",link:"".concat(f.a.API_PUBLIC_PRICE,"/q/getsentbyaddress"),warning:Object(s.jsx)(u.a,{defaultMessage:"Do not use to process payments without the confirmations parameter",id:"features.api.query.addresslookups.warning"})},{desc:Object(s.jsx)(u.a,{defaultMessage:"Get the balance of an address (in satoshi). Multiple addresses separated by |",id:"features.api.query.addresslookups.addressbalance.desc"}),keyword:"addressbalance/$address",link:"".concat(f.a.API_PUBLIC_PRICE,"/q/addressbalance"),warning:Object(s.jsx)(u.a,{defaultMessage:"Do not use to process payments without the confirmations parameter",id:"features.api.query.addresslookups.warning"})},{desc:Object(s.jsx)(u.a,{defaultMessage:"Timestamp of the block an address was first confirmed in.",id:"features.api.query.addresslookups.addressfirstseen.desc"}),keyword:"addressfirstseen/$address",link:"".concat(f.a.API_PUBLIC_PRICE,"/q/addressfirstseen")}],title:Object(s.jsx)(u.a,{defaultMessage:"Address Lookups",id:"features.api.query.addresslookups.subheader"})},p={list:[{desc:Object(s.jsx)(u.a,{defaultMessage:"Get total output value of a transaction (in satoshi)",id:"features.api.query.transactionlookups.txtotalbtcoutput.desc"}),keyword:"txtotalbtcoutput/$txHash",link:"".concat(f.a.API_PUBLIC_PRICE,"/q/txtotalbtcoutput")},{desc:Object(s.jsx)(u.a,{defaultMessage:"Get total input value of a transaction (in satoshi)",id:"features.api.query.transactionlookups.txtotalbtcinput.desc"}),keyword:"txtotalbtcinput/$txHash",link:"".concat(f.a.API_PUBLIC_PRICE,"/q/txtotalbtcinput")},{desc:Object(s.jsx)(u.a,{defaultMessage:"Get fee included in a transaction (in satoshi)",id:"features.api.query.transactionlookups.txfee.desc"}),keyword:"txfee/$txHash",link:"".concat(f.a.API_PUBLIC_PRICE,"/q/txfee")},{desc:Object(s.jsx)(u.a,{defaultMessage:"Calculate the result of a transaction sent or received to Address. Multiple addresses separated by |",id:"features.api.query.transactionlookups.txresult.desc"}),keyword:"txresult/$txHash/$address",link:"".concat(f.a.API_PUBLIC_PRICE,"/q/txresult")}],title:Object(s.jsx)(u.a,{defaultMessage:"Transactions Lookups",id:"features.api.query.transactionlookups.subheader"})},y={list:[{desc:Object(s.jsx)(u.a,{defaultMessage:"Converts a bitcoin address to a hash 160",id:"features.api.query.tools.addresstohash.desc"}),keyword:"addresstohash/$address",link:"".concat(f.a.API_PUBLIC_PRICE,"/q/addresstohash")},{desc:Object(s.jsx)(u.a,{defaultMessage:"Converts a hash 160 to a bitcoin address",id:"features.api.query.tools.hashtoaddress.desc"}),keyword:"hashtoaddress/$hash",link:"".concat(f.a.API_PUBLIC_PRICE,"/q/hashtoaddress")},{desc:Object(s.jsx)(u.a,{defaultMessage:"Converts a public key to a hash 160",id:"features.api.query.tools.hashpubkey.desc"}),keyword:"hashpubkey/$pubkey",link:"".concat(f.a.API_PUBLIC_PRICE,"/q/hashpubkey")},{desc:Object(s.jsx)(u.a,{defaultMessage:"Converts a public key to an Address",id:"features.api.query.tools.addrpubkey.desc"}),keyword:"addrpubkey/$pubkey",link:"".concat(f.a.API_PUBLIC_PRICE,"/q/addrpubkey")},{desc:Object(s.jsx)(u.a,{defaultMessage:"Converts an address to public key (if available)",id:"features.api.query.tools.pubkeyaddr.desc"}),keyword:"pubkeyaddr/$address",link:"".concat(f.a.API_PUBLIC_PRICE,"/q/pubkeyaddr")}],title:Object(s.jsx)(u.a,{defaultMessage:"Tools",id:"features.api.query.tools.subheader"})},g={list:[{desc:Object(s.jsx)(u.a,{defaultMessage:"Number of pending unconfirmed transactions",id:"features.api.query.misc.unconfirmedcount.desc"}),keyword:"unconfirmedcount",link:"".concat(f.a.API_PUBLIC_PRICE,"/q/unconfirmedcount")},{desc:Object(s.jsx)(u.a,{defaultMessage:"24 hour weighted price from the largest exchanges",id:"features.api.query.misc.24hrprice.desc"}),keyword:"24hrprice",link:"".concat(f.a.API_PUBLIC_PRICE,"/q/24hrprice")},{desc:Object(s.jsx)(u.a,{defaultMessage:"USD market cap (based on 24 hour weighted price)",id:"features.api.query.misc.marketcap.desc"}),keyword:"marketcap",link:"".concat(f.a.API_PUBLIC_PRICE,"/q/marketcap")},{desc:Object(s.jsx)(u.a,{defaultMessage:"Number of transactions in the past 24 hours",id:"features.api.query.misc.24hrtransactioncount.desc"}),keyword:"24hrtransactioncount",link:"".concat(f.a.API_PUBLIC_PRICE,"/q/24hrtransactioncount")},{desc:Object(s.jsx)(u.a,{defaultMessage:"Number of btc sent in the last 24 hours (in satoshi)",id:"features.api.query.misc.24hrbtcsent.desc"}),keyword:"24hrbtcsent",link:"".concat(f.a.API_PUBLIC_PRICE,"/q/24hrbtcsent")},{desc:Object(s.jsx)(u.a,{defaultMessage:"Estimated network hash rate in gigahash",id:"features.api.query.misc.hashrate.desc"}),keyword:"hashrate",link:"".concat(f.a.API_PUBLIC_PRICE,"/q/hashrate")},{desc:Object(s.jsx)(u.a,{defaultMessage:"Lookup the reason why the provided tx or block hash was rejected (if any)",id:"features.api.query.misc.rejected.desc"}),keyword:"rejected",link:"".concat(f.a.API_PUBLIC_PRICE,"/q/rejected")}],title:Object(s.jsx)(u.a,{defaultMessage:"Misc",id:"features.api.query.Misc.subheader"})},m=Object(b.d)(r.c).withConfig({componentId:"syv75b-0"})(["margin-bottom:",";"],(function(e){return e.$marginBot||"0.5rem"})),k=Object(b.d)(r.c).withConfig({componentId:"syv75b-1"})(["flex-direction:column;margin-bottom:",";margin-left:",";"],(function(e){return e.$marginBot||"0.5rem"}),(function(e){return e.$marginLeft||0})),x=Object(b.d)(d.k).withConfig({componentId:"syv75b-2"})(["margin-bottom:0.5rem;font-size:1.75rem;"]),I=Object(b.d)(d.l).withConfig({componentId:"syv75b-3"})(["color:",";"],(function(e){return e.theme.palette.grey900})),P=b.d.pre.withConfig({componentId:"syv75b-4"})(["background-color:",";border:1px solid ",";border-radius:8px;width:100%;padding:0.5rem;margin:0;overflow:scroll;"],(function(e){return e.theme.palette.grey000}),(function(e){return e.theme.palette.grey100})),O=function(e){var t=e.section,a=t.code,r=t.desc1,c=t.desc2,o=t.list,u=t.title;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(x,{children:u}),r?Object(s.jsx)(m,{children:Object(s.jsx)(I,{children:r})}):null,a?Object(s.jsx)(m,{children:Object(s.jsx)(P,{children:a})}):null,c?Object(s.jsx)(m,{children:Object(s.jsx)(I,{children:c})}):null,Object(s.jsx)(k,{$marginBot:"1rem",$marginLeft:"2rem",children:o.map((function(e,t){var a=e.desc,r=e.keyword,c=e.link,o=e.note,u=e.warning;return Object(s.jsxs)(n.a.Fragment,{children:[Object(s.jsx)(m,{$marginBot:o?"0.25rem":"0.5rem",children:Object(s.jsxs)(I,{children:[Object(s.jsx)(i.c,{href:c,rel:"nofollow noopener noreferrer",children:r}),"- ",a," ",u?Object(s.jsx)(d.l,{color:"red600",children:u}):null]})},r+a+t),o?Object(s.jsx)(m,{children:Object(s.jsx)(d.l,{color:"grey400",size:"0.75rem",children:o})}):null]},a+t)}))})]})},C=Object(b.d)(r.c).withConfig({componentId:"yi5cci-0"})(["margin-bottom:",";"],(function(e){return e.$marginBot||"0.5rem"})),q=Object(b.d)(r.c).withConfig({componentId:"yi5cci-1"})(["margin-top:0.5rem;"]),w=Object(b.d)(d.h).withConfig({componentId:"yi5cci-2"})(["margin-bottom:0.25rem;"]),_=Object(b.d)(d.k).withConfig({componentId:"yi5cci-3"})(["margin-bottom:1.5rem;font-size:1.75rem;"]),v=Object(b.d)(d.l).withConfig({componentId:"yi5cci-4"})(["color:",";"],(function(e){return e.theme.palette.grey900})),M=Object(l.c)((function(){return Object(s.jsx)(r.e,{children:Object(s.jsxs)(r.b,{children:[Object(s.jsx)(q,{children:Object(s.jsx)(c.a,{api:!0,apiType:"query"})}),Object(s.jsx)(w,{color:"grey900",children:Object(s.jsx)(u.a,{defaultMessage:"Query API",id:"features.apis.query.header"})}),Object(s.jsx)(_,{color:"grey500",children:Object(s.jsx)(u.a,{defaultMessage:"Plaintext query api to retrieve data from blockchain.com",id:"features.apis.query.subheader"})}),Object(s.jsx)(C,{children:Object(s.jsx)(v,{children:Object(s.jsx)(u.a,{defaultMessage:"Some API calls are available with {link} if you add a &cors=true parameter to the GET request",id:"features.apis.cors_header.desc",values:{link:Object(s.jsx)(i.c,{href:"https://en.wikipedia.org/wiki/Cross-origin_resource_sharing",rel:"nofollow noopener noreferrer",target:"_blank",children:Object(s.jsx)(u.a,{defaultMessage:"CORS headers",id:"features.apis.cors_header"})})}})})}),Object(s.jsx)(C,{$marginBot:"1.5rem",children:Object(s.jsx)(v,{children:Object(s.jsx)(u.a,{defaultMessage:"Please limit your queries to a maximum of 1 every 10 seconds. All bitcoin values are in Satoshi i.e. divide by 100000000 to get the amount in BTC",id:"features.apis.query.limit.desc"})})}),Object(s.jsx)(O,{section:h}),Object(s.jsx)(O,{section:j}),Object(s.jsx)(O,{section:p}),Object(s.jsx)(O,{section:y}),Object(s.jsx)(O,{section:g})]})})})),A=a("hor7");t.default=function(){return Object(s.jsx)(A.a,{network:"none",titleId:"features.apis.query.header",children:Object(s.jsx)(M,{})})}}},[["dYHI",0,1,3,2,4,5,6,7]]]);