//const fs = require('fs')
let array = [];

function mydelete(r) 
{
  var i = r.parentNode.parentNode.rowIndex;
  document.getElementById("myTable").deleteRow(i);
}
function myfun()
{

  let id = document.getElementById("id").value;
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let mobile = document.getElementById("mobile").value;

  if(id=="" || name=="" || email=="" || mobile =="")
  {
    alert("Please all fields required !");
  }
  else
  {
  var table = document.getElementById("myTable");
  var row = table.insertRow(-1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell6 = row.insertCell(4);

  cell1.innerHTML = id;
  cell2.innerHTML = name;
  cell3.innerHTML = mobile;
  cell4.innerHTML = email;
  cell6.innerHTML = "<button onclick='mydelete(this);' class='btn btn-dark'>Delete Row</button>";

  }

  
let person = {id:id,name:name,email:email,mobile:mobile};

array.push(person);

let data = JSON.stringify(array);

console.log(data);

for(var i=0;i<=array.length;i++)
{
  document.getElementById("alldata").innerHTML=data;
}

 /*
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("alldata").innerHTML = data;
      
    }
  };
  xhttp.open("GET", "index.html", true);
  xhttp.send();
  */
}

