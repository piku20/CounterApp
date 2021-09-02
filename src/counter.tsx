import React, { FC, useEffect, useState, } from "react";
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import {decrease, increase} from './actions';

import { counterReducer } from "./reducer";
import { useDispatch } from 'react-redux';

interface Props{}

const Counter:FC<Props> = ()=>{
    
    //const [count, setCount] = useState(0);

    const dispatch = useDispatch();

    return(
        <View style={styles.container}>
            <View style={styles.counterContainer}>
                <TouchableOpacity 
                    style={[styles.button, styles.minus]}
                    //onPress = {()=>setCount(count - 1)}
                    onPress = {()=>dispatch(increase)}
                >
                    <Text style={styles.text}>-</Text>
                </TouchableOpacity>
                <Text style={[styles.text, {color: 'black',}]}>{counterReducer}</Text>
                <TouchableOpacity 
                    style={[styles.button, styles.plus]}
                    //onPress = {()=>setCount(count + 1)}
                    onPress = {()=> dispatch(decrease)}
                >
                    <Text style={styles.text}>+</Text>
                </TouchableOpacity>
                
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    counterContainer:{
        flexDirection:'row',
        justifyContent:'space-around',
        width: 400,
    },
    text:{
        fontWeight: 'bold',
        color: 'white',
        fontSize: 36,
    },
    plus: {
        backgroundColor: 'green',
    },
    minus:{
        backgroundColor: 'red',
    },
    button:{
        height: 50,
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
    },
});

export default Counter;