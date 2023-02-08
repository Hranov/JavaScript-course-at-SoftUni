function foodDelivery (input) {
    let chikenMenus = Number (input[0]);
    let fishMenus = Number (input[1]);
    let vegiMenus = Number (input[2]);
 
    let chikenMenusPrice = chikenMenus * 10.35;
    let fishMenusPrice = fishMenus * 12.4;
    let vegiMenusPrice = vegiMenus * 8.15;
 
    let allMenusPrice = chikenMenusPrice + fishMenusPrice + vegiMenusPrice;
 
    let desertPrice = allMenusPrice * 0.2;
 
    let finalPrice = allMenusPrice + desertPrice + 2.50
 
    console.log (finalPrice);
}

foodDelivery (["2","4","3"]);