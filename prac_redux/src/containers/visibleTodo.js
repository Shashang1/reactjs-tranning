import {connect} from 'react-redux';
import {toogleTodo, VisibilityFilters} from '../action/actions';
import TodoList from '../components/todoList';

const getVisibleTodos = (todos, filter) => {
  switch(filter){
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t=>t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t=>!t.completed)
    default:
      return todos
  }
}

const mapStateToProps = state =>{
  return {
    todos:getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      dispatch(toogleTodo(id))
    }
  }
}

const VisibleTodo = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodo;