import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Login";
import Dashoard from "./Dashboard";

const code = new URLSearchParams(window.location.search).get("code");

function App() {
  return code ? <Dashoard code={code} /> : <Login />;
}

export default App;
