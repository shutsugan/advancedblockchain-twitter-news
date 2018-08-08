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

                        <Text 
                            style={styles.twittecard__link} 
                            onPress={_ => Linking.openURL(link)}>{link}
                        </Text>

                        <SocialIcon
                            title={`Follow ${hash}`}
                            button
                            type='twitter'
                            onPress={_ => Linking.openURL(twitter)}
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
        color: '#9197A3',
        fontSize: 11,
        fontWeight: 'bold',
    },

    twittecard__body: {
        color: '#9197A3',
        fontSize: 14,
    },

    twittecard__link: {
        alignSelf: 'flex-start',
        fontSize: 12,
        marginTop: 8,
        marginBottom: 16,
        color: '#54acef',
        borderBottomColor: '#54acef',
        borderBottomWidth: 1,
    }
});

AppRegistry.registerComponent('TwitteCard', _ => TwitteCard);