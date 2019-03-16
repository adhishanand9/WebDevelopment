var login=document.getElementById('login1');
var register=document.getElementById('register1');
login.addEventListener("click",function(event){
  addForm();
  hideLogin();
  hideRegister();
});
register.addEventListener("click",function(event){
  addRegForm();
  hideLogin();
  hideRegister();
});
function insertBlankLine(){
  var br = document.createElement("br");
  document.body.appendChild(br);
}
function hideLogin(){
  login.setAttribute("style","visibility:hidden");
}
function hideRegister(){
  register.setAttribute("style","visibility:hidden");
}
function addForm(){

  insertBlankLine();
  insertBlankLine();
  insertBlankLine();

  var loginName = document.createElement("input");
  loginName.setAttribute("type","text");
  loginName.setAttribute("id","loginName");
     loginName.setAttribute("placeholder", "Enter the Name");
  loginName.setAttribute("style","width:250px;background-color:yellow;height:60px");
  document.body.appendChild(loginName);
  insertBlankLine();
  insertBlankLine();

  var loginPassword = document.createElement("input");
  loginPassword.setAttribute("type","text");
  loginPassword.setAttribute("id","loginPassword");
     loginPassword.setAttribute("placeholder", "Enter Password");
  loginPassword.setAttribute("style","width:250px;background-color:yellow;height:60px");
  document.body.appendChild(loginPassword);
  insertBlankLine();
  insertBlankLine();
  var loginButton = document.createElement("button");
  loginButton.setAttribute("id","btnAddButton");
   loginButton.setAttribute("style","font-family:consolas;font-size:16px;background-color:lightblue;border: 5px solid black;height:60px;text-align: center;text-decoration: none;display: inline-block;border:none;");
  loginButton.innerHTML = "Login";
  document.body.appendChild(loginButton);
  loginButton.addEventListener("click",function(event){
    window.open("ShowProduct.html","_self");
  });


}
function addRegForm(){

  insertBlankLine();
  insertBlankLine();
  insertBlankLine();

  var loginName = document.createElement("input");
  loginName.setAttribute("type","text");
  loginName.setAttribute("id","loginName");
     loginName.setAttribute("placeholder", "Enter the Name");
  loginName.setAttribute("style","width:250px;background-color:yellow;height:60px");
  document.body.appendChild(loginName);
  insertBlankLine();
  insertBlankLine();
  var loginEmail = document.createElement("input");
  loginEmail.setAttribute("type","text");
  loginEmail.setAttribute("id","loginName");
     loginEmail.setAttribute("placeholder", "Enter the Email");
  loginEmail.setAttribute("style","width:250px;background-color:yellow;height:60px");
  document.body.appendChild(loginEmail);
  insertBlankLine();
  insertBlankLine();

  var loginPassword = document.createElement("input");
  loginPassword.setAttribute("type","text");
  loginPassword.setAttribute("id","loginPassword");
     loginPassword.setAttribute("placeholder", "Enter Password");
  loginPassword.setAttribute("style","width:250px;background-color:yellow;height:60px");
  document.body.appendChild(loginPassword);
  insertBlankLine();
  insertBlankLine();
  var registerButton = document.createElement("button");
  registerButton.setAttribute("id","btnAddButton");
   registerButton.setAttribute("style","font-family:consolas;font-size:16px;background-color:lightblue;border: 5px solid black;height:60px;text-align: center;text-decoration: none;display: inline-block;border:none;");
  registerButton.innerHTML = "Register";
  document.body.appendChild(registerButton);
  registerButton.addEventListener("click",function(event){
    window.open("Home.html","_self");
  });

}
