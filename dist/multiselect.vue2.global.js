var VueformMultiselect=function(e){"use strict";function a(e){return-1!==[null,void 0].indexOf(e)}function l(l,t,u){const{object:r,valueProp:n,mode:i}=e.toRefs(l),o=e.getCurrentInstance().proxy,s=u.iv,c=e=>r.value||a(e)?e:Array.isArray(e)?e.map((e=>e[n.value])):e[n.value],v=e=>a(e)?"single"===i.value?{}:[]:e;return{update:(e,a=!0)=>{s.value=v(e);const l=c(e);t.emit("change",l,o),a&&(t.emit("input",l),t.emit("update:modelValue",l))}}}function t(a,l){const{value:t,modelValue:u,mode:r,valueProp:n}=e.toRefs(a),i=e.ref("single"!==r.value?[]:{}),o=e.computed((()=>u&&void 0!==u.value?u.value:t.value)),s=e.computed((()=>"single"===r.value?i.value[n.value]:i.value.map((e=>e[n.value])))),c=e.computed((()=>"single"!==r.value?i.value.map((e=>e[n.value])).join(","):i.value[n.value]));return{iv:i,internalValue:i,ev:o,externalValue:o,textValue:c,plainValue:s}}function u(a,l,t){const{regex:u}=e.toRefs(a),r=e.getCurrentInstance().proxy,n=t.isOpen,i=t.open,o=e.ref(null);return e.watch(o,(e=>{!n.value&&e&&i(),l.emit("search-change",e,r)})),{search:o,clearSearch:()=>{o.value=""},handleSearchInput:e=>{o.value=e.target.value},handleKeypress:e=>{if(u&&u.value){let a=u.value;"string"==typeof a&&(a=new RegExp(a)),e.key.match(a)||e.preventDefault()}},handlePaste:e=>{if(u&&u.value){let a=(e.clipboardData||window.clipboardData).getData("Text"),l=u.value;"string"==typeof l&&(l=new RegExp(l)),a.split("").every((e=>!!e.match(l)))||e.preventDefault()}l.emit("paste",e,r)}}}function r(a,l,t){const{groupSelect:u,mode:r,groups:n,disabledProp:i}=e.toRefs(a),o=e.ref(null),s=e=>{void 0===e||null!==e&&e[i.value]||n.value&&e&&e.group&&("single"===r.value||!u.value)||(o.value=e)};return{pointer:o,setPointer:s,clearPointer:()=>{s(null)}}}function n(e,a=!0){return a?String(e).toLowerCase().trim():String(e).toLowerCase().normalize("NFD").trim().replace(new RegExp(/æ/g),"ae").replace(new RegExp(/œ/g),"oe").replace(new RegExp(/ø/g),"o").replace(/\p{Diacritic}/gu,"")}function i(l,t,u){const{options:r,mode:i,trackBy:o,limit:s,hideSelected:c,createTag:v,createOption:d,label:p,appendNewTag:f,appendNewOption:g,multipleLabel:m,object:h,loading:b,delay:y,resolveOnLoad:_,minChars:w,filterResults:S,clearOnSearch:O,clearOnSelect:L,valueProp:x,allowAbsent:E,groupLabel:T,canDeselect:q,max:k,strict:P,closeOnSelect:C,closeOnDeselect:R,groups:I,reverse:B,infinite:D,groupOptions:A,groupHideEmpty:j,groupSelect:V,onCreate:$,disabledProp:N,searchStart:z,searchFilter:M}=e.toRefs(l),H=e.getCurrentInstance().proxy,F=u.iv,G=u.ev,K=u.search,U=u.clearSearch,W=u.update,X=u.pointer,Y=u.setPointer,J=u.clearPointer,Q=u.focus,Z=u.deactivate,ee=u.close,ae=u.localize,le=e.ref([]),te=e.ref([]),ue=e.ref(!1),re=e.ref(null),ne=e.ref(D.value&&-1===s.value?10:s.value),ie=e.computed((()=>v.value||d.value||!1)),oe=e.computed((()=>void 0!==f.value?f.value:void 0===g.value||g.value)),se=e.computed((()=>{if(I.value){let e=de.value||[],a=[];return e.forEach((e=>{Ne(e[A.value]).forEach((l=>{a.push(Object.assign({},l,e[N.value]?{[N.value]:!0}:{}))}))})),a}{let e=Ne(te.value||[]);return le.value.length&&(e=e.concat(le.value)),e}})),ce=e.computed((()=>{let e=se.value;return B.value&&(e=e.reverse()),ye.value.length&&(e=ye.value.concat(e)),$e(e)})),ve=e.computed((()=>{let e=ce.value;return ne.value>0&&(e=e.slice(0,ne.value)),e})),de=e.computed((()=>{if(!I.value)return[];let e=[],a=te.value||[];return le.value.length&&e.push({[T.value]:" ",[A.value]:[...le.value],__CREATE__:!0}),e.concat(a)})),pe=e.computed((()=>{let e=[...de.value].map((e=>({...e})));return ye.value.length&&(e[0]&&e[0].__CREATE__?e[0][A.value]=[...ye.value,...e[0][A.value]]:e=[{[T.value]:" ",[A.value]:[...ye.value],__CREATE__:!0}].concat(e)),e})),fe=e.computed((()=>{if(!I.value)return[];let e=pe.value;return Ve((e||[]).map(((e,a)=>{const l=Ne(e[A.value]);return{...e,index:a,group:!0,[A.value]:$e(l,!1).map((a=>Object.assign({},a,e[N.value]?{[N.value]:!0}:{}))),__VISIBLE__:$e(l).map((a=>Object.assign({},a,e[N.value]?{[N.value]:!0}:{})))}})))})),ge=e.computed((()=>{switch(i.value){case"single":return!a(F.value[x.value]);case"multiple":case"tags":return!a(F.value)&&F.value.length>0}})),me=e.computed((()=>void 0!==m&&void 0!==m.value?m.value(F.value,H):F.value&&F.value.length>1?`${F.value.length} options selected`:"1 option selected")),he=e.computed((()=>!se.value.length&&!ue.value&&!ye.value.length)),be=e.computed((()=>se.value.length>0&&0==ve.value.length&&(K.value&&I.value||!I.value))),ye=e.computed((()=>!1!==ie.value&&K.value?-1!==Ae(K.value)?[]:[{[x.value]:K.value,[_e.value[0]]:K.value,[p.value]:K.value,__CREATE__:!0}]:[])),_e=e.computed((()=>o.value?Array.isArray(o.value)?o.value:[o.value]:[p.value])),we=e.computed((()=>{switch(i.value){case"single":return null;case"multiple":case"tags":return[]}})),Se=e.computed((()=>b.value||ue.value)),Oe=e=>{switch("object"!=typeof e&&(e=De(e)),i.value){case"single":W(e);break;case"multiple":case"tags":W(F.value.concat(e))}t.emit("select",xe(e),e,H)},Le=e=>{switch("object"!=typeof e&&(e=De(e)),i.value){case"single":Te();break;case"tags":case"multiple":W(Array.isArray(e)?F.value.filter((a=>-1===e.map((e=>e[x.value])).indexOf(a[x.value]))):F.value.filter((a=>a[x.value]!=e[x.value])))}t.emit("deselect",xe(e),e,H)},xe=e=>h.value?e:e[x.value],Ee=e=>{Le(e)},Te=()=>{W(we.value),t.emit("clear",H)},qe=e=>{if(void 0!==e.group)return"single"!==i.value&&(Be(e[A.value])&&e[A.value].length);switch(i.value){case"single":return!a(F.value)&&F.value[x.value]==e[x.value];case"tags":case"multiple":return!a(F.value)&&-1!==F.value.map((e=>e[x.value])).indexOf(e[x.value])}},ke=e=>!0===e[N.value],Pe=()=>!(void 0===k||-1===k.value||!ge.value&&k.value>0)&&F.value.length>=k.value,Ce=e=>{switch(e.__CREATE__&&delete(e={...e}).__CREATE__,i.value){case"single":if(e&&qe(e))return q.value&&Le(e),void(R.value&&(J(),ee()));e&&Re(e),L.value&&U(),C.value&&(J(),ee()),e&&Oe(e);break;case"multiple":if(e&&qe(e))return Le(e),void(R.value&&(J(),ee()));if(Pe())return void t.emit("max",H);e&&(Re(e),Oe(e)),L.value&&U(),c.value&&J(),C.value&&ee();break;case"tags":if(e&&qe(e))return Le(e),void(R.value&&(J(),ee()));if(Pe())return void t.emit("max",H);e&&Re(e),L.value&&U(),e&&Oe(e),c.value&&J(),C.value&&ee()}C.value||Q()},Re=e=>{void 0===De(e[x.value])&&ie.value&&(t.emit("tag",e[x.value],H),t.emit("option",e[x.value],H),t.emit("create",e[x.value],H),oe.value&&je(e),U())},Ie=e=>void 0===e.find((e=>!qe(e)&&!e[N.value])),Be=e=>void 0===e.find((e=>!qe(e))),De=e=>se.value[se.value.map((e=>String(e[x.value]))).indexOf(String(e))],Ae=e=>se.value.findIndex((a=>_e.value.some((l=>(parseInt(a[l])==a[l]?parseInt(a[l]):a[l])===(parseInt(e)==e?parseInt(e):e))))),je=e=>{le.value.push(e)},Ve=e=>j.value?e.filter((e=>K.value?e.__VISIBLE__.length:e[A.value].length)):e.filter((e=>!K.value||e.__VISIBLE__.length)),$e=(e,a=!0)=>{let l=e;if(K.value&&S.value){let e=M.value;e||(e=(e,a,l)=>_e.value.some((l=>{let t=n(ae(e[l]),P.value);return z.value?t.startsWith(n(a,P.value)):-1!==t.indexOf(n(a,P.value))}))),l=l.filter((a=>e(a,K.value,H)))}return c.value&&a&&(l=l.filter((e=>!(e=>-1!==["tags","multiple"].indexOf(i.value)&&c.value&&qe(e))(e)))),l},Ne=e=>{let a=e;var l;return l=a,"[object Object]"===Object.prototype.toString.call(l)&&(a=Object.keys(a).map((e=>{let l=a[e];return{[x.value]:e,[_e.value[0]]:l,[p.value]:l}}))),a=a.map((e=>"object"==typeof e?e:{[x.value]:e,[_e.value[0]]:e,[p.value]:e})),a},ze=()=>{a(G.value)||(F.value=Fe(G.value))},Me=e=>(ue.value=!0,new Promise(((a,l)=>{r.value(K.value,H).then((a=>{te.value=a||[],"function"==typeof e&&e(a),ue.value=!1})).catch((e=>{console.error(e),te.value=[],ue.value=!1})).finally((()=>{a()}))}))),He=()=>{if(ge.value)if("single"===i.value){let e=De(F.value[x.value]);if(void 0!==e){let a=e[p.value];F.value[p.value]=a,h.value&&(G.value[p.value]=a)}}else F.value.forEach(((e,a)=>{let l=De(F.value[a][x.value]);if(void 0!==l){let e=l[p.value];F.value[a][p.value]=e,h.value&&(G.value[a][p.value]=e)}}))},Fe=e=>a(e)?"single"===i.value?{}:[]:h.value?e:"single"===i.value?De(e)||(E.value?{[p.value]:e,[x.value]:e,[_e.value[0]]:e}:{}):e.filter((e=>!!De(e)||E.value)).map((e=>De(e)||{[p.value]:e,[x.value]:e,[_e.value[0]]:e})),Ge=()=>{re.value=e.watch(K,(e=>{e.length<w.value||!e&&0!==w.value||(ue.value=!0,O.value&&(te.value=[]),setTimeout((()=>{e==K.value&&r.value(K.value,H).then((a=>{e!=K.value&&K.value||(te.value=a,X.value=ve.value.filter((e=>!0!==e[N.value]))[0]||null,ue.value=!1)})).catch((e=>{console.error(e)}))}),y.value))}),{flush:"sync"})};if("single"!==i.value&&!a(G.value)&&!Array.isArray(G.value))throw new Error(`v-model must be an array when using "${i.value}" mode`);return r&&"function"==typeof r.value?_.value?Me(ze):1==h.value&&ze():(te.value=r.value,ze()),y.value>-1&&Ge(),e.watch(y,((e,a)=>{re.value&&re.value(),e>=0&&Ge()})),e.watch(G,(e=>{if(a(e))W(Fe(e),!1);else switch(i.value){case"single":(h.value?e[x.value]!=F.value[x.value]:e!=F.value[x.value])&&W(Fe(e),!1);break;case"multiple":case"tags":(function(e,a){const l=a.slice().sort();return e.length===a.length&&e.slice().sort().every((function(e,a){return e===l[a]}))})(h.value?e.map((e=>e[x.value])):e,F.value.map((e=>e[x.value])))||W(Fe(e),!1)}}),{deep:!0}),e.watch(r,((e,a)=>{"function"==typeof l.options?_.value&&(!a||e&&e.toString()!==a.toString())&&Me():(te.value=l.options,Object.keys(F.value).length||ze(),He())})),e.watch(p,He),e.watch(s,((e,a)=>{ne.value=D.value&&-1===e?10:e})),{pfo:ce,fo:ve,filteredOptions:ve,hasSelected:ge,multipleLabelText:me,eo:se,extendedOptions:se,eg:de,extendedGroups:de,fg:fe,filteredGroups:fe,noOptions:he,noResults:be,resolving:ue,busy:Se,offset:ne,select:Oe,deselect:Le,remove:Ee,selectAll:()=>{"single"!==i.value&&Oe(ve.value.filter((e=>!e.disabled&&!qe(e))))},clear:Te,isSelected:qe,isDisabled:ke,isMax:Pe,getOption:De,handleOptionClick:e=>{if(!ke(e))return $&&$.value&&!qe(e)&&e.__CREATE__&&(delete(e={...e}).__CREATE__,(e=$.value(e,H))instanceof Promise)?(ue.value=!0,void e.then((e=>{ue.value=!1,Ce(e)}))):void Ce(e)},handleGroupClick:e=>{if(!ke(e)&&"single"!==i.value&&V.value){switch(i.value){case"multiple":case"tags":Ie(e[A.value])?Le(e[A.value]):Oe(e[A.value].filter((e=>-1===F.value.map((e=>e[x.value])).indexOf(e[x.value]))).filter((e=>!e[N.value])).filter(((e,a)=>F.value.length+1+a<=k.value||-1===k.value))),c.value&&X.value&&Y(fe.value.filter((e=>!e[N.value]))[X.value.index])}C.value&&Z()}},handleTagRemove:(e,a)=>{0===a.button?Ee(e):a.preventDefault()},refreshOptions:e=>{Me(e)},resolveOptions:Me,refreshLabels:He}}function o(a,l,t){const{valueProp:u,showOptions:r,searchable:n,groupLabel:i,groups:o,mode:s,groupSelect:c,disabledProp:v,groupOptions:d}=e.toRefs(a),p=t.fo,f=t.fg,g=t.handleOptionClick,m=t.handleGroupClick,h=t.search,b=t.pointer,y=t.setPointer,_=t.clearPointer,w=t.multiselect,S=t.isOpen,O=e.computed((()=>p.value.filter((e=>!e[v.value])))),L=e.computed((()=>f.value.filter((e=>!e[v.value])))),x=e.computed((()=>"single"!==s.value&&c.value)),E=e.computed((()=>b.value&&b.value.group)),T=e.computed((()=>j(b.value))),q=e.computed((()=>{const e=E.value?b.value:j(b.value),a=L.value.map((e=>e[i.value])).indexOf(e[i.value]);let l=L.value[a-1];return void 0===l&&(l=P.value),l})),k=e.computed((()=>{let e=L.value.map((e=>e.label)).indexOf(E.value?b.value[i.value]:j(b.value)[i.value])+1;return L.value.length<=e&&(e=0),L.value[e]})),P=e.computed((()=>[...L.value].slice(-1)[0])),C=e.computed((()=>b.value.__VISIBLE__.filter((e=>!e[v.value]))[0])),R=e.computed((()=>{const e=T.value.__VISIBLE__.filter((e=>!e[v.value]));return e[e.map((e=>e[u.value])).indexOf(b.value[u.value])-1]})),I=e.computed((()=>{const e=j(b.value).__VISIBLE__.filter((e=>!e[v.value]));return e[e.map((e=>e[u.value])).indexOf(b.value[u.value])+1]})),B=e.computed((()=>[...q.value.__VISIBLE__.filter((e=>!e[v.value]))].slice(-1)[0])),D=e.computed((()=>[...P.value.__VISIBLE__.filter((e=>!e[v.value]))].slice(-1)[0])),A=()=>{y(O.value[0]||null)},j=e=>L.value.find((a=>-1!==a.__VISIBLE__.map((e=>e[u.value])).indexOf(e[u.value]))),V=()=>{let e=w.value.querySelector("[data-pointed]");if(!e)return;let a=e.parentElement.parentElement;o.value&&(a=E.value?e.parentElement.parentElement.parentElement:e.parentElement.parentElement.parentElement.parentElement),e.offsetTop+e.offsetHeight>a.clientHeight+a.scrollTop&&(a.scrollTop=e.offsetTop+e.offsetHeight-a.clientHeight),e.offsetTop<a.scrollTop&&(a.scrollTop=e.offsetTop)};return e.watch(h,(e=>{n.value&&(e.length&&r.value?A():_())})),e.watch(S,(a=>{if(a){let a=w.value.querySelectorAll("[data-selected]")[0];if(!a)return;let l=a.parentElement.parentElement;e.nextTick((()=>{l.scrollTop>0||(l.scrollTop=a.offsetTop)}))}})),{pointer:b,canPointGroups:x,isPointed:e=>!(!b.value||!(!e.group&&b.value[u.value]===e[u.value]||void 0!==e.group&&b.value[i.value]===e[i.value]))||void 0,setPointerFirst:A,selectPointer:()=>{b.value&&!0!==b.value[v.value]&&(E.value?m(b.value):g(b.value))},forwardPointer:()=>{if(null===b.value)y((o.value&&x.value?L.value[0].__CREATE__?O.value[0]:L.value[0]:O.value[0])||null);else if(o.value&&x.value){let e=E.value?C.value:I.value;void 0===e&&(e=k.value,e.__CREATE__&&(e=e[d.value][0])),y(e||null)}else{let e=O.value.map((e=>e[u.value])).indexOf(b.value[u.value])+1;O.value.length<=e&&(e=0),y(O.value[e]||null)}e.nextTick((()=>{V()}))},backwardPointer:()=>{if(null===b.value){let e=O.value[O.value.length-1];o.value&&x.value&&(e=D.value,void 0===e&&(e=P.value)),y(e||null)}else if(o.value&&x.value){let e=E.value?B.value:R.value;void 0===e&&(e=E.value?q.value:T.value,e.__CREATE__&&(e=B.value,void 0===e&&(e=q.value))),y(e||null)}else{let e=O.value.map((e=>e[u.value])).indexOf(b.value[u.value])-1;e<0&&(e=O.value.length-1),y(O.value[e]||null)}e.nextTick((()=>{V()}))}}}function s(a,l,t){const{disabled:u,appendToBody:r,openDirection:n,closeOnScroll:i}=e.toRefs(a),o=e.getCurrentInstance().proxy,s=t.multiselect,c=t.dropdown,v=t.iv,d=e.ref(!1),p=e.ref(0),f=e.computed((()=>{if(!r.value||"undefined"==typeof window||!d.value||!c.value||-1===p.value)return;let e=s.value.getBoundingClientRect(),a=window.getComputedStyle(c.value).maxHeight,l=e.y,t=window.innerHeight-(e.y+e.height);return a=a.match(/%/)?parseInt(a.replace("%"))/100*window.innerHeight:parseInt(a.replace("px","")),{position:"absolute",zIndex:9999,transform:"top"===n.value?"translateY(-100%)":"none",maxHeight:"top"===n.value?a>l?`${l}px`:a:a>t?`${t}px`:void 0,left:`${e.x}px`,right:window.innerWidth-(e.x+e.width)+"px",top:"top"===n.value?`${e.y}px`:`${e.y+e.height}px`,bottom:"auto"}})),g=()=>{d.value&&(d.value=!1,l.emit("close",o))},m=e=>{const a=[document];return function e(l){if(!l||!l.parentNode)return;const t=window.getComputedStyle(l).overflowY;"scroll"!==t&&"auto"!==t||a.push(l),e(l.parentNode)}(e),a},h=()=>{p.value++},b=()=>{d.value&&(i.value&&g(),h())},y=()=>{d.value&&h()};return e.watch(v,(()=>{r.value&&h()}),{flush:"post"}),e.onMounted((()=>{r.value&&(m(s.value).forEach((e=>{e.addEventListener("scroll",b)})),window.addEventListener("resize",y))})),e.onBeforeUnmount((()=>{r.value&&(m(s.value).forEach((e=>{e.removeEventListener("scroll",b)})),window.removeEventListener("resize",y))})),e.watch(r,((e,a)=>{m(s.value).forEach((l=>{a&&!e&&l.removeEventListener("scroll",b),e&&l.addEventListener("scroll",b)})),a&&!e&&window.removeEventListener("resize",y),e&&window.addEventListener("resize",y)})),{isOpen:d,open:()=>{d.value||u.value||(d.value=!0,l.emit("open",o))},close:g,dropdownStyles:f}}function c(a,l,t){const{searchable:u,disabled:r,clearOnBlur:n}=e.toRefs(a),i=t.input,o=t.open,s=t.close,c=t.clearSearch,v=t.isOpen,d=t.wrapper,p=t.tags,f=e.ref(!1),g=e.ref(!1),m=e.computed((()=>u.value||r.value?-1:0)),h=()=>{u.value&&i.value.blur(),d.value.blur()},b=(e=!0)=>{r.value||(f.value=!0,e&&o())},y=()=>{f.value=!1,setTimeout((()=>{f.value||(s(),n.value&&c())}),1)};return{tabindex:m,isActive:f,mouseClicked:g,blur:h,focus:()=>{u.value&&!r.value&&i.value.focus()},activate:b,deactivate:y,handleFocusIn:e=>{e.target.closest("[data-tags]")&&"INPUT"!==e.target.nodeName||e.target.closest("[data-clear]")||b(g.value)},handleFocusOut:()=>{y()},handleCaretClick:()=>{y(),h()},handleMousedown:e=>{g.value=!0,v.value&&(e.target.isEqualNode(d.value)||e.target.isEqualNode(p.value))?setTimeout((()=>{y()}),0):v.value||!document.activeElement.isEqualNode(d.value)&&!document.activeElement.isEqualNode(i.value)||b(),setTimeout((()=>{g.value=!1}),0)}}}function v(a,l,t){const{mode:u,addTagOn:r,openDirection:n,searchable:i,showOptions:o,valueProp:s,groups:c,addOptionOn:v,createTag:d,createOption:p,reverse:f}=e.toRefs(a),g=e.getCurrentInstance().proxy,m=t.iv,h=t.update,b=t.deselect,y=t.search,_=t.setPointer,w=t.selectPointer,S=t.backwardPointer,O=t.forwardPointer,L=t.multiselect,x=t.wrapper,E=t.tags,T=t.isOpen,q=t.open,k=t.blur,P=t.fo,C=e.computed((()=>d.value||p.value||!1)),R=e.computed((()=>void 0!==r.value?r.value:void 0!==v.value?v.value:["enter"])),I=()=>{"tags"===u.value&&!o.value&&C.value&&i.value&&!c.value&&_(P.value[P.value.map((e=>e[s.value])).indexOf(y.value)])};return{handleKeydown:e=>{let a,t;switch(l.emit("keydown",e,g),-1!==["ArrowLeft","ArrowRight","Enter"].indexOf(e.key)&&"tags"===u.value&&(a=[...L.value.querySelectorAll("[data-tags] > *")].filter((e=>e!==E.value)),t=a.findIndex((e=>e===document.activeElement))),e.key){case"Backspace":if("single"===u.value)return;if(i.value&&-1===[null,""].indexOf(y.value))return;if(0===m.value.length)return;let l=m.value.filter((e=>!e.disabled&&!1!==e.remove));l.length&&b(l[l.length-1]);break;case"Enter":if(e.preventDefault(),229===e.keyCode)return;if(-1!==t&&void 0!==t)return h([...m.value].filter(((e,a)=>a!==t))),void(t===a.length-1&&(a.length-1?a[a.length-2].focus():i.value?E.value.querySelector("input").focus():x.value.focus()));if(-1===R.value.indexOf("enter")&&C.value)return;I(),w();break;case" ":if(!C.value&&!i.value)return e.preventDefault(),I(),void w();if(!C.value)return!1;if(-1===R.value.indexOf("space")&&C.value)return;e.preventDefault(),I(),w();break;case"Tab":case";":case",":if(-1===R.value.indexOf(e.key.toLowerCase())||!C.value)return;I(),w(),e.preventDefault();break;case"Escape":k();break;case"ArrowUp":if(e.preventDefault(),!o.value)return;T.value||q(),S();break;case"ArrowDown":if(e.preventDefault(),!o.value)return;T.value||q(),O();break;case"ArrowLeft":if(i.value&&E.value&&E.value.querySelector("input").selectionStart||e.shiftKey||"tags"!==u.value||!m.value||!m.value.length)return;e.preventDefault(),-1===t?a[a.length-1].focus():t>0&&a[t-1].focus();break;case"ArrowRight":if(-1===t||e.shiftKey||"tags"!==u.value||!m.value||!m.value.length)return;e.preventDefault(),a.length>t+1?a[t+1].focus():i.value?E.value.querySelector("input").focus():i.value||x.value.focus()}},handleKeyup:e=>{l.emit("keyup",e,g)},preparePointer:I}}function d(a,l,t){const{classes:u,disabled:r,openDirection:n,showOptions:i}=e.toRefs(a),o=t.isOpen,s=t.isPointed,c=t.isSelected,v=t.isDisabled,d=t.isActive,p=t.canPointGroups,f=t.resolving,g=t.fo,m=e.computed((()=>({container:"multiselect",containerDisabled:"is-disabled",containerOpen:"is-open",containerOpenTop:"is-open-top",containerActive:"is-active",wrapper:"multiselect-wrapper",singleLabel:"multiselect-single-label",singleLabelText:"multiselect-single-label-text",multipleLabel:"multiselect-multiple-label",search:"multiselect-search",tags:"multiselect-tags",tag:"multiselect-tag",tagDisabled:"is-disabled",tagRemove:"multiselect-tag-remove",tagRemoveIcon:"multiselect-tag-remove-icon",tagsSearchWrapper:"multiselect-tags-search-wrapper",tagsSearch:"multiselect-tags-search",tagsSearchCopy:"multiselect-tags-search-copy",placeholder:"multiselect-placeholder",caret:"multiselect-caret",caretOpen:"is-open",clear:"multiselect-clear",clearIcon:"multiselect-clear-icon",spinner:"multiselect-spinner",inifinite:"multiselect-inifite",inifiniteSpinner:"multiselect-inifite-spinner",dropdown:"multiselect-dropdown",dropdownTop:"is-top",dropdownHidden:"is-hidden",options:"multiselect-options",optionsTop:"is-top",group:"multiselect-group",groupLabel:"multiselect-group-label",groupLabelPointable:"is-pointable",groupLabelPointed:"is-pointed",groupLabelSelected:"is-selected",groupLabelDisabled:"is-disabled",groupLabelSelectedPointed:"is-selected is-pointed",groupLabelSelectedDisabled:"is-selected is-disabled",groupOptions:"multiselect-group-options",option:"multiselect-option",optionPointed:"is-pointed",optionSelected:"is-selected",optionDisabled:"is-disabled",optionSelectedPointed:"is-selected is-pointed",optionSelectedDisabled:"is-selected is-disabled",noOptions:"multiselect-no-options",noResults:"multiselect-no-results",fakeInput:"multiselect-fake-input",assist:"multiselect-assistive-text",spacer:"multiselect-spacer",...u.value}))),h=e.computed((()=>!!(o.value&&i.value&&(!f.value||f.value&&g.value.length))));return{classList:e.computed((()=>{const e=m.value;return{container:[e.container].concat(r.value?e.containerDisabled:[]).concat(h.value&&"top"===n.value?e.containerOpenTop:[]).concat(h.value&&"top"!==n.value?e.containerOpen:[]).concat(d.value?e.containerActive:[]),wrapper:e.wrapper,spacer:e.spacer,singleLabel:e.singleLabel,singleLabelText:e.singleLabelText,multipleLabel:e.multipleLabel,search:e.search,tags:e.tags,tag:[e.tag].concat(r.value?e.tagDisabled:[]),tagDisabled:e.tagDisabled,tagRemove:e.tagRemove,tagRemoveIcon:e.tagRemoveIcon,tagsSearchWrapper:e.tagsSearchWrapper,tagsSearch:e.tagsSearch,tagsSearchCopy:e.tagsSearchCopy,placeholder:e.placeholder,caret:[e.caret].concat(o.value?e.caretOpen:[]),clear:e.clear,clearIcon:e.clearIcon,spinner:e.spinner,inifinite:e.inifinite,inifiniteSpinner:e.inifiniteSpinner,dropdown:[e.dropdown].concat("top"===n.value?e.dropdownTop:[]).concat(o.value&&i.value&&h.value?[]:e.dropdownHidden),options:[e.options].concat("top"===n.value?e.optionsTop:[]),group:e.group,groupLabel:a=>{let l=[e.groupLabel];return s(a)?l.push(c(a)?e.groupLabelSelectedPointed:e.groupLabelPointed):c(a)&&p.value?l.push(v(a)?e.groupLabelSelectedDisabled:e.groupLabelSelected):v(a)&&l.push(e.groupLabelDisabled),p.value&&l.push(e.groupLabelPointable),l},groupOptions:e.groupOptions,option:(a,l)=>{let t=[e.option];return s(a)?t.push(c(a)?e.optionSelectedPointed:e.optionPointed):c(a)?t.push(v(a)?e.optionSelectedDisabled:e.optionSelected):(v(a)||l&&v(l))&&t.push(e.optionDisabled),t},noOptions:e.noOptions,noResults:e.noResults,assist:e.assist,fakeInput:e.fakeInput}})),showDropdown:h}}function p(a,l,t){const{limit:u,infinite:r}=e.toRefs(a),n=t.isOpen,i=t.offset,o=t.search,s=t.pfo,c=t.eo,v=e.ref(null),d=e.ref(null),p=e.computed((()=>i.value<s.value.length)),f=a=>{const{isIntersecting:l,target:t}=a[0];if(l){const a=t.offsetParent,l=a.scrollTop;i.value+=-1==u.value?10:u.value,e.nextTick((()=>{a.scrollTop=l}))}},g=()=>{n.value&&i.value<s.value.length?v.value.observe(d.value):!n.value&&v.value&&v.value.disconnect()};return e.watch(n,(()=>{r.value&&g()})),e.watch(o,(()=>{r.value&&(i.value=u.value,g())}),{flush:"post"}),e.watch(c,(()=>{r.value&&g()}),{immediate:!1,flush:"post"}),e.onMounted((()=>{window&&window.IntersectionObserver&&(v.value=new IntersectionObserver(f))})),{hasMore:p,infiniteLoader:d}}function f(a,l,t){const{placeholder:u,id:r,valueProp:n,label:i,mode:o,groupLabel:s,aria:c,searchable:v}=e.toRefs(a),d=t.pointer,p=t.iv,f=t.hasSelected,g=t.multipleLabelText,m=e.ref(null),h=e.computed((()=>{let e=[];return r&&r.value&&e.push(r.value),e.push("assist"),e.join("-")})),b=e.computed((()=>{let e=[];return r&&r.value&&e.push(r.value),e.push("multiselect-options"),e.join("-")})),y=e.computed((()=>{let e=[];if(r&&r.value&&e.push(r.value),d.value)return e.push(d.value.group?"multiselect-group":"multiselect-option"),e.push(d.value.group?d.value.index:d.value[n.value]),e.join("-")})),_=e.computed((()=>u.value)),w=e.computed((()=>"single"!==o.value)),S=e.computed((()=>{let e="";return"single"===o.value&&f.value&&(e+=p.value[i.value]),"multiple"===o.value&&f.value&&(e+=g.value),"tags"===o.value&&f.value&&(e+=p.value.map((e=>e[i.value])).join(", ")),e})),O=e.computed((()=>{let e={...c.value};return v.value&&(e["aria-labelledby"]=e["aria-labelledby"]?`${h.value} ${e["aria-labelledby"]}`:h.value,S.value&&e["aria-label"]&&(e["aria-label"]=`${S.value}, ${e["aria-label"]}`)),e}));return e.onMounted((()=>{if(r&&r.value&&document&&document.querySelector){let e=document.querySelector(`[for="${r.value}"]`);m.value=e?e.innerText:null}})),{arias:O,ariaLabel:S,ariaAssist:h,ariaControls:b,ariaPlaceholder:_,ariaMultiselectable:w,ariaActiveDescendant:y,ariaOptionId:e=>{let a=[];return r&&r.value&&a.push(r.value),a.push("multiselect-option"),a.push(e[n.value]),a.join("-")},ariaOptionLabel:e=>{let a=[];return a.push(e),a.join(" ")},ariaGroupId:e=>{let a=[];return r&&r.value&&a.push(r.value),a.push("multiselect-group"),a.push(e.index),a.join("-")},ariaGroupLabel:e=>{let a=[];return a.push(e),a.join(" ")},ariaTagLabel:e=>`${e} ❎`}}function g(a,l,t){const{locale:u,fallbackLocale:r}=e.toRefs(a);return{localize:e=>e&&"object"==typeof e?e&&e[u.value]?e[u.value]:e&&u.value&&e[u.value.toUpperCase()]?e[u.value.toUpperCase()]:e&&e[r.value]?e[r.value]:e&&r.value&&e[r.value.toUpperCase()]?e[r.value.toUpperCase()]:e&&Object.keys(e)[0]?e[Object.keys(e)[0]]:"":e}}function m(a,l,t){return{multiselect:e.ref(null),wrapper:e.ref(null),tags:e.ref(null),input:e.ref(null),dropdown:e.ref(null)}}function h(e,a,l,t,u,r,n,i,o,s){"boolean"!=typeof n&&(o=i,i=n,n=!1);const c="function"==typeof l?l.options:l;let v;if(e&&e.render&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns,c._compiled=!0,u&&(c.functional=!0)),t&&(c._scopeId=t),r?(v=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),a&&a.call(this,o(e)),e&&e._registeredComponents&&e._registeredComponents.add(r)},c._ssrRegister=v):a&&(v=n?function(e){a.call(this,s(e,this.$root.$options.shadowRoot))}:function(e){a.call(this,i(e))}),v)if(c.functional){const e=c.render;c.render=function(a,l){return v.call(l),e(a,l)}}else{const e=c.beforeCreate;c.beforeCreate=e?[].concat(e,v):[v]}return l}const b={name:"Multiselect",emits:["paste","open","close","select","deselect","input","search-change","tag","option","update:modelValue","change","clear","keydown","keyup","max","create"],props:{value:{required:!1},modelValue:{required:!1},options:{type:[Array,Object,Function],required:!1,default:()=>[]},id:{type:[String,Number],required:!1},name:{type:[String,Number],required:!1,default:"multiselect"},disabled:{type:Boolean,required:!1,default:!1},label:{type:String,required:!1,default:"label"},trackBy:{type:[String,Array],required:!1,default:void 0},valueProp:{type:String,required:!1,default:"value"},placeholder:{type:String,required:!1,default:null},mode:{type:String,required:!1,default:"single"},searchable:{type:Boolean,required:!1,default:!1},limit:{type:Number,required:!1,default:-1},hideSelected:{type:Boolean,required:!1,default:!0},createTag:{type:Boolean,required:!1,default:void 0},createOption:{type:Boolean,required:!1,default:void 0},appendNewTag:{type:Boolean,required:!1,default:void 0},appendNewOption:{type:Boolean,required:!1,default:void 0},addTagOn:{type:Array,required:!1,default:void 0},addOptionOn:{type:Array,required:!1,default:void 0},caret:{type:Boolean,required:!1,default:!0},loading:{type:Boolean,required:!1,default:!1},noOptionsText:{type:[String,Object],required:!1,default:"The list is empty"},noResultsText:{type:[String,Object],required:!1,default:"No results found"},multipleLabel:{type:Function,required:!1},object:{type:Boolean,required:!1,default:!1},delay:{type:Number,required:!1,default:-1},minChars:{type:Number,required:!1,default:0},resolveOnLoad:{type:Boolean,required:!1,default:!0},filterResults:{type:Boolean,required:!1,default:!0},clearOnSearch:{type:Boolean,required:!1,default:!1},clearOnSelect:{type:Boolean,required:!1,default:!0},canDeselect:{type:Boolean,required:!1,default:!0},canClear:{type:Boolean,required:!1,default:!0},max:{type:Number,required:!1,default:-1},showOptions:{type:Boolean,required:!1,default:!0},required:{type:Boolean,required:!1,default:!1},openDirection:{type:String,required:!1,default:"bottom"},nativeSupport:{type:Boolean,required:!1,default:!1},classes:{type:Object,required:!1,default:()=>({})},strict:{type:Boolean,required:!1,default:!0},closeOnSelect:{type:Boolean,required:!1,default:!0},closeOnDeselect:{type:Boolean,required:!1,default:!1},autocomplete:{type:String,required:!1},groups:{type:Boolean,required:!1,default:!1},groupLabel:{type:String,required:!1,default:"label"},groupOptions:{type:String,required:!1,default:"options"},groupHideEmpty:{type:Boolean,required:!1,default:!1},groupSelect:{type:Boolean,required:!1,default:!0},inputType:{type:String,required:!1,default:"text"},attrs:{required:!1,type:Object,default:()=>({})},onCreate:{required:!1,type:Function},disabledProp:{type:String,required:!1,default:"disabled"},searchStart:{type:Boolean,required:!1,default:!1},reverse:{type:Boolean,required:!1,default:!1},regex:{type:[Object,String,RegExp],required:!1,default:void 0},rtl:{type:Boolean,required:!1,default:!1},infinite:{type:Boolean,required:!1,default:!1},aria:{required:!1,type:Object,default:()=>({})},clearOnBlur:{required:!1,type:Boolean,default:!0},locale:{required:!1,type:String,default:null},fallbackLocale:{required:!1,type:String,default:"en"},searchFilter:{required:!1,type:Function,default:null},allowAbsent:{required:!1,type:Boolean,default:!1},appendToBody:{required:!1,type:Boolean,default:!1},closeOnScroll:{required:!1,type:Boolean,default:!1}},setup:(e,a)=>function(e,a,l,t={}){return l.forEach((l=>{l&&(t={...t,...l(e,a,t)})})),t}(e,a,[m,g,t,r,s,u,l,c,i,p,o,v,d,f]),beforeMount(){(this.$root.constructor?.version?.match(/^2\./)||2===this.vueVersionMs)&&(this.$options.components.Teleport||(this.$options.components.Teleport={render(){return this.$slots.default?this.$slots.default[0]:null}}))}};var y=function(){var e=this,a=e.$createElement,l=e._self._c||a;return l("div",{ref:"multiselect",class:e.classList.container,attrs:{id:e.searchable?void 0:e.id,dir:e.rtl?"rtl":void 0},on:{focusin:e.handleFocusIn,focusout:e.handleFocusOut,keyup:e.handleKeyup,keydown:e.handleKeydown}},[l("div",e._b({ref:"wrapper",class:e.classList.wrapper,attrs:{tabindex:e.tabindex,"aria-controls":e.searchable?void 0:e.ariaControls,"aria-placeholder":e.searchable?void 0:e.ariaPlaceholder,"aria-expanded":e.searchable?void 0:e.isOpen,"aria-activedescendant":e.searchable?void 0:e.ariaActiveDescendant,"aria-multiselectable":e.searchable?void 0:e.ariaMultiselectable,role:e.searchable?void 0:"combobox"},on:{mousedown:e.handleMousedown}},"div",e.searchable?{}:e.arias,!1),["tags"!==e.mode&&e.searchable&&!e.disabled?[l("input",e._b({ref:"input",class:e.classList.search,attrs:{type:e.inputType,modelValue:e.search,autocomplete:e.autocomplete,id:e.searchable?e.id:void 0,"aria-controls":e.ariaControls,"aria-placeholder":e.ariaPlaceholder,"aria-expanded":e.isOpen,"aria-activedescendant":e.ariaActiveDescendant,"aria-multiselectable":e.ariaMultiselectable,role:"combobox"},domProps:{value:e.search},on:{input:e.handleSearchInput,keypress:e.handleKeypress,paste:function(a){return a.stopPropagation(),e.handlePaste.apply(null,arguments)}}},"input",Object.assign({},e.attrs,e.arias),!1))]:e._e(),e._v(" "),"tags"==e.mode?[l("div",{class:e.classList.tags,attrs:{"data-tags":""}},[e._l(e.iv,(function(a,t,u){return e._t("tag",(function(){return[l("span",{key:u,class:[e.classList.tag,a.disabled?e.classList.tagDisabled:null],attrs:{tabindex:"-1","aria-label":e.ariaTagLabel(e.localize(a[e.label]))},on:{keyup:function(l){return!l.type.indexOf("key")&&e._k(l.keyCode,"enter",13,l.key,"Enter")?null:e.handleTagRemove(a,l)}}},[e._v("\n            "+e._s(e.localize(a[e.label]))+"\n            "),e.disabled||a.disabled?e._e():l("span",{class:e.classList.tagRemove,on:{click:function(l){return l.stopPropagation(),e.handleTagRemove(a,l)}}},[l("span",{class:e.classList.tagRemoveIcon})])])]}),{option:a,handleTagRemove:e.handleTagRemove,disabled:e.disabled})})),e._v(" "),l("div",{ref:"tags",class:e.classList.tagsSearchWrapper},[l("span",{class:e.classList.tagsSearchCopy},[e._v(e._s(e.search))]),e._v(" "),e.searchable&&!e.disabled?l("input",e._b({ref:"input",class:e.classList.tagsSearch,attrs:{type:e.inputType,modelValue:e.search,id:e.searchable?e.id:void 0,autocomplete:e.autocomplete,"aria-controls":e.ariaControls,"aria-placeholder":e.ariaPlaceholder,"aria-expanded":e.isOpen,"aria-activedescendant":e.ariaActiveDescendant,"aria-multiselectable":e.ariaMultiselectable,role:"combobox"},domProps:{value:e.search},on:{input:e.handleSearchInput,keypress:e.handleKeypress,paste:function(a){return a.stopPropagation(),e.handlePaste.apply(null,arguments)}}},"input",Object.assign({},e.attrs,e.arias),!1)):e._e()])],2)]:e._e(),e._v(" "),"single"==e.mode&&e.hasSelected&&!e.search&&e.iv?[e._t("singlelabel",(function(){return[l("div",{class:e.classList.singleLabel},[l("span",{class:e.classList.singleLabelText},[e._v(e._s(e.localize(e.iv[e.label])))])])]}),{value:e.iv})]:e._e(),e._v(" "),"multiple"==e.mode&&e.hasSelected&&!e.search?[e._t("multiplelabel",(function(){return[l("div",{class:e.classList.multipleLabel,domProps:{innerHTML:e._s(e.multipleLabelText)}})]}),{values:e.iv})]:e._e(),e._v(" "),!e.placeholder||e.hasSelected||e.search?e._e():[e._t("placeholder",(function(){return[l("div",{class:e.classList.placeholder,attrs:{"aria-hidden":"true"}},[e._v("\n          "+e._s(e.placeholder)+"\n        ")])]}))],e._v(" "),e.loading||e.resolving?e._t("spinner",(function(){return[l("span",{class:e.classList.spinner,attrs:{"aria-hidden":"true"}})]})):e._e(),e._v(" "),e.hasSelected&&!e.disabled&&e.canClear&&!e.busy?e._t("clear",(function(){return[l("span",{class:e.classList.clear,attrs:{"aria-hidden":"true",tabindex:"0",role:"button","data-clear":"","aria-roledescription":"❎"},on:{click:e.clear,keyup:function(a){return!a.type.indexOf("key")&&e._k(a.keyCode,"enter",13,a.key,"Enter")?null:e.clear.apply(null,arguments)}}},[l("span",{class:e.classList.clearIcon})])]}),{clear:e.clear}):e._e(),e._v(" "),e.caret&&e.showOptions?e._t("caret",(function(){return[l("span",{class:e.classList.caret,attrs:{"aria-hidden":"true"},on:{click:e.handleCaretClick}})]}),{handleCaretClick:e.handleCaretClick,isOpen:e.isOpen}):e._e()],2),e._v(" "),l("Teleport",{attrs:{to:"body",disabled:!e.appendToBody}},[l("div",{ref:"dropdown",class:e.classList.dropdown,style:e.dropdownStyles,attrs:{tabindex:"-1"}},[e._t("beforelist",null,{options:e.fo}),e._v(" "),l("ul",{class:e.classList.options,attrs:{id:e.ariaControls,role:"listbox"}},[e.groups?e._l(e.fg,(function(a,t,u){return l("li",{key:u,class:e.classList.group,attrs:{id:e.ariaGroupId(a),"aria-label":e.ariaGroupLabel(e.localize(a[e.groupLabel])),"aria-selected":e.isSelected(a),role:"option"}},[a.__CREATE__?e._e():l("div",{class:e.classList.groupLabel(a),attrs:{"data-pointed":e.isPointed(a)},on:{mouseenter:function(l){return e.setPointer(a,t)},mousedown:function(l){return l.preventDefault(),e.handleGroupClick(a)}}},[e._t("grouplabel",(function(){return[l("span",{domProps:{innerHTML:e._s(e.localize(a[e.groupLabel]))}})]}),{group:a,isSelected:e.isSelected,isPointed:e.isPointed})],2),e._v(" "),l("ul",{class:e.classList.groupOptions,attrs:{"aria-label":e.ariaGroupLabel(e.localize(a[e.groupLabel])),role:"group"}},e._l(a.__VISIBLE__,(function(t,u,r){return l("li",{key:r,class:e.classList.option(t,a),attrs:{"data-pointed":e.isPointed(t),"data-selected":e.isSelected(t)||void 0,id:e.ariaOptionId(t),"aria-selected":e.isSelected(t),"aria-label":e.ariaOptionLabel(e.localize(t[e.label])),role:"option"},on:{mouseenter:function(a){return e.setPointer(t)},mousedown:function(a){return a.preventDefault(),e.handleOptionClick(t)}}},[e._t("option",(function(){return[l("span",[e._v(e._s(e.localize(t[e.label])))])]}),{option:t,isSelected:e.isSelected,isPointed:e.isPointed,search:e.search})],2)})),0)])})):e._l(e.fo,(function(a,t,u){return l("li",{key:u,class:e.classList.option(a),attrs:{"data-pointed":e.isPointed(a),"data-selected":e.isSelected(a)||void 0,id:e.ariaOptionId(a),"aria-selected":e.isSelected(a),"aria-label":e.ariaOptionLabel(e.localize(a[e.label])),role:"option"},on:{mouseenter:function(l){return e.setPointer(a)},mousedown:function(l){return l.preventDefault(),e.handleOptionClick(a)}}},[e._t("option",(function(){return[l("span",[e._v(e._s(e.localize(a[e.label])))])]}),{option:a,isSelected:e.isSelected,isPointed:e.isPointed,search:e.search})],2)}))],2),e._v(" "),e.noOptions?e._t("nooptions",(function(){return[l("div",{class:e.classList.noOptions,domProps:{innerHTML:e._s(e.localize(e.noOptionsText))}})]})):e._e(),e._v(" "),e.noResults?e._t("noresults",(function(){return[l("div",{class:e.classList.noResults,domProps:{innerHTML:e._s(e.localize(e.noResultsText))}})]})):e._e(),e._v(" "),e.infinite&&e.hasMore?l("div",{ref:"infiniteLoader",class:e.classList.inifinite},[e._t("infinite",(function(){return[l("span",{class:e.classList.inifiniteSpinner})]}))],2):e._e(),e._v(" "),e._t("afterlist",null,{options:e.fo})],2)]),e._v(" "),e.required?l("input",{class:e.classList.fakeInput,attrs:{tabindex:"-1",required:""},domProps:{value:e.textValue}}):e._e(),e._v(" "),e.nativeSupport?["single"==e.mode?l("input",{attrs:{type:"hidden",name:e.name},domProps:{value:void 0!==e.plainValue?e.plainValue:""}}):e._l(e.plainValue,(function(a,t){return l("input",{key:t,attrs:{type:"hidden",name:e.name+"[]"},domProps:{value:a}})}))]:e._e(),e._v(" "),e.searchable&&e.hasSelected?l("div",{class:e.classList.assist,attrs:{id:e.ariaAssist,"aria-hidden":"true"}},[e._v("\n    "+e._s(e.ariaLabel)+"\n  ")]):e._e(),e._v(" "),l("div",{class:e.classList.spacer})],2)};y._withStripped=!0;return h({render:y,staticRenderFns:[]},undefined,b,undefined,false,undefined,!1,void 0,void 0,void 0)}(Vue);
