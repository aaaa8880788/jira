import React, { memo, useState } from 'react'

const searchPanel = memo(() => {
  const [param,setParam] = useState<Param>({
    name:'',
    personId:'',
  })
  const [user,setUser] = useState<User[]>([])
  return (
    <form>
      <div>
        <input type="text" value={param.name} onChange={e=>setParam({
          ...param,
          name:e.target.value
        })} />
        <select value={param.personId} onChange={e=> setParam({
          ...param,
          personId:e.target.value
        })}>
          <option value={''}>负责人</option>
          {
            user.map(user=> <option value={user.id}>{user.name}</option>)
          }
        </select>
      </div>
    </form>
  )
})

export default searchPanel

interface Param{
  name:string
  personId:string
}

interface User{
  name:string
  id:number
}

