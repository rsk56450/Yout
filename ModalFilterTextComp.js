import { View, Text, Image, Pressable } from 'react-native';
import {
  useNavigation,
  useRoute,
  isFocused,
  useNavigationContainerRef,
} from '@react-navigation/native';
import { useContext } from 'react';

import { Store } from '../utils/store';

function ModalFilterTextComp({ props, setModalOpen, setshowSearchBar }) {
  const navigation = useNavigation();

  const CreatedCtx = useContext(Store);
  const modalOpenstatus = CreatedCtx.modalOpenState;

  function handleItemPress() {
    setshowSearchBar(false);
    setModalOpen(false);

    navigation.navigate('ProductDetailsScreen', {
      allData: props,
    });
  }
  return (
    <Pressable onPress={handleItemPress}>
      <View
        style={{
          flexDirection: 'row',
          margin: 10,
          borderWidth: 2,
          borderRadius: 10,
          padding:2
        }}>
        <Text style={{ fontWeight: 'bold' }}>{props.title}</Text>
        <Image
          source={{ uri: props.image }}
          style={{
            height: 25,
            width: 25,
            marginHorizontal: 5,
            marginVertical: 3,
          }}
        />
      </View>
    </Pressable>
  );
}

export default ModalFilterTextComp;
