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
			<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
				<TextInput value={month.toString()} onChangeText={(text) => text && setMonth(parseInt(text))}/>
				<TextInput value={year.toString()} onChangeText={(text) => text && setYear(parseInt(text))}/>
				{calendarTasks && calendarTasks.tasks.map((task) => {
					return (
						<Text
							key={task.id}>{task.desc} {task.deadline.day}.{task.deadline.month}.{task.deadline.year}</Text>
					)
				})}
				<Text>{error}</Text>
			</View>
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


export default Calendar;
