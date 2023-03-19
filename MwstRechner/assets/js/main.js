const input = document.getElementById("inputnum");
const nettoBrutto = document.getElementById("aufschlagen");
const bruttoNetto = document.getElementById("abziehen");
const siebenProzent = document.getElementById("siebenProzent");
const neunzehnProzent = document.getElementById("neunzehnProzent");
const mwstErgebnis = document.getElementById("mwstErgebnis");
const ergebnis = document.getElementById("ergebnis");
const totalBetrag = document.getElementById("totalBetrag");



let calc = () => {

    if (nettoBrutto.checked == true && neunzehnProzent.checked == true) {
        ergebnis.innerHTML = (input.value * 1.19).toFixed(2).concat("€");
        mwstErgebnis.innerHTML = (input.value * 0.19).toFixed(2).concat("€");
        totalBetrag.innerHTML = ("Bruttobetrag (Endpreis)");
    }

    else if (nettoBrutto.checked == false && neunzehnProzent.checked == true) {
        ergebnis.innerHTML = (input.value / 1.19).toFixed(2).concat("€");
        mwstErgebnis.innerHTML = (input.value / 1.19 * 0.19).toFixed(2).concat("€");
        totalBetrag.innerHTML = ("Nettobetrag");
    }

    else if (nettoBrutto.checked == true && siebenProzent.checked == true) {
        ergebnis.innerHTML = (input.value * 1.07).toFixed(2).concat("€");
        mwstErgebnis.innerHTML = (input.value * 0.07).toFixed(2).concat("€");
        totalBetrag.innerHTML = ("Bruttobetrag (Endpreis)");
    }

    else if (nettoBrutto.checked == false && siebenProzent.checked == true) {
        ergebnis.innerHTML = (input.value / 1.07).toFixed(2).concat("€");
        mwstErgebnis.innerHTML = (input.value / 1.07 * 0.07).toFixed(2).concat("€");
        totalBetrag.innerHTML = ("Nettobetrag");
    }
}

