import React from "react";
// import {
//   TabBarBottom
// } from "react-navigation";
import { View, Button } from 'react-navigation';
// import { LinearGradient } from "expo";
// import { Ionicons  } from '@expo/vector-icons';

const CustomTabBarBottom = props => {
  return (

        <View style={{backgroundColor: "#fff", flexDirection: "row"}}>
          {
            props.navigationState.routes.map((route) => {
              return route.key==="Account" ? null : <Button title={route.key} onPress={()=> {props.navigation.navigate(route.key)}}></Button>
            })
          }
        </View>
  );
};

// const styles = {
//   actionButton: {
//     backgroundColor: "#6200EE",
//     width: 50,
//     height: 50,
//     borderRadius: 50/2,
//     position: "absolute",
//     bottom: 40,
//     left: 155,
//     zIndex: 999
//   },
//   buttonIcon: {
//     textAlign: "center",
//   }
// }

export default CustomTabBarBottom;
