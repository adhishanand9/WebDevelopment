var button = document.getElementById("but");
var input = document.getElementById("inp");
var tbody = document.getElementById("parent");
var array = [];
input.onkeyup=function(event)
{
  var code=event.keyCode;
  var ele=document.createElement("li");
  if(code==13)
  {
    var value = input.value;

    if(!value)
    {
      alert("not value");
      return;
    }

    array.push(value);

    genrateRows();
  }
}
button.addEventListener("click", function(abc)
								{
									var value = input.value;

									if(!value)
									{
										alert("not value");
										return;
									}

									array.push(value);

									genrateRows();
								}
);


function genrateRows()
{
	tbody.innerHTML = "";

	for(var i = 0 ; i< array.length; i++)
	{

		var row = document.createElement('tr');
		row.setAttribute("id",i);

		var sr_no = document.createElement('td');
		sr_no.innerHTML = i+1;
		row.appendChild(sr_no);

		var task_no = document.createElement('td');
		task_no.innerHTML = array[i];
		row.appendChild(task_no);

		var date_no = document.createElement('td');
		date_no.innerHTML = new Date().toString();
		row.appendChild(date_no);

		var del_col = document.createElement('td');
    input.value="";
		var button = document.createElement('button');
		button.innerHTML = "X";
    button.setAttribute("style","background-color: tomato;width:150px;border: 5px solid black;border-radius: 4px;color: white;padding: 16px;text-align:center;font-size: 30px; height:70px;");

		button.addEventListener("click",function(e)
		{
			array.splice(e.target.parentNode.parentNode.id, 1);

			genrateRows();

		});

		del_col.appendChild(button);

		row.appendChild(del_col);

		tbody.appendChild(row);


	}


}
