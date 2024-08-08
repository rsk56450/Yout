import { Text, View, ActivityIndicator } from 'react-native';
import Frame1 from '../components/Frame1';
import { useState, useEffect, useContext, useLayoutEffect } from 'react';
import { Store } from '../utils/store';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useIsFocused } from '@react-navigation/native';

function FirstScreen() {
  const ContextCreated = useContext(Store);
  const { data, setHeaderDisplayData } = ContextCreated;
  const [showLoader, setShowloader] = useState(true);

  const newD = ContextCreated.setHeaderDisplayData;
  const focused = useIsFocused();

  if (focused) {
    newD('Product Categories');
  }

  if (data.length === 0) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color={'black'} />
        <Text style={{ marginTop: 10, fontWeight: 'bold' }}>
          Fetching Data...
        </Text>
        <Text style={{ textAlign: 'center', marginTop: 20 , marginHorizontal:10 }}>
          Note : If loader is ON for more than a minute, then API is not returning
          data...
        </Text>
      </View>
    );
  }

  return (
    <View>
      <Frame1 Retrieveddata={data} />
    </View>
  );
}

export default FirstScreen;
