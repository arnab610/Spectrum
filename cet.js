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
  if(hours>=10 && hours<5)
  {
    h[i].classList.add("pointer");
  }
  else {
      h[i].classList.add("pointer1");
  }
}
var n=document.querySelector(".notice");
n.innerHTML="CET has been accredited Grade A by National Assesment and accreditation Council";
document.querySelector(".lab").addEventListener("click",function()
{
  n.innerHTML="<u>Lab Notice</u>: Lab timing is between 10:00 am to 4:30 pm.All students have to keep their shoes outside before entering lab.Any tampering with lab instruments wwill be strictly punished";

});
document.querySelector(".conf").addEventListener("click",function(){
  n.innerHTML="<u>Conference Rom Notice</u>: The conference room is specially for induction and all types of meetings.The club members can borrow the conference room for induction or for any purposes but they should write an application to Principal. ";

});
document.querySelector(".aca").addEventListener("click",function(){
  n.innerHTML="<u>Academic Section Notice</u>: The Academic section is for all types of document,payment,scholarship query related area.It provides complete information about admission procedure.Any type of scholarship a student wants to apply should consult here.";

});
document.querySelector(".staff").addEventListener("click",function(){
  n.innerHTML="<u>Staff Rom Notice</u>: The Staff room is strictly for teachers and staffs.It opens at 10:00 am and closes after the college is over. ";

});
document.querySelector(".exam").addEventListener("click",function(){
  n.innerHTML="<u>Examination Section Notice</u>: The Examination section is a prohibited area for students.Here only teachers and staffs can enter.Here Questions for Semester and internal is printed and when exam will be conducted is decided.The examination controller is Mr.RR Dash.";
});
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.querySelector(".stairs");
var btn1=document.querySelector(".stair");

// Get the <span> element that closes the modal
var span = document.querySelector(".close");

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
