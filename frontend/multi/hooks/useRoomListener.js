import { useEffect, useState } from "react"
import socket from "../../../frontend/socket/index"
import { SocketEvents } from "../types/SocketEvents"
import { Alert } from "react-native"

export default function useRoomListener() {
  const [activeRooms, setActiveRooms] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchActiveRooms = async () => {
      try {
        setLoading(true)
        const rooms = await SocketService.fetchActiveRooms()

        setActiveRooms(rooms)
      } catch (err) {
        Alert.alert("Erreur", "Impossible de trouver des salles, veuillez réessayer.", [
          { text: "Réessayer", onPress: () => fetchActiveRooms() },
          { text: "Annuler", style: "cancel" }
        ])
      } finally {
        setLoading(false)
      }
    }

    // prevent race condition
    const timer = setTimeout(fetchActiveRooms, 1000)

    // Clean up the timer when the component unmounts
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleNewRoom = data => {
      setActiveRooms(previousRooms => {
        const uniqueRooms = new Set(previousRooms)

        uniqueRooms.add(data)

        // Convert the Set back to an array for React state
        return Array.from(uniqueRooms)
      })
    }

    const handleRoomDeletion = roomID => {
      setActiveRooms(prev => {
        const updatedRooms = prev.filter(room => room.roomId !== roomID)
        return updatedRooms
      })
    }

    socket.on(SocketEvents.NEW_ROOM_AVAILABLE, handleNewRoom)
    socket.on(SocketEvents.ROOM_DELETED, handleRoomDeletion)

    return () => {
      socket.off(SocketEvents.NEW_ROOM_AVAILABLE, handleNewRoom)
      socket.off(SocketEvents.ROOM_DELETED, handleRoomDeletion)
    }
  }, [])

  return { activeRooms, loading }
}