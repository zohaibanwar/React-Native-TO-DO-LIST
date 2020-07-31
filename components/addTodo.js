import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput , Button } from 'react-native';

export default function AddTodo({ submitHandler }) {
    const[text , setText] = useState('');


    const changeHandler = (val) => {
        setText(val);
    }
    return(
        <View>
            <TextInput
                style={styles.input}
                placeholder='new item.. '
                onChangeText= {changeHandler} />
            <View style={styles.button}>
                <Button onPress={() => submitHandler(text)} title='Add to list' color='red'></Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        color: 'white',
        marginBottom: 10,
        paddingHorizontal: 139,
        paddingVertical: 26,
        borderBottomWidth:1,
        borderBottomColor: 'white',
    },

    button: {
        margin: 40,
    }
})