import React, {useState} from 'react';
import Navigator from './navigations';
import {Appbar, Icon, MD3Colors, Provider, Searchbar} from 'react-native-paper';
import Lens from './src/svg/Lens';
import {Image, TouchableOpacity, View} from 'react-native';

export default function App() {
  const [openSearchBar, setopenSearchBar] = useState(false);

  return (
    <Provider>
      <Appbar.Header
        {...(openSearchBar
          ? {
              style: {
                display: 'flex',
                flexDirection: 'column',
                height: 100,
                backgroundColor: 'tomato',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 5,
              },
            }
          : {
              style: {
                backgroundColor: 'tomato',
              },
            })}>
        <Appbar.Content title="Awesome App" />
        {!openSearchBar && (
          <Appbar.Action
            icon={() => (
              <Image
                style={{height: 30, width: 30}}
                source={require('./src/assets/search.png')}
              />
            )}
            onPress={() => {
              setopenSearchBar(true);
            }}
          />
        )}
        {openSearchBar && (
          <View style={{position: 'relative'}}>
            <Searchbar
              placeholder="Search"
              // onChangeText={onChangeSearch}
              value=""
              style={{width: '100%', backgroundColor: 'white'}}
              icon={() => (
                <Image
                  style={{height: 30, width: 30}}
                  source={require('./src/assets/searchGray.png')}
                />
              )}
            />
            <TouchableOpacity
              style={{position: 'absolute', right: 10, top: 13}}
              onPress={() => {
                setopenSearchBar(false);
              }}>
              <Image
                style={{
                  height: 30,
                  width: 30,
                }}
                source={require('./src/assets/clear.png')}
              />
            </TouchableOpacity>
          </View>
        )}
      </Appbar.Header>

      <Navigator />
    </Provider>
  );
}
