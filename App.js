import React, {Component} from 'react';
import {TabDrawer} from './app/Config/Route';
import {
	AppRegistry,
} from 'react-native';

export default class NativeApp extends Component {
	render() {
		return (
			<TabDrawer/>
		);
	}
}

AppRegistry.registerComponent('NativeApp', () => NativeApp);