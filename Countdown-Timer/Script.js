var btn=document.getElementById('but');
var ply=document.getElementById('play');
var pause=document.getElementById('pause');
var time;
var flag=0;
var interval1;
btn.addEventListener("click",function(){
  if(flag==0){
    changeValue1();
    flag=1;
  }
  else{
    changeValue2();
    flag=0;
  }
});
ply.addEventListener("click",function(){
time--;
var t=time;
interval1=setInterval(function(){
  btn.setAttribute("value",time);
  time--;
  if(time==-1){
    alert("Time UP!");
    clearInterval(interval1);
    flag=0;
    }
  },1000);
});
pause.addEventListener("click",function(){
  btn.setAttribute("value","0");
  time=0;
  console.log(time);
  flag=0;
  clearInterval(interval1);
});
function changeValue1(){
  console.log(1);
  btn.setAttribute("value","10");
  time=10;
  console.log(time);
}
function changeValue2(){
  console.log(2);
  btn.setAttribute("value","100");
  time=100;
  console.log(time);

}
