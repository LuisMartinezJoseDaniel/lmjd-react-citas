import { useState, useEffect } from "react";

import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";
function App() {
  const pacientesLS = JSON.parse(localStorage.getItem("pacientes")) ?? [];
  const [pacientes, setPacientes] = useState(pacientesLS);
  const [paciente, setPaciente] = useState({});
  const [isUpdated, setIsUpdated] = useState(0);

  useEffect(() => {
    //Para utilizar localStorage es necesario convertir a string
    localStorage.setItem('pacientes', JSON.stringify(pacientes))

  }, [pacientes]);
  
  
  const eliminarPaciente = (id) => { 
    //filter crea un arreglo nuevo, todos los pacientes que no tengan el id proporcionado
    const pacientesActualizados = pacientes.filter(paciente => paciente.id!=id);
    setPacientes(pacientesActualizados);
  }




  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
          setIsUpdated={setIsUpdated}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
          isUpdated={isUpdated}
        />
      </div>
    </div>
  );
}

export default App;
