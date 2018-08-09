import React, {Component} from 'react';
import {AppRegistry, View, ListView} from 'react-native';

import TwitteCard from './TwitteCard';
import twittes from '../models/twittes.json';

export default class TwittesList extends Component {
    constructor() {
        super();

        const data_source = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = { twittesDataSource: data_source };
    }

    componentDidMount() {
        this.fetchTwittes();
    }

    fetchTwittes() {
        //update the data in the datasource
        this.setState({
            twittesDataSource: this.state.twittesDataSource.cloneWithRows(twittes)
        })
    }

    /**
     * Rendere a data entry from the data source as a row.
     * @param {Object} twitte - twitte to be displayed in each row.
     * @param {number} section_id
     * @param {number} row_id
     * @param {requestCallback} highlightRow - called when a row is being highlighted.
     * @returns {Component} to be injected in the list.
    */
    renderRow(twitte, section_id, row_id, highlightRow) {
        return (
            <View>
                <TwitteCard twitte={twitte} />
            </View>
        );
    }

    render() {
        return (
            <ListView
                dataSource={this.state.twittesDataSource}
                renderRow={this.renderRow.bind(this)}
            />
        );
    }
}

AppRegistry.registerComponent('TwittesList', _ => TwittesList);