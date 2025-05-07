import { View, StyleSheet, Text } from 'react-native'
import React from 'react'
import {colorList} from '../../constants/colors';
import {useJoinGame, useRoomListener} from '../../hooks/index';
import {RoomItem, NoActiveGames} from './index';
import { ActiveGamesHeader } from '../hearders/index';

export default function ActiveRooms() {
    const { activeRooms, loading } = useRoomListener()
    const handleJoinGame = useJoinGame()
  
    return (
      <View style={styles.container}>
        {loading ? (
          <ActivityIndicator size="large" color={colorList.vibrantCyan} />
        ) : (
          <FlatList
            data={activeRooms}
            renderItem={({ item }) => (
              <RoomItem room={item} handleJoinGame={handleJoinGame} />
            )}
            ListHeaderComponent={<ActiveGamesHeader />}
            ListEmptyComponent={<NoActiveGames />}
          />
        )}
      </View>
    )
  }

const styles = StyleSheet.create({
    container: {
      marginHorizontal: 20,
    },
  });