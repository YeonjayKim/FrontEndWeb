var closet = document.getElementById("closet");
var logo = document.getElementById("logo"); //1번씀
var shoeCloset = document.getElementById("shoeCloset"); //한번도 안씀
var display = document.getElementById("display");
var closeBut = document.getElementById("closeBut");
var jacket = document.getElementById("jacket");
var box = document.getElementById("box");
var boxcheck = 1;
var userName = localStorage.getItem("whoIsLogging");
var userGender = '',
    userShoeSize = '',
    userColor = '',
    userSize ='';
var mobileMenu = document.getElementById('mobileTopMenu');
var isItOpened = 0;
//---------------------function-------------------------------------
function codeAddress() {
    var userInfo = getUserInfo()[0];
    var account = document.getElementById("account");
    display.style.top = "80px";
    
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
        mobileMenu.appendChild(document.getElementById('home'));
        mobileMenu.appendChild(document.getElementById('aboutUs'));
        mobileMenu.appendChild(document.getElementById('contact'));
        document.getElementById('home').style.left= '10px';
        document.getElementById('home').style.top = '100px';
        document.getElementById('aboutUs').style.left = '10px';
        document.getElementById('aboutUs').style.top = '200px';
        document.getElementById('contact').style.left = '10px';
        document.getElementById('contact').style.top = '300px';
        document.getElementById('topMenu').style.display ='none';
        document.getElementById('mobileTopMenu').style.display = 'block';
    }
}

function getUserInfo(){
   
    var userInfoList = [];
    
    userInfoList.push(localStorage.getItem(userName).split(';'));
    
    return userInfoList;
    
}

function closetOpenorClose(a){
    if(a==1){
        closet.style.backgroundImage = 'url(img/openedCloset.png)';
        closet.style.right = "0px";
        closet.style.width = '300px'
        closet.style.height ='300px';
        closet.style.cursor = "default";
        for(var i=0;i<4;i++){
            document.getElementsByClassName("insideC")[i].style.zIndex = "2";
        }
        closeBut.style.zIndex = "1";
        closeBut.style.display = "block";
    }else{
        closet.style.backgroundImage = 'url(img/closedCloset.png)';
        closet.style.right = "35px";
        closet.style.width = '275px'
        closet.style.height ='285px';
        closet.style.cursor = "pointer";
        for(var i=0;i<4;i++){
            document.getElementsByClassName("insideC")[i].style.zIndex = "-1";
        }
        closeBut.style.zIndex = "-1";
        closeBut.style.display = "none";
    }
}

function makingNewDiv(item){
    var ndiv = document.createElement("div");
    var ndiv2 = document.createElement("div");
    var ndiv3 = document.createElement("div");
    var ndiv4 = document.createElement("div");
    var ndiv5 = document.createElement("div");
    if(item=='shoeCloset'){
        ndiv.style.background ="url(img/shoes.png) no-repeat center";
        ndiv2.style.background ="url(img/runningShoes1.png) no-repeat center";
        ndiv3.style.background ="url(img/runningShoes2.png) no-repeat center";
        ndiv4.style.background ="url(img/sandle.png) no-repeat center";
        ndiv5.style.background ="url(img/flatShoes.png) no-repeat center";
    }else if(item=='jacket'){
        ndiv.style.background ="url(img/jacket1.png) no-repeat center";
        ndiv2.style.background ="url(img/jacket2.png) no-repeat center";
        ndiv3.style.background ="url(img/jacket3.png) no-repeat center";
        ndiv4.style.background ="url(img/jacket4.png) no-repeat center";
        ndiv5.style.background ="url(img/jacket5.png) no-repeat center";
    }else if(item=='shirt'){
        ndiv.style.background ="url(img/shirt1.png) no-repeat center";
        ndiv2.style.background ="url(img/shirt2.png) no-repeat center";
        ndiv3.style.background ="url(img/shirt3.png) no-repeat center";
        ndiv4.style.background ="url(img/shirt4.png) no-repeat center";
        ndiv5.style.background ="url(img/shirt5.png) no-repeat center";
    }else if(item=='bag'){
        ndiv.style.background ="url(img/bag1.png) no-repeat center";
        ndiv2.style.background ="url(img/bag2.png) no-repeat center";
        ndiv3.style.background ="url(img/bag3.png) no-repeat center";
        ndiv4.style.background ="url(img/bag4.png) no-repeat center";
        ndiv5.style.background ="url(img/bag5.png) no-repeat center";
    }else if(item=='pants'){
        ndiv.style.background ="url(img/pants1.png) no-repeat center";
        ndiv2.style.background ="url(img/pants2.png) no-repeat center";
        ndiv3.style.background ="url(img/pants3.png) no-repeat center";
        ndiv4.style.background ="url(img/pants4.png) no-repeat center";
        ndiv5.style.background ="url(img/pants5.png) no-repeat center";
    }else if(item=='etc'){
        ndiv.style.background ="url(img/etc1.png) no-repeat center";
        ndiv2.style.background ="url(img/etc2.png) no-repeat center";
        ndiv3.style.background ="url(img/etc3.png) no-repeat center";
        ndiv4.style.background ="url(img/etc4.png) no-repeat center";
        ndiv5.style.background ="url(img/etc5.png) no-repeat center";
    }else if(item=='cap'){
        ndiv.style.background ="url(img/mocap1.png) no-repeat center";
        ndiv2.style.background ="url(img/mocap2.png) no-repeat center";
        ndiv3.style.background ="url(img/mocap3.png) no-repeat center";
        ndiv4.style.background ="url(img/mocap4.png) no-repeat center";
        ndiv5.style.background ="url(img/mocap5.png) no-repeat center";
    }
    
    
    
    ndiv.style.backgroundSize = 'contain';
    ndiv.className = 'mouseOverItem';
    ndiv.style.left = '50px';
    ndiv.id = 'ndiv';
    ndiv2.style.backgroundSize = 'contain';
    ndiv2.className = 'mouseOverItem';
    ndiv2.style.left = '200px';
    ndiv2.id = 'ndiv2';
    ndiv3.style.backgroundSize = 'contain';
    ndiv3.className = 'mouseOverItem';
    ndiv3.style.left = '350px';
    ndiv3.id = 'ndiv3';
    ndiv4.style.backgroundSize = 'contain';
    ndiv4.className = 'mouseOverItem';
    ndiv4.style.left = '500px';
    ndiv4.id = 'ndiv4';
    ndiv5.style.backgroundSize = 'contain';
    ndiv5.className = 'mouseOverItem';
    ndiv5.style.left= '650px';
    ndiv5.id = 'ndiv5';
    
    
    display.appendChild(ndiv);
    display.appendChild(ndiv2);
    display.appendChild(ndiv3);
    display.appendChild(ndiv4);
    display.appendChild(ndiv5);

}

