const users = [
  {id: '1', name: 'Roman', phone: '+4312312312', eMail: 'sasdfasdfasdfasdfasd@gmail.com', country: 'AU', age: '20'},
  {id: '2', name: 'Ivan', phone: '+376222222222', eMail: 'sfasdfasdfa@gmail.list.com', country: 'AU', age: '30'},
  {id: '3', name: 'Alexander', phone: '+97355555555', eMail: 'aaaaaaaaaa@gmail.list.eu', country: 'US', age: '25'},
  {id: '4', name: 'Masha', phone: '+1888888888', eMail: 's@gmail.list.ru', country: 'RU', age: '20'},
  {id: '5', name: 'Grisha', phone: '+3390909090',  eMail: 'ssdsds@gmail.ru', country: 'US', age: '30'},
  {id: '6', name: 'Pety', phone: '+377000000000', eMail: 'sjjjj@gmail.io', country: 'US', age: '25'},
]

export function updateUser(updatedUser) {
  const idx = users.findIndex(user => user.id === updatedUser.id)
  if (idx !== -1) {
    users[idx] = updatedUser
  }
  return Promise.resolve(users)
}

export function deleteUser(userId) {
  const idx = users.findIndex(user => user.id === userId)
  if (idx !== -1) {
    users.splice(idx, 1)
  }
  return Promise.resolve(users)
}

export function getUsers() {
  return Promise.resolve(users)
}