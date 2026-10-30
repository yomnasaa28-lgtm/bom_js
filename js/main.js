
// var w = window.innerWidth
// var h = window.innerHeight

// document.querySelector('#demo').innerHTML = "Your width is " + w +"Your height is "+ h

window.addEventListener('scroll' , function(){
var scrollValue = window.scrollY;
var navbar = document.querySelector(".navbar");
if(scrollValue>150){
    navbar.setAttribute("class","navbar md:navbar-expand bg-accent");
}else{
    navbar.setAttribute("class","navbar md:navbar-expand bg-danger");
}
});

// document.querySelector("#demo").innerHTML = window.location.href;
// document.querySelector('#hello').onclick = function(){
//     window.location.href = "https://www.google.com"
// }

// document.querySelector("#demo").innerHTML = navigator.appName

  var mouse = setInterval (myTimer , 1000);

function myTimer(){
    var d = new Date();
    document.querySelector("#demo").innerHTML = d

}

function getData(){
    alert(1234)
}