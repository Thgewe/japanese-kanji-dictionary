import {defaultKanji} from "../utils/constants";

const defaultState = localStorage.getItem('kanji') || defaultKanji;

const CHANGE_KANJI = 'CHANGE_KANJI'

export const kanjiCharReducer = (state = defaultState, action) => {
    switch (action.type) {
        case CHANGE_KANJI:
            return action.payload
        default:
            return state
    }
}

export const changeKanjiAction = (newKanji) => ({type: CHANGE_KANJI, payload: newKanji})