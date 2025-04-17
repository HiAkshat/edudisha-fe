import './App.css'
import BaseLayout from './layout/BaseLayout'
import { Outlet } from 'react-router'

function App() {
  return (
    <BaseLayout> 
      <Outlet />
    </BaseLayout>
  )
}

export default App
