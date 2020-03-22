import {createStore} from "redux"

import {agenciesReducer} from "./redux/agency/AgenciesReducer"


const store = createStore(agenciesReducer)

export default store