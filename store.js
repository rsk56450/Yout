import { useContext, createContext, useState, useEffect } from 'react';
import {
  Modal,
  Text,
  View,
  Pressable,
  TextInput,
  SafeAreaView,
  StatusBar,
  Platform,
  FlatList,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Header from '../components/Header';
import ModalFilterTextComp from '../components/ModalFilterTextComp';

export const Store = createContext({
  data: [],
  setHeaderDisplayData: (data) => {},
  HeaderDisplayDataText: '',
  modalOpenState: false,
  setModalOpenState: (data) => {},
});

function ContextProvider({ children }) {
  const [data, setData] = useState([]);
  const [HeaderText, setHeaderText] = useState('');
  const [modalOpenstatus, setModalVisible] = useState(false);
 
  useEffect(() => {
    async function fetchData() {
      const resp = await fetch('https://fakestoreapi.com/products/');
      
      let Retrieveddata = await resp.json();
     
      setData(Retrieveddata);
    }
    fetchData();
  }, []);

  function setHeaderDisplayData(data) {
    setHeaderText(data);
  }

  function setModalStatus() {
    setModalVisible(true);
  }

  const value = {
    data: data,
    HeaderDisplayDataText: HeaderText,
    setHeaderDisplayData: setHeaderDisplayData,
    modalOpenState: modalOpenstatus,
    setModalOpenState: setModalStatus,
  };

  
  return <Store.Provider value={value}>{children}</Store.Provider>;
}

export default ContextProvider;
