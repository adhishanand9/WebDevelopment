var next=document.getElementById('next');
var prev=document.getElementById('prev');

var tbody = document.getElementById("parent");
var val1;
var flag=0;
next.addEventListener("click",function(){
    if(flag==1)
    document.getElementById("parent").deleteRow(1)    ;
    getUser();
    ij++;
    flag=1;
});
prev.addEventListener("click",function(){
  if(flag==1)
  {document.getElementById("parent").deleteRow(1)    ;

    getUser();
    ij--;}
});
var ij=0;
var user;
function getUser(){
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.github.com/users?since=135",true);
  xhr.onload = function(){
    var array=xhr.responseText;
    //console.log(array);
    user=JSON.parse(array);
	if(user[ij].id==undefined){
		alert("Wrong ID Entered.");
		 return;
	}
    generateRows();
  };
  xhr.send();
}
var user1;
function  generateRows()
{
      var row=document.createElement('tr');
      var col1=document.createElement('td');
      var img=document.createElement("IMG");
      img.src=user[ij].avatar_url;
      img.width=90;
      img.height=100;
      col1.appendChild(img);
      row.appendChild(col1);

      var col1=document.createElement('td');
      col1.innerHTML=user[ij].id;
      row.appendChild(col1);

      var col1=document.createElement('td');
      col1.innerHTML=user[ij].login;
      row.appendChild(col1);

      var col1=document.createElement('td');
      col1.innerHTML=user[ij].html_url;
      row.appendChild(col1);
      tbody.appendChild(row);

      var val=user[ij].login;
      var xhr = new XMLHttpRequest();
      xhr.open("GET", "https://api.github.com/users/"+val,true);
      xhr.onload = function(){
        var array=xhr.responseText;
        console.log(array);
        user1=JSON.parse(array);
    	if(user1.id==undefined){
    		alert("Wrong ID Entered.");
    		 return;
    	}

      var col1=document.createElement('td');
      col1.innerHTML=user1.public_repos;
      row.appendChild(col1);
      tbody.appendChild(row);
      };
      xhr.send();



}
