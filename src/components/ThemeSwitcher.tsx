import { Monitor, Moon, Sun, Sparkles, Palette } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Button } from './ui/button';

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const themes = [
    { id: 'console-dark' as const, label: 'Console Dark', icon: Monitor },
    { id: 'console-light' as const, label: 'Console Light', icon: Sun },
    { id: 'holographic-dark' as const, label: 'Holographic Dark', icon: Moon },
    { id: 'holographic-light' as const, label: 'Holographic Light', icon: Sparkles },
  ];

  const currentTheme = themes.find(t => t.id === theme);

  return (
    <div className="fixed top-6 right-6 z-50">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="gap-2 bg-card/80 backdrop-blur-md border-border shadow-lg hover:bg-card/90"
          >
            {currentTheme && <currentTheme.icon className="w-4 h-4" />}
            <span className="hidden sm:inline">{currentTheme?.label || 'Theme'}</span>
            <Palette className="w-4 h-4 sm:hidden" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56 bg-card/95 backdrop-blur-md">
          <DropdownMenuLabel>Select Theme</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {themes.map(({ id, label, icon: Icon }) => (
            <DropdownMenuItem
              key={id}
              onClick={() => setTheme(id)}
              className={`gap-2 cursor-pointer ${
                theme === id ? 'bg-primary/10 text-primary' : ''
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{label}</span>
              {theme === id && <span className="ml-auto">✓</span>}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
