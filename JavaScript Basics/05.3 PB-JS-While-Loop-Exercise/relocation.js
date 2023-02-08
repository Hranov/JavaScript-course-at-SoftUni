function relocation (input) {

    let width = Number (input[0]);
    let length = Number (input[1]);
    let hight = Number (input[2]);

    let allSpace = width * length * hight;
    let index = 3;
    let command = input[index];

    while (command !=="Done") {

    if (allSpace>command) {
        command = Number (input[index]);
        allSpace= allSpace - command;
        index++
        command = input[index];
    }

    else if (command>allSpace) {
        console.log(`No more free space! You need ${command-allSpace} Cubic meters more.`);
        break;
    }

}

    if (command==="Done") {
        console.log(`${allSpace} Cubic meters left.`);
    }

}

relocation (["10", "1","2","4", "6","Done"]);
