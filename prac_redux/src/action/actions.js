
//Define some constants
export const ADD_TODO = 'ADD_TODO';
export const TOOGLE_TODO = 'TOOGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const VisibilityFilters = {
  SHOW_ALL:'SHOW_ALL',
  SHOW_ACTIVE:'SHOW_ACTIVE',
  SHOW_COMPLETED:'SHOW_COMPLETED'
}

//define some action creators
export function addTodo(text){
  return {type:ADD_TODO, text} 
}

export function toogleTodo(index){
  return {type:TOOGLE_TODO, index}
}

export function setVisibilityFilter(filter){
  return {type:SET_VISIBILITY_FILTER, filter}
}