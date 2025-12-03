// это выполнится только один раз, при загрузке страницы
document.getElementById("count-words").innerText = 0
document.getElementById("count-space").innerText = 0
document.getElementById("count-character").innerText = 0
document.getElementById("count-character-no-spaces").innerText = 0


// функция не выполнится, пока ее не вызовем.
// Мы можем использовать ее сколько угодно раз
function analyze() {
    console.log("анализирую...")

    // получить значение (value) из элемента с id "user-input"
    const text = document.getElementById("user-input").value

    const textTrimmed = text.trim()

    // Разделить текст на слова, обрабатывая множественные пробелы
    const words = textTrimmed.split(/\s+/).filter(word => word.length > 0)

    document.getElementById("count-words").innerText = words.length

    // Подсчитать пробелы
    let spaceCounter = 0;
    for (let i = 0; i < text.length; i++) {
        const character = text.charAt(i);
        if (character === ' ') {
            spaceCounter += 1
        }
    }
    document.getElementById("count-space").innerText = spaceCounter

    // Количество символов с пробелами
    document.getElementById("count-character").innerText = text.length

    // Количество символов без пробелов
    const letterCounter = countLettersWithoutSpace(textTrimmed)
    document.getElementById("count-character-no-spaces").innerText = letterCounter

    // Количество предложений
    const sentences = textTrimmed.split(/[.!?]+/).filter(s => s.trim().length > 0)
    document.getElementById("count-sentences").innerText = sentences.length

    // Самое длинное слово
    let longest = '';
    for (let word of words) {
        if (word.length > longest.length) longest = word;
    }
    document.getElementById("longest-word").innerText = longest

    // Средняя длина слова
    let totalLength = 0;
    for (let word of words) totalLength += word.length;
    const avg = words.length > 0 ? (totalLength / words.length).toFixed(2) : 0;
    document.getElementById("avg-word-length").innerText = avg

    // Процент заглавных букв
    let upperCount = 0;
    for (let char of textTrimmed) {
        if (char >= 'A' && char <= 'Z') upperCount++;
    }
    const percent = textTrimmed.length > 0 ? ((upperCount / textTrimmed.length) * 100).toFixed(2) : 0;
    document.getElementById("uppercase-percent").innerText = percent

    // Время чтения (слов в минуту)
    const readTime = words.length > 0 ? ((words.length / 200) * 60).toFixed(0) : 0;
    document.getElementById("read-time").innerText = readTime

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
