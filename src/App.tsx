import './App.css';
import '@aws-amplify/ui-react/styles.css';
import { InsuranceSection, PracticeSection, ProviderSection } from './components';
import { Divider, View } from '@aws-amplify/ui-react';

function App() {
  return (
    <View className="app">
      <View className="section-container">
        <InsuranceSection />
      </View>
      <Divider orientation="horizontal" />
      <View className="section-container">
        <PracticeSection />
      </View>
      <Divider orientation="horizontal" />
      <View className="section-container">
        <ProviderSection />
      </View>
    </View>
  );
}

export default App;
