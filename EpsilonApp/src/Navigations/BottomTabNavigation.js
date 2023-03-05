import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import HomeForStudent from "../Screens/HomeForStudent";
import ProfileforStudent from "../Screens/ProfileforStudent";
import Chat from "../Screens/Chat";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Form from "../Screens/Form";
const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
    return (
        <Tab.Navigator
        screenOptions={({ route }) => ({
          
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'HomeforStudent') {
              iconName = 'home'
               
            } else if (route.name === 'Profileforstudent') {
              iconName = 'person'
            } else if(route.name === 'Form'){
                iconName = 'chat'
            }

            // You can return any component that you like here!
            return <MaterialIcons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          headerShown:false ,
          
        })}
      >
            
            <Tab.Screen name="HomeforStudent" component={HomeForStudent} options = {{tabBarLabel : "Home"}}  />
            <Tab.Screen name="Form" component={Form} options = {{tabBarLabel : "Chat"}} />
            <Tab.Screen name="Profileforstudent" component={ProfileforStudent} options = {{tabBarLabel : "Profile"}} />
        </Tab.Navigator>
    )


}

export default BottomTabNavigator ;