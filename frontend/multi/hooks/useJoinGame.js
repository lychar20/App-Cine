import {SocketEvents} from '../types/SocketEvents';
import socket from "../../../frontend/socket/index"

export default function useJoinGame({navigation}) {
    c
  
    const handleJoinGame = room => {
      socket.emit(SocketEvents.JOIN_ROOM, room)
  
      navigation.navigate('') /{
      
      }
    }
  
    return handleJoinGame
  }