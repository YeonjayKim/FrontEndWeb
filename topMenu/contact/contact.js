var closeBut = document.getElementById("closeBut");
var ndivCheck = 0;
var mobileMenu = document.getElementById('mobileTopMenu');
var isItOpened = 0;
var newdivWidth = '500px',
    newdivHeight = '300px';
//----------------------------function-------------------------
function codeAddress() {
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
        newdivWidth = '300px';
        newdivHeight = '180px';
        document.getElementById('closeBut').style.width ='60px';
        document.getElementById('closeBut').style.height = '30px';
    }
}
function showingDetail(item){
    var ndiv = document.createElement("div");
    var nbut = document.createElement("button");
    ndiv.style.position = 'absolute';
    ndiv.style.backgroundColor = '#f5f5f5';
    ndiv.style.backgroundSize ='contain';
    ndiv.style.left = '0px';
    ndiv.style.right = '0px';
    ndiv.style.top = '-50px'
    ndiv.style.margin = 'auto';
    ndiv.style.width = newdivWidth;
    ndiv.style.height = newdivHeight;
    ndiv.style.borderRadius = '15px';
    ndiv.id ="tempId";
    ndiv.style.fontSize = '20px';
    closeBut.style.display = 'block'
    
    if(item == 'email'){
        ndiv.innerHTML = '<br/>Email Address:<br/><br/>jaykim@jaysfashion.com';
    }else if(item == 'phone'){
        ndiv.innerHTML = '<br/>Contact Number:<br/><br/>778-123-1234';
    }else if(item == 'project'){
        ndiv.innerHTML = 'The Project';
    }else if(item == 'twitter'){
        ndiv.setAttribute("href", "https://twitter.com/jaysfashionpage");
        ndiv.innerHTML = '<br/>The Twitter Link:<br/><br/>'+"https://twitter.com/jaysfashionpage";
    }
    ndiv.appendChild(closeBut);
    document.getElementById('display').appendChild(ndiv); 
}
//-------------------------interaction-----------------------------
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

document.getElementById("home").addEventListener("click",function(){
     document.location.href = "../../main/index.html";
});
document.getElementById("aboutUs").addEventListener("click",function(){
     document.location.href = "../../topMenu/about/about.html";
});
document.getElementById("contact").addEventListener("click",function(){
     document.location.href = "../../topMenu/contact/contact.html";
});
document.getElementById("email").addEventListener("click",function(){
    if(ndivCheck==0){
        showingDetail('email');
        ndivCheck = 1;
    }
});
document.getElementById("project").addEventListener("click",function(){
    if(ndivCheck==0){
        showingDetail('project');
        ndivCheck = 1;
    }
});
document.getElementById("phone").addEventListener("click",function(){
    if(ndivCheck==0){
        showingDetail('phone');
        ndivCheck = 1;
    }
});
document.getElementById("twitter").addEventListener("click",function(){
    if(ndivCheck==0){
        showingDetail('twitter');
        ndivCheck = 1;
    }
});

document.getElementById("closeBut").addEventListener("click",function(){
    document.body.appendChild(closeBut);
    closeBut.style.display = 'none';
    document.getElementById("tempId").remove();
    ndivCheck = 0;
})

