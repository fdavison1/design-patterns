//callback example
const calc = () => {
    return 4 * 3;
}

const printCalc = callback => {
    console.log(callback());
}

printCalc(calc); 

//"function as first class citizen"
let aNumber = calc();

console.log(aNumber);