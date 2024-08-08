import { View, Text, Image, ScrollView } from 'react-native';
import {
  useNavigation,
  useRoute,
  useIsFocused,
} from '@react-navigation/native';
import { useContext, useLayoutEffect } from 'react';
import { Store } from '../utils/store';

function ProductDetailsScreen() {
  const ContextCreated = useContext(Store);
  const navigation = useNavigation();
  const focused = useIsFocused();
  const newD = ContextCreated.setHeaderDisplayData;
  const route = useRoute();

  const screenTitle = route?.params?.data?.allData?.title;

  useLayoutEffect(() => {
    if (focused) {
      if (screenTitle) {
        newD(screenTitle);
      } else if (route?.params?.allData?.title) {
        newD(route?.params?.allData?.title);
      } else {
        newD('Overview');
      }
    }
  });

  if (!screenTitle && !route?.params?.allData?.title) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image
          source={require('../assets/empty-img.png')}
          style={{
            height: 200,
            width: 200,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
          }}
        />
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={{ marginVertical: 10, marginHorizontal: 10 }}>
        <Image
          source={{
            uri: !route?.params?.data?.allData?.image
              ? route?.params?.allData?.image
              : route?.params?.data?.allData?.image,
          }}
          style={{
            height: 300,
            width: '90%',

            alignSelf: 'center',
          }}
        />
        <Text
          style={{
            fontWeight: 'bold',
            marginVertical: 10,
            marginHorizontal: 10,
          }}>
          {' '}
          {!screenTitle ? route?.params?.allData?.title : screenTitle}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              color: 'green',
              fontWeight: 'bold',
              marginVertical: 10,
              marginHorizontal: 10,
            }}>
            Price - RS{' '}
            {!route?.params?.data?.allData?.price
              ? route?.params?.allData?.price
              : route?.params?.data?.allData?.price}
          </Text>

          <Text style={{ marginRight: 10, fontWeight: 'bold' }}>
            Rating -{' '}
            {!route?.params?.data?.allData?.rating?.rate
              ? route?.params?.allData?.rating?.rate
              : route?.params?.data?.allData?.rating?.rate}
            ⭐ / 5 (
            {!route?.params?.data?.allData?.rating?.count
              ? route?.params?.allData?.rating?.count
              : route?.params?.data?.allData?.rating?.count}
            )
          </Text>
        </View>
        <Text
          style={{
            fontWeight: 'bold',
            marginVertical: 10,
            marginHorizontal: 10,
          }}>
          Details :
        </Text>
        <Text
          style={{
            fontWeight: 'bold',
            marginVertical: 5,
            marginHorizontal: 10,
          }}>
          {!route?.params?.data?.allData?.description
            ? route?.params?.allData?.description
            : route?.params?.data?.allData?.description}
        </Text>
      </View>
    </ScrollView>
  );
}

export default ProductDetailsScreen;
