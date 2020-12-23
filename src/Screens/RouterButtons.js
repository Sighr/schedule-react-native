import React from 'react';
import {View, Button} from 'react-native';

const RouterButtons = ({navigation}) => {
	return (
		<View>
			<Button onPress={() => navigation.navigate('My tasks')} title='My tasks'/>
			<Button onPress={() => navigation.navigate('Calendar')} title='Calendar'/>
			<Button onPress={() => navigation.navigate('Stats')} title='Statistics'/>
			<Button onPress={() => navigation.navigate('Sources')} title='Tasks Sources'/>
		</View>
	)
};

export default RouterButtons;
