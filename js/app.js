const btn = document.querySelector(".switch");



document.querySelector('[data-switch-dark]').addEventListener('click', function() {
    document.body.classList.toggle('dark');
    
    
       if (btn.textContent === "Dark Theme") {
         
            btn.textContent = "Light Theme";
       } else {
            btn.textContent = "Dark Theme";
       }
  });