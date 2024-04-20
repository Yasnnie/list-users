import { StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, ViewStyle } from "react-native";

interface Props{
    text: string,
    styleContainer?: StyleProp<ViewStyle>
    styleText?: StyleProp<TextStyle>

}

export default function Button({text,styleContainer,styleText}:Props){
    return <TouchableOpacity style={[styles.container, styleContainer]}>
        <Text style={[styles.text, styleText]}>{text}</Text>
    </TouchableOpacity>
}


const styles = StyleSheet.create({
    container:{
        padding:8,
        backgroundColor:'#DDDFDE',
        borderRadius:4
    },
    text:{
        color:'#9A9B9D'
    }

})