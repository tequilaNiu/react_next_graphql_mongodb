__NEXT_REGISTER_CHUNK("components_Breadcrumb_62dcea8db7074f2519bf1f302ca867f8",function(){webpackJsonp([2],{214:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:true});var a=t(360);var n=t.n(a);var u=t(0);var l=t.n(u);var o=function e(){return l.a.createElement(n.a,null,l.a.createElement(n.a.Item,null,"Home"),l.a.createElement(n.a.Item,null,l.a.createElement("a",{href:""},"Application Center")),l.a.createElement(n.a.Item,null,l.a.createElement("a",{href:""},"Application List")),l.a.createElement(n.a.Item,null,"An Application"))};r["default"]=o},359:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:true});var a=t(3);var n=h(a);var u=t(12);var l=h(u);var o=t(13);var f=h(o);var i=t(14);var s=h(i);var c=t(15);var d=h(c);var p=t(0);var v=y(p);var m=t(6);var _=h(m);function y(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t]);r["default"]=e;return r}function h(e){return e&&e.__esModule?e:{default:e}}var b=(void 0,function(e,r){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols)for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)r.indexOf(a[n])<0&&(t[a[n]]=e[a[n]]);return t});var E=function(e){(0,d["default"])(r,e);function r(){(0,l["default"])(this,r);return(0,s["default"])(this,(r.__proto__||Object.getPrototypeOf(r)).apply(this,arguments))}(0,f["default"])(r,[{key:"render",value:function e(){var r=this.props,t=r.prefixCls,a=r.separator,u=r.children,l=b(r,["prefixCls","separator","children"]);var o=void 0;o="href"in this.props?v.createElement("a",(0,n["default"])({className:t+"-link"},l),u):v.createElement("span",(0,n["default"])({className:t+"-link"},l),u);if(u)return v.createElement("span",null,o,v.createElement("span",{className:t+"-separator"},a));return null}}]);return r}(v.Component);r["default"]=E;E.__ANT_BREADCRUMB_ITEM=true;E.defaultProps={prefixCls:"ant-breadcrumb",separator:"/"};E.propTypes={prefixCls:_["default"].string,separator:_["default"].oneOfType([_["default"].string,_["default"].element]),href:_["default"].string};e.exports=r["default"]},360:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:true});var a=t(361);var n=o(a);var u=t(359);var l=o(u);function o(e){return e&&e.__esModule?e:{default:e}}n["default"].Item=l["default"];r["default"]=n["default"];e.exports=r["default"]},361:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:true});var a=t(12);var n=g(a);var u=t(13);var l=g(u);var o=t(14);var f=g(o);var i=t(15);var s=g(i);var c=t(0);var d=O(c);var p=t(6);var v=g(p);var m=t(362);var _=g(m);var y=t(359);var h=g(y);var b=t(11);var E=g(b);function O(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t]);r["default"]=e;return r}function g(e){return e&&e.__esModule?e:{default:e}}function j(e,r){if(!e.breadcrumbName)return null;var t=Object.keys(r).join("|");var a=e.breadcrumbName.replace(new RegExp(":("+t+")","g"),function(e,t){return r[t]||e});return a}function x(e,r,t,a){var n=t.indexOf(e)===t.length-1;var u=j(e,r);return n?d.createElement("span",null,u):d.createElement("a",{href:"#/"+a.join("/")},u)}var M=function(e){(0,s["default"])(r,e);function r(){(0,n["default"])(this,r);return(0,f["default"])(this,(r.__proto__||Object.getPrototypeOf(r)).apply(this,arguments))}(0,l["default"])(r,[{key:"componentDidMount",value:function e(){var r=this.props;(0,_["default"])(!("linkRender"in r||"nameRender"in r),"`linkRender` and `nameRender` are removed, please use `itemRender` instead, see: https://u.ant.design/item-render.")}},{key:"render",value:function e(){var r=void 0;var t=this.props,a=t.separator,n=t.prefixCls,u=t.style,l=t.className,o=t.routes,f=t.params,i=void 0===f?{}:f,s=t.children,p=t.itemRender,v=void 0===p?x:p;if(o&&o.length>0){var m=[];r=o.map(function(e){e.path=e.path||"";var r=e.path.replace(/^\//,"");Object.keys(i).forEach(function(e){r=r.replace(":"+e,i[e])});r&&m.push(r);return d.createElement(h["default"],{separator:a,key:e.breadcrumbName||r},v(e,i,o,m))})}else s&&(r=d.Children.map(s,function(e,r){if(!e)return e;(0,_["default"])(e.type&&e.type.__ANT_BREADCRUMB_ITEM,"Breadcrumb only accepts Breadcrumb.Item as it's children");return(0,c.cloneElement)(e,{separator:a,key:r})}));return d.createElement("div",{className:(0,E["default"])(l,n),style:u},r)}}]);return r}(d.Component);r["default"]=M;M.defaultProps={prefixCls:"ant-breadcrumb",separator:"/"};M.propTypes={prefixCls:v["default"].string,separator:v["default"].node,routes:v["default"].array,params:v["default"].object,linkRender:v["default"].func,nameRender:v["default"].func};e.exports=r["default"]},362:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:true});var a=t(363);var n=u(a);function u(e){return e&&e.__esModule?e:{default:e}}var l={};r["default"]=function(e,r){if(!e&&!l[r]){(0,n["default"])(false,r);l[r]=true}};e.exports=r["default"]},363:function(e,r,t){"use strict";var a=false;var n=function(){};if(a){var u=function e(r,t){var a=arguments.length;t=new Array(a>2?a-2:0);for(var n=2;n<a;n++)t[n-2]=arguments[n];var u=0;var l="Warning: "+r.replace(/%s/g,function(){return t[u++]});"undefined"!==typeof console&&console.error(l);try{throw new Error(l)}catch(e){}};n=function(e,r,t){var a=arguments.length;t=new Array(a>2?a-2:0);for(var n=2;n<a;n++)t[n-2]=arguments[n];if(void 0===r)throw new Error("`warning(condition, format, ...args)` requires a warning message argument");e||u.apply(null,[r].concat(t))}}e.exports=n}})});