import React from "react";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TextInput, View } from 'react-native';
import styles from './input.style';
import {value} from 'react-native-reanimated'

const Input = ({placeholder,onType,isSecure,iconName}) => {
    return(
        <View style={styles.container}>
            <TextInput style={styles.input}  placeholder={placeholder} onChangeText={onType} secureTextEntry={isSecure} value={value}  />
            <Icon name={iconName} size={30} color={'black'} />
        </View>
        
    )
}

export default Input;