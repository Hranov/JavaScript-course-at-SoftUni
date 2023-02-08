function examPreparation(input) {
    let gradesNumber = Number(input[0])
    let numberOfGrades = 0 //брой добри оценки 
    let badGrades = 0 // брой незадоволителни оценки 
    let sumGrades = 0 // сума оценки 
    let taskCounter = 0
 
    let index = 1
    let nameTask = input[index]
    
 
    while (nameTask !== "Enough") {
 
        taskCounter++
        index++
        nameTask = Number (input[index])
 
        
        if (nameTask <= 4) {
            badGrades++
            sumGrades += nameTask
 
        } else {
            numberOfGrades++
            sumGrades += nameTask
        }
        if (badGrades === gradesNumber) {
            console.log(`You need a break, ${badGrades} poor grades.`)
            break;
        } else {
 
            index++
            nameTask = input[index]
 
        }
 
    }
    let averageGrade = (sumGrades / taskCounter).toFixed(2)
    if (nameTask === "Enough") {
        console.log(`Average score: ${averageGrade}`)
        console.log(`Number of problems: ${taskCounter}`)
        console.log(`Last problem: ${input[index - 2]}`)
 
    }
 
 
}

examPreparation (["3","Money","6","Story","4","Spring Time","5","Bus","6","Enough"]);