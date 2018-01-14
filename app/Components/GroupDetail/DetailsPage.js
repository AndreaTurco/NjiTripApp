import React, {Component} from 'react';
import {
	AppRegistry,
	Text,
	View,
} from 'react-native';
import Button from 'apsl-react-native-button';
import {Icon , SocialIcon} from 'react-native-elements';

import MainGroupStyle from './Style';
import CommonTheme from '../../Theme/Common';

export default class ShowGroupDetailScreen extends Component {

	constructor(props) {
		super(props);
		const _eventData = require('../../Fixture/Events.json');
		this.state = {
			data: _eventData,
			_index: typeof props.indexGroupToShow !== 'undefined' ? props.indexGroupToShow : 0
		};
	}


	render() {
		return (
			<View style={CommonTheme.container}>
				{/*info evento*/}
				<View style={MainGroupStyle.mainSection}>
					<Text style={MainGroupStyle.shareFunTitle}>
						Share the fun
					</Text>
					<Button
						onPress={() =>  this.props.navigation.navigate('DrawerOpen')}
					> oprn
					</Button>
				</View>
			</View>
		);
	}
}

AppRegistry.registerComponent('ShowGroupDetailScreen', () => ShowGroupDetailScreen);
