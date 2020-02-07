import { increment,decrement } from "../actions"
import { connect } from "react-redux"
import Display from "../components/display"




const mapStateToProps = (state) =>{
  return {state:state.state}
}

const mapDispatchToProps = dispatch =>{
  return {increment:()=>dispatch(increment()), decrement:()=>dispatch(decrement())}
}

const DisplayBack  = connect(mapStateToProps, mapDispatchToProps)(Display)

export default DisplayBack;