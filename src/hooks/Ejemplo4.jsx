

const Ejemplo4 = (props) => {
  return (
    <>
      <h2> Ejemplo de Props Children</h2>
      <h3>Nombre: {props.nombre} </h3>
      {props.children}
    </>
  );
}

export default Ejemplo4
