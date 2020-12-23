import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import RouterButtons from "./RouterButtons.js";
import Header from "../Components/Header";

const TaskSources = ({navigation}) => {
	return (
		<>
			<Header name="Источники" showPlus={true}/>
		</>
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
