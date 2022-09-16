const defaultState = {
    reading: localStorage.getItem('reading') || 'ジ',
    type: localStorage.getItem('readingType') || 'on',
};

const CHANGE_READING = 'CHANGE_READING'

export const readingReducer = (state = defaultState, action) => {
    switch (action.type) {
        case CHANGE_READING:
            return {...state, type: action.payload.type, reading: action.payload.reading}
        default:
            return state
    }
}

export const changeReadingAction = (newReading) => ({type: CHANGE_READING, payload: newReading})