import { Text , Modal , View , Pressable , TextInput , FlatList , Image} from 'react-native';
import { useNavigation , useRoute , isFocused} from '@react-navigation/native';
import {useLayoutEffect , useContext , useState} from 'react';
import { Store } from '../utils/store';
import { useIsFocused } from '@react-navigation/native';
import ModalFilterTextComp from '../components/ModalFilterTextComp'
import Ionicons from '@expo/vector-icons/Ionicons';

function BottomTabScreen1() {
   const ContextCreated = useContext(Store);
  
  const newD = ContextCreated.setHeaderDisplayData;

 
const foucsed = useIsFocused();
useLayoutEffect(()=>{
if(foucsed){
   newD("Orders")
}
})



 return (
      <View style={{flex : 1 , justifyContent:'center' , alignItems:'center'}}>
      <Image
        source={require('../assets/man-receiving-canceled-orders-back-4438793-3718471.png')}
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
export default BottomTabScreen1;
