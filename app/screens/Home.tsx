import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { View, Text, Button, TextInput } from 'react-native';
import type { HomePageProps } from '../navigation/RootStack';
import { useState } from 'react';

const Home = ({ navigation }: HomePageProps) => {
	const [itemId, setItemId] = useState(0);
	return (
		<View>
			<Text>Home</Text>
			<TextInput
				placeholder='Enter a number'
				keyboardType='numeric'
				value={itemId.toString()}
				onChangeText={text => setItemId(Number(text))}
			/>
			<Button
				title='Go to Profile'
				onPress={() => navigation.push('Profile')}
			/>
			<Button
				title='Go to Details'
				onPress={() => navigation.push('Details', { itemId: itemId })}
			/>
		</View>
	);
};
export default Home;
