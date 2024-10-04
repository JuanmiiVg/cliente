
console.log('1. true*7= ${true*7}'); console.log('2.9-false=${9-false}');
console.log('3. 12+"5"= ${12+"5"}'); console.log('4. "67"+11= ${"67"+11}'); 
console.log('5. 12*"5"= ${12*"5"}');
console.log('6. "67"*11= ${"67"*11}');
console.log('7. "texto "*8= ${"texto" *8}');
console.log('8. undefined/7= $(undefined/7}');
console.log('9. null*6= ${null*6}');
console.log('10. Infinity-"texto" ${Infinity-"texto"}');
console.log('11. NaN+4= ${NaN+4}');

// OPERACIONES AND
console.log(`1= ${true && true}`); 
console.log(`2 = ${true && false}`); 
    console.log(`3 = ${false && true}`); 
    console.log(`4=${false && (3 == 4)}`); 
    console.log(`5 = ${`Gato` && `Perro`}`); 
    console.log(`6 = ${false && `Gato`}`); 
    console.log(`7=${`Gato` && false}`); 
// OPERACIONES OR
    console.log(`8 = ${true || true}`);
    console.log(`9 ${false || true}`);
    console.log(`10 = ${true || false}`);
    console.log(`11 = ${false || (3 == 4)}`);
    console.log(`12 = ${`Gato` || `Perro`}`);
    console.log(`13 = ${false || `Gato`}`); 
    console.log(`14 = ${`Gato` || false}`); 
    // OPERACIONES NOT
    console.log(`15 = ${!true}`);
    console.log(`16 = ${!false}`);
    console.log(`17 ${!`Gato`}`);