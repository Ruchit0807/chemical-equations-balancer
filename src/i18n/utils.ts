import { ui, defaultLang, languages, showDefaultLang, ogLocales, type Lang } from './ui';

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang && lang in languages) {
    return lang as Lang;
  }
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: string): string {
    const keys = key.split('.');
    
    // Check in requested lang
    let current: any = ui[lang];
    for (const k of keys) {
      if (current && typeof current === 'object' && k in current) {
        current = current[k];
      } else {
        current = undefined;
        break;
      }
    }
    if (typeof current === 'string') return current;

    // Fallback to defaultLang
    let fallback: any = ui[defaultLang];
    for (const k of keys) {
      if (fallback && typeof fallback === 'object' && k in fallback) {
        fallback = fallback[k];
      } else {
        return key;
      }
    }
    return typeof fallback === 'string' ? fallback : key;
  };
}

export function stripLocalePrefix(path: string): string {
  if (!path) return '/';
  const [pathWithoutHash, hash] = path.split('#');
  const clean = pathWithoutHash.replace(/^\//, '').replace(/\/$/, '');
  const hashPart = hash ? `#${hash}` : '';

  for (const localeKey of Object.keys(languages)) {
    if (clean === localeKey) {
      return `/${hashPart}`;
    } else if (clean.startsWith(`${localeKey}/`)) {
      const stripped = clean.substring(localeKey.length + 1);
      return `/${stripped}${hashPart}`;
    }
  }

  return path;
}

export function useTranslatedPath(lang: Lang) {
  return function translatePath(rawPath: string, l: Lang = lang) {
    const stripped = stripLocalePrefix(rawPath);
    const [pathWithoutHash, hash] = stripped.split('#');
    const cleanPath = pathWithoutHash.startsWith('/') ? pathWithoutHash : `/${pathWithoutHash}`;
    const hashPart = hash ? `#${hash}` : '';

    if (!showDefaultLang && l === defaultLang) {
      return (cleanPath === '' ? '/' : cleanPath) + hashPart;
    }

    if (cleanPath === '/' || cleanPath === '') {
      return `/${l}/${hashPart}`;
    }

    const normalizedSubpath = cleanPath.replace(/^\//, '');
    return `/${l}/${normalizedSubpath}${hashPart}`;
  };
}

export function getAbsoluteLocaleUrl(siteUrl: string, lang: Lang, rawPath: string = '/'): string {
  const base = siteUrl.replace(/\/$/, '');
  const stripped = stripLocalePrefix(rawPath);
  const [pathOnly] = stripped.split('#');
  const cleanPath = pathOnly.replace(/^\//, '').replace(/\/$/, '');

  if (!showDefaultLang && lang === defaultLang) {
    return cleanPath ? `${base}/${cleanPath}/` : `${base}/`;
  }

  return cleanPath ? `${base}/${lang}/${cleanPath}/` : `${base}/${lang}/`;
}

export function getOgLocale(lang: Lang): string {
  return ogLocales[lang] || 'en_US';
}

export function getLanguageName(lang: Lang): string {
  return languages[lang] || languages[defaultLang];
}
