import { useState } from "react"
import { ColumnDef, PaginationState, SortDirection, Updater } from "@tanstack/react-table"
import DataTable from "@/components/atoms/table/Table"

// Types
import { SortState } from "@/components/atoms/table/types"

// Define your data type
interface User {
  id: number
  name: string
  email: string
  role: string
}

// Example data
const users: User[] = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "User" },
  // ... more users
]

// Define columns
const columns: ColumnDef<User>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "role",
    header: "Role",
  },
]

export default function ExampleTable() {
  // Initialize pagination state
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  })

  // This function would typically make an API call to fetch paginated data
  const handlePaginationChange = (updaterOrValue: Updater<PaginationState>) => {
    setPagination(updaterOrValue)
    
    // Example of how you would fetch data from an API
    // const fetchData = async () => {
    //   const response = await fetch(
    //     `/api/users?page=${pagination.pageIndex}&pageSize=${pagination.pageSize}`
    //   )
    //   const data = await response.json()
    //   // Update your data state with the new data
    // }
    // fetchData()
  }

  const handleSortChange = (columnId: string, direction: SortDirection) => {
    console.log(columnId, direction)
  }

  const sortState: SortState = {
    column: "",
    direction: "desc",
  }

  return (
    <div className="w-full mx-auto py-2">
      <DataTable
        columns={columns}
        data={users}
        rowCount={50} // This would be the total count from your API
        pageIndex={pagination.pageIndex}
        pageSize={pagination.pageSize}
        onPaginationChange={handlePaginationChange}
        sortState={sortState}
        onSortChange={handleSortChange}
      />
    </div>
  )
} 