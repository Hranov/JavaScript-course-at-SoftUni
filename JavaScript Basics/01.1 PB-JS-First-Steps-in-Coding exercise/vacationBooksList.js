function vacationBooksList (input) {

    let bookPages = Number (input[0]);
    let pagesPerHour = Number (input[1]);
    let countDays = Number (input[2]);

    let timeForReadingTheBook = bookPages/pagesPerHour;
    let neededHoursPerDay = timeForReadingTheBook / countDays;

    console.log (neededHoursPerDay);

}

vacationBooksList (["212","20","2"]);