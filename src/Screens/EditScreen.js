import React, {useContext, useState} from 'react';
import {Context} from '../Context/BlogContext';
import BlogPostForm from '../Components/BlogPostForm';

const EditScreen = ({navigation, route}) => {
  const id = route.params.id;
  const {state, editBlogPosts} = useContext(Context);

  const blogPost = state.find(blogPost => blogPost.id === id);
  return (
    <BlogPostForm
      initialValues={{title: blogPost.title, content: blogPost.content}}
      onSubmit={(title, content) => {
        editBlogPosts(id, title, content, () => navigation.navigate('Index'));
      }}
    />
  );
};

export default EditScreen;
