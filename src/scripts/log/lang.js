
export let lang;
const languageBrowser = navigator.language;
if (languageBrowser === 'uk-UA' || languageBrowser === 'uk') {
  lang = 0;
} else if (languageBrowser === 'ru-RU' || languageBrowser === 'ru') {
  lang = 1;
} else {
  lang = 2;
}