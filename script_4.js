const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
];

// les entrepreneurs qui sont nés dans les années 70
console.log("les entrepreneurs qui sont nés dans les années 70 : ");
let yearsEntrepreneur = [];
entrepreneurs.forEach(element => {
    if (element.year > 1969 && element.year < 1980){
        let name = element.first + " " + element.last
        yearsEntrepreneur.push(name)
    }
});
console.log(yearsEntrepreneur)

// le prénom et le nom des entrepreneurs
console.log("le prénom et le nom des entrepreneurs : ");
let firstAndLastName = [];
entrepreneurs.forEach(element => {
    let name = element.first + " " + element.last
    firstAndLastName.push(name)
});
console.log(firstAndLastName)

// Quel âge aurait chaque inventeur aujourd'hui ?
console.log("Quel âge aurait chaque inventeur aujourd'hui ?");
let age = [];
entrepreneurs.forEach(element => {
    let ageEntrpreneur = 2022 - element.year
    age.push(ageEntrpreneur)
});

for(let count = 0; count <=18; count++){
    console.log(`${firstAndLastName[count]} a aujourd'hui ${age[count]} ans`);
}

// Trie les entrepreneurs par ordre alphabétique du nom de famille.
console.log("Liste des entrepreneurs par ordre alphabétique du nom de famille");
let lastName = []
entrepreneurs.forEach(element => {
    lastName.push(element.last)
});
lastName.sort();
console.log(lastName)