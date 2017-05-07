import React, { Component } from 'react';
import {
  Text,
  View,
  Container,
  Content,
  H1,
  Item,
  Input,
  Button
} from 'native-base';

export default class CreateUser extends Component {
    render(){ 
        return(
            <Container style = {{padding: 5}}>
                <View style={styles.wrapperTitle}>
                    <H1 style={styles.title}>CADASTRE-SE</H1>
                    <Text>Prazer em te conhecer. Seja bem-vindo!</Text>
                </View>
                <View style = {styles.wrapperForm}>
                    <Item regular style={styles.formItem}>
                        <Input placeholder='Seu nome'/>
                    </Item>
                    <Item regular style={styles.formItem}>
                        <Input placeholder='Seu e-mail'/>
                    </Item>
                    <Item regular style={styles.formItem}>
                        <Input placeholder='Sua senha'/>
                    </Item>

                    <Button warning block>
                        <Text>CRIAR CONTA</Text>
                    </Button>
                </View>
            </Container>
        );
    }
}

const styles = {
    title:{
        fontSize: 30,
        fontWeight: 'bold'
    },
    wrapperTitle:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
     //   backgroundColor: '#3498db'
    },
        wrapperForm:{
        flex: 2,
        paddingVertical: 5,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
     //   backgroundColor: '#8e44ad'
    },
    formItem:{
        marginBottom: 10
    }
}