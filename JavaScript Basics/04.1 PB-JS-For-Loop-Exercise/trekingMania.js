function trekingMania (input) {

    let numberOfGroups = Number (input[0]);

    let Musala = 0;
    let Monblan = 0;
    let Kilimandjaro = 0;
    let K2 = 0;
    let Everest = 0;

    let allClimbers = 0;

    for (i=1;i<input.length;i++) {

    let currentNumber1 = Number (input[i]);
    
    if (currentNumber1<=5) {
        Musala += currentNumber1 ;
    }

    else if (currentNumber1<=12) {
        Monblan += currentNumber1;
    }

    else if (currentNumber1<=25) {
        Kilimandjaro += currentNumber1;
    }

    else if (currentNumber1<=40) {
        K2 += currentNumber1;
    }

    else if (currentNumber1>=41) {
        Everest += currentNumber1;
    }

    allClimbers += currentNumber1 

    }

    console.log(`${((Musala/allClimbers)*100).toFixed(2)}%`);
    console.log(`${((Monblan/allClimbers)*100).toFixed(2)}%`);
    console.log(`${((Kilimandjaro/allClimbers)*100).toFixed(2)}%`);
    console.log(`${((K2/allClimbers)*100).toFixed(2)}%`);
    console.log(`${((Everest/allClimbers)*100).toFixed(2)}%`);
    
}

trekingMania (["5","25","41","31","250","6"]);