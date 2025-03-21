export const useTheme = () => {
  const isDark = useDark({
    selector: "html",
    attribute: "class",
    valueDark: "dark-mode",
    valueLight: "light-mode",
  });
  const toggleDark = useToggle(isDark);

  return { isDark, toggleDark };
};
