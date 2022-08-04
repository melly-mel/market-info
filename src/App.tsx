import './App.css';
import '@aws-amplify/ui-react/styles.css';
import { MarketSelectionField, InsuranceSelectionField, PlansAcceptedField } from './components';
import { Divider, View } from '@aws-amplify/ui-react';

function App() {
  return (
    <View className="app">
      <View className="section-container">
        <MarketSelectionField />
        <InsuranceSelectionField />
        <PlansAcceptedField />
      </View>
      <Divider orientation="horizontal" />
    </View>
  );
}

export default App;
