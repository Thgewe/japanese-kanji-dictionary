import axios from "axios";
import {API_BASE_URL, defaultKanji} from "../utils/constants";

class KanjiService {
    static _apiBase = API_BASE_URL;
    static _defaultKanji = defaultKanji;

    static async getKanji(kanji = this._defaultKanji) {
        const res = await axios.get(`${this._apiBase}kanji/${kanji}`)
        return res.data
    }

    static async getKanjiGrade(grade = 1) {
        const res = await axios.get(`${this._apiBase}kanji/grade-${grade}`)
        return res.data
    }

    static async getKanjiByReading(reading) {
        const res = await axios.get(`${this._apiBase}reading/${reading}`)
        return res.data
    }

    static async getWordsWithKanji(kanji = this._defaultKanji) {
        const res = await axios.get(`${this._apiBase}words/${kanji}`)
        return res.data
    }
}

export default KanjiService