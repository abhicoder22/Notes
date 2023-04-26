import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import {Context} from '../Context/BlogContext';

const CreateScreen = ({navigation}) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const {addBlogPosts} = useContext(Context);

  return (
    <View style={{marginHorizontal: 15}}>
      <Text style={styles.title}>Enter Title:</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={text => setTitle(text)}
      />
      <Text style={styles.title}>Enter Content:</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={text => setContent(text)}
      />
      <Button
        style={styles.button}
        title="Save"
        onPress={() => {
          addBlogPosts(title, content, () => {
            navigation.navigate('Index');
          });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    color: 'black',
  },
  input: {
    borderColor: 'black',
    borderWidth: 2,
    marginVertical: 10,
  },
  button: {
    width: 40,
    height: 40,
    marginTop: 10,
  },
});

export default CreateScreen;
