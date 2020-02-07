var id =1;

const posts = (state = [], action)=>{
  switch(action.type){
    case "ADD_POST":
      return [
        ...state,
        {
          author:action.author,
          text:action.text,
          id:id++,
          likes:0
        }
      ]
    case "LIKE_POST":
      return state.map(post=>(
        post.id===action.id?{...post, likes:post.likes+1}:post
      ))
    default:
      return state
  }
}

export default posts;