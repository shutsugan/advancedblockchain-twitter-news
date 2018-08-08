import React, {Component} from 'react';
import {
    AppRegistry, 
    Text, 
    View, 
    TouchableHighlight, 
    StyleSheet,
    Dimensions,
    Button, 
    Linking 
} from 'react-native';
import {Card, SocialIcon} from 'react-native-elements';
import {Constants} from 'expo';

export default class TwitteCard extends Component {
    render() {
        const {hash, twitter, date, title, body, link} = this.props.twitte;
        
        return(
            <TouchableHighlight style={styles.twittecard__container}>
                <View style={styles.twittecard}>
                    <Card
                        overlayStyle={{ opacity: 0 }}
                        containerStyle={{ width: Dimensions.get('window').width }}
                    >
                        <Text style={styles.twittecard__date}>{date}</Text>
                        <Text></Text>
                        <Text style={styles.twittecard__title}>{title}</Text>
                        <Text style={styles.twittecard__body}>{body}</Text>

                        <View style={styles.twittecard__link}>
                            <Text onPress={() => { Linking.openURL(link) }}>{link}</Text>
                        </View>

                        <SocialIcon
                            title={`Follow ${hash}`}
                            button
                            type='twitter'
                            onPress={() => { Linking.openURL(twitter) }}
                        />
                    </Card>
                </View>
            </TouchableHighlight>
        );
    }
}

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
    twittecard__container: {
        width: width,
        backgroundColor: '#e5ded8',
    },

    twittecard: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        marginBottom: 16,
    },

    twittecard__title: {
        color: '#000',
        fontSize: 18,
    },

    twittecard__date: {
        color: '#0f8ec7',
        fontSize: 12,
    },

    twittecard__body: {
        color: '#9197A3',
        fontSize: 12,
    },

    twittecard__link: {
        marginTop: 16,
    }
});

AppRegistry.registerComponent('TwitteCard', _ => TwitteCard);