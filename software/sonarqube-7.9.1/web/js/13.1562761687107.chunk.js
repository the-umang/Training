(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{1059:function(e,t,n){var o=n(182),r=n(1143),i=n(825),s=n(1144),c=i(function(e){var t=o(e,s);return t.length&&t[0]===e[0]?r(t):[]});e.exports=c},1081:function(e,t,n){"use strict";n.d(t,"c",function(){return c}),n.d(t,"b",function(){return a}),n.d(t,"d",function(){return l}),n.d(t,"a",function(){return u}),n.d(t,"e",function(){return p});var o=n(934),r=n.n(o),i=n(1365),s=n(1220);function c(e){var t={};return e.forEach(function(e){var n=e.textRange?e.textRange.endLine:0;n in t||(t[n]=[]),t[n].push(e)}),t}function a(e){return void 0===e&&(e=[]),e.reduce(function(e,t){e[t.component]=e[t.component]||{};var n=t.textRange?t.textRange.endLine:0;return e[t.component][n]=e[t.component][n]||[],e[t.component][n].push(t),e},{})}function l(e){var t={};return e.forEach(function(e){Object(s.a)(e.textRange).forEach(function(e){e.line in t||(t[e.line]=[]),t[e.line].push(e)})}),t}function u(e){if(null==e)return{};var t={};return e.forEach(function(e,n){e.blocks.forEach(function(e){if("1"===e._ref)for(var o=e.from;o<e.from+e.size;o++)o in t||(t[o]=[]),t[o].push(n)})}),t}function p(e){var t={};return e.forEach(function(e){var n=Object(i.c)(e.code||""),o=r()(n.map(function(e){var t=e.className.match(/sym-\d+/g);return null!=t?t:[]}));t[e.line]=o.filter(function(e){return e})}),t}},1108:function(e,t){e.exports=function(e,t){for(var n=-1,o=Array(e);++n<e;)o[n]=t(n);return o}},1143:function(e,t,n){var o=n(187),r=n(1038),i=n(1039),s=n(182),c=n(189),a=n(188),l=Math.min;e.exports=function(e,t,n){for(var u=n?i:r,p=e[0].length,d=e.length,f=d,h=Array(d),m=1/0,v=[];f--;){var g=e[f];f&&t&&(g=s(g,c(t))),m=l(g.length,m),h[f]=!n&&(t||p>=120&&g.length>=120)?new o(f&&g):void 0}g=e[0];var b=-1,y=h[0];e:for(;++b<p&&v.length<m;){var k=g[b],E=t?t(k):k;if(k=n||0!==k?k:0,!(y?a(y,E):u(v,E,n))){for(f=d;--f;){var x=h[f];if(!(x?a(x,E):u(e[f],E,n)))continue e}y&&y.push(E),v.push(k)}}return v}},1144:function(e,t,n){var o=n(838);e.exports=function(e){return o(e)?e:[]}},1219:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var o=n(695),r=o.createContext({branchLike:{},file:{}})},1220:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return i});var o=function(){return(o=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};function r(e){if(!e)return[];for(var t=[],n=e.startLine;n<=e.endLine;n++){var o=n===e.startLine?e.startOffset:0,r=n===e.endLine?e.endOffset:999999;t.push({line:n,from:o,to:r})}return t}function i(e,t){return t?t.reduce(function(t,n){var i=n?r(n.textRange).filter(function(t){return t.line===e.line}).map(function(e){return o({},e,{startLine:n.textRange.startLine,index:n.index,text:n.msg})}):[];return t.concat(i)},[]):[]}},1365:function(e,t,n){"use strict";n.d(t,"c",function(){return c}),n.d(t,"b",function(){return a}),n.d(t,"a",function(){return u});var o=n(771),r=n.n(o),i=function(){return(i=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},s="source-line-code-issue";function c(e,t){void 0===t&&(t="");var n=document.createElement("div"),o=[];return n.innerHTML=e,[].forEach.call(n.childNodes,function(e){if(1===e.nodeType){var n=t?t+" "+e.className:e.className,r=c(e.innerHTML,n);o=o.concat(r)}3===e.nodeType&&e.nodeValue&&o.push({className:t,markers:[],text:e.nodeValue})}),o}function a(e,t){var n=new RegExp("\\b"+t+"\\b");return e.map(function(e){return n.test(e.className)?i({},e,{className:e.className+" highlighted"}):e})}function l(e,t,n,o){return t>=o?e.substr(t-o,n-t):e.substr(0,n-t)}function u(e,t,n){return void 0===n&&(n=s),t.forEach(function(t){var o=[],s=0,c=t.line!==t.startLine;e.forEach(function(e){var a,u,p,d,f=(a=s,u=s+e.text.length,p=t.from,d=t.to,{from:Math.max(a,p),to:Math.min(u,d)}),h=l(e.text,s,f.from,s),m=l(e.text,f.from,f.to,s),v=l(e.text,f.to,s+e.text.length,s);if(h.length&&o.push(i({},e,{text:h})),m.length){var g=-1===e.className.indexOf(n)?e.className+" "+n:e.className;o.push({className:g,markers:c||null==t.index?e.markers:r()(e.markers.concat([t.index])),text:m}),c=!0}v.length&&o.push(i({},e,{text:v})),s+=e.text.length}),e=o.slice()}),e}},1366:function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"b",function(){return s}),n.d(t,"c",function(){return c});var o=n(1059),r=n.n(o);function i(e,t){void 0===e&&(e=[]),void 0===t&&(t=[]);var n=r()(e,t);return n.length?n:void 0}function s(e,t){return null!=e&&t.some(function(t){return t.index===e.index})?e:void 0}function c(e,t){return void 0!==e&&t.find(function(t){return t.key===e})?e:void 0}},1367:function(e,t,n){"use strict";n.d(t,"a",function(){return v});var o=n(695),r=n(701),i=n(696),s=n(707),c=n(929),a=n(1368),l=n(733),u=n(697),p=n(28),d=n(702),f=n(773),h=n(720),m=(n(1951),function(){return(m=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)});function v(e){var t=e.branchLike,n=e.expandable,v=e.loading,g=e.onExpand,b=e.sourceViewerFile,y=b.key,k=b.measures,E=b.path,x=b.project,O=b.projectName,j=b.q,N=b.subProject,w=b.subProjectName;return o.createElement("div",{className:"source-viewer-header-slim display-flex-row display-flex-space-between"},o.createElement("div",{className:"display-flex-row flex-1"},o.createElement("div",null,o.createElement("a",{className:"link-with-icon",href:Object(d.s)(Object(d.c)(x,t))},o.createElement(l.a,{qualifier:"TRK"})," ",o.createElement("span",null,O))),void 0!==N&&o.createElement(o.Fragment,null,o.createElement(l.a,{qualifier:"BRC"})," ",o.createElement("span",null,w)),o.createElement("div",{className:"spacer-left"},o.createElement(l.a,{qualifier:j})," ",o.createElement("span",null,Object(f.b)(E)),o.createElement("span",{className:"component-name-file"},Object(f.d)(E))),b.canMarkAsFavorite&&(!t||Object(h.g)(t))&&o.createElement("div",{className:"nudged-up"},o.createElement(c.a,{className:"component-name-favorite",component:y,favorite:b.fav||!1,qualifier:b.q}))),void 0!==k.issues&&o.createElement("div",{className:i("flex-0 big-spacer-left",{"little-spacer-right":!n||v})},o.createElement(r.Link,{to:Object(d.h)(x,m({},Object(h.d)(t),{fileUuids:b.uuid,resolved:"false"}))},Object(p.l)("source_viewer.view_all_issues"))),n&&o.createElement(s.a,{className:"little-spacer-right",loading:v},o.createElement("div",{className:"flex-0 big-spacer-left"},o.createElement(u.b,{className:"js-actions",onClick:g},o.createElement(a.a,null)))))}},1368:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var o=n(695),r=n(700);function i(e){var t=e.className,n=e.fill,i=void 0===n?"currentColor":n,s=e.size;return o.createElement(r.a,{className:t,size:s},o.createElement("g",{fill:"none",fillRule:"evenodd"},o.createElement("path",{d:"M8 1v4H4",stroke:i,strokeWidth:"2",transform:"scale(-.83333 -.84583) rotate(45 7.66 -19.75)"}),o.createElement("path",{d:"M3 5.78h10v1.7H3z",fill:i}),o.createElement("path",{d:"M7.17 2.4h1.66v5.07H7.17z",fill:i}),o.createElement("g",null,o.createElement("path",{d:"M8.16 1.81V6.1H3.9",stroke:i,strokeWidth:"2",transform:"scale(.83333 .84583) rotate(45 -4.2 13.2)"}),o.createElement("path",{d:"M13 10.01H3v-1.7h10z",fill:i}),o.createElement("path",{d:"M8.83 13.4H7.17V9.15h1.66z",fill:i}))))}},1369:function(e,t,n){"use strict";var o,r=n(712),i=n.n(r),s=n(785),c=n.n(s),a=n(695),l=n(701),u=n(717),p=n(733),d=n(782),f=n(720),h=n(28),m=n(773),v=n(702),g=n(715),b=(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),y=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.isDifferentComponent=function(e,t){return Boolean(e&&t&&(e.project!==t.project||e.subProject!==t.subProject))},t.handleFileClick=function(e){e.preventDefault(),e.currentTarget.blur();var n=e.currentTarget.dataset,o=n.key,r=n.line;t.shouldLink()&&o&&t.props.openComponent({branchLike:t.props.branchLike,key:o,line:r?Number(r):void 0}),t.props.onClose()},t}return b(t,e),t.prototype.shouldLink=function(){var e=this.props.branchLike;return!Object(f.j)(e)&&!Object(f.h)(e)},t.prototype.renderDuplication=function(e,t,n){return this.shouldLink()?a.createElement("a",{"data-key":e.key,"data-line":n,href:"#",onClick:this.handleFileClick,title:e.name},t):t},t.prototype.render=function(){var e=this,t=this.props,n=t.duplicatedFiles,o=void 0===n?{}:n,r=t.sourceViewerFile,s=c()(this.props.blocks,"_ref"),f=Object.keys(s).map(function(e){return{blocks:s[e],file:o[e]}});return f=i()(f,function(e){return e.file.projectName!==r.projectName},function(e){return e.file.subProjectName!==r.subProjectName},function(e){return e.file.key!==r.key}),a.createElement(u.a,{placement:d.b.RightTop},a.createElement("div",{className:"source-viewer-bubble-popup abs-width-400"},this.props.inRemovedComponent&&a.createElement(g.a,{variant:"warning"},Object(h.l)("duplications.dups_found_on_deleted_resource")),f.length>0&&a.createElement(a.Fragment,null,a.createElement("h6",{className:"spacer-bottom"},Object(h.l)("component_viewer.transition.duplication")),f.map(function(t){return a.createElement("div",{className:"spacer-top text-ellipsis",key:t.file.key},a.createElement("div",{className:"component-name"},e.isDifferentComponent(t.file,e.props.sourceViewerFile)&&a.createElement(a.Fragment,null,a.createElement("div",{className:"component-name-parent"},a.createElement(p.a,{className:"little-spacer-right",qualifier:"TRK"}),a.createElement(l.Link,{to:Object(v.v)(t.file.project)},t.file.projectName)),t.file.subProject&&t.file.subProjectName&&a.createElement("div",{className:"component-name-parent"},a.createElement(p.a,{className:"little-spacer-right",qualifier:"BRC"}),t.file.subProjectName)),t.file.key!==e.props.sourceViewerFile.key&&a.createElement("div",{className:"component-name-path"},e.renderDuplication(t.file,a.createElement(a.Fragment,null,a.createElement("span",null,Object(m.b)(t.file.name)),a.createElement("span",{className:"component-name-file"},Object(m.d)(t.file.name))))),a.createElement("div",{className:"component-name-path"},"Lines: ",t.blocks.map(function(n,o){return a.createElement(a.Fragment,{key:o},e.renderDuplication(t.file,a.createElement(a.Fragment,null,n.from," – ",n.from+n.size-1),n.from),o<t.blocks.length-1&&", ")}))))}))))},t}(a.PureComponent);t.a=y},1370:function(e,t,n){"use strict";function o(e,t){var n=!1;return e.filter(function(e){var o=e.from>t||e.from+e.size<t,r=!("1"===e._ref)||(o||n),i=void 0!==e._ref&&r;return"1"!==e._ref||o||(n=!0),i})}function r(e,t){return e&&e[t]&&e[t].blocks||[]}function i(e){return e.some(function(e){return void 0===e._ref})}n.d(t,"a",function(){return o}),n.d(t,"b",function(){return r}),n.d(t,"c",function(){return i})},1375:function(e,t,n){"use strict";var o=n(1108),r=n.n(o),i=n(695),s=n(696),c=n(701),a=n(717),l=n(782),u=n(28),p=n(702),d=n(1219);function f(e){var t=e.line;return i.createElement(d.a.Consumer,null,function(e){var n=e.branchLike,o=e.file;return i.createElement(a.a,{placement:l.b.RightTop},i.createElement("div",{className:"source-viewer-bubble-popup nowrap"},i.createElement(c.Link,{className:"js-get-permalink",onClick:function(e){e.stopPropagation()},rel:"noopener noreferrer",target:"_blank",to:Object(p.d)(o.project,n,o.key,t.line)},Object(u.l)("component_viewer.get_permalink"))))})}var h,m=n(757),v=(h=function(e,t){return(h=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}h(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),g=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handleClick=function(e){e.preventDefault(),e.stopPropagation(),e.currentTarget.blur(),t.props.onPopupToggle({line:t.props.line.line,name:"line-number"})},t.handleTogglePopup=function(e){t.props.onPopupToggle({line:t.props.line.line,name:"line-number",open:e})},t.closePopup=function(){t.handleTogglePopup(!1)},t}return v(t,e),t.prototype.render=function(){var e=this.props,t=e.line,n=e.popupOpen,o=t.line;return!!o?i.createElement("td",{className:"source-meta source-line-number","data-line-number":o,onClick:this.handleClick,role:"button",tabIndex:0},i.createElement(m.a,{onRequestClose:this.closePopup,open:n,overlay:i.createElement(f,{line:t})})):i.createElement("td",{className:"source-meta source-line-number"})},t}(i.PureComponent),b=n(729);function y(e){var t=e.line,n=""!==t.scmAuthor;return i.createElement(a.a,{placement:l.b.RightTop},i.createElement("div",{className:"source-viewer-bubble-popup abs-width-400"},n&&i.createElement("div",null,t.scmAuthor),t.scmDate&&i.createElement("div",{className:s({"spacer-top":n})},i.createElement(b.a,{date:t.scmDate})),t.scmRevision&&i.createElement("div",{className:"spacer-top"},t.scmRevision)))}var k=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),E=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handleClick=function(e){e.preventDefault(),e.stopPropagation(),e.currentTarget.blur(),t.props.onPopupToggle({line:t.props.line.line,name:"scm"})},t.handleTogglePopup=function(e){t.props.onPopupToggle({line:t.props.line.line,name:"scm",open:e})},t.closePopup=function(){t.handleTogglePopup(!1)},t}return k(t,e),t.prototype.render=function(){var e=this.props,t=e.line,n=e.popupOpen,o=e.previousLine,r=!!t.line,s=function(e,t){var n=!0;null!=t&&null!=e.scmRevision&&null!=t.scmRevision&&(n=e.scmRevision!==t.scmRevision||e.scmDate!==t.scmDate);return n}(t,o)&&i.createElement("div",{className:"source-line-scm-inner","data-author":t.scmAuthor||"…"});return r?i.createElement("td",{className:"source-meta source-line-scm","data-line-number":t.line,onClick:this.handleClick,role:"button",tabIndex:0},i.createElement(m.a,{onRequestClose:this.closePopup,open:n,overlay:i.createElement(y,{line:t})},s)):i.createElement("td",{className:"source-meta source-line-scm","data-line-number":t.line},s)},t}(i.PureComponent);var x=n(704);function O(e){var t=e.line,n="source-meta source-line-coverage"+(null!=t.coverageStatus?" source-line-"+t.coverageStatus:"");return i.createElement("td",{className:n,"data-line-number":t.line},i.createElement(x.a,{overlay:j(t),placement:"right"},i.createElement("div",{className:"source-line-bar"})))}function j(e){return"uncovered"===e.coverageStatus?e.conditions?Object(u.m)("source_viewer.tooltip.uncovered.conditions",e.conditions):Object(u.l)("source_viewer.tooltip.uncovered"):"covered"===e.coverageStatus?e.conditions?Object(u.m)("source_viewer.tooltip.covered.conditions",e.conditions):Object(u.l)("source_viewer.tooltip.covered"):"partially-covered"===e.coverageStatus?e.conditions?Object(u.m)("source_viewer.tooltip.partially-covered.conditions",e.coveredConditions||0,e.conditions):Object(u.l)("source_viewer.tooltip.partially-covered"):void 0}var N=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),w=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handleClick=function(e){e.preventDefault(),t.props.onClick(t.props.line)},t}return N(t,e),t.prototype.render=function(){var e=this.props.line,t=s("source-meta","source-line-duplications",{"source-line-duplicated":e.duplicated}),n=i.createElement("td",{className:t,onClick:e.duplicated?this.handleClick:void 0,role:e.duplicated?"button":void 0,tabIndex:e.duplicated?0:void 0},i.createElement("div",{className:"source-line-bar"}));return e.duplicated?i.createElement(x.a,{overlay:Object(u.l)("source_viewer.tooltip.duplicated_line"),placement:"right"},n):n},t}(i.PureComponent),P=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),_=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handleClick=function(e){e.preventDefault(),e.stopPropagation(),e.currentTarget.blur(),t.props.onPopupToggle({index:t.props.index,line:t.props.line.line,name:"duplications"})},t.handleTogglePopup=function(e){t.props.onPopupToggle({index:t.props.index,line:t.props.line.line,name:"duplications",open:e})},t.closePopup=function(){t.handleTogglePopup(!1)},t}return P(t,e),t.prototype.render=function(){var e=this.props,t=e.duplicated,n=e.index,o=e.line,r=e.popupOpen,c=s("source-meta","source-line-duplications-extra",{"source-line-duplicated":t});return t?i.createElement("td",{className:c,"data-index":n,"data-line-number":o.line},i.createElement(m.a,{onRequestClose:this.closePopup,open:r,overlay:this.props.renderDuplicationPopup(n,o.line)},i.createElement(x.a,{overlay:r?void 0:Object(u.l)("source_viewer.tooltip.duplicated_block"),placement:"right"},i.createElement("div",{className:"source-line-bar",onClick:this.handleClick,role:"button",tabIndex:0})))):i.createElement("td",{className:c,"data-index":n,"data-line-number":o.line},i.createElement("div",{className:"source-line-bar"}))},t}(i.PureComponent),C=n(883),L=n(986),I=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),A=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handleClick=function(e){e.preventDefault(),t.props.onClick()},t}return I(t,e),t.prototype.render=function(){var e=this.props,t=e.issues,n=e.line,o=t.length>0,r=s("source-meta","source-line-issues",{"source-line-with-issues":o}),c=o?Object(L.b)(t)[0]:null;return i.createElement("td",{className:r,"data-line-number":n.line,onClick:o?this.handleClick:void 0,role:o?"button":void 0,tabIndex:o?0:void 0},null!=c&&i.createElement(C.a,{type:c.type}),t.length>1&&i.createElement("span",{className:"source-line-issues-counter"},t.length))},t}(i.PureComponent),M=n(1223);function R(e){var t=e.issuePopup;return i.createElement("div",{className:"issue-list"},e.issues.map(function(n){return i.createElement(M.a,{branchLike:e.branchLike,issue:n,key:n.key,onChange:e.onIssueChange,onClick:e.onIssueClick,onPopupToggle:e.onIssuePopupToggle,openPopup:t&&t.issue===n.key?t.name:void 0,selected:e.selectedIssue===n.key})}))}var T=n(1072),D=n(1176),S=n(1365),F=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),z=function(e){function t(t){var n=e.call(this,t)||this;return n.handleSymbolClick=function(e){e.preventDefault();var t=e.currentTarget.className.match(/sym-\d+/g);t&&t.length>0&&n.props.onSymbolClick(t)},n.state={tokens:Object(S.c)(t.line.code||"")},n}return F(t,e),t.prototype.componentDidMount=function(){this.attachEvents(),this.props.highlightedLocationMessage&&this.activeMarkerNode&&this.props.scroll&&this.props.scroll(this.activeMarkerNode)},t.prototype.componentWillReceiveProps=function(e){e.line.code!==this.props.line.code&&this.setState({tokens:Object(S.c)(e.line.code||"")})},t.prototype.componentWillUpdate=function(){this.detachEvents()},t.prototype.componentDidUpdate=function(e){this.attachEvents(),this.props.highlightedLocationMessage&&(!e.highlightedLocationMessage||e.highlightedLocationMessage.index!==this.props.highlightedLocationMessage.index)&&this.activeMarkerNode&&this.props.scroll&&this.props.scroll(this.activeMarkerNode)},t.prototype.componentWillUnmount=function(){this.detachEvents()},t.prototype.attachEvents=function(){if(this.codeNode&&(this.symbols=this.codeNode.querySelectorAll(".sym"),this.symbols))for(var e=0;e<this.symbols.length;e++){this.symbols[e].addEventListener("click",this.handleSymbolClick)}},t.prototype.detachEvents=function(){if(this.symbols)for(var e=0;e<this.symbols.length;e++){this.symbols[e].addEventListener("click",this.handleSymbolClick)}},t.prototype.renderMarker=function(e,t,n,o){var r=this,s=this.props.onLocationSelect,c=s?function(){return s(e)}:void 0,a=n?function(e){return r.activeMarkerNode=e}:void 0;return i.createElement(T.a,{key:"marker-"+e,leading:o,onClick:c,selected:n},i.createElement("span",{ref:a},e+1),t&&i.createElement(D.a,{selected:!0},t))},t.prototype.render=function(){var e=this,t=this.props,n=t.highlightedLocationMessage,o=t.highlightedSymbols,r=t.issues,c=t.issueLocations,a=t.line,l=t.onIssueSelect,u=t.padding,p=t.secondaryIssueLocations,d=t.selectedIssue,f=t.showIssues,h=this.state.tokens.slice();if(o&&o.forEach(function(e){h=Object(S.b)(h,e)}),c.length>0&&(h=Object(S.a)(h,c)),p&&(h=Object(S.a)(h,p,"issue-location"),n)){var m=p.find(function(e){return e.index===n.index});m&&(h=Object(S.a)(h,[m],"selected"))}var v=s("source-line-code","code",{"has-issues":r.length>0}),g=[],b=!1;h.forEach(function(t,o){e.props.displayLocationMarkers&&t.markers.length>0&&t.markers.forEach(function(t){var o=void 0!==n&&n.index===t,r=p.find(function(e){return e.index===t}),i=r&&r.text;g.push(e.renderMarker(t,i,o,b))}),g.push(i.createElement("span",{className:t.className,key:o},t.text)),b=(0===o||b)&&!t.text.trim().length});var y=u?{paddingBottom:u+"px"}:void 0,k=r.filter(function(e){return e.key===d});return i.createElement("td",{className:v,"data-line-number":a.line,style:y},i.createElement("div",{className:"source-line-code-inner"},i.createElement("pre",{ref:function(t){return e.codeNode=t}},g)),f&&r.length>0&&i.createElement(R,{branchLike:this.props.branchLike,issuePopup:this.props.issuePopup,issues:r,onIssueChange:this.props.onIssueChange,onIssueClick:l,onIssuePopupToggle:this.props.onIssuePopupToggle,selectedIssue:d}),d&&!f&&i.createElement(R,{branchLike:this.props.branchLike,issuePopup:this.props.issuePopup,issues:k,onIssueChange:this.props.onIssueChange,onIssueClick:l,onIssuePopupToggle:this.props.onIssuePopupToggle,selectedIssue:d}))},t}(i.PureComponent),Z=(n(1949),function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}()),G=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.isPopupOpen=function(e,n){var o=t.props,r=o.line,i=o.linePopup;return void 0!==i&&i.index===n&&i.line===r.line&&i.name===e},t.handleIssuesIndicatorClick=function(){if(t.props.openIssues)t.props.onIssuesClose(t.props.line),t.props.onIssueUnselect();else{t.props.onIssuesOpen(t.props.line);var e=t.props.issues;e.length>0&&t.props.onIssueSelect(e[0].key)}},t}return Z(t,e),t.prototype.render=function(){var e=this,t=this.props,n=t.displayCoverage,o=t.duplications,c=t.duplicationsCount,a=t.issuePopup,l=t.line,u=s("source-line",{"source-line-highlighted":this.props.highlighted,"source-line-filtered":l.isNew,"source-line-filtered-dark":n&&("uncovered"===l.coverageStatus||"partially-covered"===l.coverageStatus),"source-line-last":!0===this.props.last}),p=this.props.verticalBuffer?18*this.props.verticalBuffer:void 0;return i.createElement("tr",{className:u,"data-line-number":l.line},i.createElement(g,{line:l,onPopupToggle:this.props.onLinePopupToggle,popupOpen:this.isPopupOpen("line-number")}),i.createElement(E,{line:l,onPopupToggle:this.props.onLinePopupToggle,popupOpen:this.isPopupOpen("scm"),previousLine:this.props.previousLine}),this.props.displayIssues&&!this.props.displayAllIssues?i.createElement(A,{issues:this.props.issues,line:l,onClick:this.handleIssuesIndicatorClick}):i.createElement("td",{className:"source-meta source-line-issues"}),this.props.displayDuplications&&i.createElement(w,{line:l,onClick:this.props.loadDuplications}),r()(c,function(t){return i.createElement(_,{duplicated:o.includes(t),index:t,key:t,line:e.props.line,onPopupToggle:e.props.onLinePopupToggle,popupOpen:e.isPopupOpen("duplications",t),renderDuplicationPopup:e.props.renderDuplicationPopup})}),this.props.displayCoverage&&i.createElement(O,{line:l}),i.createElement(z,{branchLike:this.props.branchLike,displayLocationMarkers:this.props.displayLocationMarkers,highlightedLocationMessage:this.props.highlightedLocationMessage,highlightedSymbols:this.props.highlightedSymbols,issueLocations:this.props.issueLocations,issuePopup:a,issues:this.props.issues,line:l,onIssueChange:this.props.onIssueChange,onIssuePopupToggle:this.props.onIssuePopupToggle,onIssueSelect:this.props.onIssueSelect,onLocationSelect:this.props.onLocationSelect,onSymbolClick:this.props.onSymbolClick,padding:p,scroll:this.props.scroll,secondaryIssueLocations:this.props.secondaryIssueLocations,selectedIssue:this.props.selectedIssue,showIssues:this.props.openIssues||this.props.displayAllIssues}))},t}(i.PureComponent);t.a=G},1949:function(e,t,n){var o=n(1950);"string"==typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(699)(o,r);o.locals&&(e.exports=o.locals)},1950:function(e,t,n){(e.exports=n(698)(!1)).push([e.i,'.source-line:hover .source-line-coverage,.source-line:hover .source-line-duplications,.source-line:hover .source-line-duplications-extra,.source-line:hover .source-line-issues,.source-line:hover .source-line-number,.source-line:hover .source-line-scm{border-color:#e9e9e9;background-color:#e9e9e9}.source-line:hover .source-line-code{background-color:#f5f5f5}.source-line-highlighted .source-line-coverage,.source-line-highlighted .source-line-duplications,.source-line-highlighted .source-line-duplications-extra,.source-line-highlighted .source-line-issues,.source-line-highlighted .source-line-number,.source-line-highlighted .source-line-scm,.source-line-highlighted:hover .source-line-coverage,.source-line-highlighted:hover .source-line-duplications,.source-line-highlighted:hover .source-line-duplications-extra,.source-line-highlighted:hover .source-line-issues,.source-line-highlighted:hover .source-line-number,.source-line-highlighted:hover .source-line-scm{border-color:#c4dfec!important;background-color:#c4dfec}.source-line-highlighted .source-line-code,.source-line-highlighted:hover .source-line-code{background-color:#d9edf7}.source-line-filtered .source-line-code{background-color:#fbf3d5!important}.source-line-filtered.source-line-highlighted .source-line-code,.source-line-filtered.source-line-highlighted:hover .source-line-code{background-color:#cdd9c4!important}.source-line-filtered:hover .source-line-code{background-color:#f1e8cb!important}.source-line-filtered.source-line-filtered-dark .source-line-code{background-color:#f9ebb7!important}.source-line-filtered.source-line-filtered-dark:hover .source-line-code{background-color:#eaddb2!important}.source-line-last .source-line-code{padding-bottom:160px}.source-viewer pre{height:18px;padding:0}.source-line-number,.source-line-scm,.source-viewer pre{line-height:18px;font-family:Consolas,Liberation Mono,Menlo,Courier,monospace;font-size:12px}.source-line-code{position:relative;padding:0 10px}.source-line-code pre{float:left}.source-line-code .issue-list{margin-left:-10px;margin-right:-10px}.source-line-code-inner{min-height:18px}.source-line-code-inner:after,.source-line-code-inner:before{display:table;content:"";line-height:0}.source-line-code-inner:after{clear:both}.source-line-code-issue{display:inline-block;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAGCAYAAAAPDoR2AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1M0M2Rjk4M0M3QUYxMUUzODkzRUREMUM5OTNDMjY4QSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1M0M2Rjk4NEM3QUYxMUUzODkzRUREMUM5OTNDMjY4QSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjUzQzZGOTgxQzdBRjExRTM4OTNFREQxQzk5M0MyNjhBIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjUzQzZGOTgyQzdBRjExRTM4OTNFREQxQzk5M0MyNjhBIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+bcqJtQAAAEhJREFUeNpi+G+swwDGDAwgbAWlwZiJAQFCgfgwEIfDRaC67ID4NRDnQ2kQnwFZwgFqnANMAQOUYY9sF0wBiCGH5CBkrAgQYACuWi4sSGW8yAAAAABJRU5ErkJggg==);background-repeat:repeat-x;background-size:4px;background-position:bottom}.source-meta{position:relative;vertical-align:top;width:1px;background-clip:padding-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.source-meta:focus{outline:none}.source-meta[role=button]{cursor:pointer}.source-meta+.source-meta{border-left:1px solid #f3f3f3}.source-line-number{min-width:18px;padding:0 10px;background-color:#f3f3f3;color:#777;text-align:right}.source-line-number:before{content:attr(data-line-number)}.source-line-issues{position:relative;padding:0 2px;background-color:#f3f3f3;white-space:nowrap}.source-line-with-issues{padding-right:4px}.source-line-issues-counter{position:absolute;left:17px;line-height:8px;font-size:8px;z-index:900}.source-line-coverage,.source-line-duplications,.source-line-duplications-extra{background-color:#f3f3f3}.source-duplications-expanded .source-line-duplications,.source-line-duplications-extra{display:none}.source-duplications-expanded .source-line-duplications-extra{display:table-cell}.source-line-scm{padding:0 5px;background-color:#f3f3f3}.source-line-scm-inner{max-width:40px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.source-line-scm-inner:before{content:attr(data-author)}.source-line-bar{width:5px;height:18px}.source-line-bar[role=button]{cursor:pointer}.source-line-bar:focus{outline:none}.source-line-covered{background-color:#b4dd78!important}.source-line-partially-covered,.source-line-uncovered{background-color:#a4030f!important}.source-line-partially-covered{background-image:repeating-linear-gradient(45deg,hsla(0,0%,100%,.5) 4px,transparent 0,transparent 8px,hsla(0,0%,100%,.5) 0,hsla(0,0%,100%,.5) 12px,transparent 0,transparent 16px,hsla(0,0%,100%,.5) 0,hsla(0,0%,100%,.5) 20px)!important}.source-line-duplicated{background-color:#797979!important}',""])},1951:function(e,t,n){var o=n(1952);"string"==typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(699)(o,r);o.locals&&(e.exports=o.locals)},1952:function(e,t,n){(e.exports=n(698)(!1)).push([e.i,".source-viewer-header-slim{padding:4px 10px;border-bottom:1px solid #cdcdcd;background-color:#f3f3f3;align-items:center;min-height:25px}",""])},785:function(e,t,n){var o=n(184),r=n(794),i=Object.prototype.hasOwnProperty,s=r(function(e,t,n){i.call(e,n)?e[n].push(t):o(e,n,[t])});e.exports=s},929:function(e,t,n){"use strict";var o,r=n(695),i=n(696),s=n(704),c=n(697),a=n(939),l=n(28),u=(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),p=function(e){function t(t){var n=e.call(this,t)||this;return n.mounted=!1,n.toggleFavorite=function(){n.state.favorite?n.removeFavorite():n.addFavorite()},n.state={favorite:n.props.favorite},n}return u(t,e),t.prototype.componentDidMount=function(){this.mounted=!0},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.addFavorite=function(){var e=this;this.props.addFavorite().then(function(){e.mounted&&e.setState({favorite:!0})},function(){})},t.prototype.removeFavorite=function(){var e=this;this.props.removeFavorite().then(function(){e.mounted&&e.setState({favorite:!1})},function(){})},t.prototype.render=function(){var e=this.state.favorite,t=e?Object(l.l)("favorite.current",this.props.qualifier):Object(l.l)("favorite.check",this.props.qualifier),n=Object(l.l)("favorite.action",e?"remove":"add");return r.createElement(s.a,{overlay:t},r.createElement(c.c,{"aria-label":n,className:i("favorite-link","link-no-underline",this.props.className),onClick:this.toggleFavorite},r.createElement(a.a,{favorite:e})))},t}(r.PureComponent),d=n(38);var f=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),h=function(){return(h=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},m=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&(n[o[r]]=e[o[r]])}return n},v=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.callback=function(e){return t.props.handleFavorite&&t.props.handleFavorite(t.props.component,e)},t.add=function(){return(e=t.props.component,Object(d.post)("/api/favorites/add",{component:e})).then(function(){return t.callback(!0)});var e},t.remove=function(){return(e=t.props.component,Object(d.post)("/api/favorites/remove",{component:e})).then(function(){return t.callback(!1)});var e},t}return f(t,e),t.prototype.render=function(){var e=this.props,t=(e.component,e.handleFavorite,m(e,["component","handleFavorite"]));return r.createElement(p,h({},t,{addFavorite:this.add,removeFavorite:this.remove}))},t}(r.PureComponent);t.a=v},939:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var o=n(695),r=n(696),i=n(700),s=n(703);function c(e){var t=e.className,n=e.favorite,c=e.fill,a=void 0===c?s.orange:c,l=e.size;return o.createElement(i.a,{className:r("icon-outline",{"is-filled":n},t),size:l,style:{color:a}},o.createElement("g",{transform:"matrix(0.988024,0,0,0.988024,0.0957953,0.717719)"},o.createElement("path",{d:"M15.428,5.777C15.428,5.908 15.35,6.051 15.195,6.205L11.954,9.366L12.722,13.83C12.728,13.872 12.731,13.932 12.731,14.009C12.731,14.134 12.7,14.24 12.637,14.326C12.575,14.412 12.484,14.455 12.365,14.455C12.252,14.455 12.133,14.42 12.008,14.348L7.999,12.241L3.99,14.348C3.859,14.42 3.74,14.455 3.633,14.455C3.508,14.455 3.414,14.412 3.352,14.326C3.289,14.24 3.258,14.134 3.258,14.009C3.258,13.973 3.264,13.914 3.276,13.83L4.044,9.366L0.794,6.205C0.645,6.045 0.57,5.902 0.57,5.777C0.57,5.557 0.737,5.42 1.07,5.366L5.552,4.714L7.561,0.652C7.674,0.408 7.82,0.286 7.999,0.286C8.177,0.286 8.323,0.408 8.436,0.652L10.445,4.714L14.927,5.366C15.261,5.42 15.427,5.557 15.427,5.777L15.428,5.777Z"})))}}}]);
//# sourceMappingURL=13.1562761687107.chunk.js.map