import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import RouterButtons from "./RouterButtons.js";

const Calendar = ({navigation}) => {
	return (
		<View style={styles.container}>
			<Text>Calendar! Wow!</Text>
			<RouterButtons navigation={navigation}/>
		</View>
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
