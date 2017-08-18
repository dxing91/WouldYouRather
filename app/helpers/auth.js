export default function auth() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: 'Dom',
        uid: '123'
      })
    }, 2000)
  })
}
