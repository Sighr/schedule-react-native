import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import RouterButtons from "./RouterButtons.js";
import {Image} from "react-native";

const MyTasks = ({navigation}) => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Мои задачи</Text>
			<Image
				source={require('../../assets/edd.png')}
			/>
			<Text>Мои задачи</Text>
			{/*<RouterButtons navigation={navigation}/>*/}
		</View>
	);
};


const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		// alignItems: 'center',
		justifyContent: 'center',
	},

	text: {
		fontFamily: 'Arial',
		fontSize: 24,
	},
	icon: {
		backgroundColor: '#ff0000'
	}
});


export default MyTasks
