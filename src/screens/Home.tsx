import { Translations } from '../i18n';
import { homeSummary } from '../data/mockData';

interface HomeScreenProps {
  t: Translations;
}

export function HomeScreen({ t }: HomeScreenProps) {
  return (
    <section className="screen">
      <section className="card">
        <h2>{t.home.title}</h2>
        <p>{homeSummary.location} · {homeSummary.date}</p>
        <div className="stat-grid">
          <div className="stat-card">
            <strong>{t.home.weather}</strong>
            <p>{homeSummary.weather}</p>
          </div>
          <div className="stat-card">
            <strong>{t.home.temp}</strong>
            <p>{homeSummary.temperature}</p>
          </div>
        </div>
        <p>{homeSummary.plan}</p>
      </section>

      <section className="card">
        <h2>{t.home.description}</h2>
        <p>{homeSummary.diaryStatus}</p>
        <div className="button-row">
          <button className="button-primary">{t.home.actionPrimary}</button>
          <button className="button-secondary">{t.home.actionSecondary}</button>
        </div>
      </section>
    </section>
  );
}
