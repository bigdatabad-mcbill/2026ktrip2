import { useState } from 'react';
import { TabBar } from './components/TabBar';
import { HomeScreen } from './screens/Home';
import { StyleScreen } from './screens/Style';
import { SpotScreen } from './screens/Spot';
import { DiaryScreen } from './screens/Diary';
import { SettingsScreen } from './screens/Settings';
import { Onboarding } from './screens/Onboarding';
import { Locale, translations } from './i18n';

const tabIds = ['home', 'style', 'spot', 'diary', 'settings'] as const;

type TabId = typeof tabIds[number];

export default function App() {
  const [activeTab, setActiveTab] = useState<TabId>('home');
  const [locale, setLocale] = useState<Locale>('ko');
  const [onboardingComplete, setOnboardingComplete] = useState(false);
  const t = translations[locale];

  if (!onboardingComplete) {
    return (
      <div className="app-shell">
        <main className="app-content">
          <Onboarding
            locale={locale}
            onChangeLocale={setLocale}
            onComplete={() => setOnboardingComplete(true)}
          />
        </main>
      </div>
    );
  }

  const tabs = tabIds.map((id) => ({
    id,
    label: t.tabs[id]
  }));

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
        return <HomeScreen t={t} />;
    }
  }

  return (
    <div className="app-shell">
      <header className="app-header">
        <div>
          <p className="eyebrow">{t.eyebrow}</p>
          <h1>{t.appTitle}</h1>
        </div>
      </header>
      <main className="app-content">{renderScreen()}</main>
      <TabBar
        tabs={tabs}
        activeTab={activeTab}
        onChange={(tabId) => setActiveTab(tabId as TabId)}
      />
    </div>
  );
}
