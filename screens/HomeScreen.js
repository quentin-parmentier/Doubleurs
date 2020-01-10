import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { StyleSheet, View, Text,Keyboard, TouchableWithoutFeedback} from 'react-native';
import { Input,Button  } from 'react-native-elements';
import AutoComplete from '../components/AutoComplete';

import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Colors';
import Texte from '../constants/Text';

export default class HomeScreen extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      oeuvres : ["Caca","Pipi","PIPE","CROttE","PiSsE","Fion","CaraPipe","CaraPute","Phalus","Chienne"],
      personnages : [],
      serieSelected : "",
      personnageSelected : ""
    }
    
    this.updateSerieSelected = this.updateSerieSelected.bind(this)
    this.updatePersonnageSelected = this.updatePersonnageSelected.bind(this)
  }

  updateSerieSelected(serie) {
    this.setState({serieSelected: serie})
    this.searchPerso(serie)
  }

  updatePersonnageSelected(personnage) {
    this.setState({personnageSelected: personnage})
  }

  render(){
    let state = this.state;
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        
        <Text style={Texte.explication}> Chercher votre doubleur grâce à sa série, son film ou/et son personnage</Text>
        <AutoComplete 
          liste = {state.oeuvres}
          placeholder = "Entrer un film ou une série"
          label= "Film/Série"
          name= {Platform.OS === 'ios' ? `ios-film` : 'md-film'}
          update = {this.updateSerieSelected}
          height = "53%"
          errorMessage = "Choisissez un film ou une série de la liste"
        />

        { state.serieSelected != "" ?
          <>
            <AutoComplete 
              liste = {state.personnages}
              placeholder = "Entrer un personnage"
              label= "Personnage"
              name= {Platform.OS === 'ios' ? 'ios-people' : 'md-people'}
              update = {this.updatePersonnageSelected}
              height = "40%"
              errorMessage = "Choisissez un personnage de la liste"
            />

            <Button onPress={() => this.search()} buttonStyle={styles.button} title="Rechercher" /> 
          </>
          : null
        }
      </View>
      </TouchableWithoutFeedback>
    );
  }


  //Au chargement recherche toutes les oeuvres dispos
  searchOeuvre(){
    //requete ajax pour récupérer toutes les séries

  }

  //Au chargement recherche tous les personnages dispos
  //Au changement de valeur de Oeuvre, recherche tous les personnages
  searchPerso(serie){
    //requete ajax avec la serie actuelle

    //success
    personnagesAjax = ["Donald","Ducks","Fifi","BrinDacier","Cuck","Man","Super Man","CoinCoin Man","Chibrator 2000","Pollo del fuego","Pomme de terre"];
    this.setState({personnages : personnagesAjax})
  }

  search(){
    
  }
}

HomeScreen.navigationOptions = {
  title: "Home",
  headerStyle: { backgroundColor: Colors.tabs},
  headerTitleStyle: { color: 'white', fontSize : 20, fontWeight : "bold" },

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    height : "100%"
  },
  button:{
    marginLeft : "5%",
    marginRight : "5%",
    marginTop : 50
  }
});
