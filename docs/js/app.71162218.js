(function(e){function t(t){for(var i,o,a=t[0],u=t[1],c=t[2],h=0,p=[];h<a.length;h++)o=a[h],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&p.push(n[o][0]),n[o]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(e[i]=u[i]);l&&l(t);while(p.length)p.shift()();return s.push.apply(s,c||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],i=!0,a=1;a<r.length;a++){var u=r[a];0!==n[u]&&(i=!1)}i&&(s.splice(t--,1),e=o(o.s=r[0]))}return e}var i={},n={app:0},s=[];function o(t){if(i[t])return i[t].exports;var r=i[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=i,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(r,i,function(t){return e[t]}.bind(null,i));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=t,a=a.slice();for(var c=0;c<a.length;c++)t(a[c]);var l=u;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";r("85ec")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var i=r("2b0e"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("section",{staticClass:"timer"}),r("section",{staticClass:"info"},[r("div",{staticClass:"info__container"},e._l(e.exercises,(function(e,t){return r("exercise-image",{key:e.name,attrs:{title:"#"+(t+1)+" "+e.name,image:e.image,reps:e.reps,instructions:e.instructions}})})),1)])])},s=[],o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"card"},[r("div",{staticClass:"card__top"},[r("img",{staticClass:"card__image",attrs:{src:e.image,alt:"Image of a cartoon woman performing a knee exercise"}})]),r("div",{staticClass:"card__body"},[r("h6",{staticClass:"card__title"},[e._v(e._s(e.title))]),r("span",{staticClass:"card__subtitle"},[e._v("Repeat "+e._s(e.reps.count)+" times, hold for "+e._s(e.reps.hold)+" seconds")]),r("p",{staticClass:"card__content"},[e._v(e._s(e.instructions))])])])},a=[],u={props:{image:{type:String,required:!0},title:{type:String,required:!0},reps:{type:Object,required:!0},instructions:{type:String,required:!0}}},c=u,l=(r("be75"),r("2877")),h=Object(l["a"])(c,o,a,!1,null,null,null),p=h.exports,d=r("5e21"),g={name:"App",components:{ExerciseImage:p},data:function(){return{exercises:d}}},f=g,y=(r("034f"),Object(l["a"])(f,n,s,!1,null,null,null)),m=y.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(e){return e(m)}}).$mount("#app")},"5e21":function(e){e.exports=JSON.parse('[{"name":"Quad sets","image":"https://www.whyiexercise.com/images/xKnee.exercises.quad.sets.jpg.pagespeed.ic.L9sSDNKkVc.jpg","instructions":"Place a pillow lengthwise under your knee. Pull your toes back and push your leg down to squash the pillow. You should feel your thigh and gluteus muscles during this exercise. This exercise can be done lying flat as shown, sitting in a chair, or leaning against a wall.","reps":{"count":10,"hold":10}},{"name":"Hamstring sets","image":"https://www.whyiexercise.com/images/xKnee.exercises.hamstring.sets.jpg.pagespeed.ic.-eXn4eAziE.jpg","instructions":"Lie on your back with knees bent and toes up. Dig your heels into the ground and pull back without sliding your heels. You should feel the back of your thigh, the hamstrings, during this exercise. As with quad sets, start with a moderate effort and increase your effort gradually.","reps":{"count":10,"hold":10}},{"name":"Straight leg raise","image":"https://www.whyiexercise.com/images/xKnee.exercises.straight.leg.raise.jpg.pagespeed.ic.lES5Mmal3H.jpg","instructions":"Tighten your thigh and pull your toes back just as you do for the quad set, then maintain the muscle tightness as you slowly raise your leg inline with your other thigh. Lower slowly and relax your muscles briefly at the bottom.","reps":{"count":10,"hold":1}},{"name":"Bridging","image":"https://www.whyiexercise.com/images/Knee.exercises.bridging.jpg","instructions":"Knees bent and feet flat on the floor with your heels spaced comfortably from your bottom. Fold a bed pillow in half, and place it between your knees. Squeeze the pillow and hold on to it tightly. Raise your bottom upward slowly lifting your lower back from the floor. Continue lifting your bottom upward until there is a straight line from your shoulders to your knees.","reps":{"count":7,"hold":7}},{"name":"Knee extension","image":"https://www.whyiexercise.com/images/Knee.exercises.knee.extension.jpg","instructions":"Sit upright in a chair, straighten your leg, tighten your thigh and pull your toes back. You may feel a stretch behind your knee during the exercise.","reps":{"count":10,"hold":10}},{"name":"Heel raises","image":"https://www.whyiexercise.com/images/Knee.exercises.heel.raises.jpg","instructions":"Hold onto a chair or counter-top only as much as you need to for safety. Go up on your toes as high as possible without leaning forward. Keep your weight over your big toes as you go up and down.","reps":{"count":10,"hold":3}},{"name":"Butt Kicks","image":"https://www.whyiexercise.com/images/Knee.exercises.butt.kicks.jpg","instructions":"Keep your knees in line and lift your heel toward your rear end, as high as possible. Stand upright when you lift your heel. You will feel your hamstring muscles during this exercise, and you may feel a stretch in the front of your thigh.","reps":{"count":10,"hold":1}}]')},"85ec":function(e,t,r){},be75:function(e,t,r){"use strict";r("c879")},c879:function(e,t,r){}});
//# sourceMappingURL=app.71162218.js.map