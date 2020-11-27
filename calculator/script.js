
function sum(){
    var num1 = parseInt(document.querySelector(".input1").value);
    var num2 = parseInt(document.querySelector(".input2").value);
    var c = num1 + num2;
    document.querySelector(".result").innerText = c;
}
function sub(){
    var num1 = parseInt(document.querySelector(".input1").value);
    var num2 = parseInt(document.querySelector(".input2").value);
    var c = num1 - num2;
    document.querySelector(".result").innerText = c;
}


function multi(){
    var num1 = parseInt(document.querySelector(".input1").value);
    var num2 = parseInt(document.querySelector(".input2").value);
    var c = num1 * num2;
    document.querySelector(".result").innerText = c;
}