console.log("Samson");

function getValues() {
  const name1 = document.getElementById("name1").value;
  const age = document.getElementById("age").value;
    
//   console.log(name1);
//   console.log(age);
//   window.alert(name1, value);
//   window.alert(age, value);
    if(age>=18){
        document.writeln(`Your name is ${name1} and you are eligible to vote`);
    }
    else{
        document.writeln(`Your name is ${name1} and you are not eligible to vote`);
    }


}
