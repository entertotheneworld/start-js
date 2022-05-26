let answer = "";
while(answer !== "sortir") {
  answer = prompt("Dit nous tous ! (Pour sortir de Acné-Bot tape : sortir) ");
  if (theSentenceIsInterrogative(answer)){
    console.log("Ouais Ouais...")
  } else if (letterUpcase(answer)){
    console.log("Pwa, calme-toi...")
  } else if (fortnite(answer)){
    console.log("on s' fait une partie soum-soum ?")
  } else if (answer == ""){
    console.log("t'es en PLS ?")
  } else {
    console.log("balek.")
  }
} 

console.log("haaa, Bonne journée !")

function theSentenceIsInterrogative(answer) {
    answer.split('');
    sizeAnswer = answer.length;
    if (answer.split('')[answer.length - 1] == "?") {
        return true 
    } else {
        return false
    }
}

function letterUpcase(answer){
    if (answer == answer.toUpperCase() && answer !== ""){
        return true 
    } else {
        return false
    }
}

function fortnite(answer){
    var position = answer.indexOf("fortnite");
    if (position !== (-1)){
        return true
    } else {
        return false
    }
}