(window.webpackJsonp=window.webpackJsonp||[]).push([[9,2,3,4,5,6,7,8],{215:function(t,e,n){var content=n(222);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(61).default)("2c2e0b5a",content,!0,{sourceMap:!1})},216:function(t,e,n){"use strict";var r=n(13),o=n(3),l=n(63),c=n(16),h=n(15),d=n(30),m=n(152),f=n(62),_=n(5),v=n(64),y=n(98).f,k=n(34).f,x=n(18).f,w=n(219).trim,C="Number",T=o.Number,S=T.prototype,E=d(v(S))==C,N=function(t){var e,n,r,o,l,c,h,code,d=f(t,!1);if("string"==typeof d&&d.length>2)if(43===(e=(d=w(d)).charCodeAt(0))||45===e){if(88===(n=d.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(d.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+d}for(c=(l=d.slice(2)).length,h=0;h<c;h++)if((code=l.charCodeAt(h))<48||code>o)return NaN;return parseInt(l,r)}return+d};if(l(C,!T(" 0o1")||!T("0b1")||T("+0x1"))){for(var I,j=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof j&&(E?_((function(){S.valueOf.call(n)})):d(n)!=C)?m(new T(N(e)),n,j):N(e)},M=r?y(T):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),O=0;M.length>O;O++)h(T,I=M[O])&&!h(j,I)&&x(j,I,k(T,I));j.prototype=S,S.constructor=j,c(o,C,j)}},217:function(t,e,n){"use strict";n.r(e);n(216),n(44);var r={props:{initialReps:{type:Number,default:10},initialHold:{type:Number,default:10},initialRest:{type:Number,default:5},exercise:{type:String,required:!0}},data:function(){return{reps:0,hold:0,rest:0,saved:!1,savedTimeout:null,savedTimeoutDuration:3e3}},mounted:function(){this.reps=this.initialReps,this.hold=this.initialHold,this.rest=this.initialRest},methods:{save:function(){var t=this;clearTimeout(this.savedTimeout),this.savedTimeout=null,this.reps=Math.max(1,Math.round(this.reps)),this.hold=Math.max(1,Math.round(this.hold)),this.rest=Math.max(1,Math.round(this.rest));var e={reps:Number(this.reps),hold:Number(this.hold),rest:Number(this.rest)};window.localStorage.setItem("settings/".concat(this.exercise),JSON.stringify(e)),this.$emit("onSettingsChange",e),this.saved=!0,this.savedTimeout=setTimeout((function(){t.saved=!1}),this.savedTimeoutDuration)}}},o=(n(221),n(29)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("fieldset",{staticClass:"nhsuk-fieldset"},[t._m(0),t._v(" "),n("div",{staticClass:"nhsuk-form-group"},[n("label",{staticClass:"nhsuk-label",attrs:{for:"reps"}},[t._v("Repetitions")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.reps,expression:"reps"}],staticClass:"nhsuk-input",attrs:{id:"reps",name:"reps",type:"number"},domProps:{value:t.reps},on:{input:function(e){e.target.composing||(t.reps=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"nhsuk-form-group"},[n("label",{staticClass:"nhsuk-label",attrs:{for:"hold"}},[t._v("Number of seconds to hold the position for")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.hold,expression:"hold"}],staticClass:"nhsuk-input",attrs:{id:"hold",name:"hold",type:"number"},domProps:{value:t.hold},on:{input:function(e){e.target.composing||(t.hold=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"nhsuk-form-group"},[n("label",{staticClass:"nhsuk-label",attrs:{for:"rest"}},[t._v("Number of seconds to rest for")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.rest,expression:"rest"}],staticClass:"nhsuk-input",attrs:{id:"rest",name:"rest",type:"number"},domProps:{value:t.rest},on:{input:function(e){e.target.composing||(t.rest=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"settings__save"},[n("button",{staticClass:"nhsuk-button nhsuk-u-margin-bottom-0 nhsuk-u-margin-right-4",on:{click:t.save}},[t._v("Save")]),t._v(" "),t.saved?n("span",{staticClass:"nhsuk-body settings__msg"},[t._v("Saved!")]):t._e()])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("legend",{staticClass:"nhsuk-fieldset__legend nhsuk-fieldset__legend--l"},[n("h1",{staticClass:"nhsuk-fieldset__heading"},[t._v("What do you want this exercises settings to be?")])])}],!1,null,null,null);e.default=component.exports},218:function(t,e,n){var content=n(224);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(61).default)("916143b8",content,!0,{sourceMap:!1})},219:function(t,e,n){var r=n(14),o="["+n(220)+"]",l=RegExp("^"+o+o+"*"),c=RegExp(o+o+"*$"),h=function(t){return function(e){var n=String(r(e));return 1&t&&(n=n.replace(l,"")),2&t&&(n=n.replace(c,"")),n}};t.exports={start:h(1),end:h(2),trim:h(3)}},220:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},221:function(t,e,n){"use strict";n(215)},222:function(t,e,n){var r=n(60)(!1);r.push([t.i,".settings__save{display:flex;align-items:center}.settings__msg{color:#007f3b;font-weight:700}",""]),t.exports=r},223:function(t,e,n){"use strict";n(218)},224:function(t,e,n){var r=n(60)(!1);r.push([t.i,".timer__instruction{display:block}.timer__bar{display:grid;grid-template-columns:auto 1fr auto;grid-gap:1rem;gap:1rem;align-items:center}.timer__progress{height:6px;display:grid}.timer__elapsed{background:#005eb8}.timer__left{background:#aeb7bd}.timer__settings{display:block}.timer__settings:hover{cursor:pointer}",""]),t.exports=r},225:function(t,e,n){"use strict";n.r(e);var r={},o=n(29),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("a",{staticClass:"nhsuk-skip-link",attrs:{href:"#main-content"}},[t._v("Skip to main content")]),t._v(" "),n("header",{staticClass:"nhsuk-header",attrs:{role:"banner"}},[n("div",{staticClass:"nhsuk-width-container nhsuk-header__container"},[n("div",{staticClass:"nhsuk-header__logo nhsuk-header__logo--only"},[n("a",{staticClass:"nhsuk-header__link",attrs:{href:"/","aria-label":"NHS homepage"}},[n("svg",{staticClass:"nhsuk-logo",attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",role:"presentation",focusable:"false",viewBox:"0 0 40 16"}},[n("path",{staticClass:"nhsuk-logo__background",attrs:{d:"M0 0h40v16H0z"}}),t._v(" "),n("path",{staticClass:"nhsuk-logo__text",attrs:{d:"M3.9 1.5h4.4l2.6 9h.1l1.8-9h3.3l-2.8 13H9l-2.7-9h-.1l-1.8 9H1.1M17.3 1.5h3.6l-1 4.9h4L25 1.5h3.5l-2.7 13h-3.5l1.1-5.6h-4.1l-1.2 5.6h-3.4M37.7 4.4c-.7-.3-1.6-.6-2.9-.6-1.4 0-2.5.2-2.5 1.3 0 1.8 5.1 1.2 5.1 5.1 0 3.6-3.3 4.5-6.4 4.5-1.3 0-2.9-.3-4-.7l.8-2.7c.7.4 2.1.7 3.2.7s2.8-.2 2.8-1.5c0-2.1-5.1-1.3-5.1-5 0-3.4 2.9-4.4 5.8-4.4 1.6 0 3.1.2 4 .6"}}),t._v(" "),n("image",{attrs:{src:"https://assets.nhs.uk/images/nhs-logo.png","xlink:href":""}})])])])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:n(225).default})},226:function(t,e,n){"use strict";n.r(e);n(65),n(216),n(44);var r=n(217),o={props:{initialReps:{type:Number,required:!0},initialHold:{type:Number,required:!0},initialRest:{type:Number,default:5},exercise:{type:String,required:!0}},components:{ExerciseSettings:r.default},data:function(){return{reps:0,hold:0,rest:0,isSettingsOpen:!1,defaultInstruction:"When you start the timer the next instruction will be displayed here as well as being spoken to you.",nextInstructionText:"",nextInstructionSpeech:"",voicePitch:1,time:0,prepTime:20,nextEventTime:0,eventType:"hold",timer:null,finishedTimer:null}},computed:{percentElapsed:function(){return Math.floor(this.time/this.totalDuration*100)},percentLeft:function(){return 100-this.percentElapsed},totalDuration:function(){return this.prepTime+this.reps*this.hold+(this.reps-1)*this.rest}},mounted:function(){var t=window.localStorage.getItem("settings/".concat(this.exercise));if(t){var e=JSON.parse(t),n=e.reps,r=e.hold,o=e.rest;this.reps=n,this.hold=r,this.rest=o}else this.reps=this.initialReps,this.hold=this.initialHold,this.rest=this.initialRest},methods:{startTimer:function(){var t=this;this.timer||(this.finishedTimeout&&(clearTimeout(this.finishedTimeout),this.finishedTimeout=null),0===this.time&&this.setEvent("prep"),this.timer=setInterval((function(){t.time+=1,t.time!==t.totalDuration?t.time===t.nextEventTime&&("hold"===t.eventType?t.setEvent("rest"):"rest"!==t.eventType&&"prep"!==t.eventType||t.setEvent("hold")):t.onTimerFinished()}),1e3))},pauseTimer:function(){clearInterval(this.timer),this.timer=null},resetTimer:function(){this.nextInstructionText=this.defaultInstruction,clearInterval(this.timer),this.timer=null,this.time=0,this.nextEventTime=0},onTimerFinished:function(){var t=this;this.setNextInstruction("Well done, you have finished this exercise.","Finished"),this.say(),this.pauseTimer(),this.finishedTimeout=setTimeout((function(){return t.resetTimer()}),3e3)},formatTime:function(t){var e=Math.floor(t/60),n=t-60*e,r=e<10?"0".concat(e):e,o=n<10?"0".concat(n):n;return"".concat(r,":").concat(o)},setEvent:function(t){switch(this.eventType=t,t){case"prep":this.nextEventTime+=this.prepTime,this.setNextInstruction("You have ".concat(this.prepTime," seconds to get into position."));break;case"hold":this.nextEventTime+=this.hold,this.setNextInstruction("Perform the exercise.","Go");break;case"rest":this.nextEventTime+=this.rest,this.setNextInstruction("Rest for ".concat(this.rest," seconds."),"Rest")}this.say()},setNextInstruction:function(text,t){this.nextInstructionText=text,this.nextInstructionSpeech=t||text},say:function(){var t=new SpeechSynthesisUtterance(this.nextInstructionSpeech);t.pitch=this.voicePitch,speechSynthesis.speak(t)},onSettingsChange:function(t){var e=t.reps,n=t.hold,r=t.rest;this.reps=e,this.hold=n,this.rest=r}}},l=(n(223),n(29)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("details",{staticClass:"nhsuk-details"},[t._m(0),t._v(" "),n("div",{staticClass:"nhsuk-details__text"},[n("span",{staticClass:"timer__instruction nhsuk-body nhsuk-u-margin-bottom-3"},[t._v(t._s(t.nextInstructionText||t.defaultInstruction))]),t._v(" "),n("div",{staticClass:"timer__bar nhsuk-u-margin-bottom-3"},[n("span",{staticClass:"nhsuk-body"},[t._v(t._s(t.formatTime(t.time)))]),t._v(" "),n("div",{staticClass:"timer__progress",style:"grid-template-columns: "+t.percentElapsed+"% "+t.percentLeft+"%;"},[n("div",{staticClass:"timer__elapsed"}),t._v(" "),n("div",{staticClass:"timer__left"})]),t._v(" "),n("span",{staticClass:"nhsuk-body"},[t._v(t._s(this.formatTime(t.totalDuration)))])]),t._v(" "),n("button",{staticClass:"nhsuk-button",attrs:{disabled:t.timer},on:{click:t.startTimer}},[t._v("Start")]),t._v(" "),n("button",{staticClass:"nhsuk-button nhsuk-button--secondary",on:{click:t.pauseTimer}},[t._v("Pause")]),t._v(" "),n("button",{staticClass:"nhsuk-button nhsuk-button--secondary",on:{click:t.resetTimer}},[t._v("Reset")]),t._v(" "),n("a",{staticClass:"timer__settings nhsuk-link nhsuk-link--no-visited-state nhsuk-u-margin-bottom-3",on:{click:function(e){t.isSettingsOpen=!t.isSettingsOpen}}},[t._v(t._s(t.isSettingsOpen?"Close settings":"Change this exercises settings"))]),t._v(" "),t.isSettingsOpen?n("ExerciseSettings",{attrs:{initialReps:t.reps,initialHold:t.hold,initialRest:t.rest,exercise:t.exercise},on:{onSettingsChange:t.onSettingsChange}}):t._e()],1)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("summary",{staticClass:"nhsuk-details__summary"},[n("span",{staticClass:"nhsuk-details__summary-text"},[t._v(" Timer ")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{ExerciseSettings:n(217).default})},227:function(t,e,n){"use strict";n.r(e);var r={},o=n(29),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{attrs:{role:"contentinfo"}},[n("div",{staticClass:"nhsuk-footer",attrs:{id:"nhsuk-footer"}},[n("div",{staticClass:"nhsuk-width-container"},[n("p",{staticClass:"nhsuk-footer__copyright"},[t._v("© Crown copyright")])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Footer:n(227).default})},228:function(t,e,n){"use strict";n.r(e);var r={props:{items:{type:Array,required:!0}}},o=n(29),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"nhsuk-contents-list",attrs:{role:"navigation","aria-label":"Sections in this guide"}},[n("h2",{staticClass:"nhsuk-u-visually-hidden"},[t._v("Contents")]),t._v(" "),n("ol",{staticClass:"nhsuk-contents-list__list"},t._l(t.items,(function(e){return n("li",{key:e.text,staticClass:"nhsuk-contents-list__item"},[n("NuxtLink",{staticClass:"nhsuk-contents-list__link nhsuk-link--no-visited-state",attrs:{to:e.link}},[t._v(t._s(e.text))])],1)})),0)])}),[],!1,null,null,null);e.default=component.exports},229:function(t,e,n){"use strict";n.r(e);var r={props:{title:{type:String,required:!0},image:{type:Object,required:!0},instructions:{type:String,required:!0},reps:{type:Object,required:!0}}},o=n(29),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",{staticClass:"nhsuk-heading-l",attrs:{id:t.title.split(". ")[1].toLowerCase().replace(/\s/gi,"-")}},[t._v(t._s(t.title))]),t._v(" "),n("figure",{staticClass:"nhsuk-image"},[n("img",{staticClass:"nhsuk-image__img",attrs:{src:t.image.url,alt:t.image.alt}}),t._v(" "),n("figcaption",{staticClass:"nhsuk-image__caption"},[t._v(t._s(t.image.caption))])]),t._v(" "),n("details",{staticClass:"nhsuk-details"},[n("summary",{staticClass:"nhsuk-details__summary"},[n("span",{staticClass:"nhsuk-details__summary-text"},[t._v(" How to perform "+t._s(t.title.split(". ")[1].toLowerCase())+" ")])]),t._v(" "),n("div",{staticClass:"nhsuk-details__text"},[t._v("\n      "+t._s(t.instructions)+"\n    ")])]),t._v(" "),t.reps.hold>1?n("Timer",{attrs:{initialReps:t.reps.count,initialHold:t.reps.hold,initialRest:t.reps.rest,exercise:t.title}}):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Timer:n(226).default})},230:function(t,e,n){"use strict";n.r(e);var r={},o=n(29),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nhsuk-width-container"},[n("main",{staticClass:"nhsuk-main-wrapper",attrs:{id:"maincontent",role:"main"}},[t._t("default")],2)])}),[],!1,null,null,null);e.default=component.exports},231:function(t){t.exports=JSON.parse('[{"name":"Quad sets","image":"https://www.whyiexercise.com/images/xKnee.exercises.quad.sets.jpg.pagespeed.ic.L9sSDNKkVc.jpg","instructions":"Place a pillow lengthwise under your knee. Pull your toes back and push your leg down to squash the pillow. This exercise can be done lying flat as shown, sitting in a chair, or leaning against a wall.","extra":"You should feel your thigh and gluteus muscles during this exercise.","reps":{"count":10,"hold":10}},{"name":"Hamstring sets","image":"https://www.whyiexercise.com/images/xKnee.exercises.hamstring.sets.jpg.pagespeed.ic.-eXn4eAziE.jpg","instructions":"Lie on your back with knees bent and toes up. Dig your heels into the ground and pull back without sliding your heels. As with quad sets, start with a moderate effort and increase your effort gradually.","extra":"You should feel the back of your thigh, the hamstrings, during this exercise.","reps":{"count":10,"hold":10}},{"name":"Straight leg raise","image":"https://www.whyiexercise.com/images/xKnee.exercises.straight.leg.raise.jpg.pagespeed.ic.lES5Mmal3H.jpg","instructions":"Tighten your thigh and pull your toes back just as you do for the quad set, then maintain the muscle tightness as you slowly raise your leg inline with your other thigh. Lower slowly and relax your muscles briefly at the bottom.","extra":"Lower slowly and relax your muscles briefly at the bottom.","reps":{"count":10,"hold":1}},{"name":"Bridging","image":"https://www.whyiexercise.com/images/Knee.exercises.bridging.jpg","instructions":"Knees bent and feet flat on the floor with your heels spaced comfortably from your bottom. Fold a bed pillow in half, and place it between your knees. Squeeze the pillow and hold on to it tightly. Raise your bottom upward slowly lifting your lower back from the floor. Continue lifting your bottom upward until there is a straight line from your shoulders to your knees.","extra":"Squeeze the pillow and hold on to it tightly.","reps":{"count":7,"hold":7}},{"name":"Knee extension","image":"https://www.whyiexercise.com/images/Knee.exercises.knee.extension.jpg","instructions":"Sit upright in a chair, straighten your leg, tighten your thigh and pull your toes back.","extra":"You may feel a stretch behind your knee during the exercise.","reps":{"count":10,"hold":10}},{"name":"Heel raises","image":"https://www.whyiexercise.com/images/Knee.exercises.heel.raises.jpg","instructions":"Hold onto a chair or counter-top only as much as you need to for safety. Go up on your toes as high as possible without leaning forward.","extra":"Keep your weight over your big toes as you go up and down.","reps":{"count":10,"hold":3,"rest":3}},{"name":"Butt Kicks","image":"https://www.whyiexercise.com/images/Knee.exercises.butt.kicks.jpg","instructions":"Keep your knees in line and lift your heel toward your rear end, as high as possible. Stand upright when you lift your heel.","extra":"You will feel your hamstring muscles during this exercise, and you may feel a stretch in the front of your thigh.","reps":{"count":10,"hold":1}}]')},232:function(t,e,n){"use strict";n.r(e);n(31),n(66),n(35),n(67);var r=n(231),o={data:function(){return{exercises:r}},computed:{exerciseSections:function(){return this.exercises.map((function(t){return{text:t.name,link:"#".concat(t.name.toLowerCase().replace(/\s/gi,"-"))}}))}}},l=n(29),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Header"),t._v(" "),n("Content",[n("h1",{staticClass:"nhsuk-heading-xl"},[t._v("Knee Physio")]),t._v(" "),n("ContentsList",{attrs:{items:t.exerciseSections}}),t._v(" "),n("p",{staticClass:"nhsuk-body nhsuk-u-margin-bottom-8"},[t._v("\n      Each exercise listed below includes a timer to help you keep track of the amount of time you have to hold the\n      positions for, as well as the number of repetitions. If an exercise does not include a timer, you do not have to\n      hold any position during that exercise.\n    ")]),t._v(" "),t._l(t.exercises,(function(e,i){return n("div",{key:e.name},[n("Exercise",{attrs:{title:i+1+". "+e.name,image:{url:e.image,alt:e.name,caption:e.extra},instructions:e.instructions,reps:e.reps}}),t._v(" "),i!==t.exercises.length-1?n("hr",{staticClass:"nhsuk-section-break nhsuk-section-break--xl nhsuk-section-break--visible"}):t._e()],1)}))],2),t._v(" "),n("Footer")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:n(225).default,ContentsList:n(228).default,Exercise:n(229).default,Content:n(230).default,Footer:n(227).default})}}]);