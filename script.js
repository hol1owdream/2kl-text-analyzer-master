// to się wykona tylko raz, przy załadowaniu strony
document.getElementById("count-words").innerText = 0
document.getElementById("count-space").innerText = 0
document.getElementById("count-character").innerText = 0
document.getElementById("count-character-no-spaces").innerText = 0


// funkcja nie wykona się, dopóki jej nie wywołamy.
// Możemy używać jej ile razy chcemy
function analyze() {
    console.log("analizuję...")

    // pobierz wartość (value) z elementu o id "user-input"
    const text = document.getElementById("user-input").value
    // const text = "abc abfdf asfasdf afsdf sadfsd"

    // Funkcja trim() używana jest na String.
    // Usuwa ona białe znaki (np. spacje) z końca i początku Stringa.
    const textTrimmed = text.trim()
    // array - czyli tablica
    const words = textTrimmed.split(" ")

    // tablice można porównać do rzędu siedzeń w kinie - skupiamy się na pojedynczym rzędzie
    // każdy taki rząd ma ponumerowane miejsca
    // w programowaniu zazwyczaj takie rzędy zaczynamy liczyć od 0, a więc
    // typowa tablica będzie wyglądać mniej więcej tak:
    // [0, 1, 2, 3, 4] - tablica na 5 wartości (tutaj wypisane są tylko indeksy)
    // indeksy to właśnie taki numer siedzenia.
    // Na takim miejscu mogą znajdować się różne wartości.
    // Tablicę można sobie wyobrazić ostatecznie w taki sposób:
    // [0, 1, 2, 3, 4] - 5 miejsc w rzędzie, od 0 do 4
    // [7, 4, 0, 8, 9] - 5 wartości, każda jest na jakimś miejscu

    // wstawiamy do innerText długość tablicy "words".
    // length użyte na tablicy zwraca jej długość, czyli ile posiada miejsc
    document.getElementById("count-words").innerText = words.length

    // To jest String
    // text = "The quick brown fox jumps over the lazy dog." 
    // Teraz zamieniamy na tablice
    // words = text.split(" ")
    // [0,   1,     2, 3, 4, 5, 6, 7, 8, 9]
    // [The, quick, ]


    // jak wyliczyć ilość spacji w tekście?
    // ustawiamy licznik spacji
    let spaceCounter = 0;

    // tworzymy pętle i ustawiamy warunek text.length
    // żeby nie przekroczyć długości Stringa - inaczej mówiąc
    // pętla wykona się tyle razy, ile jest znaków w Stringu
    for (let i = 0; i < text.length; i++) {

        // każdy znak wsadzamy do zmiennej character
        const character = text.charAt(i);

        // sprawdzamy czy zmienna character zawiera spację
        if (character === ' ') { // zauważ, że tutaj jest spacja pomiędzy apostrofami!

            // jeżeli character to spacja,
            // zwiększamy licznik spacji o 1
            spaceCounter += 1
        }
    }

    // teraz tylko wkładamy licznik spacji do HTMLa
    document.getElementById("count-space").innerText = spaceCounter

    // ----------------------------------------------
    // liczba znaków włącznie ze spacjami i wszystkim
    // ----------------------------------------------

    document.getElementById("count-character").innerText = text.length

    // ------------------------
    // liczba znaków bez spacji
    // ------------------------

    const letterCounter = countLettersWithoutSpace(textTrimmed)

    document.getElementById("count-character-no-spaces").innerText = letterCounter

    // --------------------
    // czas czytania tekstu
    // --------------------

    const characterReadPerMinute = 200

    const minutes = letterCounter / characterReadPerMinute
    console.log(minutes)

    const seconds = minutes * 60
    console.log(seconds)

    document.getElementById("read-time").innerText = seconds

}

function countLettersWithoutSpace(text) {
    let letterCounter = 0

    for (let i = 0; i < text.length; i++) {
        const letter = text.charAt(i);

        if (letter !== ' ') {
            letterCounter += 1
        }
    }

    return letterCounter
}