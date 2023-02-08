function skiVacation (input) {

    let countOfDays = Number (input[0]);
    let roomType = (input[1]);
    let feedback = (input[2]);

    let countOfNights = countOfDays - 1;
    let price = 0;
   

    switch (roomType) {
        case "room for one person":
        price = countOfNights * 18;
        break;

        case "apartment" :
        price= countOfNights * 25;
            if (countOfNights<10) {
                price=price * 0.70;}
        
            else if (countOfNights>=10 && countOfNights<=15) {
                price=price * 0.65;
            }
            else if (countOfNights>15) {
            price=price * 0.50;     
            }
            break;

        case "president apartment":
        price=countOfNights * 35;
        if (countOfNights<10) {
            price=price * 0.90;}
    
        else if (countOfNights>=10 && countOfNights<=15) {
            price=price * 0.85;
        }
        else if (countOfNights>15) {
        price=price * 0.80;     
        }
        break;    
    }

    if (feedback==="positive") {
        console.log ((price = price * 1.25).toFixed(2));
    }

    else if (feedback==="negative") {
        console.log ((price = price * 0.90).toFixed(2));
    }

}

skiVacation (["2",
"apartment",
"positive"]);

