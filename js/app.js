//VARIABLES FOR BELL & NOTIFICATION UL


const bellContainer = document.getElementById("bell-note");
const wrapNotify = document.getElementById("wrap-notificate");
const notificationCount = document.querySelector(".notifi-circle");
const closeNotify = document.getElementById("close-noti-message");
const lastLi = document.getElementById("last-noti-message");
const bell = document.getElementById("notif-bell");
let count = 3;
notificationCount.innerHTML = count;
const alertMessage = document.getElementById("alert");
alertMessage.innerHTML= `
                  <div class="container--alert">
                  <span class="material-icons material-icons--alert alert-banner-close">clear</span>
                  <p><strong>Alert:</strong> You have <strong>6</strong> sphere hunter tasks overdue.</p>
                  </div>
                  `;

//EVENT LISTENER FOR BELL & NOTIFICATIONS
bellContainer.addEventListener("click", evt => {
  
  wrapNotify.style.display = "block";
 
  if (evt.target.tagName === "SPAN") {
    let cross = evt.target;
    let li = cross.parentNode;

    if (li.classList.contains("notifi--closeAll")) {
      wrapNotify.style.display = "none";
      count +=1;
      console.log(li);
    }


    let ul = li.parentNode;

    
            count -= 1;
              if (count !== 0) {
              notificationCount.innerHTML = count;
            } else {
              notificationCount.innerHTML = "";
              lastLi.innerHTML= "No Notifications";
              bell.style.fill = "url(#gradAfter)";
              
          }

         if (!li.classList.contains("notifi--closeAll")) {
             ul.removeChild(li);
         } 
     
    } 


});






//Alert Div 
alertMessage.addEventListener("click", evt =>{
 const element = evt.target;
 if (element.classList.contains("alert-banner-close")) {
     alertMessage.style.display = "none";
 }

});





/*******************FORM RELATED CODE ***********************************************************/
//FORM VARIABLES
const memberForm = document.getElementById("memberInput");
memberForm.setAttribute("autocomplete", "off");
const inputMember = document.getElementById("memberInput");
const inputSearchIcon = document.getElementById("member-search");
const members = ["Yuna Besaidmon", "Rikku Gullwing", "Tidus Blitzon", "Paine Crimson", "Auron Guardian", "Tifa Lockhart", "Ravus Nox Fleuret", "Tredd Furia","Yunalesca Lady", "Ashelia B&#8242;nargin Dalmasca", "Pelna Khara", "Axis Arra", "Aeris Gainsborough","Rinoa Heartilly", "Red XIII", "Terra Branfor", "Prompto Argentum", "Y&#8242;shtola Rhul", "Paramekia Emperor", "Yu Hayakawa"  ];
 



