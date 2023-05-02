import React, {useContext} from 'react';
import {
  View,
  Text,
  FlatList,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Context} from '../Context/BlogContext';
import deleteIcon from '../Assets/delete.png';

const IndexScreen = ({navigation}) => {
  const {state, addBlogPosts, deleteBlogPost} = useContext(Context);
  return (
    <View>
      {/* <Button title="Add blog" onPress={addBlogPosts} /> */}
      <FlatList
        data={state}
        keyExtractor={BlogPost => BlogPost.title}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('Show', {id: item.id})}>
              <View style={styles.blogStyle}>
                <Text style={styles.title}>{item.title}</Text>
                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                  <Image style={styles.icon} source={deleteIcon} />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

// IndexScreen.navigationOptions = ({navigation}) => {
//   return {
//     headerRight: (
//       <TouchableOpacity onPress={() => navigation.navigate('Create')}>
//         <Image
//           style={{height: 30, width: 30}}
//           source={require('../Assets/plus.png')}
//         />
//       </TouchableOpacity>
//     ),
//   };
// };

const styles = StyleSheet.create({
  blogStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: 'gray',
  },
  icon: {
    width: 40,
    height: 40,
  },
  title: {
    fontSize: 20,
  },
});

export default IndexScreen;
