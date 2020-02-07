import {ADD_TODO, TOOGLE_TODO} from '../action/actions';

function todos(state = [], action){
  switch(action.type){
    case ADD_TODO:
      return [
        ...state,
        {
          text:action.text,
          completed:false
        }
      ]
    case TOOGLE_TODO:
      return state.map((todo,index)=>{
        if (index===action.index){
          return Object.assign({},todo,{completed:!todo.completed})
        }
        return todo
      })
    default:
      return state;
  }
}

export default todos; 