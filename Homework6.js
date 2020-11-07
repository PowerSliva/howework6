let mass = [10,9,8,7,6,5,4,3,2,1,0];
//**с помощью цикла while*/
let i=0;
while (i <= mass.length) {
console.log(mass[i])
i++;
}
//**с помощью рекурсии*/
let i=0;
function recyrcia() {
if (i >= mass.length) {
console.log("Конец")
}
else {
console.log(mass[i])
return recyrcia(i++);}
}
recyrcia();