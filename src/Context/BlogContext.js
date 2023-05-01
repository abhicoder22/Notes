// import React, {useState} from 'react';

// const BlogContext = React.createContext();
// export const BlogProvider = ({children}) => {
//   const [BlogPosts, setBlogPosts] = useState([]);

//   const addBlogPosts = () => {
//     setBlogPosts([...BlogPosts, {title: `Blog post #${BlogPosts.length + 1}`}]);
//   };
//   return (
//     <BlogContext.Provider value={{data: BlogPosts, addBlogPosts}}>
//       {children}
//     </BlogContext.Provider>
//   );
// };

// export default BlogContext;

import React, {useReducer} from 'react';
import createDataContext from './createDataContext';

const BlogReducer = (state, action) => {
  switch (action.type) {
    case 'edit_blogpost':
      return state.map(blogPost => {
        return blogPost.id === action.payload.id ? action.payload : blogPost;
      });
    case 'delete_blogpost':
      return state.filter(BlogPost => BlogPost.id !== action.payload);
    case 'add_blogpost':
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          // title: `Blog Post #${state.length + 1}`,
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
    default:
      return state;
  }
};

const addBlogPosts = dispatch => {
  return (title, content, callback) => {
    dispatch({
      type: 'add_blogpost',
      payload: {title, content},
    });
    callback();
  };
};

const editBlogPsts = dispatch => {
  return (id, title, content) => {
    dispatch({
      type: 'edit_blogpost',
      payload: {id, title, content},
    });
  };
};

const deleteBlogPost = dispatch => {
  return id => {
    dispatch({
      type: 'delete_blogpost',
      payload: id,
    });
  };
};

export const {Context, Provider} = createDataContext(
  BlogReducer,
  {addBlogPosts, deleteBlogPost, editBlogPsts},
  [],
);
