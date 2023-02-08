function rounding(number, precision) {
    if (precision > 15) {
     number=number.toFixed(15);
     console.log(parseFloat(number));
    }
  
    else {
        number=number.toFixed(precision);
        console.log(parseFloat(number));
    }
    
  }
  
  rounding(10.5,3);