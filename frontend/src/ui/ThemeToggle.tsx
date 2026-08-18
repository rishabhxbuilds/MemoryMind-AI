import { useTheme } from '@/contexts/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="rounded-full border border-surface/80 bg-surface px-3 py-2 text-sm font-medium text-muted transition hover:bg-surface/90"
    >
      {theme === 'light' ? 'Dark' : 'Light'}
    </button>
  );
};

export default ThemeToggle;
