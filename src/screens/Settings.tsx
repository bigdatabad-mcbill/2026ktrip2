import { settingsOptions } from '../data/mockData';

export function SettingsScreen() {
  return (
    <section className="screen">
      <section className="card">
        <h2>설정</h2>
        <p>언어, 단위, 권한 정보 등을 확인하고 변경할 수 있습니다.</p>
      </section>

      {settingsOptions.map((option) => (
        <section key={option.label} className="setting-item">
          <h3>{option.label}</h3>
          <p className="setting-meta">{option.value}</p>
        </section>
      ))}
    </section>
  );
}
