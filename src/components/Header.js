import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  Linking,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ICMail from '../assets/icons/ic-inbox.svg';
import ICMenu from '../assets/icons/ic-drawer.svg';
import COLORS from '../contants/theme';

export default function Header() {
  const [text, setText] = React.useState('Useless Text');
  const navigation = useNavigation();

  // function onchange value input search
  const onChangeText = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.groupHeader}>
        <View style={styles.menu}>
          <Icon name="place" color={COLORS.blue} size={24} />

          <Text style={styles.title} numberOfLines={1}>
            31 Lê Duẩn
          </Text>
        </View>

        <View style={styles.menu}>
          <TouchableWithoutFeedback
            onPress={() => Linking.openURL('mailto:support@example.com')}>
            <ICMail width={23} height={17} style={styles.iconLeft}/>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={() => navigation.openDrawer()}>
            <ICMenu width={20} height={16} />
          </TouchableWithoutFeedback>
        </View>
      </View>

      <View style={styles.groupSearch}>
        <TouchableWithoutFeedback onPress={() => alert('press icon search')}>
          <Icon name="search" color={COLORS.textInput} size={25} />
        </TouchableWithoutFeedback>

        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          placeholder="Search for a restaurant or menu"
          placeholderTextColor={COLORS.textInput}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: COLORS.colorBorder,
    backgroundColor: COLORS.white,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 2,
  },
  groupHeader: {
    paddingBottom: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menu: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconLeft: {
    marginRight: 26,
  },
  groupSearch: {
    position: 'relative',
    backgroundColor: COLORS.bg,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    marginTop: 10,
    paddingHorizontal: 15,
  },
  input: {
    height: 42,
    borderWidth: 0,
    padding: 10,
    maxWidth: 250
  },
  search: {
    width: 25,
    height: 25,
    marginRight: 5,
  },
});
