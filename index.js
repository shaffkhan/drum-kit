
var numberofbuttons=document.querySelectorAll(".drum").length;
for (var index = 0; index < numberofbuttons; index++) {
   document.querySelectorAll(".drum")[index].addEventListener("click",function (){
      var innerhtmlbuttons= this.innerHTML;
      makeSound(innerhtmlbuttons);
      addanimation(innerhtmlbuttons);
   })   
}




   document.addEventListener("keydown",function (event){
    var key=event.key;
    makeSound(key);
    addanimation(key);
   })   

// document.addEventListener("keydown",function(event){
   
// });

debugger;
function makeSound(key){
    switch (key) {
        case "w":
            var audio=new Audio("sounds/tom-1.mp3");
     audio.play();
            break;
            case "a":
            var audio=new Audio("sounds/tom-2.mp3");
     audio.play();
            break;
            case "s":
            var audio=new Audio("sounds/tom-3.mp3");
     audio.play();
            break;
            case "d":
            var audio=new Audio("sounds/tom-4.mp3");
     audio.play();
            break;
            case "j":
            var audio=new Audio("sounds/snare.mp3");
     audio.play();
            break;
            case "k":
            var audio=new Audio("sounds/kick-bass.mp3");
     audio.play();
            break;
            case "l":
            var audio=new Audio("sounds/crash.mp3");
     audio.play();
            break;
    
        default:
            console.log(innerhtmlbuttons);
    }
}


//to add animations to buttons and click when pressed:

function addanimation(key){
document.querySelector("."+key).classList.add("pressed");

//to remove the animation after button is pressed and released:
setTimeout(() => {
       document.querySelector("."+key).classList.remove("pressed");
}, 100);
}