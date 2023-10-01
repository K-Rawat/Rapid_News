import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
// import {FlatList} from 'react-native-gesture-handler';/
import {useNavigation} from '@react-navigation/native';

const Main = () => {
  const navigation = useNavigation();
  const [news, setNews] = useState([]);

  useEffect(() => {
    getNews();
  }, []);

  const getNews = () => {
    fetch('https://saurav.tech/NewsAPI/everything/bbc-news.json')
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
        Categories
      </Text>
      <View style={{marginTop: 20, height: 170}}>
        <FlatList
          data={[
            {title: 'technology', image: require('../Assets/tech.webp')},
            {title: 'health', image: require('../Assets/health.jpeg')},
            // {title: 'stocks', image: require('../Assets/stock.jpeg')},
            // {title: 'start ups', image: require('../Assets/startup.jpeg')},
            {title: 'business', image: require('../Assets/business.jpeg')},
          ]}
          horizontal
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                style={{
                  width: 200,
                  height: 150,
                  borderRadius: 10,
                  borderWidth: 1,
                  borderColor: '#fff',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginLeft: 15,
                }}
                onPress={() => {
                  navigation.navigate('CategoryNews', {
                    category: item.title,
                  });
                }}>
                <View style={{width: '100%', height: '100%', borderRadius: 20}}>
                  <Image
                    source={item.image}
                    style={{width: '100%', height: '100%', borderRadius: 20}}
                  />
                  <View
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: 20,
                      position: 'absolute',
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: 'rgba(0,0,0,.5)',
                    }}>
                    <Text
                      style={{color: '#fff', fontSize: 20, fontWeight: '700'}}>
                      {item.title}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
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
                      width: '45%',
                      fontSize: 16,
                      fontWeight: '700',
                    }}>
                    {item.title}
                  </Text>
                  <Text
                    style={{
                      color: '#fff',
                      width: '70%',
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

export default Main;
