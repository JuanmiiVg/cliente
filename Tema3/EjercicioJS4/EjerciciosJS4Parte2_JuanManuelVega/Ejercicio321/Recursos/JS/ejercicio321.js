function iguales(a, b) {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
        if (a.indexOf(b[i]) === -1) return false;
    }
    return true;
}

console.log(iguales([1, 2, 3], [3, 2, 1]));