//AUTOCOMPLETE CODE
 /*the autocomplete function takes two arguments,
   the text field element and an array of possible autocompleted values:*/
  function autocomplateIputField (inp, arr) {
    let currentFocus;
  
  
    /*execute a event listener function when someone writes in the text field:*/
    inp.addEventListener("input", function(evt) {
       let val = this.value;
       /*close any already open lists of autocompleted values*/
       closeAllLists();
       if (!val) {
        
        return false;
      }
       
      currentFocus = -1;
    
       /*create a DIV element that will contain the items (values):*/
       let itemsContainer = document.createElement("DIV");
       itemsContainer.setAttribute("id", this.id + "autocomplete-list");
       itemsContainer.setAttribute("class", "autocomplete-items");
       /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(itemsContainer);

        /*HIDE SEARCH ICON ONCE ITEMSCONATINER IS ATTACHED*/
        inputSearchIcon.style.display = "none";
       
         /*for each item in the arrayof divs we are about to create...*/
             for (let i = 0; i <arr.length; i++) {
  
               /*check if the item starts with the same letters as the text field value:*/
               if (arr[i].substr(0, val.length).toLowerCase() === val.toLowerCase()) {
  
                   /*create a DIV element for each matching element: so all the Ts or Ys*/
                   let sameLetters = document.createElement("DIV");
                    /*make the matching letters bold:*/
                    /*insert a input field that will hold the current array item's value:*/
                   sameLetters.innerHTML = `<strong> ${arr[i].substr(0, val.length)}</strong>${arr[i].substr(val.length)}
                   <input type='hidden' value= '${arr[i]}'>`;
                    /*execute a function when someone clicks on the sameLetters value (DIV)*/
                    sameLetters.addEventListener("click", function(evt) {
                      /*insert the value for the autocomplete text field:*/
                      inp.value = this.getElementsByTagName("input")[0].value;
                      
                     
                        
                      
                    
                        
                      
                       /*close the list of autocompleted values,
                (or any other open lists of autocompleted values:*/
                          closeAllLists();
                    });
  
                   
                    itemsContainer.appendChild(sameLetters);
                    
  
               }
  
             }
  
  
    });
                   /*CLEAR INPUT FIELD ON CLICK*/

                    inp.addEventListener("click", function() {

                        this.value = "";
                        inputSearchIcon.style.display = "block";
                        
                    });
  
    
          /*execute a function presses a key on the keyboard:*/
          inp.addEventListener("keydown",function(evt) {
            let item = document.getElementById(this.id + "autocomplete-list");
           
            if (item) {
              item = item.getElementsByTagName("div");
             
            } 
            if (evt.keyCode === 40) {
              /*If the arrow DOWN key is pressed,
              increase the currentFocus variable:*/
              currentFocus++;
              /*and and make the current item more visible:*/
              addActive(item);
            } else if (evt.keyCode === 38) { //up
              /*If the arrow UP key is pressed,
              decrease the currentFocus variable:*/
              currentFocus--;
              /*and and make the current item more visible:*/
              addActive(item);
            } else if (evt.keyCode === 13) {
              /*If the ENTER key is pressed, prevent the form from being submitted,*/
              this.evt.preventDefault();
              if (currentFocus > -1) {
                /*and simulate a click on the "active" item:*/
                if (item) {
                  item[currentFocus].click();
                }
              }
            }
        });


          function addActive(item) {
            /*a function to classify an item as "active":*/
            if (!item) {
              return false;
            
            }
            /*start by removing the "active" class on all items:*/
            removeActive(item);
            if (currentFocus >= item.length){
              currentFocus = 0; 
             
            }
          
            if (currentFocus < 0) { 
              currentFocus = (item.length - 1);
             
              
          
            }
            /*add class "autocomplete-active":*/
            item[currentFocus].classList.add("autocomplete-active");
           
          }
          
          
          function removeActive(item){
            /*a function to remove the "active" class from all autocomplete items:*/
            for (var i = 0; i < item.length; i++) {
              item[i].classList.remove("autocomplete-active");
            }
          }
        function closeAllLists(element) {
          let listItemsDivs = document.getElementsByClassName("autocomplete-items");
            for (let i = 0; i < listItemsDivs.length; i++) {
                if(element !== listItemsDivs[i] && element !== inp){
                  listItemsDivs[i].parentNode.removeChild(listItemsDivs[i]);
                }
            }
      }
          /*execute a function when someone clicks in the document:*/
                document.addEventListener("click", (evt) => {
                      closeAllLists(evt.target);
                });
    
  }
  
  // CALLING THE AUTO COMPLETE FUNCTION
  autocomplateIputField(inputMember, members);



  

                  
  /*************MESSAGING SECTION**********************************/
//MEMBERS MESSAGING VARIABLES
const user = document.getElementById("memberInput");
const message = document.getElementById("messageField");
const btnSubmit = document.getElementById("send");




//YouTube tutorial https://www.youtube.com/watch?v=-RLE2Q7OzME&t=631s
function customAlert () {
  this.render = function (messageHead, message) {
     let winW = window.innerWidth;
     let winH = window.innerHeight;
     const alertOverlay = document.getElementById("alert-overlay");
     const messageBox = document.getElementById("alert-containers");
     alertOverlay.style.display = "flex";
     alertOverlay.style.height = winH+"px";
     messageBox.style.display = "flex";
     document.getElementById("alertHead").innerHTML = messageHead;
     document.getElementById("alertBody").innerHTML = message;
     document.getElementById("alertFooter").innerHTML = `<button id="close-alert" class="btn btn--alert" onclick="Alert.ok()">OK</button> `;
     
     
     
    
  }

  this.ok = function () {
    document.getElementById("alert-containers").style.display = "none";
    document.getElementById("alert-overlay").style.display = "none";
}

}

