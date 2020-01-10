import React from 'react';
import { StyleSheet, Keyboard, ScrollView} from 'react-native';
import { Input,ListItem } from 'react-native-elements';

import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Colors';
import Texte from '../constants/Text';
import { View } from 'react-native';

export default class AutoComplete extends React.Component {
  
    constructor(props){
        super(props);
        this.state = {
        liste : this.props.liste,
        possibleValues : [],
        actualValue : "",
        errorMessage : ""
        }
    }

    checkText(text,liste){
        
        var lowerListe = liste.map(value => value.toLowerCase())

        if(lowerListe.indexOf(text.toLowerCase()) == -1){
            this.setState({errorMessage : this.props.errorMessage});
            this.setState({actualValue : ""});
            this.props.update("");
        }else{
            this.setState({actualValue : text})
            this.setState({errorMessage : ""})
            this.props.update(text);
        }
        this.setState({possibleValues : [] });
        Keyboard.dismiss()
    }

    findInListe(text,liste){
        this.setState({actualValue : text});
        let possibleValuesList = [];

        if(text == ""){
            possibleValuesList = liste;
        }else{
            liste.forEach(element => {
                if(element.toLowerCase().includes(text.toLowerCase())) possibleValuesList.push(element)
            });
        }
        this.setState({possibleValues : possibleValuesList });
    }

    showPossibleValues(){
        
        return(
            <View><ScrollView style={{height: this.props.height}} keyboardShouldPersistTaps={'always'}> 

                {this.state.possibleValues.map((l, i) => (
                    <ListItem
                        key={i}
                        title={l}
                        bottomDivider
                        onPress={() => this.checkText(l,this.state.possibleValues)}
                    />
                ))}
            
            </ScrollView></View>
        )
    }

    render(){
        let state = this.state;
        
        return (

            <View style={styles.container}> 
                <Input
                    placeholder={this.props.placeholder}
                    label={this.props.label}
                    value={state.actualValue}
                    onEndEditing={() =>  this.checkText(state.actualValue,state.liste) }
                    onChangeText={text => this.findInListe(text,state.liste)}
                    errorMessage={state.errorMessage}
                    leftIcon={
                        <Ionicons
                        name={this.props.name}
                        size={26}
                        style={{ marginBottom: -3, marginRight : 10 }}
                        color={Colors.logoInput}
                        />
                    }
                />
                
                {state.possibleValues.length > 0 ? this.showPossibleValues() : null}

            </View>
            
        );
    }

}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
});
