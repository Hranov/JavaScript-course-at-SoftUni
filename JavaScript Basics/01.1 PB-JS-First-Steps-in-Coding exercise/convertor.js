function convertor (input) {

    let usd = Number(input[0]);
    let usdToBgn = usd * 1.79549;
    
    console.log (usdToBgn);

}

convertor (["12.5"]);