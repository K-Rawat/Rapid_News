import {View, Text, Image} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';

const NewsDetails = () => {
  const route = useRoute();

  return (
    <View style={{flex: 1, backgroundColor: '#000'}}>
      <Image
        source={{uri: route.params.data.urlToImage}}
        style={{width: '95%', height: 200, alignSelf: 'center', marginTop: 10}}
      />
      <Text
        style={{
          fontWeight: '800',
          fontSize: 20,
          color: '#fff',
          marginTop: 20,
          alignSelf: 'center',
        //   textAlign: 'justify',
          width: '94%',
        }}>
        {route.params.data.title}
      </Text>
      <Text
        style={{
          fontWeight: '500',
          fontSize: 16,
          color: '#fff',
          marginTop: 20,
          alignSelf: 'center',
          textAlign: 'justify',
          width: '94%',
        }}>
        {route.params.data.description}
      </Text>
      <Text
        style={{
          fontWeight: '600',
          fontSize: 10,
          color: '#fff',
          marginTop: 10,
          alignSelf: 'center',
        //   textAlign: 'justify',
          width: '94%',
        }}>
        {route.params.data.publishedAt}
      </Text>
      <Text
        style={{
          fontWeight: '400',
          fontSize: 16,
          color: '#fff',
          marginTop: 20,
          alignSelf: 'center',
          textAlign: 'justify',
          width: '94%',
        }}>
        {route.params.data.content}
      </Text>
    </View>
  );
};

export default NewsDetails;
