(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{215:function(t,e,n){var content=n(220);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(65).default)("916143b8",content,!0,{sourceMap:!1})},216:function(t,e,n){"use strict";var r=n(13),o=n(3),c=n(62),h=n(16),l=n(15),m=n(30),f=n(152),d=n(61),v=n(5),_=n(63),T=n(98).f,I=n(34).f,x=n(18).f,y=n(217).trim,E="Number",k=o.Number,N=k.prototype,C=m(_(N))==E,S=function(t){var e,n,r,o,c,h,l,code,m=d(t,!1);if("string"==typeof m&&m.length>2)if(43===(e=(m=y(m)).charCodeAt(0))||45===e){if(88===(n=m.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(m.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+m}for(h=(c=m.slice(2)).length,l=0;l<h;l++)if((code=c.charCodeAt(l))<48||code>o)return NaN;return parseInt(c,r)}return+m};if(c(E,!k(" 0o1")||!k("0b1")||k("+0x1"))){for(var w,A=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof A&&(C?v((function(){N.valueOf.call(n)})):m(n)!=E)?f(new k(S(e)),n,A):S(e)},F=r?T(k):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),M=0;F.length>M;M++)l(k,w=F[M])&&!l(A,w)&&x(A,w,I(k,w));A.prototype=N,N.constructor=A,h(o,E,A)}},217:function(t,e,n){var r=n(14),o="["+n(218)+"]",c=RegExp("^"+o+o+"*"),h=RegExp(o+o+"*$"),l=function(t){return function(e){var n=String(r(e));return 1&t&&(n=n.replace(c,"")),2&t&&(n=n.replace(h,"")),n}};t.exports={start:l(1),end:l(2),trim:l(3)}},218:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},219:function(t,e,n){"use strict";n(215)},220:function(t,e,n){var r=n(64)(!1);r.push([t.i,".timer__instruction{display:block}.timer__bar{display:grid;grid-template-columns:auto 1fr auto;grid-gap:1rem;gap:1rem;align-items:center}.timer__progress{height:6px;display:grid}.timer__elapsed{background:#005eb8}.timer__left{background:#aeb7bd}",""]),t.exports=r},222:function(t,e,n){"use strict";n.r(e);n(60),n(216),n(44);var r={props:{reps:{type:Number,required:!0},holdTime:{type:Number,required:!0}},data:function(){return{time:0,defaultInstruction:"When you start the timer the next instruction will be displayed here as well as being spoken to you.",nextInstructionText:"",nextInstructionSpeech:"",prepTime:20,restTime:5,voicePitch:1.5,timer:null,finishedTimer:null,nextEventTime:0,eventType:"hold"}},computed:{percentElapsed:function(){return Math.floor(this.time/this.totalDuration*100)},percentLeft:function(){return 100-this.percentElapsed},totalDuration:function(){return this.prepTime+this.reps*this.holdTime+(this.reps-1)*this.restTime}},methods:{startTimer:function(){var t=this;this.timer||(this.finishedTimeout&&(clearTimeout(this.finishedTimeout),this.finishedTimeout=null),0===this.time&&this.setEvent("prep"),this.timer=setInterval((function(){t.time+=1,t.time!==t.totalDuration?t.time===t.nextEventTime&&("hold"===t.eventType?t.setEvent("rest"):"rest"!==t.eventType&&"prep"!==t.eventType||t.setEvent("hold")):t.onTimerFinished()}),1e3))},pauseTimer:function(){clearInterval(this.timer),this.timer=null},resetTimer:function(){this.nextInstructionText=this.defaultInstruction,clearInterval(this.timer),this.timer=null,this.time=0,this.nextEventTime=0},onTimerFinished:function(){var t=this;this.setNextInstruction("Well done, you have finished this exercise.","Finished"),this.say(),this.pauseTimer(),this.finishedTimeout=setTimeout((function(){return t.resetTimer()}),3e3)},formatTime:function(t){var e=Math.floor(t/60),n=t-60*e,r=e<10?"0".concat(e):e,o=n<10?"0".concat(n):n;return"".concat(r,":").concat(o)},setEvent:function(t){switch(this.eventType=t,t){case"prep":this.nextEventTime+=this.prepTime,this.setNextInstruction("You have ".concat(this.prepTime," seconds to get into position."));break;case"hold":this.nextEventTime+=this.holdTime,this.setNextInstruction("Perform the exercise.","Go");break;case"rest":this.nextEventTime+=this.restTime,this.setNextInstruction("Rest for ".concat(this.restTime," seconds."),"Rest")}this.say()},setNextInstruction:function(text,t){this.nextInstructionText=text,this.nextInstructionSpeech=t||text},say:function(){var t=new SpeechSynthesisUtterance(this.nextInstructionSpeech);t.pitch=this.voicePitch,speechSynthesis.speak(t)}}},o=(n(219),n(29)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("details",{staticClass:"nhsuk-details"},[t._m(0),t._v(" "),n("div",{staticClass:"nhsuk-details__text"},[n("span",{staticClass:"timer__instruction nhsuk-body nhsuk-u-margin-bottom-3"},[t._v(t._s(t.nextInstructionText||t.defaultInstruction))]),t._v(" "),n("div",{staticClass:"timer__bar nhsuk-u-margin-bottom-3"},[n("span",{staticClass:"nhsuk-body"},[t._v(t._s(t.formatTime(t.time)))]),t._v(" "),n("div",{staticClass:"timer__progress",style:"grid-template-columns: "+t.percentElapsed+"% "+t.percentLeft+"%;"},[n("div",{staticClass:"timer__elapsed"}),t._v(" "),n("div",{staticClass:"timer__left"})]),t._v(" "),n("span",{staticClass:"nhsuk-body"},[t._v(t._s(this.formatTime(t.totalDuration)))])]),t._v(" "),n("button",{staticClass:"nhsuk-button",attrs:{disabled:t.timer},on:{click:t.startTimer}},[t._v("Start")]),t._v(" "),n("button",{staticClass:"nhsuk-button nhsuk-button--secondary",on:{click:t.pauseTimer}},[t._v("Pause")]),t._v(" "),n("button",{staticClass:"nhsuk-button nhsuk-button--secondary",on:{click:t.resetTimer}},[t._v("Reset")])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("summary",{staticClass:"nhsuk-details__summary"},[n("span",{staticClass:"nhsuk-details__summary-text"},[t._v(" Timer ")])])}],!1,null,null,null);e.default=component.exports}}]);