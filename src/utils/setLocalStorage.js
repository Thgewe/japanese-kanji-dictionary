export const setReadingInLocalStorage = (object) => {
    localStorage.setItem('reading', object.reading)
    localStorage.setItem('readingType', object.type)
}
export const setKanjiInLocalStorage = (kanji) => {
    localStorage.setItem('kanji', kanji)
}