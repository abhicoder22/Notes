import React, {useContext} from 'react';
import {Context} from '../Context/BlogContext';
import BlogPostForm from '../Components/BlogPostForm';

const CreateScreen = ({navigation}) => {
  const {addBlogPosts} = useContext(Context);

  return (
    <BlogPostForm
      onSubmit={(title, content) => {
        addBlogPosts(title, content, () => navigation.navigate('Index'));
      }}
    />
  );
};

export default CreateScreen;
