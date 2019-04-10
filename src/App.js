import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import Post from './Post';

export default class App extends Component{
  state={
      lista:[
        {id: 1, titulo: 'Aprendendo React Native', autor: 'Keyla',
        texto:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
        { id: 2, titulo: 'Aprendendo React Native', autor: 'Keyla',
        texto:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
        { id: 3, titulo: 'Aprendendo React Native', autor: 'Keyla',
        texto:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' }
      ]
  }




    render() {
      return (
        <View style={styles.container}>
          <ScrollView>
              {this.state.lista.map(lista =>(
                <Post key={lista.id} 
                  titulo={lista.titulo}
                  autor={lista.autor}
                  texto={lista.texto}/>
                ))}
          </ScrollView>
          
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
});