import React, {useState} from 'react'
import { View , Text, FlatList, StyleSheet} from 'react-native'
import State from './components/state/State'
import Lifecycle from './components/lifecycle/Lifecycle'
import music_data from "./musicData.json"
import Card from "./components/SongCard"
import SearchBar from './components/SearchBar/SearchBar'

function App() {
  
  const renderSeperator = () => <View style={styles.seperator}></View>
         
  const renderSong = ({item}) =>  <Card song={item}/>;

  const [listSearch, setListSearch] = useState(music_data)

  const handleSearch = text => {
  const filtredList = music_data.filter(song => {
     const searchText = text.toLowerCase();
     const currentTitle = song.title.toLowerCase();

     return currentTitle.indexOf(searchText) > -1;
  } )
  setListSearch(filtredList)
  };

  return (
    <View style={styles.container}>

      {/* <State /> */}
      {/* <Lifecycle/> */}

      <SearchBar onSearch={handleSearch}/>
       <View>
        <FlatList 
        data={music_data} 
        renderItem={renderSong} 
        keyExtractor={item => item.id.toString()} 
        ItemSeparatorComponent={renderSeperator}
        />
       </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
    },
    seperator:{
         borderWidth:1,
         borderColor:"#e0e0e0"

    }
})
export default App
