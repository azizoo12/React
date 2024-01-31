import './App.css';
import Navbar from './components/Navbar';
import Card1 from './components/Cards';
import Card2 from './components/Card2';
import Card3 from './components/Card3';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
     <Navbar/>
     <div className="cards">
       <Card1/>
       <Card2/>
       <Card3/>
     </div>

    </div>
  );
}

export default App;
