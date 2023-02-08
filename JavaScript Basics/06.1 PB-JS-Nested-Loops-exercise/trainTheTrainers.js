function trainTheTrainers (input) {

    let jury=Number (input[0]);
    let index=1;
    let command=input[index];
    let sumAvGrades=0;
    let counter=0;
    
    while (command!=="Finish"){
    counter++
    let presentationName=command;
    let tempSumGrade=0;
   

    for (i=1;i<=jury;i++) {
        index++
        let grade=Number(input[index]);
        tempSumGrade+=grade;
    }

    let currentResult=tempSumGrade/jury
    sumAvGrades+=currentResult

    console.log(`${presentationName} - ${currentResult.toFixed(2)}.`);

    index++
    command=input[index];
}

console.log(`Student's final assessment is ${((sumAvGrades/counter).toFixed(2))}.`);
}


trainTheTrainers(["2","While-Loop","6.00","5.50","For-Loop","5.84","5.66","Finish"]);