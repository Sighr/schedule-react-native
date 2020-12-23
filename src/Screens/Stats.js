import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from "react-native";
import Header from "../Components/Header";
import api from "../api.js";

const Stats = ({navigation}) => {

	const [stats, setStats] = useState(null);

	useEffect(() => {api.getStats().then((data => setStats(data)))}, []);

	return (
		<>
			<Header name="Статистика" showPlus={false}/>
			{stats && stats.map((stat) => {
				console.log(stat);
				return (
					<>
					<View style={styles.block} key={stat.source_id}>
						<Text style={styles.textSours}>{stat.source_name}</Text>
						{stat.source_stats.map((element) => {
							return (
								<>
									<Text style={styles.textSubject} key={element.name}>{element.name}:</Text>
									<Text style={styles.textBalls} key={element.name}>{element.score}/{element.max_score} - {element.percent.toFixed(2)}%</Text>
								</>
							);
						})}
					</View>
					</>
				);

			})}
		</>
	);
};


const styles = StyleSheet.create({
	container: {
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
		marginBottom: 10,
		color: 'gray',
	},

	textSubject:{
		fontFamily: 'Roboto',
		fontSize: 16,
		fontWeight: 'bold',
		marginLeft: 20,
		marginRight: 20,
		verticalAlign: 'center',
		marginTop: 'auto',
		marginBottom: 'auto',
	},

	textBalls:{
		fontFamily: 'Roboto',
		fontSize: 16,
		marginLeft: 20,
		marginRight: 20,
		verticalAlign: 'center',
		marginTop: 'auto',
		marginBottom: 'auto',
	},

	block:{
		height: 'auto',
		width: "80%",
		padding: 10,

		marginTop: 5,
		marginLeft: 'auto',
		marginRight: 'auto',

		borderWidth: 1,
		borderColor: "#FF5F6B",
		backgroundColor: '#FFFFFF',
		justifyContent: 'space-between',
	},
});


export default Stats;
