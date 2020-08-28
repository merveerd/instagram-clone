import React, {useState} from 'react';
import {View, Text, FlatList, Image, Dimensions} from 'react-native';
import {connect} from 'react-redux';
import {TouchableOpacity} from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-picker';

import {updateList} from '../actions';
import {Button} from '../components';
const AddImage = (props) => {
  const [image, setImage] = useState(null);
  return (
    <View> 
      {image ? 
      <Button
        text={'Add'}
        style={{height: 30, width : 40, marginTop: 20}}
        onPress={() => {

          const params = {
            image: image,
            name: 'Merve',
            location: 'Istanbul',
            _id: image.uri.slice(3),
          };
          props.updateList(params);
          setImage(null);
        }}
      />:
      <TouchableOpacity
        onPress={() => {
          const options = {
            title: 'Resim Seç',
            quality: 0.2,
            storageOptions: {
              skipBackup: true,
              path: 'images',
            },
          };

          ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
              console.log('User cancelled image picker');
            } else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
              console.log('User tapped custom button: ', response.customButton);
            } else {
              const source = {uri: response.uri};
              setImage(source);
            }
          });
        }}>
        <Image
          source={require('../assets/plus.png')}
          style={{marginTop: 10, width: 40, height: 40}}></Image>
      </TouchableOpacity>
      }
    </View>
  );
};

const mapStateToProps = ({listResponse}) => {
  const {list} = listResponse;
  return {list};
};

export default connect(mapStateToProps, {updateList})(AddImage);
