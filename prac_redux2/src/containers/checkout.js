import { clearCart } from "../actions"
import { connect } from "react-redux"
import CheckDisplay from "../components/checkDisplay"



const mapDispatchToProps = dispatch => {
  return {clearCart:()=>dispatch(clearCart())}
} 


const Checkout = connect(null,mapDispatchToProps)(CheckDisplay)

export default Checkout;

