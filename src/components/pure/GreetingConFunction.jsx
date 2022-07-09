import {useState} from 'react'
import PropTypes from 'prop-types';

const initialState = 29
const GreetingConFunction = ({ name }) => {
  const [age, setAge] = useState(initialState);
  const birthday = ()=> setAge(age+1)
  return (
    <div>
      <h1>Hola {name} desde componente funcional</h1>
      <h2>Tu edad es de {age} años</h2>
      <div>
        <button onClick={birthday}>Cumplir años</button>
      </div>
    </div>
  );
};

GreetingConFunction.propTypes = {
  name: PropTypes.string,
};

export default GreetingConFunction;
