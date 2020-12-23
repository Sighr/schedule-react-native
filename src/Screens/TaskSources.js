import React from 'react';
import {StyleSheet, Text, View} from "react-native";
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
