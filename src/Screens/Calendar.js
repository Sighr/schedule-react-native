import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, TextInput, Button} from "react-native";
import Header from "../Components/Header";
import api from '../api';

const Calendar = ({navigation}) => {

	const currentTime = new Date();

	const [month, setMonth] = useState(currentTime.getMonth() + 1);
	const [year, setYear] = useState(currentTime.getFullYear());
	const [error, setError] = useState(null);

	const [calendarTasks, setCalendarTasks] = useState(null);


	useEffect(() => {
		api.getCalendarTasks(month, year).then((data) => {
			setCalendarTasks(data);
			setError(null);
		}).catch(() => {
			setCalendarTasks(null);
			setError('Could not load tasks')
		});
	}, [month, year]);

	return (
		<>
			<Header name="Календарь" showPlus={false}/>
			<View style={styles.container}>
				<Text style={styles.text}>Месяц</Text>
				<TextInput style={styles.inputDate} value={month.toString()} onChangeText={(text) => text && setMonth(parseInt(text))}/>
				<Text style={styles.text}>Год</Text>
				<TextInput style={styles.inputDate} value={year.toString()} onChangeText={(text) => text && setYear(parseInt(text))}/>
			</View>
				{calendarTasks && calendarTasks.tasks.map((task) => {
					return (
						<View style={styles.block}>
							<Text style={styles.task}key={task.id}>{task.desc}</Text>
							<Text style={styles.task}key={task.id}>{task.deadline.day}.{task.deadline.month}.{task.deadline.year}</Text>
						</View>

					)
				})}
				<Text>{error}</Text>

		</>
	);
};


const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: 50,
		marginTop: 50,
	},

	task: {
		fontFamily: 'Roboto',
		fontSize: 18,
		marginLeft: 20,
		marginRight: 20,
		verticalAlign: 'center',
		marginTop: 'auto',
		marginBottom: 'auto',
	},

	text:{
		fontFamily: 'Roboto',
		fontSize: 18,
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

	inputDate:{
		width: 100,
		borderWidth: 1,
		borderRadius: 5,
		marginTop: 10,
		marginBottom: 10,
	},
});



export default Calendar;
