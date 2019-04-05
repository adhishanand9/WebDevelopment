var btn=document.getElementById('but');
var ply=document.getElementById('play');
var pause=document.getElementById('pause');
var time=0;
var flag=0;
var flag2=0;
var interval1;
btn.addEventListener("click",function(){
  if(flag==0){
    changeValue1();
    flag=1;
  }
  else if(flag==1){
    changeValue2();
    flag=0;
  }
});
ply.addEventListener("click",function(){
  flag2=flag2+1;
  if(time==0){
    alert("Time is Zero!");
    flag=0;flag2=0;
    return;
  }

  console.log(flag2);
if(flag2==1)
{
  time--;
  console.log(1);
  interval1=setInterval(function(){
  btn.setAttribute("value",time);
  time--;
  if(time==-1){
    alert("Time UP!");
    clearInterval(interval1);
    flag=0;time=0;flag2=0;
    }
  },1000);

}
});
pause.addEventListener("click",function(){
  btn.setAttribute("value","0");
  time=0;
  flag=0;
  clearInterval(interval1);
});
function changeValue1(){
  btn.setAttribute("value","10");
  time=10;
}
function changeValue2(){
  btn.setAttribute("value","100");
  time=100;
}
