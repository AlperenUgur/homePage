import { View } from "native-base";
import React from "react";

import { StyleSheet ,Text} from "react-native";

function BuyScreen(){
    return(
        <View>
            <Text style ={styles.text}>
               Satın Alma sayfası
            </Text>
        </View>
    )
}
export default BuyScreen;


const styles = StyleSheet.create({
    text:{
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center'
    }
})