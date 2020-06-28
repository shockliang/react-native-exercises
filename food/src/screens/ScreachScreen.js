import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from "../components/SearchBar";
import { YELP_API_KEY } from 'react-native-dotenv'

const SearchScreen = () => {
  const [term, setTerm] = useState('');

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => console.log('term was submitted')}
      />
      <Text>{term}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;