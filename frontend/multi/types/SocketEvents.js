export let SocketEvents

;(function(SocketEvents) {
  SocketEvents["CONNECT"] = "connect"
  SocketEvents["ON_CONNECT"] = "on_connect"
  SocketEvents["LEAVE_ROOM"] = "leave_room"
  SocketEvents["NEW_ROOM_AVAILABLE"] = "new_room_available"
  SocketEvents["ROOM_DELETED"] = "room_deleted"
  SocketEvents["JOIN_ROOM"] = "join_room"
  SocketEvents["OPPONENT_JOINED"] = "opponent_joined"
  SocketEvents["SEND_QUESTIONS"] = "send_questions"
  SocketEvents["RECEIVE_QUESTIONS"] = "receive_questions"
  SocketEvents["CLEAN_UP_QUESTIONS"] = "clean_up_questions"
  SocketEvents["SEND_ANSWER"] = "send_answer"
  SocketEvents["UPDATE_SCORE_AND_STATE"] = "update_score_and_state"
  SocketEvents["OPPONENT_UPDATE_STATE"] = "opponent_update_state"
  SocketEvents["CREATE_ROOM"] = "create_room"
})(SocketEvents || (SocketEvents = {}))