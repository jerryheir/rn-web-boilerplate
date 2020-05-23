import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RouteComponentProps } from 'react-router-dom';

interface Props extends RouteComponentProps{}

const Main: React.FC<Props> = ({ history }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>HELLO FROM REACT NATIVE</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'pink',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 36,
        color: '#FFF'
    }
})

export default Main;
