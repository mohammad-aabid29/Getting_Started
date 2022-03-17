import FormControl from "./Components/FormControl";
import "./App.css";
import QuotesCard from "./Components/QuotesCard";
import Navbar from "./Components/Navbar";
import List from "./Components/List";

function App() {
  return (
    <div className="App">
      I am going to make a lot of changes here. Because i want conflicts
      <Navbar />
      <QuotesCard />
      <FormControl />
      <List/>
    </div>
  );
}

export default App;
console.log("Lot of changes made");
