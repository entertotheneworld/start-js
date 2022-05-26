const exemple1 = "CCGUCGUUGCGCUACAGC";
let arrayExemple1 = exemple1.split('');

console.log(arrayExemple1);


let test = "";
let result = [];
for(let index in arrayExemple1) {
    if(index == 3 || index == 6 || index == 9 || index == 12 || index == 15 || index == 18 || index == 21){
        if (test == "UCU" || test == "UCC" || test == "UCA" || test == "UCG" || test == "AGU" || test == "AGC"){
            result.push("Sérine");
        } else if(test == "CCU" || test == "CCC" || test == "CCA" || test == "CCG") {
            result.push("Proline");
        } else if(test == "UUA" || test == "UUG") {
            result.push("Leucine");
        } else if(test == "UUU" || test == "UUC") {
            result.push("Phénylalanine");
        } else if(test == "CGU" || test == "CGC" || test == "CGA" || test == "CGG" || test == "AGA" || test == "AGG") {
            result.push("Arginine");
        } else if(test == "UAU" || test == "UAC") {
            result.push("Tyrosine");
        }           
        test = ""   
        test += arrayExemple1[index];    
    } else {
       test += arrayExemple1[index];
    }
    console.log(test)
};
if (test == "UCU" || test == "UCC" || test == "UCA" || test == "UCG" || test == "AGU" || test == "AGC"){
    result.push("Sérine");
} else if(test == "CCU" || test == "CCC" || test == "CCA" || test == "CCG") {
    result.push("Proline");
} else if(test == "UUA" || test == "UUG") {
    result.push("Leucine");
} else if(test == "UUU" || test == "UUC") {
    result.push("Phénylalanine");
} else if(test == "CGU" || test == "CGC" || test == "CGA" || test == "CGG" || test == "AGA" || test == "AGG") {
    result.push("Arginine");
} else if(test == "UAU" || test == "UAC") {
    result.push("Tyrosine");
}
console.log(result.join('-'));
