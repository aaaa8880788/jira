import React, { memo } from 'react'
import List from './list'
import SearchPanel from './searchPanel'
const index = memo(() => {
  return (
    <div>
        <List></List>
        <SearchPanel></SearchPanel>
    </div>
  )
})

export default index