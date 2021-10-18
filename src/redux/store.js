import { createStore, applyMiddleware } from "redux"
import logger from "redux-logger"
import reduxThunk from "redux-thunk"
import rootReducer from "./root-reducer"


const middewares = [reduxThunk]

if( process.env.NODE_ENV === "development") {
  middewares.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middewares))

export default store
