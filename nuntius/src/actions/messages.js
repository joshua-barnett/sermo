export const MESSAGE_SEND = 'MESSAGE_SEND'
export const MESSAGE_SENT = 'MESSAGE_SENT'
export const MESSAGE_RECEIVED = 'MESSAGE_RECEIVED'
export const MESSAGE_REMOVE_LAST = 'MESSAGE_REMOVE_LAST'

export const sendMessage = (socket, content, metadata = {}) => {
  return dispatch => {
    dispatch({
      type: MESSAGE_SEND,
      content,
      metadata
    })
    socket.emit('message', { content, metadata }, data => {
      dispatch({
        type: MESSAGE_SENT
      })
    })
  }
}

export const receiveMessage = socket => {
  return dispatch => {
    socket.on('message', data => {
      dispatch({
        ...data,
        type: MESSAGE_RECEIVED
      })
    })
  }
}

export const removeLastMessage = args => {
  return dispatch => {
    dispatch({
      ...args,
      type: MESSAGE_REMOVE_LAST
    })
  }
}
