webpackJsonp([1],{"+FD2":function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0_core_js_modules_es6_function_name__=__webpack_require__("EuXz"),__WEBPACK_IMPORTED_MODULE_0_core_js_modules_es6_function_name___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_modules_es6_function_name__),__WEBPACK_IMPORTED_MODULE_1_D_Host_qlc_bulk_scene_generator_node_modules_babel_runtime_helpers_objectSpread__=__webpack_require__("Biqn"),__WEBPACK_IMPORTED_MODULE_1_D_Host_qlc_bulk_scene_generator_node_modules_babel_runtime_helpers_objectSpread___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_D_Host_qlc_bulk_scene_generator_node_modules_babel_runtime_helpers_objectSpread__),__WEBPACK_IMPORTED_MODULE_2_core_js_modules_es7_string_pad_start__=__webpack_require__("smQ+"),__WEBPACK_IMPORTED_MODULE_2_core_js_modules_es7_string_pad_start___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_modules_es7_string_pad_start__),__WEBPACK_IMPORTED_MODULE_3_ramda__=__webpack_require__("ivXw"),__WEBPACK_IMPORTED_MODULE_4__components_Form__=__webpack_require__("URDG"),__WEBPACK_IMPORTED_MODULE_5__components_Output__=__webpack_require__("5Xf5"),__WEBPACK_IMPORTED_MODULE_6__models_Scene__=__webpack_require__("ovTO"),__WEBPACK_IMPORTED_MODULE_7__utils__=__webpack_require__("0xDb");__webpack_exports__["a"]={name:"app",data:function(){return{title:"QLC+ Bulk Scene Generator",output:""}},methods:{handleFormSubmit:function handleFormSubmit(input){var fixtures=input.fixtures,_input$scenes=input.scenes,startId=_input$scenes.startId,scene=_input$scenes.scene,range=_input$scenes.range,composeSceneName=function(e,t,n){return e+t.toString().padStart(n,"0")},calculateFixture=function calculateFixture(fixture,value){return __WEBPACK_IMPORTED_MODULE_1_D_Host_qlc_bulk_scene_generator_node_modules_babel_runtime_helpers_objectSpread___default()({},fixture,{channels:Object(__WEBPACK_IMPORTED_MODULE_3_ramda__["c"])(fixture.channels)?[]:fixture.channels.map(function(channel){return __WEBPACK_IMPORTED_MODULE_1_D_Host_qlc_bulk_scene_generator_node_modules_babel_runtime_helpers_objectSpread___default()({},channel,{value:function(x){return eval(channel.value)}(value)})})})},model=range.map(function(e,t){return{id:startId+t,name:composeSceneName(scene.name,t,scene.numberWidth),path:scene.path,Fixtures:fixtures.map(function(t){return calculateFixture(t,e)})}});this.output=Object(__WEBPACK_IMPORTED_MODULE_7__utils__["a"])(Object(__WEBPACK_IMPORTED_MODULE_7__utils__["b"])(model.map(function(e){return Object(__WEBPACK_IMPORTED_MODULE_6__models_Scene__["a"])(e)})))}},components:{Form:__WEBPACK_IMPORTED_MODULE_4__components_Form__["a"],Output:__WEBPACK_IMPORTED_MODULE_5__components_Output__["a"]}}},"+VGo":function(e,t){},0:function(e,t,n){e.exports=n("NHnr")},"0xDb":function(e,t,n){"use strict";n.d(t,"b",function(){return d}),n.d(t,"a",function(){return p});var a=n("MfeA"),i=(n.n(a),n("mJx5")),s=(n.n(i),n("VjuZ")),r=(n.n(s),n("Biqn")),_=n.n(r),u=n("EuXz"),c=(n.n(u),n("ivXw"));function l(e){return Object(c["c"])(e)?"":Object.keys(e).map(function(t){return{key:t,value:e[t]}}).map(function(e){var t=e.key,n=e.value;return" ".concat(t,'="').concat(n,'"')}).join("")}function o(e){var t=e.name,n=e.attributes,a=void 0===n?{}:n,i=e.childNodes,s=d(i);return Object(c["b"])(s)?"<".concat(t).concat(l(a)," />"):"<".concat(t).concat(l(a),">").concat(s,"</").concat(t,">")}function d(e){return Object(c["a"])(Number,e)?e:Object(c["c"])(e)||Object(c["b"])(e)?"":Object(c["a"])(String,e)?e:Object(c["a"])(Array)&&e.length?e.map(d).join(""):Object(c["a"])(Object,e)?e.toXmlStructure?d(e.toXmlStructure()):e.name?o(e):"".concat(Object.keys(e).map(function(t){return"".concat(o(_()({name:t},e[t])))}).join("")):""}function p(e){var t="",n=/(>)(<)(\/*)/g;e=e.replace(n,"$1\r\n$2$3");var a=0;return e.split("\r\n").map(function(e){var n=0;e.match(/.+<\/\w[^>]*>$/)?n=0:e.match(/^<\/\w/)?0!=a&&(a-=1):n=e.match(/^<\w[^>]*[^/]>.*$/)?1:0;for(var i="",s=0;s<a;s++)i+="  ";t+=i+e+"\r\n",a+=n}),t}},"2XsP":function(e,t){},"5Xf5":function(e,t,n){"use strict";var a={name:"SceneForm",props:{value:{type:String,required:!1,default:""}}},i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"output"}},[n("h4",{staticClass:"ui dividing header"},[e._v("Output")]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],staticClass:"ui green raised padded container segment",domProps:{value:e.value},on:{input:function(t){t.target.composing||(e.value=t.target.value)}}})])},s=[],r=n("XyMi");function _(e){n("eDF+")}var u=!1,c=_,l="data-v-77283334",o=null,d=Object(r["a"])(a,i,s,u,c,l,o);t["a"]=d.exports},D0dS:function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0_D_Host_qlc_bulk_scene_generator_node_modules_babel_runtime_helpers_objectSpread__=__webpack_require__("Biqn"),__WEBPACK_IMPORTED_MODULE_0_D_Host_qlc_bulk_scene_generator_node_modules_babel_runtime_helpers_objectSpread___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_D_Host_qlc_bulk_scene_generator_node_modules_babel_runtime_helpers_objectSpread__),__WEBPACK_IMPORTED_MODULE_1_ramda__=__webpack_require__("ivXw");__webpack_exports__["a"]={name:"ScenesFieldset",props:{},data:function(){return{startId:0,func:{name:"Scene #",path:"",numberWidth:3},step:{start:0,end:255,filterEquation:"true"}}},methods:{setStepStart:function(e){this.step.start=parseInt(e,10),this.step.end<this.step.start&&(this.step.end=this.step.start),this.change()},setStepEnd:function(e){this.step.end=parseInt(e,10),this.step.start>this.step.end&&(this.step.start=this.step.end),this.change()},change:function(){this.$emit("change",{startId:this.startId,scene:__WEBPACK_IMPORTED_MODULE_0_D_Host_qlc_bulk_scene_generator_node_modules_babel_runtime_helpers_objectSpread___default()({},this.func),range:this.filteredRange})}},mounted:function(){this.change()},computed:{range:function(){var e=this.step,t=e.start,n=e.end;return Object(__WEBPACK_IMPORTED_MODULE_1_ramda__["d"])(t,n+1)},filteredRange:function filteredRange(){var _this=this;return Object(__WEBPACK_IMPORTED_MODULE_1_ramda__["b"])(this.step.range)?[]:this.range.filter(function(x){return eval(_this.step.filterEquation)})},count:function(){return this.filteredRange?this.filteredRange.length:0}}}},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("/5sW"),i=n("+FD2"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"ui",attrs:{id:"app"}},[n("div",{staticClass:"ui container"},[n("h1",{staticClass:"ui aligned header",attrs:{id:"header"}},[e._v(e._s(e.title))]),n("Form",{on:{submit:e.handleFormSubmit}}),n("Output",{attrs:{value:e.output}})],1)])},r=[],_=n("XyMi");function u(e){n("+VGo")}var c=!1,l=u,o=null,d=null,p=Object(_["a"])(i["a"],s,r,c,l,o,d),f=p.exports,h=n("myK/"),m=n.n(h);n("kVq8");a["default"].config.productionTip=!1,a["default"].use(m.a),new a["default"]({render:function(e){return e(f)}}).$mount("#app")},TEl8:function(e,t){},URDG:function(e,t,n){"use strict";var a=n("rzQm"),i=n.n(a),s=n("Biqn"),r=n.n(s),_=n("D0dS"),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("fieldset",{staticClass:"ui red segment",attrs:{id:"scenes"}},[n("h4",{staticClass:"ui dividing header"},[e._v("Scenes")]),n("div",{staticClass:"fields"},[n("div",{staticClass:"two wide field"},[n("label",[e._v("First ID")]),n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.startId,expression:"startId",modifiers:{number:!0}}],attrs:{type:"number",min:"0",placeholder:"0"},domProps:{value:e.startId},on:{change:e.change,input:function(t){t.target.composing||(e.startId=e._n(t.target.value))},blur:function(t){e.$forceUpdate()}}})]),n("div",{staticClass:"five wide field"},[n("label",[e._v("Name")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.func.name,expression:"func.name"}],attrs:{type:"text",placeholder:"Scene #"},domProps:{value:e.func.name},on:{change:e.change,input:function(t){t.target.composing||e.$set(e.func,"name",t.target.value)}}})]),n("div",{staticClass:"three wide field"},[e._m(0),n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.func.numberWidth,expression:"func.numberWidth",modifiers:{number:!0}}],attrs:{type:"number",min:"0",placeholder:"0"},domProps:{value:e.func.numberWidth},on:{change:e.change,input:function(t){t.target.composing||e.$set(e.func,"numberWidth",e._n(t.target.value))},blur:function(t){e.$forceUpdate()}}})]),n("div",{staticClass:"six wide field"},[n("label",[e._v("Path")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.func.path,expression:"func.path"}],attrs:{type:"text",placeholder:"Generated scenes/New/Scene name"},domProps:{value:e.func.path},on:{change:e.change,input:function(t){t.target.composing||e.$set(e.func,"path",t.target.value)}}})])]),n("div",{staticClass:"fields"},[n("div",{staticClass:"two wide field"},[n("label",[e._v("Step from")]),n("input",{attrs:{type:"number",placeholder:"0"},domProps:{value:e.step.start},on:{change:function(t){e.setStepStart(t.target.value)}}})]),n("div",{staticClass:"two wide field"},[n("label",[e._v("Step until")]),n("input",{attrs:{type:"number",placeholder:"255"},domProps:{value:e.step.end},on:{change:function(t){e.setStepEnd(t.target.value)}}})]),n("div",{staticClass:"nine wide field"},[e._m(1),n("input",{directives:[{name:"model",rawName:"v-model.lazy",value:e.step.filterEquation,expression:"step.filterEquation",modifiers:{lazy:!0}}],attrs:{type:"text",placeholder:"x == 0 || (x + 1) % 4 === 0"},domProps:{value:e.step.filterEquation},on:{change:[function(t){e.$set(e.step,"filterEquation",t.target.value)},e.change]}})]),n("div",{staticClass:"three wide field"},[n("label",[e._v("Number of scenes")]),n("input",{attrs:{type:"number",readonly:"",disabled:""},domProps:{value:e.count}})])])])},c=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",[e._v("Ordering width "),n("small",[e._v("(leading zeros)")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",[e._v("Step filter "),n("small",[e._v("(equasion where "),n("code",[e._v("x")]),e._v(" is step number)")])])}],l=n("XyMi"),o=!1,d=null,p=null,f=null,h=Object(l["a"])(_["a"],u,c,o,d,p,f),m=h.exports,v=(n("uDYd"),n("ivXw")),b=function(){return{id:"",channels:[{id:"",value:""}]}},g={name:"FixturesFieldset",props:{},data:function(){return{fixtures:[{id:0,channels:[{id:0,value:"x"}]}]}},methods:{setFixtureId:function(e,t){this.fixtures[e].id=t,this.change()},setChannelId:function(e,t,n){this.fixtures[e].channels[t].id=n,this.change()},setChannelValue:function(e,t,n){this.fixtures[e].channels[t].value=n,this.change()},addFixture:function(){this.fixtures.push(b()),this.change()},addChannel:function(e,t){this.fixtures[e].channels.splice(t+1,0,b()),this.change()},removeChannel:function(e,t){this.fixtures[e].channels.splice(t,1),this.fixtures=this.fixtures.filter(function(e){return e.channels.length}),this.fixtures.length||this.addFixture(),this.change()},sort:function(){var e=this,t=function(e,t){var n=parseInt(e.id,10),a=parseInt(t.id,10);return n<a?-1:n>a?1:0};this.fixtures.forEach(function(n,a){e.fixtures[a].channels=e.fixtures[a].channels.sort(t)}),this.fixtures=this.fixtures.sort(t),this.change()},change:function(){this.$emit("change",this.fixtures.map(function(e){return r()({id:parseInt(e.id,10),channels:e.channels.map(function(e){return r()({id:parseInt(e.id,10)},e)}).filter(function(e){return!Object(v["b"])(e.id)&&!Object(v["b"])(e.value)})},e)}).filter(function(e){return!Object(v["b"])(e.id)&&!Object(v["b"])(e.channels)}))}}},E=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("fieldset",{staticClass:"ui black segment",attrs:{id:"fixtures"}},[n("h4",{staticClass:"ui dividing header"},[e._v("Fixtures")]),n("table",{staticClass:"ui celled definition table"},[e._m(0),e._l(e.fixtures,function(t,a){return n("tbody",{key:a},e._l(t.channels,function(i,s){return n("tr",{key:s},[n("td",{staticClass:"collapsing fixture-id"},[0===s?n("input",{attrs:{type:"number",min:"0",placeholder:"0"},domProps:{value:t.id},on:{change:function(t){e.setFixtureId(a,t.target.value)}}}):e._e()]),n("td",{staticClass:"collapsing fixture-channel"},[n("input",{attrs:{type:"number",min:"0",placeholder:"0"},domProps:{value:i.id},on:{change:function(t){e.setChannelId(a,s,t.target.value)}}})]),n("td",[n("input",{attrs:{type:"text",placeholder:"255-x"},domProps:{value:i.value},on:{change:function(t){e.setChannelValue(a,s,t.target.value)}}})]),n("td",{staticClass:"right aligned collapsing"},[n("div",{staticClass:"ui button",on:{click:function(t){e.removeChannel(a,s)}}},[n("i",{staticClass:"minus circle icon"}),e._v(" Remove\n          ")]),n("div",{staticClass:"ui button",on:{click:function(t){e.addChannel(a,s)}}},[n("i",{staticClass:"plus circle icon"}),e._v(" Add\n          ")])])])}))})],2),n("div",{staticClass:"ui button",on:{click:e.addFixture}},[n("i",{staticClass:"plus square icon"}),e._v(" Add fixture\n  ")]),n("div",{staticClass:"ui button",on:{click:e.sort}},[n("i",{staticClass:"sort numeric down icon"}),e._v(" Sort\n  ")])])},C=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("thead",[n("tr",[n("th",[e._v("ID")]),n("th",[e._v("Channel")]),n("th",[e._v("Value "),n("small",[e._v("(integer or equasion where "),n("code",[e._v("x")]),e._v(" is step number)")])]),n("th",[e._v("Actions")])])])}];function O(e){n("YEUE")}var x=!1,D=O,P=null,M=null,S=Object(l["a"])(g,E,C,x,D,P,M),w=S.exports,I={name:"ChaserFieldset",props:{},data:function(){return{}}},j=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},k=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("fieldset",{staticClass:"ui yellow segment",attrs:{id:"chaser"}},[n("h4",{staticClass:"ui dividing header"},[e._v("\n    Chaser\n    "),n("div",{staticClass:"ui fitted slider checkbox"},[n("input",{attrs:{type:"checkbox"}}),n("label")])]),n("div",{staticClass:"field"},[n("div",{staticClass:"fields"},[n("div",{staticClass:"two wide field"},[n("label",[e._v("ID")]),n("input",{attrs:{type:"number",min:"0",placeholder:"0"}})]),n("div",{staticClass:"five wide field"},[n("label",[e._v("Name")]),n("input",{attrs:{type:"text",placeholder:"New Chaser"}})]),n("div",{staticClass:"four wide field"},[n("label",[e._v("Path")]),n("input",{attrs:{type:"text",placeholder:"Generated chasers/New"}})])])])])}],F=!1,q=null,y=null,B=null,A=Object(l["a"])(I,j,k,F,q,y,B),R=A.exports,T={name:"Form",props:{},data:function(){return{formState:{scenes:{},fixtures:[{id:0,channels:[{id:0,value:"x"}]}],chaser:{}}}},methods:{handleScenesChange:function(e){this.formState=r()({},this.formState,{scenes:r()({},e)})},handleFixturesChange:function(e){this.formState=r()({},this.formState,{fixtures:i()(e)})},handleChaserChange:function(e){this.formState=r()({},this.formState,{chaser:r()({},e)})},generate:function(){this.$emit("submit",this.formState)},addGithubButtonScript:function(){var e=document.createElement("script");e.setAttribute("src","https://buttons.github.io/buttons.js"),e.setAttribute("async","async"),e.setAttribute("defer","defer"),this.$refs.badge.appendChild(e)}},mounted:function(){this.generate(),this.addGithubButtonScript()},components:{ScenesFieldset:m,FixturesFieldset:w,ChaserFieldset:R}},W=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("form",{staticClass:"ui form segments"},[n("ScenesFieldset",{on:{change:e.handleScenesChange}}),n("FixturesFieldset",{attrs:{initialState:"formState.fixtures"},on:{change:e.handleFixturesChange}}),n("div",{staticClass:"ui blue buttons grid segment"},[n("div",{staticClass:"left floated column"},[n("div",{staticClass:"ui primary button",on:{click:e.generate}},[e._v("Generate")])]),n("div",{staticClass:"right floated badge column"},[n("div",{ref:"badge",staticClass:"badge content"},[n("a",{staticClass:"github-button",attrs:{href:"https://github.com/Tymek/QLC-Bulk-Scene-Generator/","data-size":"large"}},[e._v("Source Code")])])])])],1)},U=[];function L(e){n("TEl8"),n("2XsP")}var K=!1,$=L,N="data-v-d99db88c",X=null,G=Object(l["a"])(T,W,U,K,$,N,X);t["a"]=G.exports},YEUE:function(e,t){},"eDF+":function(e,t){},kVq8:function(e,t){},ovTO:function(e,t,n){"use strict";t["a"]=r;var a=n("EuXz"),i=(n.n(a),n("Biqn")),s=n.n(i);function r(e){var t=s()({id:0,name:"Scene",path:"",Fixtures:[]},e),n=t.id,a=t.name,i=t.path,r=t.Fixtures;function _(){return n}function u(){return{Function:{attributes:{ID:n,Type:"Scene",Name:a,Path:i},childNodes:[{Speed:{attributes:{FadeIn:"0",FadeOut:"0",Duration:"0"}}},r.map(function(e){return{FixtureVal:{attributes:{ID:e.id},childNodes:e.channels.map(function(e){return"".concat(e.id,",").concat(e.value)}).join(",")}}})]}}}return Object.freeze({getId:_,toXmlStructure:u})}}},[0]);