import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Post = (prop) =>(
            <View style={styles.container}>
                <View style={styles.head}>
                    
                    <Text style={styles.titulo}> {prop.titulo} </Text>

                    <Text style={styles.autor}>{prop.autor} </Text>
                </View>

                    <Text style={styles.texto}> {prop.texto}</Text>
            </View>
        )

export default Post

const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        margin:15,
      },
    head:{
        margin:10,
    },
    titulo:{
        fontSize:20,
        fontWeight:'bold',
        color:'black',
    },
    autor:{
        fontSize:20,
        fontWeight:'bold',
        color:'gray',
    },
    texto:{
        fontSize:18,
        fontWeight: 'bold',
        color:'black',
    }


})