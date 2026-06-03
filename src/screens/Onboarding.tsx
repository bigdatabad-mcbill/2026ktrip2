import { Locale, locales, translations } from '../i18n';

interface OnboardingProps {
  locale: Locale;
  onChangeLocale: (locale: Locale) => void;
  onComplete: () => void;
}

export function Onboarding({ locale, onChangeLocale, onComplete }: OnboardingProps) {
  const t = translations[locale].onboarding;

  return (
    <section className="screen">
      <section className="card">
        <h2>{t.title}</h2>
        <p>{t.description}</p>
      </section>

      <section className="card">
        <h2>{t.chooseLanguage}</h2>
        <div className="button-row">
          {locales.map((item) => (
            <button
              key={item}
              className={`button-secondary ${locale === item ? 'active' : ''}`}
              onClick={() => onChangeLocale(item)}
            >
              {t.languageLabels[item]}
            </button>
          ))}
        </div>
      </section>

      <section className="card">
        <button className="button-primary" onClick={onComplete}>
          {t.start}
        </button>
      </section>
    </section>
  );
}
