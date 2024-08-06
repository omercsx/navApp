import { View, Text } from 'react-native';
import type { DetailsPageProps } from '../navigation/RootStack';

const Details = ({ navigation, route }: DetailsPageProps) => {
	const { itemId } = route.params;

	return (
		<View>
			<Text>Details passed itemId: {itemId}</Text>
		</View>
	);
};
export default Details;
