import React, { useState } from 'react';
// import { useTranslation } from 'react-i18next';

const languageMap = {
  Hindi: 'hi',
  English: 'en',
  Bengali: 'bn',
  Telugu: 'te',
  Marathi: 'mr',
  Tamil: 'ta',
  Gujarati: 'gu',
  Kannada: 'kn',
  Malayalam: 'ml',
  Odia: 'or',
  Punjabi: 'pa',
  Assamese: 'as',
  Urdu: 'ur',
};

const languages = Object.keys(languageMap);

const LanguageSelector = () => {
  const { t, i18n } = useTranslation();
  const [selected, setSelected] = useState(i18n.language);

  const handleSelect = (lang) => {
    setSelected(lang);
    i18n.changeLanguage(languageMap[lang]);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f3f5ed] py-16">
      <h1 className="text-4xl font-extrabold text-[#f7931e] mb-4">{t('select_language')}</h1>
      <p className="text-lg text-gray-700 mb-10 max-w-xl text-center">Choose your preferred language to experience the website in your mother tongue.</p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-10">
        {languages.map((lang) => (
          <button
            key={lang}
            className={`px-6 py-3 rounded-full font-semibold shadow text-lg transition border-2 border-[#f7931e] hover:bg-[#f7931e] hover:text-white ${selected === lang ? 'bg-[#f7931e] text-white' : 'bg-white text-[#f7931e]'}`}
            onClick={() => handleSelect(lang)}
          >
            {lang}
          </button>
        ))}
      </div>
      {selected && (
        <div className="mt-8 text-xl text-[#f7931e] font-bold animate-pulse">
          {t('select_language')}: <span className="underline">{selected}</span>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector; 