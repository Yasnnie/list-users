import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import ListItem from "./src/components/ListItem";
import ProfileImg from "./assets/profile.jpeg";
import Button from "./src/components/Button";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item, index }) => <ListItem key={index} item={item} />}
        style={styles.list}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        ListHeaderComponent={() => {
          return (
            <View style={styles.containerHeader}>
              <View style={[styles.row, {gap:32,
                borderBottomWidth:1,
                borderBottomColor:'#c4c4c4',
                paddingBottom:16,
                marginBottom:16
              }]}>
                <Image source={ProfileImg} style={styles.img} />
                <Text style={styles.title}> Paul Allen</Text>
              </View>
              <View style={styles.row}>
                <Button text="View Profile"  styleContainer={styles.buttonProfile}/>
                <Button text="Add User" styleContainer={[styles.buttonProfile, {backgroundColor:'#529B69'}]} styleText={{color:'#fff'}}/>
              </View>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#EFF1F0",
    alignItems: "center",
    justifyContent: "center",
  },
  list: {
    width: "100%",
    paddingHorizontal: 24,
    paddingVertical: 32,
  },
  separator: {
    height: 16,
  },
  containerHeader:{
    width:'100%',
    flex:1,
    backgroundColor:'#fff',
    borderRadius:6,
    padding:12,marginBottom:24
  },
  img: {
    width: 120,
    height: 120,
    borderRadius: 100,
  },
  row:{
    flexDirection:'row',
    alignItems:'center',
    gap:16
  },
  title:{
    fontSize: 24,
    fontWeight:'700',
    color:'#5F568C'
  },
  buttonProfile:{
    flex:1, justifyContent:'center', alignItems:'center'
  }
});

const data = [
  {
    text: "John Smith",
    percent: -164,
  },
  {
    text: "Sarah Parker",
    percent: 203,
  },
  {
    text: "Paul Allen",
    percent: 464,
  },
  {
    text: "Terry Andrews",
    percent: -80,
  },
  {
    text: "Andy Vitale",
    percent: -230,
  },
  {
    text: "Katy Friedson",
    percent: 160,
  },
];
