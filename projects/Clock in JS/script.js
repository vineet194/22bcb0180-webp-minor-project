let clock = document.querySelector("#clock");
let details = document.querySelector("#details");
let greeting = document.querySelector("#greeting");

updateClock=()=>{
    let day_arr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let month_arr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();

    let year = d.getFullYear();
    let date = d.getDate();

    let month = d.getMonth();
    month = month_arr[month];

    let day = d.getDay();
    day = day_arr[day];

    clock.value = ""+h+"  :  "+m+"  :  "+s;
    details.value = ""+day+", "+date+" "+month+", "+year;

    if ((h >= 6) && (h < 12)){
        greeting.value = "Good Morning!";
    }
    else if ((h >= 12) && (h < 18)){
        greeting.value = "Good Afternoon!";
    }
    else if ((h >= 18) && (h < 21)){
        greeting.value = "Good Evening!";
    }
    else
        greeting.value = "Good Night!";
}

setInterval(updateClock, 1000)