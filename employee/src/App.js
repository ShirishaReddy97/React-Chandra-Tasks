import './App.css';
import CreateEmployee from './components/CreateEmployee';
import ListEmployee from './components/ListEmployee';

function App() {
  return (
    <div className="App">
      <ListEmployee/>
      <CreateEmployee/>
    </div>
  );
}
export default App;
