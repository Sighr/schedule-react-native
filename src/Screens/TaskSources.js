import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import RouterButtons from "./RouterButtons.js";

const TaskSources = ({navigation}) => {
	return (
		<View style={styles.container}>
			<Text>Task sources screen</Text>
			<RouterButtons navigation={navigation}/>
		</View>
	);
};


const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});


export default TaskSources
