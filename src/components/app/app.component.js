import React, { Component } from 'react';

import { StyleProvider, getTheme } from 'native-base';
import variables from '../../Themes/variables';

import { styles } from './app.style';

import { StartScreen } from '../start-screen';
import { SignUp } from '../sign-up-screen';
import { SignIn } from '../sign-in-screen';
import { MainScreen } from '../main-screen';

export class AppComponent extends Component {
    render() {
        return (
            <StyleProvider style={getTheme(variables)}>
                <MainScreen />
            </StyleProvider>
        );
    }
}
