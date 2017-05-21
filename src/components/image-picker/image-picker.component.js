import React, { Component, PropTypes } from 'react';

import {
  StyleSheet,
  Image,
  PixelRatio,
  TouchableOpacity,
  Platform
} from 'react-native';

import {
  Container,
  Text,
  Button,
  View
} from 'native-base';

import RNImagePicker from 'react-native-image-picker';

export default class ImagePicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      avatarSource: null,
      imgBase64: '',
    }

    this.selectPhotoTapped = this.selectPhotoTapped.bind(this);
  }

  static propTypes = {
    sendImageTo: PropTypes.func.isRequired
  }

  selectPhotoTapped() {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true
      }
    };

    RNImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled photo picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        var source, temp;
        // You can display the image using either:
        //source = {uri: 'data:image/jpeg;base64,' + response.data, isStatic: true};

        temp = response.data;

        //Or:
        if (Platform.OS === 'android') {
          source = { uri: response.uri, isStatic: true };
        } else {
          source = { uri: response.uri.replace('file://', ''), isStatic: true };
        }

        this.setState({
          avatarSource: source,
          imgBase64: temp,
        });
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.selectPhotoTapped()}>
          <View style={styles.imageWrapper}>
            {this.state.avatarSource === null ?
              <Image style={styles.image} source={{uri: this.props.actualImageUrl}} />
            :
              <Image style={styles.image} source={this.state.avatarSource} />
            }
          </View>
        </TouchableOpacity>

        <Button block bordered warning
          onPress={() => this.props.sendImageTo(this.state.avatarSource, this.state.imgBase64)}
        >
          <Text>Upload</Text>
        </Button>
      </View>
    );
  }
}

const styles = {
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  imageWrapper: {
    borderColor: '#9B9B9B',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    width: 240,
    height: 120
  },

  image: {
    width: 240,
    height: 120
  }
};