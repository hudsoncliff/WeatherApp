// @flow
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { getCurrentWeather } from './WeatherService';
import CurrentWeather from './CurrentWeather';

type State = {
    current: ?CurrentWeather,
};

class WeatherScreen extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = { current: null };
    }
    componentDidMount() {
        getCurrentWeather('Tokyo')
        .then((current) => {
            console.log('天気予報の取得完了');
            this.setState({ current });
        });
    }

    render() {
        const { current } = this.state;
        console.log('render', current);
        return (
        <View>
            <Text>
                {current ? JSON.stringify(current) : ''}
            </Text>
        </View>
        );
    }
}

export default WeatherScreen;