/******************ALL CHART RELATED *************************************************/
//CHART VARIABLES
const traffic = document.getElementById('traffic-chart').getContext("2d");
const bar     = document.getElementById('bar-chart').getContext("2d");
const pie     = document.getElementById('pie-chart').getContext("2d");
const trafficUl = document.getElementById("traffic-nav"); 


//GLOBAL DEFAULT OPTIONS SETTINGS
Chart.defaults.global.defaultFontSize = 8; 
Chart.defaults.global.defaultFontColor = "#10133a"; 


/*********************FUNCTIONS FOR CHARTS ***********************/
//To enable me to change the colour stop positions for gradients
const gradiChartPost = (name, startX, startY, endX, endY) => {
  let grad = name.createLinearGradient(startX, startY, endX, endY);
    return grad;
};

//TO CREATE COLOURS FOR A GRADIENT
const colorStops = (lineName,stopper, colour) => {
    let name = lineName;
    name.addColorStop(stopper,colour);
    return name;
};


//CREATE CHART 
const createChart = (container, shape, info, optimise ) => {
  let chart = new Chart(container,{
    type: shape,
    data: info,
    options: optimise,

 });

  return chart;
};

//UPDATE CHART FOR DARK MODE
const upDateChartColor = (chart, color) => {
  chart.data.datasets[0].backgroundColor= color;

 chart.update();
};

//RESET CHARTS
const resetDataChartColor = (chart,color) => {
   
  chart.data.datasets[0].backgroundColor= color;

 chart.update();
};

//UPDATE TRAFFICE CHART
const upDateTrafficChart = (chart, color, roundPoints) => {
  chart.data.datasets[0].backgroundColor= color;
  chart.data.datasets[0].pointBackgroundColor= roundPoints;

 chart.update();
};

//RESET TRAFFICE CHART
const resetTrafficChart = (chart, color, roundPoints) => {
  chart.data.datasets[0].backgroundColor= color;
  chart.data.datasets[0].pointBackgroundColor= roundPoints;

 chart.update();
};

const upDateTrafficCharts = (chart, names, records) => {
  chart.data.labels= names;
  chart.data.datasets[0].data= records;

 chart.update();
};



/************GRADIENTS BACKGROUND COLOURS FOR CHARTS *************************/
//TRAFFIC GRADIENTS
let gradientTrafFill = gradiChartPost(traffic, 50, 0, 250, 0); 
let gradientTrafPointFill = gradiChartPost(traffic, 50, 0, 250, 0); 

let gradientTrafFillDark = gradiChartPost(traffic, 50, 0, 250, 0); 
let gradientTrafPointFillDark = gradiChartPost(traffic, 50, 0, 250, 0); 


colorStops(gradientTrafFill, 0, "rgba(16, 19, 58, .5)");
colorStops(gradientTrafFill, 0.5, "rgba(73, 29, 136, .5)");
colorStops(gradientTrafFill, 1, "rgba(233, 1, 149, .5)");


colorStops(gradientTrafPointFill, 0, "rgb(16, 19, 58)");
colorStops(gradientTrafPointFill, 0.5, "rgb(73, 29, 136)");
colorStops(gradientTrafPointFill, 1, "rgb(233, 1, 149)");

//DARK TRAFFIC GRADIENTS

colorStops(gradientTrafFillDark, 0, "rgba(238, 180, 6, .9)");
colorStops(gradientTrafFillDark, 0.5, "rgba(246, 135, 65, .9)");
colorStops(gradientTrafFillDark, 1, "rgba(40, 245, 13, .9)");


colorStops(gradientTrafPointFillDark, 0, "rgb(238, 180, 6)");
colorStops(gradientTrafPointFillDark, 0.5, "rgb(246, 135, 65)");
colorStops(gradientTrafPointFillDark, 1, "rgb(40, 245, 13)");
//BAR GRADIENTS
let gradientBarFill = gradiChartPost(bar, 0, 0, 0, 150); 
let gradientBarPointFill = gradiChartPost(bar, 0, 50, 0, 250); 

