(function(window,document,undefined)
{
  var input=document.getElementById('inp');
  var sub1=document.getElementById('sub');
  sub1.addEventListener('click',function(event){
    addToTask();
    console.log(1);
  });
  function addToTask(){
    console.log(2);
  }
})(this,this.document);
