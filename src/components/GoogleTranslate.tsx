// Import React and useState for state management
import React, { useState, useEffect } from 'react';

// Define interface for language object
interface Language {
code: string;
name: string;
}

// Define the TranslationComponent functional component
const TranslationComponent: React.FC = () => {
// State to track the selected language
const [selectedLanguage, setSelectedLanguage] = useState<string>('en');

// List of supported languages (7 as requested)
const languages: Language[] = [
   { code: 'en', name: 'English' },
   { code: 'ar', name: 'العربية' },
   { code: 'fr', name: 'Français' },
   { code: 'es', name: 'Español' },
   { code: 'de', name: 'Deutsch' },
   { code: 'zh-CN', name: '中文' },
   { code: 'ja', name: '日本語' },
];

// Initialize Google Translate widget
useEffect(() => {
   // Define the callback function for Google Translate
   (window).googleTranslateElementInit = () => {
      new (window).google.translate.TranslateElement(
      {
         pageLanguage: 'en', // Default language
         includedLanguages: 'en,ar,fr,es,de,zh-CN,ja', // Supported languages
         layout: (window).google.translate.TranslateElement.InlineLayout.SIMPLE,
         // autoDisplay: false, // Prevent default widget display
      },
      'google_translate_element'
      );
   };

   // Change language dynamically
   const translate = (lang: string) => {
      const selectField = document.querySelector('.goog-te-combo') as HTMLSelectElement;
      if (selectField) {
      selectField.value = lang;
      selectField.dispatchEvent(new Event('change'));
      }
   };

   // Translate to the initially selected language
   translate(selectedLanguage);
}, [selectedLanguage]);

// Handle language change
const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
   const newLang = e.target.value;
   setSelectedLanguage(newLang);
};

// Render the component
return (
   <div className="fixed top-4 right-4 bg-white shadow-lg rounded-lg p-4 z-50">
      {/* Hidden Google Translate widget container */}
      <div id="google_translate_element" style={{ display: 'none' }}></div>
      {/* Custom dropdown */}
      <select
      value={selectedLanguage}
      onChange={handleLanguageChange}
      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
      {languages.map((lang) => (
         <option key={lang.code} value={lang.code}>
            {lang.name}
         </option>
      ))}
      </select>
   </div>
);
};

// Export the component
export default TranslationComponent;
