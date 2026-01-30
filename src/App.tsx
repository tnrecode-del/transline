import { ModeToggle } from '@/entities/mode-toggle';
import { Button } from '@/shared/ui/button';

function App() {
  return (
    <>
      <ModeToggle />

      <div className="flex min-h-svh flex-col items-center justify-center">
        <Button variant={'destructive'}>Click me</Button>
      </div>
    </>
  );
}

export default App;
