import logo from './logo.svg';
import './App.css';
import DayCellComponent from "./DayCellComponent";
import CalendarComponent from "./CalendarComponent";

function App() {
  return (
    <div className="App">
      <CalendarComponent month={8} year={2022} />
    </div>
  );
}

export default App;
