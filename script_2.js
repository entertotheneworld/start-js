
answer = prompt("De quel nombre veux-tu calculer la factorielle ?");
console.log("Le résultat est :", fact(answer));

function fact(nbr){
    var i, nbr, f = 1;
    for(i = 1; i <= nbr; i++){
        f *= i; 
    }  
    return f;
}
  