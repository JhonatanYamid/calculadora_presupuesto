import { useState, useEffect } from "react";
import ControlPresupuesto from "./components/ControlPresupuesto";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";
import Pregunta from "./components/Pregunta";

function App() {

  //Definir el state
  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);
  const [mostrarpregunta, actualizarPregunta] = useState(true);
  const [gastos, guardarGastos] = useState([]);
  const [gasto, guardarGasto] = useState({});
  const [crearGasto, guardarCrearGasto] = useState(false);

  //useEffect actualiza restante

  useEffect(() => {
    if (crearGasto) {
      //Agrega presupuesto
      guardarGastos([
        ...gastos,
        gasto
      ])

      //Agrega presupuesto

      //Restar presupuesto

      const presupuestoRestante = restante - gasto.cantidad;
      guardarRestante(presupuestoRestante);

      //Resetea a false
      guardarCrearGasto(false)
    }
  }, [gasto, crearGasto, gastos, restante])



  return (
    <div className="container">
      <header>
        <h1>Gasto semanal</h1>
        <div className="contenido-principal contenido">
          {mostrarpregunta ? (
            <Pregunta
              guardarPresupuesto={guardarPresupuesto}
              guardarRestante={guardarRestante}
              actualizarPregunta={actualizarPregunta}
            />
          ) :
            <div className="row">
              <div className="one-half column">
                <Formulario
                  guardarGasto={guardarGasto}
                  guardarCrearGasto={guardarCrearGasto}
                /></div>
              <div className="one-half column">
                <Listado
                  gastos={gastos}
                />
                <ControlPresupuesto
                  presupuesto={presupuesto}
                  restante={restante}

                />
              </div>
            </div>
          }
        </div>
      </header>
    </div>
  );
}

export default App;
