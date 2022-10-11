function fun(){
    document.getElementsByClassName("sidebar")[0].style.left = "-240px";
    document.getElementById("cancel").style.display="none";
    document.getElementsByClassName("navbar")[0].style.marginLeft="0px";
    document.getElementsByClassName("navbar")[0].style.paddingLeft="80px";
    document.getElementsByClassName("wrapper")[0].style.marginLeft="0px";

    
}
function fun2(){
    console.log("hello");
    
    document.getElementsByClassName("sidebar")[0].style.left = "0px";
    document.getElementById("cancel").style.display="block";
    document.getElementsByClassName("navbar")[0].style.marginLeft="240px";
    document.getElementsByClassName("navbar")[0].style.paddingLeft="0px";
    document.getElementsByClassName("wrapper")[0].style.marginLeft="240px";
    // document.getElementById("cancel").style.position="fixed";
}