function movieTickets(input) {
  let index = 0;
  let command = input[index];
  let studentType = 0;
  let standardType = 0;
  let kidType = 0;
  let totalTicketCounter = 0;

  while (command !== "Finish") {
    let movieName = input[index];
    index++;
    saloonCapacity = Number(input[index]);
    index++;
    let ticketType = input[index];
    let ticketCounter = 0;

    while (ticketType !=="End") {
      ticketCounter++;

      if (ticketType === "standard") {
        standardType++;
      } 
      else if (ticketType === "student") {
        studentType++;
      } 
      else if (ticketType === "kid") {
        kidType++;
      }

    if (ticketCounter>=saloonCapacity ) {
        break;
      }

    index++;
    ticketType = input[index];
    }

    totalTicketCounter += ticketCounter;
    let result = (ticketCounter / saloonCapacity) * 100;

    console.log(`${movieName} - ${result.toFixed(2)}% full.`);

    index++;
    command = input[index];
  }

  console.log(`Total tickets: ${totalTicketCounter}`);
  console.log(`${((studentType / totalTicketCounter) * 100).toFixed(2)}% student tickets.`);
  console.log(`${((standardType / totalTicketCounter) * 100).toFixed(2)}% standard tickets.`);
  console.log(`${((kidType / totalTicketCounter) * 100).toFixed(2)}% kids tickets.`);
}

movieTickets (["Taxi",
"10",
"standard",
"kid",
"student",
"student",
"standard",
"standard",
"End",
"Scary Movie",
"6",
"student",
"student",
"student",
"student",
"student",
"student",
"Finish"])
;

