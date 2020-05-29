import React, { useState } from 'react'
import styles from './app.scss'
const App = () => {
  let [count, setCount] = useState<number>(1)
  return (
    <div className={styles.wrap} onClick={()=>setCount(count++)}>{count}</div>
  )
}

export default App