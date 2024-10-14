// Versión usando while
console.log("Usando while:");
let i = 100;
while (i >= 1) {
    if (i % 2 !== 0 && i % 3 !== 0 && i % 7 !== 0) {
        console.log(i);
    }
    i--;
}

// Versión usando do...while
console.log("\nUsando do...while:");
let j = 100;
do {
    if (j % 2 !== 0 && j % 3 !== 0 && j % 7 !== 0) {
        console.log(j);
    }
    j--;
} while (j >= 1);

// Versión usando for
console.log("\nUsando for:");
for (let k = 100; k >= 1; k--) {
    if (k % 2 !== 0 && k % 3 !== 0 && k % 7 !== 0) {
        console.log(k);
    }
}