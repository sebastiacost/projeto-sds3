import DataTable from "components/DataTable";
import Fooster from "components/Fooster";
import NavBar from "components/NavBar"

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary">Olá, Mundo!</h1>

        <DataTable/>
      </div>
      <Fooster/>
    </>
  );
}

export default App;
