var dict = {
    1 : "a",
    2 : "b",
    3 : "c",
    4 : "d",
    5 : "e",
    6 : "f",
    7 : "g",
    8 : "h",
    9 : "i",
    10 : "j",
    11 : "k",
    12 : "l",
    13 : "m",
    14 : "n",
    15 : "o",
    16 : "p",
    17 : "q",
    18 : "r",
    19 : "s",
    20 : "t",
    21 : "u",
    22 : "v",
    23 : "w",
    24 : "x",
    25 : "y",
    26 : "z"
};

// input = prompt("input alphabet :");
input = "20 12 18 30 21";
input2 = input.split(" ")
n = input2.length
alert(n)
// for (let i = 1; i <= n; i++) {
//     x = input.split(" ",i)
//     alert(x)
// };

function extraction(str) {

    var position;
    var length;

    for (i=0; i <= n; i++) {
        if(str.length % 2 == 1) {
            position = str.length / 2;
            length = 1;
        } else {
            position = str.length / 2 - 1;
            length = 2;
        }
    }   

    return str.substring(position, position + length)
}

alert(extraction("2012283021"));

