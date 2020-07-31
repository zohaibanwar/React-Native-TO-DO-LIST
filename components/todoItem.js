import React from 'react';
import { StyleSheet, Text , TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function TodoItem({ item , pressHandler }) {
    return(
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <View style={styles.item}>
                <MaterialIcons name='delete' color='white'  size={18}/>

                <Text style={ styles.itemText}>{item.text}</Text>
            </View>
            
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    item: {
        color: 'white',
        flexDirection: 'row',
        borderStyle: 'dashed',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'red',
        marginTop: 16,
        padding: 16, 
    },

    itemText: {
        marginLeft: 10,
        color: 'white',   
    },
})

