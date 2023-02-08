function atp (input) {

    let tournamentsCount = Number (input[0]);
    let startingPoints = Number (input[1]);

    let allWonPoints=0;
    let wonTournamets = 0;
    
    for (let i=2;i<input.length;i++) {

        let currentPoints = (input[i]);

        switch (currentPoints) {
            case "W": allWonPoints= allWonPoints + 2000; break;
            case "F": allWonPoints= allWonPoints + 1200; break;
            case "SF": allWonPoints= allWonPoints + 720; break;
            
        }
        
        if (currentPoints==="W"){
            wonTournamets = wonTournamets + 1;
        }
    }
    
    console.log(`Final points: ${(allWonPoints + startingPoints)}`);
    console.log(`Average points: ${Math.floor(allWonPoints/tournamentsCount)}`);
    console.log(`${(((wonTournamets/tournamentsCount)*100).toFixed(2))}%`);


}

atp (["7",
"1200",
"SF",
"F",
"W",
"F",
"W",
"SF",
"W"])
;
