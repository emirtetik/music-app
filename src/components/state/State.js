import React, {useState} from 'react'
import { View , Text,FlatList,Switch} from 'react-native'

const data =[
  {id:0, name:'cafe.anfora', isFavorite:true },
  {id:1, name:'cafe.naila', isFavorite:false },
  {id:2, name:'cafe.asmalı', isFavorite:false },
  {id:3, name:'cafe.derya', isFavorite:true },
  {id:4, name:'cafe.yakut', isFavorite:false},
  {id:5, name:'cafe.uncle', isFavorite:true},
  {id:6, name:'cafe.dad', isFavorite:false},
  {id:7, name:'cafe.camel', isFavorite:true},

]
function State() {

 const [cafeList, setCafeList] = useState(data)
  const  [show,setShow] = useState(false)
 
  function onFavoriteChange(isFavoriteSlected) {
    setShow(isFavoriteSlected)
    isFavoriteSlected
    ? 
    setCafeList(cafeList.filter(cafe => cafe.isFavorite))
    : 
    setCafeList(data)
  }

  return (
    <View>
       <View style={{margin:10}}>
        <Text>show only favorites</Text>
       </View>
      <Switch value={show} onValueChange={onFavoriteChange} />

      <FlatList
      keyExtractor={item => item.id.toString()}
        data={cafeList}
        renderItem={({item}) => <Text style={{fontSize:25}}>{item.name}</Text>}
      />
    </View>
  )
}

export default State
