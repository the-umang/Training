(window.webpackJsonp=window.webpackJsonp||[]).push([[340],{1118:function(e,t,n){"use strict";var a,i=n(695),o=n(696),r=(a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),l=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handleClick=function(e){e.preventDefault(),e.currentTarget.blur(),t.props.onCheck(t.props.value)},t}return r(t,e),t.prototype.render=function(){return i.createElement("a",{"aria-checked":this.props.checked,className:o("display-inline-flex-center link-checkbox",this.props.className),href:"#",onClick:this.handleClick,role:"radio"},i.createElement("i",{className:o("icon-radio","spacer-right",{"is-checked":this.props.checked})}),this.props.children)},t}(i.PureComponent);t.a=l},1566:function(e,t,n){var a=n(1567);"string"==typeof a&&(a=[[e.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(699)(a,i);a.locals&&(e.exports=a.locals)},1567:function(e,t,n){(e.exports=n(698)(!1)).push([e.i,".billing-downgrade-feedback>.alert{max-width:400px;margin:30px auto 50px}.billing-downgrade-feedback .boxed-group{margin-top:5vh}.billing-downgrade-feedback .boxed-group-header{padding-top:40px;text-align:center}.billing-downgrade-feedback .boxed-group-inner{padding:50px 50px 40px}.billing-downgrade-feedback h2{font-weight:700;font-size:18px;margin-bottom:20px}.billing-downgrade-feedback .boxed-group-list li{margin-left:0;padding-left:0}.billing-downgrade-feedback input[type=radio]{margin-right:1em}.billing-downgrade-feedback-form-actions{margin-top:36px}.billing-downgrade-feedback-explain-wrapper{margin-left:25px;padding-top:20px}.billing-downgrade-feedback-explain-wrapper label{display:block;margin-bottom:4px;font-weight:700}.billing-downgrade-feedback-explain-wrapper label .note{font-weight:400;margin-left:.5em}.billing-downgrade-feedback-explain-wrapper textarea{display:block;min-height:70px;width:100%;padding:6px 8px;border:1px solid #cdcdcd;border-radius:2px}",""])},1969:function(e,t,n){"use strict";n.r(t);var a,i,o=n(695),r=n(715),l=n(697),c=n(28),d=n(965),p=n(702),s=n(775),b=n(1118),u=(n(1566),a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});!function(e){e.doesntWork="did_not_work",e.doesntMeetExpectations="did_not_match_expectations",e.doesntMeetCompanyPolicy="company_policy",e.onlyTesting="just_testing",e.other="other"}(i||(i={}));var g=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={additionalFeedback:""},t.handleChange=function(e){t.setState({additionalFeedback:e.currentTarget.value})},t.handleChoice=function(e){t.setState({feedback:e})},t.handleSkip=function(e){e.preventDefault(),t.navigateAway()},t.handleSubmit=function(e){e.preventDefault();var n=t.getLocationState().organization;n&&(Object(d.b)({organization:n.key,feedback:t.state.feedback,additionalFeedback:t.state.additionalFeedback}),t.navigateAway(Object(c.l)("billing.downgrade.thankyou_for_feedback")))},t.getLocationState=function(){return t.props.location.state||{}},t.navigateAway=function(e){e&&Object(s.a)(e);var n=t.getLocationState().returnTo;t.props.router.replace({pathname:n||Object(p.b)()})},t}return u(t,e),t.prototype.render=function(){var e=this,t=this.getLocationState(),n=t.organization,a=t.confirmationMessage,d=t.title;return n?o.createElement("div",{className:"billing-downgrade-feedback"},a&&o.createElement(r.a,{variant:"success"},a),o.createElement("div",{className:"boxed-group boxed-group-centered"},o.createElement("div",{className:"boxed-group-header"},o.createElement("h2",null,d),o.createElement("div",null,Object(c.l)("billing.downgrade.reason.explanation"))),o.createElement("div",{className:"boxed-group-inner"},o.createElement("form",{className:"billing-downgrade-feedback-form",onSubmit:this.handleSubmit},o.createElement("ul",{className:"boxed-group-list"},Object.keys(i).map(function(t){var n=i[t];return o.createElement("li",{key:n},o.createElement(b.a,{checked:e.state.feedback===n,onCheck:e.handleChoice,value:n},Object(c.l)("billing.downgrade.reason.option",n,"label")),e.state.feedback===n&&o.createElement("div",{className:"billing-downgrade-feedback-explain-wrapper"},o.createElement("label",{htmlFor:"reason_text_"+n},Object(c.l)("billing.why"),o.createElement("span",{className:"note"},Object(c.l)("billing.optional"))),o.createElement("textarea",{id:"reason_text_"+n,name:"reason_text_"+n,onChange:e.handleChange,placeholder:Object(c.l)("billing.downgrade.reason.option",n,"placeholder"),value:e.state.additionalFeedback})))})),o.createElement("div",{className:"billing-downgrade-feedback-form-actions"},o.createElement(l.i,{className:"spacer-right",disabled:!this.state.feedback},Object(c.l)("billing.send")),o.createElement("a",{href:"#",onClick:this.handleSkip},Object(c.l)("billing.skip"))))))):null},t}(o.PureComponent);t.default=g},775:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var a=n(758),i=n(751);function o(e){Object(a.default)().dispatch(i.b(e))}},965:function(e,t,n){"use strict";n.d(t,"a",function(){return o}),n.d(t,"b",function(){return r});var a=n(38),i=n(713);function o(){return Object(a.getJSON)("/api/billing/show_subscription_plans").then(function(e){return e.subscriptionPlans},i.a)}function r(e){return Object(a.post)("/api/billing/send_feedback",e)}}}]);
//# sourceMappingURL=340.1562761687107.chunk.js.map