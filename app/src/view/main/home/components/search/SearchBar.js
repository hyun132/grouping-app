import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';
import SearchView from './SearchView';
import { WINDOW_SIZE } from '../../../../../constant/WindowSize';
import { COLORS } from '../../../../../assets/Colors';

const SearchBar = ({ navigateTo }) => {
  return (
    <TouchableOpacity onPress={() => navigateTo('SearchView')} style={styles.searchBarBlock}>
      <Image
        source={require('../../../../../../../Img/hashtag.png')}
        style={{
          height: 12 * WINDOW_SIZE.HEIGHT_WEIGHT,
          width: 9 * WINDOW_SIZE.HEIGHT_WEIGHT,
          marginRight: 4 * WINDOW_SIZE.HEIGHT_WEIGHT,
        }}
      />
      <View style={styles.buttonBlock}>
        <Text style={{ color: COLORS.FONT_GRAY, fontSize: 14 * WINDOW_SIZE.HEIGHT_WEIGHT }}>
          키워드로 검색해보세요.
        </Text>
      </View>
      <Icon name="search" size={22} color={COLORS.FONT_GRAY} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  searchBarBlock: {
    flexDirection: 'row',
    zIndex: 2,
    elevation: 10,
    transform: [{ translateY: -25 }],
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowColor: '#000',
    borderRadius: 12,
    backgroundColor: 'white',
    alignItems: 'center',
    paddingRight: 16 * WINDOW_SIZE.WIDTH_WEIGHT,
    paddingLeft: 16 * WINDOW_SIZE.WIDTH_WEIGHT,
    width: 300 * WINDOW_SIZE.WIDTH_WEIGHT,
    alignSelf: 'center',
    marginRight: 32 * WINDOW_SIZE.WIDTH_WEIGHT,
  },
  buttonBlock: {
    flex: 1,
    height: 42 * WINDOW_SIZE.HEIGHT_WEIGHT,
    justifyContent: 'center',
  },
});

export default SearchBar;
