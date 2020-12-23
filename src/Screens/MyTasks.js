import React from 'react';
import {StyleSheet, Text, View, TextInput} from "react-native";
import {StatusBar} from "expo-status-bar";
import RouterButtons from "./RouterButtons.js";
import Header from "../Components/Header";

const MyTasks = ({navigation}) => {
	return (
		<>
			<Header name="Мои задачи" showPlus={true}/>
				<TextInput style={styles.search}
					// onChangeText={text => onChangeText(text)}
					value={"   Поиск..."}/>
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


export default MyTasks
