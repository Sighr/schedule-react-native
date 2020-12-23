import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import RouterButtons from "./RouterButtons.js";
import Header from "../Components/Header";

const Calendar = ({navigation}) => {
	return (
		<>
			<Header name="Календарь" showPlus={false}/>
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


export default Calendar
