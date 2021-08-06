let chilometriDaPercorrere = parseInt(prompt("inserisca quanti Km vuol percorrere"));
let age = parseInt(prompt("inserisca la sua eta´"));
let costoBiglietto = chilometriDaPercorrere * 0.21;
console.log(costoBiglietto);

let sconto=0;

if (age >= 65){
    sconto = 40;
}else if (age < 18){
    sconto = 20;
}

let scontoApplicato = (costoBiglietto * sconto) / 100;

let costoBigliettoFinale = costoBiglietto - scontoApplicato;

document.getElementById("km-da-percorrere").innerHTML = chilometriDaPercorrere + " Km";
document.getElementById("age").innerHTML = age + " anni"
document.getElementById("sconto-applicato").innerHTML = sconto + " &percnt;"
document.getElementById("biglietto-scontato").innerHTML = costoBigliettoFinale.toFixed(2) + " &euro;"
document.getElementById("costo-biglietto").innerHTML = costoBiglietto.toFixed(2) + " &euro;"

