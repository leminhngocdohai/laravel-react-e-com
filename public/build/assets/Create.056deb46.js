import{r as v,u as y,e as x,a as e,F as C,j as a,T as o}from"./app.c9525618.js";import E from"./Dashboard.b64fcdbb.js";import"./Api.9f5ce733.js";import{I as r}from"./InputError.7afcacf4.js";import{I as i}from"./InputLabel.4a2fc4b4.js";import{P as I}from"./PrimaryButton.0958888b.js";function D(){const[p,l]=v.exports.useState(""),{data:s,setData:c,post:d,processing:h,errors:n,reset:F}=y({name:"",image:null,sku:"",price:"",quantity:"",description:"",category_id:"",drone:""}),{props:g}=x(),u=t=>{if(c(t.target.name,t.target.type==="checkbox"?t.target.checked:t.target.value),t.target.type==="file"){const m=t.target.files[0];l(URL.createObjectURL(m))}},f=t=>{c("image",t.target.files[0]),l(URL.createObjectURL(t.target.files[0]))};return e(C,{children:a(E,{children:[e("h1",{children:"Th\xEAm S\u1EA3n ph\u1EA9m"}),a("form",{onSubmit:t=>{t.preventDefault(),d(route("api.product.store"),s,{forceFormData:!0})},encType:"multipart/form-data",children:[a("div",{children:[e(i,{forInput:"name",value:"T\xEAn"}),e(o,{type:"text",name:"name",value:s.name,className:"",autoComplete:"name",isFocused:!0,handleChange:u}),e(r,{message:n.name})]}),a("div",{children:[e(i,{forInput:"sos",value:"sos"}),e(o,{type:"text",name:"sos",value:s.sos,className:"",autoComplete:"sos",isFocused:!0,handleChange:u}),e(r,{message:n.sos})]}),a("div",{children:[e(i,{forInput:"sku",value:"M\xE3 Code"}),e(o,{type:"text",name:"sku",value:s.sku,className:"",autoComplete:"sku",isFocused:!0,handleChange:u}),e(r,{message:n.sku})]}),a("div",{children:[e(i,{forInput:"image",value:"H\xECnh \u1EA3nh"}),e("input",{type:"file",onChange:f}),e("img",{className:"input-img",src:p,alt:""}),e(r,{message:n.image})]}),a("div",{children:[e(i,{forInput:"price",value:"Gi\xE1"}),e(o,{type:"number",name:"price",value:s.price,className:"",autoComplete:"price",isFocused:!0,handleChange:u}),e(r,{message:n.price})]}),a("div",{children:[e(i,{forInput:"quantity",value:"S\u1ED1 l\u01B0\u1EE3ng"}),e(o,{type:"number",name:"quantity",value:s.quantity,className:"",autoComplete:"quantity",isFocused:!0,handleChange:u}),e(r,{message:n.quantity})]}),a("div",{children:[e(i,{forInput:"description",value:"M\xF4 t\u1EA3"}),e(o,{type:"text",name:"description",value:s.description,className:"",autoComplete:"description",isFocused:!0,handleChange:u}),e(r,{message:n.description})]}),e("select",{name:"category_id",id:"category_id",children:g.categories.map((t,m)=>a("option",{value:t.id,children:[t.id,t.name]},m))}),e(I,{className:"btn",processing:h,children:"Th\xEAm S\u1EA3n Ph\u1EA9m"})]})]})})}export{D as default};
