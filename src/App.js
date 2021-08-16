import './App.css';
import Header from '../src/components/Header/Header'
import Card from '../src/pages/Card'
import Footer from './components/Footer/Footer';



function App() {
  return (
    <div className="container">
    <div>
     <Header/>
     <Card/>
      <Footer/>
    </div>
    </div>
  );
}

export default App;
