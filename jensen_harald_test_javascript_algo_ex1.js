function addTable() {
   var myTable = document.getElementById("myTable");
  
    var table = document.createElement('table');
    table.border = '1';
  
    var tableBody = document.createElement('tbody');
    table.appendChild(tableBody);
  
    for (var i = 0; i < 9; i++) {
      var tr = document.createElement('tr');
      tableBody.appendChild(tr);
  
      for (var j = 0; j < 9; j++) {
        var td = document.createElement('td');
        td.appendChild(document.createTextNode(array_number));
        tr.appendChild(td);
      }
    }
    myTable.appendChild(table);
  }
  addTable();


  console.log(array_number[0]);
  console.log(array_number[1]);

   let a = array_number.map(Number);

  console.log(a);

  
  