import type { ThemeMode } from '$types/models';

export const theme = $state<{ mode: ThemeMode }>({
  mode: 'dark'
});

export function setTheme(mode: ThemeMode) {
  theme.mode = mode;
  if (typeof document !== 'undefined') {
    document.documentElement.dataset.theme = mode;
    localStorage.setItem('leo-theme', mode);
  }
}

export function toggleTheme() {
  setTheme(theme.mode === 'dark' ? 'light' : 'dark');
}
