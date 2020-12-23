import React from 'react';
import {Pressable, StyleSheet, Text, View} from "react-native";
import {Image} from "react-native";
import {DrawerActions, useNavigation} from "@react-navigation/native";

const Header = ({name, showPlus}) => {
	const navigation = useNavigation();
	return (
		<View style={styles.container}>
			<Pressable onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
				<Image style={styles.image}
					   source={require('../../assets/menu.png')}
				/>
			</Pressable>
			<Text style={styles.text}>{name}</Text>
			{showPlus && <Image style={styles.image}
					source={require('../../assets/plus.png')}
			/>}
			{!showPlus && <View style={styles.empty} />}
		</View>
	);
};


const styles = StyleSheet.create({
	container: {
		//flex: 0.08,
		height: 40,
		padding: 5,
		flexDirection: 'row',
		backgroundColor: '#fff',
		alignItems: 'flex-end',
		justifyContent: 'space-between',
		width: "100%",
	},

	text: {
		fontFamily: 'Roboto',
		fontSize: 24,
	},

	image: {
		width: 30,
		height: 30,
	},

	empty: {
		width: 30,
		height: 30,
	}
});


export default Header;
