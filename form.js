const name=document.getElementById("name")
const email=document.getElementById("email")
const phone=document.getElementById("phoneNumber")
let validName=false;
let validEmail=false;
let validPhone=false;
// console.log(name,email,phone)
name.addEventListener('blur',()=>{
    console.log("name is blurred");
    let regex=/^[a-zA-Z]([0-9a-zA-Z]){2,10}$/
    let str=name.value;
    if(regex.test(str)){
        console.log("it matched");
        name.classList.remove('is-invalid');
        validName=true;
    }
    else{
        console.log("Theek se likh bsdk");
        name.classList.add('is-invalid');
        validName=false
    }
})
email.addEventListener('blur',()=>{
    console.log("email is blurred");
    let regex=/^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str=email.value;
    if(regex.test(str)){
        console.log("it matched");
        email.classList.remove('is-invalid');
        validEmail=true;
    }
    else{
        console.log("Theek se likh bsdk");
        email.classList.add('is-invalid');
        validEmail=false;
    }
})
phone.addEventListener('blur',()=>{
    console.log("phone is blurred");
    let regex=/^[0-9]{10}$/
    let str=phone.value;
    if(regex.test(str)){
        console.log("it matched");
        phone.classList.remove('is-invalid');
        validPhone=true;
    }
    else{
        console.log("Theek se likh bsdk");
        phone.classList.add('is-invalid');
        validPhone=false;
    }
})
let submit=document.getElementById("submit");
submit.addEventListener('click',(e)=>{
    e.preventDefault();
    if(validEmail && validPhone && validName ){
        let success=document.getElementById("success");
        success.classList.add("show");
        failure.classList.remove("show");
    
    }
     else{
        let failure=document.getElementById("failure");
        failure.classList.add("show");
        success.classList.remove("show");
     }

})