(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{"3lj/":function(e,t,n){"use strict";n.d(t,"e",(function(){return r})),n.d(t,"d",(function(){return o})),n.d(t,"f",(function(){return c})),n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return i})),n.d(t,"g",(function(){return u})),n.d(t,"c",(function(){return s}));var r="80rem",o="62.5rem",c="75rem",a="62rem",i="42rem",u="0.5rem",s="0.75rem"},CdHj:function(e,t,n){"use strict";n.d(t,"b",(function(){return o}));var r=n("vOnD"),o={desktop:2560,laptopL:1440,laptopM:1200,laptop:1023,tablet:768,mobileL:620,mobile:479},c=Object.keys(o).reduce((function(e,t){return e[t]=function(){return Object(r.c)(["@media (max-width:","px){",";}"],o[t],r.c.apply(void 0,arguments))},e}),{});t.a=c},YFqc:function(e,t,n){e.exports=n("cTJO")},YNhk:function(e,t,n){"use strict";var r=n("nKUr"),o=n("cpVT"),c=n("dhJC"),a=n("q1tI"),i=n("2OET"),u=n("YFqc"),s=n.n(u);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){Object(o.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var d=n("vOnD").d.a.withConfig({displayName:"Link__CustomLink",componentId:"sc-1p80yfz-0"})([""]),p=Object(a.forwardRef)((function(e,t){var n=e.children,o=e.href,i=void 0===o?"":o,u=e.target,l=Object(c.a)(e,["children","href","target"]),p=null,v=i,b=!1;try{p=new URL(v)}catch(j){p=null}null!==p||i.startsWith("#")||i.startsWith("/static")||(b=!0),b&&e.intl&&e.intl.locale&&"en"!==e.intl.locale&&(v="/".concat(e.intl.locale).concat(i.startsWith("/")?i:"/".concat(i)));var h=f(f({},l),{},{target:u}),O=Object(a.useState)(),m=O[0],y=O[1];Object(a.useEffect)((function(){y(window.location.hostname)}),[]);var g;return/https?:\/\/.+/.test(g=v)||g.startsWith("mailto:")||g.startsWith("tel:")||g.startsWith("#")||!function(e){return"www.blockchain.com"===m&&e.startsWith("https://www.blockchain.com")||"exchange.blockchain.com"===m&&e.startsWith("https://exchange.blockchain.com")}(v)?Object(r.jsx)(d,f(f({href:v},h),{},{ref:t,children:n})):Object(r.jsx)(s.a,{href:v,passHref:!0,children:Object(r.jsx)(d,f(f({},h),{},{ref:t,children:n}))})}));t.a=Object(i.c)(p)},cTJO:function(e,t,n){"use strict";var r=n("zoAU"),o=n("7KCV");t.__esModule=!0,t.default=void 0;var c=o(n("q1tI")),a=n("elyg"),i=n("nOHt"),u=n("vNVm"),s={};function l(e,t,n,r){if(e&&(0,a.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[t+"%"+n+(o?"%"+o:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,n=(0,i.useRouter)(),o=n&&n.pathname||"/",f=c.default.useMemo((function(){var t=(0,a.resolveHref)(o,e.href,!0),n=r(t,2),c=n[0],i=n[1];return{href:c,as:e.as?(0,a.resolveHref)(o,e.as):i||c}}),[o,e.href,e.as]),d=f.href,p=f.as,v=e.children,b=e.replace,h=e.shallow,O=e.scroll,m=e.locale;"string"===typeof v&&(v=c.default.createElement("a",null,v));var y=c.Children.only(v),g=y&&"object"===typeof y&&y.ref,j=(0,u.useIntersection)({rootMargin:"200px"}),w=r(j,2),k=w[0],E=w[1],L=c.default.useCallback((function(e){k(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,k]);(0,c.useEffect)((function(){var e=E&&t&&(0,a.isLocalURL)(d),r="undefined"!==typeof m?m:n&&n.locale,o=s[d+"%"+p+(r?"%"+r:"")];e&&!o&&l(n,d,p,{locale:r})}),[p,d,E,m,t,n]);var M={ref:L,onClick:function(e){y.props&&"function"===typeof y.props.onClick&&y.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,c,i,u){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:c,locale:u,scroll:i}))}(e,n,d,p,b,h,O,m)},onMouseEnter:function(e){(0,a.isLocalURL)(d)&&(y.props&&"function"===typeof y.props.onMouseEnter&&y.props.onMouseEnter(e),l(n,d,p,{priority:!0}))}};if(e.passHref||"a"===y.type&&!("href"in y.props)){var _="undefined"!==typeof m?m:n&&n.locale,C=n&&n.isLocaleDomain&&(0,a.getDomainLocale)(p,_,n&&n.locales,n&&n.domainLocales);M.href=C||(0,a.addBasePath)((0,a.addLocale)(p,_,n&&n.defaultLocale))}return c.default.cloneElement(y,M)};t.default=f},dDsW:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("q1tI"),o=n("2OET"),c=n("N3fz");function a(){var e=r.useContext(o.a);return Object(c.c)(e),e}},dhJC:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,"a",(function(){return r}))},jT3O:function(e,t,n){"use strict";function r(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}n.d(t,"a",(function(){return r}))},kriW:function(e,t,n){"use strict";var r=n("mrSG"),o=n("q1tI"),c=n("dDsW"),a=n("N3fz");function i(e){var t=Object(c.a)(),n=t.formatMessage,a=t.textComponent,i=void 0===a?o.Fragment:a,u=e.id,s=e.description,l=e.defaultMessage,f=e.values,d=e.children,p=e.tagName,v=void 0===p?i:p,b=n({id:u,description:s,defaultMessage:l},f,{ignoreTag:e.ignoreTag});return Array.isArray(b)||(b=[b]),"function"===typeof d?d(b):v?o.createElement.apply(o,Object(r.__spreadArray)([v,null],b)):o.createElement(o.Fragment,null,b)}i.displayName="FormattedMessage";var u=o.memo(i,(function(e,t){var n=e.values,o=Object(r.__rest)(e,["values"]),c=t.values,i=Object(r.__rest)(t,["values"]);return Object(a.d)(c,n)&&Object(a.d)(o,i)}));u.displayName="MemoizedFormattedMessage",t.a=u},mOvS:function(e,t,n){e.exports=n("yLiY")},vNVm:function(e,t,n){"use strict";var r=n("zoAU");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!a,u=(0,o.useRef)(),s=(0,o.useState)(!1),l=r(s,2),f=l[0],d=l[1],p=(0,o.useCallback)((function(e){u.current&&(u.current(),u.current=void 0),n||f||e&&e.tagName&&(u.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=i.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return i.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,c=r.observer,a=r.elements;return a.set(e,t),c.observe(e),function(){a.delete(e),c.unobserve(e),0===a.size&&(c.disconnect(),i.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return(0,o.useEffect)((function(){if(!a&&!f){var e=(0,c.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,c.cancelIdleCallback)(e)}}}),[f]),[p,f]};var o=n("q1tI"),c=n("0G5g"),a="undefined"!==typeof IntersectionObserver;var i=new Map},yLiY:function(e,t,n){"use strict";var r;t.__esModule=!0,t.setConfig=function(e){r=e},t.default=void 0;t.default=function(){return r}}}]);