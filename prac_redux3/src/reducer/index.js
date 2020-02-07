import { QUOTE_FAILED, QUOTE_RECEIVED, QUOTE_REQUESTED } from '../actions/index'

export const initialState = {data:[], status:""}

export const quotes=(state = initialState ,action)=>{
  switch(action.type){
    case QUOTE_REQUESTED:
      return Object.assign({},state,{status:"waiting"})
    case QUOTE_RECEIVED:
      return Object.assign({}, state,{data:[...action.payload], status:"received"})
    case QUOTE_FAILED:
      return Object.assign({}, state, {status:"failed", error:action.payload})
    default:
      return state
  }
}

