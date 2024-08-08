import { View, Image, Text, Pressable } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

function FlatListItem(props) {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() => {
        navigation.navigate('ProductDetailsScreen', {
          data: props,
        });
      }}>
      <View style={{ margin: 5 }}>
        <Image
          source={{ uri: props.imgPath }}
          style={{ height: 76, width: 76 }}
        />
        <Text>Item {props.id} </Text>
      </View>
    </Pressable>
  );
}

export default FlatListItem;
