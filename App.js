import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import MyTasks from "./src/Screens/MyTasks.js";
import Calendar from "./src/Screens/Calendar.js";
import Stats from "./src/Screens/Stats.js";
import TaskSources from "./src/Screens/TaskSources.js";

const Drawer = createDrawerNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Drawer.Navigator initialRouteName="Calendar">
				<Drawer.Screen name="My tasks" component={MyTasks}/>
				<Drawer.Screen name="Calendar" component={Calendar}/>
				<Drawer.Screen name="Stats" component={Stats}/>
				<Drawer.Screen name="Sources" component={TaskSources}/>
			</Drawer.Navigator>
		</NavigationContainer>
	);
}
