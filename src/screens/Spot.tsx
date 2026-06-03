import { photoSpots } from '../data/mockData';

export function SpotScreen() {
  return (
    <section className="screen">
      <section className="card">
        <h2>포토스폿</h2>
        <p>추천 장소를 보고 오늘의 촬영 포인트를 선택하세요.</p>
        <div className="button-row">
          <button className="button-primary">실내 / 실외 필터</button>
          <button className="button-secondary">거리순 정렬</button>
        </div>
      </section>

      {photoSpots.map((spot) => (
        <section key={spot.name} className="spot-item">
          <h3>{spot.name}</h3>
          <p>{spot.mood}</p>
          <div className="spot-meta">
            <span>{spot.distance}</span>
            <span>{spot.crowd}</span>
            <span>{spot.bestTime}</span>
          </div>
        </section>
      ))}
    </section>
  );
}
