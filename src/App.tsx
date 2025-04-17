import './App.css'
import ThemeToggle from '@/components/atoms/ThemeToggle'
import BaseLayout from './layout/BaseLayout'
import Table from '@/components/atoms/table'
import { columns, data } from '@/data/exampleTableData'
import ExampleTable from './components/atoms/table/example-data'

function App() {
  return (
    <BaseLayout> 
      <ThemeToggle />
      <ExampleTable />
    </BaseLayout>
  )
}

export default App
