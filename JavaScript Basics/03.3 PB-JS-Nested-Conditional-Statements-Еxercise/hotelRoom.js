function hotelRoom(input) {
    let months = input[0]
    let nights = Number(input[1])
 
    let studioPrice = 0
    let apartmentPrice = 0
 
    switch (months) {
        case "May":
        case "October":
            studioPrice = nights * 50
            apartmentPrice = nights * 65
            if (nights > 7 && nights <= 14) {
                studioPrice = studioPrice * 0.95
            } else if (nights > 14) {
                studioPrice = studioPrice * 0.70
                apartmentPrice = apartmentPrice * 0.90
 
            }
            break;
        case "June":
        case "September":
            studioPrice = nights * 75.20
            apartmentPrice = nights * 68.70
            if (nights > 14) {
                studioPrice = studioPrice * 0.80
                apartmentPrice = apartmentPrice * 0.90
 
            }
            break;
        case "July":
        case "August":
            apartmentPrice = nights * 77
            studioPrice = nights * 76
            if (nights > 14) {
                apartmentPrice = apartmentPrice * 0.90
 
            }
            break;
 
    }
 
    console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`)
    console.log(`Studio: ${studioPrice.toFixed(2)} lv.`)
 
}

hotelRoom (["May","15"]);