function mouseOverDelete(){
    document.getElementById('ndiv').remove();
    document.getElementById('ndiv2').remove();
    document.getElementById('ndiv3').remove();
    document.getElementById('ndiv4').remove();
    document.getElementById('ndiv5').remove();
}
//-----------------------interaction--------------------------------
document.getElementById("inAndout").addEventListener("mouseover",function(){
    if(isItOpened == 1){
        mobileMenu.style.left = '-160px';
        document.getElementById('inAndout').innerHTML = ">";
        isItOpened = 0;
    }else if(isItOpened == 0){
        mobileMenu.style.left = '0px';
        document.getElementById('inAndout').innerHTML = "<";
        isItOpened = 1;
    }
    
});
closet.addEventListener("click",function(){
    closetOpenorClose(1);
});

logo.addEventListener("click",function(){
    location.reload();
});

closeBut.addEventListener("click",function(){
    closetOpenorClose(0);
});
shoeCloset.addEventListener("mouseover",function(){
    makingNewDiv('shoeCloset');
    if(boxcheck ==1){
        box.remove();
        boxcheck = 0;
    }
});
shoeCloset.addEventListener("mouseout",function(){
    mouseOverDelete();
});
document.getElementById("jacket").addEventListener("mouseover",function(){
    makingNewDiv('jacket');
    if(boxcheck ==1){
        box.remove();
        boxcheck = 0;
    }
});
document.getElementById("jacket").addEventListener("mouseout",function(){
    mouseOverDelete();
});
document.getElementById("shirt").addEventListener("mouseover",function(){
    makingNewDiv('shirt');
    if(boxcheck ==1){
        box.remove();
        boxcheck = 0;
    }
});
document.getElementById("shirt").addEventListener("mouseout",function(){
    mouseOverDelete();
});
document.getElementById("bag").addEventListener("mouseover",function(){
    makingNewDiv('bag');
    if(boxcheck ==1){
        box.remove();
        boxcheck = 0;
    }
});
document.getElementById("bag").addEventListener("mouseout",function(){
    mouseOverDelete();
});
document.getElementById("pants").addEventListener("mouseover",function(){
    makingNewDiv('pants');
    if(boxcheck ==1){
        box.remove();
        boxcheck = 0;
    }
});
document.getElementById("pants").addEventListener("mouseout",function(){
    mouseOverDelete();
});
document.getElementById("jewerllyBox").addEventListener("mouseover",function(){
    makingNewDiv('etc');
    if(boxcheck ==1){
        box.remove();
        boxcheck = 0;
    }
});
document.getElementById("jewerllyBox").addEventListener("mouseout",function(){
   mouseOverDelete();
});
document.getElementById("capdiv").addEventListener("mouseover",function(){
    makingNewDiv('cap');
    if(boxcheck ==1){
        box.remove();
        boxcheck = 0;
    }
});
document.getElementById("capdiv").addEventListener("mouseout",function(){
    mouseOverDelete();
});
document.getElementById("home").addEventListener("click",function(){
     document.location.href = "./index.html";
});
document.getElementById("aboutUs").addEventListener("click",function(){
     document.location.href = "../topMenu/about/about.html";
});
document.getElementById("contact").addEventListener("click",function(){
     document.location.href = "../topMenu/contact/contact.html";
});

document.body.addEventListener("click",function(ev){
    if(ev.path[0].className.startsWith('nextPage')){
        localStorage.setItem("justClicked","");
        if(ev.target.id.startsWith('cap')){
            localStorage.setItem("justClicked",'cap');
        }else{
            localStorage.setItem("justClicked",ev.target.id);
        }
        
        document.location.href = "./promo/promo.html";
    }
})