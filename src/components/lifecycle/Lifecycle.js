import React, { useState, useEffect } from 'react'
import { View,Text, Button } from 'react-native'

function Lifecycle() {

    const [number, setNumber] = useState(0)
   const [counter, setCounter] = useState(10)
   const [helloFlag, setHelloFlag] = useState(true)

    function updateHelloFlag() {
        setHelloFlag(!helloFlag)
        
    }
     
     useEffect(() => {

     },[number])

     
     useEffect(() => {
     },[])

  return (  

    <View>
       <Text style={{fontSize:30}}>Number = {number}</Text>
       <Text style={{fontSize:30}}>Number = {counter}</Text>

       <Button title="Up!" onPress={() => setNumber(number + 1)}/>
       <Button title="UpCounter!" onPress={() => setCounter(counter + 10)}/>
       {helloFlag && <Hello/>}
       <Button title="secret" onPress={updateHelloFlag}/>

    </View>
  )
}

export default Lifecycle
 
    
function Hello() {
    useEffect(() => {
        console.log("burdayım silmek için tıkla")
        

        return () => {
             console.log("silindim haberin olsun")
        }
    },[])
    return(
         <View style={{backgroundColor:"red", padding:10, margin:10}}>
            <Text>I m  web developer</Text>
         </View>
    )
    
}