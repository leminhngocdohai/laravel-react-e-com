import{r as f,u as x,a as e,F as E,j as t,T as o}from"./app.c9525618.js";import I from"./Dashboard.b64fcdbb.js";import"./Api.9f5ce733.js";import{I as s}from"./InputError.7afcacf4.js";import{I as m}from"./InputLabel.4a2fc4b4.js";import{P as C}from"./PrimaryButton.0958888b.js";function D(){const[c,i]=f.exports.useState(""),{data:r,setData:l,post:p,processing:d,errors:n,reset:b}=x({name:"",image:null,sku:"",parent_id:""}),u=a=>{if(l(a.target.name,a.target.type==="checkbox"?a.target.checked:a.target.value),a.target.type==="file"){const h=a.target.files[0];i(URL.createObjectURL(h))}},g=a=>{l("image",a.target.files[0]),i(URL.createObjectURL(a.target.files[0]))};return e(E,{children:t(I,{children:[e("h1",{children:"Th\xEAm danh m\u1EE5c"}),t("form",{onSubmit:a=>{a.preventDefault(),p(route("api.category.store"),r,{forceFormData:!0})},encType:"multipart/form-data",children:[t("div",{children:[e(m,{forInput:"name",value:"T\xEAn"}),e(o,{type:"text",name:"name",value:r.name,className:"",autoComplete:"name",isFocused:!0,handleChange:u}),e(s,{message:n.name})]}),t("div",{children:[e(m,{forInput:"image",value:"H\xECnh \u1EA3nh"}),e("input",{type:"file",onChange:g}),e("img",{className:"input-img",src:c,alt:""}),e(s,{message:n.name})]}),t("div",{children:[e(m,{forInput:"sku",value:"M\xE3 S\u1EA3n Ph\u1EA9m"}),e(o,{type:"text",name:"sku",value:r.sku,className:"",autoComplete:"sku",isFocused:!0,handleChange:u}),e(s,{message:n.name})]}),t("div",{children:[e(m,{forInput:"parent_id",value:"Cateee"}),e(o,{type:"text",name:"parent_id",value:r.parent_id,className:"",autoComplete:"parent_id",isFocused:!0,handleChange:u}),e(s,{message:n.name})]}),e(C,{className:"btn",processing:d,children:"T\u1EA1o Danh M\u1EE5c"})]})]})})}export{D as default};