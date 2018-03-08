var displayCheck = 0;
var centerDisplay = document.getElementById("centerDisplay");
var leftDisplay = document.getElementById("leftDisplay");
var closeCheck = 1;
var tempDisplay = document.getElementById("tempDisplay");
var userInfo = getUserInfo()[0];
var justClicked = localStorage.getItem("justClicked");
var userName = localStorage.getItem("whoIsLogging");
var userGender = '',
    userShoeSize = '',
    userColor = '',
    userSize ='';
//--------------------------function-------------------------
function codeAddress() {
    var account = document.getElementById("account");

   if(userName != 'guest'){
        userGender = userInfo[8];
        userShoeSize = userInfo[10];
        userColor = userInfo[11];
        userSize = userInfo[12]/userInfo[9];
    }else{
        userGender = userInfo[5];
        userShoeSize = userInfo[7];
        userColor = userInfo[8];
        userSize = userInfo[9]/userInfo[6];
    }
    if(userSize > 0.63){
        userSize = 'XXL';
    }else if(userSize > 0.55){
        userSize = 'XL';
    }else if(userSize >0.47){
        userSize = 'Large';
    }else if(userSize > 0.39){
        userSize = 'Midium';
    }else if(userSize > 0.31){
        userSize = 'Small';
    }else if(userSize > 0.23){
        userSize = 'XS';
    }else{
        userSize = 'XXS';
    }
    account.innerHTML = "<br/>"+"Hello, "+userInfo[0]+"<br/>"+"<br/>"+'Gender: '+userGender+"<br/>"+"Shoe Size: "+userShoeSize+"<br/>"+"Color: "+userColor+"<br/>"+ "Cloth Size: "+ userSize;  
    
    if(window.innerWidth <750){
        document.getElementById('topMenu').style.display = 'none';
        document.getElementById('mlogo').style.display = 'block';
    }
}

function getUserInfo(){
    var userName = '';
    var userInfoList = [];
    
    userName = localStorage.getItem("whoIsLogging");
    userInfoList.push(localStorage.getItem(userName).split(';'));
    
    return userInfoList;
}

function maindisplayndiv(item){
    var ddiv = document.createElement("div");
    var ndiv1 = document.createElement("div");
    var ndiv2 = document.createElement("div");
    var ndiv3 = document.createElement("div");
    ddiv.id = "tempDisplay"
    ddiv.className = "mainDisplay";
    ndiv1.className = "mainDisplayItem";
    ndiv2.className = "mainDisplayItem";
    ndiv3.className = "mainDisplayItem";
    ndiv1.style.background = "url(img/"+userGender+userColor+item+justClicked+'1'+".png) no-repeat center";
    ndiv1.style.backgroundSize = "contain";
    ndiv1.style.left = "0";
    ndiv2.style.background = "url(img/"+userGender+userColor+item+justClicked+'2'+".png) no-repeat center";
    ndiv2.style.backgroundSize = "contain";
    ndiv2.style.left = "33%";
    ndiv3.style.background = "url(img/"+userGender+userColor+item+justClicked+'3'+".png) no-repeat center";
    ndiv3.style.backgroundSize = "contain";
    ndiv3.style.left = "66%";
    ddiv.appendChild(ndiv1);
    ddiv.appendChild(ndiv2);
    ddiv.appendChild(ndiv3);
    document.body.appendChild(ddiv);
    
}
//----------------------interaction-----------------------------
document.getElementById('mlogo').addEventListener('click',function(){
    document.location.href = "../index.html";
})
document.getElementById("onSale").addEventListener("click",function(){
    centerDisplay.remove();
    leftDisplay.style.display = 'block';
    maindisplayndiv('sale');
});
document.getElementById("new").addEventListener("click",function(){
    centerDisplay.remove();
    leftDisplay.style.display = 'block';
    maindisplayndiv('new');
});
document.getElementById("popular").addEventListener("click",function(){
    centerDisplay.remove();
    leftDisplay.style.display = 'block';
    maindisplayndiv('pop');
});
document.getElementById("LonSale").addEventListener("click",function(){
    document.getElementById("tempDisplay").remove();
    maindisplayndiv('sale');
});
document.getElementById("Lnew").addEventListener("click",function(){
    document.getElementById("tempDisplay").remove();
    maindisplayndiv('new');
});
document.getElementById("Lpopular").addEventListener("click",function(){
    document.getElementById("tempDisplay").remove();
    maindisplayndiv('pop');
});

document.getElementById('closeKey').addEventListener("click",function(){
    if(closeCheck == 1){
        leftDisplay.style.left = '-70px';
        closeCheck = 0;
    }else if(closeCheck == 0){
        leftDisplay.style.left = '0px';
        closeCheck = 1;
    }
});


document.getElementById("home").addEventListener("click",function(){
     document.location.href = "../index.html";
});
document.getElementById("aboutUs").addEventListener("click",function(){
     document.location.href = "../../topMenu/about/about.html";
});
document.getElementById("contact").addEventListener("click",function(){
     document.location.href = "../../topMenu/contact/contact.html";
});
document.getElementById("logo").addEventListener("click",function(){
    document.location.href = "../index.html";
});