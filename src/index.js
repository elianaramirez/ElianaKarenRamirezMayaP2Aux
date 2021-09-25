//PREGUNTA 1:
//Supongamos que estamos creando una aplicación de apuestas de fútbol.
//Los datos los obtenemos de un servicio web, los cuales son los siguientes:

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
  [
  'Neuer',
  'Pavard',
  'Martinez',
  'Alaba',
  'Davies',
  'Kimmich',
  'Goretzka',
  'Coman',
  'Muller',
  'Gnarby',
  'Lewandowski',
  ],
  [
  'Burki',
  'Schulz',
  'Hummels',
  'Akanji',
  'Hakimi',
  'Weigl',
  'Witsel',
  'Hazard','Brandt',
  'Sancho',
  'Gotze',
  ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
  team1: 1.33,
  x: 3.25,
  team2: 6.5,
  },
  };
//1. Cree un array de jugadores para cada equipo (nombre a las variables como
//'players1' y 'players2')

const players1 = ['Neuer',
'Pavard',
'Martinez',
'Alaba',
'Davies',
'Kimmich',
'Goretzka',
'Coman',
'Muller',
'Gnarby',
'Lewandowski',];

const players2 = ['Burki',
'Schulz',
'Hummels',
'Akanji',
'Hakimi',
'Weigl',
'Witsel',
'Hazard','Brandt',
'Sancho',
'Gotze',];
console.log((players1));
console.log((players2));

//2. El primer jugador en cualquier conjunto de jugadores es el portero y los demás
//son jugadores de campo. Para el Bayern de Múnich (team 1) cree una variable
//'gk' con el nombre del portero y un array 'fieldPlayers' con los 10 restantes
//jugadores de campo

  //const team1 'Bayern Munich',
  //const gk = ['Neuer']
  //const team1 = ['Bayern Munich'];
  //console.log(team1);
  
//const game = {
  //gk:"Neuer",   
  //greet: function(portero) {
    //console.log(`NOMBRE PORTERO ${this.gk} (${portero})`);
    //},
  //};
  let portero1 =["Neuer",];
  let gk1 = portero1["Neuer"];
  const fieldPlayers1= ['Pavard',
  'Martinez',
  'Alaba',
  'Davies',
  'Kimmich',
  'Goretzka',
  'Coman',
  'Muller',
  'Gnarby',
  'Lewandowski',];
         
  portero1.forEach(function(elemento) {
    console.log(`PORTERO1: Neuer`);
    console.log(fieldPlayers1);
});

let portero2 =["Burki",];
  let gk2= portero2["Burki"];
  const fieldPlayers2= [
'Schulz',
'Hummels',
'Akanji',
'Hakimi',
'Weigl',
'Witsel',
'Hazard','Brandt',
'Sancho',
'Gotze',];
         
  portero2.forEach(function(elemento) {
    console.log(`PORTERO2: Burki`);
    console.log(fieldPlayers2);
});
//3. Cree una matriz 'allPlayers' que contenga a todos los jugadores de ambos
//equipos (22 jugadores)

let allPlayers  = [players1,players2];
    
   console.log(allPlayers);
   console.log( players1.length+players2.length);

 //4. Durante el partido, el Bayern de Múnich (team 1) utilizó 3 jugadores suplentes.
//Así que crea un nuevo array ('players1Final') que contiene todos los jugadores
//originales del equipo1 más 'Thiago', 'Coutinho' y 'Perisic'  

const players1Final = [players1];
players1.push('Thiago', 'Coutinho', 'Perisic');
console.log(players1Final);

//5. Basado en el objeto game.odds, cree una variable para cada cuota (llamada
//'team1', 'draw' y 'team2')
const team1=[];
const draw=[];
const team2=[];
const odds = {
  team1 : 1.33,
  draw: 3.25,
  team2: 6.5,
  };
  
    console.log(odds);
//6. Cree una función ('printGoals') que reciba un número arbitrario de nombres de
//jugadores (no un array) e imprime cada uno de ellos en la consola, junto con el
//número de goles que marco cada uno (pasar como argumento solo nombres de
//jugadores que hayan marcado al menos un gol, revise los datos del objeto ‘game’
//para encontrar la información que le sirva).

//function printGoals(players1) {

//}

//console.log(printGoals.name); 

const printGoals = [

  {nombre: 'Pavard', cantidad: 2},
  {nombre: 'Martinez', cantidad: 0},
  {nombre: 'Alaba', cantidad: 2},
  {nombre: 'Davies', cantidad: 3},
  {nombre: 'Kimmich', cantidad: 1},
  {nombre: 'Goretzka', cantidad: 2},
  {nombre: 'Coman', cantidad: 1},
  {nombre: 'Muller', cantidad: 5},
  {nombre: 'Gnarby', cantidad: 7},
  {nombre: 'Lewandowski', cantidad: 7},
 
];
let cantidad;
function goles(printGoals) {
  //return printGoals.nombre === 'Martinez';

if (printGoals.cantidad==1)
{
  return (printGoals.nombre + printGoals.cantidad);
}
}
console.log(printGoals.find(goles));

