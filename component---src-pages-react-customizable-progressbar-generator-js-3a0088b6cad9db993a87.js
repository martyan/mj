(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{146:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),i=r(74),o=r(7),s=r.n(o),c=(r(33),r(343)),l=r.n(c),u=(r(245),r(2)),d=r.n(u),p=(r(344),a.a.createElement("svg",{viewBox:"0 0 18 18"},a.a.createElement("g",null,a.a.createElement("rect",{className:"fill",x:"0",y:"0",width:"18",height:"18"}),a.a.createElement("rect",{className:"stroke",x:"6.8",y:"6.8",width:"4.5",height:"4.5"}),a.a.createElement("rect",{className:"stroke",x:"8.1",y:"8.3",width:"9.9",height:"1.5"})))),m=a.a.createElement("svg",{viewBox:"0 0 18 18"},a.a.createElement("g",null,a.a.createElement("path",{className:"fill",d:"M8.1,18C3.6,18,0,14.4,0,9.9V8.1C0,3.6,3.6,0,8.1,0H18v18H8.1z"}),a.a.createElement("rect",{className:"stroke",x:"6.8",y:"6.8",width:"4.5",height:"4.5"}),a.a.createElement("rect",{className:"stroke",x:"8.1",y:"8.2",width:"9.9",height:"1.5"}))),h=a.a.createElement("svg",{viewBox:"0 0 18 18"},a.a.createElement("g",null,a.a.createElement("rect",{x:"2.2",className:"fill",width:"15.8",height:"18"}),a.a.createElement("rect",{className:"stroke",y:"6.8",width:"4.5",height:"4.5"}),a.a.createElement("rect",{className:"stroke",x:"1.3",y:"8.2",width:"16.7",height:"1.5"}))),k=function(e){var t=e.onChange,r=e.value;return a.a.createElement("div",{className:"linecap-selector"},a.a.createElement("div",{className:"square"===r?"option selected":"option",onClick:function(){return t("square")}},p),a.a.createElement("div",{className:"round"===r?"option selected":"option",onClick:function(){return t("round")}},m),a.a.createElement("div",{className:"butt"===r?"option selected":"option",onClick:function(){return t("butt")}},h))};k.propTypes={onChange:d.a.func.isRequired,value:d.a.string.isRequired};var b=k,g=r(345),f=r(621),y=(r(784),function(e){function t(){for(var t,r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(t=e.call.apply(e,[this].concat(n))||this).state={pickerVisible:!1},t.componentDidMount=function(){"undefined"!=typeof window&&g.Observable.fromEvent(window,"click").filter(function(){return t.state.pickerVisible}).subscribe(t.handleClick)},t.handleClick=function(e){e.target===t.wrapper||t.wrapper.contains(e.target)||t.setState({pickerVisible:!1})},t.render=function(){var e=t.props,r=e.value,n=e.onChange,i=t.state.pickerVisible;return a.a.createElement("div",{className:"color-selector",ref:function(e){return t.wrapper=e}},a.a.createElement("div",{className:"color",style:{background:r},onClick:function(){return t.setState({pickerVisible:!i})}}),i&&a.a.createElement(f.ChromePicker,{color:r,onChange:function(e){return n(e.hex)}}))},t}return s()(t,e),t}(n.Component));y.propTypes={onChange:d.a.func.isRequired,value:d.a.string.isRequired};var C=y,v=(r(785),[{name:"radius",label:"Radius",type:"number",min:0,unit:"px"},{name:"progress",label:"Progress",type:"number",min:0,max:"steps"},{name:"steps",label:"Steps",type:"number",min:"progress"},{name:"cut",label:"Cut",type:"number",min:0,max:360,unit:"deg"},{name:"rotate",label:"Rotate",type:"number",unit:"deg"},{name:"fillColor",label:"Fill color",type:"color"},{name:"counterClockwise",label:"Counter-clockwise",type:"checkbox"},{name:"inverse",label:"Inverse",type:"checkbox"},{name:"initialAnimation",label:"Initial animation",type:"checkbox"},{name:"initialAnimationDelay",label:"Initial animation delay",type:"number",min:0,unit:"ms"}]),E=[{name:"strokeWidth",label:"Stroke width",type:"number",min:0,unit:"px"},{name:"strokeColor",label:"Stroke color",type:"color",condition:function(e){return e.strokeWidth>0}},{name:"transition",label:"Stroke transition",type:"text",condition:function(e){return e.strokeWidth>0}},{name:"strokeLinecap",label:"Stroke linecap",type:"linecap",condition:function(e){return e.strokeWidth>0}}],S=[{name:"trackStrokeWidth",label:"Stroke width",type:"number",min:0,unit:"px"},{name:"trackStrokeColor",label:"Stroke color",type:"color",condition:function(e){return e.trackStrokeWidth>0}},{name:"trackTransition",label:"Stroke transition",type:"text",condition:function(e){return e.trackStrokeWidth>0}},{name:"trackStrokeLinecap",label:"Stroke linecap",type:"linecap",condition:function(e){return e.trackStrokeWidth>0&&e.cut>0}}],w=[{name:"pointerRadius",label:"Radius",type:"number",min:0,unit:"px"},{name:"pointerStrokeWidth",label:"Stroke width",type:"number",min:0,unit:"px",condition:function(e){return e.pointerRadius>0}},{name:"pointerStrokeColor",label:"Stroke color",type:"color",condition:function(e){return e.pointerRadius>0&&e.pointerStrokeWidth>0}},{name:"pointerFillColor",label:"Fill color",type:"color",condition:function(e){return e.pointerRadius>0&&e.pointerStrokeWidth>0}}],R={main:v,progress:E,track:S,pointer:w},q=function(e,t){switch(e.type){case"color":case"linecap":return function(r){return t.handleChange(e.name,r)};case"text":return function(r){return t.handleChange(e.name,r.target.value)};case"number":return function(r){return t.handleNumberChange(e.name,r)};case"checkbox":return function(r){return t.handleCheckboxChange(e.name,r)}}},x=function(e,t){return"string"==typeof e?t[e]:e},N=function(e,t){if(e.hasOwnProperty("condition")&&!e.condition(t))return null;var r=t.defaultState[e.name]!==t[e.name];return a.a.createElement("label",{key:e.name},a.a.createElement("span",{className:r?"caption modified":"caption"},e.label),function(e,t){switch(e.type){case"number":return a.a.createElement("input",{type:e.type,value:t[e.name],onChange:q(e,t),min:e.hasOwnProperty("min")?x(e.min,t):null,max:e.hasOwnProperty("max")?x(e.max,t):null});case"color":return a.a.createElement(C,{value:t[e.name],onChange:q(e,t)});case"checkbox":return a.a.createElement("input",{type:e.type,checked:t[e.name],onChange:q(e,t)});case"text":return a.a.createElement("input",{type:e.type,value:t[e.name],onChange:q(e,t)});case"linecap":return a.a.createElement(b,{value:t[e.name],onChange:q(e,t)})}}(e,t),e.hasOwnProperty("unit")&&a.a.createElement("span",{className:"unit"},e.unit))},W=function(e){return a.a.createElement("div",{className:"controls"},function(e){return"main"===e.type?null:"progress"===e.type?a.a.createElement("div",{className:"title"},"Progress style"):"track"===e.type?a.a.createElement("div",{className:"title"},"Track style"):"pointer"===e.type?a.a.createElement("div",{className:"title"},"Pointer style"):void 0}(e),R[e.type].map(function(t){return N(t,e)}))};W.propTypes={radius:d.a.number.isRequired,progress:d.a.number.isRequired,steps:d.a.number.isRequired,cut:d.a.number.isRequired,rotate:d.a.number.isRequired,strokeWidth:d.a.number.isRequired,strokeColor:d.a.string.isRequired,fillColor:d.a.string.isRequired,strokeLinecap:d.a.string.isRequired,transition:d.a.string.isRequired,pointerRadius:d.a.number.isRequired,pointerStrokeWidth:d.a.number.isRequired,pointerStrokeColor:d.a.string.isRequired,pointerFillColor:d.a.string.isRequired,trackStrokeWidth:d.a.number.isRequired,trackStrokeColor:d.a.string.isRequired,trackStrokeLinecap:d.a.string.isRequired,trackTransition:d.a.string.isRequired,initialAnimation:d.a.bool.isRequired,initialAnimationDelay:d.a.number.isRequired,inverse:d.a.bool.isRequired,counterClockwise:d.a.bool.isRequired,handleChange:d.a.func.isRequired,handleNumberChange:d.a.func.isRequired,handleCheckboxChange:d.a.func.isRequired,defaultState:d.a.object.isRequired,type:d.a.string.isRequired};var j=W,O=(r(75),r(786)),T=r.n(O),P=(r(788),r(789),r(790),function(e){function t(){for(var t,r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(t=e.call.apply(e,[this].concat(n))||this).isModified=function(e){return t.props.defaultState[e]!==t.props[e]},t.renderButton=function(){var e=t.props,r=e.codeVisible,n=e.toggleCode;return a.a.createElement("div",{className:"btns"},a.a.createElement("button",{onClick:function(){return n(!r)}},r?"Show progress bar":"Show code"))},t.renderGroup=function(e,r){var n="";return e.filter(function(e,t){return!r||r(t)}).forEach(function(e){if(t.isModified(e.name))switch(e.type){case"text":case"linecap":case"color":n+="    "+e.name+'="'+t.props[e.name]+'"\n';break;case"checkbox":n+="    "+e.name+"\n";break;default:n+="    "+e.name+"={"+t.props[e.name]+"}\n"}}),n},t.renderCode=function(){var e="import ProgressBar from 'react-customizable-progressbar'\n\n";return e+="<ProgressBar\n",e+="    radius={"+t.props.radius+"}\n",e+="    progress={"+t.props.progress+"}\n",e+=t.renderGroup(v,function(e){return e>1}),e+=t.renderGroup(E),e+=t.renderGroup(S),e+=t.renderGroup(w),e+="/>",a.a.createElement(T.a,{component:"pre",className:"language-markup"},e)},t.render=function(){var e=t.props.codeVisible;return a.a.createElement("div",{className:"implementation-code"},t.renderButton(),e&&t.renderCode())},t}return s()(t,e),t}(n.Component));P.propTypes={codeVisible:d.a.bool.isRequired,toggleCode:d.a.func.isRequired};var V=P,z={radius:100,progress:66,steps:100,cut:0,rotate:-90,strokeWidth:20,strokeColor:"indianred",fillColor:"none",strokeLinecap:"round",transition:".3s ease",pointerRadius:0,pointerStrokeWidth:20,pointerStrokeColor:"indianred",pointerFillColor:"white",trackStrokeColor:"#e6e6e6",trackStrokeWidth:20,trackStrokeLinecap:"round",trackTransition:".3s ease",counterClockwise:!1,inverse:!1,initialAnimation:!1,initialAnimationDelay:0,className:null},A=Object.assign({},z,{strokeWidth:18,strokeColor:"#5d9cec",strokeLinecap:"square",trackStrokeWidth:18}),L=Object.assign({},z,{strokeWidth:18,strokeColor:"#a0d468",strokeLinecap:"round",trackStrokeWidth:18,counterClockwise:!0}),G=Object.assign({},z,{strokeWidth:28,strokeColor:"#ffce54",strokeLinecap:"butt",trackStrokeWidth:14,trackStrokeLinecap:"butt",cut:120,rotate:-210}),B=Object.assign({},z,{strokeWidth:4,strokeColor:"indianred",trackStrokeWidth:4,pointerRadius:8,pointerStrokeWidth:5,pointerStrokeColor:"indianred"}),M=Object.assign({},z,{fillColor:"#f2f2f2",strokeWidth:2,strokeColor:"#656d78",trackStrokeWidth:2,pointerRadius:12,pointerStrokeWidth:2,pointerStrokeColor:"#656d78",inverse:!0}),F=(r(791),function(e){return a.a.createElement("div",{style:Object.assign({display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center",position:"absolute",top:"0",width:"100%",height:"100%",margin:"0 auto",color:"black",fontSize:"1.3em"},e.style)},a.a.createElement("div",{style:{fontSize:"1.3em"}},e.progress,"/",e.steps))}),D=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(t=e.call.apply(e,[this].concat(n))||this).state=Object.assign({},z,{codeVisible:!1}),t.handleChange=function(e,r){var n;t.setState(((n={})[e]=r,n))},t.handleNumberChange=function(e,r){var n;t.setState(((n={})[e]=parseInt(r.target.value),n))},t.handleCheckboxChange=function(e,r){var n;t.setState(((n={})[e]=!0===r.target.checked,n))},t.renderThumb=function(e){return a.a.createElement("div",{onClick:function(){return t.setState(Object.assign({},e))},className:"thumb"},a.a.createElement(l.a,Object.assign({},e,{radius:50,strokeWidth:e.strokeWidth/2,trackStrokeWidth:e.trackStrokeWidth/2,pointerRadius:e.pointerRadius/2,pointerStrokeWidth:e.pointerStrokeWidth/2}),a.a.createElement(F,{progress:e.progress,steps:e.steps,style:{fontSize:".7em",color:"#aaa",fontWeight:"100"}})))},t.render=function(){var e=t.state.codeVisible,r={handleChange:t.handleChange,handleNumberChange:t.handleNumberChange,handleCheckboxChange:t.handleCheckboxChange};return a.a.createElement("div",{className:"generator"},a.a.createElement("div",{className:"thumbs"},t.renderThumb(z),t.renderThumb(A),t.renderThumb(L),t.renderThumb(G),t.renderThumb(B),t.renderThumb(M)),a.a.createElement("div",{className:"bar-controls"},a.a.createElement("div",{className:"bar"},a.a.createElement(V,Object.assign({},t.state,{defaultState:z,toggleCode:function(e){return t.setState({codeVisible:e})}})),!e&&a.a.createElement(l.a,Object.assign({},t.state,{className:"progressbar"}),a.a.createElement(F,{progress:t.state.progress,steps:t.state.steps}))),a.a.createElement(j,Object.assign({},t.state,r,{type:"main",defaultState:z}))),a.a.createElement("div",{className:"style-controls"},a.a.createElement(j,Object.assign({},t.state,r,{type:"progress",defaultState:z})),a.a.createElement(j,Object.assign({},t.state,r,{type:"track",defaultState:z})),a.a.createElement(j,Object.assign({},t.state,r,{type:"pointer",defaultState:z}))))},t}return s()(t,e),t}(a.a.Component),I=r(172);r(792),t.default=function(){return a.a.createElement("div",{className:"rcp-generator"},a.a.createElement(I.a,{title:"Playground / generator of react-customizable-progressbar",keywords:["react","circle","circular","progress","bar","component","generator","playground"]}),a.a.createElement("div",{className:"header"},a.a.createElement("p",null,"Generator of "," ",a.a.createElement("a",{href:"https://github.com/martyan/react-customizable-progressbar",target:"_blank",onClick:function(){return i.a.event({category:"User",action:"Clicked on react-customizable-progressbar"})}},"react-customizable-progressbar")),a.a.createElement("p",null,"See"," ",a.a.createElement("a",{href:"/react-customizable-progressbar",onClick:function(){return i.a.event({category:"User",action:"Clicked on react-customizable-progressbar examples"})}},"examples"))),a.a.createElement(D,null))}},162:function(e,t,r){var n;e.exports=(n=r(174))&&n.default||n},169:function(e,t,r){"use strict";r.d(t,"b",function(){return u});var n=r(0),a=r.n(n),i=r(2),o=r.n(i),s=r(32),c=r.n(s);r.d(t,"a",function(){return c.a});r(162);var l=a.a.createContext({}),u=function(e){return a.a.createElement(l.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},172:function(e,t,r){"use strict";var n=r(173),a=r(0),i=r.n(a),o=r(2),s=r.n(o),c=r(187),l=r.n(c),u=r(169);function d(e){var t=e.description,r=e.lang,a=e.meta,o=e.keywords,s=e.title;return i.a.createElement(u.b,{query:p,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:r},title:s,titleTemplate:"%s",meta:[{name:"description",content:n},{property:"og:title",content:s},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:n}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(a)})},data:n})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=d;var p="4017075492"},173:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},174:function(e,t,r){"use strict";r.r(t);r(33);var n=r(0),a=r.n(n),i=r(2),o=r.n(i),s=r(54),c=r(3),l=function(e){var t=e.location,r=c.default.getResourcesForPathnameSync(t.pathname);return a.a.createElement(s.a,Object.assign({location:t,pageResources:r},r.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l}}]);
//# sourceMappingURL=component---src-pages-react-customizable-progressbar-generator-js-3a0088b6cad9db993a87.js.map