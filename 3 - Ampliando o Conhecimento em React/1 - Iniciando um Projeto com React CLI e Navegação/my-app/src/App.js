//4 - Reaproveitando a estrutura
import {Outlet} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <p>Navbar</p>
      <Outlet/>
      <p>Footer</p>
    </div>
  );
}

export default App;
