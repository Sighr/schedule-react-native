
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, TextInput} from "react-native";
import Header from "../Components/Header";
import api from "../api.js";

const MyTasks = ({navigation}) => {

	const [tasks, setTasks] = useState(null);

	useEffect(() => {api.getAllTasks().then((data => setTasks(data)))}, []);

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
	search: {
		width: "80%",
		marginTop: 10,
		height: 40,
		borderColor: 'gray',
		borderWidth: 1,
		marginRight: 'auto',
		marginLeft: 'auto',
		borderRadius: 5,
	},
});


export default MyTasks;
