import { styleRecommendations } from '../data/mockData';

export function StyleScreen() {
  return (
    <section className="screen">
      <section className="card">
        <h2>코디 추천</h2>
        <p>날씨, 활동, 장소 분위기를 고려한 스타일 제안입니다.</p>
      </section>

      {styleRecommendations.map((item) => (
        <section key={item.title} className="card">
          <h3>{item.title}</h3>
          <p>{item.reason}</p>
          <div className="tag-list">
            <span className="tag">{item.mood}</span>
            <span className="tag">추천 이유 확인</span>
          </div>
        </section>
      ))}
    </section>
  );
}
