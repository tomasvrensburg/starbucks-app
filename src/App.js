import './App.css';
import Navigation from "./components/Navigation";
import MainContent from "./components/MainContent";

function App() {
  return (
    <div className="App">
      <Navigation />
      <MainContent disclaimer="Reference to the original source for comparison: "/>
    </div>
  );
}

export default App;
