import { useState } from "react";

const personaInicial = {
  nombre: "Eduardo",
  email: "eduardo@email.com",
};
const Ejemplo1 = () => {
  const [contador, setContador] = useState(0);
  const [persona, setPersona] = useState(personaInicial);

  /**
   * Actualiza el estado del contador
   */

  const modificaContador = (action) => {
    switch (action) {
      case "add":
        setContador(contador+1);
        break;
      case "substract":
        setContador(contador-1);
        break;
      default:
        setContador(0);
        break;
    }
  };

  /**
   * Actualiza el estado de persona
   */

  const actualizaPersona = () => {
    setPersona(
      {
        nombre: ' Eledu',
        email:'eledu@rmail.com'
    }
  )
}

  return (
    <>
      <h2>useState</h2>
      <h3>Número: {contador}</h3>
      <div>
        <span>
          <button onClick={() => modificaContador("add")}>Incrementa</button>
        </span>
        <span>
          <button onClick={() => modificaContador("substract")}>
            Decrementa
          </button>
        </span>
        <span>
          <button onClick={() => modificaContador()}>Restablecer</button>
        </span>
      </div>
      <hr style={{ width: "95%" }} />
      <h3>Persona:</h3>
      <p>{`Nombre: ${persona.nombre}, Email: ${persona.email}`}</p>
      <button onClick={actualizaPersona}>Cambiar persona</button>
    </>
  );
};

export default Ejemplo1;
