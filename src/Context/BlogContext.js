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

const BlogContext = React.createContext();

const BlogReducer = (state, action) => {
  switch (action.type) {
    case 'add_blogpost':
      return [...state, {title: `Blog post #${state.length + 1}`}];
    default:
      return state;
  }
};

export const BlogProvider = ({children}) => {
  const [BlogPosts, dispatch] = useReducer(BlogReducer, []);

  const addBlogPosts = () => {
    dispatch({type: 'add_blogpost'});
  };
  return (
    <BlogContext.Provider value={{data: BlogPosts, addBlogPosts}}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
