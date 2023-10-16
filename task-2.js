function getShippingMessage(country, price, deliveryFee) {
   let x = country;
   let y = price;
   let e = deliveryFee;
   let t = price + deliveryFee;
   return console.log(`Shipping to ${x} will cost ${t} credits`);
}
getShippingMessage("Australia", 120, 50);
getShippingMessage("Germany", 80, 20);
getShippingMessage("Sweden", 100, 20);