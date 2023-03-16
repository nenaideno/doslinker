const ADD_QUERY = 'dosshorter/short/ADD_QUERY';
const GENERATE_RESULT = 'dosshorter/short/GENERATE_RESULT';
const ACTION_COMPLETE_SWITCHER = 'dosshorter/short/ACTION_COMPLETE_SWITCHER';

let initialState: {
    query: string,
    actionComplete: boolean,
    resultURL: string
} = {
    query: '',
    actionComplete: false,
    resultURL: '',
}

type ActionType = {
    type: string,
    query?: string 
}

const dosReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case ADD_QUERY: {
            debugger;
            return {
                ...state,
                query: action.query
            }
        }
            break;
        case GENERATE_RESULT: {
            return {
                ...state,
                resultURL: 'https://DosLinker.su/' + action.query,
                actionComplete: true
            }
        }
            break;
        case "ACTION_COMPLETE_SWITCHER": {
            if (state.actionComplete) {
                return {
                    ...state,
                    actionComplete: false
                }
            }
        }
            break;
        default:
            return state
    }
}

export const generateResult = (query: string) => ({ type: GENERATE_RESULT, query })
export const addQuery = (query: string) => ({ type: ADD_QUERY, query })
export const actionCompleteSwitcher = () => ({ type: ACTION_COMPLETE_SWITCHER })

export default dosReducer;