import { View, Text, Button } from 'react-native';
import type { ProfilePageProps } from '../navigation/RootStack';

const Profile = ({ navigation }: ProfilePageProps) => {
	return (
		<View>
			<Button title='Go to Feed' onPress={() => navigation.push('Feed')} />
		</View>
	);
};
export default Profile;
