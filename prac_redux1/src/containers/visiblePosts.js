import { connect } from 'react-redux';
import DisplayPosts from '../components/displayPosts';
import { likePost } from '../actions';


const mapStateToProps = state =>(
  {posts:state.posts}
)
const mapDispatchtoProps =(dispatch)=>(
  {like: id =>dispatch(likePost(id))}
)

const VisiblePosts = connect(mapStateToProps, mapDispatchtoProps)(DisplayPosts);
export default VisiblePosts;
