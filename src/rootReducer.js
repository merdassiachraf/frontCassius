import { combineReducers } from 'redux'

import {agenciesReducer} from "./redux/agency/AgenciesReducer"
import {postsReducer} from "./redux/posts/PostsReducer"
import {loadingReducer} from "./redux/spinner/SpinnerReducer"

export const rootReducer = combineReducers({
    agencies:agenciesReducer,
    posts:postsReducer,
    loading:loadingReducer
}) 
