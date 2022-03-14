import './App.css';
import FormControl from './Components/formControl';
import Navbar from './Components/Navbar';
import QuotesCard from './Components/QuotesCard';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <FormControl/>
      <QuotesCard />
    </div>
  );
}

export default App;
