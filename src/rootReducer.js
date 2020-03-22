import { combineReducers } from 'redux'

import {agenciesReducer} from "./redux/agency/AgenciesReducer"
import {postsReducer} from "./redux/posts/PostsReducer"

export const rootReducer = combineReducers({
    agencies:agenciesReducer,
    posts:postsReducer
}) 
