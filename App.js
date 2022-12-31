import { StatusBar } from 'expo-status-bar';
import React ,{useState}from 'react';
import { StyleSheet,Button, Text, View, TextInput, SafeAreaView } from 'react-native';
  
import { initializeApp } from "firebase/app";
 import { getFirestore,collection,addDoc,getDocs } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA-_smj03Y06jEMQPMjC_Ve1sRRoTYQgDc",
  authDomain: "reacttest-801b3.firebaseapp.com",
  databaseURL: "https://reacttest-801b3-default-rtdb.firebaseio.com",
  projectId: "reacttest-801b3",
  storageBucket: "reacttest-801b3.appspot.com",
  messagingSenderId: "673794488054",
  appId: "1:673794488054:web:3d7c94a0360492aebcded7",
  measurementId: "G-ET8L6V6VY4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 
export default function App() {
  var [data,setdata]=useState('')
   
  async function handle(){
var db=getFirestore(app)
 
try {
  const docRef = await addDoc(collection(db, "users"), {
    first: data,
    
  });
//  return(
//   <SafeAreaView style={{flex:1,justifyContent:"center",alignItems:"ceneter"}}>
//   <Text>GOOD JOB</Text>
//   </SafeAreaView>
//  )
console.log('dd')
} catch (e) {
  console.error("Error adding document: ", e);
}
 console.log('yes')
      
}

  
   
  return (
    <SafeAreaView style={styles.container}>
      <TextInput value={data} onChangeText={setdata} placeholder="type here" style={{backgroundColor:"green",padding:54}}/>
       
       <Button  title="click" onPress={handle} >

       </Button>
    </SafeAreaView>
  );
}





const styles = StyleSheet.create({
  input:{
   
   
  },
  button:{
   backgroundColor:'white',
   borderRadius:12
    
    
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 
