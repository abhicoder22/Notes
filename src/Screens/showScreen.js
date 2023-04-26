import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Context} from '../Context/BlogContext';

const ShowScreen = ({navigation, route}) => {
  console.log(route.params.id);

  const {state} = useContext(Context);

  const blogPost = state.find(blogPost => blogPost.id === route.params.id);
  return (
    <View>
      <Text>{blogPost.title}</Text>
    </View>
  );
};

export default ShowScreen;
