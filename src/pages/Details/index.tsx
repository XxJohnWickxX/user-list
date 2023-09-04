import {
  ActivityIndicator,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import Clipboard from '@react-native-clipboard/clipboard';
import {Avatar, TextCustom} from '../../atoms';

interface DetailsScreenProps {
  route: {params: {id: number}};
}

const Deatils: React.FC<DetailsScreenProps> = ({route}) => {
  const [data, setData] = useState<any>(null);
  const {id} = route.params;

  const handlePress = () => {
    Clipboard.setString(data.data.email);
    alert('Email copiado');
  };

  useFocusEffect(
    useCallback(() => {
      const fetchData = async () => {
        try {
          const apiUrl = `https://reqres.in/api/users/${id}`;
          const response = await fetch(apiUrl);

          if (response.ok) {
            const jsonData = await response.json();
            setData(jsonData);
          }
        } catch (error) {
          console.error('Error al realizar la solicitud', error);
        }
      };
      fetchData();
    }, [id]),
  );

  return data === null ? (
    <ActivityIndicator />
  ) : (
    <View>
      <View style={styles.content}>
        <Avatar source={data.data.avatar} size={100} />
        <TextCustom
          text={`${data.data.first_name} ${data.data.last_name}`}
          baseFontSize={20}
          textStyles={styles.title}
        />
      </View>
      <TextCustom text="Email" baseFontSize={18} textStyles={styles.title} />
      <TouchableOpacity onPress={handlePress}>
        <TextCustom
          selectable
          text={data.data.email}
          baseFontSize={14}
          textStyles={styles.text}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Deatils;

const styles = StyleSheet.create({
  content: {
    paddingVertical: '8%',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#666666',
    paddingTop: '3%',
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#666666',
  },
});
