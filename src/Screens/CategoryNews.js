import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {useNavigation, useRoute} from '@react-navigation/native';

const CategoryNews = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [news, setNews] = useState([]);

  useEffect(() => {
    getNews();
  }, []);

  const getNews = () => {
    fetch(
      'https://saurav.tech/NewsAPI/top-headlines/category/' +
        route.params.category +
        '/in.json',
    )
      .then(res => res.json())
      .then(output => {
        console.log(output);
        setNews(output.articles);
      });
  };

  return (
    <View style={{flex: 1, backgroundColor: '#000'}}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: '800',
          color: '#fff',
          marginLeft: 20,
          marginTop: 20,
        }}>
        Headlines
      </Text>
      <View>
        <FlatList
          data={news}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                style={{
                  borderColor: '#fff',
                  borderWidth: 1,
                  width: '90%',
                  height: 100,
                  alignSelf: 'center',
                  flexDirection: 'row',
                  marginTop: 20,
                  borderRadius: 10,
                  alignItems: 'center',
                }}
                onPress={() => {
                  navigation.navigate('NewsDetails', {
                    data: item,
                  });
                }}>
                <Image
                  source={{uri: item.urlToImage}}
                  style={{
                    width: 100,
                    height: 90,
                    borderTopLeftRadius: 10,
                    borderBottomLeftRadius: 10,
                  }}
                />
                <View style={{padding: 10}}>
                  <Text
                    style={{
                      color: '#fff',
                      width: '80%',
                      fontSize: 16,
                      fontWeight: '700',
                    }}>
                    {item.title ? item.title.substring(0, 30) + '....' : '....'}
                  </Text>
                  <Text
                    style={{
                      color: '#fff',
                      width: '80%',
                      fontSize: 12,
                      // fontWeight: '700',
                      marginTop: 10,
                    }}>
                    {item.description
                      ? item.description.substring(0, 30) + '....'
                      : '....'}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

export default CategoryNews;
