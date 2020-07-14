import React, {useContext} from 'react';
import {View, Text, StyleSheet, FlatList, Button} from 'react-native';
import {Context} from "../context/BlogContext";

const IndexScreen = () => {
  const {state, addBlogPost} = useContext(Context);

  return (
    <View>
      <Button title={"Add Post"} onPress={addBlogPost} />
      <Text>Index screen</Text>
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({item})=>{
          return <Text>{item.title}</Text>
        }}
      />
    </View>
  )
};

const styles = StyleSheet.create({});

export default IndexScreen;