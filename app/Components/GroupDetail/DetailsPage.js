import React, { Component } from 'react';
import {
	AppRegistry,
	Text,
	View,
} from 'react-native';
import Button from 'apsl-react-native-button';
import { Icon, SocialIcon } from 'react-native-elements';

import MainGroupStyle from './Style';
import CommonTheme from '../../Theme/Common';

export default class ShowGroupDetailScreen extends Component {

	constructor(props) {
		super(props);
		this.state = {
			group_details: props.group_data,
			_index: typeof props.indexGroupToShow !== 'undefined' ? props.indexGroupToShow : 0
		};
	}


	render() {
		return (
			<View style={CommonTheme.container}>
				{/*info evento*/}
				<View style={MainGroupStyle.mainSection}>
					{/* visible list of user */}
					{/* <Text style={{color: 'white'}}>Number of active users:{ this.state.group_details.userId_list.length }</Text> */}

					{/* chat with list of last n messages */}

					{/* back button */}

				</View>
				<View style={MainGroupStyle.footer}>
					<View style={[MainGroupStyle.createNewOne]}>
						<Button
							title="back_to_event"
							onPress={() => this.props.navigation.goBack()}
							style={[MainGroupStyle.footerButton, MainGroupStyle.footerButtonBack]}
							textStyle={CommonTheme.footerText}>
							Go Back
					</Button>
					</View>
				</View>
			</View>

		);
	}
}

AppRegistry.registerComponent('ShowGroupDetailScreen', () => ShowGroupDetailScreen);
