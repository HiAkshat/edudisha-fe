// Modules
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  VisibilityState,
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
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";

// Types
import { DataTableProps, SortState, SortDirection } from "./types";

// Icons
import {
  ArrowUpDown,
  ArrowUp,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

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
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});

  const [internalSortState, setInternalSortState] =
    React.useState<SortState>(sortState);

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
      columnVisibility,
    },
    onPaginationChange,
    onColumnVisibilityChange: setColumnVisibility,
  });

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
    <div className="w-full h-min border rounded-md flex flex-col gap-2 p-2">
      <div className="flex flex-end">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
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

      <div className="flex items-center justify-end gap-2">
        <Pagination className="justify-end">
          <PaginationContent>
            <PaginationItem>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
              >
                <ChevronLeft className="h-4 w-4 mt-0.5" />
                Previous
              </Button>
            </PaginationItem>

            {/* First page */}
            <PaginationItem>
              <PaginationLink
                onClick={() => table.setPageIndex(0)}
                isActive={table.getState().pagination.pageIndex === 0}
              >
                1
              </PaginationLink>
            </PaginationItem>

            {/* Show ellipsis if current page is far from start */}
            {table.getState().pagination.pageIndex > 2 && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}

            {/* Show pages around current page */}
            {Array.from({ length: 5 }, (_, i) => {
              const pageIndex = table.getState().pagination.pageIndex - 2 + i;
              if (pageIndex > 0 && pageIndex < table.getPageCount() - 1) {
                return (
                  <PaginationItem key={pageIndex}>
                    <PaginationLink
                      onClick={() => table.setPageIndex(pageIndex)}
                      isActive={
                        table.getState().pagination.pageIndex === pageIndex
                      }
                    >
                      {pageIndex + 1}
                    </PaginationLink>
                  </PaginationItem>
                );
              }
              return null;
            })}

            {/* Show ellipsis if current page is far from end */}
            {table.getState().pagination.pageIndex <
              table.getPageCount() - 3 && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}

            {/* Last page */}
            {table.getPageCount() > 1 && (
              <PaginationItem>
                <PaginationLink
                  onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                  isActive={
                    table.getState().pagination.pageIndex ===
                    table.getPageCount() - 1
                  }
                >
                  {table.getPageCount()}
                </PaginationLink>
              </PaginationItem>
            )}

            <PaginationItem>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
              >
                Next
                <ChevronRight className="h-4 w-4 mt-0.5" />
              </Button>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
