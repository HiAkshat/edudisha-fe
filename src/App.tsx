import './App.css'
import { Button } from '@/components/ui/button'
import ThemeToggle from '@/components/atoms/ThemeToggle'
import BaseLayout from './layout/BaseLayout'

function App() {
  return (
    <BaseLayout> 
      <ThemeToggle />
      Hey
    </BaseLayout>
  )
}

export default App
