import {connect} from 'react-redux';
import {setVisibilityFilter} from '../action/actions';
import Link from '../components/link'

const mapStateFromProps = (state, ownProps) =>{
  return {active:state.visibilityFilter===ownProps.filter,children:ownProps.children}
}

const mapDispatchToProps = (dispatch, ownProps)=>{
  return {onClick: ()=> dispatch(setVisibilityFilter(ownProps.filter))}
}

const FilterLink = connect(
  mapStateFromProps,
  mapDispatchToProps
)(Link)

export default FilterLink;