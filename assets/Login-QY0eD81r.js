import{r as p,u as h,j as e,N as b}from"./index-CJyA49r_.js";import{u as x,h as f,l as _}from"./hti-building-BXXjRDTD.js";const j="_pageContainer_1bn1u_1",N="_buildingImage_1bn1u_15",v="_logo_1bn1u_41",w="_title_1bn1u_57",C="_label_1bn1u_73",S="_input_1bn1u_89",I="_submitButton_1bn1u_125",$="_createAccount_1bn1u_165",s={pageContainer:j,buildingImage:N,logo:v,title:w,label:C,input:S,submitButton:I,createAccount:$},A=()=>{const[o,m]=p.useState({email:"",password:""}),n=h(),{formData:t,handleChange:i,handleSubmit:u,loading:r,error:c}=x({email:"",password:""},"https://htihousing-eel315fa.b4a.run/auth/dashboard/login",a=>{a.success&&(localStorage.setItem("authToken",a.data.token),localStorage.setItem("userRole",a.data.role),alert(a.message),n("/"))}),d=()=>{let a={email:"",password:""},l=!0;return t.email?/\S+@\S+\.\S+/.test(t.email)||(a.email="يرجى إدخال بريد إلكتروني صالح",l=!1):(a.email="البريد الإلكتروني مطلوب",l=!1),t.password?/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(t.password)||(a.password="كلمة السر يجب أن تحتوي على 8 أحرف على الأقل، وتحتوي على حرف كبير وحرف صغير ورقم ورمز",l=!1):(a.password="كلمة السر مطلوبة",l=!1),m(a),l},g=a=>{a.preventDefault(),d()&&u(a)};return e.jsxs("div",{className:`container-fluid vh-100 ${s.pageContainer}`,children:[e.jsx("img",{src:f,alt:"Building",className:s.buildingImage}),e.jsx("img",{src:_,alt:"HTI Logo",className:s.logo}),e.jsx("div",{className:"row align-items-center justify-content-center h-100",children:e.jsx("div",{className:"col-8 col-sm-7 col-md-6 col-lg-5 col-xl-4",children:e.jsxs("div",{className:s.formContainer,children:[e.jsx("h1",{className:s.title,children:"HTI Housing"}),e.jsxs("form",{onSubmit:g,noValidate:!0,children:[e.jsxs("div",{className:"form-group mb-3",children:[e.jsx("label",{htmlFor:"email",className:s.label,children:"البريد الإلكتروني"}),e.jsx("input",{type:"email",name:"email",className:`form-control ${s.input}`,placeholder:"البريد الإلكتروني...",value:t.email,onChange:i}),o.email&&e.jsx("p",{className:"text-danger",children:o.email})]}),e.jsxs("div",{className:"form-group mb-3",children:[e.jsx("label",{htmlFor:"password",className:s.label,children:"كلمة السر"}),e.jsx("input",{type:"password",name:"password",className:`form-control ${s.input}`,placeholder:"كلمة السر...",value:t.password,onChange:i}),o.password&&e.jsx("p",{className:"text-danger",children:o.password})]}),c&&e.jsx("p",{className:"text-danger",children:c}),e.jsx("button",{type:"submit",className:`btn ${s.submitButton}`,disabled:r,children:r?"جاري التحميل...":"تسجيل الدخول"}),e.jsxs("p",{className:s.createAccount,children:["ليس لديك حساب؟"," ",e.jsx(b,{to:"/register",onClick:()=>n("/register"),children:"إنشاء حساب"})]})]})]})})})]})};export{A as default};