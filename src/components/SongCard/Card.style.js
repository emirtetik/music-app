import { StyleSheet } from "react-native";


export default StyleSheet.create({
    container: {
      padding:10,
      flexDirection:"row",
        
    },
    image:{
     width:100,
     height:100,
          borderRadius:50,
          borderWidth:1,
          borderColor:"black"
    },
    inner_container:{
    flex:1,
    padding:10,
    justifyContent:"center",
    },
    title: {
       fontWeight:"bold",
       fontSize:25,
       color:"black",
    },
     content_container:{
        flexDirection:"row",
     },
    info_container: {
        padding:10,
        flexDirection:"row",
        flex:1,
        alignItems:"center",
    },
    year:{
     marginLeft:10,
     color:"gray",
     fontWeight:"bold",
     fontSize:12,
    },
    soldout_container: {
        borderWidth:1,
        borderColor:"red",
        padding:5,
        borderRadius:5,
        justifyContent:"center",
    },
    soldout_title:{
     color:"red",
    }
})