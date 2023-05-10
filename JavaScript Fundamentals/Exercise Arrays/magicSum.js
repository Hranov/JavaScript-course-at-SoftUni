function magicSum (array, number) {

let arrayResult = [];
let arrayString = '';

for (i=0;i<array.length;i++) {
    for (j=i + 1;j<array.length;j++) {

        if (array[i] + array[j]===number) {

            arrayString=`${array[i]} ${array[j]}`;
            arrayResult.push(arrayString);
        }
    }
}

console.log(arrayResult.join('\n'));

}

magicSum ([1, 7, 6, 2, 19, 23],8);