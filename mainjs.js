
var xmlhttp = new XMLHttpRequest();
var url = "https://api.covid19api.com/summary";

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        myFunction(myArr);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function openWin() {
  window.open("states.html","_self");
}

function myFunction(arr) {
	var countries = arr.Countries;
	var table = document.getElementById("myTable");
    var out = "";
    var i;
    var count = 1;
    for(i = 0; i < countries.length; i++) {
      var row = table.insertRow(count);
      count++;
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      var cell6 = row.insertCell(5);
      cell1.innerHTML = countries[i].Country;
      cell2.innerHTML = countries[i].TotalConfirmed;
      cell3.innerHTML = countries[i].NewDeaths;
      cell4.innerHTML = countries[i].TotalDeaths;
      cell5.innerHTML = countries[i].NewRecovered;
      cell6.innerHTML = countries[i].TotalRecovered;
    }
}

