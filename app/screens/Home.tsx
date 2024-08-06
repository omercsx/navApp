import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { View, Text, Button } from 'react-native';

type RootStackParamList = {
	Details: undefined;
	Feed: undefined;
	// Add other routes here
};

const Home = () => {
	const navigation =
		useNavigation<NativeStackNavigationProp<RootStackParamList>>();

	const handlePress = () => {
		navigation.navigate('Details');
	};

	const handleToFeed = () => {
		navigation.navigate('Feed');
	};

	return (
		<View>
			<Text>Home</Text>
			<Button title='Go to details page' onPress={handlePress} />
			<Button title='FEED' onPress={handleToFeed} />
		</View>
	);
};
export default Home;
