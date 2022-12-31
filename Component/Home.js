import { getFirestore,addDoc,collection } from 'firebase/firestore';
import React from 'react'
import { Button, SafeAreaView } from 'react-native';
import { async } from '@firebase/util';
import app from '../firebase';
async function handle(){
    var db=getFirestore(app)
    try {
      const docRef = await addDoc(collection(db, "users"), {
        name:"luch"
      });
       console.log("yes")
    } catch (e) {
      console.log('no') 
      
    }
  }
function Home() {
  return (
<SafeAreaView>
  <Button onPress={handle} title="press"/>

</SafeAreaView>  )
}

export default Home;