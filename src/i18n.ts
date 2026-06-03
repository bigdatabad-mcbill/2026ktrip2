export type Locale = 'ko' | 'en';

export const locales: Locale[] = ['ko', 'en'];

export const translations = {
  ko: {
    appTitle: '오늘의 여행을 한 흐름으로',
    eyebrow: 'CloseTrip',
    tabs: {
      home: 'Home',
      style: 'Style',
      spot: 'Spot',
      diary: 'Diary',
      settings: 'My'
    },
    onboarding: {
      title: '오늘의 여행을 더 쉽게 시작해보세요.',
      description: '언어와 여행 스타일을 선택하면 맞춤형 추천이 제공됩니다.',
      chooseLanguage: '언어를 선택하세요',
      start: '시작하기',
      languageLabels: {
        ko: '한국어',
        en: 'English'
      }
    },
    home: {
      title: '오늘의 여행 요약',
      description: '오늘의 핵심 의사결정을 빠르게 확인하세요.',
      weather: '날씨',
      temp: '기온',
      plan: '추천 플랜',
      diaryStatus: '오늘 다이어리 생성 준비 완료',
      actionPrimary: '다음 이동',
      actionSecondary: '다이어리 보기'
    }
  },
  en: {
    appTitle: 'Travel planning in one flow',
    eyebrow: 'CloseTrip',
    tabs: {
      home: 'Home',
      style: 'Style',
      spot: 'Spot',
      diary: 'Diary',
      settings: 'My'
    },
    onboarding: {
      title: 'Start your trip more easily today.',
      description: 'Choose a language and travel style for personalized recommendations.',
      chooseLanguage: 'Choose your language',
      start: 'Get Started',
      languageLabels: {
        ko: '한국어',
        en: 'English'
      }
    },
    home: {
      title: 'Today’s travel summary',
      description: 'Quickly review the key decisions for today.',
      weather: 'Weather',
      temp: 'Temperature',
      plan: 'Suggested plan',
      diaryStatus: 'Diary ready to create today',
      actionPrimary: 'Start trip',
      actionSecondary: 'View diary'
    }
  }
} as const;

export type Translations = typeof translations[keyof typeof translations];
