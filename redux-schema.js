// Auth user only

{
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
        avatar
      }
    }
  },
  modal: {
    duck,
    isOpen
  },
  ducks: {
    isFetching,
    error,
    [duckId]: {
      lastUpdated,
      info: {
        avatar,
        duckId,
        name,
        text,
        timestamp,
        uid
      }
    }
  },
  usersDucks: {
    isFetching,
    error,
    [uid]: {
      lastUpdated,
      duckIds: [duckId]
    }
  },
  likeCount: {
    [duckId]: 0
  },
  usersLikes: {
    [duckId]: true
  },
  replies: {
    isFetching,
    error,
    [duckId]: {
      lastUpdated,
      replies: {
        [replyId]: {
          name
          comment
          uid
          timestamp
          avatar
        }
      }
    }
  },
  listener: {
    [listenersId]: true
  },
  feed: {
    isFetching,
    error,
    newDucksAvailable,
    duckIdsToAdd: [duckId],
    duckIds: [duckId]
  }
}

