import { useEffect, useState } from 'react';
import './App.css';
import { Markets } from './models';
import { DataStoreService } from './services';
import { MainFrame } from "./ui-components";

function App() {
  const [markets, setMarkets] = useState([]);
  useEffect(() => {
    const markets = DataStoreService.get(Markets);
    setMarkets(markets);
  }, []);

  return (
    <div className="App">
      <MainFrame />
    </div>
  );
}

export default App;
