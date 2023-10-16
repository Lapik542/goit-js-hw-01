function makeTransaction(quantity, pricePerDroid) {
   let x = quantity;
   let y = pricePerDroid;
   y *= x;
   return console.log(`You ordered ${x} droids worth ${y} credits!`);
}
makeTransaction(5, 3000);
makeTransaction(3, 1000);
makeTransaction(10, 500);