let gradientBarFillDark = gradiChartPost(bar, 0, 0, 0, 150); 
let gradientBarPointFillDark = gradiChartPost(bar, 0, 50, 0, 250); 

colorStops(gradientBarFill, 0,"rgba(233, 1, 149, .8)") ;
colorStops(gradientBarFill, 0.5, "rgba(73, 29, 136, .8)");
colorStops(gradientBarFill, 1, "rgba(16, 19, 58, .8)");


colorStops(gradientBarPointFill, 0, "rgb(233, 1, 149)");
colorStops(gradientBarPointFill, 0.5, "rgb(73, 29, 136)");
colorStops(gradientBarPointFill, 1, "rgb(16, 19, 58)");

//DARK BAR GRADIENTS

colorStops(gradientBarFillDark, 0,"rgba(40, 245, 13, .9)" );
colorStops(gradientBarFillDark, 0.5, "rgba(246, 135, 65, .9)");
colorStops(gradientBarFillDark, 1, "rgba(238, 180, 6, .9)");


colorStops(gradientBarPointFillDark, 0, "rgb(40, 245, 13)");
colorStops(gradientBarPointFillDark, 0.5, "rgb(246, 135, 65)");
colorStops(gradientBarPointFillDark, 1, "rgb(238, 180, 6)");


//DATA FOR CHARTS
//TRAFFIC DATA


//HOURLY
  const hours =  ["8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm"];
  const dataHours= [ 350 , 650 , 1000 , 850 , 680 , 1750 , 1250 , 1150 , 1650 , 2300 ,
    2600 ];

 //DAILY   
  const daily = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const dataDaily= [ 350, 1000 , 1750 , 1250 , 1650 , 2300 ,2600 ];

//WEEKS
  const weeks =  [ "16-22" , "23-29" , "30-5" , "6-12" , "13-19" , "20-26" , "27-3" ,
  "4-10" , "11-17" , "18-24" , "25-31" ];
  const dataWeeks= [ 750 , 1250 , 1000 , 2000 , 1500 , 1750 , 1250 , 1850 , 2250 , 1500 ,2500 ];

//MONTHS
 const months =  [ "Jan" , "Feb" , "Mar" , "Apr" , "May" , "Jun" , "Jul", "Aug" , "Sept" , "Oct" , "Nov", "Dec"];
  const dataMonths= [ 1750 , 1250 , 900 , 1850 , 1650 , 1700 , 1850 , 1950 , 2250 , 1000 ,
    1200, 2000, 250 ];

//TRAFFICE DATA
let trafficData = {
  labels:weeks,
datasets: [{
  data:dataWeeks,
    backgroundColor: gradientTrafFill,
    borderWidth: 1 ,
    borderColor:"#ffffff",
    pointBackgroundColor: gradientTrafPointFill,
    pointBorderWidth: 2,
    pointHoverRadius: 6,
    pointHoverBorderWidth: 5,
    pointRadius: 4,
    
    }],
    
};

let trafficOptions = {
  aspectRatio:2.5,

    scales: {
      yAxes: [{
        ticks: {
          beginAtZero:true,
        }
      }]
    },

      legend: {
        display: false,
      },


};



//BAR DATA
const dailyData = {
  labels: [ "S" , "M" , "T" , "W" , "T" , "F" , "S" ],
  datasets: [{
          label: '# of Hits' ,
          data: [ 75 , 115 , 175 , 125 , 225 , 200 , 100 ],
          backgroundColor: gradientBarFill,
          borderWidth: 2.5,
          borderColor:"#10133a",
          hoverBorderWidth: 3.5,
          }]
  };

  const dailyOptions = {
      scales: {
        yAxes: [{
          ticks: {
          beginAtZero: true
          }
        }]
      },

      legend : {
      display: false
      }
  };

  //MOBILE DATA
  const mobileColors = ['#10133a' ,'#ef0195' ,'#f68741'];
  const mobileColorsDark = ['#048bfa' ,'#f3d007' ,'#28f50d'];
  const mobileData = {
      labels: [ "Desktop" , "Tablet" , "Phones" ],
      datasets: [{
        label: '# of Users' ,
        data: [ 2000 , 550 , 500 ],
        borderWidth: 0 ,
        backgroundColor: mobileColors,
      }]
    };

    const mobileOptions = {
        legend: {
        position: 'right' ,
          labels: {
          boxWidth: 20 ,
          fontStyle: 'bold'
          }
        }
      };



