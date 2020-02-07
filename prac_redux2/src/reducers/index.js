import {combineReducers} from "redux"

const state=(state=0,action)=>{
  switch(action.type){
    case "INCREMENT":
      return state+1
    case "DECREMENT":
      if (state===0){
        return state
      }
      return state-1
    case "CLEAR_CART":
      return 0;
    default:
      return state
  }
}

export const reduce = combineReducers({state});

