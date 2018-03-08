//------------------------------function--------------------------------
function errorTest(){
    if(parseInt(document.getElementById("day").value)>31 || parseInt(document.getElementById("year").value)>2010){
        alert("Wrong Brithday Input")
        return false;
    }
    for(var i in document.getElementsByClassName("q")){
        if(document.getElementById(i) !=null){
            if(document.getElementById(i).value == ''){
                alert("You have to fill everything out");
                return false;
            } 
        }    
    }
    
    return true;
}

function checkGuestExist(){
    for(var i=0;i<localStorage.length;i++){
        if(localStorage.key(i) == 'guest'){
            localStorage.removeItem(localStorage.key(i));
            return;
        }
    }
    return;
}

function storeGuestInfo(){
    var theInfo = [];
    var strInfo = '';
    for(var i in document.getElementsByClassName('q')){
         if(document.getElementById(i) !=null){
            theInfo.push(document.getElementById(i).value);
        }
    }
    strInfo = theInfo.join(';')
    localStorage.setItem("guest",strInfo);
}
//------------------------------interaction-----------------------------
document.getElementById("submit").addEventListener("click",function(){
    if(errorTest()){
        checkGuestExist();
        storeGuestInfo();
        localStorage.setItem('whoIsLogging','');
        localStorage.setItem('whoIsLogging','guest'); 
        document.location.href = "../main/index.html";
    }
    
})