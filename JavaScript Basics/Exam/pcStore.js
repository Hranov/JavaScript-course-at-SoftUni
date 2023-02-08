function pcStore (input) {

    priceProcessor = Number (input[0]);
    priceVideoCard = Number (input[1]);
    priceRAM = Number (input[2]);
    CountRam = Number (input[3]);
    discount = Number (input[4]);

    priceProcessorBGN = priceProcessor * 1.57;
    priceVideoCardBGN = priceVideoCard * 1.57;
    priceRAMBGN = priceRAM * 1.57;
    AllRAMBGN=priceRAMBGN * CountRam;

    discountProcessor = priceProcessorBGN * discount;
    resultProcessor = priceProcessorBGN-discountProcessor;

    discountVidoecard = priceVideoCardBGN * discount;
    resultVideocard = priceVideoCardBGN - discountVidoecard;

    let total = (resultProcessor + resultVideocard + AllRAMBGN);




    console.log(`Money needed - ${total.toFixed(2)} leva.`);

}

pcStore ([500,200,80,2,0.05]);
