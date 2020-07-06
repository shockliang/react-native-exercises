import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import yelp from "../api/yelp";

const ResultsShowScreen = ({navigation}) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam('id');
  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(async ()=> {
    await getResult(id);
  }, []);

  return (
    <View>
      <Text>{id}</Text>
    </View>
  )
};

const styles = StyleSheet.create({});

export default ResultsShowScreen;