import {combineReducers, createStore} from "redux";
import {kanjiCharReducer} from "./kanjiCharReducer";
import {readingReducer} from "./readingReducer";

const reducer = combineReducers({
    kanji: kanjiCharReducer,
    reading: readingReducer,
})

export const store = createStore(reducer);