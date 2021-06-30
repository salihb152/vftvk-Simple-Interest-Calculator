function compute() {
  var principal = document.getElementById("principal").value;

  var rate = document.getElementById("rate").value;
  var years = document.getElementById("years").value;
  var interest = principal * years * rate / 100;
  var year = new Date().getFullYear() + parseInt(years);
  if(principal<=0){
    alert("Enter a positive number")
  }else {
  document.getElementById("result1").innerText = "If you deposit "
  document.getElementById("result2").innerText = principal+","
  document.getElementById("result3").innerText = " at an interest rate of "
  document.getElementById("result4").innerText = rate + "%."
  document.getElementById("result5").innerText = " You will receive an amount of "
  document.getElementById("result6").innerText = interest+","
  document.getElementById("result7").innerText = " in the year "
  document.getElementById("result8").innerText = year
}
}

function updateRate() {
  var rateval = document.getElementById("rate").value;
  document.getElementById("rate_val").innerText = rateval + "%";
}
