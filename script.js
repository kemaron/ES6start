// Zadanie 1
// wyświetl dwa stringi bez użycia operatora '+'

const a = 'Hello';
const b = 'World';
console.log (`${a} ${b}`);


// Zadanie 2
// FUnkcja mnożąca dwie liczby bez użycia If, a wymagan jest arrow function. 
// Jeśli user poda tylko jedną cyfrę, to druga ma przyjąć wartość 1

const multiply = (a=1, b=1) => console.log (`Wynik działania: ${a*b}`);
multiply (4,2);


// Zadanie 3
// funkacja, któa wyliczy średnią, ze wszystkich argumentów, które jej podamy

const average = (...numbers) => console.log ((numbers.reduce((a,b) => a+b))/numbers.length);
average (4,12,8);


//Zadanie 4
// Stwórz tablicę z ocenami, a następnie przekaż je do funkcji average z wykorzystaniem operatora spread

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
average (...grades); //funkcja average powstała w poprzednim zadaniu


// Zadanie 5
// wykorzystanie destrukturyzacji do wyciągnięcia imienia i nazwiska z poniższej tabel

const data = [1, 4, 'Iwona', false, 'Nowak'];
const [,,firstName,,lastName] = data;
console.log (`${firstName} ${lastName}`);