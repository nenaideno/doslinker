const ADD_QUERY = 'dosshorter/dos/ADD_QUERY';
const GENERATE_RESULT = 'dosshorter/dos/GENERATE_RESULT';
const ACTION_COMPLETE_SWITCHER = 'dosshorter/dos/ACTION_COMPLETE_SWITCHER';

let initialState = {
    query: '',
    actionComplete: false,
    resultURL: '',
}

const dosReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_QUERY: {
            return {
                ...state,
                query: action.query
            }
        }
        case GENERATE_RESULT: {
            return {
                ...state,
                resultURL: 'https://DosLinker.su/' + action.query,
                actionComplete: true
            }
        }
        case ACTION_COMPLETE_SWITCHER: {
            if (state.actionComplete) {
                return {
                    ...state,
                    actionComplete: false
                }
            }
        }
        default :
            return state
    }
}

export const generateResult = (query) => ({type: GENERATE_RESULT, query})
export const addQuery = (query) => ({type: ADD_QUERY, query})
export const actionCompleteSwitcher = () => ({type: ACTION_COMPLETE_SWITCHER})

export default dosReducer;