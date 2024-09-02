import { useState } from 'react'
import { TestComponent } from './TestComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        React Learning
        </div>
        <TestComponent></TestComponent>
            </>
  )
}

export default App
