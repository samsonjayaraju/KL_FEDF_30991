// console.log('Addition')
// function Addition(num1,num2){
//     document.getElementById(num1).value;
//     document.getElementById(num1).value;
//     let sum = parseInt(num1) + parseInt(num2);

//     window.alert(sum);


// }


console.log('Addition function loaded');

function Addition() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let sum = parseInt(num1) + parseInt(num2);
    window.alert("Sum is: " + sum);
}
