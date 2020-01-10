import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Input } from 'react-native-elements';

import { ExpoConfigView } from '@expo/samples';

import Colors from '../constants/Colors';
import Texte from '../constants/Text';

export default class DoubleurScreen extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      series : [],
      personnages : [],
      serieSelected : "",
      personnageSelected : ""
    }
  }

  render(){
    return (
      <View style={styles.container}>
        <Text style={Texte.explication}> Chercher un doubleur pour voir tous ces films, séries et personnages</Text>
      </View>
    );
  }
}

DoubleurScreen.navigationOptions = {
  title: 'Doubleurs',
  headerStyle: { backgroundColor: Colors.tabs},
  headerTitleStyle: { color: 'white', fontSize : 20, fontWeight : "bold" },
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
