import './App.css';
import Heading from './Heading';
import MetalMeta from './MetalMeta';
import BandsList from './BandsList'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Heading />
        <MetalMeta />
      </header>

      <div>
        <BandsList />
      </div>
      
    </div>
  );
}

export default App;
