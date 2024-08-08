import {
  View,
  FlatList,
  Modal,
  TextInput,
  Pressable,
  Platform,
  Button,
} from 'react-native';
import ModalFilterTextComp from './ModalFilterTextComp';
import { useState, useContext } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Store } from '../utils/store';

function ModalComponet({ modalOpen, setModalOpen, setshowSearchBar }) {
  const [modalOpenstatus, setModalVisible] = useState(false);
  const [sugeestionList, setsugeestionList] = useState([]);
  const [serachText, setSearchText] = useState('');

  const ContextCreated = useContext(Store);
  const data = ContextCreated.data;
  return (
    <Modal visible={modalOpen}>
      <View></View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: Platform.OS === 'ios' ? 35 : 0,
        }}>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
            marginHorizontal: 26,
          }}>
          <Pressable
            onPress={() => {
              setModalOpen(false);
              setshowSearchBar(false);
            }}
            style={({ pressed }) => {
              return [
                { justifyContent: 'center' },
                pressed && { justifyContent: 'center', opacity: 0.7 },
              ];
            }}>
            <Ionicons name="arrow-back-outline" size={24} color="grey" />
          </Pressable>
          <TextInput
            placeholder="Search products..."
            style={{
              height: '100%',
              borderWidth: 2,
              width: '85%',
              padding: 5,
              marginLeft: 5,
              borderRadius: 20,
            }}
            value={serachText}
            onChangeText={(enteredText) => {
              setSearchText(enteredText);
              data.filter((el) => {
                if (el.title.includes(enteredText)) {
                  setsugeestionList((prevData) => [el, ...prevData]);
                }
              });
            }}
          />
        </View>
      </View>
      <View>
        {sugeestionList.length === 0 || serachText.length == 0 ? (
          <FlatList
            data={data}
            horizontal={true}
            contentContainerStyle={{
              flexDirection: 'column',
              flexWrap: 'wrap',
              height: '60%',
            }}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => {
              return (
                <ModalFilterTextComp
                  props={item}
                  setModalOpen={setModalOpen}
                  setshowSearchBar={setshowSearchBar}
                />
              );
            }}
          />
        ) : (
          <FlatList
            data={sugeestionList}
            renderItem={({ item }) => {
              return (
                <ModalFilterTextComp
                  props={item}
                  setModalOpen={setModalOpen}
                  setshowSearchBar={setshowSearchBar}
                />
              );
            }}
          />
        )}
      </View>
    </Modal>
  );
}
export default ModalComponet;
