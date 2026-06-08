import { View, StyleSheet, Text } from 'react-native'
import React from 'react'
import {colorList} from '../../constants/colors';
import {CreateNewGameButton } from '../lobby/index';

export default function LobbyScreenHeader ({ navigation }) {
    return (
        <View style={styles.joinGameRow}>
          <View style={styles.flexOne}>
            <Text style={styles.activeRoomsTitle}>Join a game</Text>
          </View>
          <View style={styles.flexOne}>
            <CreateNewGameButton navigation={navigation} />
          </View>
        </View>
      );
}


const styles = StyleSheet.create({
    joinGameRow: {
      flexDirection: 'row',
     borderBottomColor: colorList.vibrantCyan,
      borderBottomWidth: 2,
      paddingBottom: 10,
      marginBottom: 10,
    },
    flexOne: {
      flex: 1,
    },
    activeRoomsTitle: {
     color: colorList.white,
      textAlign: 'center',
      marginLeft: 20,
      marginVertical: 20,
      fontWeight: '400',
      fontSize: 25,
    },
  });