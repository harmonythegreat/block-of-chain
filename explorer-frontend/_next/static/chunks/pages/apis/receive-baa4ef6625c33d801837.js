_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[39],{"4lWU":function(e,t,i){"use strict";var a=i("nKUr"),s=i("sHGE"),c=i("Ap44"),n=i("q1tI"),r=i.n(n),o=i("kriW"),d=i("vOnD"),l=Object(d.d)(s.c).withConfig({componentId:"fm8lq7-0"})(["margin-bottom:",";"],(function(e){return e.$hasMargin?"1.5rem":"0.5rem"})),u=Object(d.d)(c.k).withConfig({componentId:"fm8lq7-1"})(["margin-bottom:",";"],(function(e){return e.$hasSubHeader?"0.25rem":"0.5rem"})),h=Object(d.d)(c.l).withConfig({componentId:"fm8lq7-2"})(["color:",";margin-right:",";margin-bottom:",";"],(function(e){return e.theme.palette.grey900}),(function(e){return e.$marginRight||0}),(function(e){return e.$marginBot||0})),b=d.d.ul.withConfig({componentId:"fm8lq7-3"})(["margin:0.5rem 0;"]),f=d.d.pre.withConfig({componentId:"fm8lq7-4"})(["background-color:",";border:1px solid ",";border-radius:8px;width:100%;padding:0.5rem;margin-top:0;overflow:scroll;"],(function(e){return e.theme.palette.grey000}),(function(e){return e.theme.palette.grey100}));t.a=function(e){var t=e.section,i=t.contents,s=t.header,c=t.subHeader;return Object(a.jsxs)(a.Fragment,{children:[s?Object(a.jsx)(u,{$hasSubHeader:!!c,size:"1.75rem",children:s}):null,c?Object(a.jsx)(u,{color:"grey400",size:"20px",children:c}):null,i.map((function(e,t){var i=e.code,s=e.desc,c=e.hasResponse,n=e.hasResponseJsonMessage,d=e.hasResponseTextMessage,u=e.isBold,j=e.keyword,p=e.keywordDesc,g=e.keywordLink,m=e.list;return Object(a.jsxs)(r.a.Fragment,{children:[s?Object(a.jsx)(l,{children:Object(a.jsx)(h,{weight:u?700:500,children:s})}):null,j?Object(a.jsxs)(l,{children:[Object(a.jsxs)(h,{$marginRight:"0.25rem",weight:700,children:[j,":"]}),p?Object(a.jsx)(h,{$marginLeft:"0.25rem",children:p}):g]}):null,m?Object(a.jsx)(l,{children:Object(a.jsx)(b,{children:m.map((function(e,t){var i=e.keyword,s=e.keywordDesc;return Object(a.jsxs)("li",{children:[Object(a.jsx)(h,{weight:700,children:i})," -"," ",Object(a.jsx)(h,{weight:400,children:s})]},i+s+t)}))})}):null,c?Object(a.jsx)(l,{alignItems:"center",children:Object(a.jsxs)(h,{size:"0.75rem",children:[Object(a.jsx)(o.a,{defaultMessage:"Response",id:"features.copy.response"}),":"]})}):null,n?Object(a.jsxs)(l,{alignItems:"center",children:[Object(a.jsxs)(h,{$marginRight:"0.25rem",children:[Object(a.jsx)(o.a,{defaultMessage:"Response",id:"features.copy.response"}),":"]}),Object(a.jsx)(h,{$marginBot:"-1px",size:"0.75rem",weight:400,children:"200 OK, application/json"})]}):null,d?Object(a.jsxs)(l,{alignItems:"center",children:[Object(a.jsxs)(h,{$marginRight:"0.25rem",children:[Object(a.jsx)(o.a,{defaultMessage:"Response",id:"features.copy.response"}),":"]}),Object(a.jsx)(h,{$marginBot:"-1px",size:"0.75rem",weight:400,children:"200 OK, text/csv; charset=ascii"})]}):null,i?Object(a.jsx)(f,{children:i}):null]},s+t)}))]})}},"6HSe":function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/apis/receive",function(){return i("Fsh+")}])},"Fsh+":function(e,t,i){"use strict";i.r(t);var a=i("nKUr"),s=i("sHGE"),c=i("gaBn"),n=i("Ap44"),r=(i("q1tI"),i("kriW")),o=i("2OET"),d=i("vOnD"),l=i("4lWU"),u={contents:[{desc:Object(a.jsx)(r.a,{defaultMessage:"Please note, the callback url is limited to 255 characters in length.",id:"features.api.receiving.receivebalanceupdate.desc1"})},{desc:Object(a.jsx)(r.a,{defaultMessage:"When a payment is received by a generated address, or by an address monitored by a balance update request, blockchain.info will notify the callback URL you specify. For balance update callbacks and additional notification will be sent once the transaction reaches the specified number of confirmations.",id:"features.api.receiving.receivebalanceupdate.desc2"}),list:[{keyword:"transaction_hash",keywordDesc:Object(a.jsx)(r.a,{defaultMessage:"The payment transaction hash.",id:"features.api.receiving.receivebalanceupdate.list.transactionhash.desc"})},{keyword:"address",keywordDesc:Object(a.jsx)(r.a,{defaultMessage:"The destination bitcoin address (part of your xPub account).",id:"features.api.receiving.receivebalanceupdate.list.address.desc"})},{keyword:"confirmations",keywordDesc:Object(a.jsx)(r.a,{defaultMessage:"The number of confirmations of this transaction.",id:"features.api.receiving.receivebalanceupdate.list.confirmations.desc"})},{keyword:"value",keywordDesc:Object(a.jsx)(r.a,{defaultMessage:"The value of the payment received (in satoshi, so divide by 100,000,000 to get the value in BTC).",id:"features.api.receiving.receivebalanceupdate.list.value.desc"})},{keyword:"{custom parameter}",keywordDesc:Object(a.jsx)(r.a,{defaultMessage:"Any parameters included in the callback URL will be passed back to the callback URL in the notification. You can use this functionality to include parameters in your callback URL like invoice_id or customer_id to track which payments are associated with which of your customers.",id:"features.api.receiving.receivebalanceupdate.list.customparameter.desc"})}]}],header:Object(a.jsx)(r.a,{defaultMessage:"Receive and Balance Update callbacks",id:"features.api.receiving.receivebalanceupdate.header"})},h={contents:[{desc:Object(a.jsx)(r.a,{defaultMessage:"A block notification is sent every time a new block is added to the blockchain, and matches the height and number of confirmations set in the notification request.",id:"features.api.receiving.blocknotification.desc"}),list:[{keyword:"hash",keywordDesc:Object(a.jsx)(r.a,{defaultMessage:"The block hash.",id:"features.api.receiving.blocknotification.list.hash.desc"})},{keyword:"confirmations",keywordDesc:Object(a.jsx)(r.a,{defaultMessage:"The number of confirmations of this block.",id:"features.api.receiving.blocknotification.list.confirmations.desc"})},{keyword:"height",keywordDesc:Object(a.jsx)(r.a,{defaultMessage:"The block height.",id:"features.api.receiving.blocknotification.list.height.desc"})},{keyword:"timestamp",keywordDesc:Object(a.jsx)(r.a,{defaultMessage:"The unix timestamp indicating when the block was added.",id:"features.api.receiving.blocknotification.list.timestamp.desc"})},{keyword:"size",keywordDesc:Object(a.jsx)(r.a,{defaultMessage:"The block size in bytes.",id:"features.api.receiving.blocknotification.list.size.desc"})},{keyword:"{custom parameter}",keywordDesc:Object(a.jsx)(r.a,{defaultMessage:"Any parameters included in the callback URL will be passed back to the callback URL in the notification.",id:"features.api.receiving.blocknotification.list.customparameter.desc"})}]}],header:Object(a.jsx)(r.a,{defaultMessage:"Block Notification callbacks",id:"features.api.receiving.blocknotification.header"})},b={contents:[{desc:Object(a.jsx)(r.a,{defaultMessage:"An example callback as a result of the above PHP example.",id:"features.api.receiving.php.desc"}),code:Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{children:"$real_secret = 'ZzsMLGKe162CfA5EcG6j';"}),Object(a.jsx)("div",{children:"$invoice_id = $_GET['invoice_id']; //invoice_id is passed back to\n            the callback URL"}),Object(a.jsx)("div",{children:"$transaction_hash = $_GET['transaction_hash'];"}),Object(a.jsx)("div",{children:"$value_in_satoshi = $_GET['value'];"}),Object(a.jsx)("div",{children:"$value_in_btc = $value_in_satoshi / 100000000;"}),Object(a.jsx)("br",{}),Object(a.jsx)("div",{children:"//Commented out to test, uncomment when live"}),Object(a.jsx)("div",{children:"if ($_GET['test'] == true) {"}),Object(a.jsx)("div",{children:"  return"}),Object(a.jsx)("div",{children:"}"}),Object(a.jsx)("br",{}),Object(a.jsx)("div",{children:"try {"}),Object(a.jsx)("div",{children:"  //create or open the database"}),Object(a.jsx)("div",{children:"  $database = new SQLiteDatabase('db.sqlite', 0666, $error);"}),Object(a.jsx)("div",{children:"} catch(Exception $e) {"}),Object(a.jsx)("div",{children:"  die($error);"}),Object(a.jsx)("div",{children:"}"}),Object(a.jsx)("br",{}),Object(a.jsx)("div",{children:"//Add the invoice to the database"}),Object(a.jsx)("div",{children:'$stmt = $db->prepare("replace INTO invoice_payments (invoice_id,\n            transaction_hash, value) values(?, ?, ?)");'}),Object(a.jsx)("div",{children:'$stmt->bind_param("isd", $invoice_id, $transaction_hash,\n            $value_in_btc);'}),Object(a.jsx)("br",{}),Object(a.jsx)("div",{children:"if($stmt->execute()) {"}),Object(a.jsx)("div",{children:'  echo "*ok*";'}),Object(a.jsx)("div",{children:"}"})]})}],header:Object(a.jsx)(r.a,{defaultMessage:"PHP Example",id:"features.api.receiving.php.header"})},f={contents:[{desc:Object(a.jsx)(r.a,{defaultMessage:'In order to acknowledge successful processing of the callback, your server should respond with the text "*ok*" (no quotes), in plain-text, no HTML. If the server responds with anything else, or nothing, the callback will be resent again for every new block (approximately every 10 minutes) up to 1000 times (1 week). Callback domains which appear dead or never return the "*ok*" response may be blocked from the service.',id:"features.api.receiving.expectedcallback.desc"})}],header:Object(a.jsx)(r.a,{defaultMessage:"Expected Callback Response",id:"features.api.receiving.expectedcallback.header"})},j=Object(d.d)(s.c).withConfig({componentId:"m7m9wx-0"})(["margin-bottom:",";"],(function(e){return e.$hasMargin?"1.5rem":"0.5rem"})),p=Object(d.d)(n.k).withConfig({componentId:"m7m9wx-1"})(["margin-bottom:",";"],(function(e){return e.$hasSubHeader?"0.25rem":"0.5rem"})),g=Object(d.d)(n.l).withConfig({componentId:"m7m9wx-2"})(["color:",";margin-left:",";margin-bottom:",";"],(function(e){return e.theme.palette.grey900}),(function(e){return e.$marginLeft||0}),(function(e){return e.$marginBot||0})),m=d.d.ul.withConfig({componentId:"m7m9wx-3"})(["margin:0.5rem 0;"]),k=d.d.pre.withConfig({componentId:"m7m9wx-4"})(["background-color:",";border:1px solid ",";border-radius:8px;width:100%;padding:0.5rem;margin-top:0;overflow:scroll;"],(function(e){return e.theme.palette.grey000}),(function(e){return e.theme.palette.grey100})),x=function(e){var t=e.section,i=t.contents,s=t.header,c=t.subHeader;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(p,{$hasSubHeader:!!c,size:"1.5rem",children:s}),c?Object(a.jsx)(p,{color:"grey400",size:"1.25rem",children:c}):null,i.map((function(e){var t=e.code,i=e.desc,s=e.list;return Object(a.jsxs)(a.Fragment,{children:[i?Object(a.jsx)(j,{children:Object(a.jsx)(g,{children:i})}):null,t?Object(a.jsx)(k,{children:t}):null,s?Object(a.jsx)(j,{children:Object(a.jsx)(m,{children:s.map((function(e,t){var i=e.keyword,s=e.keywordDesc;return Object(a.jsxs)("li",{children:[Object(a.jsx)(g,{weight:700,children:i})," -"," ",Object(a.jsx)(g,{weight:400,children:s})]},i+t)}))})}):null]})}))]})},v=Object(d.d)(n.k).withConfig({componentId:"sc-1xb0fh1-0"})(["margin-bottom:0.25rem;font-size:1.75rem;"]),y=Object(d.d)(n.k).withConfig({componentId:"sc-1xb0fh1-1"})(["margin-bottom:1.5rem;font-size:1.25rem;"]),O=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(v,{children:Object(a.jsx)(r.a,{defaultMessage:"Implementing the Callback",id:"features.api.receiving.implementcallback.header"})}),Object(a.jsx)(y,{color:"grey400",children:Object(a.jsx)(r.a,{defaultMessage:"Processing the callback sent from blockchain.info",id:"features.api.receiving.implementcallback.subheader"})}),Object(a.jsx)(x,{section:u}),Object(a.jsx)(x,{section:h}),Object(a.jsx)(x,{section:b}),Object(a.jsx)(x,{section:f})]})},w=i("JXJk"),M=i("Xo62"),_=!0,E=!0,P={contents:[{desc:Object(a.jsx)(r.a,{defaultMessage:"The Blockchain Receive Payments API V2 is the quickest and easiest way to begin accepting automated bitcoin payments. Consisting of just a simple HTTP GET request, you can be up and running in minutes.",id:"features.api.receive.introduction.desc1"})},{desc:Object(a.jsx)(r.a,{defaultMessage:"One of the difficulties involved with receiving bitcoin payments is the need to generate a unique address for each new user or invoice. These addresses need to monitored and stored securely. The blockchain receive payments API takes care of the generation and monitoring of addresses. We will notify your server using a simple callback whenever a payment is received.",id:"features.api.receive.introduction.desc2"})}],header:Object(a.jsx)(r.a,{defaultMessage:"Introduction",id:"features.copy.introduction"})},T={contents:[{desc:Object(a.jsx)(r.a,{defaultMessage:"In order to use the Receive Payments API V2, please apply for an API key at {link}. This API key is only for our Receive Payments API. You cannot use the standard blockchain wallet API key for Receive Payments V2, and vice versa.",id:"features.api.receive.requestApiKey.desc1",values:{link:Object(a.jsx)(w.c,{href:"/api/request",rel:"nofollow noopener noreferrer",children:"".concat(M.a.PATHS_BASE,"/api/request")})}})}],header:Object(a.jsx)(r.a,{defaultMessage:"Requesting an API key",id:"features.api.receiving.requestApiKey.header"}),subHeader:Object(a.jsx)(r.a,{defaultMessage:"Get access to Blockchain.info APIs",id:"features.api.receiving.requestApiKey.subheader"})},q={contents:[{desc:Object(a.jsx)(r.a,{defaultMessage:"This API requires you to have a BIP 32 account xPub in order to receive payments. The easiest way to start receiving payments is to open a Blockchain Wallet at {link}. You should create a new account inside your wallet exclusively for transactions facilitated by this API. When making API calls, use the xPub for this account ({instructions}).",id:"features.api.receive.xpubkey.desc1",values:{instructions:Object(a.jsx)(n.l,{weight:700,children:Object(a.jsx)(r.a,{defaultMessage:"located in Settings ->  Addresses -> Manage -> More Options -> Show xPub",id:"features.api.receive.xpubkey.desc1.instructions"})}),link:Object(a.jsx)(w.c,{href:"/api/request",rel:"nofollow noopener noreferrer",children:"".concat(M.a.PATHS_BASE,"/api/request")})}})}],header:Object(a.jsx)(r.a,{defaultMessage:"Obtaining an Extended Public Key (xPub)",id:"features.api.receiving.xpubkey.header"}),subHeader:Object(a.jsx)(r.a,{defaultMessage:"xPubs can be created with our new Blockchain Wallet",id:"features.api.receiving.xpubkey.subheader"})},I={contents:[{desc:Object(a.jsx)(r.a,{defaultMessage:"xPubs can be created with our new Blockchain Wallet",id:"features.api.receiving.generatereceivingaddress.desc1"})},{desc:"https://api.blockchain.info/v2/receive?xpub=$xpub&callback=$callback_url&key=$key",isBold:E},{desc:Object(a.jsx)(r.a,{defaultMessage:"As defined in BIP 44, wallet software will not scan past 20 unused addresses. Given enough requests from this API that don't have a matching payment, you could generate addresses past this horizon, which would make spending funds paid to those addresses quite difficult. For this reason, this API will return an error and refuse to generate new addresses if it detects it would create a gap of over 20 unused addresses. {desc}",id:"features.api.receiving.generatereceivingaddress.desc3",values:{desc:Object(a.jsx)(n.l,{weight:700,children:Object(a.jsx)(r.a,{defaultMessage:"If you encounter this error, you will either need to switch to a new xPub (within the same wallet is fine), or receive a payment to one of the previous 20 created addresses.",id:"features.api.receiving.generatereceivingaddress.desc3-2"})})}})},{desc:"https://api.blockchain.info/v2/receive?xpub=$xpub&callback=$callback_url&key=$key&gap_limit=$gap_limit",isBold:E,list:[{keyword:"xpub",keywordDesc:Object(a.jsx)(r.a,{defaultMessage:"Your xPub (where you would like the payment to be sent)",id:"features.api.receiving.generatereceivingaddress.list.xpub.desc"})},{keyword:"callback_url",keywordDesc:Object(a.jsx)(r.a,{defaultMessage:"The callback URL to be notified when a payment is received. Remember to URL Encode the callback url when calling the create method.",id:"features.api.receiving.list.callbackurl.desc"})},{keyword:"key",keywordDesc:Object(a.jsx)(r.a,{defaultMessage:"Your blockchain.info receive payments v2 api key. {link}",id:"features.api.receiving.generatereceivingaddress.list.key.desc",values:{link:Object(a.jsx)(w.c,{href:"/api/request",rel:"nofollow noopener noreferrer",children:Object(a.jsx)(r.a,{defaultMessage:"Request an API key.",id:"features.api.receiving.generatereceivingaddress.list.key.desc.requestapikey"})})}})},{keyword:"gap_limit",keywordDesc:Object(a.jsx)(r.a,{defaultMessage:"Optional. How many unused addresses are allowed before erroring out.",id:"features.api.receiving.generatereceivingaddress.list.gaplimit.desc"})}]},{code:'curl "https://api.blockchain.info/v2/receive?xpub=xpub6CWiJoiwxPQni3DFbrQNHWq8kwrL2J1HuBN7zm4xKPCZRmEshc7Dojz4zMah7E4o2GEEbD6HgfG7sQid186Fw9x9akMNKw2mu1PjqacTJB2&callback=https%3A%2F%2Fmystore.com%3Finvoice_id%3D058921123&key=[yourkeyhere]"',desc:Object(a.jsx)(r.a,{defaultMessage:"Derive an unused address using your xPub:",id:"features.api.receiving.generatereceivingaddress.desc6"})},{code:JSON.stringify({address:"19jJyiC6DnKyKvPg38eBE8R6yCSXLLEjqw",index:23,callback:"https://mystore.com?invoice_id=058921123"},null,2),desc:Object(a.jsx)(r.a,{defaultMessage:"Have your customer send bitcoin to the address contained in the response:",id:"features.api.receiving.generatereceivingaddress.desc7"}),hasResponseJsonMessage:_}],header:Object(a.jsx)(r.a,{defaultMessage:"Generating a Receiving Address [GET]",id:"features.api.receiving.generatereceivingaddress.header"}),subHeader:Object(a.jsx)(r.a,{defaultMessage:"Provide unique, unused bitcoin addresses to your customers",id:"features.api.receiving.generatereceivingaddress.subheader"})},R={contents:[{code:Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{children:"$secret = 'ZzsMLGKe162CfA5EcG6j'"}),Object(a.jsx)("br",{}),Object(a.jsxs)("div",{children:["$my_xpub = ","'{YOUR XPUB ADDRESS}'",";"]}),Object(a.jsxs)("div",{children:["$my_api_key = ","'{YOUR API KEY}'",";"]}),Object(a.jsx)("br",{}),Object(a.jsx)("div",{children:"$my_callback_url = 'https://mystore.com?invoice_id=058921123&secret='.$secret;"}),Object(a.jsx)("br",{}),Object(a.jsx)("div",{children:"$root_url = 'https://api.blockchain.info/v2/receive';"}),Object(a.jsx)("br",{}),Object(a.jsx)("div",{children:"$parameters = 'xpub=' .$my_xpub. '&callback=' .urlencode($my_callback_url). '&key=' .$my_api_key;"}),Object(a.jsx)("br",{}),Object(a.jsx)("div",{children:"$response = file_get_contents($root_url . '?' . $parameters);"}),Object(a.jsx)("br",{}),Object(a.jsx)("div",{children:"$object = json_decode($response);"}),Object(a.jsx)("br",{}),Object(a.jsxs)("div",{children:["echo 'Send Payment To : ' . $object-",">","address;"]})]})}],header:Object(a.jsx)(r.a,{defaultMessage:"PHP Example",id:"features.api.receiving.php.header"}),subHeader:Object(a.jsx)(w.c,{href:"https://github.com/blockchain/receive-payments-demos",rel:"nofollow noopener noreferrer",target:"_blank",children:Object(a.jsx)(r.a,{defaultMessage:"Full source code (PHP, Python, Ruby)",id:"features.api.receiving.php.subheader"})})},$={contents:[{desc:Object(a.jsx)(r.a,{defaultMessage:"This method monitors an address of your choice for received and / or spent payments. You will be sent an HTTP notification immediately when a transaction is made, and subsequently when it reaches the number of confirmations specified in the request.",id:"features.api.receiving.balanceupdate.desc1"})},{desc:Object(a.jsx)(r.a,{defaultMessage:"You are required to specify the request's notification behaviour. Setting the behaviour to 'DELETE' will delete the request after the first relelvant notification is sent to your callback address. Setting the behaviour to 'KEEP' will send additional notifications every time a transaction with the specified confirmations and operation type is sent to or from the address in the request.",id:"features.api.receiving.balanceupdate.desc2"})},{desc:Object(a.jsx)(r.a,{defaultMessage:"Operation type is an optional parameter indicating whether the address will be monitored for received or spent transactions, or both. By default both operation types are monitored.",id:"features.api.receiving.balanceupdate.desc3"})},{desc:Object(a.jsx)(r.a,{defaultMessage:"You may also optionally specify the number of confirmations a transaction reaches before being sent a notification. Note that you will receive a notification at 0 confirmations (i.e. immediately when the transaction is made), and again when it reaches the number of confirmations specified in the request (3 confirmations by default).",id:"features.api.receiving.balanceupdate.desc4"})},{desc:"https://api.blockchain.info/v2/receive/balance_update",isBold:E,list:[{keyword:"address",keywordDesc:Object(a.jsx)(r.a,{defaultMessage:"The address you would like to monitor",id:"features.api.receiving.balanceupdate.list.address.desc"})},{keyword:"callback",keywordDesc:Object(a.jsx)(r.a,{defaultMessage:"The callback URL to be notified when a payment is received.",id:"features.api.receiving.balanceupdate.list.callback.desc"})},{keyword:"callback",keywordDesc:Object(a.jsx)(r.a,{defaultMessage:"The callback URL to be notified when a payment is received. Remember to URL Encode the callback url when calling the create method.",id:"features.api.receiving.list.callbackurl.desc"})},{keyword:"key",keywordDesc:Object(a.jsx)(r.a,{defaultMessage:"Your blockchain.info receive payments v2 api key. {link}",id:"features.api.receiving.balanceupdate.list.key.desc",values:{link:Object(a.jsx)(w.c,{href:"/api/request",rel:"nofollow noopener noreferrer",children:Object(a.jsx)(r.a,{defaultMessage:"Request an API key.",id:"features.api.receiving.balanceupdate.list.key.desc.requestapikey"})})}})},{keyword:"onNotification",keywordDesc:Object(a.jsx)(r.a,{defaultMessage:"The request notification behaviour ('KEEP' | 'DELETE).",id:"features.api.receiving.list.onnotification.desc"})},{keyword:"confs",keywordDesc:Object(a.jsx)(r.a,{defaultMessage:"Optional (Default {num}). The number of confirmations the transaction needs to have before a notification is sent.",id:"features.api.receiving.list.confs.desc",values:{num:3}})},{keyword:"op",keywordDesc:Object(a.jsx)(r.a,{defaultMessage:"Optional (Default 'ALL'). The operation type you would like to receive notifications for ('SPEND' | 'RECEIVE' | 'ALL').",id:"features.api.receiving.list.balanceupdate.op.desc"})}]},{code:'curl "curl -H "Content-Type: text/plain" --data \'{"key":"[your-key-here]","addr":"183qrMGHzMstARRh2rVoRepAd919sGgMHb","callback":"https://mystore.com?invoice_id=123","onNotification":"KEEP", "op":"RECEIVE", "confs": 5}\' https://api.blockchain.info/v2/receive/balance_update',desc:Object(a.jsx)(r.a,{defaultMessage:"Monitor an address for every received payment with 5 confirmations:",id:"features.api.receiving.balanceupdate.desc6"})},{code:JSON.stringify({id:70,addr:"183qrMGHzMstARRh2rVoRepAd919sGgMHb",op:"RECEIVE",confs:5,callback:"https://mystore.com?invoice_id=123",onNotification:"KEEP"},null,2),hasResponseJsonMessage:_},{code:'curl -X DELETE "https://api.blockchain.info/v2/receive/balance_update/70?key=[your-key-here]"',desc:Object(a.jsx)(r.a,{defaultMessage:"The id in the response can be used to delete the request:",id:"features.api.receiving.deleterequest"})},{code:JSON.stringify({deleted:!0},null,2),hasResponseJsonMessage:_}],header:Object(a.jsx)(r.a,{defaultMessage:"Balance Updates [POST]",id:"features.api.receiving.balanceupdatesection.header"}),subHeader:Object(a.jsx)(r.a,{defaultMessage:"Monitor addresses for received and spent payments",id:"features.api.receiving.balanceupdatesection.subheader"})},A={contents:[{desc:Object(a.jsx)(r.a,{defaultMessage:"This method allows you to request callbacks when a new block of a specified height and confirmation number is added to the blockchain.",id:"features.api.receive.blocknotification.desc1"})},{desc:Object(a.jsx)(r.a,{defaultMessage:"As with balance update requests, you are required to specify the request's notification behaviour to either 'KEEP' or 'DELETE'.",id:"features.api.receiving.blocknotification.desc2"})},{desc:Object(a.jsx)(r.a,{defaultMessage:"Height is an optional parameter indicating at which height you would like to receive a block notification - if unspecified, this will be the height of the next block to arrive.",id:"features.api.receiving.blocknotification.desc3"})},{desc:Object(a.jsx)(r.a,{defaultMessage:"Confs is another optional parameter indicating how many confirmations a block should have when a notification is sent.",id:"features.api.receiving.blocknotification.desc4"})},{desc:"https://api.blockchain.info/v2/receive/block_notification",isBold:E,list:[{keyword:"callback",keywordDesc:Object(a.jsx)(r.a,{defaultMessage:"The callback URL to be notified when a block that matches your query is added.",id:"features.api.receiving.list.balanceupdate.callback.desc"})},{keyword:"key",keywordDesc:Object(a.jsx)(r.a,{defaultMessage:"Your blockchain.info receive payments v2 api key. {link}",id:"features.api.receiving.balanceupdate.list.key.desc",values:{link:Object(a.jsx)(w.c,{href:"/api/request",rel:"nofollow noopener noreferrer",children:Object(a.jsx)(r.a,{defaultMessage:"Request an API key.",id:"features.api.receiving.balanceupdate.list.key.desc.requestapikey"})})}})},{keyword:"onNotification",keywordDesc:Object(a.jsx)(r.a,{defaultMessage:"The request notification behaviour ('KEEP' | 'DELETE).",id:"features.api.receiving.list.onnotification.desc"})},{keyword:"confs",keywordDesc:Object(a.jsx)(r.a,{defaultMessage:"Optional (Default {num}). The number of confirmations the transaction needs to have before a notification is sent.",id:"features.api.receiving.list.confs.desc",values:{num:1}})},{keyword:"height",keywordDesc:Object(a.jsx)(r.a,{defaultMessage:"Optional (Default current chain height + 1). The height at which a notification should be sent.",id:"features.api.receiving.list.height.desc"})}]},{code:'curl -H "Content-Type: text/plain" --data \'{"key":"[your-key-here]","height":500000,"callback":"https://mysite.com/block?request_id=1234","onNotification":"DELETE"}\' https://api.blockchain.info/v2/receive/block_notification',desc:Object(a.jsx)(r.a,{defaultMessage:"Request a single notification when the Bitcoin Blockchain reaches 500,000 blocks:",id:"features.api.receiving.blocknotification.desc6"})},{code:JSON.stringify({id:64,height:5e5,callback:"https://mysite.com/block?request_id=1234",confs:1,onNotification:"DELETE"},null,2),hasResponseJsonMessage:_},{code:'curl -X DELETE "https://api.blockchain.info/v2/receive/block_notifcation/64?key=[your-key-here]"',desc:Object(a.jsx)(r.a,{defaultMessage:"The id in the response can be used to delete the request:",id:"features.api.receiving.deleterequest"})},{code:JSON.stringify({deleted:!0},null,2),hasResponseJsonMessage:_}],header:Object(a.jsx)(r.a,{defaultMessage:"Block Notification [POST]",id:"features.api.receiving.blocknotification.header_post"})},D={contents:[{desc:Object(a.jsx)(r.a,{defaultMessage:"Check the index gap between last address paid to and the last address generated using the using the checkgap endpoint. Use the xpub you want to check and your API key like so:",id:"features.api.receiving.checkxpubaddressgap.desc1"})},{code:'curl "https://api.blockchain.info/v2/receive/checkgap?xpub=[yourxpubhere]]&key=[yourkeyhere]"'},{code:JSON.stringify({gap:2},null,2)}],header:Object(a.jsx)(r.a,{defaultMessage:"Check xPub address gap [GET]",id:"features.api.receiving.checkxpubaddressgap.header"})},C={contents:[{desc:Object(a.jsx)(r.a,{defaultMessage:"See logs related to callback attempts using the callback_logs endpoints. Use the exact callback in question and your API key like so:",id:"features.api.receiving.callbacklogs.desc1"})},{code:'curl "https://api.blockchain.info/v2/receive/callback_log?callback=https%3A%2F%2Fmystore.com%3Finvoice_id%3D05892112%26secret%3DZzsMLGKe162CfA5EcG6j&key=[yourkeyhere]"'},{code:JSON.stringify([{callback:"https://mystore.com?invoice_id=058921123&secret=ZzsMLGKe162CfA5EcG6j&key=[yourkeyhere]",called_at:"2015-10-21T22:43:47Z",raw_response:"*bad*",response_code:200},{callback:"http://mystore.com?invoice_id=058921123&secret=ZzsMLGKe162CfA5EcG6j&key=[yourkeyhere]",called_at:"2015-10-21T22:43:55Z",raw_response:"*bad*",response_code:200}],null,2)}],header:Object(a.jsx)(r.a,{defaultMessage:"Callback Logs [GET]",id:"features.api.receiving.callbacklogs.header"}),subHeader:Object(a.jsx)(r.a,{defaultMessage:"Debug outstanding payments",id:"features.api.receiving.callbacklogs.subheader"})},L={contents:[{desc:Object(a.jsx)(r.a,{defaultMessage:"A custom secret parameter should be included in the callback URL. The secret will be passed back to the callback script when the callback is fired, and should be checked by your code for validity. This prevents someone from trying to call your servers and falsely mark an invoice as 'paid'.",id:"features.api.receiving.security.desc"})}],header:Object(a.jsx)(r.a,{defaultMessage:"Security",id:"features.api.receiving.security.header"})},H={contents:[{desc:Object(a.jsx)(r.a,{defaultMessage:"Use the {link} to convert values in local currencies to BTC. The Demo Apps below include examples of how to do this.",id:"features.api.receiving.currencyconversion.desc1",values:{link:Object(a.jsx)(w.c,{href:"/api/exchange_rates_api",rel:"nofollow noopener noreferrer",children:Object(a.jsx)(r.a,{defaultMessage:"Exchange Rates API",id:"features.api.receiving.currencyconversion.desc1.link"})})}})},{desc:Object(a.jsx)(r.a,{defaultMessage:"If you would like convert payments received in Bitcoin to fiat currency quickly use a bitcoin address from an exchange wallet.",id:"features.api.receiving.currencyconversion.desc2"})}],header:Object(a.jsx)(r.a,{defaultMessage:"Currency Conversion",id:"features.api.receiving.currencyconversion.header"})},B={contents:[{desc:Object(a.jsx)(r.a,{defaultMessage:"A double spend occurs when a malicious user spends the same BTC twice. A payment that initial appears successful could be reversed at a later date. This is counteracted by waiting for the transaction to be included in the blockchain and reaching a number of confirmations. 6 confirmations is generally considered safe for high value transactions.",id:"features.api.receiving.doublespendschargeback.desc1"})},{desc:Object(a.jsx)(r.a,{defaultMessage:"Validate the transaction confirmations in the callback script by checking $_GET['confirmations'] parameter. It is recommended you acknowledge the transaction at zero confirmations but only trust the transaction after one confirmation. For example, if purchasing a product, we would show the order as successful at zero confirmations (the first callback, but do not echo \"*ok*\" yet), but only ship the product when 4 or more confirmations are reached. See the PHP demo callback.php for an example.",id:"features.api.receiving.doublespendschargeback.desc2"})},{code:Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("div",{children:["if ($_GET['confirmations'] ",">","= 6) ","{"]}),Object(a.jsxs)("div",{children:["  ","//Insert into confirmed payments"]}),Object(a.jsxs)("div",{children:["  ","echo '*ok*';"]}),Object(a.jsxs)("div",{children:["}"," else ","{"]}),Object(a.jsxs)("div",{children:["  ","//Insert into pending payments"]}),Object(a.jsxs)("div",{children:["  ","//Don't print *ok* so the notification resent again on next confirmation"]}),Object(a.jsx)("div",{children:"}"})]})}],header:Object(a.jsx)(r.a,{defaultMessage:"Double Spends & Chargebacks",id:"features.api.receiving.doublespendschargeback.header"})},z={contents:[{desc:Object(a.jsx)(r.a,{defaultMessage:'Receive addresses never expire and will continue to be monitored until an "*ok*" is received in the callback response or blockchain.info has notified the callback 1000 times.',id:"features.api.receiving.addressexpiration.desc1"})}],header:Object(a.jsx)(r.a,{defaultMessage:"Address Expiration",id:"features.api.receiving.addressexpiration.header"})},S={contents:[{desc:Object(a.jsx)(r.a,{defaultMessage:"There is no limit to the number of receiving address which can be generated (as long as the 20 address gap limitation is met), the service is designed to monitor millions of addresses.",id:"features.api.receiving.fairusage.desc1"})},{desc:Object(a.jsx)(r.a,{defaultMessage:'Callback domains which appear dead or never return the "*ok*" response may be blocked from the service.',id:"features.api.receiving.fairusage.desc2"})}],header:Object(a.jsx)(r.a,{defaultMessage:"Fair Usage",id:"features.api.receiving.fairusage.header"})},G=Object(d.d)(s.c).withConfig({componentId:"sc-1wmzrgs-0"})(["margin-bottom:1.5rem;padding:1.5rem;border-left:0.25rem solid ",";"],(function(e){return e.theme.palette.grey100})),U=Object(d.d)(s.c).withConfig({componentId:"sc-1wmzrgs-1"})(["flex-direction:column;margin-bottom:1rem;"]),N=Object(d.d)(s.c).withConfig({componentId:"sc-1wmzrgs-2"})(["margin-top:0.5rem;"]),K=Object(d.d)(n.h).withConfig({componentId:"sc-1wmzrgs-3"})(["margin-bottom:0.25rem;"]),F=Object(d.d)(n.k).withConfig({componentId:"sc-1wmzrgs-4"})(["margin-bottom:1.5rem;font-size:1.75rem;"]),J=Object(d.d)(n.l).withConfig({componentId:"sc-1wmzrgs-5"})(["color:",";"],(function(e){return e.theme.palette.grey900})),Y=Object(o.c)((function(){return Object(a.jsx)(s.e,{children:Object(a.jsxs)(s.b,{children:[Object(a.jsx)(N,{children:Object(a.jsx)(c.a,{api:!0,apiType:"receive"})}),Object(a.jsx)(K,{color:"grey900",children:Object(a.jsx)(r.a,{defaultMessage:"Receive Payments API V2",id:"features.apis.receive.header"})}),Object(a.jsx)(F,{color:"grey500",children:Object(a.jsx)(r.a,{defaultMessage:"Accept bitcoin payments seamlessly",id:"features.apis.receive.subheader"})}),Object(a.jsx)(G,{children:Object(a.jsx)(J,{size:"1.125rem",weight:400,children:Object(a.jsx)(r.a,{defaultMessage:"You provide an extended public key (xPub) and we generate a unique, unused corresponding address for your customers to send payment to. We notify you of payments to that address instantly using a callback URL of your choosing.",id:"features.apis.receive.quote"})})}),Object(a.jsx)(U,{children:Object(a.jsx)(l.a,{section:P})}),Object(a.jsx)(U,{children:Object(a.jsx)(l.a,{section:T})}),Object(a.jsx)(U,{children:Object(a.jsx)(l.a,{section:q})}),Object(a.jsx)(U,{children:Object(a.jsx)(l.a,{section:I})}),Object(a.jsx)(U,{children:Object(a.jsx)(l.a,{section:R})}),Object(a.jsx)(U,{children:Object(a.jsx)(l.a,{section:$})}),Object(a.jsx)(U,{children:Object(a.jsx)(l.a,{section:A})}),Object(a.jsx)(U,{children:Object(a.jsx)(O,{})}),Object(a.jsx)(U,{children:Object(a.jsx)(l.a,{section:D})}),Object(a.jsx)(U,{children:Object(a.jsx)(l.a,{section:C})}),Object(a.jsx)(U,{children:Object(a.jsx)(l.a,{section:L})}),Object(a.jsx)(U,{children:Object(a.jsx)(l.a,{section:H})}),Object(a.jsx)(U,{children:Object(a.jsx)(l.a,{section:B})}),Object(a.jsx)(U,{children:Object(a.jsx)(l.a,{section:z})}),Object(a.jsx)(U,{children:Object(a.jsx)(l.a,{section:S})})]})})})),W=i("hor7");t.default=function(){return Object(a.jsx)(W.a,{network:"none",titleId:"features.apis.receive.header",children:Object(a.jsx)(Y,{})})}}},[["6HSe",0,1,3,2,4,5,6,7]]]);