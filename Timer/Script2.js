var ip=document.getElementById('btn');
var interval=setInterval(click_button,1000);
function click_button(){
  alert("Welcome");
}
for(var i=0;i<10000;i++)
{
  var e= document.createElement("li");
  e.innerHTML="Hi";
  document.body.appendChild(e);
}
