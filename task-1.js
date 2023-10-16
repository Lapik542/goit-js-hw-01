function makeTransaction(quantity, pricePerDroid) {
   let x = quantity;
   let y = pricePerDroid;
   y *= x;
   return console.log(`You ordered ${x} droids worth ${y} credits!`);
}
console.log(makeTransaction(5, 3000));
console.log(makeTransaction(3, 1000));
console.log(makeTransaction(10, 500));

