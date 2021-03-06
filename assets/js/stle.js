var dt = new Date();

var months = ["January", 
    "February",
    "March", 
    "April", 
    "May", 
    "June", 
    "July", 
    "August", 
    "September", 
    "October",
    "November", 
    "December"];

function addEv() {

    let days = document.querySelectorAll('.day');
    
    for(let i = 0 ; i < days.length; i++) {
        days[i].addEventListener('click', event => {
            let dateStr = document.querySelector('#date_str');
            let day = event.target.innerHTML;
            let year = dateStr.innerHTML.split(' ').pop();
            let mon = months.indexOf(document.querySelector('#Month').innerHTML);
            
            if(event.target.classList.contains('prev_date')) {

                mon = (mon ? mon : months.length) - 1;

                year = (mon === months.length -1) ? year - 1 : year;
                                
            }

            let clickedDay = new Date(year,mon,day);

            dateStr.innerHTML = clickedDay.toDateString();
        });
    }

}


function RenderDate() {
    
dt.setDate(1);
var day = dt.getDay();
console.log(dt.getDay());

var edate = new Date(

    dt.getFullYear(),
    dt.getMonth() + 1,
    0
).getDate();

var pdate = new Date(
    dt.getFullYear(),
    dt.getMonth(),
    0
).getDate();

var today = new Date();


document.getElementById("date_str").innerHTML = dt.toDateString();
document.getElementById("Month").innerHTML = months[dt.getMonth()];

var cells = "";
for(x = day; x>0; x--){
    cells+= "<div class = 'prev_date day'>" + (pdate-x+1) + "</div>";
}
for(i = 1; i<=edate; i++){
   if(i==today.getDate() && dt.getMonth() == today.getMonth()){
    cells+= "<div class = 'Today day'>" + i + "</div>";
   }
   else{
    cells+= "<div class='day'>" + i + "</div>";
   }
}
document.getElementsByClassName("days")[0].innerHTML = cells;

addEv();
}

function moveDate(para){
    if(para == 'previous'){
        dt.setMonth(dt.getMonth()-1);
        
    }
    else if(para == 'next'){
        dt.setMonth(dt.getMonth()+1);
        
    }
    RenderDate();

}


