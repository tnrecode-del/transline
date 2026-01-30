import { Moon, Sun } from 'lucide-react';

import { Button } from '@/shared/ui/button';
import { useTheme } from '@/shared/hooks/use-theme';

export function ModeToggle() {
  const { toggle } = useTheme();

  return (
    <Button variant="outline" size="icon" onClick={() => toggle()}>
      <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
    </Button>
  );
}
