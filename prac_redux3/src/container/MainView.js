import { connect } from "react-redux"
import View from "../components/view"



const mapStateFromProps= state =>{
  return{status:state.status, data:state.data}
}


export default connect(
  mapStateFromProps
)(View);