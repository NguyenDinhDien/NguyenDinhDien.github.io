import{P as U}from"./profile-f1b0d866.js";import{_ as A}from"./index.vue_vue_type_style_index_0_lang-8e78bb98.js";import{D as M}from"./index-5b3c78e9.js";import{M as R}from"./messageDialog-908c7e4b.js";import{e as f}from"./successNotification.vue_vue_type_script_setup_true_lang-8de7b1c0.js";import{d as j,a as z,u as J,r as a,b as u,o,c as _,f as i,w as d,F as w,z as k,y as m,h as $,t as q,g as c,B as p,e as D}from"./index-fae5d1f2.js";import{R as G,O as H,S as K}from"./page.constant-c4856d42.js";import"./profile-6ebe56f0.js";import"./common-98ce730a.js";import"./validators-4c406939.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./userInfo.vue_vue_type_style_index_0_lang-0230a72c.js";import"./messages.constants-493f0f9e.js";const Q={id:"profile",class:"main-content"},W={key:0,id:"tabs-profile"},X={class:"project-info"},ve=j({__name:"index",setup(Y){const{t:V}=z();let S=J().getUser();const l=a([{name:"profile",view:"Profile"}]),t=a(0),I=a(0),g=a(""),P=a(0),b=a(""),h=a(!0);f.on("openDoChecklistTab",n=>{console.log(n),I.value=n.checklistId,g.value=n.userId,P.value=n.roleId,b.value=n.fullNameLead,h.value=!0,l.value.length<2?y():T()});const y=()=>{l.value.push({name:"do_checklist",view:"DoChecklist"}),t.value++},s=a(!1),T=()=>{s.value=!0};f.on("closeDialog",()=>{s.value=!1});const L=()=>{s.value=!1,f.emit("reloadDoChecklistData"),t.value++},N=()=>{l.value.length--,t.value>0&&t.value--};return(n,r)=>{const B=u("v-tab"),C=u("v-icon"),E=u("v-tabs"),x=u("v-window-item"),F=u("v-window"),O=u("v-dialog");return o(),_("div",null,[i(E,{modelValue:t.value,"onUpdate:modelValue":r[0]||(r[0]=e=>t.value=e),id:"tabbar"},{default:d(()=>[(o(!0),_(w,null,k(l.value,(e,v)=>(o(),m(B,{value:v,class:"tab-item"},{default:d(()=>[$(q(c(V)("common."+e.name)),1)]),_:2},1032,["value"]))),256)),l.value.length>1?(o(),m(C,{key:0,icon:"mdi-close",size:"x-small",onClick:N})):p("",!0)]),_:1},8,["modelValue"]),D("div",Q,[i(F,{modelValue:t.value,"onUpdate:modelValue":r[1]||(r[1]=e=>t.value=e)},{default:d(()=>[(o(!0),_(w,null,k(l.value,(e,v)=>(o(),m(x,{key:v,value:v},{default:d(()=>[e.view==="Profile"?(o(),_("div",W,[i(U),D("div",X,[i(A,{userId:c(S).user_id,role:c(G),objectStatus:c(H),statusMode:c(K).CLOSED},null,8,["userId","role","objectStatus","statusMode"])])])):p("",!0),e.view==="DoChecklist"?(o(),m(M,{key:1,checklistIdProps:I.value,userIdProps:g.value,roleIdProps:P.value,fullNameLeadPros:b.value,disableInputFromParentProps:h.value},null,8,["checklistIdProps","userIdProps","roleIdProps","fullNameLeadPros","disableInputFromParentProps"])):p("",!0)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),i(O,{modelValue:s.value,"onUpdate:modelValue":r[2]||(r[2]=e=>s.value=e),width:"30%"},{default:d(()=>[s.value?(o(),m(R,{key:0,title:"confirm",message:"message_add_do_checklist_tab",typeBtn:"primary",onAgreeDialog:L})):p("",!0)]),_:1},8,["modelValue"])])])}}});export{ve as default};
