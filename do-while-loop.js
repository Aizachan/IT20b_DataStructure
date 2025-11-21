// i = 1;
// do {
//     console.log(i);
//     i++;
// } while (i <= 5);

//----------------------//

// i = 5;
// do {
//     console.log(i);
//     i--;
// } while (i >= 1);

//----------------------//

// output = "";
// i = 1;

// do{
//     output += i + " ";
//     i++;
// } while (i <= 5);
// console.log(output);

//----------------------//

arr1 = [4,2,3];
i = 0;
output = " ";

do {
    output += arr[i] + " ";
    i++;
} while (i < arr.length);
console.log(output);

function arrDoWhile(arr){
    output = " ";
    i = 0;
    do {
        output += arr[i] + " ";
        i++;
    } while (i < arr.length);
    console.log(output);
}
arrDoWhile(arr1);