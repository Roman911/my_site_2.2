
export let lang;
export let langT;
const languageBrowser = navigator.language;
if (languageBrowser === 'uk-UA' || languageBrowser === 'uk') {
  lang = 0;
  langT = 'uk';
} else if (languageBrowser === 'ru-RU' || languageBrowser === 'ru') {
  lang = 1;
  langT = 'ru';
} else {
  lang = 2;
  langT = 'en'
}