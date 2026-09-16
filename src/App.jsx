import Bienvenida from "./components/Bienvenida.jsx";
import Cabecera from "./components/Cabecera.jsx";
import TarjetaActividad from "./components/TarjetaActividad.jsx";
import Navegacion from "./components/Navegacion";
import PiePagina from "./components/PiePagina.jsx";

function App() {
  return (
    <>
      <Cabecera />
      <Navegacion />
       <main className="container py-4">
        <Bienvenida />
        <div className="row g-4">
          <div className="col-12 col-md-6 col-lg-4">
            <TarjetaActividad />
          </div>
        </div>
      </main>
      <PiePagina />
    </>
  );
}

export default App;