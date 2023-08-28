import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
    container:{
        backgroundColor:'aqua',
        flex:1,
    },
    logo:{
        height:Dimensions.get('window').height/3,
        width:Dimensions.get('window').width,
        resizeMode:'contain',
    },
    logo_container:{
       justifyContent:'center',
    },
    body_container:{
        
    },
})