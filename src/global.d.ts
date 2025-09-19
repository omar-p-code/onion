export {};

declare global {
   interface Window {
      googleTranslateElementInit?: () => void;
      google: {
         translate: {
         TranslateElement: new (
            options: {
               pageLanguage: string;
               includedLanguages?: string;
               layout?: unknown;
            },
            elementId: string
         ) => void;
         };
      };
   }
}

export {};

export {};

declare global {
   interface Window {
      google: typeof google;
   }

   namespace google {
      namespace translate {
         class TranslateElement {
         constructor(
            options: {
               pageLanguage: string;
               includedLanguages?: string;
               layout?: unknown;
            },
            elementId: string
         );
         }
      }
   }
}

