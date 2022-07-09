import {useState} from 'react'

const initialCredentials = [
  {
    user: "",   
    password: "",
  },
];
const LoginForm = () => {
  const [credentials, setCredentials] = useState(initialCredentials);
  return (
    <>

    </>
  )
}

export default LoginForm
