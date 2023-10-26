function getElementWidth(content, padding, border) {
   const widthContent = parseFloat(content);
   const widthPadding = parseFloat(padding);
   const widthBorder = parseFloat(border);
   return widthContent + widthPadding * 2 + widthBorder * 2;
}
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200

function isNumberInRange(start, end, number) {
   const a = start;
   const c = number;
   const b = end;
   if (c >= a && c <= b) {
      console.log(true);
   } else {
      console.log(false);
   }
}

isNumberInRange(20, 50, 76)

isNumberInRange(20, 50, 24)

isNumberInRange(10, 30, 17)

isNumberInRange(10, 30, 5)