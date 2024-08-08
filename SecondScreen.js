import { Text, View, FlatList, Pressable } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect, useContext } from 'react';
import { Store } from '../utils/store';
import FlatListItem from '../components/FlatListItem';

import { useIsFocused } from '@react-navigation/native';

function SecondProductScreen() {
  const routesRecieved = useRoute();
  const ContextCreated = useContext(Store);

  const navigation = useNavigation();
  const focused = useIsFocused();
  const newD = ContextCreated.setHeaderDisplayData;

  const allDataArray = routesRecieved?.params?.allData;

  const filteredData = allDataArray?.filter((data) => {
    if (data?.category == routesRecieved.params.pageName) {
      return data;
    }
  });

  useLayoutEffect(() => {
    if (focused) {
      newD(routesRecieved.params.pageName);
    }
  });

  return (
    <View>
      <FlatList
        data={filteredData}
        renderItem={({ item }) => {
          return (
            <View style={{ marginVertical: 20 }}>
              <View style={{ flexDirection: 'row' }}>
                <Pressable
                  style={({ pressed }) => {
                    return [
                      {
                        elevation: 5,
                        borderWidth: 1,
                        borderRadius: 20,
                        padding: 3,
                        marginLeft: 10,
                      },
                      pressed && { opacity: 0.7 },
                    ];
                  }}
                  onPress={() => {
                    navigation.navigate('ProductSecondScreen', {
                      params: item,
                      pageName: item.category,
                      allData: filteredData,
                    });
                  }}>
                  <Text style={{ fontWeight: 'bold', marginBottom: 5 }}>
                    {item.category}
                  </Text>
                </Pressable>
                <View />
                <Text>------------------</Text>
              </View>
              <FlatList
                numColumns={4}
                data={filteredData}
                renderItem={({ item }) => {
                  return (
                    <FlatListItem
                      imgPath={item.image}
                      title={item.title}
                      id={item.id}
                      allData={item}
                    />
                  );
                }}
                columnWrapperStyle={{ justifyContent: 'space-around' }}
              />
            </View>
          );
        }}
      />
    </View>
  );
}

export default SecondProductScreen;
