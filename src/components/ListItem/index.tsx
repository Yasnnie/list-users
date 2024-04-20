import { Image, StyleSheet, Text, View } from "react-native";
import Button from "../Button";
import ProfileImg from "../../../assets/profile.jpeg";

interface Props{
    item: {text: string, percent: number}
}

export default function ListItem({item}:Props) {
  return (
    <View style={styles.container}>
      <Image source={ProfileImg} style={styles.img} />

      <Text style={styles.username}>{item.text}</Text>

      <View style={[styles.percent, {backgroundColor: item.percent < 0 ? '#FBE9DF':'#D4E7D6'}]}>
        <Text style={{color: item.percent < 0 ? '#FF4700':'#007E0A'}}>{item.percent}</Text>
      </View>
      <Button text="Add" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    gap: 12,
    backgroundColor:'#fff',
    padding:8,
    borderRadius: 8
  },
  img: {
    width: 48,
    height: 48,
    borderRadius: 100,
  },
  username:{
    flex:1
  },
  percent:{
    flexDirection:'row',
    paddingVertical:8,
    paddingHorizontal:12,
    width:60,
    borderRadius: 4,
    justifyContent:'center',
    alignItems:'center'

  }

});
