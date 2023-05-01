import React, {useState} from 'react';
import {View, Text, Button, TextInput, StyleSheet} from 'react-native';

const BlogPostForm = ({onSubmit, initialValues}) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);

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
        onPress={() => onSubmit(title, content)}
      />
    </View>
  );
};

BlogPostForm.defaultProps = {
  initialValues: {
    title: '',
    content: '',
  },
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
    fontSize: 20,
  },
  button: {
    width: 40,
    height: 40,
    marginTop: 10,
  },
});

export default BlogPostForm;
