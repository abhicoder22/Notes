import React, {useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {Context} from '../Context/BlogContext';
import editIcon from '../Assets/pencil.png';

const ShowScreen = ({navigation, route}) => {
  console.log(route.params.id);

  const {state} = useContext(Context);

  const blogPost = state.find(blogPost => blogPost.id === route.params.id);
  return (
    <SafeAreaView
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        marginVertical: 10,
      }}>
      <View>
        <Text>{blogPost.title}</Text>
        <Text>{blogPost.content}</Text>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate('Edit', {id: route.params.id})}>
        <View>
          <Image style={styles.icon} source={editIcon} />
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

// ShowScreen.navigationOptions = ({navigation}) => {
//   return {
//     headerRight: (
//       <TouchableOpacity
//         onPress={() => navigation.navigate('Edit', {id: route.params.id})}>
//         <Image
//           style={{height: 30, width: 30}}
//           source={require('../Assets/pencil.png')}
//         />
//       </TouchableOpacity>
//     ),
//   };
// };

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
  },
});

export default ShowScreen;
