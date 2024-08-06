import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { View, Text, Button } from 'react-native';
import type { HomePageProps } from '../navigation/RootStack';

const Home = ({ navigation }: HomePageProps) => {
	return (
		<View>
			<Text>Home</Text>
			<Button
				title='Go to details page'
				onPress={() => navigation.push('Feed')}
			/>
		</View>
	);
};
export default Home;
