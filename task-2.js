function getShippingMessage(country, price, deliveryFee) {
   let x = country;
   let y = price;
   let e = deliveryFee;
   let t = price + deliveryFee;
console.log(`Shipping to ${x} will cost ${t} credits`);
}
console.log(getShippingMessage("Australia", 120, 50));
console.log(getShippingMessage("Germany", 80, 20));
console.log(getShippingMessage("Sweden", 100, 20));