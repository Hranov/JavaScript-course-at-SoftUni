function oscars (input) {

    let actorName = (input[0]);
    let initialPoints = Number (input[1]);
    let numberOfEvaluators = Number (input [2]);
    
    let currentJuryPoints = 0;
    let allJuryPoints = initialPoints;
    
    for (let i=3;i<input.length;i+=2) {

      let nameLength = Number (input[i].length);
      let juryPoints = Number(input[i + 1]);

      currentJuryPoints = (nameLength * juryPoints)/2;
      
      allJuryPoints = allJuryPoints + currentJuryPoints;
      
      if (allJuryPoints > "1250.5") {
        console.log(`Congratulations, ${actorName} got a nominee for leading role with ${allJuryPoints.toFixed(1)}!`);
        break;}
      
      
      }

      if (allJuryPoints < "1250.5") {
        console.log(`Sorry, ${actorName} you need ${(1250.5-allJuryPoints).toFixed(1)} more!`); }
         
        }

oscars (["Sandra Bullock",
"340",
"5",
"Robert De Niro",
"50",
"Julia Roberts",
"40.5",
"Daniel Day-Lewis",
"39.4",
"Nicolas Cage",
"29.9",
"Stoyanka Mutafova",
"33"])
;
