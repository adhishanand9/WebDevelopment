var ip=document.getElementById('inp');
//var interval=setInterval(change_width,1000);
var width=100;
function change_width(){
  ip.style.width=width+1+"px";
  console.log(width);
  if(width+1>150){
    clearInterval(interval);
  }
  width++;
}

for(var i =0;i<10;i++)
{
  setTimeout(function(){
    console.log(i);
  },10000);
}
