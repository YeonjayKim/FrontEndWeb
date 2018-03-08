var logo = document.getElementById("logo");
var logo2 = document.getElementById("logo2");
var words = document.getElementsByClassName("words");
var mid = document.getElementById("mid");
var display = document.getElementById("display");

//-----------------------------function-------------------------------------
function codeAddress() {
    if (window.innerWidth < 500 || window.innerHeight < 500) {
        document.getElementById('description').remove();    
    }
    if(window.innerWidth < 580){
        document.getElementById('run').style.left = '0px';
        document.getElementById('register').style.right = '0px';
    }
    if(window.innerWidth >=580){
        document.getElementById('run').style.left = '10%';
        document.getElementById('register').style.right = '10%';
    }

    logo.style.height = '100%';
    document.getElementById('name1').style.top = '-50px';
    document.getElementById('name1').style.right = '200px';
    document.getElementById('name2').style.top = '-50px';
    document.getElementById('name3').style.top = '-50px';
    document.getElementById('name3').style.left = '200px';
    setTimeout(function(){
        document.getElementById('description').style.display ="block";
    }, 1000);
}

function firstaction() {
    for(var i=0;i<words.length;i++){
        words[i].style.left = "-2000px";
    }
    logo.style.opacity = '0';
    logo2.style.opacity = '1';
    
    setTimeout(function () {
        mid.remove();
    }, 500);
    setTimeout(function () {
        document.getElementById("choice").style.zIndex = "2";
        document.getElementById("choice").style.display ="inline";
    }, 500);
}
function toggle() {
    if(window.innerWidth <580){
        document.getElementById('run').style.left = '0px';
        document.getElementById('register').style.right = '0px';
    }
    if(window.innerWidth >=580){
        document.getElementById('run').style.left = '10%';
        document.getElementById('register').style.right = '10%';
    }
}
//------------------------------Interaction-------------------------------------------------
window.onresize = function() {
    toggle();
}

logo.addEventListener('mouseover',function(){
    mid.style.height = "55%";
});
logo.addEventListener('mouseout',function(){
    mid.style.height = "50%";
});
logo.addEventListener('click',function(){
    firstaction();
    
});
document.getElementById("register").addEventListener("click",function(){
    document.location.href = "./login/login.html";
})
document.getElementById("run").addEventListener("click",function(){
    document.location.href = "./guest/guest.html";
}); 
