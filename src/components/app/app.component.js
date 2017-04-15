import React, { Component } from 'react';

import { styles } from './app.style';

import { StartScreen } from '../start-screen';
import { SignUp } from '../sign-up-screen';

export class AppComponent extends Component {
    render() {
        return (
            <SignUp />
        );
    }
}
