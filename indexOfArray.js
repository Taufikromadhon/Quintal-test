var array2 = [10, 23, 45, 92, 101, 102, 103, 10001];
var input = 102 ;
var output;

if (input==10){
    output=1;
}
else if (input==10){
    output=array2.indexOf(10);
}
else if (input==23){
    output=array2.indexOf(23);
}
else if (input==45){
    output=array2.indexOf(45);
}
else if (input==92){
    output=array2.indexOf(92);
}
else if (input==101){
    output=array2.indexOf(101);
}
else if (input==102){
    output=array2.indexOf(102);
}
else if (input==103){
    output=array2.indexOf(103);
}
else if (input==1001){
    output=array2.indexOf(1001);
}
else{
    output="Error";
}

console.log(output);
document.write("<br>");
document.write(output);