import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import MyTasks from "./src/Screens/MyTasks";
import Calendar from "./src/Screens/Calendar.js";
import Stats from "./src/Screens/Stats.js";
import TaskSources from "./src/Screens/TaskSources.js";
import {StyleSheet} from "react-native";
import NavigatorContent from "./src/Components/NavigatorContent";

const Drawer = createDrawerNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Drawer.Navigator drawerStyle={styles.menu} drawerContent={(props) => <NavigatorContent {...props}/>}
							  initialRouteName="Calendar">
				<Drawer.Screen name="Мои задачи" component={MyTasks}/>
				<Drawer.Screen name="Календарь" component={Calendar}/>
				<Drawer.Screen name="Статистика" component={Stats}/>
				<Drawer.Screen name="Источники" component={TaskSources}/>
			</Drawer.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	menu: {
		backgroundColor: '#FEEFF0',
	},
});
