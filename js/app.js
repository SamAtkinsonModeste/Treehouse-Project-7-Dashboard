// const ballText = document.querySelector(".ball-text");

// const toggleText = () => {
    
//      if (ballText.textContent !== "Off") {
//          ballText.textContent = "On";
//      }
// };
 
 
 
 
 
 
 
 document.querySelector('[data-switch-dark]').addEventListener('change', function() {

const delayTime = 900; //1 second

setTimeout(function() {
  //code to be executed after the time value set to delayTime runs
     
     document.body.classList.toggle('dark');
     
  
}, delayTime);

});
// document.querySelector('[data-switch-dark]').addEventListener('change', function() {
//     document.body.classList.toggle('dark');
    
//   });


