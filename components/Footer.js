import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const Footer = ({ navigation }) => {

  return (
    <View style={styles.footer}>
      <TouchableOpacity
        style={styles.icon}
        onPress={() => navigation.navigate('Home')}
      >
        <Icon name="home" size={45} color="#FF9800" />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.icon}
        onPress={() => navigation.navigate('AddToList')}
      >
        <Icon name="pluscircleo" size={45} color="#FF9800" />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.icon}
        onPress={() => navigation.navigate('BestPrices')}
      >
        <Icon name="wallet" size={45} color="#FF9800" />
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D9D9D9',
  },
  icon: {
    marginHorizontal: 40,
    padding: 10,
  },
});

export default Footer;
