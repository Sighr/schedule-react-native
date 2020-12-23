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
					<View style={styles.block}>
						<Text style={styles.textSours} key={src.id}>{src.name}</Text>
						<Text style={styles.textUser} key={src.id}>{src.user}</Text>
					</View>
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

	textSours: {
		fontFamily: 'Roboto',
		fontSize: 18,
		marginLeft: 20,
		marginRight: 20,
		verticalAlign: 'center',
		marginTop: 'auto',
		marginBottom: 'auto',
	},

	textUser:{
		fontFamily: 'Roboto',
		fontSize: 16,
		marginLeft: 20,
		marginRight: 20,
		verticalAlign: 'center',
		marginTop: 'auto',
		marginBottom: 'auto',
		color: 'gray',
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
		justifyContent: 'space-between',
	},
});


export default TaskSources;
