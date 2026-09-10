import { ui, defaultLang, type Lang } from './ui';

export function useTranslations(lang: Lang) {
  return ui[lang] ?? ui[defaultLang];
}

export function localizedPath(lang: Lang, path: string) {
  const clean = path.replace(/^\/(en|fr)/, '') || '/';
  if (lang === defaultLang) return clean;
  return `/${lang}${clean === '/' ? '' : clean}`;
}
