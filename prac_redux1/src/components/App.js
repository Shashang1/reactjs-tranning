import React from 'react';
import VisiblePosts from '../containers/visiblePosts'
import AddNewPost from '../containers/addNewPost';

export const App = ()=>(
  <div className="container">
    <AddNewPost/>
    <VisiblePosts />
    </div>
)