import { useState } from 'react';
import classes from './App.module.css'
import Counter from './day1/components/counterGame';
function App() {

  const [loading, setLoading] = useState(true);

  setTimeout( () => setLoading(false),1000)

  return (
    <div className={classes.box}>
      {loading ? (
        <h1 className={classes.h1}>Hello</h1>
      ) : (
        <Counter/>
      )}
      
    </div>
  )
}

export default App
