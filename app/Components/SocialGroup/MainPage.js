import React, {Component} from 'react';
import {
	AppRegistry,
	View,
} from 'react-native';
import Button from 'apsl-react-native-button';
import MainGroupStyle from './Style';
import EventShortDescr from './EventShortDescr';
import GroupsListElement from './GroupsList';
import CommonTheme from '../../Theme/Common';

export default class MainGroupScreen extends Component {

	constructor(props) {
		super(props);
		const _eventData = require('../../Fixture/Events.json');
		this.state = {
			data: _eventData,
			_index: typeof props.navigation.state.params !== 'undefined' ? props.navigation.state.params.indexEventToShow : 0
		};
	}

	render() {
		return (
			<View style={CommonTheme.container}>
				{/*info evento*/}
				<View style={MainGroupStyle.mainSection}>
					<EventShortDescr
						indexEventToShow={this.state._index}
						eventData={this.state.data}
					/>
				</View>
				{/*wrapper tasti*/}
				<View style={MainGroupStyle.footer}>
					<View style={[MainGroupStyle.showListOfAllGroup]}>
						<GroupsListElement
							indexEventToShow={this.state._index}
							eventData={this.state.data}
						/>
					</View>
					<View style={[MainGroupStyle.joinOldOrById]}>
						<Button
							title="create_group"
							onPress={() => this.props.navigation.navigate('CreateGroup', {indexEventToShow : this.state._index})}
							style={[MainGroupStyle.footerButton, MainGroupStyle.footerButtonTicket]}
							textStyle={CommonTheme.footerText}>
							Create a New Group
						</Button>
					</View>
					<View style={[MainGroupStyle.createNewOne]}>
						<Button
							title="back_to_event"
							onPress={() => this.props.navigation.goBack()}
							style={[MainGroupStyle.footerButton, MainGroupStyle.footerButtonBack]}
							textStyle={CommonTheme.footerText}>
							Go Back to the event page
						</Button>
					</View>
				</View>
			</View>
		);
	}
}

AppRegistry.registerComponent('MainGroupScreen', () => MainGroupScreen);
