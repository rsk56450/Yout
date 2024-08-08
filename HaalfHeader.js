import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Pressable,
  ScrollView,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { useContext } from 'react';
import { Store } from '../utils/store';

function HalfHeader({ HeaderDisplayData }) {
  const ContextCreated = useContext(Store);
  HeaderDisplayData = ContextCreated.HeaderDisplayDataText;
  const navigation = useNavigation();

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
      <View style={{ justifyContent: 'center' }}>
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}
          style={({ pressed }) => {
            return pressed && { opacity: 0.7 };
          }}>
          <Ionicons name="arrow-back-outline" size={24} color="black" />
        </Pressable>
      </View>
      <ScrollView>
        <View
          style={{
            justifyContent: 'center',
            marginLeft: 10,
            overflow: 'scroll',
            marginVertical: 5,
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              textAlign: 'left',
              marginBottom: 5,

              width: 200,
            }}>
            {HeaderDisplayData}
          </Text>
          <Text>Select any product to add</Text>
        </View>
      </ScrollView>
    </View>
  );
}

export default HalfHeader;
