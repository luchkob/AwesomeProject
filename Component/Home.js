import { getFirestore } from 'firebase/firestore';
import React from 'react'
import { Button } from 'react-native';
import { async } from '@firebase/util';
import app from '../firebase';
async function handle(){
    var db=getFirestore(app)
    try {
      const docRef = await addDoc(collection(db, "users"), {
        name:"luch"
      });
       return(
        <SafeAreaView style={{flex:1,justifyContent:'center',alignItems:'center'}}>
          <Text style={{fontSize:56,color:'blue'}}>Congraculatio!</Text>

        </SafeAreaView>
       )
    } catch (e) {
      return (
        <ActivityIndicator size="small" color="#0000ff" />
      )
      
    }
  }
function Home() {
  return (
  <Button onPress={handle}/>
  )
}

export default Home;