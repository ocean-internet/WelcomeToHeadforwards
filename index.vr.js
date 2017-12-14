import React, {Component} from 'react';
import {
    AppRegistry,
    asset,
    VideoPano,
    View,
    Text,
} from 'react-vr';
import Blink from './components/blink/component';
import ColorChange from './components/color-change/component';

class WelcomeToHeadforwards extends Component {
    render() {
        return (
            <View style={{
                transform: [
                    {rotateZ: -2.5}
                ]
            }}>
                <VideoPano source={asset('360_0002_stitched_injected.MP4')}
                           poster={asset('360_0002_stitched_injected 2017-12-06 14.34.00.jpg')}
                           autoPlay={true}
                           loop={true}/>
                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    width: 2,
                    alignItems: 'stretch',
                    transform: [
                        {translate: [-1, 1, -5]},
                        {rotateX: 90}
                    ],
                }}
                      billboarding={'on'}>

                    <View style={{margin: 0.1, height: 0.3, backgroundColor: 'red'}}>
                        <Text style={{fontSize: 0.2, textAlign: 'center'}}>Red</Text>
                    </View>
                    <View style={{margin: 0.1, height: 0.3, backgroundColor: 'orange'}}>
                        <Text style={{fontSize: 0.2, textAlign: 'center'}}>Orange</Text>
                    </View>
                    <View style={{margin: 0.1, height: 0.3, backgroundColor: 'yellow'}}>
                        <Text style={{fontSize: 0.2, textAlign: 'center'}}>Yellow</Text>
                    </View>
                    <View style={{margin: 0.1, height: 0.3, backgroundColor: 'green'}}>
                        <Text style={{fontSize: 0.2, textAlign: 'center'}}>Green</Text>
                    </View>
                    <View style={{margin: 0.1, height: 0.3, backgroundColor: 'blue'}}>
                        <Text style={{fontSize: 0.2, textAlign: 'center'}}>Blue</Text>
                    </View>
                </View>
                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    width: 2,
                    alignItems: 'stretch',
                    transform: [
                        {translate: [-5, 2.5, -1]},
                    ],
                    justifyContent: 'center'
                }}
                      billboarding={'on'}>
                    <ColorChange></ColorChange>
                </View>
            </View>
        );
    }
}

AppRegistry.registerComponent('WelcomeToHeadforwards', () => WelcomeToHeadforwards);
