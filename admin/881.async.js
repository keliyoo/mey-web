(self.webpackChunk=self.webpackChunk||[]).push([[881],{90327:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var o=n(80284),r=n(93236),l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"},i=n(95711),a=function(e,t){return r.createElement(i.Z,(0,o.Z)({},e,{ref:t,icon:l}))};var c=r.forwardRef(a)},77379:function(e,t,n){"use strict";n.d(t,{N:function(){return o}});const o=e=>({color:e.colorLink,textDecoration:"none",outline:"none",cursor:"pointer",transition:`color ${e.motionDurationSlow}`,"&:focus, &:hover":{color:e.colorLinkHover},"&:active":{color:e.colorLinkActive}})},14881:function(e,t,n){"use strict";n.d(t,{Z:function(){return Ee}});var o=n(93236),r=n(90327),l=n(82187),i=n.n(l),a=n(99182),c=n(35646),s=n(48469),u=n(57804),d=n(57706),p=n(97751),f=n(87957),m=n(97389),g=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n};const b={border:0,background:"transparent",padding:0,lineHeight:"inherit",display:"inline-block"};var y=o.forwardRef(((e,t)=>{const{style:n,noStyle:r,disabled:l,tabIndex:i=0}=e,a=g(e,["style","noStyle","disabled","tabIndex"]);let c={};return r||(c=Object.assign({},b)),l&&(c.pointerEvents="none"),c=Object.assign(Object.assign({},c),n),o.createElement("div",Object.assign({role:"button",tabIndex:i,ref:t},a,{onKeyDown:e=>{const{keyCode:t}=e;t===m.Z.ENTER&&e.preventDefault()},onKeyUp:t=>{const{keyCode:n}=t,{onClick:o}=e;n===m.Z.ENTER&&o&&o()},style:c}))})),v=n(99789),h=n(3734),x=n(25301),O=n(80284),E={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"}}]},name:"enter",theme:"outlined"},w=n(95711),S=function(e,t){return o.createElement(w.Z,(0,O.Z)({},e,{ref:t,icon:E}))};var k=o.forwardRef(S),C=n(9400),j=n(60955),$=n(77379),R=n(13548),D=n(22601),I=n(51903);const T=e=>{const t={};return[1,2,3,4,5].forEach((n=>{t[`\n      h${n}&,\n      div&-h${n},\n      div&-h${n} > textarea,\n      h${n}\n    `]=((e,t,n,o)=>{const{titleMarginBottom:r,fontWeightStrong:l}=o;return{marginBottom:r,color:n,fontWeight:l,fontSize:e,lineHeight:t}})(e[`fontSizeHeading${n}`],e[`lineHeightHeading${n}`],e.colorTextHeading,e)})),t},Z=e=>{const{componentCls:t}=e;return{"a&, a":Object.assign(Object.assign({},(0,$.N)(e)),{textDecoration:e.linkDecoration,"&:active, &:hover":{textDecoration:e.linkHoverDecoration},[`&[disabled], &${t}-disabled`]:{color:e.colorTextDisabled,cursor:"not-allowed","&:active, &:hover":{color:e.colorTextDisabled},"&:active":{pointerEvents:"none"}}})}},P=e=>({code:{margin:"0 0.2em",paddingInline:"0.4em",paddingBlock:"0.2em 0.1em",fontSize:"85%",fontFamily:e.fontFamilyCode,background:"rgba(150, 150, 150, 0.1)",border:"1px solid rgba(100, 100, 100, 0.2)",borderRadius:3},kbd:{margin:"0 0.2em",paddingInline:"0.4em",paddingBlock:"0.15em 0.1em",fontSize:"90%",fontFamily:e.fontFamilyCode,background:"rgba(150, 150, 150, 0.06)",border:"1px solid rgba(100, 100, 100, 0.2)",borderBottomWidth:2,borderRadius:3},mark:{padding:0,backgroundColor:D.gold[2]},"u, ins":{textDecoration:"underline",textDecorationSkipInk:"auto"},"s, del":{textDecoration:"line-through"},strong:{fontWeight:600},"ul, ol":{marginInline:0,marginBlock:"0 1em",padding:0,li:{marginInline:"20px 0",marginBlock:0,paddingInline:"4px 0",paddingBlock:0}},ul:{listStyleType:"circle",ul:{listStyleType:"disc"}},ol:{listStyleType:"decimal"},"pre, blockquote":{margin:"1em 0"},pre:{padding:"0.4em 0.6em",whiteSpace:"pre-wrap",wordWrap:"break-word",background:"rgba(150, 150, 150, 0.1)",border:"1px solid rgba(100, 100, 100, 0.2)",borderRadius:3,fontFamily:e.fontFamilyCode,code:{display:"inline",margin:0,padding:0,fontSize:"inherit",fontFamily:"inherit",background:"transparent",border:0}},blockquote:{paddingInline:"0.6em 0",paddingBlock:0,borderInlineStart:"4px solid rgba(100, 100, 100, 0.2)",opacity:.85}}),H=e=>{const{componentCls:t,paddingSM:n}=e,o=n;return{"&-edit-content":{position:"relative","div&":{insetInlineStart:e.calc(e.paddingSM).mul(-1).equal(),marginTop:e.calc(o).mul(-1).equal(),marginBottom:`calc(1em - ${(0,I.bf)(o)})`},[`${t}-edit-content-confirm`]:{position:"absolute",insetInlineEnd:e.calc(e.marginXS).add(2).equal(),insetBlockEnd:e.marginXS,color:e.colorTextDescription,fontWeight:"normal",fontSize:e.fontSize,fontStyle:"normal",pointerEvents:"none"},textarea:{margin:"0!important",MozTransition:"none",height:"1em"}}}},N=e=>({[`${e.componentCls}-copy-success`]:{"\n    &,\n    &:hover,\n    &:focus":{color:e.colorSuccess}},[`${e.componentCls}-copy-icon-only`]:{marginInlineStart:0}}),M=e=>{const{componentCls:t,titleMarginTop:n}=e;return{[t]:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({color:e.colorText,wordBreak:"break-word",lineHeight:e.lineHeight,[`&${t}-secondary`]:{color:e.colorTextDescription},[`&${t}-success`]:{color:e.colorSuccess},[`&${t}-warning`]:{color:e.colorWarning},[`&${t}-danger`]:{color:e.colorError,"a&:active, a&:focus":{color:e.colorErrorActive},"a&:hover":{color:e.colorErrorHover}},[`&${t}-disabled`]:{color:e.colorTextDisabled,cursor:"not-allowed",userSelect:"none"},"\n        div&,\n        p\n      ":{marginBottom:"1em"}},T(e)),{[`\n      & + h1${t},\n      & + h2${t},\n      & + h3${t},\n      & + h4${t},\n      & + h5${t}\n      `]:{marginTop:n},"\n      div,\n      ul,\n      li,\n      p,\n      h1,\n      h2,\n      h3,\n      h4,\n      h5":{"\n        + h1,\n        + h2,\n        + h3,\n        + h4,\n        + h5\n        ":{marginTop:n}}}),P(e)),Z(e)),{[`\n        ${t}-expand,\n        ${t}-collapse,\n        ${t}-edit,\n        ${t}-copy\n      `]:Object.assign(Object.assign({},(0,$.N)(e)),{marginInlineStart:e.marginXXS})}),H(e)),N(e)),{"\n  a&-ellipsis,\n  span&-ellipsis\n  ":{display:"inline-block",maxWidth:"100%"},"&-single-line":{whiteSpace:"nowrap"},"&-ellipsis-single-line":{overflow:"hidden",textOverflow:"ellipsis","a&, span&":{verticalAlign:"bottom"},"> code":{paddingBlock:0,maxWidth:"calc(100% - 1.2em)",display:"inline-block",overflow:"hidden",textOverflow:"ellipsis",verticalAlign:"bottom",boxSizing:"content-box"}},"&-ellipsis-multiple-line":{display:"-webkit-box",overflow:"hidden",WebkitLineClamp:3,WebkitBoxOrient:"vertical"}}),{"&-rtl":{direction:"rtl"}})}};var z=(0,R.I$)("Typography",(e=>[M(e)]),(()=>({titleMarginTop:"1.2em",titleMarginBottom:"0.5em"})));var L=e=>{const{prefixCls:t,"aria-label":n,className:r,style:l,direction:a,maxLength:c,autoSize:s=!0,value:u,onSave:d,onCancel:p,onEnd:f,component:g,enterIcon:b=o.createElement(k,null)}=e,y=o.useRef(null),v=o.useRef(!1),h=o.useRef(),[x,O]=o.useState(u);o.useEffect((()=>{O(u)}),[u]),o.useEffect((()=>{if(y.current&&y.current.resizableTextArea){const{textArea:e}=y.current.resizableTextArea;e.focus();const{length:t}=e.value;e.setSelectionRange(t,t)}}),[]);const E=()=>{d(x.trim())},w=g?`${t}-${g}`:"",[S,$,R]=z(t),D=i()(t,`${t}-edit-content`,{[`${t}-rtl`]:"rtl"===a},r,w,$,R);return S(o.createElement("div",{className:D,style:l},o.createElement(j.Z,{ref:y,maxLength:c,value:x,onChange:e=>{let{target:t}=e;O(t.value.replace(/[\n\r]/g,""))},onKeyDown:e=>{let{keyCode:t}=e;v.current||(h.current=t)},onKeyUp:e=>{let{keyCode:t,ctrlKey:n,altKey:o,metaKey:r,shiftKey:l}=e;h.current!==t||v.current||n||o||r||l||(t===m.Z.ENTER?(E(),null==f||f()):t===m.Z.ESC&&p())},onCompositionStart:()=>{v.current=!0},onCompositionEnd:()=>{v.current=!1},onBlur:()=>{E()},"aria-label":n,rows:1,autoSize:s}),null!==b?(0,C.Tm)(b,{className:`${t}-edit-content-confirm`}):null))},A=n(874),B=n.n(A),W=n(10011),F=function(e,t,n,o){return new(n||(n=Promise))((function(r,l){function i(e){try{c(o.next(e))}catch(e){l(e)}}function a(e){try{c(o.throw(e))}catch(e){l(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}c((o=o.apply(e,t||[])).next())}))};var K=e=>{let{copyConfig:t,children:n}=e;const[r,l]=o.useState(!1),[i,a]=o.useState(!1),c=o.useRef(null),s=()=>{c.current&&clearTimeout(c.current)},u={};t.format&&(u.format=t.format),o.useEffect((()=>s),[]);return{copied:r,copyLoading:i,onClick:(0,W.zX)((e=>F(void 0,void 0,void 0,(function*(){var o;null==e||e.preventDefault(),null==e||e.stopPropagation(),a(!0);try{const r="function"==typeof t.text?yield t.text():t.text;B()(r||String(n)||"",u),a(!1),l(!0),s(),c.current=setTimeout((()=>{l(!1)}),3e3),null===(o=t.onCopy)||void 0===o||o.call(t,e)}catch(e){throw a(!1),e}}))))}};function U(e,t){return o.useMemo((()=>{const n=!!e;return[n,Object.assign(Object.assign({},t),n&&"object"==typeof e?e:null)]}),[e])}var X=(e,t)=>{const n=o.useRef(!1);o.useEffect((()=>{n.current?e():n.current=!0}),t)};var q=e=>{const t=(0,o.useRef)();return(0,o.useEffect)((()=>{t.current=e})),t.current},G=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n};const _=o.forwardRef(((e,t)=>{const{prefixCls:n,component:r="article",className:l,rootClassName:a,setContentRef:c,children:s,direction:u,style:d}=e,f=G(e,["prefixCls","component","className","rootClassName","setContentRef","children","direction","style"]),{getPrefixCls:m,direction:g,typography:b}=o.useContext(v.E_),y=null!=u?u:g;let h=t;c&&(h=(0,p.sQ)(t,c));const x=m("typography",n),[O,E,w]=z(x),S=i()(x,null==b?void 0:b.className,{[`${x}-rtl`]:"rtl"===y},l,a,E,w),k=Object.assign(Object.assign({},null==b?void 0:b.style),d);return O(o.createElement(r,Object.assign({className:S,style:k,ref:h},f),s))}));var Q=_,V=n(16466),J=n(91626),Y=n(37185);function ee(e){return!1===e?[!1,!1]:Array.isArray(e)?e:[e]}function te(e,t,n){return!0===e||void 0===e?t:e||n&&t}var ne=e=>{const{prefixCls:t,copied:n,locale:r,iconOnly:l,tooltips:a,icon:c,loading:s,tabIndex:u,onCopy:d}=e,p=ee(a),f=ee(c),{copied:m,copy:g}=null!=r?r:{},b=n?te(p[1],m):te(p[0],g),v="string"==typeof b?b:n?m:g;return o.createElement(x.Z,{key:"copy",title:b},o.createElement(y,{className:i()(`${t}-copy`,{[`${t}-copy-success`]:n,[`${t}-copy-icon-only`]:l}),onClick:d,"aria-label":v,tabIndex:u},n?te(f[1],o.createElement(V.Z,null),!0):te(f[0],s?o.createElement(Y.Z,null):o.createElement(J.Z,null),!0)))},oe=n(6399);const re=o.forwardRef(((e,t)=>{let{style:n,children:r}=e;const l=o.useRef(null);return o.useImperativeHandle(t,(()=>({isExceed:()=>{const e=l.current;return e.scrollHeight>e.clientHeight},getHeight:()=>l.current.clientHeight}))),o.createElement("span",{"aria-hidden":!0,ref:l,style:Object.assign({position:"fixed",display:"block",left:0,top:0,pointerEvents:"none",backgroundColor:"rgba(255, 0, 0, 0.65)"},n)},r)}));function le(e){const t=typeof e;return"string"===t||"number"===t}function ie(e,t){let n=0;const o=[];for(let r=0;r<e.length;r+=1){if(n===t)return o;const l=e[r],i=n+(le(l)?String(l).length:1);if(i>t){const e=t-n;return o.push(String(l).slice(0,e)),o}o.push(l),n=i}return e}const ae={display:"-webkit-box",overflow:"hidden",WebkitBoxOrient:"vertical"};function ce(e){const{enableMeasure:t,width:n,text:r,children:l,rows:i,expanded:a,miscDeps:u,onEllipsis:d}=e,p=o.useMemo((()=>(0,c.Z)(r)),[r]),f=o.useMemo((()=>function(e){let t=0;return e.forEach((e=>{le(e)?t+=String(e).length:t+=1})),t}(p)),[r]),m=o.useMemo((()=>l(p,!1)),[r]),[g,b]=o.useState(null),y=o.useRef(null),v=o.useRef(null),h=o.useRef(null),x=o.useRef(null),[O,E]=o.useState(!1),[w,S]=o.useState(0),[k,C]=o.useState(0);(0,s.Z)((()=>{S(t&&n&&f?1:0)}),[n,r,i,t,p]),(0,s.Z)((()=>{var e,t,n,o;if(1===w){const r=!!(null===(e=v.current)||void 0===e?void 0:e.isExceed());S(r?2:3),b(r?[0,f]:null),E(r);const l=(null===(t=v.current)||void 0===t?void 0:t.getHeight())||0,a=(1===i?0:(null===(n=h.current)||void 0===n?void 0:n.getHeight())||0)+((null===(o=x.current)||void 0===o?void 0:o.getHeight())||0),c=Math.max(l,a);C(c+1),d(r)}}),[w]);const j=g?Math.ceil((g[0]+g[1])/2):0;(0,s.Z)((()=>{var e;const[t,n]=g||[0,0];if(t!==n){const o=((null===(e=y.current)||void 0===e?void 0:e.getHeight())||0)>k;let r=j;n-t==1&&(r=o?t:n),b(o?[t,r]:[r,n])}}),[g,j]);const $=o.useMemo((()=>{if(2!==w||!g||g[0]!==g[1]){const e=l(p,!1);return 3!==w&&0!==w?o.createElement("span",{style:Object.assign(Object.assign({},ae),{WebkitLineClamp:i})},e):e}return l(a?p:ie(p,g[0]),O)}),[a,w,g,p].concat((0,oe.Z)(u))),R={width:n,whiteSpace:"normal",margin:0,padding:0};return o.createElement(o.Fragment,null,$,1===w&&o.createElement(o.Fragment,null,o.createElement(re,{style:Object.assign(Object.assign(Object.assign({},R),ae),{WebkitLineClamp:i}),ref:v},m),o.createElement(re,{style:Object.assign(Object.assign(Object.assign({},R),ae),{WebkitLineClamp:i-1}),ref:h},m),o.createElement(re,{style:Object.assign(Object.assign(Object.assign({},R),ae),{WebkitLineClamp:1}),ref:x},l([],!0))),2===w&&g&&g[0]!==g[1]&&o.createElement(re,{style:Object.assign(Object.assign({},R),{top:400}),ref:y},l(ie(p,j),!0)))}var se=e=>{let{enableEllipsis:t,isEllipsis:n,children:r,tooltipProps:l}=e;return(null==l?void 0:l.title)&&t?o.createElement(x.Z,Object.assign({open:!!n&&void 0},l),r):r},ue=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n};var de=o.forwardRef(((e,t)=>{var n,l,m;const{prefixCls:g,className:b,style:O,type:E,disabled:w,children:S,ellipsis:k,editable:C,copyable:j,component:$,title:R}=e,D=ue(e,["prefixCls","className","style","type","disabled","children","ellipsis","editable","copyable","component","title"]),{getPrefixCls:I,direction:T}=o.useContext(v.E_),[Z]=(0,h.Z)("Text"),P=o.useRef(null),H=o.useRef(null),N=I("typography",g),M=(0,d.Z)(D,["mark","code","delete","underline","strong","keyboard","italic"]),[z,A]=U(C),[B,W]=(0,u.Z)(!1,{value:A.editing}),{triggerType:F=["icon"]}=A,G=e=>{var t;e&&(null===(t=A.onStart)||void 0===t||t.call(A)),W(e)},_=q(B);X((()=>{var e;!B&&_&&(null===(e=H.current)||void 0===e||e.focus())}),[B]);const V=e=>{null==e||e.preventDefault(),G(!0)},J=e=>{var t;null===(t=A.onChange)||void 0===t||t.call(A,e),G(!1)},Y=()=>{var e;null===(e=A.onCancel)||void 0===e||e.call(A),G(!1)},[ee,te]=U(j),{copied:oe,copyLoading:re,onClick:le}=K({copyConfig:te,children:S}),[ie,ae]=o.useState(!1),[de,pe]=o.useState(!1),[fe,me]=o.useState(!1),[ge,be]=o.useState(!1),[ye,ve]=o.useState(!0),[he,xe]=U(k,{expandable:!1,symbol:e=>e?null==Z?void 0:Z.collapse:null==Z?void 0:Z.expand}),[Oe,Ee]=(0,u.Z)(xe.defaultExpanded||!1,{value:xe.expanded}),we=he&&(!Oe||"collapsible"===xe.expandable),{rows:Se=1}=xe,ke=o.useMemo((()=>we&&(void 0!==xe.suffix||xe.onEllipsis||xe.expandable||z||ee)),[we,xe,z,ee]);(0,s.Z)((()=>{he&&!ke&&(ae((0,f.G)("webkitLineClamp")),pe((0,f.G)("textOverflow")))}),[ke,he]);const[Ce,je]=o.useState(we),$e=o.useMemo((()=>!ke&&(1===Se?de:ie)),[ke,de,ie]);(0,s.Z)((()=>{je($e&&we)}),[$e,we]);const Re=we&&(Ce?ge:fe),De=we&&1===Se&&Ce,Ie=we&&Se>1&&Ce,[Te,Ze]=o.useState(0),Pe=e=>{var t;me(e),fe!==e&&(null===(t=xe.onEllipsis)||void 0===t||t.call(xe,e))};o.useEffect((()=>{const e=P.current;if(he&&Ce&&e){const t=Ie?e.offsetHeight<e.scrollHeight:e.offsetWidth<e.scrollWidth;ge!==t&&be(t)}}),[he,Ce,S,Ie,ye,Te]),o.useEffect((()=>{const e=P.current;if("undefined"==typeof IntersectionObserver||!e||!Ce||!we)return;const t=new IntersectionObserver((()=>{ve(!!e.offsetParent)}));return t.observe(e),()=>{t.disconnect()}}),[Ce,we]);let He={};He=!0===xe.tooltip?{title:null!==(n=A.text)&&void 0!==n?n:S}:o.isValidElement(xe.tooltip)?{title:xe.tooltip}:"object"==typeof xe.tooltip?Object.assign({title:null!==(l=A.text)&&void 0!==l?l:S},xe.tooltip):{title:xe.tooltip};const Ne=o.useMemo((()=>{const e=e=>["string","number"].includes(typeof e);if(he&&!Ce)return e(A.text)?A.text:e(S)?S:e(R)?R:e(He.title)?He.title:void 0}),[he,Ce,R,He.title,Re]);if(B)return o.createElement(L,{value:null!==(m=A.text)&&void 0!==m?m:"string"==typeof S?S:"",onSave:J,onCancel:Y,onEnd:A.onEnd,prefixCls:N,className:b,style:O,direction:T,component:$,maxLength:A.maxLength,autoSize:A.autoSize,enterIcon:A.enterIcon});const Me=()=>{const{expandable:e,symbol:t}=xe;return e?Oe&&"collapsible"!==e?null:o.createElement("a",{key:"expand",className:`${N}-${Oe?"collapse":"expand"}`,onClick:e=>((e,t)=>{var n;Ee(t.expanded),null===(n=xe.onExpand)||void 0===n||n.call(xe,e,t)})(e,{expanded:!Oe}),"aria-label":Oe?Z.collapse:null==Z?void 0:Z.expand},"function"==typeof t?t(Oe):t):null},ze=()=>{if(!z)return;const{icon:e,tooltip:t,tabIndex:n}=A,l=(0,c.Z)(t)[0]||(null==Z?void 0:Z.edit),i="string"==typeof l?l:"";return F.includes("icon")?o.createElement(x.Z,{key:"edit",title:!1===t?"":l},o.createElement(y,{ref:H,className:`${N}-edit`,onClick:V,"aria-label":i,tabIndex:n},e||o.createElement(r.Z,{role:"button"}))):null},Le=e=>[e&&Me(),ze(),ee?o.createElement(ne,Object.assign({key:"copy"},te,{prefixCls:N,copied:oe,locale:Z,onCopy:le,loading:re,iconOnly:null==S})):null];return o.createElement(a.Z,{onResize:e=>{let{offsetWidth:t}=e;Ze(t)},disabled:!we},(n=>o.createElement(se,{tooltipProps:He,enableEllipsis:we,isEllipsis:Re},o.createElement(Q,Object.assign({className:i()({[`${N}-${E}`]:E,[`${N}-disabled`]:w,[`${N}-ellipsis`]:he,[`${N}-single-line`]:we&&1===Se&&!Oe,[`${N}-ellipsis-single-line`]:De,[`${N}-ellipsis-multiple-line`]:Ie},b),prefixCls:g,style:Object.assign(Object.assign({},O),{WebkitLineClamp:Ie?Se:void 0}),component:$,ref:(0,p.sQ)(n,P,t),direction:T,onClick:F.includes("text")?V:void 0,"aria-label":null==Ne?void 0:Ne.toString(),title:R},M),o.createElement(ce,{enableMeasure:we&&!Ce,text:S,rows:Se,width:Te,onEllipsis:Pe,expanded:Oe,miscDeps:[oe,Oe,re,z,ee]},((t,n)=>function(e,t){let{mark:n,code:r,underline:l,delete:i,strong:a,keyboard:c,italic:s}=e,u=t;function d(e,t){t&&(u=o.createElement(e,{},u))}return d("strong",a),d("u",l),d("del",i),d("code",r),d("mark",n),d("kbd",c),d("i",s),u}(e,o.createElement(o.Fragment,null,t.length>0&&n&&!Oe&&Ne?o.createElement("span",{key:"show-content","aria-hidden":!0},t):t,(e=>[e&&!Oe&&o.createElement("span",{"aria-hidden":!0,key:"ellipsis"},"..."),xe.suffix,Le(e)])(n)))))))))})),pe=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n};var fe=o.forwardRef(((e,t)=>{var{ellipsis:n,rel:r}=e,l=pe(e,["ellipsis","rel"]);const i=Object.assign(Object.assign({},l),{rel:void 0===r&&"_blank"===l.target?"noopener noreferrer":r});return delete i.navigate,o.createElement(de,Object.assign({},i,{ref:t,ellipsis:!!n,component:"a"}))}));var me=o.forwardRef(((e,t)=>o.createElement(de,Object.assign({ref:t},e,{component:"div"})))),ge=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n};const be=(e,t)=>{var{ellipsis:n}=e,r=ge(e,["ellipsis"]);const l=o.useMemo((()=>n&&"object"==typeof n?(0,d.Z)(n,["expandable","rows"]):n),[n]);return o.createElement(de,Object.assign({ref:t},r,{ellipsis:l,component:"span"}))};var ye=o.forwardRef(be),ve=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n};const he=[1,2,3,4,5];var xe=o.forwardRef(((e,t)=>{const{level:n=1}=e,r=ve(e,["level"]);let l;return l=he.includes(n)?`h${n}`:"h1",o.createElement(de,Object.assign({ref:t},r,{component:l}))}));const Oe=Q;Oe.Text=ye,Oe.Link=fe,Oe.Title=xe,Oe.Paragraph=me;var Ee=Oe},874:function(e,t,n){"use strict";var o=n(16935),r={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var n,l,i,a,c,s,u=!1;t||(t={}),n=t.debug||!1;try{if(i=o(),a=document.createRange(),c=document.getSelection(),(s=document.createElement("span")).textContent=e,s.ariaHidden="true",s.style.all="unset",s.style.position="fixed",s.style.top=0,s.style.clip="rect(0, 0, 0, 0)",s.style.whiteSpace="pre",s.style.webkitUserSelect="text",s.style.MozUserSelect="text",s.style.msUserSelect="text",s.style.userSelect="text",s.addEventListener("copy",(function(o){if(o.stopPropagation(),t.format)if(o.preventDefault(),void 0===o.clipboardData){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var l=r[t.format]||r.default;window.clipboardData.setData(l,e)}else o.clipboardData.clearData(),o.clipboardData.setData(t.format,e);t.onCopy&&(o.preventDefault(),t.onCopy(o.clipboardData))})),document.body.appendChild(s),a.selectNodeContents(s),c.addRange(a),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");u=!0}catch(o){n&&console.error("unable to copy using execCommand: ",o),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),u=!0}catch(o){n&&console.error("unable to copy using clipboardData: ",o),n&&console.error("falling back to prompt"),l=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(l,e)}}finally{c&&("function"==typeof c.removeRange?c.removeRange(a):c.removeAllRanges()),s&&document.body.removeChild(s),i()}return u}},87957:function(e,t,n){"use strict";n.d(t,{G:function(){return l}});var o=n(25539),r=function(e){if((0,o.Z)()&&window.document.documentElement){var t=Array.isArray(e)?e:[e],n=window.document.documentElement;return t.some((function(e){return e in n.style}))}return!1};function l(e,t){return Array.isArray(e)||void 0===t?r(e):function(e,t){if(!r(e))return!1;var n=document.createElement("div"),o=n.style[e];return n.style[e]=t,n.style[e]!==o}(e,t)}},16935:function(e){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],o=0;o<e.rangeCount;o++)n.push(e.getRangeAt(o));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach((function(t){e.addRange(t)})),t&&t.focus()}}}}]);