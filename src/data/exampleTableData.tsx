import { ColumnDef } from "@tanstack/react-table"

export interface Person {
  id: string
  name: string
  email: string
  role: string
  status: "active" | "inactive" | "pending"
  lastActive: Date
  actions?: string
}

export const columns: ColumnDef<Person>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gray-200" />
          <span>{row.getValue("name")}</span>
        </div>
      )
    },
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "role",
    header: "Role",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string
      return (
        <span
          className={`px-2 py-1 rounded-full text-xs ${
            status === "active"
              ? "bg-green-100 text-green-800"
              : status === "inactive"
              ? "bg-red-100 text-red-800"
              : "bg-yellow-100 text-yellow-800"
          }`}
        >
          {status}
        </span>
      )
    },
  },
  {
    accessorKey: "lastActive",
    header: "Last Active",
    cell: ({ row }) => {
      const date = new Date(row.getValue("lastActive"))
      return date.toLocaleDateString()
    },
  },
  {
    accessorKey: "actions",
    header: "Actions",
    cell: () => {
      return (
        <div className="flex gap-2">
          <button className="text-blue-600 hover:text-blue-800">Edit</button>
          <button className="text-red-600 hover:text-red-800">Delete</button>
        </div>
      )
    },
  },
]

export const data: Person[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    role: "Admin",
    status: "active",
    lastActive: new Date("2024-03-15"),
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    role: "User",
    status: "inactive",
    lastActive: new Date("2024-03-10"),
  },
  {
    id: "3",
    name: "Bob Johnson",
    email: "bob@example.com",
    role: "Editor",
    status: "pending",
    lastActive: new Date("2024-03-14"),
  },
  {
    id: "4",
    name: "Alice Brown",
    email: "alice@example.com",
    role: "User",
    status: "active",
    lastActive: new Date("2024-03-16"),
  },
  {
    id: "5",
    name: "Charlie Wilson",
    email: "charlie@example.com",
    role: "Editor",
    status: "active",
    lastActive: new Date("2024-03-13"),
  },
  {
    id: "6",
    name: "Diana Miller",
    email: "diana@example.com",
    role: "User",
    status: "inactive",
    lastActive: new Date("2024-03-09"),
  },
  {
    id: "7",
    name: "Ethan Davis",
    email: "ethan@example.com",
    role: "Admin",
    status: "active",
    lastActive: new Date("2024-03-16"),
  },
  {
    id: "8",
    name: "Fiona Clark",
    email: "fiona@example.com",
    role: "User",
    status: "pending",
    lastActive: new Date("2024-03-12"),
  },
  {
    id: "9",
    name: "George White",
    email: "george@example.com",
    role: "Editor",
    status: "active",
    lastActive: new Date("2024-03-15"),
  },
  {
    id: "10",
    name: "Hannah Lee",
    email: "hannah@example.com",
    role: "User",
    status: "inactive",
    lastActive: new Date("2024-03-08"),
  },
] 