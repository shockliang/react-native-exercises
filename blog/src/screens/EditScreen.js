import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {Context} from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const EditScreen = ({navigation}) => {
  const id = navigation.getParam('id');
  const {state} = useContext(Context);
  const blogPost = state.find(blogPost => blogPost.id === id);

  return (
    <BlogPostForm
      initialValues={{title: blogPost.title, content: blogPost.content}}
    />);
};

const styles = StyleSheet.create({});

export default EditScreen;