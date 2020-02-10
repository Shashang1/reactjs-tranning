import { getQuoteAction } from "../actions"
import { connect } from "react-redux"
import Button from "../components/Button"




const mapDispatchToProps = dispatch => {
  return {handle:()=>dispatch(getQuoteAction())}
}

export default connect(
  null,
  mapDispatchToProps
)(Button)