//CALLING CREATE CHART FUNCTION
 const trafficChart = createChart(traffic, "line", trafficData, trafficOptions);
 const barChart = createChart(bar, "bar", dailyData, dailyOptions);
 const pieChart = createChart(pie, "doughnut",mobileData, mobileOptions);


 /************FUNCTIONS TO TARGET NEXT PREV LAST FIRST SIBLINGS FOR TRAIFFIC CHART NAV *******************/

//REMOVES THE CLASS FROM NEXT SIBLING FOR TRAFFIC CHART NAV
const removingNext = (container, nameClass) => {
  if (container.nextElementSibling.classList.contains(nameClass)) {
    container.nextElementSibling.classList.remove(nameClass);
    
    }
};


//REMOVES PARENT FIRSTCHILD CLASS
const removingParFirstKid = (container, nameClass) => {
  if (container.parentElement.firstElementChild.classList.contains(nameClass)) {
      container.parentElement.firstElementChild.classList.remove(nameClass);

    
    }
};

//REMOVES PARENT FIRSTCHILD NEXTCHILD CLASS
const removingParFirstKidNextKid = (container, nameClass) => {
  if (container.parentElement.firstElementChild.nextElementSibling.classList.contains(nameClass)) {
      container.parentElement.firstElementChild.nextElementSibling.classList.remove(nameClass);

    
    }
};

//REMOVES PARENT LASTCHILD CLASS
const removingParLastKid = (container, nameClass) => {
  if (container.parentElement.lastElementChild.classList.contains(nameClass)) {
      container.parentElement.lastElementChild.classList.remove(nameClass);

    
    }
};

//REMOVES PARENT LASTCHILD PREV CHILD CLASS
const removingParLastKidPrevKid = (container, nameClass) => {
  if (container.parentElement.lastElementChild.previousElementSibling.classList.contains(nameClass)) {
      container.parentElement.lastElementChild.previousElementSibling.classList.remove(nameClass);

    
    }
};


//REMOVES THE CLASS FROM PREV SIBLING
const removingPrev = (container, nameClass) => {
  if (container.previousElementSibling.classList.contains(nameClass)) {
      container.previousElementSibling.classList.remove(nameClass);

    
    }
};

 

//EVENT LISTENER FOR TRAFFIC CHART UPDATES
trafficUl.addEventListener("click", evt => {

    let element = evt.target;
      
      if (element.classList.contains("hourly")) {

        element.classList.add("active-traffic");
        upDateTrafficCharts(trafficChart, hours, dataHours);

        removingNext(element, "active-traffic");
        removingParLastKid(element, "active-traffic");
        removingParLastKidPrevKid(element, "active-traffic");
        
      }

  


      if (element.classList.contains("daily")) {
          element.classList.add("active-traffic");
          upDateTrafficCharts(trafficChart, daily, dataDaily);
          
          removingPrev(element, "active-traffic");
          removingNext(element, "active-traffic");
          removingParLastKid(element, "active-traffic");
        
      }



 
      if (element.classList.contains("weekly")) {
           element.classList.add("active-traffic");
           upDateTrafficCharts(trafficChart, weeks, dataWeeks);
           
          removingPrev(element, "active-traffic");
          removingNext(element, "active-traffic");
          removingParLastKid(element, "active-traffic");
          removingParFirstKid(element, "active-traffic");
      }


 
          if (element.classList.contains("monthly")) {
            element.classList.add("active-traffic");
            upDateTrafficCharts(trafficChart, months, dataMonths);
            
            removingPrev(element, "active-traffic");
            removingParFirstKid(element, "active-traffic");
            removingParFirstKidNextKid(element, "active-traffic");
        }
    
 
 });
