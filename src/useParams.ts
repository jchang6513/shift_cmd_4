import { useEffect, useMemo, useState } from "react";
import { DEFAULT_CODE, DEFAULT_LANGUAGE, DEFAULT_THEME, LANGUAGES, THEMES } from "./constants";
import { Option } from "./types";

export const useParams = () => {
  const [language, setLanguage] = useState<Option>();
  const [theme, setTheme] = useState<Option>();
  const [code, setCode] = useState('');

  useEffect(() => {
    let shouldReplace = false
    const queryParams = new URLSearchParams(window.location.search);
    if (code && code !== DEFAULT_CODE) {
      queryParams.set("code", code);
      shouldReplace = true
    }
    if (language && language !== DEFAULT_LANGUAGE) {
      queryParams.set("language", language.value);
      shouldReplace = true
    }
    if (theme && theme !== DEFAULT_THEME) {
      queryParams.set("theme", theme.value);
      shouldReplace = true
    }

    if (shouldReplace) history.replaceState(null, '', "?"+queryParams.toString());
  }, [code, language, theme])

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const queryCode = queryParams.get('code')
    const queryLanguage = queryParams.get('language')
    const queryTheme = queryParams.get('theme')
    setCode(queryCode || DEFAULT_CODE)
    setLanguage(LANGUAGES.find((l) => l.value === queryLanguage) || DEFAULT_LANGUAGE)
    setTheme(THEMES.find((t) => t.value === queryTheme) || DEFAULT_THEME)
  }, [])

  return useMemo(() => ({
    code,
    setCode,
    language,
    setLanguage,
    theme,
    setTheme,
  }), [code, setCode, language, setLanguage, theme, setTheme])
}
