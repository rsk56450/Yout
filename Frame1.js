import { Text, View, Image, FlatList, Pressable } from 'react-native';
import FlatListItem from './FlatListItem';
import { useNavigation } from '@react-navigation/native';

function Frame1({ Retrieveddata }) {
  const navigation = useNavigation();
  return (
    <FlatList
      data={Retrieveddata}
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
                    allData: Retrieveddata,
                  });
                }}>
                <Text style={{ fontWeight: 'bold', marginBottom: 5 }}>
                  {item.category}
                </Text>
              </Pressable>
              <View />
              <Text style={{ textAlignVertical: 'center' }}>
                
                --------------------------------
              </Text>
            </View>
            <FlatList
              numColumns={4}
              data={Retrieveddata}
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
  );
}

export default Frame1;
