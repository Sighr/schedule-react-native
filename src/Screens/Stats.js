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
					<View key={stat.source_id}>
						<Text>{stat.source_name}</Text>
						{stat.source_stats.map((element) => {
							return (
								<Text key={element.name}>{element.name}: {element.score}/{element.max_score} - {element.percent}%</Text>
							);
						})}
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
});


export default Stats;
