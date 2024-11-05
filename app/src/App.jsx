import "./app.css";
import Slider from "./components/Slider";
import Socket from "./components/Socket";

function App() {
  return (
    <Socket>
      <div className="app">
        <Slider />
      </div>
    </Socket>
  );
}

export default App;
