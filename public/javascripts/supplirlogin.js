var eye = document.querySelector(".eye")
var password = document.querySelector(".password")

eye.addEventListener("click" , function(){
    if(password.type == "password"){
        password.type="input"
        eye.innerHTML=`<i class="ri-eye-fill"></i>`
    }else{
        password.type="password"
        eye.innerHTML=`<i class="ri-eye-off-fill"></i>`
    }
})