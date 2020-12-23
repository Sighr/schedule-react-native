import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from "react-native";
import Header from "../Components/Header";
import api from "../api.js";

const TaskSources = ({navigation}) => {

	const [taskSources, setTaskSources] = useState(null);

	useEffect(() => {api.getAllTaskSources().then((data => setTaskSources(data)))}, []);

	return (
		<>
			<Header name="Источники" showPlus={true}/>
			{taskSources && taskSources.map((src) => {
				return (
					<Text key={src.id}>{src.name} {src.user}</Text>
				);
			})}
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


export default TaskSources;
