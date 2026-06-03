# CloseTrip MVP 사용 방법

## 개요
이 프로젝트는 CloseTrip 여행 서비스의 웹 MVP 프로토타입입니다. React + Vite + TypeScript 기반으로 구성되어 있으며, 홈, 코디, 포토스폿, 다이어리, 설정 화면을 제공합니다.

## 시스템 요구 사항
- Node.js 18 이상
- npm 9 이상

## 설치 및 실행
1. 터미널에서 리포지토리 루트로 이동합니다:
   ```bash
   cd /workspaces/2026ktrip2
   ```
2. 의존성을 설치합니다:
   ```bash
   npm install
   ```
3. 개발 서버를 실행합니다:
   ```bash
   npm run dev
   ```
4. 브라우저에서 다음 주소를 엽니다:
   ```text
   http://localhost:5173
   ```

## 프로덕션 빌드
배포용 빌드를 생성하려면 다음을 실행합니다:
```bash
npm run build
```

빌드 결과는 `dist/` 폴더에 생성됩니다.

## 화면 구성
- `Home` : 오늘의 여행 요약과 핵심 카드
- `Style` : 코디 추천 및 추천 근거
- `Spot` : 포토스폿 장소 리스트 및 필터 버튼
- `Diary` : 자동 생성된 여행 다이어리 항목
- `My` : 언어, 단위, 권한 설정 정보

## 주요 파일
- `src/App.tsx` : 앱 구조 및 탭 내비게이션
- `src/screens/*` : 각 화면 구성 요소
- `src/components/TabBar.tsx` : 하단 탭 바 컴포넌트
- `src/data/mockData.ts` : 화면에 표시되는 샘플 데이터
- `src/styles.css` : 전체 UI 스타일

## 참고
현재 프로젝트는 웹 기반 MVP 프로토타입이며, 이후에는 다음 확장을 목표로 합니다:
- 다국어 리소스 추가
- 위치/날씨/장소 API 연동
- 자동 다이어리 생성 기능 고도화
- 모바일 앱 이전
