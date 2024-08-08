import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Pressable,
  Modal,
  FlatList,
  TextInput,
  Platform,
  Button,
} from 'react-native';
import { useState, useEffect, useContext } from 'react';
import HalfHeader from './HaalfHeader';
import { Store } from '../utils/store';

import { useNavigation, useRoute } from '@react-navigation/native';
import AntDesign from '@expo/vector-icons/AntDesign';
import ModalComponet from './ModalComponent';
import ModalFilterTextComp from './ModalFilterTextComp';
import Ionicons from '@expo/vector-icons/Ionicons';

function Header({ HeaderDisplayData }) {
  const [sugeestionList, setsugeestionList] = useState([]);

  const [serachText, setSearchText] = useState('');
  const { width } = Dimensions.get('window');
  const navigation = useNavigation();
  const [showSearchBar, setshowSearchBar] = useState(false);
  const CreatedContext = useContext(Store);
  const { setModalOpenState, modalOpenState } = CreatedContext;
  const [modalOpenstatus, setModalVisible] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);

  const data = CreatedContext.data;

  function handleSearchIconClick() {
    setshowSearchBar(true);
    setModalOpen(true);
  }
  function handleSearchBackButtonClick() {
    setshowSearchBar(false);
  }

  return (
    <View style={styles.container}>
      {showSearchBar ? (
        <ModalComponet
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          setshowSearchBar={setshowSearchBar}
        />
      ) : (
        <HalfHeader HeaderDisplayData={HeaderDisplayData} />
      )}

      <View
        style={{
          justifyContent: 'center',
          alignContent: 'flex-end',
          marginRight: 35,
        }}>
        <Pressable
          onPress={handleSearchIconClick}
          style={({ pressed }) => {
            return pressed && { opacity: 0.7 };
          }}>
          <AntDesign name="search1" size={24} color="black" />
        </Pressable>
      </View>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  container: {
    //  marginTop: 20,
    height: 70,
    backgroundColor: 'white',
    width: '100%',
    shadowColor: 'black',
    shadowOffset: { height: 5, width: 5 },
    elevation: 5,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
