(window.webpackJsonp=window.webpackJsonp||[]).push([[367],{1968:function(t,e,r){"use strict";r.r(e);var o,n=r(695),p=r(701),c=r(705),u=r(708),i=r(702),s=r(722),a=(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)},function(t,e){function r(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),f=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.componentDidMount=function(){var t=this.props.currentUser;if(t&&Object(s.b)(t))if(t.homepage){var e=Object(i.k)(t.homepage);this.props.router.replace(e)}else this.props.router.replace("/projects");else this.props.router.replace("/about")},e.prototype.render=function(){return null},e}(n.PureComponent);e.default=Object(p.withRouter)(Object(c.connect)(function(t){return{currentUser:Object(u.getCurrentUser)(t)}})(f))}}]);
//# sourceMappingURL=367.1562761687107.chunk.js.map