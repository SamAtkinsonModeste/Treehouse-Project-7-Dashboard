
 document.querySelector('[data-switch-dark]').addEventListener('change', function() {

var delayInMilliseconds = 900; //1 second

setTimeout(function() {
  //your code to be executed after 1 second
 
     document.body.classList.toggle('dark');
     
  
}, delayInMilliseconds);

});
// document.querySelector('[data-switch-dark]').addEventListener('change', function() {
//     document.body.classList.toggle('dark');
    
//   });


