import { homeSummary } from '../data/mockData';

export function HomeScreen() {
  return (
    <section className="screen">
      <section className="card">
        <h2>오늘의 여행 요약</h2>
        <p>{homeSummary.location} · {homeSummary.date}</p>
        <div className="stat-grid">
          <div className="stat-card">
            <strong>날씨</strong>
            <p>{homeSummary.weather}</p>
          </div>
          <div className="stat-card">
            <strong>기온</strong>
            <p>{homeSummary.temperature}</p>
          </div>
        </div>
        <p>{homeSummary.plan}</p>
      </section>

      <section className="card">
        <h2>추천 코디</h2>
        <p>오늘의 날씨와 활동에 어울리는 코디를 제안합니다.</p>
        <div className="tag-list">
          <span className="tag">날씨 반영</span>
          <span className="tag">무드 기반</span>
          <span className="tag">편안함</span>
        </div>
      </section>

      <section className="card">
        <h2>포토스폿 추천</h2>
        <p>오늘 방문하기 좋은 포토스폿을 보여드려요.</p>
        <div className="button-row">
          <button className="button-primary">지도에서 보기</button>
          <button className="button-secondary">필터</button>
        </div>
      </section>

      <section className="card">
        <h2>다이어리</h2>
        <p>{homeSummary.diaryStatus}</p>
        <div className="button-row">
          <button className="button-primary">다이어리 확인</button>
          <button className="button-secondary">편집하기</button>
        </div>
      </section>
    </section>
  );
}
