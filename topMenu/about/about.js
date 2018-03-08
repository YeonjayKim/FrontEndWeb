var mobileMenu = document.getElementById('mobileTopMenu');
var isItOpened = 0;
//---------------------function----------------------------
function initMap() {
    var uluru = {lat: 49.2829581, lng: -123.1181001};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
}
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
    }
}
//------------------------------------------------------------------
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

document.getElementById("logo").addEventListener("click",function(){
     document.location.href = "../../index.html";
})
document.getElementById("home").addEventListener("click",function(){
     document.location.href = "../../main/index.html";
})
document.getElementById("aboutUs").addEventListener("click",function(){
     document.location.href = "../../topMenu/about/about.html";
})
document.getElementById("contact").addEventListener("click",function(){
     document.location.href = "../../topMenu/contact/contact.html";
})