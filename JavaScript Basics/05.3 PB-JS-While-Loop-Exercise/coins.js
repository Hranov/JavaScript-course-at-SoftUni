function coins (input) {

    let change = Number (input[0]);
    let stotinki = Math.floor (change*100);
    let coinsSum = 0;

    while (stotinki>0) {

        if (stotinki>=200) {
            coinsSum++
            stotinki = stotinki -200;
        }

        else if (stotinki>=100) {
            coinsSum++
            stotinki = stotinki -100;
        }

        else if (stotinki>=50) {
            coinsSum++
            stotinki = stotinki -50;
        }

        else if (stotinki>=20) {
            coinsSum++
            stotinki = stotinki -20;   
        }

        else if (stotinki>=10) {
            coinsSum++
            stotinki = stotinki -10;
        }

        else if (stotinki>=5) {
            coinsSum++
            stotinki = stotinki - 5;
        }

        else if (stotinki>=2) {
            coinsSum++
            stotinki = stotinki -2;
        }

        else if (stotinki>=1) {
            coinsSum++
            stotinki = stotinki -1;
        }

        
            
    }

    console.log(coinsSum);

}

coins (["0.56"]);