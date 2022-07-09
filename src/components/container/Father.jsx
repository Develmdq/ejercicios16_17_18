import {useState} from 'react'
import Child from '../pure/Child'

const Father = () => {
  const [name, setName] = useState('Eduardo')
/* Function mandada a llamar desde el hijo */
const showMessage=(text)=> alert(`Message received: ${text}`)

  const updateName = (newName) => setName(newName);

  return (
    <div style={{ background: 'tomato', padding: '10px' }}>
      <Child name={name} send={showMessage} update={updateName} />
    </div>
  )
}

export default Father
