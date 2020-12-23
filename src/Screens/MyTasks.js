
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, TextInput} from "react-native";
import Header from "../Components/Header";
import api from "../api.js";
import {ScrollView} from "react-native-web";

const MyTasks = ({navigation}) => {

	const [tasks, setTasks] = useState(null);

	useEffect(() => {api.getAllTasks().then((data => setTasks(data)))}, []);

	return (
		<>
			<Header name="Мои задачи" showPlus={true}/>
			{tasks && tasks.map((task) => {
				return (
					<View style={styles.block} key={task.id}>
						<Text style={styles.task}>{task.desc}</Text>
						<Text style={styles.task}>{task.deadline.day}.{task.deadline.month}.{task.deadline.year}</Text>
					</View>
				)
			})}
		</>
	);
};


const styles = StyleSheet.create({
	container:{

	},
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

	task: {
		fontFamily: 'Roboto',
		fontSize: 18,
		marginLeft: 20,
		marginRight: 20,
		textAlignVertical: 'center',
		marginTop: 'auto',
		marginBottom: 'auto',
	},

	block:{
		height: 50,
		width: "80%",

		marginTop: 5,
		marginLeft: 'auto',
		marginRight: 'auto',

		borderWidth: 1,
		borderColor: "#FF5F6B",
		backgroundColor: '#FFFFFF',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
});


export default MyTasks;
