// import applyMiddleware for logger
// createStore, and combineReducers
import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';

// create feedback reducer to store feedback inputs
const feedback = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_FEELING':
            return {...state, feeling: action.payload}
            break;
        case 'ADD_UNDERSTANDING':
            return {...state, understanding: action.payload}
            break;
        case 'ADD_SUPPORT':
            return {...state, support: action.payload}
            break;
        case 'ADD_COMMENTS':
            return {...state, comments: action.payload}
            break;
        default: return state
            break;
    }
}

// create store
const store = createStore(
    combineReducers({
        feedback
    }),
    applyMiddleware(logger)
)

// export store
// in index.jsx, wrap <App /> in <Provider> and pass store as prop
export default store