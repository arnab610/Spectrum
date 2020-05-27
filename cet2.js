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
  if(hours>=10 && hours<=5)
  {
    h[i].classList.add("pointer");
  }
  else {
      h[i].classList.add("pointer1");
  }
}
var n=document.querySelector(".notice");
n.innerHTML="CET has been accredited Grade A by National Assesment and accreditation Council";
document.querySelector(".cttc").addEventListener("click",function()
{
  n.innerHTML="<u>CTTC Room Notice</u>:CTTC room is specially built for the all round developement of CET students.Here CTTC teachers teach students about a particular course as per branch need.The course is free of cost and sstudents also get certificate for attending it.This enables students to know beyond their couse.";

});
document.querySelector(".spectrum").addEventListener("click",function()
{
  n.innerHTML="<u>Spectrum Room Notice</u>:The Spectrum room is owned by Spectrum club members.The club focus on both hardware and software innovations.If any student wants to join this club then he/she should attend its induction programme.They will provide a form which yor have to sign and you have to give written teat and viva.The club also provide internship programmes which any student can enroll.";
});
document.querySelector(".staff").addEventListener("click",function(){
  n.innerHTML="<u>Staff Rom Notice</u>: The Staff room is strictly for teachers and staffs.It opens at 10:00 am and closes after the college is over. ";

});
document.querySelector(".box9").addEventListener("click",function()
{
  n.innerHTML="<u>Lab Notice</u>: Lab timing is between 10:00 am to 4:30 pm.All students have to keep their shoes outside before entering lab.Any tampering with lab instruments will be strictly punished.";

});
document.querySelector(".box8").addEventListener("click",function()
{
  n.innerHTML="<u>Meeting Room Notice</u>:The timing of this room is between 10:00 am to 4:30 pm. This room is used for meeting purposes by the faculty members and the staffs to discuss on some important topic or for  all round developement of the college.";
});

var modal = document.getElementById("myModal");
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
span.addEventListener("click",function() {
  modal.style.display = "none";
});

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
