import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import RouterButtons from "./RouterButtons.js";
import Header from "../Components/Header";

const Stats = ({navigation}) => {
	return (
		<>
			<Header name="Статистика" showPlus={false}/>
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


export default Stats;
