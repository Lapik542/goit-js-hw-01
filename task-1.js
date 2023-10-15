function makeTransaction(quantity, pricePerDroid) {
   let x = quantity;
   let y = pricePerDroid;
   y *= x;
   console.log(`You ordered ${x} droids worth ${y} credits!`);
}
console.log(makeTransaction(5, 3000));

