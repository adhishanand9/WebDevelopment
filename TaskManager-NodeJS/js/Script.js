(function(window,document,undefined)
{
  var STATUS_OK = 200;
  var input=document.getElementById('inp');
  var sub1=document.getElementById('sub');
  var select=document.getElementById('sel');
  var list1=document.getElementById('list');
  var request = new XMLHttpRequest();

  request.addEventListener('load', function()
  {



  }
  );

  request.open('GET', '/data');
  request.send();
  sub1.addEventListener('click',function(event){
    var value=select.value
    addToTask(value);
    //console.log(select.value);
  });
  function addToTask(val){
    if (input.value)
    {
      console.log(val);
      var request = new XMLHttpRequest();
      request.addEventListener('load', function()
      {
        if (request.status === STATUS_OK)
        {
          var li = document.createElement('li');
          li.innerHTML = input.value;
          input.value = "";
          list1.appendChild(li);
        }
      });
      request.open('POST', '/data');
      request.send(JSON.stringify({ text: input.value }));
    }
  }
})(this,this.document);
