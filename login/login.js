var idInput = document.getElementById("idInput");
var passInput = document.getElementById("passInput");
var userGender = '',
    userHeight = '',
    userShoeSize = '',
    userColor = '',
    userWeight = '';
//------------------------------function-----------------------
function errorCheck(){
    if(idInput.value =='' || passInput.value ==''){
        return false;
    }
    return true;
}
function idCheck(){
    for(var l = 0; l < localStorage.length; l++){
        if(idInput.value == localStorage.key(l)){
            return true;
        }
    }
    alert("Wrong Username")
    return false;
}

function passCheck(){
    var theValue = localStorage.getItem(idInput.value);
    var thePass = theValue.split(';')[4];

    if(passInput.value == thePass){
        return true;
    }
    alert("Wrong password")
    return false;
}
//-----------------------------interaction----------------------
document.getElementById("loginBut").addEventListener("click",function(){
    if(errorCheck()){
        if(idCheck() && passCheck()){
            localStorage.setItem('whoIsLogging','');
            localStorage.setItem('whoIsLogging',idInput.value);   
            document.location.href = "../main/index.html";
        }
    }else{
        alert("Please enter Username and Password")
    }
})
document.body.addEventListener("keydown",function(ev){
    if(ev.keyCode==13){
        if(errorCheck()){
            if(idCheck() && passCheck()){
            localStorage.setItem('whoIsLogging','');
            localStorage.setItem('whoIsLogging',idInput.value); 
            document.location.href = "../main/index.html";
            }
        }else{
            alert("Please enter Username and Password");
        }
    }
})
document.getElementById("logo").addEventListener("click",function(){
    document.location.href = "../index.html";
});

document.getElementById("forget").addEventListener("click",function(){
    document.location.href = "./findid/findid.html";
});
document.getElementById("register").addEventListener("click",function(){
    document.location.href = "./register/register.html"
});