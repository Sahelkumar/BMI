function calculateBMI(){
   
    var weight = parseFloat(document.querySelector('#weight').value);
    var height = parseFloat(document.querySelector('#height').value);


    var bmi=weight/((height/100)*(height/100));

    var elementByQuery= document.querySelector("#onclick");
    
    elementByQuery.innerHTML='BMI: ' + bmi.toFixed(2) ;
    elementByQuery.style.backgroundColor = "blueviolet"; 
    elementByQuery.style.fontWeight="bold";

    var state=document.getElementById("state");
    {
        if (bmi < 18.5) {
            state.innerHTML = " You are Underweight." ;
          } else if (bmi >= 18.5 && bmi < 25) {
            state.innerHTML = "Congrats!! You are Normal.";
          } else if (bmi >= 25 && bmi < 30) {
            state.innerHTML = " You are Overweight.";
          } else {
            state.innerHTML = " You are Obese.";
          }
        }
    }

    



