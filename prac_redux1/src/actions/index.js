
export const addPost = (author, text, id, likes) =>{
  return {type:"ADD_POST",author:author, text:text, id:id, likes:likes}
}

export const likePost = (id) =>{
  return {type:"LIKE_POST",id:id}
}
