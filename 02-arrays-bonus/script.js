const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers

//verifica dell'array pre-modifiche
console.log("Array pre-modifiche:", teachers.join(" -- "));


const reversedTeachers = teachers.reverse();
console.log("Array invertita:", teachers.join("; "));



// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = [];

for (i = 0; i < teachers.length; i++) {
  const curTeacher = teachers[i];
  if (curTeacher.length >= 5) {
    longNames.push(curTeacher);

  }
}
console.log("Array Dei Nomi più lunghi:", longNames.join(","));



// 3. Rimuovi 'Ed' dall'array teachers

console.log(teachers.splice(5, 1));

//verifica che ed non sia più all'interno dell'array
console.log("Array dopo L'eliminazione:", teachers.join(" - "));




// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
const isFabioPresent = teachers.includes("Fabio"); // nota: anche solo modificando il nome con minuscole o maiuscole cambia il risultato ottenuto nella stampa
console.log("Risultato Verifica se Fabio c'è:", isFabioPresent);


// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString
const teachersString = teachers.join(", ");
console.log("Array-Items stampati con funzione join e separati:", teachersString);
