// Modules
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
} from "@tanstack/react-table";

// Components
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

// Types
import { DataTableProps, SortState, SortDirection } from "./types";

// Icons
import { ArrowUpDown, ArrowUp } from "lucide-react";

// React
import React from "react";

export default function DataTable<TData, TValue>({
  columns,
  data,
  rowCount,
  pageIndex,
  pageSize,
  onPaginationChange,
  sortState,
  onSortChange,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    manualPagination: true,
    rowCount,
    state: {
      pagination: {
        pageIndex,
        pageSize,
      },
    },
    onPaginationChange,
  });

  const [internalSortState, setInternalSortState] =
    React.useState<SortState>(sortState);

  const handleSortClick = (columnId: string) => {
    let newDirection: SortDirection = "asc";

    if (internalSortState?.column === columnId) {
      newDirection = internalSortState.direction === "asc" ? "desc" : "asc";
    } else {
      newDirection = "asc";
    }

    console.log(columnId, newDirection);

    setInternalSortState({
      column: columnId,
      direction: newDirection,
    });

    onSortChange(columnId, newDirection);
  };

  return (
    <div className="w-full h-min border rounded-md">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    <div className="flex items-center gap-2">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                      {true && (
                        <Button
                          variant="ghost"
                          onClick={() => handleSortClick(header.column.id)}
                        >
                          {internalSortState?.column === header.column.id ? (
                            <ArrowUp
                              className={`h-4 w-4 transition-transform duration-200 ${
                                internalSortState?.direction === "asc"
                                  ? "rotate-180"
                                  : ""
                              }`}
                            />
                          ) : (
                            <ArrowUpDown className=" h-4 w-4" />
                          )}
                        </Button>
                      )}
                    </div>
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <div className="flex items-center justify-end gap-2 py-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
