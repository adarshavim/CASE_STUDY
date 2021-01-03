import {createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {tabReducer} from './Tab/tabReducer'
import {contentReducer} from './Tab/contentReducer'

const store=createStore(
        combineReducers({
            tabs:tabReducer,
            contents:contentReducer
        }),
        applyMiddleware(thunk,logger)
    )
// const store = createStore(tabReducer)


export default store