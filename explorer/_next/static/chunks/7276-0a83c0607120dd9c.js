"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7276],{36337:function(t,e,o){o.d(e,{Z:function(){return lt}});var n=o(53328),r=o(78673);const i=["click","dblclick"],s=["enter","leave"],a=i.concat(s);function d(t,e,o){if(t.listened)switch(e.type){case"mousemove":case"mouseout":!function(t,e){if(!t.moveListened)return;let o;"mousemove"===e.type&&(o=c(t.elements,e));const n=t.hovered;t.hovered=o,function(t,e,o){const{previous:n,element:r}=e;n&&n!==r&&l(n.options.leave||t.listeners.leave,n,o);r&&r!==n&&l(r.options.enter||t.listeners.enter,r,o)}(t,{previous:n,element:o},e)}(t,e);break;case"click":!function(t,e,o){const n=t.listeners,r=c(t.elements,e);if(r){const t=r.options,i=t.dblclick||n.dblclick,s=t.click||n.click;r.clickTimeout?(clearTimeout(r.clickTimeout),delete r.clickTimeout,l(i,r,e)):i?r.clickTimeout=setTimeout((()=>{delete r.clickTimeout,l(s,r,e)}),o.dblClickSpeed):l(s,r,e)}}(t,e,o)}}function l(t,e,o){(0,r.uz)(t,[e.$context,o])}function c(t,e){let o=Number.POSITIVE_INFINITY;return t.filter((t=>t.options.display&&t.inRange(e.x,e.y))).reduce(((t,n)=>{const i=n.getCenterPoint(),s=(0,r.ME)(e,i);return s<o?(t=[n],o=s):s===o&&t.push(n),t}),[]).sort(((t,e)=>t._index-e._index)).slice(0,1)[0]}function h(t,e,o){const n=function(t,e){const o=t.axis,n=t.id,i=o+"ScaleID",s={min:(0,r.Be)(t.min,Number.NEGATIVE_INFINITY),max:(0,r.Be)(t.max,Number.POSITIVE_INFINITY)};for(const r of e)r.scaleID===n?b(r,t,["value","endValue"],s):r[i]===n&&b(r,t,[o+"Min",o+"Max",o+"Value"],s);return s}(e,o);let i=u(e,n,"min","suggestedMin");i=u(e,n,"max","suggestedMax")||i,i&&"function"===typeof e.handleTickRangeOptions&&e.handleTickRangeOptions()}function u(t,e,o,n){if((0,r.KH)(e[o])&&!function(t,e,o){return(0,r.ri)(t[e])||(0,r.ri)(t[o])}(t.options,o,n)){const n=t[o]!==e[o];return t[o]=e[o],n}}function f(t,e){for(const o of["scaleID","xScaleID","yScaleID"])t[o]&&!e[t[o]]&&console.warn(`No scale found with id '${t[o]}' for annotation '${t.id}'`)}function b(t,e,o,n){for(const i of o){const o=t[i];if((0,r.ri)(o)){const t=e.parse(o);n.min=Math.min(n.min,t),n.max=Math.max(n.max,t)}}}const p=(t,e,o)=>Math.min(o,Math.max(e,t));function y(t,e,o){for(const n of Object.keys(t))t[n]=p(t[n],e,o);return t}function x(t,e,{x:o,y:n,width:r,height:i},s){const a=s/2||0;return t>=o-a&&t<=o+r+a&&e>=n-a&&e<=n+i+a}function g(t,e){const{x:o,y:n}=t.getProps(["x","y"],e);return{x:o,y:n}}const w=(t,e)=>e>t||t.length>e.length&&t.substr(0,e.length)===e;const m=t=>"string"===typeof t&&t.endsWith("%"),v=t=>p(parseFloat(t)/100,0,1);function M(t,e){return"start"===e?0:"end"===e?t:m(e)?v(e)*t:t/2}function S(t,e){return"number"===typeof e?e:m(e)?v(e)*t:t}function k(t){return(0,r.Kn)(t)?{x:(0,r.Be)(t.x,"center"),y:(0,r.Be)(t.y,"center")}:{x:t=(0,r.Be)(t,"center"),y:t}}function C(t){return t&&((0,r.ri)(t.xValue)||(0,r.ri)(t.yValue))}const D=new Map;function P(t){return t instanceof Image||t instanceof HTMLCanvasElement}function O(t,e){if(e&&e.borderWidth)return t.lineCap=e.borderCapStyle,t.setLineDash(e.borderDash),t.lineDashOffset=e.borderDashOffset,t.lineJoin=e.borderJoinStyle,t.lineWidth=e.borderWidth,t.strokeStyle=e.borderColor,!0}function I(t,e){t.shadowColor=e.backgroundShadowColor,t.shadowBlur=e.shadowBlur,t.shadowOffsetX=e.shadowOffsetX,t.shadowOffsetY=e.shadowOffsetY}function j(t,e){const o=e.content;if(P(o))return{width:S(o.width,e.width),height:S(o.height,e.height)};const n=(0,r.re)(e.font),i=(0,r.kJ)(o)?o:[o],s=i.join()+n.string+(t._measureText?"-spriting":"");if(!D.has(s)){t.save(),t.font=n.string;const e=i.length;let o=0;for(let n=0;n<e;n++){const e=i[n];o=Math.max(o,t.measureText(e).width)}t.restore();const r=e*n.lineHeight;D.set(s,{width:o,height:r})}return D.get(s)}function W(t,e,o){const{x:n,y:i,width:s,height:a}=e;t.save(),I(t,o);const d=O(t,o);t.fillStyle=o.backgroundColor,t.beginPath(),(0,r.tH)(t,{x:n,y:i,w:s,h:a,radius:y((0,r.kX)((0,r.Be)(o.cornerRadius,o.borderRadius)),0,Math.min(s,a)/2)}),t.closePath(),t.fill(),d&&(t.shadowColor=o.borderShadowColor,t.stroke()),t.restore()}function A(t,e,o){const n=o.content;if(P(n))return void t.drawImage(n,e.x,e.y,e.width,e.height);const i=(0,r.kJ)(n)?n:[n],s=(0,r.re)(o.font),a=s.lineHeight,d=function(t,e){const{x:o,width:n}=t,r=e.textAlign;return"center"===r?o+n/2:"end"===r||"right"===r?o+n:o}(e,o),l=e.y+a/2;t.font=s.string,t.textBaseline="middle",t.textAlign=o.textAlign,t.fillStyle=o.color,i.forEach(((e,o)=>t.fillText(e,d,l+o*a)))}function T(t){const{x:e,y:o,width:n,height:r}=t;return{x:e+n/2,y:o+r/2}}function E(t,e,o){return e="number"===typeof e?e:t.parse(e),(0,r.KH)(e)?t.getPixelForValue(e):o}function R(t,e){if(t){const o=E(t,e.min,e.start),n=E(t,e.max,e.end);return{start:Math.min(o,n),end:Math.max(o,n)}}return{start:e.start,end:e.end}}function Y(t,e){const{chartArea:o,scales:n}=t,r=n[e.xScaleID],i=n[e.yScaleID];let s=o.width/2,a=o.height/2;return r&&(s=E(r,e.xValue,s)),i&&(a=E(i,e.yValue,a)),{x:s,y:a}}function X(t,e){const o=t.scales[e.xScaleID],n=t.scales[e.yScaleID];let{top:r,left:i,bottom:s,right:a}=t.chartArea;if(!o&&!n)return{};const d=R(o,{min:e.xMin,max:e.xMax,start:i,end:a});i=d.start,a=d.end;const l=R(n,{min:e.yMin,max:e.yMax,start:r,end:s});return r=l.start,s=l.end,{x:i,y:r,x2:a,y2:s,width:a-i,height:s-r}}function _(t,e){if(!C(e)){const o=X(t,e),n=T(o);let r=e.radius;return r&&!isNaN(r)||(r=Math.min(o.width,o.height)/2,e.radius=r),{x:n.x+e.xAdjust,y:n.y+e.yAdjust,width:2*r,height:2*r}}return function(t,e){const o=Y(t,e);return{x:o.x+e.xAdjust,y:o.y+e.yAdjust,width:2*e.radius,height:2*e.radius}}(t,e)}class H extends n.W_{inRange(t,e,o){return x(t,e,this.getProps(["x","y","width","height"],o),this.options.borderWidth)}getCenterPoint(t){return T(this.getProps(["x","y","width","height"],t))}draw(t){t.save(),W(t,this,this.options),t.restore()}drawLabel(t){const{x:e,y:o,width:n,height:i,options:s}=this,{label:a,borderWidth:d}=s,l=d/2,c=k(a.position),h=(0,r.oY)(a.padding),u=j(t,a),f={x:V(this,u,c,h),y:L(this,u,c,h),width:u.width,height:u.height};t.save(),t.beginPath(),t.rect(e+l+h.left,o+l+h.top,n-d-h.width,i-d-h.height),t.clip(),A(t,f,a),t.restore()}resolveElementProperties(t,e){return X(t,e)}}function V(t,e,o,n){const{x:r,x2:i,width:s,options:a}=t,{xAdjust:d,borderWidth:l}=a.label;return N({start:r,end:i,size:s},{position:o.x,padding:{start:n.left,end:n.right},adjust:d,borderWidth:l,size:e.width})}function L(t,e,o,n){const{y:r,y2:i,height:s,options:a}=t,{yAdjust:d,borderWidth:l}=a.label;return N({start:r,end:i,size:s},{position:o.y,padding:{start:n.top,end:n.bottom},adjust:d,borderWidth:l,size:e.height})}function N(t,e){const{start:o,end:n}=t,{position:r,padding:{start:i,end:s},adjust:a,borderWidth:d}=e;return o+d/2+a+i+M(n-d-o-i-s-e.size,r)}H.id="boxAnnotation",H.defaults={adjustScaleRange:!0,backgroundShadowColor:"transparent",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderRadius:0,borderShadowColor:"transparent",borderWidth:1,cornerRadius:void 0,display:!0,label:{borderWidth:void 0,color:"black",content:null,drawTime:void 0,enabled:!1,font:{family:void 0,lineHeight:void 0,size:void 0,style:void 0,weight:"bold"},height:void 0,padding:6,position:"center",textAlign:"start",xAdjust:0,yAdjust:0,width:void 0},shadowBlur:0,shadowOffsetX:0,shadowOffsetY:0,xMax:void 0,xMin:void 0,xScaleID:"x",yMax:void 0,yMin:void 0,yScaleID:"y"},H.defaultRoutes={borderColor:"color",backgroundColor:"color"},H.descriptors={label:{_fallback:!0}};const z=(t,e,o)=>({x:t.x+o*(e.x-t.x),y:t.y+o*(e.y-t.y)}),B=(t,e,o)=>z(e,o,Math.abs((t-e.y)/(o.y-e.y))).x,$=(t,e,o)=>z(e,o,Math.abs((t-e.x)/(o.x-e.x))).y,J=t=>t*t,K=.001;function F({x:t,y:e,x2:o,y2:n},{top:r,right:i,bottom:s,left:a}){return!(t<a&&o<a||t>i&&o>i||e<r&&n<r||e>s&&n>s)}function U({x:t,y:e},o,{top:n,right:r,bottom:i,left:s}){return t<s&&(e=$(s,{x:t,y:e},o),t=s),t>r&&(e=$(r,{x:t,y:e},o),t=r),e<n&&(t=B(n,{x:t,y:e},o),e=n),e>i&&(t=B(i,{x:t,y:e},o),e=i),{x:t,y:e}}class Z extends n.W_{intersects(t,e,o=.001,n){const{x:r,y:i,x2:s,y2:a}=this.getProps(["x","y","x2","y2"],n),d=s-r,l=a-i,c=J(d)+J(l),h=0===c?-1:((t-r)*d+(e-i)*l)/c;let u,f;return h<0?(u=r,f=i):h>1?(u=s,f=a):(u=r+h*d,f=i+h*l),J(t-u)+J(e-f)<=o}labelIsVisible(t,e){const o=this.options.label;return!(!o||!o.enabled)&&(!e||F(this.getProps(["x","y","x2","y2"],t),e))}isOnLabel(t,e,o){if(!this.labelIsVisible(o))return!1;const{labelX:n,labelY:r,labelWidth:i,labelHeight:s,labelRotation:a}=this.getProps(["labelX","labelY","labelWidth","labelHeight","labelRotation"],o),{x:d,y:l}=function(t,e,o){const n=Math.cos(o),r=Math.sin(o),i=e.x,s=e.y;return{x:i+n*(t.x-i)-r*(t.y-s),y:s+r*(t.x-i)+n*(t.y-s)}}({x:t,y:e},{x:n,y:r},-a),c=this.options.label.borderWidth/2||0,h=i/2+c,u=s/2+c;return d>=n-h-K&&d<=n+h+K&&l>=r-u-K&&l<=r+u+K}inRange(t,e,o){const n=J(this.options.borderWidth/2);return this.intersects(t,e,n,o)||this.isOnLabel(t,e,o)}getCenterPoint(){return{x:(this.x2+this.x)/2,y:(this.y2+this.y)/2}}draw(t){const{x:e,y:o,x2:n,y2:r,options:i}=this;if(t.save(),!O(t,i))return t.restore();I(t,i);const s=Math.atan2(r-o,n-e),a=Math.sqrt(Math.pow(n-e,2)+Math.pow(r-o,2)),{startOpts:d,endOpts:l,startAdjust:c,endAdjust:h}=function(t){const e=t.options,o=e.arrowHeads&&e.arrowHeads.start,n=e.arrowHeads&&e.arrowHeads.end;return{startOpts:o,endOpts:n,startAdjust:tt(t,o),endAdjust:tt(t,n)}}(this);t.translate(e,o),t.rotate(s),t.beginPath(),t.moveTo(0+c,0),t.lineTo(a-h,0),t.shadowColor=i.borderShadowColor,t.stroke(),et(t,0,c,d),et(t,a,-h,l),t.restore()}drawLabel(t,e){if(!this.labelIsVisible(!1,e))return;const{labelX:o,labelY:n,labelWidth:r,labelHeight:i,labelRotation:s,labelPadding:a,labelTextSize:d,options:{label:l}}=this;t.save(),t.translate(o,n),t.rotate(s);W(t,{x:-r/2,y:-i/2,width:r,height:i},l);A(t,{x:-r/2+a.left+l.borderWidth/2,y:-i/2+a.top+l.borderWidth/2,width:d.width,height:d.height},l),t.restore()}resolveElementProperties(t,e){const o=t.scales[e.scaleID];let n,i,{top:s,left:a,bottom:d,right:l}=t.chartArea;if(o)n=E(o,e.value,NaN),i=E(o,e.endValue,n),o.isHorizontal()?(a=n,l=i):(s=n,d=i);else{const o=t.scales[e.xScaleID],n=t.scales[e.yScaleID];o&&(a=E(o,e.xMin,a),l=E(o,e.xMax,l)),n&&(s=E(n,e.yMin,s),d=E(n,e.yMax,d))}const c=F({x:a,y:s,x2:l,y2:d},t.chartArea)?function(t,e,o){const{x:n,y:r}=U(t,e,o),{x:i,y:s}=U(e,t,o);return{x:n,y:r,x2:i,y2:s,width:Math.abs(i-n),height:Math.abs(s-r)}}({x:a,y:s},{x:l,y:d},t.chartArea):{x:a,y:s,x2:l,y2:d,width:Math.abs(l-a),height:Math.abs(d-s)},h=e.label;return h&&h.content?function(t,e,o){const{padding:n,xPadding:i,yPadding:s,borderWidth:a}=o,d=function(t,e,o){let n=t;(e||o)&&(n={x:e||6,y:o||6});return(0,r.oY)(n)}(n,i,s),l=j(e.ctx,o),c=l.width+d.width+a,h=l.height+d.height+a,u=function(t,e,o,n){const{width:i,height:s,padding:a}=o,{xAdjust:d,yAdjust:l}=e,c={x:t.x,y:t.y},h={x:t.x2,y:t.y2},u="auto"===e.rotation?function(t){const{x:e,y:o,x2:n,y2:i}=t,s=Math.atan2(i-o,n-e);return s>r.PI/2?s-r.PI:s<r.PI/-2?s+r.PI:s}(t):(0,r.Yr)(e.rotation),f=function(t,e,o){const n=Math.cos(o),r=Math.sin(o);return{w:Math.abs(t*n)+Math.abs(e*r),h:Math.abs(t*r)+Math.abs(e*n)}}(i,s,u),b=function(t,e,o,n){let r;const i=function(t,e){const{x:o,x2:n,y:r,y2:i}=t,s=Math.min(r,i)-e.top,a=Math.min(o,n)-e.left,d=e.bottom-Math.max(r,i),l=e.right-Math.max(o,n);return{x:Math.min(a,l),y:Math.min(s,d),dx:a<=l?1:-1,dy:s<=d?1:-1}}(t,n);r="start"===e.position?Q({w:t.x2-t.x,h:t.y2-t.y},o,e,i):"end"===e.position?1-Q({w:t.x-t.x2,h:t.y-t.y2},o,e,i):M(1,e.position);return r}(t,e,{labelSize:f,padding:a},n),p=z(c,h,b),y={size:f.w,min:n.left,max:n.right,padding:a.left},x={size:f.h,min:n.top,max:n.bottom,padding:a.top};return{x:G(p.x,y)+d,y:G(p.y,x)+l,width:i,height:s,rotation:u}}(t,o,{width:c,height:h,padding:d},e.chartArea);return t.labelX=u.x,t.labelY=u.y,t.labelWidth=u.width,t.labelHeight=u.height,t.labelRotation=u.rotation,t.labelPadding=d,t.labelTextSize=l,t}(c,t,h):c}}Z.id="lineAnnotation";const q={backgroundColor:void 0,backgroundShadowColor:void 0,borderColor:void 0,borderDash:void 0,borderDashOffset:void 0,borderShadowColor:void 0,borderWidth:void 0,enabled:void 0,fill:void 0,length:void 0,shadowBlur:void 0,shadowOffsetX:void 0,shadowOffsetY:void 0,width:void 0};function Q(t,e,o,n){const{labelSize:r,padding:i}=e,s=t.w*n.dx,a=t.h*n.dy,d=s>0&&(r.w/2+i.left-n.x)/s,l=a>0&&(r.h/2+i.top-n.y)/a;return p(Math.max(d,l),0,.25)}function G(t,e){const{size:o,min:n,max:r,padding:i}=e,s=o/2;return o>r-n?(r+n)/2:(n>=t-i-s&&(t=n+i+s),r<=t+i+s&&(t=r-i-s),t)}function tt(t,e){if(!e||!e.enabled)return 0;const{length:o,width:n}=e,r=t.options.borderWidth/2,i={x:o,y:n+r},s={x:0,y:r};return Math.abs(B(0,i,s))}function et(t,e,o,n){if(!n||!n.enabled)return;const{length:r,width:i,fill:s,backgroundColor:a,borderColor:d}=n,l=Math.abs(e-r)+o;t.beginPath(),I(t,n),O(t,n),t.moveTo(l,-i),t.lineTo(e+o,0),t.lineTo(l,i),!0===s?(t.fillStyle=a||d,t.closePath(),t.fill(),t.shadowColor="transparent"):t.shadowColor=n.borderShadowColor,t.stroke()}Z.defaults={adjustScaleRange:!0,arrowHeads:{enabled:!1,end:Object.assign({},q),fill:!1,length:12,start:Object.assign({},q),width:6},borderDash:[],borderDashOffset:0,borderShadowColor:"transparent",borderWidth:2,display:!0,endValue:void 0,label:{backgroundColor:"rgba(0,0,0,0.8)",backgroundShadowColor:"transparent",borderCapStyle:"butt",borderColor:"black",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderRadius:6,borderShadowColor:"transparent",borderWidth:0,color:"#fff",content:null,cornerRadius:void 0,drawTime:void 0,enabled:!1,font:{family:void 0,lineHeight:void 0,size:void 0,style:void 0,weight:"bold"},height:void 0,padding:6,position:"center",rotation:0,shadowBlur:0,shadowOffsetX:0,shadowOffsetY:0,textAlign:"center",width:void 0,xAdjust:0,xPadding:void 0,yAdjust:0,yPadding:void 0},scaleID:void 0,shadowBlur:0,shadowOffsetX:0,shadowOffsetY:0,value:void 0,xMax:void 0,xMin:void 0,xScaleID:"x",yMax:void 0,yMin:void 0,yScaleID:"y"},Z.descriptors={arrowHeads:{start:{_fallback:!0},end:{_fallback:!0},_fallback:!0}},Z.defaultRoutes={borderColor:"color"};class ot extends n.W_{inRange(t,e,o){return function(t,e,o,n){const{width:i,height:s}=e,a=e.getCenterPoint(!0),d=i/2,l=s/2;if(d<=0||l<=0)return!1;const c=(0,r.Yr)(o||0),h=n/2||0,u=Math.cos(c),f=Math.sin(c),b=Math.pow(u*(t.x-a.x)+f*(t.y-a.y),2),p=Math.pow(f*(t.x-a.x)-u*(t.y-a.y),2);return b/Math.pow(d+h,2)+p/Math.pow(l+h,2)<=1.0001}({x:t,y:e},this.getProps(["width","height"],o),this.options.rotation,this.options.borderWidth)}getCenterPoint(t){return T(this.getProps(["x","y","width","height"],t))}draw(t){const{width:e,height:o,options:n}=this,i=this.getCenterPoint();t.save(),t.translate(i.x,i.y),n.rotation&&t.rotate((0,r.Yr)(n.rotation)),I(t,this.options),t.beginPath(),t.fillStyle=n.backgroundColor;const s=O(t,n);t.ellipse(0,0,o/2,e/2,r.PI/2,0,2*r.PI),t.fill(),s&&(t.shadowColor=n.borderShadowColor,t.stroke()),t.restore()}resolveElementProperties(t,e){return X(t,e)}}ot.id="ellipseAnnotation",ot.defaults={adjustScaleRange:!0,backgroundShadowColor:"transparent",borderDash:[],borderDashOffset:0,borderShadowColor:"transparent",borderWidth:1,display:!0,rotation:0,shadowBlur:0,shadowOffsetX:0,shadowOffsetY:0,xMax:void 0,xMin:void 0,xScaleID:"x",yMax:void 0,yMin:void 0,yScaleID:"y"},ot.defaultRoutes={borderColor:"color",backgroundColor:"color"};class nt extends n.W_{inRange(t,e,o){return x(t,e,this.getProps(["x","y","width","height"],o),this.options.borderWidth)}getCenterPoint(t){return T(this.getProps(["x","y","width","height"],t))}draw(t){if(!this.options.content)return;const{labelX:e,labelY:o,labelWidth:n,labelHeight:r,options:i}=this;!function(t,e){const{pointX:o,pointY:n,calloutPosition:r,options:i}=e;if(!r)return;const s=i.callout;t.save(),t.beginPath();if(!O(t,s))return t.restore();const{separatorStart:a,separatorEnd:d}=function(t,e){const{x:o,y:n,width:r,height:i}=t,s=function(t,e){const{width:o,height:n,options:r}=t,i=r.callout.margin+r.borderWidth/2;if("right"===e)return o+i;if("bottom"===e)return n+i;return-i}(t,e);let a,d;"left"===e||"right"===e?(a={x:o+s,y:n},d={x:a.x,y:a.y+i}):(a={x:o,y:n+s},d={x:a.x+r,y:a.y});return{separatorStart:a,separatorEnd:d}}(e,r),{sideStart:l,sideEnd:c}=function(t,e,o){const{y:n,width:r,height:i,options:s}=t,a=s.callout.start,d=function(t,e){const o=e.side;if("left"===t||"top"===t)return-o;return o}(e,s.callout);let l,c;"left"===e||"right"===e?(l={x:o.x,y:n+S(i,a)},c={x:l.x+d,y:l.y}):(l={x:o.x+S(r,a),y:o.y},c={x:l.x,y:l.y+d});return{sideStart:l,sideEnd:c}}(e,r,a);(s.margin>0||0===i.borderWidth)&&(t.moveTo(a.x,a.y),t.lineTo(d.x,d.y));t.moveTo(l.x,l.y),t.lineTo(c.x,c.y),t.lineTo(o,n),t.stroke(),t.restore()}(t,this),this.boxVisible&&W(t,this,i),A(t,{x:e,y:o,width:n,height:r},i)}resolveElementProperties(t,e){const o=C(e)?Y(t,e):T(X(t,e)),n=(0,r.oY)(e.padding),i=j(t.ctx,e),s=function(t,e,o,n){const r=e.width+n.width+o.borderWidth,i=e.height+n.height+o.borderWidth,s=k(o.position);return{x:rt(t.x,r,o.xAdjust,s.x),y:rt(t.y,i,o.yAdjust,s.y),width:r,height:i}}(o,i,e,n),a=(0,r.$_)(e.backgroundColor),d={boxVisible:e.borderWidth>0||a&&a.valid&&a.rgb.a>0,pointX:o.x,pointY:o.y,...s,labelX:s.x+n.left+e.borderWidth/2,labelY:s.y+n.top+e.borderWidth/2,labelWidth:i.width,labelHeight:i.height};return d.calloutPosition=e.callout.enabled&&function(t,e){const o=e.position;if("left"===o||"right"===o||"top"===o||"bottom"===o)return o;return function(t,e){const{x:o,y:n,width:r,height:i,pointX:s,pointY:a}=t,{margin:d,side:l}=e,c=d+l;if(s<o-c)return"left";if(s>o+r+c)return"right";if(a<n-c)return"top";if(a>n+i+c)return"bottom"}(t,e)}(d,e.callout),d}}function rt(t,e,o=0,n){return t-M(e,n)+o}nt.id="labelAnnotation",nt.defaults={adjustScaleRange:!0,backgroundColor:"transparent",backgroundShadowColor:"transparent",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderRadius:0,borderShadowColor:"transparent",borderWidth:0,callout:{borderCapStyle:"butt",borderColor:void 0,borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:1,enabled:!1,margin:5,position:"auto",side:5,start:"50%"},color:"black",content:null,display:!0,font:{family:void 0,lineHeight:void 0,size:void 0,style:void 0,weight:void 0},height:void 0,padding:6,position:"center",shadowBlur:0,shadowOffsetX:0,shadowOffsetY:0,textAlign:"center",width:void 0,xAdjust:0,xMax:void 0,xMin:void 0,xScaleID:"x",xValue:void 0,yAdjust:0,yMax:void 0,yMin:void 0,yScaleID:"y",yValue:void 0},nt.defaultRoutes={borderColor:"color"};class it extends n.W_{inRange(t,e,o){const{width:n}=this.getProps(["width"],o);return function(t,e,o,n){if(!t||!e||o<=0)return!1;const r=n/2||0;return Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2)<=Math.pow(o+r,2)}({x:t,y:e},this.getCenterPoint(o),n/2,this.options.borderWidth)}getCenterPoint(t){return g(this,t)}draw(t){const e=this.options,o=e.borderWidth;if(e.radius<.1)return;t.save(),t.fillStyle=e.backgroundColor,I(t,e);const n=O(t,e);e.borderWidth=0,(0,r.Qd)(t,e,this.x,this.y),n&&!P(e.pointStyle)&&(t.shadowColor=e.borderShadowColor,t.stroke()),t.restore(),e.borderWidth=o}resolveElementProperties(t,e){return _(t,e)}}it.id="pointAnnotation",it.defaults={adjustScaleRange:!0,backgroundShadowColor:"transparent",borderDash:[],borderDashOffset:0,borderShadowColor:"transparent",borderWidth:1,display:!0,pointStyle:"circle",radius:10,rotation:0,shadowBlur:0,shadowOffsetX:0,shadowOffsetY:0,xAdjust:0,xMax:void 0,xMin:void 0,xScaleID:"x",xValue:void 0,yAdjust:0,yMax:void 0,yMin:void 0,yScaleID:"y",yValue:void 0},it.defaultRoutes={borderColor:"color",backgroundColor:"color"};class st extends n.W_{inRange(t,e,o){return this.options.radius>=.1&&this.elements.length>1&&function(t,e,o,n){let r=!1,i=t[t.length-1].getProps(["bX","bY"],n);for(const s of t){const t=s.getProps(["bX","bY"],n);t.bY>o!==i.bY>o&&e<(i.bX-t.bX)*(o-t.bY)/(i.bY-t.bY)+t.bX&&(r=!r),i=t}return r}(this.elements,t,e,o)}getCenterPoint(t){return g(this,t)}draw(t){const{elements:e,options:o}=this;t.save(),t.beginPath(),t.fillStyle=o.backgroundColor,I(t,o);const n=O(t,o);let r=!0;for(const i of e)r?(t.moveTo(i.x,i.y),r=!1):t.lineTo(i.x,i.y);t.closePath(),t.fill(),n&&(t.shadowColor=o.borderShadowColor,t.stroke()),t.restore()}resolveElementProperties(t,e){const{x:o,y:n,width:i,height:s}=_(t,e),{sides:a,radius:d,rotation:l,borderWidth:c}=e,h=c/2,u=[],f=2*r.PI/a;let b=l*r.eT;for(let r=0;r<a;r++,b+=f){const t=Math.sin(b),e=Math.cos(b);u.push({type:"point",optionScope:"point",properties:{x:o+t*d,y:n-e*d,bX:o+t*(d+h),bY:n-e*(d+h)}})}return{x:o,y:n,width:i,height:s,elements:u,initProperties:{x:o,y:n}}}}st.id="polygonAnnotation",st.defaults={adjustScaleRange:!0,backgroundShadowColor:"transparent",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderShadowColor:"transparent",borderWidth:1,display:!0,point:{radius:0},radius:10,rotation:0,shadowBlur:0,shadowOffsetX:0,shadowOffsetY:0,sides:3,xAdjust:0,xMax:void 0,xMin:void 0,xScaleID:"x",xValue:void 0,yAdjust:0,yMax:void 0,yMin:void 0,yScaleID:"y",yValue:void 0},st.defaultRoutes={borderColor:"color",backgroundColor:"color"};const at={box:H,ellipse:ot,label:nt,line:Z,point:it,polygon:st};Object.keys(at).forEach((t=>{n.ce.describe(`elements.${at[t].id}`,{_fallback:"plugins.annotation"})}));const dt=new Map;var lt={id:"annotation",version:"1.3.0",afterRegister(){n.kL.register(at),function(t,e,o,n=!0){const r=o.split(".");let i=0;for(const s of e.split(".")){const a=r[i++];if(parseInt(s,10)<parseInt(a,10))break;if(w(a,s)){if(n)throw new Error(`${t} v${o} is not supported. v${e} or newer is required.`);return!1}}return!0}("chart.js","3.7",n.kL.version,!1)||(console.warn("chartjs-plugin-annotation has known issues with chart.js versions prior to 3.7, please consider upgrading."),n.kL.defaults.set("elements.lineAnnotation",{callout:{},font:{},padding:6}))},afterUnregister(){n.kL.unregister(at)},beforeInit(t){dt.set(t,{annotations:[],elements:[],visibleElements:[],listeners:{},listened:!1,moveListened:!1})},beforeUpdate(t,e,o){const n=dt.get(t).annotations=[];let i=o.annotations;(0,r.Kn)(i)?Object.keys(i).forEach((t=>{const e=i[t];(0,r.Kn)(e)&&(e.id=t,n.push(e))})):(0,r.kJ)(i)&&n.push(...i),function(t,e){for(const o of t)f(o,e)}(n,t.scales)},afterDataLimits(t,e){const o=dt.get(t);h(0,e.scale,o.annotations.filter((t=>t.display&&t.adjustScaleRange)))},afterUpdate(t,e,o){const d=dt.get(t);!function(t,e,o){e.listened=!1,e.moveListened=!1,a.forEach((t=>{"function"===typeof o[t]?(e.listened=!0,e.listeners[t]=o[t]):(0,r.ri)(e.listeners[t])&&delete e.listeners[t]})),s.forEach((t=>{"function"===typeof o[t]&&(e.moveListened=!0)})),e.listened&&e.moveListened||e.annotations.forEach((t=>{e.listened||i.forEach((o=>{"function"===typeof t[o]&&(e.listened=!0)})),e.moveListened||s.forEach((o=>{"function"===typeof t[o]&&(e.listened=!0,e.moveListened=!0)}))}))}(0,d,o),function(t,e,o,i){const s=function(t,e,o){if("reset"===o||"none"===o||"resize"===o)return ct;return new n.FK(t,e)}(t,o.animations,i),a=e.annotations,d=function(t,e){const o=e.length,n=t.length;if(n<o){const e=o-n;t.splice(n,0,...new Array(e))}else n>o&&t.splice(o,n-o);return t}(e.elements,a);for(let n=0;n<a.length;n++){const e=a[n],o=ft(d,n,e.type),i=e.setContext(yt(t,o,e)),l=o.resolveElementProperties(t,i);l.skip=isNaN(l.x)||isNaN(l.y),"elements"in l&&(ut(o,l,i,s),delete l.elements),(0,r.ri)(o.x)||Object.assign(o,l),l.options=bt(i),s.update(o,l)}}(t,d,o,e.mode),d.visibleElements=d.elements.filter((t=>!t.skip&&t.options.display))},beforeDatasetsDraw(t,e,o){xt(t,"beforeDatasetsDraw",o.clip)},afterDatasetsDraw(t,e,o){xt(t,"afterDatasetsDraw",o.clip)},beforeDraw(t,e,o){xt(t,"beforeDraw",o.clip)},afterDraw(t,e,o){xt(t,"afterDraw",o.clip)},beforeEvent(t,e,o){d(dt.get(t),e.event,o)},destroy(t){dt.delete(t)},_getState:t=>dt.get(t),defaults:{animations:{numbers:{properties:["x","y","x2","y2","width","height","pointX","pointY","labelX","labelY","labelWidth","labelHeight","radius"],type:"number"}},clip:!0,dblClickSpeed:350,drawTime:"afterDatasetsDraw",label:{drawTime:null}},descriptors:{_indexable:!1,_scriptable:t=>!a.includes(t),annotations:{_allKeys:!1,_fallback:(t,e)=>`elements.${at[ht(e.type)].id}`}},additionalOptionScopes:[""]};const ct={update:Object.assign};function ht(t="line"){return at[t]?t:(console.warn(`Unknown annotation type: '${t}', defaulting to 'line'`),"line")}function ut(t,{elements:e,initProperties:o},n,r){const i=t.elements||(t.elements=[]);i.length=e.length;for(let s=0;s<e.length;s++){const t=e[s],a=t.properties,d=ft(i,s,t.type,o),l=n[t.optionScope].override(t);a.options=bt(l),r.update(d,a)}}function ft(t,e,o,n){const i=at[ht(o)];let s=t[e];return s&&s instanceof i||(s=t[e]=new i,(0,r.Kn)(n)&&Object.assign(s,n)),s}function bt(t){const e=at[ht(t.type)],o={};o.id=t.id,o.type=t.type,o.drawTime=t.drawTime,Object.assign(o,pt(t,e.defaults),pt(t,e.defaultRoutes));for(const n of a)o[n]=t[n];return o}function pt(t,e){const o={};for(const n of Object.keys(e)){const i=e[n],s=t[n];o[n]=(0,r.Kn)(i)?pt(s,i):s}return o}function yt(t,e,o){return e.$context||(e.$context=Object.assign(Object.create(t.getContext()),{element:e,id:o.id,type:"annotation"}))}function xt(t,e,o){const{ctx:n,chartArea:i}=t,{visibleElements:s}=dt.get(t);o&&(0,r.i7)(n,i),gt(n,s,e),function(t,e,o){for(const n of e)(0,r.kJ)(n.elements)&&gt(t,n.elements,o)}(n,s,e),o&&(0,r.p2)(n),s.forEach((t=>{if(!("drawLabel"in t))return;const o=t.options.label;o&&o.enabled&&o.content&&(o.drawTime||t.options.drawTime)===e&&t.drawLabel(n,i)}))}function gt(t,e,o){for(const n of e)n.options.drawTime===o&&n.draw(t)}},88598:function(t,e,o){o.d(e,{$Q:function(){return f},$I:function(){return b},x1:function(){return u},by:function(){return p}});var n=o(67294),r=o(53328);function i(t,e){"function"===typeof t?t(e):t&&(t.current=e)}function s(t,e){t.labels=e}function a(t,e,o="label"){const n=[];t.datasets=e.map((e=>{const r=t.datasets.find((t=>t[o]===e[o]));return r&&e.data&&!n.includes(r)?(n.push(r),Object.assign(r,e),r):{...e}}))}function d(t,e="label"){const o={labels:[],datasets:[]};return s(o,t.labels),a(o,t.datasets,e),o}function l({height:t=150,width:e=300,redraw:o=!1,datasetIdKey:l,type:c,data:h,options:u,plugins:f=[],fallbackContent:b,...p},y){const x=(0,n.useRef)(null),g=(0,n.useRef)(),w=()=>{x.current&&(g.current=new r.kL(x.current,{type:c,data:d(h,l),options:u,plugins:f}),i(y,g.current))},m=()=>{i(y,null),g.current&&(g.current.destroy(),g.current=null)};return(0,n.useEffect)((()=>{var t,e;!o&&g.current&&u&&(t=g.current,e=u,t.options={...e})}),[o,u]),(0,n.useEffect)((()=>{!o&&g.current&&s(g.current.config.data,h.labels)}),[o,h.labels]),(0,n.useEffect)((()=>{!o&&g.current&&h.datasets&&a(g.current.config.data,h.datasets,l)}),[o,h.datasets]),(0,n.useEffect)((()=>{g.current&&(o?(m(),setTimeout(w)):g.current.update())}),[o,u,h.labels,h.datasets]),(0,n.useEffect)((()=>(w(),()=>m())),[]),n.createElement("canvas",Object.assign({ref:x,role:"img",height:t,width:e},p),b)}const c=(0,n.forwardRef)(l);function h(t,e){return r.kL.register(e),(0,n.forwardRef)(((e,o)=>n.createElement(c,Object.assign({},e,{ref:o,type:t}))))}const u=h("line",r.ST),f=h("bar",r.vn),b=h("doughnut",r.jI),p=h("pie",r.tt)},92777:function(t,e,o){function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}o.d(e,{Z:function(){return n}})},82262:function(t,e,o){function n(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function r(t,e,o){return e&&n(t.prototype,e),o&&n(t,o),t}o.d(e,{Z:function(){return r}})}}]);