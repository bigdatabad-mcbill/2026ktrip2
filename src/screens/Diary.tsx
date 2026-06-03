import { diaryEntries } from '../data/mockData';

export function DiaryScreen() {
  return (
    <section className="screen">
      <section className="card">
        <h2>여행 다이어리</h2>
        <p>방문 장소와 사진을 바탕으로 자동 생성된 기록입니다.</p>
      </section>

      {diaryEntries.map((entry) => (
        <section key={entry.title} className="diary-item">
          <h3>{entry.title}</h3>
          <p>{entry.summary}</p>
          <div className="diary-meta">
            <span>{entry.timestamp}</span>
            {entry.tags.map((tag) => (
              <span key={tag} className="tag">#{tag}</span>
            ))}
          </div>
        </section>
      ))}
    </section>
  );
}
