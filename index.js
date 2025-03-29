// //w
// document.querySelector('.w').addEventListener("click",w);
// function w(){
//   var audio= new Audio('./sounds/crash.mp3');
//   audio.play();
// }

// //a
// document.querySelector('.a').addEventListener("click",a);
// function a(){
//   var audio= new Audio('./sounds/kick-bass.mp3');
//   audio.play();
// }

// //s
// document.querySelector('.s').addEventListener("click",s);
// function s(){
//   var audio= new Audio('./sounds/snare.mp3');
//   audio.play();
// }

// //d
// document.querySelector('.d').addEventListener("click",d);
// function d(){
//   var audio= new Audio('./sounds/tom-1.mp3');
//   audio.play();
// }

// //j
// document.querySelector('.j').addEventListener("click",j);
// function j(){
//   var audio= new Audio('./sounds/tom-2.mp3');
//   audio.play();
// }

// //k
// document.querySelector('.k').addEventListener("click",k);
// function k(){
//   var audio= new Audio('./sounds/tom-3.mp3');
//   audio.play();
// }


// //l
// document.querySelector('.l').addEventListener("click",l);
// function l(){
//   var audio= new Audio('./sounds/tom-4.mp3');
//   audio.play();
// }
var num =document.querySelectorAll(".drum").length;
for(var i=0;i<num;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
      var buttonInnerHtml= this.innerHTML;
    }
 makeSound(buttonInnerHtml);
});
function makeSound(key){
  switch(key){
      case 'w':
        var audio= new Audio('./sounds/crash.mp3');
        audio.play();
        break;
      case 'a':
        var audio= new Audio('./sounds/kick-bass.mp3');
        audio.play();
        break;
      case 's':
        var audio= new Audio('./sounds/snare.mp3');
        audio.play();
        break;  
      case 'd':
        var audio= new Audio('./sounds/tom-1.mp3');
        audio.play();
        break;
      case 'j':
        var audio= new Audio('./sounds/tom-2.mp3');
        audio.play();
        break;
      case 'k':
        var audio= new Audio('./sounds/tom-3.mp3');
        audio.play();
        break;
      case 'l':
        var audio= new Audio('./sounds/tom-4.mp3');
        audio.play();
        break;
  }
}

document.addEventListener("keypress",keyPressed);
function keyPressed(event){
  makeSound(event.key);
  buttonAnimation(even.key);
}
function buttonAnimation(currentKey){
  
}
