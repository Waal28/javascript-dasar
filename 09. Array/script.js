let makanan = ["Lontong", "Lotek", "Miso", "Mie Ayam"];

function printArray(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
  console.log("");
}

console.log("Array push");
makanan.push("Bakso");
printArray(makanan);

console.log("Array length");
makanan[3] = "Soto";
printArray(makanan);

console.log("Array delete");
delete makanan[1];
printArray(makanan);

let minuman = [
  "Kopi",
  "Teh",
  "Susu",
  "Tai",
  "Jawi",
  "Ginseng",
  "Soya",
  "Cincau",
];

console.log("Array splice");
const splice = minuman.splice(3, 2);
console.log(splice);
printArray(minuman);
