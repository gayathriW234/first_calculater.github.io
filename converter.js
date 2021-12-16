function onclickbtn(){
  var type = document.getElementById("type");
  var input1 = document.getElementById("input1");
  var input2 = document.getElementById("input2");
  var input3 = document.getElementById("input3");
  var input4 = document.getElementById("input4");

  
  input1=parseInt(input1.value);
  input2=parseInt(input2.value);
  input3=parseInt(input3.value);
  input4=parseInt(input4.value);
  
  if(type.value === "add"){
   var add = input1 + input2 + input3 + input4;
   display.innerText =`Add value is: ${add}`;
  }else if(type.value === "sub"){
    var sub = input1 - input2 - input3;
    display.innerText =`sub value is: ${sub}`;
  }else if(type.value === "mul"){
    var mul = input1 * input2 * input3;
    display.innerText =`Mul value is: ${mul}`;
   }else if( type.value === "div"){
      if(input2==0){
        alert("You can't div by Zero!!")
      }else{
        var div = input1 /input2 ;
        display.innerText =`Div value is: ${div}`;
      }
   }
  
  
}
function onClear(){
document.getElementById("input1").value = "";
document.getElementById("input2").value = "";
document.getElementById("input3").value = "";
document.getElementById("input4").value = "";


document.getElementById("display").innerText = "0";
document.getElementById("val").style.background = "#fff"

}