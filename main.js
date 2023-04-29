//1.	Implementar un algoritmo que reciba 2 argumentos y los sume, el resultado se deberá imprimir en pantalla.

// function suma(a,b) {
//   return a + b;
// }

// console.log(suma(3,6))

//2.	Un estudiante realiza 4 exámenes, calcular el promedio de estos 

// function promedio(a,b,c,d) {
//   return (a + b + c + d)/4;
// }

// console.log(promedio(12,14,18,10))

//3.	Calcular el área de un rectángulo 

// function areaRectangle(a,b) {
//   return a * b;
// }

// console.log(areaRectangle(4,5))

//4.	Calcular el área de un triángulo 

// function areaTriangle(a,b) {
//   return (a * b)/2;
// }

// console.log(areaTriangle(8,6))

//5.	Calcular el área de una circunferencia 

// function areaCircle(r) {
//   return 3.1416 * (r * r);
// }

// console.log(areaCircle(4))

//6.	Determinar el sueldo semanal de un trabajador basándose en sus horas trabajadas y su salario por hora del hombre.

// function salary(money){
//   return 40 * money;
// }

// console.log(salary(15))

//7.	Una modista, para realizar sus prendas de vestir, encarga las telas al extranjero. Para cada pedido, tiene que proporcionar las medidas de la tela en pulgadas, pero ella generalmente las tiene en metros. Realice un algoritmo para ayudar a resolver el problema, determinando cuantas pulgadas debe pedir con base en los metros que requiere. Represéntelo mediante el diagrama de flujo y el pseudocódigo (1 pulgada = 0.0254 m). 

// function measure(length){
//   return length/0.0254;
// }

// console.log(measure(12))

//8.	Una empresa importadora desea determinar cuántos dólares puede adquirir con equis cantidad de dinero peruano.

// function change(money){
//   return money/3.75;
// }

// console.log(change(3000))

//9.	Una empresa que contrata personal requiere determinar la edad de las personas que solicitan trabajo, pero cuando se les realiza la entrevista sólo se les pregunta el año en que nacieron.

// function age(year){
//   return 2023 - year;
// }

// console.log(age(1988))

//10.	Se tiene el nombre y la edad de tres personas. Se desea saber el nombre y la edad de la persona de menor edad.

// const personOne = {nombre:"Jose", edad:35}
// const personTwo = {nombre:"Luis", edad:27}
// const personThree = {nombre:"Christian", edad:25}

// function younger(){
//   if (personOne.edad < (personTwo.edad && personThree.edad)){
//     console.log(`${personOne.nombre} es el menor`);
//   } else if (personTwo.edad < (personOne.edad && personThree.edad)){
//     console.log(`${personTwo.nombre} es el menor`);
//   } else {
//     console.log(`${personThree.nombre} es el menor`);
//   }
// }

// younger();

//11.	Se les dará un bono por antigüedad a los empleados de una tienda. Si tienen un año, se les dará $100; si tienen 2 años, $200, y así sucesivamente hasta los 5 años. Para los que tengan más de 5, el bono será de $1000. Realice un algoritmo y represéntelo, que permita determinar el bono que recibirá un trabajador.

// function bonus(years){
//   if (years == 0){
//     console.log("Bienvenido novato");
//   } else if (years == 1){
//     console.log("Te mereces un bono de $100");
//   } else if (years == 2){
//     console.log("Te mereces un bono de $200");
//   } else if (years == 3){
//     console.log("Te mereces un bono de $300");
//   } else if (years == 4){
//     console.log("Te mereces un bono de $400");
//   } else if (years == 5){
//     console.log("Te mereces un bono de $500");
//   } else {
//     console.log("Te mereces un bono de $1000");
//   }
// }

// bonus(2);

//12.	Un profesor tiene un salario inicial de $1500, y recibe un incremento de 10 % anual durante 6 años. ¿Cuál es su salario al cabo de 6 años? ¿Qué salario ha recibido en cada uno de los 6 años? Realice el algoritmo y representan la solución, utilizando el ciclo apropiado.

// function salary(s){
//   for (let i = 0; i < 7; i++) {
//     const year = s * Math.pow(1.1,i);
//     console.log(year);
//   }
// }

// salary(1500);

//13.	Realice un algoritmo para leer las calificaciones de 5 alumnos y determine el número de aprobados y reprobados.

// function notes(a,b,c,d,e){
//   if(a > 10) {
//     console.log("Aprobado")
//   } else {
//     console.log("Desaprobado")
//   }
//   if(b > 10) {
//     console.log("Aprobado")
//   } else {
//     console.log("Desaprobado")
//   }
//   if(c > 10) {
//     console.log("Aprobado")
//   } else {
//     console.log("Desaprobado")
//   }
//   if(d > 10) {
//     console.log("Aprobado")
//   } else {
//     console.log("Desaprobado")
//   }
//   if(e > 10) {
//     console.log("Aprobado")
//   } else {
//     console.log("Desaprobado")
//   }
// }

// notes(7,14,5,12,16);

//14.	Realice un algoritmo para determinar si una persona puede votar con base en su edad en las próximas elecciones.

function vote(age){
  if (age < 18){
    console.log("Usted no puede votar");
  } else if ( age < 71) {
    console.log("Usted debe votar");
  } else {
    console.log("Usted no necesita votar");
  }
}

vote(14);
vote(20);
vote(71);