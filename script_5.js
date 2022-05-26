const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

// Est-ce que tous les livres ont été au moins empruntés une fois ?
console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?");
books.forEach(element => {
    if (element.rented == 0 ){
        console.log("NON !")
    }
});
console.log("OUI !")

// Quel est livre le plus emprunté ?
let booksMoreRented = 0
let titleBooksMoreRented = ""
books.forEach(element => {
    if (element.rented > booksMoreRented ){
        booksMoreRented = element.rented
        titleBooksMoreRented = element.title
    }
});
console.log(`Le livre le plus empreuté est : ${titleBooksMoreRented}`);

// Trouve le livre avec l'ID: 873495
books.forEach(element => {
    if (element.id == 873495 ){
        console.log(`Le livre avec id 873495 est : ${element.title}`)
    }
});

// Supprime le livre avec l'ID: 133712
for(let index in books) {
    if (books[index].id == 133712 ){
        var indexID133712 = index
    }
};
books.splice(indexID133712, 1);

// Trie les livres par ordre alphabétique 
let ArrayTitleBook = []
books.forEach(element => {
    ArrayTitleBook.push(element.title)
});
console.log(ArrayTitleBook.sort().join('\n'))