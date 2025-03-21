import { PrimeIcons } from '@primevue/core/api';

export const useTheme = () => {
  const isDark = useDark({
    selector: 'html',
    attribute: 'class',
    valueDark: 'dark-mode',
    valueLight: 'light-mode',
  });
  const toggleDark = useToggle(isDark);

  const themeIcon = computed<string>(() => {
    return isDark.value ? PrimeIcons.MOON : PrimeIcons.SUN;
  });

  return { isDark, toggleDark, themeIcon };
};