//7. En las aplicaciones de apuestas es más probable que gane el equipo con la
//cuota más baja. Imprima en la consola que equipo es más probable que gane,
//sin usar una declaración if/else o el operador ternario.

//sin destructuración
let t1 = [1.33];
let t2 = [6.5];
const mayor = (t1>t2)?t1:t2;
console.log(mayor);

//8. Use un bucle para poder calcular la cuota (odd) promedio y mostrarlo en la
//consola
let promedio= [1.33,3.25,6.5,];
let suma = 0;
for(let index in promedio){
  suma += promedio[index]
   
};
console.log(suma/promedio.length);

//9. Cree una función que devuelva un objeto que contenga los nombres de los
//jugadores que anotaron goles, pero como PROPIEDADES, y el número de goles
//como VALORES. Por ejemplo, con los datos obtenidos arriba el objeto se verá
//como:
//{
//Gnarby: 1,
//Hummels: 1,
//Lewandowski: 2
//}


var jugadores1 = [
  {nombre: 'Pavard', cantidad: 2},
  {nombre: 'Martinez', cantidad: 0},
  {nombre: 'Alaba', cantidad: 2},
  {nombre: 'Davies', cantidad: 3},
  {nombre: 'Kimmich', cantidad: 1},
  {nombre: 'Goretzka', cantidad: 2},
  {nombre: 'Coman', cantidad: 1},
  {nombre: 'Muller', cantidad: 5},
  {nombre: 'Gnarby', cantidad: 7},
  {nombre: 'Lewandowski', cantidad: 7},
  
]

function ljugadores1(jugadores1, nombre) {
  var i = 0;
  // Mientras queden elementos por comprobar en el array y el nombre del elemento actual no sea el nombre que buscamos, pasamos al elemento siguiente
  while (i < jugadores1.length && jugadores1[i].nombre != nombre) {
    i++;
  }
  // Si el motivo por el que se ha salido del array es porque no quedan elementos por comprobar devolver null (no se ha encontrado). En caso contrario devolver el elemento en la posición i (posición en la que se ha encontrado ele lemento)
  if (i < jugadores1.length) {
    return jugadores1[i];
  }
  else {
    return null;
  }
}

console.log(ljugadores1(jugadores1, 'Pavard'));       
console.log(ljugadores1(jugadores1, 'Martinez'));
console.log(ljugadores1(jugadores1, 'Alaba'));  
console.log(ljugadores1(jugadores1, 'Davies'));  
console.log(ljugadores1(jugadores1, 'Kimmich'));  
console.log(ljugadores1(jugadores1, 'Goretzka'));  
console.log(ljugadores1(jugadores1, 'Coman'));  
console.log(ljugadores1(jugadores1, 'Muller'));  
console.log(ljugadores1(jugadores1, 'Gnarby'));  
console.log(ljugadores1(jugadores1, 'Lewandowski')); 
console.log(ljugadores1(jugadores1, 'ADRIAN'));  

//10. Tome en cuenta los siguientes datos:
const gameEvents = new Map([
  [17, 'GOAL'],
  [36, 'Substitution'],
  [47, 'GOAL'],
  [61, 'Substitution'],
  [64, 'Yellow card'],
  [69, 'Red card'],
  [70, 'Substitution'],
  [72, 'Substitution'],
  [76, 'GOAL'],
  [80, 'GOAL'],
  [92, 'Yellow card'],
  ]);
//1- Cree una funcion que analice los datos y muestre en la consola un mensaje como
//este: 
//“Un evento ocurrió, en promedio, cada 9 minutos”
//- Recorra la variable “gameEvents” y muestre cada elemento en la consola
//señalando si fue el primer o el segundo tiempo, algo como esto:
//“[PRIMER TIEMPO] 17: GOAL”

 
// PREGUNTA 2:
//Escriba un programa que reciba una lista de nombres de variables escritos en
//underscore_case y convertirlos en camelCase.
//underscore_case
//first_name
//Some_Variable
//calculate_AGE
//delayed_departure




function camelize(str) {
  // Split the string at all space characters
  return str.split(' ')
     // get rid of any extra spaces using trim
     .map(a => a.trim())
     // Convert first char to upper case for each word
     .map(a => a[0].toUpperCase() + a.substring(1))
     // Join all the strings back together
     .join("")
}
console.log(camelize("underscore case"))
console.log(camelize("first name"))
console.log(camelize("Some Variable"))
console.log(camelize("calculate age"))
console.log(camelize("delayed Departure"))