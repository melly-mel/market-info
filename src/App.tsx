import './App.css';
import '@aws-amplify/ui-react/styles.css';
import { InsuranceSection, PracticeSection, ProviderSection } from './components';
import { Divider, View } from '@aws-amplify/ui-react';
import { setSelectedId } from './components/base/actions';
import { useMarketReducer } from './components/InsuranceSection/hooks';
import { usePracticeReducer } from './components/PracticeSection/hooks';

function App() {
  const [marketState, dispatchMarketAction] = useMarketReducer();
  const onMarketChange = (marketId: string) => {
    setSelectedId(dispatchMarketAction, marketId);
  }
  const [practices, dispatchPracticeAction] = usePracticeReducer(marketState.selectedId);
  const onPracticeChange = (practiceId: string) => {
    setSelectedId(dispatchPracticeAction, practiceId);
  }
  return (
    <View className="app">
      <View className="section-container">
        <InsuranceSection markets={marketState} onMarketChange={onMarketChange} />
      </View>
      <Divider orientation="horizontal" />
      <View className="section-container">
        <PracticeSection practices={practices} onPracticeChange={onPracticeChange} />
      </View>
      <Divider orientation="horizontal" />
      <View className="section-container">
        <ProviderSection selectedPractice={practices.selectedId} />
      </View>
    </View>
  );
}

export default App;
