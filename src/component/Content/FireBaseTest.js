import React, { Component } from 'react';
import { Button, Image, View, WebView } from 'react-native';
import { ImagePicker } from 'expo';
import PDFReader from 'rn-pdf-reader-js'
import { Constants } from 'expo';

export default class FireBaseTest extends Component {
  state = {
    image: null,
  };

  render() {
    let { image } = this.state;

    return (
      <View style ={{flex: 1,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',}} >
       <PDFReader
          source={{ uri: "http://gahp.net/wp-content/uploads/2017/09/sample.pdf" }}
        />
      </View>
    //   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    //     <Button
    //       title="Pick an image from camera roll"
    //       onPress={this._pickImage}
    //     />
    //     {image &&
    //       <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
    //   </View>
    // );
    )
  }

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };
}