import React from 'react';

import {
    Button,
    Text,
    View,
    Container
} from 'native-base';

export default class Main extends React.Component{
    render(){
        const { navigate } = this.props.navigation;

        return(
            <Container>
                <View>
                    <Button block
                        onPress={() =>
                            navigate('UserLogin')
                        }
                    >
                        <Text>Login</Text>
                    </Button>
                </View>

                <View>
                    <Button block
                        onPress={() =>
                            navigate('CreateUser')
                        }
                    >
                        <Text>Cadastro</Text>
                    </Button>
                </View>
            </Container>
        );
    }
}