(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-21a38c0c"],{"0195":function(e,t,n){"use strict";n("8ba4"),n("a9e3");var r=n("7a23"),i=function(e){return Object(r["N"])("data-v-7d703a32"),e=e(),Object(r["L"])(),e},o={class:"assignTimePicker"},l=i((function(){return Object(r["n"])("option",{value:""},"請選擇或輸入學期標籤",-1)})),c=["value"],a={class:"radius-box"};function s(e,t,n,i,s,u){var b=Object(r["T"])("el-col"),d=Object(r["T"])("el-row");return Object(r["K"])(),Object(r["m"])("div",o,[Object(r["n"])("div",null,[Object(r["kb"])(Object(r["n"])("select",{class:"labelSelector","onUpdate:modelValue":t[0]||(t[0]=function(e){return s.semesterLabel=e}),onChange:t[1]||(t[1]=function(){return u.changeLabel&&u.changeLabel.apply(u,arguments)})},[l,(Object(r["K"])(!0),Object(r["m"])(r["b"],null,Object(r["R"])(s.labelOption,(function(e){return Object(r["K"])(),Object(r["m"])("option",{key:e.label,value:e.label},Object(r["X"])(e.label),9,c)})),128))],544),[[r["eb"],s.semesterLabel]])]),Object(r["n"])("div",a,[Object(r["r"])(d,null,{default:Object(r["jb"])((function(){return[Object(r["r"])(b,{class:"picker-col-lable row-border",span:4}),(Object(r["K"])(!0),Object(r["m"])(r["b"],null,Object(r["R"])(e.days,(function(e){return Object(r["K"])(),Object(r["k"])(b,{class:"picker-col row-border",span:4},{default:Object(r["jb"])((function(){return[Object(r["q"])(Object(r["X"])(e.label),1)]})),_:2},1024)})),256))]})),_:1}),(Object(r["K"])(!0),Object(r["m"])(r["b"],null,Object(r["R"])(e.times,(function(t,n){return Object(r["K"])(),Object(r["k"])(d,{class:"picker-row",justify:"space-around",style:Object(r["B"])(Number.isInteger(t.value)?"":"border-top: 2px solid #F2A54B")},{default:Object(r["jb"])((function(){return[Object(r["r"])(b,{class:"picker-col-lable",span:4},{default:Object(r["jb"])((function(){return[Object(r["q"])(Object(r["X"])(t.label),1)]})),_:2},1024),(Object(r["K"])(!0),Object(r["m"])(r["b"],null,Object(r["R"])(e.days,(function(e,n){return Object(r["K"])(),Object(r["k"])(b,{class:"picker-col pickable",span:4,onMouseenter:u.mouseEnter,onMouseleave:u.mouseLeave,onMousedown:function(n){return u.mouseDown(n,e.value+t.value)},onMouseup:u.mouseUp,onMousemove:function(n){return u.mouseMove(n,e.value+t.value)}},null,8,["onMouseenter","onMouseleave","onMousedown","onMouseup","onMousemove"])})),256))]})),_:2},1032,["style"])})),256))])])}var u=n("c7eb"),b=n("1da1"),d=(n("ac1f"),n("1276"),n("a434"),n("4e82"),n("a15b"),n("b3e6")),m={mixins:[d["a"]],props:{modelValue:Object,default:function(){return{available_time:"",semester_label:""}}},setup:function(e,t){var n=t.emit,i=Object(r["i"])({get:function(){return e.modelValue},set:function(e){return n("update:modelValue",e)}});return{theModel:i}},data:function(){return{mousepressed:!1,mousepop:!1,selectedTime:[],semesterLabel:"",labelOption:""}},watch:{modelValue:function(){this.createBlock()}},created:function(){var e=this;return Object(b["a"])(Object(u["a"])().mark((function t(){return Object(u["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.$store.state.cases.length<=0&&e.$store.dispatch("fetchCases"),t.next=3,e.$store.dispatch("fetchSemesterLabel");case 3:e.labelOption=e.$store.state.semester_label.data;case 4:case"end":return t.stop()}}),t)})))()},mounted:function(){this.createBlock()},methods:{createBlock:function(){if(this.modelValue){var e=[],t=this.modelValue.available_time;this.semesterLabel=this.modelValue.semester_label;try{e=t.split(",")}catch(o){console.error("Error occurred while parsing modelValue:",o)}if(e.length>1){this.clearBlock(),this.selectedTime=[];for(var n=0;n<e.length;n++){this.selectedTime.push(e[n]);var r=e[n].split("");r[0]=parseInt(this.dayRule[r[0]])-1,r[1]=parseInt(this.timeRule[r[1]])-1;var i=document.getElementsByClassName("pickable");i[r[0]+5*r[1]].classList.add("picked")}}}},clearBlock:function(){for(var e=document.getElementsByClassName("pickable"),t=0;t<e.length;t++)e[t].classList.remove("picked");this.selectedTime=[]},mouseEnter:function(){},mouseLeave:function(){this.mousepop=!1},mouseDown:function(e,t){this.mousepressed=!0,this.handleTime(e,t)},mouseUp:function(){this.mousepressed=!1},mouseMove:function(e,t){this.mousepressed&&!this.mousepop&&this.handleTime(e,t)},handleTime:function(e,t){var n=this;if(e.target.classList.toggle("picked"),e.target.classList.contains("picked"))this.selectedTime.push(t);else{var r=this.selectedTime.indexOf(t);r>-1&&this.selectedTime.splice(r,1)}this.selectedTime.sort((function(e,t){var r=e.split(""),i=t.split("");return r[0]=n.dayRule[r[0]],i[0]=n.dayRule[i[0]],r[0]==i[0]?n.timeRule[r[1]]-n.timeRule[i[1]]:r[0]-i[0]})),this.mousepop=!0;var i=this.selectedTime.join(",");this.$emit("update:modelValue",{available_time:i,semester_label:this.semesterLabel})},changeLabel:function(){var e=this.selectedTime.join(",");this.$emit("update:modelValue",{available_time:e,semester_label:this.semesterLabel})}}},f=(n("6e03"),n("d959")),p=n.n(f);const j=p()(m,[["render",s],["__scopeId","data-v-7d703a32"]]);t["a"]=j},"19dc":function(e,t,n){"use strict";n("78e6")},"4de4":function(e,t,n){"use strict";var r=n("23e7"),i=n("b727").filter,o=n("1dde"),l=o("filter");r({target:"Array",proto:!0,forced:!l},{filter:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}})},"6e03":function(e,t,n){"use strict";n("721e")},"721e":function(e,t,n){},"78e6":function(e,t,n){},a15b:function(e,t,n){"use strict";var r=n("23e7"),i=n("e330"),o=n("44ad"),l=n("fc6a"),c=n("a640"),a=i([].join),s=o!=Object,u=c("join",",");r({target:"Array",proto:!0,forced:s||!u},{join:function(e){return a(l(this),void 0===e?",":e)}})},a434:function(e,t,n){"use strict";var r=n("23e7"),i=n("7b0b"),o=n("23cb"),l=n("5926"),c=n("07fa"),a=n("3511"),s=n("65f0"),u=n("8418"),b=n("083a"),d=n("1dde"),m=d("splice"),f=Math.max,p=Math.min;r({target:"Array",proto:!0,forced:!m},{splice:function(e,t){var n,r,d,m,j,O,h=i(this),_=c(h),v=o(e,_),g=arguments.length;for(0===g?n=r=0:1===g?(n=0,r=_-v):(n=g-2,r=p(f(l(t),0),_-v)),a(_+n-r),d=s(h,r),m=0;m<r;m++)j=v+m,j in h&&u(d,m,h[j]);if(d.length=r,n<r){for(m=v;m<_-r;m++)j=m+r,O=m+n,j in h?h[O]=h[j]:b(h,O);for(m=_;m>_-r+n;m--)b(h,m-1)}else if(n>r)for(m=_-r;m>v;m--)j=m+r-1,O=m+n-1,j in h?h[O]=h[j]:b(h,O);for(m=0;m<n;m++)h[m+v]=arguments[m+2];return h.length=_-r+n,d}})},c343:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n("d3b7"),n("159b"),n("b0c0"),n("4de4");var r={data:function(){return{}},created:function(){this.$store.state.counselors.length<=0&&this.$store.dispatch("fetchCounselors")},methods:{querySearch:function(e,t){var n=this.$store.state.counselors;n.forEach((function(e){e.value=e.name}));var r=e?n.filter(this.createFilter(e)):n;t(r)},createFilter:function(e){return function(t){return t.value.toLowerCase().indexOf(e.toLowerCase())>=0}}}}},d6d3:function(e,t,n){"use strict";n.r(t);n("b0c0");var r=n("7a23"),i=function(e){return Object(r["N"])("data-v-a7b41c9c"),e=e(),Object(r["L"])(),e},o={class:"page-container"},l=i((function(){return Object(r["n"])("div",{class:"page-title"},"值日端-輸入個案",-1)})),c=Object(r["q"])("儲存"),a={class:"dialog-footer",slot:"footer",style:{"text-align":"center"}},s=Object(r["q"])("確定");function u(e,t,n,i,u,b){var d=Object(r["T"])("el-input"),m=Object(r["T"])("el-form-item"),f=Object(r["T"])("assignTimePicker"),p=Object(r["T"])("el-col"),j=Object(r["T"])("el-option"),O=Object(r["T"])("el-select"),h=Object(r["T"])("el-autocomplete"),_=Object(r["T"])("el-date-picker"),v=Object(r["T"])("el-button"),g=Object(r["T"])("el-row"),k=Object(r["T"])("el-form"),V=Object(r["T"])("el-result"),T=Object(r["T"])("el-dialog");return Object(r["K"])(),Object(r["m"])("div",o,[l,Object(r["r"])(k,{model:u.form,rules:u.rules,ref:"form","label-width":"150px"},{default:Object(r["jb"])((function(){return[Object(r["r"])(g,{gutter:20},{default:Object(r["jb"])((function(){return[Object(r["r"])(p,{sm:24,md:12},{default:Object(r["jb"])((function(){return[Object(r["r"])(m,{label:"姓名",prop:"name"},{default:Object(r["jb"])((function(){return[Object(r["r"])(d,{class:"input-container",placeholder:"請輸入姓名",modelValue:u.form.name,"onUpdate:modelValue":t[0]||(t[0]=function(e){return u.form.name=e})},null,8,["modelValue"])]})),_:1}),Object(r["r"])(m,{label:"學號",prop:"id"},{default:Object(r["jb"])((function(){return[Object(r["r"])(d,{class:"input-container",placeholder:"請輸入學號",modelValue:u.form.id,"onUpdate:modelValue":t[1]||(t[1]=function(e){return u.form.id=e})},null,8,["modelValue"])]})),_:1}),Object(r["r"])(m,{label:"可諮商時段",prop:"time_picker"},{default:Object(r["jb"])((function(){return[Object(r["r"])(f,{modelValue:u.form.time_picker,"onUpdate:modelValue":t[2]||(t[2]=function(e){return u.form.time_picker=e}),ref:"timePicker"},null,8,["modelValue"])]})),_:1})]})),_:1}),Object(r["r"])(p,{sm:24,md:12},{default:Object(r["jb"])((function(){return[Object(r["r"])(m,{label:"危機程度",prop:"crisis_level"},{default:Object(r["jb"])((function(){return[Object(r["r"])(O,{class:"input-container",placeholder:"請輸入危機程度",modelValue:u.form.crisis_level,"onUpdate:modelValue":t[3]||(t[3]=function(e){return u.form.crisis_level=e})},{default:Object(r["jb"])((function(){return[(Object(r["K"])(!0),Object(r["m"])(r["b"],null,Object(r["R"])(u.crisis_options,(function(e){return Object(r["K"])(),Object(r["k"])(j,{key:e,label:e,value:e},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"])]})),_:1}),Object(r["r"])(m,{label:"初談老師",prop:"init_counselor_name"},{default:Object(r["jb"])((function(){return[Object(r["r"])(h,{class:"input-container",modelValue:u.form.init_counselor_name,"onUpdate:modelValue":t[4]||(t[4]=function(e){return u.form.init_counselor_name=e}),"fetch-suggestions":e.querySearch,placeholder:"請輸入初談老師"},null,8,["modelValue","fetch-suggestions"])]})),_:1}),Object(r["r"])(m,{label:"狀況說明",prop:"discription"},{default:Object(r["jb"])((function(){return[Object(r["r"])(d,{class:"input-container",type:"textarea",placeholder:"請輸入狀況說明",autosize:{minRows:3,maxRows:6},modelValue:u.form.discription,"onUpdate:modelValue":t[5]||(t[5]=function(e){return u.form.discription=e})},null,8,["modelValue"])]})),_:1}),Object(r["r"])(m,{label:"初談時間",prop:"init_consultation_date"},{default:Object(r["jb"])((function(){return[Object(r["r"])(_,{modelValue:u.form.init_consultation_date,"onUpdate:modelValue":t[6]||(t[6]=function(e){return u.form.init_consultation_date=e}),type:"date"},null,8,["modelValue"])]})),_:1}),Object(r["r"])(p,{span:4,offset:12},{default:Object(r["jb"])((function(){return[Object(r["r"])(m,null,{default:Object(r["jb"])((function(){return[Object(r["r"])(v,{type:"primary",onClick:t[7]||(t[7]=function(e){return b.submitForm("form")})},{default:Object(r["jb"])((function(){return[c]})),_:1})]})),_:1})]})),_:1})]})),_:1})]})),_:1})]})),_:1},8,["model","rules"]),Object(r["r"])(T,{title:"狀態",modelValue:u.dialogVisible,"onUpdate:modelValue":t[9]||(t[9]=function(e){return u.dialogVisible=e}),width:"30%",onClose:b.handleClose,center:""},{default:Object(r["jb"])((function(){return[Object(r["r"])(V,{icon:"success",title:"儲存成功",subTitle:"點擊確定關閉提示"}),Object(r["n"])("div",a,[Object(r["r"])(v,{type:"primary",onClick:t[8]||(t[8]=function(e){return u.dialogVisible=!1})},{default:Object(r["jb"])((function(){return[s]})),_:1})])]})),_:1},8,["modelValue","onClose"])])}var b=n("0195"),d=n("c343"),m={mixins:[d["a"]],components:{assignTimePicker:b["a"]},data:function(){return{form:{id:"",name:"",time_picker:{available_time:"",semester_label:""},crisis_level:"",discription:"",init_counselor_name:"",init_consultation_date:""},crisis_options:["A+","A","A-","B+","B","B-","C"],rules:{name:[{required:!0,message:"請輸入姓名",trigger:"blur"}],id:[{required:!0,message:"請輸入學號",trigger:"blur"}],crisis_level:[{required:!0,message:"請選擇危機程度",trigger:"blur"}],init_counselor_name:[{required:!0,message:"請輸入初談老師",trigger:"change"}]},dialogVisible:!1}},mounted:function(){this.form.init_consultation_date=this.getDatetime()},methods:{postCase:function(){var e=this;this.$http.post("/api/cases",{caseId:this.form.id,name:this.form.name,available_time:this.form.time_picker.available_time,semester_label:this.form.time_picker.semester_label,crisis_level:this.form.crisis_level,init_counselor_name:this.form.init_counselor_name,discription:""==this.form.discription?"無":this.form.discription,init_consultation_date:this.getDatetime(this.form.init_consultation_date),status:"unassign"}).then((function(t){console.log(t.data.message),e.dialogVisible=!0,e.$store.commit("SET_STATUS","end")})).catch((function(e){console.log(e)}))},getDatetime:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;e=t?new Date(t):new Date;var n=e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate();return n},submitForm:function(e){var t=this;this.$refs[e].validate((function(e){if(!e)return console.log("error submit!!"),!1;t.$store.commit("SET_STATUS","pending"),t.postCase()}))},resetForm:function(e){this.$refs[e].resetFields(),this.$refs.timePicker.clearBlock()},handleClose:function(){this.resetForm("form")}}},f=(n("19dc"),n("d959")),p=n.n(f);const j=p()(m,[["render",u],["__scopeId","data-v-a7b41c9c"]]);t["default"]=j}}]);
//# sourceMappingURL=chunk-21a38c0c.973dae57.js.map