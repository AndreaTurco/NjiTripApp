import React, {Component} from 'react';
import {
	AppRegistry, Text,
	FlatList, ToastAndroid,
	Alert, Platform, TouchableOpacity
} from 'react-native';
import {List, ListItem, SearchBar, Icon} from 'react-native-elements'
import MainGroupStyle from './Style';
import CommonTheme from '../../Theme/Common';

export default class ShowGroupDetailScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: props.eventData,
			_index: props.indexGroupToShow
		};
	}

	state = {selected: (new Map(): Map<string, boolean>)};

	_keyExtractor = (item, index) => item.id;

	_onPressItem = (id: string) => {
		// updater functions are preferred for transactional updates
		this.setState((state) => {
			// copy the map rather than modifying state.
			const selected = new Map(state.selected);
			selected.set(id, !selected.get(id)); // toggle
			return {selected};
		});
	};

	_onPressButton = (id: string) => {
		if (Platform.OS === 'android') {
			ToastAndroid.showWithGravity('Open group Details' + id, ToastAndroid.SHORT, ToastAndroid.BOTTOM)
		} else {
			Alert.alert("go to login page")
		}
	};

	_renderItem = ({item}) => (
		<TouchableOpacity onPress={this._onPressButton}>
			<ListItem
				id={item.id}
				// onPressItem={this._onPressButton}
				// selected={!!this.state.selected.get(item.id)}
				containerStyle={{backgroundColor: '#515151'}}
				titleStyle={{color: '#ffffff'}}
				title={item.name}
				badge={{
					value: item.userId_list.length,
					textStyle: {color: 'black'},
					containerStyle: {marginTop: 5, backgroundColor: '#b2ff59'}
				}}
				// rightIcon={{name: ''}}
				hideChevron={true}
			/>
		</TouchableOpacity>
	);

	renderHeader = () => {
		return <SearchBar placeholder="Type here..." lightTheme round/>;
	};

	render() {
		return (
			<List>
				<Text>Joinable Groups List</Text>
				<FlatList
					data={this.state.data.Events[this.state._index].groups_list}
					extraData={this.state}
					keyExtractor={this._keyExtractor}
					renderItem={this._renderItem}
					// ListHeaderComponent={this.renderHeader}
					// ListFooterComponent={this.renderFooter}
				/>
			</List>
		);
	}
}

AppRegistry.registerComponent('ShowGroupDetailScreen', () => ShowGroupDetailScreen);
