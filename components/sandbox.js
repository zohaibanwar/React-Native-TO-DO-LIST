import React from  'react';
import { StyleSheet , Text , View} from 'react-native';

export default function Sandbox() {
    return(
        <View style={styles.container}>
            <Text style={styles.boxOne}>One</Text>
            <Text style={styles.boxTwo}>Two</Text>
            <Text style={styles.boxThree}>Three</Text>
            <Text style={styles.boxFour}>Four</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        paddingTop:37,
        flexDirection: "row",
        backgroundColor: '#C1D1E1',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
    },
    boxOne: {
        color: 'white',
        textAlign: 'center',
        borderRadius: 25,
        flex: 1,
        backgroundColor:'#0082FC',
        padding: 40,
    },
    boxTwo: {
        color: 'white',
        textAlign: 'center',
        borderRadius: 25,
        flex: 1,
        backgroundColor:'#005EB6',
        padding: 30,
    },
    boxThree: {
        color: 'white',
        textAlign: 'center',
        borderRadius: 25,
        flex: 1,
        backgroundColor:'#003D76',
        padding: 20,
    },
    boxFour: {
        color: 'white',
        textAlign: 'center',
        borderRadius: 25,
        flex: 1,
        backgroundColor:'#486f94',
        padding: 10,
    },



})