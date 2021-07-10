// Alert the User to register our site 

let btn = document.getElementById('Order Now');
btn.addEventListener('click',function remainder(){
    alert("Please log into your Account before going to Order Something");    
});

// COUNT DOWN CLOCK

// Returns the milli second spend from 1 jan 1970 to till this date
let finaldt = new Date(2021,6,16,10,0,0,0).getTime();

let remaining = setInterval( function(){

// This is my current date
let nowdt = new Date().getTime();

// Milli seconds remaining 
let diff = finaldt-nowdt;

// Days remaining (Converting from milli second)) 
let days = Math.floor(diff/(1000*24*60*60));

// Hours remaining (Converting from milli second)) 
let hrs = Math.floor((diff%(1000*24*60*60))/(1000*60*60));

// Minutes remaining (Converting from milli second)) 
let min = Math.floor((diff%(1000*60*60))/(1000*60));

// Seconds remaining (Converting from milli second)) 
let sec = Math.floor((diff%(1000*60))/(1000));

time.innerText = "Day: "+days+"  Hrs: "+hrs+"  Min: "+min+"  Sec: "+sec;

},1000);

