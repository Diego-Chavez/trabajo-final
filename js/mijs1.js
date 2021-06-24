//EJERCICIOFINAL
// REAILIZAR UN PROGRAMA QUE PIDA UN VALOR ENTERO QUE EQUIVALE A UN MONTO DE DINERO, CALCULE CUANTOS
//BILLETES DE 200,100,50,20 Y 10 SOLES CONTIENE
let can200 =0;
let can100 =0;
let can50 =0;
let can20 =0;
let can10 =0;
let num1 =0;

num1 = +prompt("ingresa el monto que deseas dividir: ");
document.getElementById("b").innerHTML=num1;
if (num1 <= 0) {
    alert("no se puede realizar la acción")
}
while (num1 >=200) {
    can200++;
    num1=num1-200;
}
while (num1 >= 100) {
    can100++;
    num1=num1-100;
}
while (num1 >= 50) {
    can50++;
    num1=num1-50;
}
while (num1 >= 20) {
    can20++;
    num1=num1-20;
}
while (num1 >= 10) {
    can10++;
    num1=num1-10;
}

alert("En el monto hay " + can200 + " billetes de 200")
alert("En el monto hay " + can100 + " billetes de 100")
alert("En el monto hay " + can50 + " billetes de 50")
alert("En el monto hay " + can20 + " billetes de 20")
alert("En el monto hay " + can10 + " billetes de 10")

document.getElementById("b200").innerHTML=can200;
document.getElementById("b100").innerHTML=can100;
document.getElementById("b50").innerHTML=can50;
document.getElementById("b20").innerHTML=can20;
document.getElementById("b10").innerHTML=can10;
