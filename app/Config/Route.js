import React from 'react';
import {StackNavigator, TabNavigator, DrawerNavigator, DrawerItems} from 'react-navigation';
import {Button, Text, TouchableOpacity} from 'react-native';
// import { Icon } from 'react-native-elements';

// import LateralMenu        from '../Components/SideMenu/LateralMenu';
import HomeScreen from '../Components/Index/Index';
import LoginScreen from '../Components/Login/Login';
import ChooseInterestScreen from '../Components/ChooseInterest/ChooseInterest';
import EventScreen from '../Components/Event/Event';
import HandleEventScreen from '../Components/HandleEvent/HandleEvent';
import MainGroupScreen from '../Components/SocialGroup/MainPage';
import CreateGroupScreen from '../Components/SocialGroup/CreateGroup';
import ShowGroupDetailScreen from '../Components/GroupDetail/DetailsPage';
import MainGroupStyle from "../Components/SocialGroup/Style";
/*
 export const TabNav = TabNavigator({
 Event: {
 screen: EventScreen,
 navigationOptions: {
 title: 'NjiTrip',
 headerTintColor: '#ccff90',
 headerStyle: {
 backgroundColor : '#424242'
 },
 // headerRight: <Button title="Info" />,
 },
 },
 });

export const DrawerNav = DrawerNavigator({
	MenuLateral: {
		screen: LateralMenu,
		navigationOptions: ({ navigation }) => ({
			drawerWidth: 200,
			drawerPosition: 'right',
		})
	},
});

 // headerRight: <Button
 // 	title="Info"
 // 	onPress={
 // 		() => navigation.navigate('LeftTest')
 // 	}
 // />,

 // LeftTest: {
 // 	screen: DrawerNav
 // },
 */

export const Stack = StackNavigator({
		MainGroupPage: {
			screen: MainGroupScreen,
			navigationOptions: {
				title: 'NjiTrip - Be Social',
				headerTintColor: '#ccff90',
				headerStyle: {
					backgroundColor: '#424242',
				},
			},
		},
		Home: {
			screen: HomeScreen,
			navigationOptions: {
				header: null
			}
		},
		Login: {
			screen: LoginScreen,
			navigationOptions: {
				title: 'Join Your Friends',
				headerTintColor: '#ccff90',
				headerStyle: {
					backgroundColor: '#424242'
				}
			},
		},
		ChooseInterest: {
			screen: ChooseInterestScreen,
			navigationOptions: {
				title: 'Choose the fun section',
				headerTintColor: '#ccff90',
				headerStyle: {
					backgroundColor: '#424242'
				},
				// headerRight: <Button title="Info" />,
			},
		},
		/*		Event: {
		 screen : TabNav
		 }*/
		Event: {
			screen: EventScreen,
			navigationOptions: {
				title: 'NjiTrip',
				headerTintColor: '#ccff90',
				headerStyle: {
					backgroundColor: '#424242'
				},
				// headerRight: <Button title="Info" />,
			},
		},
		HandleEvent: {
			screen: HandleEventScreen,
			navigationOptions: {
				title: 'NjiTrip - Handle the fun',
				headerTintColor: '#ccff90',
				headerStyle: {
					backgroundColor: '#424242',
				},
			},
		},
		CreateGroup: {
			screen: CreateGroupScreen,
			navigationOptions: ({ navigation }) => ({
				title: 'NjiTrip - Begin to Be Social',
				headerTintColor: '#ccff90',
				headerStyle: {
					backgroundColor: '#424242',
				},
			}),
		},
		DetailsPage: {
			screen: ShowGroupDetailScreen,
			navigationOptions: ({ navigation }) => ({
				title: 'NjiTrip - Group Detail',
				headerTintColor: '#ccff90',
				headerStyle: {
					backgroundColor: '#424242',
				},
			}),
		},

	}
	,
	{
		headerMode: 'screen',
		navigationOptions: ({navigation}) => ({
			// headerStyle: {backgroundColor: '#4C3E54'},
			// title: 'Welcome!',
			// headerTintColor: 'white',
			headerRight:
				<TouchableOpacity>
					<Text
						style={{ color : "#ccff90", paddingHorizontal: 10, fontWeight: 'bold', fontSize: 22,}}
						onPress={() => navigation.navigate('DrawerOpen')}>
						Menu
					</Text>
				</TouchableOpacity >,
		})
	}
);


const easyRNRoute = DrawerNavigator({
	Home: {
		screen: HomeScreen,
	},
	Stack: {
		screen: ChooseInterestScreen
	}
}, {
	// contentComponent: DrawerMenu,
	contentOptions: {
		activeTintColor: '#e91e63',
		style: {
			flex: 1,
				paddingTop: 15,
		}
	}
});