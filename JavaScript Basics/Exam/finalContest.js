function finalContest (input) {

let countDancers = Number (input[0]);
let points = Number (input[1]);
let seasson = (input[2]);
let location = (input[3]);

let expences=0;

let sumWon = countDancers * points;

if (location==="Abroad") {
    bonus=sumWon * (50/100);
    sumWon=sumWon+bonus;
}

if (seasson==="summer" && location==="Bulgaria"){
    expences=sumWon * (5/100);
    sumWon=sumWon-expences;
}

else if (seasson==="winter" && location==="Bulgaria") {
    expences=sumWon * (8/100);
    sumWon=sumWon-expences;
}

else if (seasson==="summer" && location==="Abroad") {
    expences=sumWon * (10/100);
    sumWon=sumWon-expences;
}

else if (seasson==="winter" && location==="Abroad") {
    expences=sumWon * (15/100);
    sumWon=sumWon-expences;
}

let charity = sumWon * (75/100);
sumWon=sumWon-charity;
moneyPerdancer=sumWon/countDancers;


console.log(`Charity - ${charity.toFixed(2)}`);
console.log(`Money per dancer - ${moneyPerdancer.toFixed(2)}`);

}

finalContest ([1,89.5,"summer","Abroad"]);