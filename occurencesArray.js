const array3 =  [5, 100, 12, 4, 5, 2, 12, 13];
const counts = {};

for (const element of array3) {
  if (counts[element]) {
    counts[element] += 1;
  } else {
    counts[element] = 1;
  }
}

console.log(counts);
document.write("<br>");
document.write(5," ", counts[5], 'x',"<br>");
document.write(100," ", counts[100], 'x',"<br>");
document.write(12," ", counts[12], 'x',"<br>");
document.write(4," ", counts[4], 'x',"<br>");
document.write(2," ", counts[2], 'x',"<br>");
document.write(13," ", counts[13], 'x',"<br>");
