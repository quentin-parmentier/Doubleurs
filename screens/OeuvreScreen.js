import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

import Colors from '../constants/Colors';
import Texte from '../constants/Text';

export default class OeuvreScreen extends React.Component{

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
        <Text style={Texte.explication}> Chercher une série ou un film pour retrouver tous ses personnages</Text>
      </View>
    );
  }
}

OeuvreScreen.navigationOptions = {
  title: 'Film / Série',
  headerStyle: { backgroundColor: Colors.tabs},
  headerTitleStyle: { color: 'white', fontSize : 20, fontWeight : "bold" },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
