(window.webpackJsonp=window.webpackJsonp||[]).push([[375],{2041:function(e,t,n){"use strict";n.r(t);var a=n(695),r=n(711),o=n.n(r),l=n(701),i=n(28),c=n(805);function s(e){return a.createElement("div",{className:"quality-profile-not-found"},a.createElement("div",{className:"note spacer-bottom"},a.createElement(l.IndexLink,{className:"text-muted",to:Object(c.e)(e.organization)},Object(i.l)("quality_profiles.page"))),a.createElement("div",null,Object(i.l)("quality_profiles.not_found")))}var p,u=n(975),f=n(1376),m=n(1326),d=n(968),g=(p=function(e,t){return(p=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}p(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),y=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return g(t,e),t.prototype.renderUpdateDate=function(){var e=this.props.profile,t=a.createElement("span",null,Object(i.l)("quality_profiles.updated_")," ",a.createElement(m.a,{date:e.rulesUpdatedAt}));return Object(c.f)(e)&&(t=a.createElement("span",{className:"badge badge-normal-size badge-focus"},t)),a.createElement("li",{className:"small spacer-right"},t)},t.prototype.renderUsageDate=function(){var e=this.props.profile,t=a.createElement("span",null,Object(i.l)("quality_profiles.used_")," ",a.createElement(m.a,{date:e.lastUsed}));return e.lastUsed||(t=a.createElement("span",{className:"badge badge-normal-size badge-focus"},t)),a.createElement("li",{className:"small big-spacer-right"},t)},t.prototype.render=function(){var e=this.props,t=e.organization,n=e.profile;return a.createElement("header",{className:"page-header quality-profile-header"},a.createElement("div",{className:"note spacer-bottom"},a.createElement(l.IndexLink,{className:"text-muted",to:Object(c.e)(t)},Object(i.l)("quality_profiles.page"))," / ",a.createElement(l.Link,{className:"text-muted",to:Object(c.d)(n.language,t)},n.languageName)),a.createElement("h1",{className:"page-title"},a.createElement(u.a,{className:"link-base-color",language:n.language,name:n.name,organization:t},a.createElement("span",null,n.name)),n.isBuiltIn&&a.createElement(d.a,{className:"spacer-left",tooltip:!1})),a.createElement("div",{className:"pull-right"},a.createElement("ul",{className:"list-inline",style:{lineHeight:"24px"}},this.renderUpdateDate(),this.renderUsageDate(),a.createElement("li",null,a.createElement(l.Link,{className:"button",to:Object(c.a)(n.name,n.language,t)},Object(i.l)("changelog"))),a.createElement("li",null,a.createElement(f.a,{className:"pull-left",organization:t,profile:n,updateProfiles:this.props.updateProfiles})))),n.isBuiltIn&&a.createElement("div",{className:"page-description"},Object(i.l)("quality_profiles.built_in.description.1"),a.createElement("br",null),Object(i.l)("quality_profiles.built_in.description.2")))},t}(a.PureComponent),b=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function a(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(a.prototype=n.prototype,new a)}}(),h=function(){return(h=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},E=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&(n[a[r]]=e[a[r]])}return n},O=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return b(t,e),t.prototype.componentDidMount=function(){var e=this.props,t=e.location,n=e.profiles,a=e.router;if(t.query.key){var r=n.find(function(e){return e.key===t.query.key});r&&a.replace({pathname:t.pathname,query:{language:r.language,name:r.name}})}},t.prototype.render=function(){var e=this.props,t=e.organization,n=e.profiles,r=e.location,l=E(e,["organization","profiles","location"]),i=r.query,c=i.key,p=i.language,u=i.name;if(c)return n.find(function(e){return e.key===r.query.key})?null:a.createElement(s,{organization:t});var f=n.find(function(e){return e.language===p&&e.name===u});if(!f)return a.createElement(s,{organization:t});var m=a.cloneElement(this.props.children,h({organization:t,profile:f,profiles:n},l));return a.createElement("div",{id:"quality-profile"},a.createElement(o.a,{title:f.name}),a.createElement(y,{organization:t,profile:f,updateProfiles:this.props.updateProfiles}),m)},t}(a.PureComponent);t.default=O}}]);
//# sourceMappingURL=375.1562761687107.chunk.js.map