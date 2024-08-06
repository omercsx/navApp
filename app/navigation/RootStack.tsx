import {
	createNativeStackNavigator,
	type NativeStackScreenProps,
} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Details from '../screens/Details';
import Feed from '../screens/Feed';
import Profile from '../screens/Profile';

type RootStackParamList = {
	Home: undefined;
	Details: { itemId: number };
	Feed: undefined;
	Profile: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export type HomePageProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
export type DetailsPageProps = NativeStackScreenProps<
	RootStackParamList,
	'Details'
>;
export type FeedPageProps = NativeStackScreenProps<RootStackParamList, 'Feed'>;
export type ProfilePageProps = NativeStackScreenProps<
	RootStackParamList,
	'Profile'
>;

// Define our layout
const RootStackNavigation = () => {
	return (
		<RootStack.Navigator>
			<RootStack.Screen name='Home' component={Home} />
			<RootStack.Screen name='Details' component={Details} />
			<RootStack.Screen name='Feed' component={Feed} />
			<RootStack.Screen name='Profile' component={Profile} />
		</RootStack.Navigator>
	);
};

export default RootStackNavigation;
