// Redux schema (mind map) - - this is not really a code. More like a sketch to demo the data structure.
//
// - 1st level properties are defined by the reducer files stored in app/redux/modules
//   e.g. users is defined by the users.js reducer file
//   e.g. modal is defined by the modal.js reducer file
//
// - 2nd level (and further down) are sub properties of the 1st level object.
//   (Use the Google Chrome Redux extension to visualise the redux schema at each state).

let reduxSchema = {

  //users
  users: {
    isAuthed,
    isFetching,
    error,
    authedId,
    [uid]: {
      lastUpdated,
      info: {
        name,
        uid,
        avatar,
      }
    }
  },

  //modal
  modal: {
    duckText,
    isOpen,
  },

  //ducks
  ducks: {
    [duckId]: {
      lastUpdated,
      info: {
        avatar,
        duckId,
        name,
        text,
        timestamp,
        uid,
      }
    }
  },

  //likeCount
  likeCount: {
    [duckId]: 0
  },

  //usersDucks
  usersDucks: {
    isFetching,
    error,
    [uid]: {
      lastUpdated,
      duckIds: [duckId, duckId, duckId]
    }
  },

  //usersLikes
  usersLikes: {
    duckid: true,
  },

  //feed
  feed: {
    isFetching,
    error,
    newDucksAvailable,
    duckIdsToAdd: [duckId, duckId],
    duckIds: [duckid, duckId, duckId]
  },

  //replies
  replies: {
    isFetching,
    error,
    [duckId]: {
      lastUpdated,
      replies: {
        [replyId]: {
          name,
          reply,
          uid,
          timestamp,
          avatar
        }
      }
    }
  },

  //listeners
  listeners: {
    [listenerId]: true
  }

}