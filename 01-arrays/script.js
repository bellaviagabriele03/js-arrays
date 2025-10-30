const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Utilizzando un indice sull'array teachers, cambia il valore della
// variabile fourthTeacher qui sotto in modo che sia il quarto insegnante elencato nell'array
const fourthTeacher = teachers[3];
console.log("professore numero 4:", fourthTeacher);

// 2. Sostituisci il quinto insegnante nell'array teachers con 'Patrick'

teachers[4] = "Patrick";

// 3. Rimuovi l'ultimo insegnante dall'array e salvalo nella variabile lastTeacher qui sotto
const lastTeacher = teachers.pop()
console.log("ultimo professore:", lastTeacher);

// debug //console.log(teachers);



// 4. Rimuovi il primo insegnante dall'array e salvalo nella variabile firstTeacher qui sotto
const firstTeacher = teachers.shift()
console.log("Primo professore:", firstTeacher);


// 5. Aggiungi un insegnante di nome 'Vanessa' alla fine dell'array teachers
teachers.push("Vanessa")
console.log("Nuovo ultimo Prof:", teachers[5]);


// 6. Aggiungi un insegnante di nome 'Sarah' all'inizio dell'array teachers
teachers.unshift("Sarah")
console.log("Nuovo Primo Prof:", teachers[0]);


// 7. Trova l'indice dell'insegnante 'Lewis' nell'array teachers
// e salvalo nella variabile lewisIndex
const lewisIndex = teachers.indexOf("Lewis");
console.log(lewisIndex);



// 8. Verifica se l'array teachers è vuoto
// e salva il risultato nella variabile isTeachersEmpty

let risultato = "";
if (teachers.length > 1) {
  risultato = true;

} else if (teachers.length = 0) {
  risultato = false;

}

const isTeachersEmpty = risultato;

console.log(isTeachersEmpty);



