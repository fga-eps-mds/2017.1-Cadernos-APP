import React, { Component } from 'react';

import { styles } from './app.style';

import { StartScreen } from '../start-screen';
import { SignUp } from '../sign-up-screen';
import { SignIn } from '../sign-in-screen';

export class AppComponent extends Component {
    render() {
        return (
            <SignIn />
        );
    }
}
