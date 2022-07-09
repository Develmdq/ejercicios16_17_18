import { useContext, useState, createContext } from "react";


/**
 * 
 * @returns Componente 1
 * Dispone de un contexto q contiene unvalor q recibe del padre
 */
const miContexto = createContext(null)

const Componente1 = () => {
  const state = useContext(miContexto);
  return (<>
    <h2>El token es: {state.token}</h2>
    <Componente2/>
  </>)
}
const Componente2 = () => {
  const state = useContext(miContexto)
  return (<>
    <h2>
      La sesión es: {state.sesion}
    </h2>
  </>)
}
const ComponenteContexto = () => {
  const estadoInicial = {
    token: '1234567',
    sesion:1
  }
  const [sessionData, setSessionData] = useState(estadoInicial)
  
  const actualizaSesion=()=>{
    setSessionData({
      token: "JWT12345",
      sesion: sessionData.sesion + 1,
    });
  }
  return (
    <>
      <h2>UseContext</h2>
      <miContexto.Provider value={sessionData}>
        {/* Todo lo q esta aca puede leer sessionData */}
        <Componente1 />
        <button onClick={actualizaSesion}>Actualizar Sesión</button>
        
      </miContexto.Provider>
    </>
  );
}
export default ComponenteContexto;
