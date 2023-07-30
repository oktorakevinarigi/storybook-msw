import {useEffect, useState} from 'react'
import {ENV} from '../../constants'

export function UserList() {
  const [users, setUsers] = useState([])

  async function getUserList() {
    const res = await fetch(ENV.API + '/todos')
    const data = await res.json()
    console.log(data)
    setUsers(data)
  }

  useEffect(() => {
    getUserList()
  }, [])

  return (
    <div>
      <p>User List</p>
      {users.map((user: {id: number; title: string}) => (
        <p key={user.id}>{user.title}</p>
      ))}
    </div>
  )
}
