import { useState } from 'react';
import { TabBar } from './components/TabBar';
import { HomeScreen } from './screens/Home';
import { StyleScreen } from './screens/Style';
import { SpotScreen } from './screens/Spot';
import { DiaryScreen } from './screens/Diary';
import { SettingsScreen } from './screens/Settings';

const tabs = [
  { id: 'home', label: 'Home' },
  { id: 'style', label: 'Style' },
  { id: 'spot', label: 'Spot' },
  { id: 'diary', label: 'Diary' },
  { id: 'settings', label: 'My' }
] as const;

export default function App() {
  const [activeTab, setActiveTab] = useState<typeof tabs[number]['id']>('home');

  function renderScreen() {
    switch (activeTab) {
      case 'style':
        return <StyleScreen />;
      case 'spot':
        return <SpotScreen />;
      case 'diary':
        return <DiaryScreen />;
      case 'settings':
        return <SettingsScreen />;
      default:
        return <HomeScreen />;
    }
  }

  return (
    <div className="app-shell">
      <header className="app-header">
        <div>
          <p className="eyebrow">CloseTrip</p>
          <h1>오늘의 여행을 한 흐름으로</h1>
        </div>
      </header>
      <main className="app-content">{renderScreen()}</main>
      <TabBar tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />
    </div>
  );
}
