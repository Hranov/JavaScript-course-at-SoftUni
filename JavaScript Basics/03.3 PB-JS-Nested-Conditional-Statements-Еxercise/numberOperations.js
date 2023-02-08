function numberOparations (input) {

    let number1 = Number(input[0]);
    let number2 = Number(input[1]);
    let operator = (input[2]);

    let result = 0;
    
switch (operator) {
    case "+":    
    result=number1+number2; 
     if (result % 2===0) {
        console.log (`${number1} ${operator} ${number2} = ${result} - even`)
     break;}
     else if (result % 2!=0) {
        console.log (`${number1} ${operator} ${number2} = ${result} - odd`)
     break;
     }
     
     case "-":    
     result=number1-number2; 
      if (result % 2===0) {
         console.log (`${number1} ${operator} ${number2} = ${result} - even`)
      break;}
      else if (result % 2!=0) {
         console.log (`${number1} ${operator} ${number2} = ${result} - odd`)
      break;
      }

      case "*":    
      result=number1*number2; 
       if (result % 2===0) {
          console.log (`${number1} ${operator} ${number2} = ${result} - even`)
       break;}
       else if (result % 2!=0) {
          console.log (`${number1} ${operator} ${number2} = ${result} - odd`)
       break;
       } 

       case "%":    
     result=number1%number2; 
     if (number2!=0){
     console.log (`${number1} ${operator} ${number2} = ${result}`)
      break;}

      else if (number2===0) {
        console.log(`Cannot divide ${number1} by zero`)
        break; 
      }

        case "/":
        result=number1/number2;
        if (number2!=0){
        console.log (`${number1} ${operator} ${number2} = ${result.toFixed(2)}`)    
        break;} 
        else if (number2===0) {
        console.log(`Cannot divide ${number1} by zero`)
        break;}

    }
}

numberOparations (["7",
"3",
"*"])
;
