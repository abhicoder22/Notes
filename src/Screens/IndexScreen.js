import React, {useContext} from 'react';
import {View, Text, FlatList, Button} from 'react-native';
import {Context} from '../Context/BlogContext';

const IndexScreen = ({navigation}) => {
  const {state, addBlogPosts} = useContext(Context);
  return (
    <View>
      <Text>Index screen</Text>
      <Button title="Add blog" onPress={addBlogPosts} />
      <FlatList
        data={state}
        keyExtractor={BlogPost => BlogPost.title}
        renderItem={({item}) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
};

export default IndexScreen;
