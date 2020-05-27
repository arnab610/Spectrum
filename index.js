window.addEventListener("load",function()
{setTimeout(function()
{document.querySelector(".preloader").style.display="none";
},5000);

});


var hours=0;
function get_time()
{
  var d =new Date();
  var year=d.getFullYear();
  var month=d.getMonth();
var day=d.getDate();
 hours=d.getHours();
var mi=d.getMinutes();
var se=d.getSeconds();
var min=checktime(mi);
var sec=checktime(se);
var t=document.querySelector(".time");
t.innerHTML="TIME : "+(hours)+":"+min+":"+sec+" DATE : "+(day)+"/"+(month+1)+"/"+year;
setTimeout(function()
{
get_time();

},500);
}
function checktime(i)
{
  if(i<10)
  i="0"+i;
  return i;
}
get_time();
var h=document.querySelectorAll(".hover-class");
for(var i=0;i<h.length;i++)
{
  if(hours>=10 && hours<=17)
  {
    h[i].classList.add("pointer");
  }
  else {
      h[i].classList.add("pointer1");
  }
}
var n=document.querySelector(".notice");
n.innerHTML="CET has been accredited Grade A by National Assesment and accreditation Council";
document.querySelector(".princi").addEventListener("click",function()
{
  n.innerHTML="<u>Principal Room Notice</u>:The name of the Principal is Mr.P K Patra.Timing for Principal's room starts from 11.00 am to 2pm. If any student wants to visit him he must have the application with HOD's signature respective of his branch";
});
document.querySelector(".hod").addEventListener("click",function()
{
  n.innerHTML="<u>HOD Room Notice</u>:The name of the HOD is Mr.R.K Dash.Timing for Principal's room starts from 11.00 am to 2pm. If any student wants to visit him he must have the application with advisor's signature";
});

document.querySelector(".read").addEventListener("click",function()
{
  n.innerHTML="<u>READING ROOM</u>:The Reading room timing starts from 10:00 am t0 4:00 pm.Every student should carry his/her ID card before entering the room";
});
document.querySelector(".lib").addEventListener("click",function()
{
  n.innerHTML="<u>LIBRARY ROOM NOTICE</u>:The timing for Library starts from 10:30 am t0 3:00 pm.Every student should carry his/her ID card before entering the room. At a time a student can issue 2 books and he should return it within 15 days and failing in which he should pay Rs.1/- per day after the due date till he returns the book";
});
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.querySelector(".stairs");
var btn1=document.querySelector(".stair");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {

  modal.style.display = "block";
};
btn1.onclick = function() {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  else if(event.target == span)
  {
      modal.style.display = "none";

  }
};
