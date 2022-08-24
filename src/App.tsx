import './App.css';
import '@aws-amplify/ui-react/styles.css';
import { InsuranceSection, PracticeSection, ProviderSection } from './components';
import { Divider, View } from '@aws-amplify/ui-react';
import { setSelectedId } from './components/base/actions';
import { useMarketReducer } from './components/InsuranceSection/hooks';

function App() {
  const [marketState, dispatchMarketAction] = useMarketReducer();
  const onMarketChange = (marketId: string) => {
    setSelectedId(dispatchMarketAction, marketId)
  }
  return (
    <View className="app">
      <View className="section-container">
        <InsuranceSection markets={marketState} onMarketChange={onMarketChange} />
      </View>
      <Divider orientation="horizontal" />
      <View className="section-container">
        <PracticeSection selectedMarket={marketState.selectedId}/>
      </View>
      <Divider orientation="horizontal" />
      <View className="section-container">
        <ProviderSection />
      </View>
    </View>
  );
}

export default App;