let Alert = new customAlert();


  //EVENT FOR SENDING MESSAGES TO MEMBERS FILLING OUT THE FORM
 btnSubmit.addEventListener("click", evt => {
   evt.preventDefault();
   

       //to make sure all fields are filled
      if(user.value === "" && message.value === "") {
        Alert.render(`<p><strong>Alert!</strong> Oops it Looks like you forgot something!\u{1F633}</p> `, `<p>Please fill out <strong>User</strong> and <strong>Message</strong><br> fields before sending. \u{1F97A}</p>`);
       
        
      } else if (user.value === "") {
        Alert.render(`<p><strong>Alert!</strong> Oops it Looks like you forgot something!\u{1F633}</p> `, `<p>Please fill out the <strong>User</strong><br> field before sending. \u{1F97A}<br>So we can send your message to the right person. \u{1F600} </p>`);
       

      } else if  (message.value === "") {

        Alert.render(`<p><strong>Alert!</strong> Oops it Looks like you forgot something!\u{1F633}</p> `, `<p>Please fill out the <strong>Message</strong><br> field before sending. \u{1F97A}<br>I'm sure your message is important! \u{1F600} </p>`);
       

      } else {
        Alert.render(`<p><strong>Message Sent!</strong>\u{1F973}</p> `, `<p><strong>${user.value}</strong> will receive your message shortly.\u{1F600} </p>`);

      }

     
      
});    


//DARK MODE
const colorMode = checkStatus => {

  const delayTime = 700; //1 second
  const checked = checkStatus;

  if (checked) {
  setTimeout(function() {
    //code to be executed after the time value set to delayTime runs
       
       document.documentElement.setAttribute("data-theme", "dark");
       upDateTrafficChart(trafficChart, gradientTrafFillDark, gradientTrafPointFillDark );
       upDateChartColor(barChart, gradientBarFillDark );
       upDateChartColor(pieChart, mobileColorsDark );

        Chart.defaults.global.defaultFontColor = "#28f50d"; 

      
      }, delayTime);
  } else {
      document.documentElement.setAttribute("data-theme", "light");
      resetTrafficChart(trafficChart, gradientTrafFill, gradientTrafPointFill);
      resetDataChartColor(barChart, gradientBarFill);
      resetDataChartColor(pieChart, mobileColors);

      Chart.defaults.global.defaultFontColor = "#10133a"; 

  }
    };

    const darkModeCheckBox = document.getElementById("dark-mode");
    darkModeCheckBox.addEventListener("change", evt => {
      colorMode(evt.target.checked);
    });
    




    /***************Local Storag***************************/

    const saveLocalBtn = document.getElementById("save");
    const restLocalBtn = document.getElementById("reset");
    const emailCheckBox = document.getElementById("email");
    const profileCheckBox = document.getElementById("profile");
    const timeZone = document.getElementById("timezone");

//Sets the local storage and elements last settings
    function saveLocals() {
      const saves = localStorage.getItem("spiraDashboard");
      if(saves) {
        return JSON.parse(saves); 
      }
    }


  //If my checked boxes are checked then pass the values to the Local Storage to have them stringifyied.
    if (localStorage.getItem("spiraDashboard")) {
      emailCheckBox.checked = saveLocals().email;
      profileCheckBox.checked = saveLocals().profile;
      darkModeCheckBox.checked = saveLocals().darkMode;
      timeZone.selectedIndex = saveLocals().zoneTime;
      colorMode(saveLocals().darkMode);
    } else {
      colorMode(darkModeCheckBox.checked);
    }


    

//Saves my settings in the local storage that's why it's setItem
    saveLocalBtn.addEventListener("click", () => {
      spiraSettings = {
          email: emailCheckBox.checked,
          profile: profileCheckBox.checked,
          darkMode: darkModeCheckBox.checked,
          zoneTime: timeZone.selectedIndex,
        };

      localStorage.setItem("spiraDashboard", JSON.stringify(spiraSettings) );
    });

//RESETS my local storage to original state 
    restLocalBtn.addEventListener('click', () => {
      localStorage.removeItem('spiraDashboard');
      emailCheckBox.checked = false;
      profileCheckBox.checked = false;
      darkModeCheckBox.checked = false;
      timeZone.selectedIndex = 0;
      colorMode(false);
      
    });
    