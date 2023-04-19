import React, {useContext} from 'react';
import {View, Text, FlatList, Button} from 'react-native';
import BlogContext from '../Context/BlogContext';

const IndexScreen = ({navigation}) => {
  const {data, addBlogPosts} = useContext(BlogContext);
  return (
    <View>
      <Text>Index screen</Text>
      <Button title="Add blog" onPress={addBlogPosts} />
      <FlatList
        data={data}
        keyExtractor={BlogPost => BlogPost.title}
        renderItem={({item}) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
};

export default IndexScreen;
