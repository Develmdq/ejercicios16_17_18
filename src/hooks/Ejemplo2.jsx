import { useEffect, useRef, useState } from "react";

const Ejemplo2 = () => {
  const [contador1, setContador1] = useState(0);
  const [contador2, setContador2] = useState(0);

  //Referencia con useRef
  const miRef = useRef();

  const increm1 = () => setContador1(contador1 + 1);
  const increm2 = () => setContador2(contador2 + 1);

  //useEffect caso 1: siempre se ejecuta
  // useEffect(() => {
  //   console.log("Cambio de estado");
  //   console.log(miRef.current);
  // });

  //useEffect caso 2: solo se ejecuta cuando cambia el contador 1
  useEffect(() => {
    console.log("Cambio de estado solo en el contador1");
    console.log(miRef.current);
  }, [contador1]);

  return (
    <>
      <hr style={{ width: "95%" }} />
      <h2>UseEffect y UseRef</h2>
      <div>
        <span>Contador 1 = {contador1}</span>&nbsp;&nbsp;
        <span>Contador 2 = {contador2}</span>
      </div>
      <h4 ref={miRef}>Elemento referenciado</h4>
      <div>
        <span>
          <button onClick={increm1}>Contador 1</button>
        </span>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span>
          <button onClick={increm2}>Contador 2</button>
        </span>
      </div>
    </>
  );
};

export default Ejemplo2;
