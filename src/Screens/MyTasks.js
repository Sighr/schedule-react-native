import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from "react-native";
import Header from "../Components/Header";
import api from "../api.js";

const MyTasks = ({navigation}) => {

	const [tasks, setTasks] = useState(null);

	useEffect(() => {api.getAllTasks().then((data => setTasks(data)))});

	return (
		<>
			<Header name="Мои задачи" showPlus={true}/>
			{tasks && tasks.map((task) => {
				return (
					<Text key={task.id}>{task.desc} {task.deadline.day}.{task.deadline.month}.{task.deadline.year}</Text>
				)
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


export default MyTasks
