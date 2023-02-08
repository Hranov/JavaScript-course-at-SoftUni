function vacation(group, type, day) {
  let finalPrice = 0;

  if (type === "Students") {
    switch (day) {
      case "Friday":
        finalPrice = group * 8.45;
        break;
      case "Saturday":
        finalPrice = group * 9.8;
        break;
      case "Sunday":
        finalPrice = group * 10.46;
        break;
    }

    if (group >= 30) {
      finalPrice = finalPrice * 0.85;
    }
  } else if (type === "Business") {
    if (group >= 100) {
      switch (day) {
        case "Friday":
          finalPrice = (group - 10) * 10.9;
          break;
        case "Saturday":
          finalPrice = (group - 10) * 15.6;
          break;
        case "Sunday":
          finalPrice = (group - 10) * 16;
          break;
      }
    } else {
      switch (day) {
        case "Friday":
          finalPrice = group * 10.9;
          break;
        case "Saturday":
          finalPrice = group * 15.6;
          break;
        case "Sunday":
          finalPrice = group * 16;
          break;
      }
    }
  } else if (type === "Regular") {
    switch (day) {
      case "Friday":
        finalPrice = group * 15;
        break;
      case "Saturday":
        finalPrice = group * 20;
        break;
      case "Sunday":
        finalPrice = group * 22.5;
        break;
    }

    if (group >= 10 && group <= 20) {
      finalPrice = finalPrice * 0.95;
    }
  }

  console.log(`Total price: ${finalPrice.toFixed(2)}`);
}

vacation(100, "Business", "Saturday");
