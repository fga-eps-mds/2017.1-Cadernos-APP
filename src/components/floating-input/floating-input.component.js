import React from 'react';

import {
  Content,
  Item,
  Label,
  Input,
  Icon,
  Text
} from 'native-base';

import {
  If
} from 'jsx-control-statements';

import { styles } from './floating-input.style';

export const FloatingInputComponent = (
    {labelText, value, inputChangeText, labelStyle={}, errors=undefined, style={}, secureText=false}
  ) => {
  return (
    <Content style={style}>
      <Item floatingLabel error={errors != undefined}>
        <Label style={labelStyle}>{labelText}</Label>

        <Input secureTextEntry={secureText}
          value={value}
          onChangeText={(newValue) => inputChangeText(newValue)}
        />

        <If condition={errors != undefined}>
          <Icon name='ios-close-circle' />
        </If>
      </Item>

      <If condition={errors != undefined}>
        <Text>{errors}</Text>
      </If>
    </Content>
  );
}