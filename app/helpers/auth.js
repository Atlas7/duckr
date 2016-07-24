export default function auth () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: 'Johnny',
        avatar: 'https://avatars1.githubusercontent.com/u/11135428?v=3&s=460',
        uid: 'atlas7'
      })
    }, 2000)
  })
}

export function checkIfAuthed (store) {
  // Ignore Firebase for now
  return store.getState().isAuthed
}