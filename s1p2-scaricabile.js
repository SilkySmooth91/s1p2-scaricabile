/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/* Principali datatype in JavaScript:
-NUMBER: qualsiasi numero positivo o negativo. Esistono valori speciali per questo datatype, che sono +Infinity, -Infinity, NaN (Not a Number);
-STRING: sequenza di caratteri contenuti in apici o doppi apici. Può avere una qualunque lunghezza partendo da lunghezza zero (cioè nessun carattere);
-BOOLEAN: i dati booleani sono definiti entità logiche e possono assumere due valori: true oppure false;
-UNDEFINED: si dice undefined una variabile che è stata dichiarata ma a cui non è ancora stato assegnato alcun dato;
-NULL: assegna ad una variabile un valore zero.
-OGGETTO: l'oggetto è un insieme di coppie chiave/valore racchiuse in parentesi graffe;
-ARRAY: è una lista di dati, di qualsiasi tipo, che può essere manipolato nel suo insieme o andando a selezionare un dato specifico all'interno della lista.   */

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/* Un oggetto è un insieme di coppie chiave/valore, sono quindi variabili o costanti che possono contenere diversi tipi di dati insieme.
Esempio: */
const Lorenzo = {nome:"Lorenzo", cognome:"Olivieri", età: 33, sesso:"Maschio", isEmployed: true}
console.log(typeof Lorenzo)

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un'addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num1 = 12
let num2 = 20
let somma = num1 + num2
console.log("Il risultato della somma", num1, "+", num2, "è", somma)

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x
x = 12

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name
name = "Lorenzo"
console.log(typeof name)
/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let subtraction = x-4
console.log("Il risultato di", x,"-",4, "è", subtraction)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name1 = "john"
let name2 = "John"
console.log("La variabile name1 è uguale alla variabile name2:",name1 === name2)
let name2lc = name2.toLowerCase() 
console.log(name2lc)
console.log("La variabile name1 è uguale alla variabile name2lc:",name1 === name2lc)