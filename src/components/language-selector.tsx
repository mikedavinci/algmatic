import { useTranslation } from 'react-i18next';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface Language {
  code: string;
  flag: string;
  name: string;
}

const languages: Language[] = [
  {
    code: 'en',
    flag: '🇺🇸',
    name: 'English',
  },
  {
    code: 'es',
    flag: '🇪🇸',
    name: 'Español',
  },
];

export function LanguageSelector() {
  const { i18n } = useTranslation();

  const changeLanguage = (value: string) => {
    i18n.changeLanguage(value);
  };

  const currentLanguage = languages.find((lang) => lang.code === i18n.language);

  return (
    <Select value={i18n.language} onValueChange={changeLanguage}>
      <SelectTrigger className="w-12 h-12 rounded-full p-2 border-2 border-primary/20 hover:border-primary/40 transition-colors">
        <SelectValue>
          <span className="text-lg" title={currentLanguage?.name}>
            {currentLanguage?.flag}
          </span>
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        {languages.map((lang) => (
          <SelectItem
            key={lang.code}
            value={lang.code}
            className="flex items-center"
          >
            <span className="text-lg">{lang.flag} </span>{' '}
            <span className="text-sm">{lang.name}</span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
